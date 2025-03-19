"use client"

import { Button } from "@/components/ui/button"
import { downloadICalFile } from "@/lib/calendar-utils"

interface DownloadICalProps {
  event: {
    title: string
    description: string
    location: string
    startDate: Date
    endDate?: Date
  }
  className?: string
}

export default function DownloadICal({ event, className }: DownloadICalProps) {
  return (
    <Button variant="outline" className={className} onClick={() => downloadICalFile(event)}>
      Download Calendar File
    </Button>
  )
}

