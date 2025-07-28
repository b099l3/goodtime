import AddToCalendar from "@/components/add-to-calendar"
import GpxMapWrapper from "@/components/gpx-map-wrapper"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { getAllEvents, getEventBySlug, getRegularRuns } from "@/lib/contentful"
import { formatDate } from "@/lib/utils"
import type { Asset } from "contentful"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

export const revalidate = 3600 // Revalidate every hour

// Generate static params for all events
export async function generateStaticParams() {
  const events = await getAllEvents()
  const runs = await getRegularRuns()

  return [...events, ...runs].map((event) => ({
    slug: event.fields.slug,
  }))
}

export default async function EventPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound()
  }

  const eventDate = new Date(event.fields.date)

  // Create an end date 2 hours after the start date
  const eventEndDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000)

  // Prepare event data for the calendar
  const calendarEvent = {
    title: event.fields.title,
    description: event.fields.description,
    location: event.fields.locationName,
    startDate: eventDate,
    endDate: eventEndDate,
  }

  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <div className="text-primary p-8 bg-gradient-to-r from-primary to-primary/60">
        <div className="container">
          <h1 className="text-5xl font-bold mb-2 text-primary-foreground">{event.fields.title}</h1>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-6">
            {event.fields.image && (
              <div className="mb-4 rounded-md overflow-hidden">
                <Image
                  src={`https:${event.fields.image?.fields?.file?.url}`}
                  alt={event.fields.title || "Event Image"}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            )}
            <div className="flex flex-wrap gap-4 text-primary/90 py-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {event.fields.eventType === "Regular Run" ? (
                event.fields.times?.map((time, index) => (
                  <span key={index} className="text-sm">{time}</span>
                ))
              ) : (
                <span className="text-sm">{formatDate(event.fields.date)}</span>
              )}
            </div>
            {event.fields.times && (
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">{event.fields.times.join(', ')}</span>
              </div>
            )}
            <a target="_blank"  href={event.fields.location ? `https://www.google.com/maps/search/?api=1&query=${event.fields.location.lat},${event.fields.location.lon}` : '#'}>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{event.fields.locationName}</span>
              </div>
            </a>
          </div>
            <h2 className="text-xl font-semibold mb-2">Event Details</h2>
            {event.fields.gpxFile && (
              <div className="mb-10">
                <GpxMapWrapper gpxUrl={`https:${(event.fields.gpxFile as Asset).fields?.file?.url ?? ''}`} />
              </div>
            )}
            <div className="prose max-w-none">
              <p>{event.fields.description}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 p-12">
            {event.fields.registerLink && (
              <Button size="lg" className="flex-3" asChild>
                <a target="_blank" href={event.fields.registerLink}>Register for this Event</a>
              </Button>
            )}
            {event.fields.eventType != "Regular Run" && (
              <AddToCalendar event={calendarEvent} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

