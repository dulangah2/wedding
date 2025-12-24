import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'
import './Countdown.css'

/* EDITABLE: Countdown Configuration */
const COUNTDOWN_CONFIG = {
  targetDate: '2026-02-14T15:00:00', // EDITABLE: Wedding date and time (format: YYYY-MM-DDTHH:mm:ss)
  displayText: 'Countdown to Our Wedding', // EDITABLE: Header text
}

interface TimeRemaining {
  weeks: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime()
      const target = new Date(COUNTDOWN_CONFIG.targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7))
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeRemaining({ weeks, days, hours, minutes, seconds })
      } else {
        setTimeRemaining({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeRemaining()
    const interval = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="countdown" className="countdown-section">
      <div className="countdown-container">
        {/* EDITABLE: Section Icon */}
        <div className="countdown-icon">
          <Clock size={48} />
        </div>

        {/* EDITABLE: Display Text */}
        <h2 className="countdown-title">{COUNTDOWN_CONFIG.displayText}</h2>

        <div className="countdown-grid">
          <div className="countdown-item">
            <div className="countdown-number">{timeRemaining.weeks}</div>
            <div className="countdown-label">Weeks</div>
          </div>

          <div className="countdown-item">
            <div className="countdown-number">{timeRemaining.days}</div>
            <div className="countdown-label">Days</div>
          </div>

          <div className="countdown-item">
            <div className="countdown-number">{timeRemaining.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>

          <div className="countdown-item">
            <div className="countdown-number">{timeRemaining.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>

          <div className="countdown-item">
            <div className="countdown-number">{timeRemaining.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  )
}
