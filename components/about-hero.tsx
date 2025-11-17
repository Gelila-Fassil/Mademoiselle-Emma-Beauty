"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 overflow-hidden bg-black">
      {/* Split diagonal background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#BBA14F]/5 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left - Large text block (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <div className="text-sm text-[#BBA14F] uppercase tracking-[0.3em] font-light">
                About Mademoiselle
              </div>
              <h1 className="text-8xl md:text-9xl font-light text-white leading-[0.85]">
                Crafting
                <br />
                <span className="text-[#BBA14F]">Beauty</span>
                <br />
                Excellence
              </h1>
              <div className="w-24 h-px bg-[#BBA14F]"></div>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                A decade of redefining luxury cosmetics through innovation, sustainability, 
                and uncompromising quality. Every product tells a story of elegance.
              </p>
            </div>
          </div>

          {/* Right - Image stack (5 columns) */}
          <div className="lg:col-span-5 relative h-[600px] md:h-[700px]">
            <div className="absolute inset-0 space-y-4">
              {/* Top image - offset left */}
              <div className={`relative h-[45%] rounded-2xl overflow-hidden border border-[#BBA14F]/20 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}>
                <Image
                  src="/luxury-cosmetics-makeup-collection-display-elegant.jpg"
                  alt="Collection"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Bottom image - offset right */}
              <div className={`relative h-[45%] rounded-2xl overflow-hidden border border-[#BBA14F]/20 ml-auto w-[90%] transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}>
                <Image
                  src="/luxury-makeup-cosmetics-collection.jpg"
                  alt="Makeup"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-5 h-5 text-[#BBA14F] animate-bounce" />
      </div>
    </section>
  )
}
