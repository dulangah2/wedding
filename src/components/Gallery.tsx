import { Camera } from 'lucide-react'
import './Gallery.css'

/* EDITABLE: Gallery Configuration */
const GALLERY_CONFIG = {
  title: 'Our Moments',
  images: [
    {
      url: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bhagya and Dulanga at the beach',
    },
    {
      url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bhagya and Dulanga laughing together',
    },
    {
      url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bhagya and Dulanga portrait',
    },
    {
      url: 'https://images.pexels.com/photos/1445702/pexels-photo-1445702.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bhagya and Dulanga close-up',
    },
    {
      url: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bhagya and Dulanga outdoors',
    },
    {
      url: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bhagya and Dulanga candid',
    },
  ], // EDITABLE: Add or replace image URLs
}

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* EDITABLE: Section Icon */}
        <div className="gallery-icon">
          <Camera size={48} />
        </div>

        {/* EDITABLE: Section Title */}
        <h2 className="gallery-title">{GALLERY_CONFIG.title}</h2>

        {/* EDITABLE: Image Grid */}
        <div className="gallery-grid">
          {GALLERY_CONFIG.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image.url}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
