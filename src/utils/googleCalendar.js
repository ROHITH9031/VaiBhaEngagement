/**
 * Google Calendar URL Generator
 * Creates a pre-filled Google Calendar event URL
 */

export function createGoogleCalendarUrl(event) {
  const baseUrl = "https://calendar.google.com/calendar/render";

  // Format date to Google Calendar format: YYYYMMDD
  const dateStr = event.date.replace(/-/g, "");

  // Format start time
  const startTime = event.celebrationStart.replace(":", "") + "00";

  // Build datetime strings
  let dates;
  if (event.calendar.endTime) {
    const endTime = event.calendar.endTime.replace(":", "") + "00";
    // Use datetime format with timezone
    dates = `${dateStr}T${startTime}/${dateStr}T${endTime}`;
  } else {
    // If no end time, just set start date (all-day-ish event with start time in description)
    dates = `${dateStr}T${startTime}/${dateStr}T${startTime}`;
  }

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.calendar.title,
    dates: dates,
    details: event.calendar.description,
    location: event.venue.name
      ? `${event.venue.name}, ${event.venue.address}`
      : "",
    ctz: "Asia/Kolkata"
  });

  return `${baseUrl}?${params.toString()}`;
}

