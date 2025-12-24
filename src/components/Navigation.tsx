import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Navigation.css'
import Logo from '../logo/logo.png' // Import the logo image

/* EDITABLE: Navigation Configuration */
const NAV_CONFIG = {
  links: [
    { label: 'Home', href: '#hero' },
    // { label: 'Our Story', href: '#about' },
    { label: 'Details', href: '#details' },
    // { label: 'Gallery', href: '#gallery' },
    { label: 'RSVP', href: '#rsvp' },
    // { label: 'FAQs', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ], // EDITABLE: Add, remove, or modify navigation links
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* EDITABLE: Logo */}
        <a href="#hero" className="nav-brand">
          <img src={Logo} alt="Bhagya & Dulanga Logo" className="nav-logo" />
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {NAV_CONFIG.links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            {NAV_CONFIG.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
