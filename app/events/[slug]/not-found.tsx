import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EventNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
        <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/events">View All Events</Link>
        </Button>
      </div>
    </div>
  )
}

