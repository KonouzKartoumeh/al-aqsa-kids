"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg">
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 text-white hover:opacity-90 transition"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🕌</span>
            </div>
            <span className="font-bold text-xl">Al-Aqsa Kids</span>
          </Link>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" icon="🏠">Home</NavLink>
            <NavLink href="/learn" icon="📚">Learn</NavLink>
            <NavLink href="/qa" icon="❓">Quiz</NavLink>
            <NavLink href="/rewards" icon="🌟">Rewards</NavLink>
            <NavLink href="/profile" icon="👤">Profile</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-emerald-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-emerald-500">
          <MobileNavLink href="/" icon="🏠">Home</MobileNavLink>
          <MobileNavLink href="/learn" icon="📚">Learn</MobileNavLink>
          <MobileNavLink href="/qa" icon="❓">Quiz</MobileNavLink>
          <MobileNavLink href="/rewards" icon="🌟">Rewards</MobileNavLink>
          <MobileNavLink href="/profile" icon="👤">Profile</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

// Desktop Navigation Link Component
function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: string }) {
  return (
    <Link
      href={href}
      className="text-white hover:bg-emerald-600 px-4 py-2 rounded-full transition-all duration-200 
                 transform hover:scale-105 flex items-center space-x-2 font-medium"
    >
      <span className="text-xl">{icon}</span>
      <span>{children}</span>
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: string }) {
  return (
    <Link
      href={href}
      className="text-white hover:bg-emerald-600 block px-3 py-2 rounded-md text-base font-medium
                 transition-all duration-200 flex items-center space-x-3"
    >
      <span className="text-xl">{icon}</span>
      <span>{children}</span>
    </Link>
  );
}