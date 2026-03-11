import React from "react";

const DetailCard = ({ image,heading,details }) => {
  return (
    <div className="w-1/4 flex justify-center items-center gap-4 flex-col p-4 bg-black">
      <h1 className="text-3xl font-semibold text-center">
        {heading}
      </h1>
      <img src={image} className="w-75" alt="home" />
      <p className="text-xl text-center tracking-wider italic">
        {details}
      </p>
    </div>
  );
};

export default DetailCard;
