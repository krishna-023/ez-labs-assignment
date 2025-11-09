import React from "react";
import { motion } from "framer-motion";
import mandala from "../assets/mandala.png";
import vlogo from "../assets/vfilms-logo.png";

const stats = [
  { number: "85+", label: "Projects" },
  { number: "50+", label: "Happy Clients" },
  { number: "10+", label: "Experts Team" },
];

const brandLogos = [
  { name: "TED" },
  { name: "Coca-Cola" },
  { name: "DF" },
  { name: "Artoon" },
  { name: "Inserve" },
];

export default function AboutUs() {
  return (
    <section
      id="aboutus"
      className="relative bg-[#f7ebe2] text-[#1d2430] px-6 sm:px-8 md:px-12 lg:px-24 py-24 md:py-32 overflow-hidden"
    >
      {/* ===== Animated Mandala Background ===== */}
      <motion.img
        src={mandala}
        alt="Mandala Background"
        className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />

      {/* ===== Overlay Gradient ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7ebe2]/90 via-[#fdf3ef]/80 to-[#f7ebe2]/90 pointer-events-none"></div>

      {/* ===== Section Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-center mb-16 z-10"
      >
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f1b18] mb-3 tracking-wide">
          About Us
        </h2>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#e47852] to-[#d75f3e] mx-auto rounded-full shadow-lg shadow-[#e47852]/40"></div>
        <p className="mt-6 text-lg text-[#3d4852] font-medium font-sans">
          A montage of familiar faces and names.
        </p>
      </motion.div>

      {/* ===== Intro Text ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto text-center text-base text-[#3d4852] leading-relaxed mb-14 z-10"
      >
        Some stories come from the biggest names. Others begin with bold, rising voices.
        We’ve been fortunate to walk alongside both — listening, creating, and building stories that matter.
      </motion.p>

      {/* ===== Stats Cards ===== */}
      <div className="relative flex items-center justify-center gap-6 md:gap-10 mb-20 z-10">
        {stats.map((s, i) => {
          const tilt = i === 0 ? "-rotate-6" : i === 1 ? "rotate-0" : "rotate-6";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`w-52 md:w-60 p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-lg border border-[#e47852]/40 transform ${tilt}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0f1724] mb-1">{s.number}</div>
              <div className="text-sm uppercase tracking-wide text-[#d36d48]">{s.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* ===== Framed Quote ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto border-2 border-[#d36d48]/60 p-10 rounded-xl bg-white/60 backdrop-blur-sm shadow-md mb-24 z-10"
      >
        <p className="font-[Dancing_Script] text-2xl md:text-3xl text-[#163041] leading-relaxed text-center">
          “Every project is more than just a brief — it’s a new chapter waiting to be written.
          Together, we’ve crafted tales that inspire, connect, and endure.”
        </p>
      </motion.div>

      {/* ===== Brand Logos in Semi-Circle ===== */}
      <div className="relative h-64 flex items-end justify-center z-10">
        <div className="relative w-full max-w-3xl h-full">
          {/* Subtle Decorative Arc */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice">
            <path
              d="M50 180 C200 20 600 20 750 180"
              stroke="#f0c6bd"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
          </svg>

          {/* Logos Along the Arc */}
          {brandLogos.map((b, idx) => {
            const positions = [
              { left: "8%", top: "40%", rotate: -40 },
              { left: "26%", top: "22%", rotate: -18 },
              { left: "50%", top: "12%", rotate: 0 },
              { left: "72%", top: "24%", rotate: 18 },
              { left: "90%", top: "44%", rotate: 40 },
            ];
            const pos = positions[idx] ?? positions[2];
            return (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="absolute"
                style={{ left: pos.left, top: pos.top }}
              >
                <div
                  className="flex items-center justify-center w-16 h-10 rounded-md border border-[#f0c6bd] bg-white/90 shadow-md backdrop-blur-sm"
                  style={{ transform: `rotate(${pos.rotate}deg)` }}
                >
                  <span className="text-[#c05621] font-serif text-sm">{b.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===== Centered Logo Overlay (Subtle Brand Identity) ===== */}
      <motion.img
        src={vlogo}
        alt="Varnan Films Logo Overlay"
        className="absolute bottom-10 right-10 w-32 opacity-20 md:opacity-30"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </section>
  );
}
