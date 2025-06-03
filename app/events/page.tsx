import EventCard from "@/components/ui/cards/event-card"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import { getAllEventsThisYear } from "@/lib/contentful"

export const revalidate = 3600 // Revalidate every hour

export default async function EventsPage() {
  const events = await getAllEventsThisYear()

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
      <Header/>
      <header className="bg-primary text-primary-foreground p-14">
        <div className="container">
          <h1 className="text-4xl font-extrabold mb-2">Events Calendar</h1>
          <p className="text-xl opacity-90">
            Join us for upcoming runs, races, workshops, and social events
          </p>
        </div>
      </header>

      <div className="container px-4 py-8">
        {Object.keys(eventsByMonth).length > 0 ? (
          Object.entries(eventsByMonth).map(([monthYear, monthEvents]) => (
            <div key={monthYear} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">{monthYear}</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {monthEvents.map((event, idx) => (
                  <EventCard key={idx} event={event} />
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
      <Footer/>
    </div>
  )
}

