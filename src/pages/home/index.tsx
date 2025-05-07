import React from 'react'

// impoting sections
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import ContactUs from './components/Contacts'

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <FeatureSection />
      <ContactUs />
    </React.Fragment>
  )
}

export default Home