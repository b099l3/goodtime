import { Redis } from "@upstash/redis"
import { z } from "zod"

// Create Redis client from environment variables
// UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN will be automatically
// added when you integrate Upstash with your Vercel project
export const redis = Redis.fromEnv()

// Email schema for validation
export const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

// Keys for Redis
const SUBSCRIBERS_SET = "newsletter:subscribers" // Set of all emails
const SUBSCRIBERS_ZSET = "newsletter:subscribers:timestamps" // Sorted set with timestamps

export type Subscriber = {
  email: string
  subscribedAt: number
}

// Add a new subscriber
export async function addSubscriber(email: string): Promise<{ success: boolean; message: string }> {
  try {
    // Validate email
    emailSchema.parse({ email })

    // Check if the subscriber already exists
    const exists = await redis.sismember(SUBSCRIBERS_SET, email)

    if (exists === 1) {
      return {
        success: true,
        message: "You're already subscribed to our newsletter!",
      }
    }

    const timestamp = Date.now()

    // Use a transaction to ensure both operations succeed or fail together
    await redis
      .pipeline()
      // Add to set for quick existence checks
      .sadd(SUBSCRIBERS_SET, email)
      // Add to sorted set with timestamp for ordered retrieval
      .zadd(SUBSCRIBERS_ZSET, { score: timestamp, member: email })
      .exec()

    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    }
  } catch (error) {
    console.error("Error adding subscriber:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

// Get all subscribers (for admin purposes)
export async function getSubscribers(): Promise<Subscriber[]> {
  try {
    // Get all emails with their timestamps, sorted by most recent first
    const results = await redis.zrange(SUBSCRIBERS_ZSET, 0, -1, {
      withScores: true,
      rev: true,
    })

    // Format the results
    return results.map((item) => {
      // Each item is an array with [email, score]
      const [email, score] = item as [string, number]
      return {
        email,
        subscribedAt: score
      }
    })
  } catch (error) {
    console.error("Error fetching subscribers:", error)
    return []
  }
}

// Get total subscriber count
export async function getSubscriberCount(): Promise<number> {
  try {
    return await redis.scard(SUBSCRIBERS_SET)
  } catch (error) {
    console.error("Error fetching subscriber count:", error)
    return 0
  }
}

// Remove a subscriber (for unsubscribe functionality)
export async function removeSubscriber(email: string): Promise<boolean> {
  try {
    await redis.pipeline().srem(SUBSCRIBERS_SET, email).zrem(SUBSCRIBERS_ZSET, email).exec()

    return true
  } catch (error) {
    console.error("Error removing subscriber:", error)
    return false
  }
}

