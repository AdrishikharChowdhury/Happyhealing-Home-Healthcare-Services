import React from 'react'
import logo from '../assets/logo.webp'
import banner from '../assets/banner.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-black/70 text-white text-xl">
      <div className="flex justify-center items-center gap-6 min-h-screen w-full relative" 
           style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        {/* Black overlay - ONLY this added */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1 }} />
        
        <div style={{ position: 'relative', zIndex: 2 }} className="flex justify-center items-center w-full h-full pt-30">
          <img src={logo} alt="logo" className="size-100" />
          <div className="flex flex-col gap-10 justify-center">
            <p className="text-6xl font-semibold">Your Trusted Partner in Elderly Care</p>
            <p className="text-3xl">Trained caregivers & nurses delivering care at your doorstep </p>
            <button className="font-semibold bg-emerald-600 px-4 py-3 flex justify-center items-center gap-4 rounded-xl text-2xl cursor-pointer border-4 self-center">
              <p>Contact Us</p> 
              <FontAwesomeIcon size="xl" icon={faWhatsapp} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
