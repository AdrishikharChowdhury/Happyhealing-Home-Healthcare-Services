import React, { useEffect } from "react";

const Reviews = () => {
  return (
    <div className="w-full h-screen bg-[#354F52] flex flex-col justify-center items-center gap-10 text-white p-20">
      <h1 className="font-semibold text-6xl">Reviews</h1>
      <p className="text-2xl/12 tracking-wider text-center">
        Don't just take our word for it—discover the genuine experiences shared
        by hundreds of families throughout Bengaluru's HAL 3rd Stage, New
        Tippasandra, Indiranagar, and surrounding communities who've entrusted
        their loved ones to HappyHealing Home Healthcare Services. Our rating
        isn't just a number; it represents countless real stories of transformed
        lives and restored peace of mind, from elderly parents rediscovering
        independence through our dedicated caregiver support and physiotherapy
        programs, to busy working parents confidently returning to their careers
        knowing their children receive expert, nurturing childcare with
        educational activities and real-time updates. These heartfelt
        testimonials from clients just like you—capturing moments of joy,
        relief, and gratitude—demonstrate our unwavering commitment to
        compassionate, professional home healthcare that truly makes a
        difference. Scroll down to read their inspiring stories and see why
        families across Bengaluru continue to choose HappyHealing as their
        trusted partner in health and happiness.
      </p>
      <iframe
        src="https://widgets.commoninja.com/iframe/b5b4b178-af1f-4418-9b76-e01de74a54b3"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        className="h-200 border-0"
      ></iframe>
    </div>
  );
};

export default Reviews;
