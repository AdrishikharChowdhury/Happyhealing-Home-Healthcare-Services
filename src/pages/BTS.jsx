import React from "react";
import bts from "../assets/bts.webp";

const BTS = () => {
  return (
    <div className="w-full h-screen bg-[#354F52] flex justify-center items-start text-white">
      <div className="w-2/3 h-full flex flex-col justify-center items-center gap-10 text-center">
        <h1 className="text-6xl font-semibold">Behind The Scenes</h1>
        <p className="text-2xl/12 tracking-widest w-3/4">
          Shiba Home HealthCare delivers hospital-grade precision right to your
          doorstep. Our nurses prep sterile kits, coordinate seamless shift
          handovers, and log real-time vitals—freeing families to focus on
          recovery. From emergency on-call injections to equipment sterilization
          between visits, we execute ICU-level protocols with startup speed and
          reliability.
        </p>
        <p className="text-2xl/12 tracking-widest w-3/4">
          24/7 critical care teams maintain rapid-response rotations while baby
          care specialists track neonatal metrics and maternal vitals using
          portable diagnostics. Caretakers and maids follow strict infection
          control—PPE protocols, linen hygiene audits, daily equipment
          checks—transforming every home into a protected healing space without
          compromising comfort. Shiba: Medical excellence, startup efficiency.
        </p>
      </div>
      <img src={bts} className="h-full w-1/3" alt="bts" />
    </div>
  );
};

export default BTS;
