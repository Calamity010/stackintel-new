"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    "Ring AIR",
    "UltrahumanX",
    "Ovulation Tracking",
    "Rare",
    "M1 CGM",
    "UltraWork",
    "Shop",
    "Careers",
    "For Business",
  ];

  return (
    <header className="bg-black text-white">
      {/* Top Banner */}
      <div className="bg-black text-center text-sm py-1 border-b border-neutral-800">
        <span className="text-white">
          Introducing <strong>PowerPlugs</strong> — health, customized for
          you&nbsp;
          <Link href="#" className="underline text-white">
            ›
          </Link>
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 w-full flex items-center justify-between px-4 py-3 lg:px-10">
        {/* Left Side: Logo + Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white font-bold text-xl">
            <span className="inline-block rotate-45">⛤</span>
          </Link>

          <div className="hidden lg:flex gap-5 text-sm font-medium">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Cart + Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <ShoppingBag className="w-5 h-5 text-white" />
          <button className="bg-blue-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
            Buy now
          </button>
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-3">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href="#"
              className="block text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
