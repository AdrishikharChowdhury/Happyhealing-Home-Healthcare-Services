import React from "react";
import logo from "../assets/logo.webp";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => {
  return (
    <nav className="bg-black/50 backdrop-blur-sm w-5/8 py-6 flex text-white justify-center items-center gap-25 fixed top-5 left-85 z-50 border-2 border-white rounded-2xl self-center">
      <img src={logo} alt="logo" className="size-25" />
      <ul className="flex justify-center gap-16 items-center text-xl font-semibold">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Behind The Scenes</li>
      </ul>
      <WhatsAppButton />
    </nav>
    
  );
};

export default Navbar;
