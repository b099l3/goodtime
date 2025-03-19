import { createClient, EntryFieldTypes } from "contentful";

export interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}

// This matches Contentful's actual return type structure
export type EventEntry = {
  sys: {
    id: string
    contentType: {
      sys: {
        id: string
      }
    }
  }
  fields: {
    title: string
    date: string
    location: EntryFieldTypes.Location,
    locationName: string
    registerLink: string
    description: string
    eventType: string
    slug: string
    image: EntryFieldTypes.AssetLink,
  }
}

// Initialize Contentful client
const isDev = process.env.IS_DEV === "dev";
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.DEV
    ? process.env.CONTENTFUL_PREVIEW_TOKEN || ""
    : process.env.CONTENTFUL_DELIVERY_TOKEN || "",
  // host: isDev ? "preview.contentful.com" : "cdn.contentful.com",
})

// Fetch upcoming events from Contentful
export async function getUpcomingEvents(limit = 6): Promise<EventEntry[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "eventEntry", // Use your actual content type ID here
      order: ["fields.date"], // Correct syntax for ordering
      limit,
      // Only fetch events that are today or in the future
      "fields.date[gte]": new Date().toISOString().split("T")[0],
      include: 2,
    })

    return response.items as unknown as EventEntry[]
  } catch (error) {
    console.error("Error fetching events from Contentful:", error)
    return []
  }
}

// Fetch all events from Contentful
export async function getAllEvents(): Promise<EventEntry[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "eventEntry", // Use your actual content type ID here
      order: ["fields.date"], // Correct syntax for ordering
      limit: 100,
      include: 2,
    })

    return response.items as unknown as EventEntry[]
  } catch (error) {
    console.error("Error fetching events from Contentful:", error)
    return []
  }
}

// Fetch a single event by slug
export async function getEventBySlug(slug: string): Promise<EventEntry | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "eventEntry", // Use your actual content type ID here
      "fields.slug": slug, // This is the correct syntax
      limit: 1,
      include: 2,
    })

    if (response.items.length === 0) {
      return null
    }

    return response.items[0] as unknown as EventEntry
  } catch (error) {
    console.error("Error fetching event from Contentful:", error)
    return null
  }
}

