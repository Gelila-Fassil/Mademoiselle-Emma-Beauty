"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Leaf, Sparkles, Heart, Shield, Globe, Award } from "lucide-react"

const values = [
  { icon: Leaf, title: "Sustainability", image: "/luxury-essence-serum-bottle-transparent.jpg" },
  { icon: Sparkles, title: "Innovation", image: "/luxury-gold-perfume-bottle-with-crystal-details.jpg" },
  { icon: Heart, title: "Quality", image: "/luxury-face-cream-jar-gold-black-elegant.jpg" },
  { icon: Shield, title: "Integrity", image: "/premium-liquid-foundation-bottle-luxury-packaging.jpg" },
  { icon: Globe, title: "Global Impact", image: "/luxury-beauty-gift-set-with-gold-accents.jpg" },
  { icon: Award, title: "Excellence", image: "/high-end-makeup-palette-and-brushes-gold-black.jpg" },
]

export default function ValuesShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-black">
      <div className="w-[85%] mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Our Values</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4 text-balance">
            What <span className="text-[#BBA14F]">Drives</span> Us
          </h2>
        </div>

        {/* Featured large image */}
        <div className="mb-12">
          <div className={`relative h-[500px] rounded-3xl overflow-hidden border border-[#BBA14F]/20 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <Image
              src={values[activeIndex].image}
              alt={values[activeIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-[#BBA14F]/20 backdrop-blur-sm rounded-2xl border border-[#BBA14F]/30">
                  {(() => {
                    const Icon = values[activeIndex].icon
                    return <Icon className="w-8 h-8 text-[#BBA14F]" />
                  })()}
                </div>
                <h3 className="text-4xl md:text-5xl font-light text-white">{values[activeIndex].title}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Value selector - horizontal scroll style */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group flex-shrink-0 relative w-32 h-32 rounded-xl overflow-hidden border-2 transition-all duration-500 ${
                  activeIndex === index
                    ? "border-[#BBA14F] scale-110"
                    : "border-[#BBA14F]/20 hover:border-[#BBA14F]/40"
                } ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-[#BBA14F]/20 ${
                  activeIndex === index ? "opacity-60" : "opacity-40 group-hover:opacity-50"
                } transition-opacity`}></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`p-3 bg-black/40 backdrop-blur-sm rounded-xl border border-[#BBA14F]/30 transition-transform ${
                    activeIndex === index ? "scale-110" : "scale-100"
                  }`}>
                    <Icon className="w-6 h-6 text-[#BBA14F]" />
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
