"use client"

import { Button } from "@/components/ui/button"
import {
  downloadICalFile,
  getGoogleCalendarUrl,
  getOutlookCalendarUrl,
  getYahooCalendarUrl,
} from "@/lib/calendar-utils"
import { Calendar, Calendar1, CalendarDays, ChevronDown, Mail, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface AddToCalendarProps {
  event: {
    title: string
    description: string
    location: string
    startDate: Date
    endDate?: Date
  }
}

export default function AddToCalendar({ event }: AddToCalendarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        size="lg"
        className="w-full flex items-center justify-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calendar className="h-5 w-5" />
        <span>Add to Calendar</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-background shadow-lg border">
          <div className="p-2">
            <div className="flex justify-between items-center mb-2 px-2">
              <h3 className="text-sm font-medium">Add to Calendar</h3>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="space-y-1">
              <a
                href={getGoogleCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                
                <Calendar1 className="h-4 w-4" />
                Google Calendar
              </a>

              <a
                href={getOutlookCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >

                <Mail className="h-4 w-4" />
                Outlook
              </a>

              <a
                href={getYahooCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                
                <CalendarDays className="h-4 w-4" />
                Yahoo Calendar
              </a>

              <button
                onClick={() => downloadICalFile(event)}
                className="flex items-center gap-2 w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted text-left"
              >
                <Calendar className="h-4 w-4" />
                Download .ics File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

