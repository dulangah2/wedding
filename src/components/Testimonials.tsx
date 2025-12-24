import { MessageCircle, Quote } from 'lucide-react'
import './Testimonials.css'

/* EDITABLE: Testimonials Configuration */
const TESTIMONIALS_CONFIG = {
  title: 'Messages & Blessings',
  messages: [
    {
      text: 'Congratulations, Bhagaya & Dulanga! Wishing you a lifetime of happiness.',
      author: 'Sarah',
    },
    {
      text: "Can't wait to celebrate with you both!",
      author: 'Michael',
    },
    {
      text: 'So excited to see you two tie the knot. You are perfect for each other!',
      author: 'Jessica',
    },
    {
      text: 'May your love story be as magical as a fairytale and your journey together be filled with adventure.',
      author: 'David & Rachel',
    },
    {
      text: 'Congratulations on finding your forever love. Wishing you both endless joy!',
      author: 'Amanda',
    },
    {
      text: 'Here is to love, laughter, and happily ever after. Cheers to the newlyweds!',
      author: 'James',
    },
  ], // EDITABLE: Add, remove, or modify testimonials
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* EDITABLE: Section Icon */}
        <div className="testimonials-icon">
          <MessageCircle size={48} />
        </div>

        {/* EDITABLE: Section Title */}
        <h2 className="testimonials-title">{TESTIMONIALS_CONFIG.title}</h2>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS_CONFIG.messages.map((message, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">{message.text}</p>
              <p className="testimonial-author">— {message.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
