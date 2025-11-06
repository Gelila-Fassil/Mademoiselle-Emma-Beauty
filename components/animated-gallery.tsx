"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const allProducts = [
  {
    id: 1,
    title: "Premium Perfume",
    category: "Fragrances",
    image: "/luxury-perfume-bottle-with-golden-details.jpg",
    description: "Timeless elegance in every spray",
  },
  {
    id: 2,
    title: "Makeup Essentials",
    category: "Makeup",
    image: "/luxury-makeup-cosmetics-collection.jpg",
    description: "Perfect color palette collection",
  },
  {
    id: 3,
    title: "Skincare System",
    category: "Skincare",
    image: "/premium-skincare-bottles-and-creams.jpg",
    description: "Complete routine for radiant skin",
  },
  {
    id: 4,
    title: "Luxury Bundle",
    category: "Sets",
    image: "/luxury-beauty-gift-set-with-gold-accents.jpg",
    description: "Curated luxury collection",
  },
  {
    id: 5,
    title: "Face Collection",
    category: "Face",
    image: "/makeup-face-products-palette-compacts.jpg",
    description: "Professional beauty tools",
  },
  {
    id: 6,
    title: "Essence Serum",
    category: "Skincare",
    image: "/luxury-essence-serum-bottle-transparent.jpg",
    description: "Pure concentration of nature",
  },
  {
    id: 7,
    title: "Lip Collection",
    category: "Makeup",
    image: "/luxury-lipstick-collection-elegant.jpg",
    description: "Bold and beautiful shades",
  },
  {
    id: 8,
    title: "Eye Palette",
    category: "Makeup",
    image: "/eyeshadow-palette-luxury-edition.jpg",
    description: "Stunning color combinations",
  },
  {
    id: 9,
    title: "Hair Serum",
    category: "Haircare",
    image: "/luxury-hair-treatment-serum.jpg",
    description: "Silky smooth perfection",
  },
]

export default function AnimatedGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlay) return

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allProducts.length)
    }, 5000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allProducts.length) % allProducts.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allProducts.length)
    setIsAutoPlay(false)
  }

  const goToProduct = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  // Get 3 visible products (current and neighbors)
  const getVisibleProducts = () => {
    const products = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + allProducts.length) % allProducts.length
      products.push({ ...allProducts[index], offset: i })
    }
    return products
  }

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Interactive Gallery</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4 text-balance">
            Explore Our <span className="text-[#BBA14F]">Complete Collection</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Discover the full range of luxury beauty products crafted with precision
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative h-96 md:h-[500px] mb-12">
          {/* Main carousel */}
          <div className="relative h-full perspective" ref={containerRef}>
            {getVisibleProducts().map((product) => {
              const isCenter = product.offset === 0
              const zIndex = 10 - Math.abs(product.offset) * 5

              return (
                <div
                  key={`${product.id}-${product.offset}`}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    transform: `
                      translateX(${product.offset * 120}%)
                      scale(${isCenter ? 1 : 0.75})
                      rotateY(${product.offset * 25}deg)
                    `,
                    opacity: isCenter ? 1 : 0.5,
                    zIndex: zIndex,
                  }}
                >
                  <div className="relative h-full w-full rounded-3xl overflow-hidden group">
                    {/* Image */}
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#BBA14F]/0 via-transparent to-[#BBA14F]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                    {/* Content - Only show on center */}
                    {isCenter && (
                      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <div className="animate-fade-in">
                          <div className="text-[#BBA14F] text-sm uppercase tracking-widest font-light mb-3">
                            {product.category}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-light text-white mb-2">{product.title}</h3>
                          <p className="text-white/70 text-lg">{product.description}</p>

                          {/* CTA Button */}
                          <button className="mt-6 px-8 py-3 bg-[#BBA14F] hover:bg-[#BBA14F]/90 text-black font-light uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
                            Explore
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#BBA14F]/20 hover:bg-[#BBA14F]/40 text-white transition-all duration-300 hover:scale-110 active:scale-95 -translate-x-6 md:-translate-x-12"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#BBA14F]/20 hover:bg-[#BBA14F]/40 text-white transition-all duration-300 hover:scale-110 active:scale-95 translate-x-6 md:translate-x-12"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Thumbnail dots and indicators */}
        <div className="flex flex-col items-center gap-8">
          {/* Product counter */}
          <div className="flex items-center gap-4">
            <span className="text-[#BBA14F] font-light">{String(currentIndex + 1).padStart(2, "0")}</span>
            <div className="w-16 h-px bg-gradient-to-r from-[#BBA14F] to-transparent" />
            <span className="text-white/60 font-light">{String(allProducts.length).padStart(2, "0")}</span>
          </div>

          {/* Dots indicator */}
          <div className="flex gap-3 flex-wrap justify-center">
            {allProducts.map((product, index) => (
              <button
                key={product.id}
                onClick={() => goToProduct(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#BBA14F] w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-6 py-2 rounded-full font-light uppercase tracking-widest text-sm transition-all duration-300 ${
              isAutoPlay ? "bg-[#BBA14F] text-black hover:bg-[#BBA14F]/90" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {isAutoPlay ? "Playing" : "Paused"}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
