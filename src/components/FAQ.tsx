import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'
import './FAQ.css'

/* EDITABLE: FAQ Configuration */
const FAQ_CONFIG = {
  title: 'Frequently Asked Questions',
  questions: [
    {
      question: 'Is parking available at the venue?',
      answer: 'Yes, free parking is available on-site for all guests. The venue has ample parking space.',
    },
    {
      question: 'What is the dress code?',
      answer: 'Semi-formal / beach elegant attire. Think light, breezy fabrics in elegant styles.',
    },
    {
      question: 'Can I bring a plus-one?',
      answer: 'Please RSVP each guest individually. Your invitation will indicate if a plus-one is included.',
    },
    {
      question: 'Are accommodations provided?',
      answer: "We've arranged special rates at Sunset Beach Resort. Please contact the hotel directly and mention the Bhagya & Dulanga wedding for the discounted rate.",
    },
    {
      question: 'Will the ceremony be indoors or outdoors?',
      answer: 'The ceremony will be held outdoors on the beach. The reception will be in the indoor ballroom.',
    },
    {
      question: 'Are children welcome?',
      answer: 'While we love your little ones, we have chosen to make our wedding an adults-only celebration.',
    },
  ], // EDITABLE: Add, remove, or modify questions
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        {/* EDITABLE: Section Icon */}
        <div className="faq-icon">
          <HelpCircle size={48} />
        </div>

        {/* EDITABLE: Section Title */}
        <h2 className="faq-title">{FAQ_CONFIG.title}</h2>

        {/* FAQ Items */}
        <div className="faq-list">
          {FAQ_CONFIG.questions.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
