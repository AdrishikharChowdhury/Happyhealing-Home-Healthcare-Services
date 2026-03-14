import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.webp";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About Us", to: "about" },
    { label: "Services", to: "services" },
    { label: "Behind The Scenes", to: "behind" },
  ];

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-black/50 backdrop-blur-sm w-max md:w-max px-4 py-4 md:px-4 md:py-4 lg:px-10 lg:py-6 flex text-white justify-center items-center gap-2 md:gap-4 lg:gap-6 fixed top-5 left-1/2 -translate-x-1/2 z-50 border-2 border-white rounded-2xl shadow-2xl">
        <img src={logo} alt="Shiba Logo" className="size-16 rounded-full" />

        <ul className="hidden lg:flex justify-center items-center gap-2 md:gap-6 lg:gap-8 text-sm md:text-md lg:text-xl font-semibold">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={800}
              offset={item.to === "services" ? -50 : 0}
              className="cursor-pointer hover:text-green-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
            >
              {item.label}
            </ScrollLink>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppButton />
        </div>

        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={handleClick}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </nav>
      {isOpen && (
        <div className="lg:hidden fixed top-30 left-0 z-50 text-white right-0 bg-black/95 backdrop-blur-sm py-10 flex flex-col justify-center items-center w-full h-auto min-h-50">
          <ul className="flex flex-col justify-center items-center text-base font-semibold ">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth
                duration={800}
                offset={item.to === "services" ? -50 : 0}
                onClick={handleClick}
                className="cursor-pointer hover:text-green-400 transition-colors px-4 py-3 rounded-lg hover:bg-white/10 w-full text-center"
              >
                {item.label}
              </ScrollLink>
            ))}
          </ul>
          <div className="mt-auto flex justify-center pt-4">
            <WhatsAppButton />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
