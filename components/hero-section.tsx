"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#BBA14F] rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#BBA14F] rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div
          className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full">
              <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Luxury Elegance</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-light text-white leading-tight text-balance">
              Elevate Your <span className="text-[#BBA14F]">Beauty</span> Ritual
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
              Discover our exquisite collection of premium cosmetics, fragrances, and skincare essentials. Each product
              is carefully crafted to inspire confidence and express your unique elegance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-[#BBA14F] text-black font-light text-lg uppercase tracking-widest overflow-hidden rounded-lg hover:bg-[#d4be70] transition">
              <span className="relative z-10 flex items-center gap-2">
                Explore Collection
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </span>
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-light text-lg uppercase tracking-widest hover:border-[#BBA14F] hover:text-[#BBA14F] transition rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Right - Featured product */}
        <div
          className={`relative h-96 md:h-full transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#BBA14F]/20 via-transparent to-transparent rounded-3xl"></div>
          <img
            src="/luxury-perfume-bottle-gold-lighting.jpg"
            alt="Featured Product"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 rounded-b-3xl">
            <h3 className="text-white text-xl font-light">Signature Collection</h3>
            <p className="text-white/60 text-sm">Timeless elegance in every bottle</p>
          </div>
        </div>
      </div>
    </section>
  )
}
