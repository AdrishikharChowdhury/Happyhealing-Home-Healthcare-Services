import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const [year, setyear] = useState(new Date().getFullYear());
  return (
    <div className="w-full bg-[#331832] px-10 py-10 text-white flex flex-col justify-center items-center gap-6">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quick Links:</h1>
        <ul className="flex justify-center items-center gap-20">
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
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <ul className="flex justify-center items-center gap-20">
          <li
            className="hover:scale-125 hover:text-emerald-400 cursor-pointer duration-50"
          >
            24 Cross. 7<sup>th</sup> Sector, Rajiv Gandhi Nagar, HSR Layout,
            Bangalore-102
          </li>
          <li
            className="hover:scale-125 hover:text-emerald-400 cursor-pointer duration-50"
          >
            <a href="tel:+918430002379" className="text-white no-underline hover:scale-125 hover:text-emerald-400 cursor-pointer duration-50">
              +91 84300 02379
            </a>
          </li>
          <li
            className="hover:scale-125 hover:text-emerald-400 cursor-pointer duration-50"
          >
            <a
              href="mailto:healthcareshiba@gmail.com?subject=Shiba%20Service%20Inquiry&body=Hi%20Team%2C%0AI%20need%20home%20nursing..."
              className="text-white no-underline hover:scale-125 hover:text-emerald-400 cursor-pointer duration-50"
            >
              healthcareshiba@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <hr className="text-white bg-white w-full" />
      <p>&copy; {year} Shiba Home HealthCare. All rights reserved.</p>
    </div>
  );
};

export default Footer;
