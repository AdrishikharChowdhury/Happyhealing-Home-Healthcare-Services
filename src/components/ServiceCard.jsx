import React from "react";

const ServiceCard = ({ image, heading, details }) => {
  return (
    <div className="w-120 h-120 flex justify-start items-center flex-col p-10 bg-black/70 rounded-4xl gap-6 shadow-2xl">
      <img src={image} className="size-50 rounded-full border-4" alt="" />
      <p className="text-3xl font-semibold text-center">{heading}</p>
      <p className="text-xl/10 text-center tracking-wider">{details}</p>
    </div>
  );
};

export default ServiceCard;
