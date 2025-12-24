import { useState } from 'react'
import { Mail, Send, CheckCircle, Phone } from 'lucide-react'
import { supabase } from '../lib/supabase'
import './Contact.css'

/* =======================
   EDITABLE: Contact Configuration
======================= */
const CONTACT_CONFIG = {
  title: 'Contact Us',
  subtitle: 'Have questions? Feel free to reach out!',
  email: 'Dulangah2@gmail.com',

  // EDITABLE: Phone numbers
  phoneNumbers: [
    '+94 77 264 6982',
    '+94 77 590 1143',
  ],
}

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const { error: submitError } = await supabase
        .from('contact_messages')
        .insert([formData])

      if (submitError) throw submitError

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Error submitting message:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Icon */}
        <div className="contact-icon">
          <Mail size={48} />
        </div>

        {/* Title & Subtitle */}
        <h2 className="contact-title">{CONTACT_CONFIG.title}</h2>
        <p className="contact-subtitle">{CONTACT_CONFIG.subtitle}</p>

        {/* Email */}
        <a href={`mailto:${CONTACT_CONFIG.email}`} className="contact-email">
          {CONTACT_CONFIG.email}
        </a>

        {/* Phone Numbers */}
        <div className="contact-phones">
          {CONTACT_CONFIG.phoneNumbers.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="contact-phone"
            >
              <Phone size={18} />
              {phone}
            </a>
          ))}
        </div>

        {isSubmitted ? (
          <div className="contact-success">
            <CheckCircle size={48} className="success-icon" />
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Name *
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows={5}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            {/* Submit Button */}
            <button
              type="submit"
              className="contact-button"
              disabled={isSubmitting}
            >
              <Send size={20} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
