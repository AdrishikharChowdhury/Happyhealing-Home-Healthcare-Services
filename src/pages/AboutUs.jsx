import React from "react";
import polaroid from "../assets/polaroid.webp";

const AboutUs = () => {
  return (
    <div id="about" className="w-full min-h-screen bg-[#F9F9F9] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 px-4 md:px-8 xl:px-0 py-12 lg:py-0">
      <div className="p-8 lg:p-20 flex flex-col justify-center items-center gap-4 lg:gap-6 w-full lg:w-3/5">
        <p className="text-3xl md:text-4xl xl:text-6xl font-semibold text-center">About Us</p>
        <p className="text-base md:text-xl xl:text-2xl/12 text-center tracking-wider">
          Shiba Home Health Care is a dedicated provider of comprehensive in-home medical and support services, emphasizing personalized care in the comfort of clients' homes. With the motto "Your Health Our Responsibility," the agency offers flexible 12/24-hour options tailored to diverse needs, including home nursing, critical care, baby and mother care, and home maid services.
        </p>
        <p className="text-base md:text-xl xl:text-2xl/12 text-center tracking-wider">
          Additional on-call services like injections, infusions, and vital checks ensure prompt medical attention without hospital visits. Located at 24 Cross, 7th Sector, Rajiv Gandhi Nagar, HSR Layout, Shiba connects clients through phone (843002379, Shibshankar) and email (healthcareshiba@gmail.com), prioritizing accessibility and reliability for families in the area.
        </p>
      </div>
      <div className="w-full lg:w-2/5 flex justify-center">
        <div className="px-3 md:px-5 pt-3 md:pt-5 pb-10 md:pb-20 shadow-2xl bg-white w-85/100 md:w-3/4 lg:w-85/100 border-2">
          <img src={polaroid} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
