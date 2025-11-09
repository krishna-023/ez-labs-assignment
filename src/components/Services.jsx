import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mandala from "../assets/mandala.png";
import film from "../assets/film.png";
import branding from "../assets/branding.png";
import art from "../assets/art.png";
import ServiceFilm from "./ServiceFilm";
import ServiceBranding from "./ServiceBranding";
import ServiceArt from "./ServiceArt";

const list = [
  { title: "Film Production", img: film },
  { title: "Branding", img: branding },
  { title: "Art Curation", img: art },
];

export default function Services() {
  const [active, setActive] = useState(null);

  const getModalComponent = () => {
    switch (active?.title) {
      case "Film Production":
        return <ServiceFilm onClose={() => setActive(null)} />;
      case "Branding":
        return <ServiceBranding onClose={() => setActive(null)} />;
      case "Art Curation":
        return <ServiceArt onClose={() => setActive(null)} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="services"
      className="relative py-28 bg-[#f7ebe2] text-center overflow-hidden"
    >
      {/* ===== Background Mandala Animation ===== */}
      <motion.img
        src={mandala}
        alt="Mandala background"
        className="absolute inset-0 w-[130%] h-[130%] object-cover opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />

      {/* ===== Gradient Overlay ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7ebe2]/90 via-[#fdf3ef]/70 to-[#f7ebe2]/90 pointer-events-none"></div>

      {/* ===== Section Header ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mb-16 z-10"
      >
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f1b18] mb-3">
          Our Services
        </h2>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#e47852] to-[#d75f3e] mx-auto rounded-full shadow-lg shadow-[#e47852]/40"></div>
        <p className="text-slate-700 text-lg mt-6 max-w-2xl mx-auto">
          The storyboard reveals the breadth of our craft.
        </p>
      </motion.div>

      {/* ===== Services Grid ===== */}
      <div className="relative flex flex-wrap justify-center gap-10 max-w-6xl mx-auto z-10">
        {list.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(212, 91, 55, 0.25)",
            }}
            className="relative bg-white/80 backdrop-blur-md border border-[#e47852]/30 rounded-xl shadow-lg w-72 cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#e47852]"
            onClick={() => setActive(s)}
          >
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e47852] to-[#d75f3e]"></div>

            {/* Image */}
            <img
              src={s.img}
              alt={s.title}
              className="rounded-t-lg mb-3 object-cover h-44 w-full"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="font-serif text-xl text-[#1f1b18] mb-2">
                {s.title}
              </h3>
              <p className="text-[#c14a29] text-sm font-medium tracking-wide">
                View More →
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== Popup Modal ===== */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              {getModalComponent()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Decorative Bottom Divider ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative w-24 h-[3px] bg-gradient-to-r from-[#e47852] to-[#d75f3e] mx-auto mt-20 rounded-full shadow-lg shadow-[#e47852]/40"
      ></motion.div>
    </section>
  );
}
