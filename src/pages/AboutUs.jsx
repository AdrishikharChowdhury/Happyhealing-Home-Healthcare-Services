import React from "react";
import polaroid from "../assets/polaroid.webp";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-[#F9F9F9] flex justify-center items-center">
      <div className="p-20 flex flex-col justify-center items-center gap-6 w-3/5">
        <p className="text-6xl font-semibold">About Us</p>
        <p className="text-2xl/12 text-center tracking-widest">
          Shiba Home Health Care is a dedicated provider of comprehensive in-home medical and support services, emphasizing personalized care in the comfort of clients' homes. With the motto "Your Health Our Responsibility," the agency offers flexible 12/24-hour options tailored to diverse needs, including home nursing, critical care, baby and mother care, and home maid services.
        </p>
        <p className="text-2xl/12 text-center tracking-widest">
          Additional on-call services like injections, infusions, and vital checks ensure prompt medical attention without hospital visits. Located at 24 Cross, 7th Sector, Rajiv Gandhi Nagar, HSR Layout, Shiba connects clients through phone (843002379, Shibshankar) and email (healthcareshiba@gmail.com), prioritizing accessibility and reliability for families in the area.
        </p>
      </div>
      <div className="w-2/5">
        <div className="px-5 pt-5 pb-20 shadow-2xl bg-white w-85/100 border-2">
          <img src={polaroid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
