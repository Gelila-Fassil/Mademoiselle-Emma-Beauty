"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    name: "Signature Perfume Collection",
    image: "/luxury-essence-serum-bottle-transparent.jpg",
    rating: 5,
    reviews: 1240,
    price: "$299",
  },
  {
    name: "Premium Skincare Set",
    image: "/premium-skincare-bottles-and-creams.jpg",
    rating: 5,
    reviews: 890,
    price: "$449",
  },
  {
    name: "Luxury Makeup Palette",
    image: "/luxury-cosmetics-makeup-collection-display-elegant.jpg",
    rating: 5,
    reviews: 1560,
    price: "$189",
  },
]

export default function FeaturedCollection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
    <section id="featured" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Futuristic background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#BBA14F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#BBA14F] rounded-full blur-3xl"></div>
      </div>

      {/* Animated scan lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#BBA14F]/20 to-transparent animate-pulse"></div>
      </div>

      <div className="relative w-[85%] mx-auto z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Featured</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4 text-balance">
            Best <span className="text-[#BBA14F]">Sellers</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our most loved products, handpicked for excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <a
              key={index}
              href="/collections"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl border border-[#BBA14F]/20 hover:border-[#BBA14F]/50 transition-all duration-500 block ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${hoveredIndex === index ? "scale-105 z-10" : "scale-100"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-125" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Rating badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-[#BBA14F]/30">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#BBA14F] fill-[#BBA14F]" />
                    <span className="text-white text-sm font-light">{product.rating}</span>
                    <span className="text-white/60 text-xs">({product.reviews})</span>
                  </div>
                </div>

                {/* Featured badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-[#BBA14F]/20 backdrop-blur-sm rounded-full border border-[#BBA14F]/40">
                  <span className="text-[#BBA14F] text-xs uppercase tracking-widest font-light">Featured</span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3 group-hover:text-[#BBA14F] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-end">
                    <button 
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        window.location.href = "/collections"
                      }}
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-[#BBA14F] text-black rounded-full hover:bg-[#d4be70] transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                    >
                      <span className="text-sm uppercase tracking-widest font-light">Shop</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Holographic scan effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BBA14F]/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

