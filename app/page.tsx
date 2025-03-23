import NewsletterForm from "@/components/newsletter-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import { ContentfulImage, getUpcomingEvents } from "@/lib/contentful"
import { formatDate } from "@/lib/utils"
import { Calendar, Clock, MapPin } from "lucide-react"
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
              src="/GTRC_bg_min.jpg"
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
              {/* Monday Run */}
              <Card>
                <CardHeader>
                  <CardTitle>Monday pizza run</CardTitle>
                  <CardDescription>5km run with pizza</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                    <Image
                      src="/Monday.jpeg?height=400&width=600"
                      alt="Track running"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <a className="flex items-center gap-2" href="https://maps.app.goo.gl/ru6n6nyCLRkzNjir9">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Civerinos Portobello</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Mondays, 6:30 PM</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-2">
                      A relaxed 5km run trying to shake off that Monday feeling followed by a slice of half price pizza with friends.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Thursday Run */}
              <Card>
                <CardHeader>
                  <CardTitle>Thursday social run</CardTitle>
                  <CardDescription>Trail or road? We have both!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                    <Image
                      src="/Thursday.jpeg?height=400&width=600"
                      alt="Group running"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <a className="flex items-center gap-2" href="https://maps.app.goo.gl/bBfy9HSHPaTRMQcD8">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Old Eastway Tap</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Trail - Thursdays, 6:15 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Road - Thursdays, 6:30 PM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      We have two options for you. A 5km trail run around Holyrood or road run around Leith. Both runs start and finish at the pub, We usually head in for some food/drink and chat afterwards.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Sunday Run */}
              <Card>
                <CardHeader>
                  <CardTitle>Sunday long run</CardTitle>
                  <CardDescription>Distances for everyone</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                    <Image
                      src="/Sunday.jpeg?height=400&width=600"
                      alt="Trail running"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <a className="flex items-center gap-2" href="https://maps.app.goo.gl/516Xchg46ML7YCKv7">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Crumbs Portobello</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">15km - Saturdays, 10:00 AM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">10km - Saturdays, 10:30 AM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">5km - Saturdays, 11:00 AM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      On Sunday Mornings we meet on the Portobello Prom outside Crumbs for one of three runs. Each week we offer a 5km, 10km and a 15km run.
                      Hang out afterwards for chat and refreshments from Crumbs.
                    </p>
                  </div>
                </CardContent>
              </Card>


              {/* EOTM Run */}
              <Card>
                <CardHeader>
                  <CardTitle className='text-3xl'>End of the Month Run</CardTitle>
                  <CardDescription>The 5km where it all started</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-[5/4] mb-4 rounded-md overflow-hidden">
                    <Image
                      src="/EndOfTheMonth.jpeg?height=400&width=600"
                      alt="Trail running"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <a className="flex items-center gap-2" href="https://g.co/kgs/37xpKct">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-base">Portobello Tap</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-base">Last Friday on the month, 6:30 PM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      On the last Friday of the month, we meet at the Portobello Tap for a 5km run.
                      Hang out afterwards for chat and burger. This is the run that started the club and is dear to our hearts.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <Image
                  src="/EndOfTheMonth.jpeg?height=400&width=600"
                  alt="Trail running"
                  fill
                  className="object-cover z-0"
                />
                <div className="relative z-10 text-white p-2 rounded-md">
                  <CardHeader>
                    <CardTitle className="text-3xl">End of the Month run</CardTitle>
                    <CardDescription className='text-white'>The 5km where it all started</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 aspect-square">
                    <div className="space-y-2">
                      <a className="flex items-center gap-2" href="https://g.co/kgs/37xpKct">
                        <MapPin className="h-4 w-4" />
                        <span className="text-base">Portobello Tap</span>
                      </a>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-base">Last Friday on the month, 6:30 PM</span>
                      </div>
                      <p className="text-sm mt-2">
                        On the last Friday of the month, we meet at the Portobello Tap for a 5km run.
                        Hang out afterwards for chat and burger. This is the run that started the club and is dear to our hearts.
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>

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
                {events.map((event) => (
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
                          <div className="relative h-48 mb-4 py-4 rounded-md overflow-hidden">
                            <Image
                              src={`https:${(event.fields.image as unknown as ContentfulImage).fields?.file?.url}`}
                              fill
                              alt={event.fields.title || "Event Image"}
                              className="object-cover" />
                          </div>
                        )}
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{formatDate(event.fields.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{event.fields.locationName}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {event.fields.description.substring(0, 120)}
                          {event.fields.description.length > 120 ? "..." : ""}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
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

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">Want to keep up to date?</h2>
            <p className="max-w-2xl mx-auto mb-2 text-white">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NewsletterForm/>
            </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

