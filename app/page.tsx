"use client"

import NewsletterForm from "@/components/newsletter-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Facebook, Instagram, MapPin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background p-3">
        <div className="container mx-auto flex h-8 items-center justify-between py-2">
          <div className="flex items-center gap-2">
          <Image
              src="/logo-dark.svg?height=180&width=100"
              alt="Runners in action"
              width={100}
              height={80}
              priority
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#runs" className="text-sm font-medium transition-colors hover:text-primary">
              Regular Runs
            </Link>
            <Link href="#events" className="text-sm font-medium transition-colors hover:text-primary">
              Events
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              Menu
            </Button>
          </div>
          </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <nav className="container flex flex-col space-y-3 py-4 border-t">
              <Link
                href="#about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#runs"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Regular Runs
              </Link>
              <Link
                href="#events"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[89vh] w-full relative">
            <Image
              src="/background.png?height=800&width=1600"
              alt="Runners in action"
              fill
              className="object-cover brightness-80"
              priority
            />
            <div className="absolute inset-0 bg-primary/70" />
            <div className="container mx-auto absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Good Time Running Club</h1>
              <p className="mt-6 max-w-md text-lg">
                Edinburgh based running group.
              </p>
              <p className="max-w-md text-lg">
                All inclusive, all abilities, all good.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 pb-8 px-2 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
                  HOW IT STARTED
                </h2>
                <p className="text-muted-foreground mb-3">
                  During The Covid 19 Pandemic, We (Oli & Craig) Reconnected Through Our Mutual Love Of Running. We Started Good Time To Bring Local Runners Together.
                </p>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl mb-1">
                  WHO IS GTRC FOR?
                </h3>
                <p className="text-muted-foreground mb-3">
                  Initially We Looked At Joining Other Local Runninc Clubs, But At The Time What Was On Offer Felt Too Advanced For Our Abilities. The Foundation Of Good Time Is That The Club Is Available For Everyone. If You&apos;ve Never Ran But Want To Give It A Try, We&apos;re Here For You. At Most Runs We Find Ourselves Having A Run/Walk Chat With A New Friend. Time And Time Again We Get Asked What Our Club Demographic Is, Honestly There Isnt One. We Are Such A Mismatched Group Of People, But Maybe That&apos;s Why It Works? Who Knows.
                </p>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl mb-1">
                  WHAT&apos;S THE DEAL?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We Meet Every Monday, Thursday And Sunday In The City, Mondays And Sundays In Portobello And Thursday In Leith. All Of Our Regular Runs Are Free And You Don&apos;t Need To Let Us Know If You Are Coming In Advance. 
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/craiver.JPG?height=800&width=1200"
                  alt="Group of runners"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Regular Runs Section */}
        <section id="runs" className="py-16 pb-8 px-2">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Regular Runs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join us for our regular weekly runs, We don’t run at any set pace, and you’ll always have someone to run with.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Tuesday Run */}
              <Card>
                <CardHeader>
                  <CardTitle>Monday Pizza Run</CardTitle>
                  <CardDescription>5km Run with Pizza</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                    <Image
                      src="/run-civs.png?height=400&width=600"
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
                      A Relaxed 5km Run Trying To Shake Off That Monday Feeling Followed By A Slice Of Half Price Pizza With Friends.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Thursday Run */}
              <Card>
                <CardHeader>
                  <CardTitle>Thursday Social Run</CardTitle>
                  <CardDescription>Trail or Road? we have both!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                    <Image
                      src="/run-eastway.jpeg?height=400&width=600"
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
                      We Have Two Options For You. A 5km Trail Run Around Holyrood Or Road Run Around Leith. Both Runs Start And Finish At The Pub, We Usually Head In For Some Food/Drink And Decent (Ish) Chat Afterwards.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Saturday Run */}
              <Card>
                <CardHeader>
                  <CardTitle>Sunday Long Run</CardTitle>
                  <CardDescription>Distances for everyone</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                    <Image
                      src="/run-crumbs.jpg?height=400&width=600"
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
                      On Sunday Mornings We Meet On The Portobello Prom Outside Crumbs For One Of Three Runs. Each Week We Offer A 5km, 10km And A 15km Run.
                      Hang Out Afterwards For Chat And Refreshments From Crumbs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Events Calendar Section */}
        <section id="events" className="py-16 pb-8 px-2 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Upcoming Events</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mark your calendar for these special club events and races.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Event 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Spring 10K Race</CardTitle>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">Race</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">April 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">City Park</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our annual spring race through the beautiful city park. Medals for all finishers.
                  </p>
                </CardContent>
              </Card>

              {/* Event 2 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Nutrition Workshop</CardTitle>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">Workshop</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">May 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Community Center</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Learn about optimal nutrition for runners with our guest sports nutritionist.
                  </p>
                </CardContent>
              </Card>

              {/* Event 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Summer BBQ</CardTitle>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">Social</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">June 20, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Lakeside Park</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Annual club BBQ with games, food, and fun for members and their families.
                  </p>
                </CardContent>
              </Card>

              {/* Event 4 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Trail Running Retreat</CardTitle>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">Retreat</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">July 15-17, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Mountain Lodge</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Weekend retreat with trail running, workshops, and relaxation in the mountains.
                  </p>
                </CardContent>
              </Card>

              {/* Event 5 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Half Marathon Training</CardTitle>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">Training</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Starts August 1, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Various Locations</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    12-week training program for the Fall Half Marathon. Coached sessions twice weekly.
                  </p>
                </CardContent>
              </Card>

              {/* Event 6 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Fall Marathon</CardTitle>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">Race</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">October 10, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Downtown</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The biggest event of our year! Join our club team for the city&apos;s annual marathon.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Button size="lg">View Full Calendar</Button>
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
      <footer id="contact" className="border-t px-2 bg-muted/50">
        <div className="container mx-auto py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Good Time Running Club</h3>
              <p className="text-sm text-muted-foreground">
                Edinburgh based running group.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                All inclusive, all abilities, all good.
              </p>
              <div className="flex gap-4">
                <Link href="https://www.facebook.com/profile.php?id=61555882064629" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-8 w-8" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/goodtimerunning" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-8 w-8" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://x.com/goodtimerunnin" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-8 w-8" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#runs" className="text-muted-foreground hover:text-primary">
                    Regular Runs
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-muted-foreground hover:text-primary">
                    Events Calendar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>DM on Instagram</p>
                <p>Email: info@goodtimerunning.com</p>
              </address>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Good Time Running Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

