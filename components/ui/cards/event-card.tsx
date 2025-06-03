// components/EventCard.tsx
import { EventEntry } from '@/lib/contentful';
import { formatDate } from '@/lib/utils';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  event: EventEntry
}

export default function EventCard({ event }: EventCardProps) {
  const {
    sys: { id },
    fields: {
      title,
      date,
      locationName,
      description,
      eventType,
      slug,
      image,
    },
  } = event;

  // Construct the URL for the image (Contentful only returns the path without protocol)
  const imageUrl = image?.fields.file?.url
    ? `https:${image.fields.file.url}`
    : null;

  return (
    <Link href={`/events/${slug}`} key={id} className="h-full">
      <div className="h-full transition-all hover:shadow-md rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col space-y-1.5 p-4 pb-2">
          <div className="flex justify-between items-start">
            <div className="font-semibold leading-none tracking-tight">
              {title}
            </div>
            <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
              {eventType}
            </div>
          </div>
        </div>

        <div className="p-4 pt-0">
          {imageUrl && (
            <div className="relative h-48 mb-4 py-4 rounded-md overflow-hidden">
              <Image
                src={imageUrl}
                fill
                alt={title || 'Event Image'}
                className="object-cover h-48 w-auto"
              />
            </div>
          )}

          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{formatDate(date)}</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{locationName}</span>
          </div>

          <p className="text-sm text-muted-foreground">
            {description.substring(0, 120)}
            {description.length > 120 ? '…' : ''}
          </p>
        </div>
      </div>
    </Link>
  );
}
