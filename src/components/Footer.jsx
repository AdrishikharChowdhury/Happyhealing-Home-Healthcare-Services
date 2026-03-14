import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full bg-[#331832] px-4 md:px-8 lg:px-10 py-8 md:py-10 text-white flex flex-col justify-center items-center gap-6 md:gap-8">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">Quick Links:</h1>
        <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-20 text-sm md:text-base">
          <ScrollLink
            className="hover:scale-125 hover:text-emerald-400 cursor-pointer duration-50"
            to="home"
            smooth
            duration={800}
          >
            Home
          </ScrollLink>
          <ScrollLink
            className="hover:scale-125 hover:text-emerald-400 cursor-pointer duration-50"
            to="about"
            smooth
            duration={800}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            className="hover:scale-125 hover:text-emerald-400 cursor-pointer duration-50"
            to="services"
            smooth
            duration={800}
            offset={-100}
          >
            Services
          </ScrollLink>
          <ScrollLink
            className="hover:scale-125 hover:text-emerald-400 cursor-pointer duration-50"
            to="behind"
            smooth
            duration={800}
          >
            Behind The Scenes
          </ScrollLink>
        </ul>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">Contact Us</h1>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 lg:gap-20 text-xs md:text-sm lg:text-base text-center md:text-left">
          <li
            className="hover:scale-105 hover:text-emerald-400 cursor-pointer duration-50"
          >
            24 Cross. 7<sup>th</sup> Sector, Rajiv Gandhi Nagar, HSR Layout,
            Bangalore-102
          </li>
          <li
            className="hover:scale-105 hover:text-emerald-400 cursor-pointer duration-50"
          >
            <a href="tel:+918413002379" className="text-white no-underline hover:text-emerald-400 cursor-pointer">
              +91 841300 2379
            </a>
          </li>
          <li
            className="hover:scale-105 hover:text-emerald-400 cursor-pointer duration-50"
          >
            <a
              href="mailto:healthcareshiba@gmail.com?subject=Shiba%20Service%20Inquiry&body=Hi%20Team%2C%0AI%20need%20home%20nursing..."
              className="text-white no-underline hover:text-emerald-400 cursor-pointer"
            >
              healthcareshiba@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <hr className="border-white w-full" />
      <p className="text-sm md:text-base text-center">&copy; {year} Shiba Home HealthCare. All rights reserved.</p>
    </div>
  );
};

export default Footer;
