import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ image, heading, details, index = 0 }) => {
  return (
    <motion.div 
      className="w-72 md:w-80 lg:w-120 h-auto flex justify-start items-center flex-col p-6 md:p-8 lg:p-10 bg-black/70 rounded-3xl lg:rounded-4xl gap-4 md:gap-6 shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <img src={image} className="size-32 md:size-40 lg:size-50 rounded-full border-2 md:border-4" alt="" />
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">{heading}</p>
      <p className="text-sm md:text-base lg:text-xl/10 text-center tracking-wider">{details}</p>
    </motion.div>
  );
};

export default ServiceCard;
