import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import AboutTeam from "./components/AboutTeam";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf3ef] text-[#272422] font-serif selection:bg-[#f4c7ac]/40">
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <Hero />
       <AboutTeam />
        <AboutUs />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
