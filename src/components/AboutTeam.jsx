import React from "react";
import { motion } from "framer-motion";
import teampic from "../assets/group.png";
import mandala from "../assets/mandala.png"; // same mandala as Hero for cohesion

export default function AboutTeam() {
  return (
    <section
      id="about-team"
      className="relative bg-[#f7ebe2] text-[#1e2a32] px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden font-[Playfair_Display]"
    >
      {/* ===== Animated Mandala Background ===== */}
      <motion.img
        src={mandala}
        alt="Mandala background"
        className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 140, ease: 'linear' }}
      />

      {/* ===== Gradient Overlay ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7ebe2]/90 via-[#fdf3ef]/70 to-[#f7ebe2]/90 pointer-events-none" />

      {/* ===== Decorative Top Border ===== */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#e9cfc6]" />

      {/* ===== Section Heading ===== */}
      <div className="relative text-center mb-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-5xl text-[#1f1b18] mb-3"
        >
          About Team
        </motion.h2>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#e47852] to-[#d75f3e] mx-auto rounded-full shadow-lg shadow-[#e47852]/40" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-700 text-lg max-w-2xl mx-auto mt-6"
        >
          A creative collective blending film, branding, and art — united by
          passion and storytelling.
        </motion.p>
      </div>

      {/* ===== Main Grid ===== */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center z-10">
        {/* ===== Left Column ===== */}
        <div className="md:col-span-5 flex flex-col items-start gap-10 relative">
          {/* Sticky Note Card */}
          <motion.div
            initial={{ opacity: 0, rotate: -8, y: -12 }}
            whileInView={{ opacity: 1, rotate: -5, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-[#fff8d9] w-72 md:w-80 p-6 md:p-8 rounded-md shadow-[12px_16px_34px_rgba(17,24,39,0.08)] -rotate-6 border border-[#e9cfc6]"
          >
            <p className="text-sm leading-relaxed text-[#2b3b46]">
              Some craft films. Some build brands. Some curate art. We bring it
              all together — a collective of storytellers driven by one belief:
              every project deserves to be more than just a message; it should
              become a masterpiece.
            </p>

            {/* Decorative Pin */}
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#f2b8a3] shadow-sm flex items-center justify-center text-white">
              •
            </div>
          </motion.div>

          {/* Illustration Accent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-48 md:w-56"
          >
            <svg
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g fill="none" stroke="#f2b8a3" strokeWidth="2">
                <rect
                  x="10"
                  y="30"
                  width="100"
                  height="70"
                  rx="4"
                  fill="#fdf1ec"
                />
                <path d="M16 30 L30 14 L90 14 L104 30" stroke="#f2b8a3" />
                <rect
                  x="36"
                  y="48"
                  width="48"
                  height="42"
                  fill="#ffffff"
                  stroke="none"
                />
              </g>
            </svg>
          </motion.div>
        </div>

        {/* ===== Right Column ===== */}
        <div className="md:col-span-7 relative flex flex-col items-center md:items-end">
          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={teampic}
              alt="Creative team collective"
              className="w-[400px] md:w-[540px] object-contain rounded-md shadow-[8px_12px_32px_rgba(0,0,0,0.08)] border border-[#e9cfc6]"
              loading="lazy"
            />

            {/* Hand-drawn Arrows */}
            <svg
              className="absolute -left-20 top-8 w-64 h-32 pointer-events-none"
              viewBox="0 0 260 120"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M220 90 C180 70 150 60 110 50"
                stroke="#2c3e50"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Role Labels */}
            <div className="absolute -right-40 top-10 text-sm italic text-[#163041]">
              Film Makers
            </div>
            <div className="absolute -left-36 top-24 text-sm italic text-[#163041]">
              Branding Experts
            </div>
            <div className="absolute -right-36 bottom-10 text-sm italic text-[#163041]">
              Art Curators
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ea7b4a] to-[#d9572b] text-white text-sm tracking-wide shadow-md hover:scale-105 transition-transform duration-200"
              aria-label="View Portfolio"
            >
              View Portfolio
            </button>
          </motion.div>
        </div>
      </div>

      {/* ===== Bottom Divider ===== */}
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
