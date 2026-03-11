import React from "react";
import elderCare from "../assets/elder_care.webp";
import physiotherapy from "../assets/physiotherapy.webp";
import child_care from "../assets/child_care.webp";
import ServiceCard from "../components/ServiceCard";
import DetailCard from "../components/DetailCard";
import home from "../assets/home.webp";
import heart from '../assets/heart.webp'
import run from '../assets/run.webp'
import training from '../assets/training.webp'
import art from '../assets/art.webp'
import hygiene from '../assets/hygiene.webp'

const Services = () => {
  return (
    <div className="w-full h-screen bg-[#9A879D] flex justify-center items-center flex-col text-white px-8">
      <p className="w-full h-auto text-6xl font-semibold text-center py-20 self-start">
        Services
      </p>
      <div className="w-full h-full flex justify-center items-center flex-wrap gap-20">
        <ServiceCard
            image={elderCare}
            heading={`Elder Care`}
            details={`Comprehensive support for seniors aging gracefully at home. From daily living assistance and medication management to companionship and mobility support, our trained caregivers ensure dignity, comfort, and independence for your loved ones in their familiar surroundings.`}
          />
          <ServiceCard
            image={physiotherapy}
            heading={`Physiotherapy`}
            details={`Expert rehabilitation services delivered at your doorstep. Our
              certified physiotherapists create personalized recovery plans for
              post-surgery rehab, chronic pain management, stroke recovery, and
              mobility restoration—helping patients regain strength and
              confidence.`}
          />
          <ServiceCard
            image={child_care}
            heading={`Child Care`}
            details={`Professional nurturing care for infants and young children.
              Trained pediatric caregivers provide feeding assistance,
              developmental activities, hygiene support, and educational play
              while parents are away—ensuring safety, stimulation, and peace of
              mind.`}
          />
      </div>
      <p className="w-full text-2xl font-lighter text-center pt-15 pb-10 self-end">
        Read More
      </p>
    </div>
  );
};

export default Services;
