import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface RunCardProps {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  locationName: string;
  locationUrl: string;
  times: string[];
  slug: string;
}

export default function RunCard({
  image,
  title,
  subtitle,
  desc,
  locationName,
  locationUrl,
  times,
  slug,
}: RunCardProps) {
  return (
    <Link href={`/events/${slug}`} className="h-full">
    <div className="relative overflow-hidden rounded-xl bg-card text-card-foreground shadow h-[70vh]">
      <Image
        src={image}
        alt='Running Photo'
        fill
        sizes="h-[70vh]"
        className="object-cover w-full h-full z-0"
      />

      <div className="relative z-1 p-2 text-white font-bold bg-gradient-to-b from-primary to-transparent">
        <div className="flex flex-col p-4 pb-16">
          <div className="text-3xl">{title}</div>
          <div className="text-lg">{subtitle}</div>
        </div>
      </div>

      <div className="z-1 p-0 text-white absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary via-primary to-transparent">
        <div className="p-4 pt-16 space-y-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-base">{locationName}</span>
            </div>
            {times.map((item, idx) => {
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-base">{item}</span>
                  </div>
                );
            })}
            <p className="text-sm mt-2">{desc}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
