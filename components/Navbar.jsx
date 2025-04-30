"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = ["About Us", "Products", "Features", "Developers"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-4 py-3 md:px-8 lg:px-12">
        {/* Left side */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/">
            <Image
              src="/landing/logo.png"
              alt="stackintel-logo"
              width={200}
              height={50}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6 text-base font-medium">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Login only shows md+ */}
          <Link
            href="/login"
            className="hidden md:inline-block bg-transparent border border-gray-100 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Log In
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black transition-max-height duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="px-4 space-y-3">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href="#"
              className="block text-gray-400 hover:text-white text-lg font-medium transition"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </Link>
          ))}

          {/* Show login in mobile menu */}
          <Link
            href="#"
            className="block mt-2 bg-gray-800 text-white text-center text-base font-semibold px-4 py-2 rounded-full hover:bg-gray-700 transition"
            onClick={() => setMobileOpen(false)}
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
