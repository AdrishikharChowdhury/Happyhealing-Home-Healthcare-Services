import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.webp";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => {
  return (
    <nav className="bg-black/50 backdrop-blur-sm w-5/8 py-6 flex text-white justify-center items-center gap-6 fixed top-5 left-1/2 -translate-x-1/2 z-50 border-2 border-white rounded-2xl shadow-2xl">
      <img src={logo} alt="Shiba Logo" className="w-16 h-16 rounded-full" />
      
      <ul className="flex justify-center items-center gap-8 text-xl font-semibold">
        <ScrollLink 
          to="home" smooth duration={800}
          className="cursor-pointer hover:text-green-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
        >
          Home
        </ScrollLink>
        <ScrollLink 
          to="about" smooth duration={800}
          className="cursor-pointer hover:text-green-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
        >
          About Us
        </ScrollLink>
        <ScrollLink 
          to="services" smooth duration={800} offset={-50}
          className="cursor-pointer hover:text-green-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
        >
          Services
        </ScrollLink>
        <ScrollLink 
          to="behind" smooth duration={800}
          className="cursor-pointer hover:text-green-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
        >
          Behind The Scenes
        </ScrollLink>
      </ul>
      
      <WhatsAppButton />
    </nav>
  );
};

export default Navbar;
