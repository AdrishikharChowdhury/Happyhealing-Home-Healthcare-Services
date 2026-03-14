import React from "react";
import { motion } from "framer-motion";
import home_nurse from "../assets/home_nurse.webp";
import critical_issues from "../assets/critical_issues.webp";
import babycare from "../assets/babycare.webp";
import caretaker from "../assets/caretaker.webp";
import home_maid from "../assets/home_maid.webp";
import vitality from "../assets/vitality.webp";
import ServiceCard from "../components/ServiceCard";

const services = [
  { image: home_nurse, heading: "Home Nursing Services", details: "Professional nursing care delivered at home for daily health monitoring and support." },
  { image: critical_issues, heading: "Critical Care Services", details: "Intensive care by skilled staff for complex medical conditions, available around the clock." },
  { image: babycare, heading: "Baby & Mother Care", details: "Dedicated postpartum and infant care to ensure mother and baby well-being." },
  { image: caretaker, heading: "Care Taker Services", details: "Compassionate personal assistance for daily living and companionship." },
  { image: home_maid, heading: "Home Maid Services", details: "Reliable household help for cleaning, cooking, and chores." },
  { image: vitality, heading: "Injection/Infusion/Vital Check", details: "On-call administration of injections, infusions, and vital sign assessments." },
];

const Services = () => {
  return (
    <div id="services" className="w-full min-h-screen bg-[#9A879D] flex justify-center items-center flex-col text-white px-4 md:px-6 lg:px-8 gap-8 md:gap-10 py-12 md:py-16 lg:py-20">
      <motion.p 
        className="w-full h-auto text-3xl md:text-4xl xl:text-6xl font-semibold text-center self-start"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Services
      </motion.p>
      <div className="w-full h-full flex justify-center items-center flex-wrap gap-8 md:gap-12 lg:gap-20">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
