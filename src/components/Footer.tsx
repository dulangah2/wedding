import { Heart, Share2 } from 'lucide-react'
import './Footer.css'

/* EDITABLE: Footer Configuration */
const FOOTER_CONFIG = {
  coupleName: 'Bhagya & Dulanga',
  year: new Date().getFullYear(),
  socialLinks: [
    // { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' }, // EDITABLE: Replace with your social media URLs
    // { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    // { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
  ],
  showSocialShare: false, // EDITABLE: Set to false to hide social sharing
}

export default function Footer() {
  const handleShare = async () => {
    const shareData = {
      title: `${FOOTER_CONFIG.coupleName} Wedding`,
      text: `Join us to celebrate the wedding of ${FOOTER_CONFIG.coupleName}!`,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
      }
    } catch (err) {
      console.error('Error sharing:', err)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Links */}
        <div className="footer-social">
          {FOOTER_CONFIG.socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                <Icon size={24} />
              </a>
            )
          })}
        </div>

        {/* Share Button */}
        {FOOTER_CONFIG.showSocialShare && (
          <button className="share-button" onClick={handleShare}>
            <Share2 size={20} />
            Share Our Wedding
          </button>
        )}

        {/* Copyright */}
        <div className="footer-content">
          <Heart size={20} className="heart-icon" />
          <p className="footer-text">
            {FOOTER_CONFIG.coupleName} {FOOTER_CONFIG.year}
          </p>
        </div>

        <p className="footer-credit">
          Made with love for our special day
        </p>
      </div>
    </footer>
  )
}
