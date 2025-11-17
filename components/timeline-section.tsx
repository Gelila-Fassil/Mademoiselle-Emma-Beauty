"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Rocket, Star, TrendingUp, Award } from "lucide-react"

const milestones = [
  {
    year: "2014",
    title: "The Beginning",
    description: "Founded with a vision to revolutionize luxury beauty",
    icon: Rocket,
    image: "/luxury-beauty-gift-set-with-gold-accents.jpg",
  },
  {
    year: "2017",
    title: "First Breakthrough",
    description: "Launched award-winning skincare line",
    icon: Star,
    image: "/luxury-skincare-serum-bottle-elegant-black-gold.jpg",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Reached 50 countries worldwide",
    icon: TrendingUp,
    image: "/luxury-makeup-cosmetics-collection.jpg",
  },
  {
    year: "2024",
    title: "Future Forward",
    description: "Pioneering AI-driven formulations",
    icon: Award,
    image: "/luxury-cosmetics-makeup-collection-display-elegant.jpg",
  },
]

export default function TimelineSection() {
  const [isVisible, setIsVisible] = useState(false)
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Our Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4 text-balance">
            A Decade of <span className="text-[#BBA14F]">Excellence</span>
          </h2>
        </div>

        {/* Horizontal timeline with connecting line */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BBA14F]/50 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-black border-4 border-[#BBA14F] rounded-full flex items-center justify-center shadow-lg shadow-[#BBA14F]/20">
                      <Icon className="w-8 h-8 text-[#BBA14F]" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="pt-20 space-y-4">
                    <div className="text-3xl font-light text-[#BBA14F] mb-2">{milestone.year}</div>
                    <div className="relative h-64 rounded-2xl overflow-hidden border border-[#BBA14F]/20">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                    <h3 className="text-2xl font-light text-white">{milestone.title}</h3>
                    <p className="text-white/70">{milestone.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
