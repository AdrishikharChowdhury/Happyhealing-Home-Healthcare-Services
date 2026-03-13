import React, { useState } from "react";

const Footer = () => {
  const [year, setyear] = useState(new Date().getFullYear());
  return (
    <div className="w-full bg-[#331832] px-10 py-10 text-white flex flex-col justify-center items-center gap-6">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quick Links:</h1>
        <ul className="flex justify-center items-center gap-20">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Behind The Scenes</li>
        </ul>
      </div>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <ul className="flex justify-center items-center gap-20">
          <li>
            24 Cross. 7<sup>th</sup> Sector, Rajiv Gandhi Nagar, HSR Layout,
            Bangalore-102
          </li>
          <li>
            <a href="tel:+918430002379" className="text-white no-underline">
              +91 84300 02379
            </a>
          </li>
          <li>
            <a
              href="mailto:healthcareshiba@gmail.com?subject=Shiba%20Service%20Inquiry&body=Hi%20Team%2C%0AI%20need%20home%20nursing..."
              className="text-white no-underline"
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
