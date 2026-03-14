import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.webp";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About Us", to: "about" },
    { label: "Services", to: "services" },
    { label: "Behind The Scenes", to: "behind" },
  ];

  const handleClick = () => setIsOpen(!isOpen);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />
            <motion.div
              ref={menuRef}
              className="lg:hidden fixed bottom-0 left-0 right-0 z-50 text-white bg-black/95 backdrop-blur-sm py-8 flex flex-col justify-center items-center w-full rounded-t-2xl border-t-2 border-white border-x-2"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <ul className="flex flex-col justify-center items-center text-base font-semibold gap-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ScrollLink
                      to={item.to}
                      smooth
                      duration={800}
                      offset={item.to === "services" ? -50 : 0}
                      onClick={handleClose}
                      className="cursor-pointer hover:text-green-400 transition-colors px-4 py-3 rounded-lg hover:bg-white/10 w-full text-center block"
                    >
                      {item.label}
                    </ScrollLink>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <WhatsAppButton />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
