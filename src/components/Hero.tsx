import { ChevronDown } from 'lucide-react'
import './Hero.css'

/* EDITABLE: Hero Section Configuration */
const HERO_CONFIG = {
  coupleName1: 'Bhagya',
  coupleName2: 'Dulanga',
  weddingDate: 'January 30, 2026',
  welcomeLine:
    'We would love to celebrate this special moment with you. 🫶\nYour presence will truly make our day unforgettable ✨',
  heroImage:
    'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1920',
  backgroundColor: '#cb05e1ff',
}

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${HERO_CONFIG.heroImage})`,
          backgroundColor: HERO_CONFIG.backgroundColor,
        }}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-names animate-fade-in-up">
          {HERO_CONFIG.coupleName1}
          <span className="ampersand"> & </span>
          {HERO_CONFIG.coupleName2}
        </h1>

        <p
          className="hero-date animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {HERO_CONFIG.weddingDate}
        </p>

        <p
          className="hero-welcome animate-fade-in-up"
          style={{ animationDelay: '0.4s', whiteSpace: 'pre-line' }}
        >
          {HERO_CONFIG.welcomeLine}
        </p>

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
