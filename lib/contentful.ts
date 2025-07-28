import { Asset, createClient, EntryFieldTypes } from "contentful";

export interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface ContentfulLocation {
  fields: {
    lat: string;
    lon: string;
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
    subtitle: string
    date: string
    times: string[]
    location: EntryFieldTypes.Location,
    locationName: string
    registerLink: string
    description: string
    eventType: string
    slug: string
    image: Asset,
    gpxFile?: Asset,
  }
}

// Initialize Contentful client
const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  VERCEL_ENV,
} = process.env

if (!CONTENTFUL_SPACE_ID) {
  throw new Error("CONTENTFUL_SPACE_ID environment variable must be defined")
}

const isPreview = VERCEL_ENV === "preview" || "dev"
const accessToken = isPreview
  ? CONTENTFUL_PREVIEW_ACCESS_TOKEN
  : CONTENTFUL_ACCESS_TOKEN

if (!accessToken) {
  throw new Error(
    `Missing Contentful access token for ${isPreview ? "preview" : "production"} environment`
  )
}

export const contentfulClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken,
  ...(isPreview ? { host: "preview.contentful.com" } : {}),
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
      "fields.eventType[ne]": "Regular Run", // Exclude regular runs
      include: 3,
    })

    return response.items as unknown as EventEntry[]
  } catch (error) {
    console.error("Error fetching events from Contentful:", error)
    return []
  }
}

// Fetch all events from Contentful
export async function getAllEvents() {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "eventEntry", // Use your actual content type ID here
      order: ["fields.date"], // Correct syntax for ordering
      limit: 100,
      "fields.eventType[ne]": "Regular Run", // Exclude regular runs
      include: 3,
    })

    return response.items as unknown as EventEntry[] || []
  } catch (error) {
    console.error("Error fetching events from Contentful:", error)
    return [];
  }
}

// Fetch all events from Contentful
export async function getAllEventsThisYear() {
  try {
    const today = new Date();
    const yearEnd = new Date(today.getFullYear()+1, today.getMonth(), today.getDay(), 23, 59, 59).toISOString(); // December 31st of this year
    const todayISOString = today.toISOString(); // Today’s date in ISO format

    const response = await contentfulClient.getEntries({
      content_type: "eventEntry", // Your Contentful content type ID
      order: ["fields.date"], // Order by event date (ascending)
      limit: 100,
      include: 3,
      "fields.date[gte]": todayISOString, // Only events from today onwards
      "fields.date[lte]": yearEnd, // Only events before the end of this year
      "fields.eventType[ne]": "Regular Run", // Exclude regular runs
    });

    return response.items as unknown as EventEntry[] || []
  } catch (error) {
    console.error("Error fetching events from Contentful:", error)
    return [];
  }
}

// Fetch regular run events from Contentful
export async function getRegularRuns(): Promise<EventEntry[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "eventEntry",
      order: ["fields.date"],
      "fields.eventType": "Regular Run",
      limit: 10,
      include: 3,
    })

    return response.items as unknown as EventEntry[]
  } catch (error) {
    console.error("Error fetching regular runs from Contentful:", error)
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
      include: 3,
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

