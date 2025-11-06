"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#BBA14F] rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg">ME</span>
          </div>
          <span className="text-white font-light text-xl tracking-widest">MADEMOISELLE</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white/70 hover:text-[#BBA14F] transition text-sm uppercase tracking-wide">
            Shop
          </a>
          <a href="#" className="text-white/70 hover:text-[#BBA14F] transition text-sm uppercase tracking-wide">
            About
          </a>
          <a href="#" className="text-white/70 hover:text-[#BBA14F] transition text-sm uppercase tracking-wide">
            Collections
          </a>
          <a href="#" className="text-white/70 hover:text-[#BBA14F] transition text-sm uppercase tracking-wide">
            Contact
          </a>
          <button className="ml-4 p-2 hover:bg-white/10 rounded-lg transition">
            <ShoppingBag className="w-5 h-5 text-[#BBA14F]" />
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/5 p-4 space-y-4">
          <a href="#" className="block text-white/70 hover:text-[#BBA14F] transition uppercase tracking-wide">
            Shop
          </a>
          <a href="#" className="block text-white/70 hover:text-[#BBA14F] transition uppercase tracking-wide">
            About
          </a>
          <a href="#" className="block text-white/70 hover:text-[#BBA14F] transition uppercase tracking-wide">
            Collections
          </a>
          <a href="#" className="block text-white/70 hover:text-[#BBA14F] transition uppercase tracking-wide">
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
