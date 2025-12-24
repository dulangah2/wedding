import { useEffect, useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'
import './RSVP.css'

interface FormData {
  name: string
  email: string
  number_of_guests: number
  attendance: 'yes' | 'no'
  liquor_preference: 'yes' | 'no'
  message: string
}

export default function RSVP() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    number_of_guests: 1,
    attendance: 'yes',
    liquor_preference: 'no',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isAllowed, setIsAllowed] = useState(false)
  const [loadingInvite, setLoadingInvite] = useState(true)
  const [isExistingRSVP, setIsExistingRSVP] = useState(false) // <-- NEW

  // =========================
  // Load & validate invite token from Supabase
  // =========================
  useEffect(() => {
    const loadInvite = async () => {
      try {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('t')

        if (!token) {
          setError('Missing invitation token in URL.')
          setLoadingInvite(false)
          return
        }

        // Fetch invitee from Supabase
        const { data: invitees, error: fetchError } = await supabase
          .from('invitees')
          .select('*')
          .eq('invite_token', token)
          .limit(1)

        if (fetchError) throw fetchError
        if (!invitees || invitees.length === 0) {
          setError(
            'This RSVP link appears to be invalid. Please use the invitation link shared with you.'
          )
          setLoadingInvite(false)
          return
        }

        const invitee = invitees[0]

        // Prefill the name
        setFormData((prev) => ({
          ...prev,
          name: invitee.name,
        }))

        // Check if RSVP already exists
        const { data } = await supabase
          .from('rsvp_submissions')
          .select('*')
          .eq('invite_token', token)

        if (data && data.length > 0) {
          const existing = data[0]
          setFormData({
            name: existing.name,
            email: existing.email,
            number_of_guests: existing.number_of_guests,
            attendance: existing.attendance as 'yes' | 'no',
            liquor_preference: existing.liquor_preference as 'yes' | 'no',
            message: existing.message || '',
          })
          setIsExistingRSVP(true) // <-- mark existing RSVP
        }

        setIsAllowed(true)
        setLoadingInvite(false)
      } catch (err) {
        console.error(err)
        setError('Unable to verify invitation. Please try again later.')
        setLoadingInvite(false)
      }
    }

    loadInvite()
  }, [])

  // =========================
  // Form handlers
  // =========================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'number_of_guests' ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isAllowed) {
      setError('Please use the valid invitation link sent to you.')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const params = new URLSearchParams(window.location.search)
      const token = params.get('t')

      const { error: submitError } = await supabase
        .from('rsvp_submissions')
        .upsert(
          [
            {
              ...formData,
              invite_token: token,
            },
          ],
          { onConflict: 'invite_token,email' } // update if same token+email exists
        )

      if (submitError) {
        if (submitError.code === '23505') {
          setError('This email has already been used with another RSVP.')
        } else {
          throw submitError
        }
      } else {
        setIsSubmitted(true)
      }
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // =========================
  // Loading state
  // =========================
  if (loadingInvite) {
    return (
      <section id="rsvp" className="rsvp-section">
        <div className="rsvp-container">
          <p>Validating your invitation…</p>
        </div>
      </section>
    )
  }

  // =========================
  // Success state
  // =========================
  if (isSubmitted) {
    return (
      <section id="rsvp" className="rsvp-section">
        <div className="rsvp-container">
          <div className="rsvp-success">
            <CheckCircle size={64} className="success-icon" />
            <h2>RSVP Confirmed!</h2>
            <p>Thank you! Your response has been recorded.</p>
          </div>
        </div>
      </section>
    )
  }

  // =========================
  // Form UI
  // =========================
  return (
    <section id="rsvp" className="rsvp-section">
      <div className="rsvp-container">
        <h2 className="rsvp-title">RSVP</h2>
        <p className="rsvp-subtitle">
          Please let us know if you’ll be joining us!
        </p>

        {!isAllowed && <div className="error-message">{error}</div>}

        <form className="rsvp-form" onSubmit={handleSubmit}>
          {/* Attendance */}
          <div className="form-group">
            <label className="form-label">Will you attend?</label>
            <select
              name="attendance"
              className="form-input"
              value={formData.attendance}
              onChange={handleChange}
              disabled={!isAllowed}
            >
              <option value="yes">Yes, I will attend</option>
              <option value="no">Sorry, I cannot attend</option>
            </select>
          </div>

          {/* Name */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              disabled
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={!isAllowed || isExistingRSVP} // <-- fixed
            />
          </div>

          {/* Guest count & liquor only if attending */}
          {formData.attendance === 'yes' && (
            <>
              <div className="form-group">
                <label className="form-label">Number of Guests *</label>
                <select
                  name="number_of_guests"
                  className="form-input"
                  value={formData.number_of_guests}
                  onChange={handleChange}
                  disabled={!isAllowed}
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Will you be having liquor?</label>
                <select
                  name="liquor_preference"
                  className="form-input"
                  value={formData.liquor_preference}
                  onChange={handleChange}
                  disabled={!isAllowed}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </>
          )}

          {/* Message */}
          <div className="form-group">
            <label className="form-label">Message (Optional)</label>
            <textarea
              name="message"
              className="form-textarea"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              disabled={!isAllowed}
            />
          </div>

          <p className="rsvp-hint">
            You can revisit this link anytime to update your response.
          </p>

          <button
            type="submit"
            className="rsvp-button"
            disabled={!isAllowed || isSubmitting}
          >
            <Send size={18} />
            {isSubmitting ? 'Submitting…' : 'Confirm RSVP'}
          </button>
        </form>
      </div>
    </section>
  )
}
