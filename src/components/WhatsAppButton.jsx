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
      className="font-semibold bg-emerald-600 px-5 py-3 flex justify-center items-center gap-4 rounded-xl text-xl cursor-pointer border-4 w-max self-center" 
    >
      <p>Contact Us</p>
      <FontAwesomeIcon icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;
