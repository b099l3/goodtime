import AddToCalendar from "@/components/add-to-calendar"
import { Button } from "@/components/ui/button"
import { getAllEvents, getEventBySlug } from "@/lib/contentful"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export const revalidate = 3600 // Revalidate every hour

// Generate static params for all events
export async function generateStaticParams() {
  const events = await getAllEvents()

  return events.map((event) => ({
    slug: event.fields.slug,
  }))
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
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
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <Link
            href="/events"
            className="inline-flex items-center text-sm text-primary-foreground/80 hover:text-primary-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all events
          </Link>
          <h1 className="text-4xl font-bold mb-4">{event.fields.title}</h1>
          <div className="flex flex-wrap gap-4 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">
                {new Date(event.fields.date).toLocaleDateString("en-GB", {
                  weekday: "long",
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-sm">
                {new Date(event.fields.date).toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                  
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{event.fields.locationName}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">Event Details</h2>
            <div className="prose max-w-none">
              <p>{event.fields.description}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {event.fields.registerLink && (
              <Button size="lg" className="flex-1">
                <Link href={event.fields.registerLink}>Register for this Event</Link>
              </Button>
            )}
            <AddToCalendar event={calendarEvent} />
          </div>
        </div>
      </div>
    </div>
  )
}

