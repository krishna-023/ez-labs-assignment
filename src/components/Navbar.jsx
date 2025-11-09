import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fdf3ef]/70 backdrop-blur-md border-b border-[#e8cbbf]/70 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#e47852] to-[#d35e3d] flex items-center justify-center text-white font-bold text-lg shadow-md">
            EZ
          </div>
          <h1 className="text-[#2b2b2b] font-serif text-xl tracking-wide">
            EZ Labs
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-[#403a36]">
          <a href="#aboutus" className="hover:text-[#d35e3d] transition-colors duration-200">
            About Us
          </a>
          <a href="#services" className="hover:text-[#d35e3d] transition-colors duration-200">
            Services
          </a>
          <a href="#portfolio" className="hover:text-[#d35e3d] transition-colors duration-200">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-[#d35e3d] transition-colors duration-200">
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[#403a36] bg-white/70 border border-[#e8cbbf]/50 px-3 py-2 rounded-md text-sm font-medium shadow-sm"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#fffaf7] border-t border-[#e8cbbf]/50 shadow-md"
          >
            <div className="px-6 py-5 flex flex-col gap-4 text-center text-[#403a36] font-medium">
              <a
                href="#aboutus"
                className="hover:text-[#d35e3d] transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                About Us
              </a>
              <a
                href="#services"
                className="hover:text-[#d35e3d] transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="hover:text-[#d35e3d] transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="hover:text-[#d35e3d] transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
