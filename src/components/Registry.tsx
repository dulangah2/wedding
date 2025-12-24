import { Gift, ExternalLink } from 'lucide-react'
import './Registry.css'

/* EDITABLE: Registry Configuration */
const REGISTRY_CONFIG = {
  title: 'Our Registry',
  subtitle: "Your presence is the greatest gift. If you'd like to celebrate with a gift, here are some options:",
  registries: [
    {
      name: 'Amazon Registry',
      url: 'https://www.amazon.com/wedding/registry', // EDITABLE: Replace with your registry link
      description: 'Find our wish list on Amazon',
    },
    {
      name: 'Target Registry',
      url: 'https://www.target.com/gift-registry', // EDITABLE: Replace with your registry link
      description: 'Browse our registry at Target',
    },
    {
      name: 'Honeymoon Fund',
      url: 'https://www.honeyfund.com', // EDITABLE: Replace with your honeymoon fund link
      description: 'Contribute to our dream honeymoon',
    },
  ], // EDITABLE: Add, remove, or modify registry links
}

export default function Registry() {
  return (
    <section id="registry" className="registry-section">
      <div className="registry-container">
        {/* EDITABLE: Section Icon */}
        <div className="registry-icon">
          <Gift size={48} />
        </div>

        {/* EDITABLE: Section Title */}
        <h2 className="registry-title">{REGISTRY_CONFIG.title}</h2>

        {/* EDITABLE: Section Subtitle */}
        <p className="registry-subtitle">{REGISTRY_CONFIG.subtitle}</p>

        {/* Registry Links */}
        <div className="registry-grid">
          {REGISTRY_CONFIG.registries.map((registry, index) => (
            <a
              key={index}
              href={registry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="registry-card"
            >
              <h3 className="registry-card-title">{registry.name}</h3>
              <p className="registry-card-description">{registry.description}</p>
              <div className="registry-card-link">
                Visit Registry <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
