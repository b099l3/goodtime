import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContentfulImage, getAllEvents } from "@/lib/contentful"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 3600 // Revalidate every hour

export default async function EventsPage() {
  const events = await getAllEvents()

  // Group events by month and year
  const eventsByMonth: Record<string, typeof events> = {}

  events.forEach((event) => {
    const date = new Date(event.fields.date)
    const monthYear = date.toLocaleDateString("en-US", { month: "long", year: "numeric" })

    if (!eventsByMonth[monthYear]) {
      eventsByMonth[monthYear] = []
    }

    eventsByMonth[monthYear].push(event)
  })

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Events Calendar</h1>
          <p className="text-xl opacity-90">Join us for upcoming runs, races, workshops, and social events</p>
        </div>
      </header>

      <div className="container py-12">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          ← Back to home
        </Link>

        {Object.keys(eventsByMonth).length > 0 ? (
          Object.entries(eventsByMonth).map(([monthYear, monthEvents]) => (
            <div key={monthYear} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">{monthYear}</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {monthEvents.map((event) => (
                  <Link href={`/events/${event.fields.slug}`} key={event.sys.id}>
                    <Card className="h-full transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle>{event.fields.title}</CardTitle>
                          <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                            {event.fields.eventType}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {event.fields.image && (
                          <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                            <Image
                              src={`https:${(event.fields.image as unknown as ContentfulImage).fields?.file?.url}`}
                              fill
                              alt={event.fields.title || "Event Image"}
                              className="object-cover" />
                          </div>
                        )}
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
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
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{event.fields.locationName}</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-3">{event.fields.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No upcoming events</h3>
            <p className="text-muted-foreground">
              Check back soon for new events or subscribe to our newsletter for updates.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

