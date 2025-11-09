import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CamGroup from "../assets/CamGroup.jpg";
import mandala from "../assets/mandala.png";
import film from "../assets/film.png";
import brandLogo from "../assets/brandlogo.jpg";

const reels = [
  {
    id: 1,
    thumb: film,
    video: "https://www.youtube.com/embed/myZKajZ7JRs",
    title: "The Journey Begins",
  },
];

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const next = () => {
    setIsPlaying(false);
    setIndex((i) => (i + 1) % reels.length);
  };
  const prev = () => {
    setIsPlaying(false);
    setIndex((i) => (i - 1 + reels.length) % reels.length);
  };

  const current = reels[index];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#fffaf7] py-24 text-center"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#fff3eb] via-[#fcefe8] to-[#f8dfd3]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-[#ffdac1] rounded-full blur-[180px] opacity-40"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-25%] right-[-15%] w-[700px] h-[700px] bg-[#f8c6af] rounded-full blur-[200px] opacity-40"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src={mandala}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2 }}
        className="absolute w-[800px] right-[-280px] top-[-150px] rotate-[25deg] select-none pointer-events-none"
      />
      <motion.img
        src={CamGroup}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute w-[650px] left-[-200px] bottom-[-120px] select-none pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl text-[#1f1b18] mb-4 tracking-tight"
        >
          Our Portfolio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-slate-700 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          A glimpse into our cinematic artistry — where every frame speaks a
          story, and every story leaves an impression.
        </motion.p>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10">
        <motion.div
          className="relative w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-lg border border-[#e9cfc3]/60 bg-white/60"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <button
              onClick={prev}
              className="px-5 h-[400px] hover:bg-[#fff3eb]/60 transition rounded-l-[2rem] flex items-center justify-center"
            >
              <span className="text-5xl text-[#4a4039] hover:scale-110 transition-transform">
                ‹
              </span>
            </button>

            <div className="relative flex-1 bg-[#000] overflow-hidden rounded-lg group">
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.img
                    key={current.thumb}
                    src={current.thumb}
                    alt={current.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="object-cover w-full h-[400px] brightness-90 group-hover:brightness-100 transition-all duration-500"
                  />
                ) : (
                  <motion.iframe
                    key={current.video}
                    src={current.video}
                    title={current.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[400px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </AnimatePresence>

              {/* Overlay Logo */}
              <motion.img
                src={brandLogo}
                alt="EZ Labs logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 m-auto w-44 md:w-60 mix-blend-multiply pointer-events-none"
              />

              {!isPlaying && (
                <motion.button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-[#e05b42] w-20 h-20 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/50 backdrop-blur-sm">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.button>
              )}
            </div>

            <button
              onClick={next}
              className="px-5 h-[400px] hover:bg-[#fff3eb]/60 transition rounded-r-[2rem] flex items-center justify-center"
            >
              <span className="text-5xl text-[#4a4039] hover:scale-110 transition-transform">
                ›
              </span>
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex justify-between items-end">
            <h3 className="text-white font-serif text-xl italic tracking-wide">
              {current.title}
            </h3>
            <p className="text-sm text-gray-300">
              {index + 1} / {reels.length}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
