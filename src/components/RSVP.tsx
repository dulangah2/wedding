import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'
import './RSVP.css'

/* EDITABLE: RSVP Configuration */
const RSVP_CONFIG = {
  title: 'RSVP',
  subtitle: "Please let us know if you'll be joining us!",
  buttonText: 'RSVP Now',
  confirmationMessage: "Thank you! Your RSVP has been submitted. We can't wait to see you!",
}

interface FormData {
  name: string
  email: string
  number_of_guests: number
  message: string
}

export default function RSVP() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    number_of_guests: 1,
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'number_of_guests' ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const { error: submitError } = await supabase
        .from('rsvp_submissions')
        .insert([formData])

      if (submitError) throw submitError

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        number_of_guests: 1,
        message: '',
      })
    } catch (err) {
      console.error('Error submitting RSVP:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="rsvp" className="rsvp-section">
        <div className="rsvp-container">
          <div className="rsvp-success">
            <CheckCircle size={64} className="success-icon" />
            <h2 className="success-title">RSVP Confirmed!</h2>
            <p className="success-message">{RSVP_CONFIG.confirmationMessage}</p>
            <button
              className="rsvp-button"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another RSVP
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="rsvp-container">
        {/* EDITABLE: Section Title */}
        <h2 className="rsvp-title">{RSVP_CONFIG.title}</h2>
        <p className="rsvp-subtitle">{RSVP_CONFIG.subtitle}</p>

        <form className="rsvp-form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          {/* Number of Guests Field */}
          <div className="form-group">
            <label htmlFor="number_of_guests" className="form-label">
              Number of Guests *
            </label>
            <select
              id="number_of_guests"
              name="number_of_guests"
              className="form-input"
              value={formData.number_of_guests}
              onChange={handleChange}
              required
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share a message with us"
              rows={4}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          {/* EDITABLE: Submit Button */}
          <button
            type="submit"
            className="rsvp-button"
            disabled={isSubmitting}
          >
            <Send size={20} />
            {isSubmitting ? 'Submitting...' : RSVP_CONFIG.buttonText}
          </button>
        </form>
      </div>
    </section>
  )
}
