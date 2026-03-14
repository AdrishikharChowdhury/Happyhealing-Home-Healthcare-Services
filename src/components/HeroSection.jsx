import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.webp";
import banner from "../assets/banner.webp";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <div id="home" className="flex justify-center items-center w-full min-h-screen bg-black/70 text-white text-xl">
      <div
        className="flex justify-center items-center gap-6 min-h-screen w-full relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 1,
          }}
        />

        <div
          style={{ position: "relative", zIndex: 2 }}
          className="flex xl:flex-row flex-col justify-center items-center w-full h-full pt-30 gap-10"
        >
          <motion.img 
            src={logo} 
            alt="logo" 
            className="size-40 md:size-60 lg:size-80 xl:size-100"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div 
            className="flex flex-col gap-4 lg:gap-10 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold">
              Shiba Home HealthCare Service
            </p>
            <p className="sm:text-lg md:text-xl lg:text-3xl text-center">Your health our responsibility</p>
            <WhatsAppButton />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
