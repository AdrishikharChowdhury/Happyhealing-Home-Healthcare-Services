import React from "react";
import polaroid from "../assets/polaroid.webp";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-[#F9F9F9] flex justify-center items-center">
      <div className="p-20 flex flex-col justify-center items-center gap-6 w-3/5">
        <p className="text-6xl font-semibold">About Us</p>
        <p className="text-2xl/12 text-center tracking-widest">
          HappyHealing Home Healthcare Services is a trusted Bengaluru-based
          provider revolutionizing elderly care by bringing professional medical
          support directly to your doorstep. We enhance seniors' quality of life
          through personalized, dignified in-home care—from medication
          management and vital monitoring to hygiene assistance and mobility
          support. Operating 24/7 from{" "}
          <b>
            7th Main Road, next to Mood for Food, HAL 3rd Stage, New Tippasandra
          </b>
          , our trained caregivers combine medical expertise with genuine
          compassion to ensure your loved ones age comfortably and independently
          at home.
        </p>
        <p className="text-2xl/12 text-center tracking-widest">
          At HappyHealing, our mission is to provide expert home health care
          that prioritizes the comfort and well-being of our clients. We strive
          to enhance the quality of life for seniors and individuals with health
          challenges, ensuring they receive compassionate care in their own
          homes.
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
