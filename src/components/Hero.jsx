import React from "react";
import { motion } from "framer-motion";
import mandala from "../assets/mandala.png";
import vlogo from "../assets/vfilms-logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#f7ebe2] text-gray-800 px-6 md:px-16 py-20 overflow-hidden"
    >
      {/* ===== Background Mandala (animated) ===== */}
      <motion.img
        src={mandala}
        alt="Mandala background"
        className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />

      {/* ===== Section Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 z-10"
      >
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1f1b18] mb-3 tracking-wide">
          Home
        </h2>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#e47852] to-[#d75f3e] mx-auto rounded-full shadow-lg shadow-[#e47852]/40"></div>
      </motion.div>

      {/* ===== Hero Content ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 z-10">
        {/* Left: Mandala + Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 flex items-center justify-center bg-[#f7ebe2] rounded-full shadow-xl shadow-[#e47852]/20 border border-[#e47852]/50">
            <img
              src={mandala}
              alt="Mandala Background"
              className="absolute inset-0 w-full h-full opacity-40 object-cover rounded-full"
            />
            <motion.img
              src={vlogo}
              alt="V Films Logo"
              className="relative w-40 md:w-48 object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] leading-tight text-[#1f1b18]">
            <span className="bg-gradient-to-r from-[#e47852] to-[#c14a29] bg-clip-text text-transparent font-semibold">
              Varnan
            </span>{" "}
            is where stories find <br /> their voice and form.
          </h1>

          <h2 className="text-[#c14a29] tracking-wide text-lg font-semibold uppercase">
            Films · Brands · Art
          </h2>

          <p className="text-gray-700 text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            Since 2009, we’ve been telling stories – stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way – by listening with intention. We believe it takes
            trust, patience, and an eye for the unseen to capture what truly
            matters.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#e47852] to-[#d75f3e] text-white shadow-md hover:shadow-xl transition-all"
          >
            Let’s Collaborate →
          </motion.a>
        </motion.div>
      </div>

      {/* ===== Scroll Cue ===== */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#c14a29]/70 text-sm font-medium tracking-wide"
      >
        <span>Scroll Down</span>
        <div className="w-1 h-6 mx-auto mt-1 bg-[#c14a29]/70 rounded-full"></div>
      </motion.div>
    </section>
  );
}
