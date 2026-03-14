import React from "react";
import { motion } from "framer-motion";
import bts from "../assets/bts.webp";
import bts_res from "../assets/bts_res.webp";

const BTS = () => {
  return (
    <div id="behind" className="w-full h-auto lg:h-screen bg-[#354F52] flex flex-col lg:flex-row justify-center items-start text-white">
      <motion.img 
        src={bts_res} 
        className="h-64 md:h-80 lg:hidden w-full object-cover" 
        alt="bts"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.img 
        src={bts} 
        className="hidden lg:block lg:h-full lg:w-1/3 object-cover" 
        alt="bts"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="w-full lg:w-2/3 h-auto lg:h-full flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 text-center px-4 md:px-8 py-12 lg:py-0 order-first lg:order-last"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl xl:text-6xl font-semibold">Behind The Scenes</h1>
        <p className="text-base md:text-xl xl:text-2xl/12 tracking-wider xl:tracking-widest w-full xl:w-3/4">
          Shiba Home HealthCare delivers hospital-grade precision right to your
          doorstep. Our nurses prep sterile kits, coordinate seamless shift
          handovers, and log real-time vitals—freeing families to focus on
          recovery. From emergency on-call injections to equipment sterilization
          between visits, we execute ICU-level protocols with startup speed and
          reliability.
        </p>
        <p className="text-base md:text-xl xl:text-2xl/12 tracking-wider xl:tracking-widest w-full xl:w-3/4">
          24/7 critical care teams maintain rapid-response rotations while baby
          care specialists track neonatal metrics and maternal vitals using
          portable diagnostics. Caretakers and maids follow strict infection
          control—PPE protocols, linen hygiene audits, daily equipment
          checks—transforming every home into a protected healing space without
          compromising comfort. Shiba: Medical excellence, startup efficiency.
        </p>
      </motion.div>
    </div>
  );
};

export default BTS;
