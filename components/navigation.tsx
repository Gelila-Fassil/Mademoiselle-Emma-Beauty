"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/5">
      <div className="w-[85%] mx-auto px-6 py-7 flex items-center justify-between">
        <a href="/" className="flex items-center gap-0 hover:opacity-90 transition-opacity">
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-md tracking-[0.1em]">MADEMOISELLE EMMA</span>
            <span className="text-[#BBA14F] text-[10px] tracking-[0.4em] font-light uppercase mt-0.5">BEAUTY</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-[#BBA14F] hover:text-white transition text-sm uppercase tracking-wide">
            Home
          </a>
          <a href="/about" className="text-[#BBA14F] hover:text-white transition text-sm uppercase tracking-wide">
            About
          </a>
          <a href="/collections" className="text-[#BBA14F] hover:text-white transition text-sm uppercase tracking-wide">
            Collections
          </a>
          <a href="/contact" className="text-[#BBA14F] hover:text-white transition text-sm uppercase tracking-wide">
            Contact
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/5 p-4 space-y-4">
          <a href="/" className="block text-[#BBA14F] hover:text-white transition uppercase tracking-wide">
            Home
          </a>
          <a href="/about" className="block text-[#BBA14F] hover:text-white transition uppercase tracking-wide">
            About
          </a>
          <a href="/collections" className="block text-[#BBA14F] hover:text-white transition uppercase tracking-wide">
            Collections
          </a>
          <a href="/contact" className="block text-[#BBA14F] hover:text-white transition uppercase tracking-wide">
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
