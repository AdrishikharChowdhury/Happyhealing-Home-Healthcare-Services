import React from "react";

const ServiceCard = ({ image, heading, details }) => {
  return (
    <div className="w-72 md:w-80 lg:w-120 h-auto flex justify-start items-center flex-col p-6 md:p-8 lg:p-10 bg-black/70 rounded-3xl lg:rounded-4xl gap-4 md:gap-6 shadow-2xl">
      <img src={image} className="size-32 md:size-40 lg:size-50 rounded-full border-2 md:border-4" alt="" />
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">{heading}</p>
      <p className="text-sm md:text-base lg:text-xl/10 text-center tracking-wider">{details}</p>
    </div>
  );
};

export default ServiceCard;
