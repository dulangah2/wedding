import { MapPin, Calendar, Clock, Download } from 'lucide-react'
import './Details.css'

/* Updated Wedding Details Configuration */
const DETAILS_CONFIG = {
  title: 'Wedding Details',
  date: 'Friday, January 30, 2026',
  poruwa: {
    title: 'Poruwa Ceremony',
    time: '9:32 AM',
  },
  reception: {
    title: 'Reception',
    time: 'Immediately following the ceremony',
  },
  location: 'Aarya Grand Hotel & Banquets – Grand Ballroom',
  address: 'Ganemulla, Sri Lanka',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1234567890123!2d79.9380693!3d7.0640705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f93584771855%3A0xa82ff25f338bf5ae!2sAarya+Grand+Hotel+%26+Banquets+-+Ganemulla!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk',
}

export default function Details() {
  const createCalendarEvent = (type: 'google' | 'ical') => {
    const title = 'Bhagya & Dulanga Wedding'
    const location = 'Aarya Grand Hotel & Banquets – Grand Ballroom, Ganemulla, Sri Lanka'
    const details = 'Join us for the traditional Poruwa Ceremony followed by Reception!'
    const startDate = '20260130T093200'
    const endDate = '20260130T180000'

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
      link.download = 'Bhagya-Dulanga-wedding.ics'
      link.click()
    }
  }

  return (
    <section id="details" className="details-section">
      <div className="details-container">
        <h2 className="details-title">{DETAILS_CONFIG.title}</h2>
        <p className="details-date">{DETAILS_CONFIG.date}</p>

        {/* Venue Images Gallery */}
        <div className="venue-gallery">
          <img 
            src="https://aaryagrand.lk/wp-content/uploads/2025/01/DSC.jpg" 
            alt="Aarya Grand Hotel & Banquets - Exterior View" 
            className="venue-image"
          />
          <img 
            src="https://aaryagrand.lk/wp-content/uploads/2024/04/Homeslider_2.jpg" 
            alt="Aarya Grand Grand Ballroom - Luxurious Interior" 
            className="venue-image"
          />
          <img 
            src="https://aaryagrand.lk/wp-content/uploads/2025/01/AaryaGrand-012.jpg" 
            alt="Aarya Grand Banquet Hall - Wedding Setup" 
            className="venue-image"
          />
        </div>

        {/* Single Unified Card */}
        <div className="detail-card single">
          <div className="event-schedule">
            <div className="schedule-item">
              <Clock size={24} />
              <div>
                <h3 className="event-title">{DETAILS_CONFIG.poruwa.title}</h3>
                <p className="time-text">{DETAILS_CONFIG.poruwa.time}</p>
              </div>
            </div>

            <div className="schedule-item">
              <Clock size={24} />
              <div>
                <h3 className="event-title">{DETAILS_CONFIG.reception.title}</h3>
                <p className="time-text">{DETAILS_CONFIG.reception.time}</p>
              </div>
            </div>
          </div>

          <div className="location-info">
            <MapPin size={26} />
            <div>
              <div className="location-name">{DETAILS_CONFIG.location}</div>
              <div className="detail-address">{DETAILS_CONFIG.address}</div>
            </div>
          </div>
        </div>

        {/* Add to Calendar Buttons */}
        <div className="calendar-buttons">
          <button
            className="calendar-button"
            onClick={() => createCalendarEvent('google')}
          >
            <Calendar size={22} />
            Add to Google Calendar
          </button>
          <button
            className="calendar-button"
            onClick={() => createCalendarEvent('ical')}
          >
            <Download size={22} />
            Download iCal
          </button>
        </div>

        {/* Map Embed */}
        <div className="map-container">
          <iframe
            src={DETAILS_CONFIG.mapUrl}
            width="100%"
            height="450"
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