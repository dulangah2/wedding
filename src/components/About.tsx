import { Heart } from 'lucide-react'
import './About.css'

/* EDITABLE: About Section Configuration */
const ABOUT_CONFIG = {
  title: 'Our Story',
  content: "Bhagya and Dulanga met in college and instantly became best friends. Over the years, their friendship grew into a beautiful love story. Now, they're ready to start the next chapter together!",
  image1: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', // EDITABLE: Replace with your image URL
  image2: 'https://images.pexels.com/photos/1445702/pexels-photo-1445702.jpeg?auto=compress&cs=tinysrgb&w=800', // EDITABLE: Replace with your image URL
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* EDITABLE: Section Icon */}
        <div className="about-icon">
          <Heart size={48} />
        </div>

        {/* EDITABLE: Section Title */}
        <h2 className="about-title">{ABOUT_CONFIG.title}</h2>

        <div className="about-content">
          {/* EDITABLE: Story Text */}
          <div className="about-text">
            <p>{ABOUT_CONFIG.content}</p>
          </div>

          {/* EDITABLE: Images */}
          <div className="about-images">
            <div className="about-image-wrapper">
              <img
                src={ABOUT_CONFIG.image1}
                alt="Bhagya and Dulanga together"
                className="about-image"
              />
            </div>
            <div className="about-image-wrapper">
              <img
                src={ABOUT_CONFIG.image2}
                alt="Bhagya and Dulanga portrait"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
