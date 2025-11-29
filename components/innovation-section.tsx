"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Microscope, Atom, FlaskConical, Brain } from "lucide-react"

const innovations = [
  {
    icon: Microscope,
    title: "Advanced Research",
    description: "State-of-the-art laboratories",
    image: "/luxury-perfume-bottle-with-golden-details.jpg",
  },
  {
    icon: Atom,
    title: "Molecular Science",
    description: "Precision-engineered molecules",
    image: "/premium-body-oil-luxurious-packaging.jpg",
  },
  {
    icon: FlaskConical,
    title: "Sustainable Chemistry",
    description: "Eco-friendly processes",
    image: "/skincare-bottles-creams-serums-premium-beauty-prod.jpg",
  },
  {
    icon: Brain,
    title: "AI-Powered Innovation",
    description: "Machine learning optimization",
    image: "/luxury-lipstick-collection-red-pink-nude-colors.jpg",
  },
]

const productImages = [
  "/luxury-eyeshadow-palette-shimmer-gold-bronze.jpg",
  "/luxury-mascara-with-gold-packaging.jpg",
  "/makeup-face-products-palette-compacts.jpg",
  "/luxury-gold-perfume-bottle-with-crystal-details.jpg",
]

export default function InnovationSection() {
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
      <div className="w-[85%] mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Innovation Lab</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4 text-balance">
            Science Meets <span className="text-[#BBA14F]">Elegance</span>
          </h2>
        </div>

        {/* Innovation cards - Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon
            return (
              <div
                key={index}
                className={`group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-[#BBA14F]/20 hover:border-[#BBA14F]/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 border border-[#BBA14F]/10">
                  <Image
                    src={innovation.image}
                    alt={innovation.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 p-3 bg-[#BBA14F]/20 backdrop-blur-sm rounded-xl border border-[#BBA14F]/30">
                    <Icon className="w-6 h-6 text-[#BBA14F]" />
                  </div>
                </div>
                <h3 className="text-2xl font-light text-white mb-2 group-hover:text-[#BBA14F] transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-white/70">{innovation.description}</p>
              </div>
            )
          })}
        </div>

        {/* Product showcase - Horizontal scroll */}
        <div>
          <h3 className="text-3xl font-light text-white mb-8 text-center">
            Our Latest <span className="text-[#BBA14F]">Products</span>
          </h3>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 relative w-80 h-80 rounded-2xl overflow-hidden border border-[#BBA14F]/20 hover:border-[#BBA14F]/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${(innovations.length + index) * 100}ms` }}
              >
                <Image
                  src={image}
                  alt={`Product ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
