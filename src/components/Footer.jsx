import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#fdf3ef] border-t border-[#e8cbbf]/60 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-[#5b4a43] font-serif">
        <p className="text-base md:text-lg">
          © {new Date().getFullYear()} <span className="font-semibold">EZ Labs</span> — 
          Crafted frontend demo · <span className="italic">by Krishna</span>
        </p>

        <div className="mt-2 text-sm text-[#8b756b]">
          Designing meaningful visuals & thoughtful digital experiences.
        </div>
      </div>
    </footer>
  );
}
