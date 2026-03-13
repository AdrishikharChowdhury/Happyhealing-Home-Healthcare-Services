import React from "react";
import home_nurse from "../assets/home_nurse.webp";
import critical_issues from "../assets/critical_issues.webp";
import babycare from "../assets/babycare.webp";
import caretaker from "../assets/caretaker.webp";
import home_maid from "../assets/home_maid.webp";
import vitality from "../assets/vitality.webp";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div id="services" className="w-full min-h-screen bg-[#9A879D] flex justify-center items-center flex-col text-white px-8 gap-10 py-20">
      <p className="w-full h-auto text-6xl font-semibold text-center self-start">
        Services
      </p>
      <div className="w-full h-full flex justify-center items-center flex-wrap gap-20">
        <ServiceCard
          image={home_nurse}
          heading={`Home Nursing Services`}
          details={`Professional nursing care delivered at home for daily health monitoring and support.`}
        />
        <ServiceCard
          image={critical_issues}
          heading={`Critical Care Services`}
          details={`Intensive care by skilled staff for complex medical conditions, available around the clock.`}
        />
        <ServiceCard
          image={babycare}
          heading={`Baby & Mother Care`}
          details={`Dedicated postpartum and infant care to ensure mother and baby well-being.`}
        />
        <ServiceCard
          image={caretaker}
          heading={`Care Taker Services`}
          details={`Compassionate personal assistance for daily living and companionship.`}
        />
        <ServiceCard
          image={home_maid}
          heading={`Home Maid Services`}
          details={`Reliable household help for cleaning, cooking, and chores.`}
        />
        <ServiceCard
          image={vitality}
          heading={`Injection/Infusion/Vital Check`}
          details={`On-call administration of injections, infusions, and vital sign assessments.`}
        />
      </div>
    </div>
  );
};

export default Services;
