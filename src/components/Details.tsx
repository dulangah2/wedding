import { MapPin, Calendar, Clock, Download } from 'lucide-react'
import './Details.css'

/* EDITABLE: Wedding Details Configuration */
const DETAILS_CONFIG = {
  title: 'Wedding Details',
  ceremony: {
    title: 'Ceremony',
    date: 'January 30, 2026',
    time: '3:00 PM',
    location: 'Sunset Beach Resort',
    address: 'Weligama, Sri Lanka',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.234567890123!2d80.42!3d5.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNTgnMTIuMCJOIDgwwrAyNScxMi4wIkU!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus', // EDITABLE: Embed your map URL
  },
  reception: {
    title: 'Reception',
    date: 'January 30, 2026',
    time: '6:00 PM',
    location: 'Sunset Beach Resort',
    address: 'Ballroom',
  },
}

export default function Details() {
  const createCalendarEvent = (type: 'google' | 'ical') => {
    const title = 'Bhagaya & Dulanga Wedding'
    const location = 'Sunset Beach Resort, Weligama, Sri Lanka'
    const details = 'Join us to celebrate our special day!'
    const startDate = '20260214T150000Z'
    const endDate = '20260214T220000Z'

    if (type === 'google') {
      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`
      window.open(url, '_blank')
    } else {
      const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`
      const blob = new Blob([icalContent], { type: 'text/calendar' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'Bhagaya-Dulanga-wedding.ics'
      link.click()
    }
  }

  return (
    <section id="details" className="details-section">
      <div className="details-container">
        {/* EDITABLE: Section Title */}
        <h2 className="details-title">{DETAILS_CONFIG.title}</h2>

        <div className="details-grid">
          {/* Ceremony Details */}
          <div className="detail-card">
            <h3 className="detail-card-title">{DETAILS_CONFIG.ceremony.title}</h3>

            <div className="detail-item">
              <Calendar size={20} />
              <span>{DETAILS_CONFIG.ceremony.date}</span>
            </div>

            <div className="detail-item">
              <Clock size={20} />
              <span>{DETAILS_CONFIG.ceremony.time}</span>
            </div>

            <div className="detail-item">
              <MapPin size={20} />
              <div>
                <div>{DETAILS_CONFIG.ceremony.location}</div>
                <div className="detail-address">{DETAILS_CONFIG.ceremony.address}</div>
              </div>
            </div>
          </div>

          {/* Reception Details */}
          <div className="detail-card">
            <h3 className="detail-card-title">{DETAILS_CONFIG.reception.title}</h3>

            <div className="detail-item">
              <Calendar size={20} />
              <span>{DETAILS_CONFIG.reception.date}</span>
            </div>

            <div className="detail-item">
              <Clock size={20} />
              <span>{DETAILS_CONFIG.reception.time}</span>
            </div>

            <div className="detail-item">
              <MapPin size={20} />
              <div>
                <div>{DETAILS_CONFIG.reception.location}</div>
                <div className="detail-address">{DETAILS_CONFIG.reception.address}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Add to Calendar Buttons */}
        <div className="calendar-buttons">
          <button
            className="calendar-button"
            onClick={() => createCalendarEvent('google')}
          >
            <Calendar size={20} />
            Add to Google Calendar
          </button>
          <button
            className="calendar-button"
            onClick={() => createCalendarEvent('ical')}
          >
            <Download size={20} />
            Download iCal
          </button>
        </div>

        {/* EDITABLE: Map Embed */}
        <div className="map-container">
          <iframe
            src={DETAILS_CONFIG.ceremony.mapUrl}
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 'var(--radius-md)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          />
        </div>
      </div>
    </section>
  )
}
