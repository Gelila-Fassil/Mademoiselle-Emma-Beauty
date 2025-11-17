"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="/newbg.png"
            alt="Mademoiselle Logo"
            className="object-contain flex-shrink-0"
            style={{ 
              width: '150px', 
              height: 'auto',
              maxHeight: '80px',
            }}
            onError={(e) => {
              // Fallback to JPG if PNG doesn't exist
              e.currentTarget.src = '/cosmologo.jpg';
            }}
          />
          {/* <span className="text-white font-light text-xl tracking-widest">MADEMOISELLE</span> */}
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white/70 hover:text-[#BBA14F] transition text-sm uppercase tracking-wide">
            Home
          </a>
          <a href="/about" className="text-white/70 hover:text-[#BBA14F] transition text-sm uppercase tracking-wide">
            About
          </a>
          <a href="/collections" className="text-white/70 hover:text-[#BBA14F] transition text-sm uppercase tracking-wide">
            Collections
          </a>
          <a href="/contact" className="text-white/70 hover:text-[#BBA14F] transition text-sm uppercase tracking-wide">
            Contact
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/5 p-4 space-y-4">
          <a href="/" className="block text-white/70 hover:text-[#BBA14F] transition uppercase tracking-wide">
            Home
          </a>
          <a href="/about" className="block text-white/70 hover:text-[#BBA14F] transition uppercase tracking-wide">
            About
          </a>
          <a href="/collections" className="block text-white/70 hover:text-[#BBA14F] transition uppercase tracking-wide">
            Collections
          </a>
          <a href="/contact" className="block text-white/70 hover:text-[#BBA14F] transition uppercase tracking-wide">
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
