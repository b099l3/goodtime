// Format date for calendar links (YYYYMMDD)
export function formatDateForCalendar(date: Date): string {
  return date.toISOString().replace(/-|:|\.\d+/g, "")
}

// Create Google Calendar URL
export function getGoogleCalendarUrl(event: {
  title: string
  description: string
  location: string
  startDate: Date
  endDate?: Date
}): string {
  const { title, description, location, startDate } = event
  const endDate = event.endDate || new Date(startDate.getTime() + 2 * 60 * 60 * 1000) // Default to 2 hours later

  const startDateStr = formatDateForCalendar(startDate)
  const endDateStr = formatDateForCalendar(endDate)

  const url = new URL("https://calendar.google.com/calendar/render")
  url.searchParams.append("action", "TEMPLATE")
  url.searchParams.append("text", title)
  url.searchParams.append("details", description)
  url.searchParams.append("location", location)
  url.searchParams.append("dates", `${startDateStr}/${endDateStr}`)

  return url.toString()
}

// Create Outlook Calendar URL
export function getOutlookCalendarUrl(event: {
  title: string
  description: string
  location: string
  startDate: Date
  endDate?: Date
}): string {
  const { title, description, location, startDate } = event
  const endDate = event.endDate || new Date(startDate.getTime() + 2 * 60 * 60 * 1000) // Default to 2 hours later

  const url = new URL("https://outlook.live.com/calendar/0/deeplink/compose")
  url.searchParams.append("subject", title)
  url.searchParams.append("body", description)
  url.searchParams.append("location", location)
  url.searchParams.append("startdt", startDate.toISOString())
  url.searchParams.append("enddt", endDate.toISOString())
  url.searchParams.append("path", "/calendar/action/compose")
  url.searchParams.append("rru", "addevent")

  return url.toString()
}

// Create Yahoo Calendar URL
export function getYahooCalendarUrl(event: {
  title: string
  description: string
  location: string
  startDate: Date
  endDate?: Date
}): string {
  const { title, description, location, startDate } = event
  const endDate = event.endDate || new Date(startDate.getTime() + 2 * 60 * 60 * 1000) // Default to 2 hours later

  const url = new URL("https://calendar.yahoo.com/")
  url.searchParams.append("title", title)
  url.searchParams.append("desc", description)
  url.searchParams.append("in_loc", location)
  url.searchParams.append("st", formatDateForCalendar(startDate))
  url.searchParams.append("et", formatDateForCalendar(endDate))
  url.searchParams.append("v", "60")

  return url.toString()
}

// Generate iCalendar file content
export function generateICalContent(event: {
  title: string
  description: string
  location: string
  startDate: Date
  endDate?: Date
}): string {
  const { title, description, location, startDate } = event
  const endDate = event.endDate || new Date(startDate.getTime() + 2 * 60 * 60 * 1000) // Default to 2 hours later

  const now = new Date()
  const UID = `event-${now.getTime()}@goodtimerunningclub.com`

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${UID}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    `LOCATION:${location}`,
    `DTSTART:${formatDateForCalendar(startDate)}`,
    `DTEND:${formatDateForCalendar(endDate)}`,
    `DTSTAMP:${formatDateForCalendar(now)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n")
}

// Download iCalendar file
export function downloadICalFile(event: {
  title: string
  description: string
  location: string
  startDate: Date
  endDate?: Date
}): void {
  const content = generateICalContent(event)
  const filename = `${event.title.replace(/\s+/g, "-").toLowerCase()}.ics`

  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" })

  // Create a link element and trigger download
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

