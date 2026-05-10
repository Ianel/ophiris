"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 transition-all duration-300 ${
        isScrolled ? "py-3 bg-black/90" : "py-4 glass"
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/assets/images/logo.png"
            alt="Ophiris Logo"
            width={160}
            height={72}
            className="w-24 h-12 md:w-40 md:h-18 object-contain"
          />
        </div>

        <div className="hidden md:flex md:items-center space-x-3 lg:space-x-6 text-sm uppercase tracking-widest">
          <a href="#home" className="hover:text-[#C5A059] transition-colors">
            Home
          </a>
          <a href="#tours" className="hover:text-[#C5A059] transition-colors">
            Tours & Travel
          </a>
          <a href="#invest" className="hover:text-[#C5A059] transition-colors">
            Investment
          </a>
          <a href="#trade" className="hover:text-[#C5A059] transition-colors">
            Import & Export
          </a>
          <a href="#training" className="hover:text-[#C5A059] transition-colors">
            Training
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all rounded-full"
          >
            Contact
          </a>
        </div>

        <button onClick={toggleMobileMenu} className="md:hidden text-2xl">
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`transition-all duration-300 gap-y-4 md:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? "flex mt-4" : "hidden"
        }`}
      >
        <a
          href="#home"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-2 hover:text-[#C5A059] transition-colors"
        >
          Home
        </a>
        <a
          href="#tours"
          onClick={() => setIsMobileMenuOpen(false)}
          className="hover:text-[#C5A059] transition-colors"
        >
          Tours & Travel
        </a>
        <a
          href="#invest"
          onClick={() => setIsMobileMenuOpen(false)}
          className="hover:text-[#C5A059] transition-colors"
        >
          Investment
        </a>
        <a
          href="#trade"
          onClick={() => setIsMobileMenuOpen(false)}
          className="hover:text-[#C5A059] transition-colors"
        >
          Import & Export
        </a>
        <a
          href="#training"
          onClick={() => setIsMobileMenuOpen(false)}
          className="hover:text-[#C5A059] transition-colors"
        >
          Training
        </a>
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mb-2 px-6 py-2 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all rounded-full"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
