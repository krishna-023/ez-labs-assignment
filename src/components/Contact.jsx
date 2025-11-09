import React from "react";
import { motion } from "framer-motion";
import CreativeForm from "./CreativeForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#fdf3ef] text-[#2b2b2b] py-24 px-6 md:px-12 lg:px-20"
    >
      {/* Mandala Corner SVGs */}
      <div className="absolute bottom-0 left-0 opacity-30 w-64 md:w-80">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" stroke="#e47852" strokeWidth="4" strokeDasharray="6 6" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 opacity-30 w-64 md:w-80 rotate-180">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" stroke="#e47852" strokeWidth="4" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* ===== Section Heading ===== */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-5xl text-[#1f1b18] mb-4"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-700 text-lg max-w-2xl mx-auto"
        >
          Let’s collaborate, connect, and create stories that move people.
        </motion.p>
      </div>

      {/* ===== Grid Layout ===== */}
      <div className="relative grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start z-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed max-w-md">
            Whether you have an idea, a question, or simply want to explore how we can work together, we’re just a message away.
            <br />
            Let’s catch up over coffee ☕ <br />
            Great stories always begin with a good conversation.
          </p>

          <div className="flex items-center gap-3 mt-5">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"
            />
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-md border-2 border-[#e47852] rounded-lg p-8 shadow-md"
        >
          <h3 className="text-2xl font-serif text-center mb-2">Join the Story</h3>
          <p className="text-center text-gray-700 mb-6">
            Ready to bring your vision to life? Let’s talk.
          </p>

          {/* Use your existing CreativeForm component */}
          <CreativeForm />

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#e47852] hover:bg-[#d75f3e] text-white px-6 py-2 rounded-full transition-shadow shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </div>

          {/* Footer Contact Info */}
          <div className="text-center mt-6 text-[#e47852] font-medium">
            <a href="mailto:vermita@vramanfilms.co.in" className="hover:underline">
              vermita@vramanfilms.co.in
            </a>{" "}
            · <span>+91 98736 84647</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
