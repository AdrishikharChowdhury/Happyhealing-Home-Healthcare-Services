import React from "react";
import logo from "../assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-black/50 backdrop-blur-sm w-98/100 px-6 pt-3 flex text-white justify-center items-center gap-50 fixed top-5 left-5 z-50 border-2 border-white rounded-2xl">
      <img src={logo} alt="logo" className="" className="size-30" />
      <ul className="flex justify-center gap-16 items-center text-2xl font-semibold">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Reviews</li>
        <li>Subscribe to Us</li>
      </ul>
      <button className="font-semibold bg-emerald-600 px-4 py-3 flex justify-center items-center gap-4 rounded-xl text-2xl cursor-pointer border-4">
        <p>Contact Us</p> 
        <FontAwesomeIcon size="xl" icon={faWhatsapp} />
      </button>
    </nav>
  );
};

export default Navbar;
