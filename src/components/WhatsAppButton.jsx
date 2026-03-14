import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const phoneNumber = "918430002379"; // +91 84300 02379
  const message = "Hi! Shiba Home HealthCare তে appointment নিতে চাই।"; // Pre-filled message

  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="font-semibold bg-emerald-600 px-3 py-2 md:px-5 md:py-3 flex justify-center items-center gap-2 md:gap-4 rounded-xl text-sm md:text-xl cursor-pointer border-2 md:border-4 w-max self-center" 
    >
      <p className="hidden md:block">Contact Us</p>
      <FontAwesomeIcon icon={faWhatsapp} className="text-lg md:text-xl" />
    </button>
  );
};

export default WhatsAppButton;
