"use server"

import { addSubscriber, removeSubscriber } from "@/lib/redis"

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Extract email from form data
    const email = formData.get("email") as string

    if (!email) {
      return {
        success: false,
        message: "Email is required",
      }
    }

    // Store the email in Upstash Redis
    return await addSubscriber(email)
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

export async function unsubscribeFromNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string

    if (!email) {
      return {
        success: false,
        message: "Email is required",
      }
    }

    const success = await removeSubscriber(email)

    return {
      success,
      message: success ? "You have been successfully unsubscribed." : "Error unsubscribing. Please try again.",
    }
  } catch (error) {
    console.error("Newsletter unsubscribe error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

