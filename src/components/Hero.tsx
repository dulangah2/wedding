import { ChevronDown } from 'lucide-react'
import './Hero.css'

/* EDITABLE: Hero Section Configuration */
const HERO_CONFIG = {
  coupleName1: 'Bhagaya',
  coupleName2: 'Dulanga',
  weddingDate: 'January 30, 2026',
  welcomeLine: "We can't wait to celebrate our special day with you!",
  heroImage: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1920', // EDITABLE: Replace with your hero image URL
  backgroundColor: '#cb05e1ff', // EDITABLE: Soft pastel pink background
}

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section">
      {/* EDITABLE: Background Image */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${HERO_CONFIG.heroImage})`,
          backgroundColor: HERO_CONFIG.backgroundColor
        }}
      />

      {/* EDITABLE: Overlay Color and Opacity */}
      <div className="hero-overlay" />

      <div className="hero-content">
        {/* EDITABLE: Couple Names */}
        <h1 className="hero-names animate-fade-in-up">
          {HERO_CONFIG.coupleName1} <span className="ampersand">&</span> {HERO_CONFIG.coupleName2}
        </h1>

        {/* EDITABLE: Wedding Date */}
        <p className="hero-date animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {HERO_CONFIG.weddingDate}
        </p>

        {/* EDITABLE: Welcome Message */}
        <p className="hero-welcome animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {HERO_CONFIG.welcomeLine}
        </p>

        {/* Scroll Indicator */}
        <button
          className="scroll-indicator animate-float"
          onClick={scrollToNext}
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}
