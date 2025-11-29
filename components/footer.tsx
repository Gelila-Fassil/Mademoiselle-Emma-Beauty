"use client"

import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="w-[85%] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#BBA14F] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">ME</span>
              </div>
              <span className="text-white font-light text-xl tracking-widest">MADEMOISELLE</span>
            </div>
            <p className="text-white/60 text-sm">Elevating beauty standards with premium, luxury cosmetics.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-light uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="/collections" className="text-white/60 hover:text-[#BBA14F] transition text-sm">
                  All Products
                </a>
              </li>
              <li>
                <a href="/collections" className="text-white/60 hover:text-[#BBA14F] transition text-sm">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/collections" className="text-white/60 hover:text-[#BBA14F] transition text-sm">
                  Collections
                </a>
              </li>
              <li>
                <a href="/collections" className="text-white/60 hover:text-[#BBA14F] transition text-sm">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-light uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-white/60 hover:text-[#BBA14F] transition text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/60 hover:text-[#BBA14F] transition text-sm">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/60 hover:text-[#BBA14F] transition text-sm">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/60 hover:text-[#BBA14F] transition text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-light uppercase tracking-widest text-sm mb-6">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#BBA14F]/20 rounded-lg flex items-center justify-center transition"
              >
                <Instagram className="w-5 h-5 text-[#BBA14F]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#BBA14F]/20 rounded-lg flex items-center justify-center transition"
              >
                <Facebook className="w-5 h-5 text-[#BBA14F]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#BBA14F]/20 rounded-lg flex items-center justify-center transition"
              >
                <Twitter className="w-5 h-5 text-[#BBA14F]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>&copy; 2025 Mademoiselle Emma Beauty. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#BBA14F] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#BBA14F] transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#BBA14F] transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
