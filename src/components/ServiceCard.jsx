import React from "react";

const ServiceCard = ({ image, heading, details }) => {
  return (
    <div className="w-120 h-full flex justify-start items-center flex-col p-10 bg-black/70 rounded-4xl gap-6 shadow-2xl">
      <img src={image} className="size-60 rounded-full border-4" alt="" />
      <p className="text-4xl font-semibold">{heading}</p>
      <p className="text-2xl/12 text-center tracking-wider">{details}</p>
    </div>
  );
};

export default ServiceCard;
