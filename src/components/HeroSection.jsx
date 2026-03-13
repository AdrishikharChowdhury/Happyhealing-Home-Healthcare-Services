import React from "react";
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
        {/* Black overlay - ONLY this added */}
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
          className="flex justify-center items-center w-full h-full pt-30 gap-10"
        >
          <img src={logo} alt="logo" className="size-100" />
          <div className="flex flex-col gap-10 justify-center">
            <p className="text-6xl font-semibold">
              Shiba Home HealthCare Service
            </p>
            <p className="text-3xl text-center">Your health our responsibility</p>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
