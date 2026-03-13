import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import BTS from './pages/BTS'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <BTS />
      <Footer />
    </div>
  )
}

export default App
