import invitationConfig from '../config'

/** Commas and semicolons separate values in iCalendar, so text has to escape them. */
function esc(v: string) {
  return v.replace(/([\\,;])/g, '\\$1').replace(/\r?\n/g, '\\n')
}

/** 2026-09-26T17:00:00 -> 20260926T170000 */
function stamp(d: Date) {
  const p = (n: number) => String(n).padStart(2, '0')
  return (
    `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}` +
    `T${p(d.getHours())}${p(d.getMinutes())}00`
  )
}

/**
 * Hands the guest a calendar entry for the evening.
 *
 * Times are written as floating local time (no trailing Z and no timezone
 * block) so the event shows at 5pm on the guest's calendar wherever they
 * are, rather than being shifted out of Philippine time.
 */
export function downloadCalendarEvent(title: string) {
  const start = new Date(invitationConfig.eventDate)
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000)

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Shaina 18th//Invitation//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:shaina-18th-${stamp(start)}@invitation`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${esc(title)}`,
    `LOCATION:${esc(`${invitationConfig.venue}, ${invitationConfig.address}`)}`,
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    `DESCRIPTION:${esc(`${title} is tomorrow`)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'Shaina-18th.ics'
  a.click()
  URL.revokeObjectURL(url)
}
