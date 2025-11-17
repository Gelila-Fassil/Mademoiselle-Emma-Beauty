"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full py-32 pt-40 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/luxury-cosmetics-makeup-collection-display-elegant.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6 backdrop-blur-md">
              <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
              Contact <span className="text-[#BBA14F]">Us</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We'd love to hear from you. Reach out to us for inquiries, support, or just to say hello.
            </p>
          </div>

          {/* Right - Image */}
          <div
            className={`relative h-96 md:h-[500px] rounded-2xl overflow-hidden border-2 border-[#BBA14F]/20 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Image
              src="/luxury-skincare-serum-bottle-elegant-black-gold.jpg"
              alt="Contact"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
