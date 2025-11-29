"use client"

import { useEffect, useState, useRef } from "react"
import { Sparkles, Zap, Award, Globe } from "lucide-react"

const stats = [
  {
    icon: Sparkles,
    number: "500K+",
    label: "Happy Customers",
    description: "Worldwide satisfaction",
    color: "from-purple-500/20 to-[#BBA14F]/20",
  },
  {
    icon: Zap,
    number: "50+",
    label: "Award Winners",
    description: "Industry recognition",
    color: "from-blue-500/20 to-[#BBA14F]/20",
  },
  {
    icon: Award,
    number: "10+",
    label: "Years Excellence",
    description: "Luxury heritage",
    color: "from-pink-500/20 to-[#BBA14F]/20",
  },
  {
    icon: Globe,
    number: "50+",
    label: "Countries",
    description: "Global presence",
    color: "from-cyan-500/20 to-[#BBA14F]/20",
  },
]

export default function FuturisticStats() {
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
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(187,161,79,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(187,161,79,0.3),transparent_50%)]"></div>
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(187, 161, 79, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(187, 161, 79, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative w-[85%] mx-auto z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Our Impact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4 text-balance">
            Numbers That <span className="text-[#BBA14F]">Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-[#BBA14F]/20 hover:border-[#BBA14F]/50 transition-all duration-500 p-8 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Holographic effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="inline-flex p-4 bg-[#BBA14F]/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#BBA14F]" />
                  </div>
                  <div className="text-4xl md:text-5xl font-light text-[#BBA14F] mb-2">{stat.number}</div>
                  <div className="text-white text-lg font-light mb-2">{stat.label}</div>
                  <div className="text-white/60 text-sm">{stat.description}</div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#BBA14F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-2xl"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

