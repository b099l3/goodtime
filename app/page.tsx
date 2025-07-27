import CustomSubstackForm from "@/components/custom-substack-form"
import { Button } from "@/components/ui/button"
import EventCard from "@/components/ui/cards/event-card"
import RunCard from "@/components/ui/cards/run-card"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import { getUpcomingEvents } from "@/lib/contentful"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  // Fetch upcoming events from Contentful
  const events = await getUpcomingEvents(6)
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header/>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
        <div className="h-[60vh] w-full relative overflow-hidden">
            {/* Background Image */}
            <Image
              src="/GTRC_min.jpg"
              alt="Blue gradient background"
              fill
              className="object-cover"
              priority
            />

            {/* Foreground Image (Logo) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-2xl h-[70vh]">
                <Image
                  src="/GTRC_fg_min.png"
                  alt="Good Time Running Club"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-4 pb-8 px-2 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/HowItStarted.jpeg?height=1643&width=1088"
                  alt="Group of runners"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  HOW IT STARTED
                </h2>
                <p className="text-muted-foreground mb-3">
                  During the Covid-19 pandemic, We (Oli & Craig) reconnected through our mutual love of running. We started Good Time to bring local runners together.
                </p>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  WHO IS GTRC FOR?
                </h3>
                <p className="text-muted-foreground mb-3">
                  Initially we looked at joining other local running clubs, but at the time, what was on offer felt too advanced for our abilities. The foundation of Good Time is that the club is available for everyone. If you`ve never ran but want to give it a try, We`re here for you. At most runs we find ourselves having a run/walk chat with a new friend. Time and time again we get asked what our club demographic is, honestly there isnt one. We are such a mismatched group of people, but maybe that`s why it works? Who knows.
                </p>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  WHAT`S THE DEAL?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We meet every Monday, Thursday and Sunday in the city, Mondays and Sundays in Portobello and Thursday in Leith. All of our regular runs are free and you don`t need to let us know if you are coming in advance. 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regular Runs Section */}
        <section id="runs" className="py-4 pb-8 px-2">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">OUR REGULAR RUNS</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join us for our regular runs, We don’t run at any set pace, and you’ll always have someone to run with.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              <RunCard
                image="/Monday.jpeg?height=400&width=600"
                title="Monday pizza run"
                subtitle="5km run with pizza"
                desc="A relaxed 5km run trying to shake off that Monday feeling followed by a slice of half price pizza with friends."
                locationName="Civerinos Portobello"
                locationUrl="https://maps.app.goo.gl/ru6n6nyCLRkzNjir9"
                times={[
                  'Mondays, 6:30 PM',
                ]}
              />
              <RunCard
                image="/Thursday.jpeg?height=400&width=600"
                title="Thursday social run"
                subtitle="Trail or road? We have both!"
                desc="We have two options for you. A 5km trail run around Holyrood or road run around Leith. Both runs start and finish at the pub, We usually head in for some food/drink and chat afterwards."
                locationName="Old Easyway Tap"
                locationUrl="https://maps.app.goo.gl/bBfy9HSHPaTRMQcD8"
                times={[
                  'Trail - Thursdays, 6:15 PM',
                  'Road - Thursdays, 6:30 PM',
                ]}
              />
              <RunCard
                image="/Traade.jpeg?height=400&width=600"
                title="Sunday 5km run"
                subtitle="Coffee, Chat & Cinnamon Bun!"
                desc="8am every Sunday we host a 5km starting and finishing at Traade Space on Portobello High Street. Coffee, pastries, and great company."
                locationName="Traade"
                locationUrl="https://maps.app.goo.gl/qjkYhxWiHNybDUis8"
                times={[
                  'Sundays, 8:00 AM',
                ]}
              />
              <RunCard
                image="/EndOfTheMonth.jpeg?height=400&width=600"
                title="End of the Month Run"
                subtitle="The 5 km where it all started"
                desc="On the last Friday of the month, we meet at the Portobello Tap for a 5km run.
                Hang out afterwards for chat and burger. This is the run that started the club and is dear to our hearts."
                locationName="Portobello Tap"
                locationUrl="https://maps.app.goo.gl/5zKCeTPMCoBGmS6o7"
                times={[
                  'Last Friday of the month, 6:30 PM',
                ]}
              />
            </div>
          </div>
        </section>

        {/* Events Calendar Section */}
        <section id="events" className="py-4 pb-8 px-2 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">UPCOMING EVENTS</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mark your calendar for these special club events and races.
              </p>
            </div>
            {events.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event, idx) => (
                  <EventCard key={idx} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p>No upcoming events at the moment. Check back soon!</p>
              </div>
            )}

            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <Link href="/events">View Full Calendar</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative">
          <div className="h-[70vh] w-full relative">
            <Image
              src="/newsletter.jpeg?height=800&width=1600"
              alt="Runners in action"
              fill
              className="object-cover brightness-80"
              priority
            />
            <div className="absolute inset-0 bg-primary/80" />
            <div className="container mx-auto absolute inset-0 flex flex-col items-center justify-center text-center">
              <CustomSubstackForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

