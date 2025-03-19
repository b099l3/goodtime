import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function EventsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="h-10 w-64 bg-primary-foreground/20 rounded animate-pulse mb-4"></div>
          <div className="h-6 w-96 bg-primary-foreground/20 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="container py-12">
        <div className="h-6 w-32 bg-muted-foreground/20 rounded animate-pulse mb-8"></div>

        <div className="mb-12">
          <div className="h-8 w-48 bg-muted-foreground/20 rounded animate-pulse mb-6"></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="h-64">
                <CardHeader className="pb-2">
                  <div className="h-6 w-3/4 bg-muted-foreground/20 rounded animate-pulse"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-4 w-1/2 bg-muted-foreground/20 rounded animate-pulse"></div>
                    <div className="h-4 w-1/3 bg-muted-foreground/20 rounded animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-muted-foreground/20 rounded animate-pulse"></div>
                      <div className="h-3 w-full bg-muted-foreground/20 rounded animate-pulse"></div>
                      <div className="h-3 w-2/3 bg-muted-foreground/20 rounded animate-pulse"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

