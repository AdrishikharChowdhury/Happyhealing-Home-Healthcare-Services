import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import BTS from './pages/BTS'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { motion } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true)

  return (
    <AnimatePresence>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center"
        >
          <Navbar />
          <HeroSection />
          <AboutUs />
          <Services />
          <BTS />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
