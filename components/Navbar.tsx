// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // Importing the hamburger icon

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-blue-800">
      <div className="container px-4 lg:px-6 h-14 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link className="flex items-center" href="/">
          <span className="text-2xl font-bold text-blue-500">Logo</span>
          <span className="text-2xl font-bold text-gray-400">Here</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 text-gray-400"
            href="/#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 text-gray-400"
            href="/#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 text-gray-400"
            href="/#contact"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black/90 border-t border-blue-800">
          <ul className="flex flex-col px-4 py-2 space-y-1">
            <li>
              <Link
                className="block text-sm font-medium hover:text-blue-500 text-gray-400"
                href="/#features"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="block text-sm font-medium hover:text-blue-500 text-gray-400"
                href="/#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="block text-sm font-medium hover:text-blue-500 text-gray-400"
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
