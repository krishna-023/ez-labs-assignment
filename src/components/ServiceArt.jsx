import React from "react";
import { motion } from "framer-motion";
import arrow from "../assets/arrow.svg";
import award from "../assets/icons/award.svg";
import map from "../assets/icons/map.svg";
import social from "../assets/icons/social.svg";
import artImg from "../assets/art.png";

export default function ServiceArt({ onClose }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4 }}
      className="relative bg-[#fffaf7] rounded-2xl shadow-2xl max-w-5xl w-full p-10 md:p-12 text-gray-800 overflow-hidden"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-gray-700 transition"
      >
        &times;
      </button>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="relative shadow-md border border-[#f7d3c1] bg-white p-3 rounded-md">
            <img
              src={artImg}
              alt="Art Curation"
              className="w-80 h-80 object-cover rounded-md"
            />
            <p className="text-center font-serif mt-3 text-gray-700">
              Art Curation
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl italic text-[#2a2a2a] leading-snug">
            “Art enables us to find ourselves and lose ourselves at the same
            time.”
            <br />
            <span className="text-[#e47852] font-normal text-base">
              – Thomas Merton
            </span>
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            We celebrate creativity through curated art experiences, fostering
            collaboration between artists and audiences. Every piece we exhibit
            tells a story, sparks emotion, and inspires dialogue.
          </p>

          <ul className="mt-4 list-disc ml-6 text-gray-700 space-y-1">
            <li>Art Curation & Exhibitions</li>
            <li>Creative Consultation</li>
            <li>Artist Collaborations</li>
            <li>Gallery Management</li>
            <li>Design & Installation</li>
          </ul>

          <div className="flex items-center gap-3 mt-8">
            <span className="text-sm text-gray-700">Explore Now</span>
            <img
              src={arrow}
              alt="arrow"
              className="w-12 animate-pulse brightness-90"
            />
          </div>
        </motion.div>
      </div>

      <img
        src={award}
        className="absolute top-24 right-12 w-10 opacity-70"
        alt="award"
      />
      <img
        src={social}
        className="absolute bottom-20 left-16 w-10 opacity-70"
        alt="social"
      />
      <img
        src={map}
        className="absolute bottom-36 right-32 w-10 opacity-70"
        alt="map"
      />
    </motion.section>
  );
}
