import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
// import About from './components/About'
import Details from './components/Details'
// import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
// import Registry from './components/Registry'
// import FAQ from './components/FAQ'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

/*
  EDITABLE: Wedding Website Configuration

  This is the main App component that brings together all sections of the wedding website.

  To customize the website:
  1. Edit the content in each individual component file
  2. Modify colors, fonts, and styles in src/index.css
  3. Update images by replacing the URLs in each component
  4. Add or remove sections by importing/removing components below

  All sections are clearly labeled with "EDITABLE" comments to guide customization.
*/

export default function App() {
  return (
    <div className="wedding-website">
      {/* EDITABLE: Navigation - Customize in src/components/Navigation.tsx */}
      <Navigation />

      {/* EDITABLE: Hero Section - Customize in src/components/Hero.tsx */}
      <Hero />

      {/* EDITABLE: Countdown Timer - Customize in src/components/Countdown.tsx */}
      <Countdown />

      {/* EDITABLE: About/Our Story Section - Customize in src/components/About.tsx */}
      {/* <About /> */}

      {/* EDITABLE: Wedding Details Section - Customize in src/components/Details.tsx */}
      <Details />

      {/* EDITABLE: Photo Gallery - Customize in src/components/Gallery.tsx */}
      {/* <Gallery /> */}

      {/* EDITABLE: RSVP Form - Customize in src/components/RSVP.tsx */}
      <RSVP />

      {/* EDITABLE: Gift Registry - Customize in src/components/Registry.tsx */}
      {/* <Registry /> */}

      {/* EDITABLE: FAQ Section - Customize in src/components/FAQ.tsx */}
      {/* <FAQ /> */}

      {/* EDITABLE: Testimonials/Messages - Customize in src/components/Testimonials.tsx */}
      {/* <Testimonials /> */}

      {/* EDITABLE: Contact Form - Customize in src/components/Contact.tsx */}
      <Contact />

      {/* EDITABLE: Footer - Customize in src/components/Footer.tsx */}
      <Footer />
    </div>
  )
}
