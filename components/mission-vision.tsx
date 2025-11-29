"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Target, Eye } from "lucide-react"

export default function MissionVision() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-black">
      <div className="w-[85%] mx-auto">
        {/* Mission - Full width with side image */}
        <div className={`mb-24 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-xl">
                  <Target className="w-6 h-6 text-[#BBA14F]" />
                </div>
                <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                Revolutionizing
                <br />
                <span className="text-[#BBA14F]">Beauty</span>
              </h2>
            </div>
            
            <div className="md:col-span-2 relative h-[400px] rounded-2xl overflow-hidden border border-[#BBA14F]/20">
              <Image
                src="/luxury-skincare-serum-bottle-elegant-black-gold.jpg"
                alt="Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
              <div className="absolute inset-0 flex items-center p-8">
                <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                  To create products that enhance natural beauty while respecting our planet. 
                  We combine scientific innovation with sustainable practices to deliver luxury 
                  cosmetics that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision - Reversed layout */}
        <div className={`grid md:grid-cols-3 gap-8 items-center transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="md:col-span-2 md:order-2 relative h-[400px] rounded-2xl overflow-hidden border border-[#BBA14F]/20">
            <Image
              src="/premium-skincare-bottles-and-creams.jpg"
              alt="Vision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/70 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-end p-8">
              <p className="text-lg text-white/90 leading-relaxed max-w-xl text-right">
                To become the global leader in sustainable luxury beauty, where every product 
                tells a story of innovation, elegance, and environmental consciousness.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-1 md:order-1">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-xl">
                <Eye className="w-6 h-6 text-[#BBA14F]" />
              </div>
              <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Our Vision</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Leading
              <br />
              <span className="text-[#BBA14F]">Sustainable</span>
              <br />
              Luxury
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
