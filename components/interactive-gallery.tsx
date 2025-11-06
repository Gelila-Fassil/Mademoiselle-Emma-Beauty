"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Luxury Perfume",
    image: "/luxury-gold-perfume-bottle-with-crystal-details.jpg",
    category: "Fragrance",
    featured: true,
  },
  {
    id: 2,
    name: "Premium Makeup Kit",
    image: "/high-end-makeup-palette-and-brushes-gold-black.jpg",
    category: "Makeup",
  },
  {
    id: 3,
    name: "Skincare Serum",
    image: "/luxury-skincare-serum-bottle-elegant-black-gold.jpg",
    category: "Skincare",
  },
  {
    id: 4,
    name: "Lipstick Collection",
    image: "/luxury-lipstick-collection-red-pink-nude-colors.jpg",
    category: "Makeup",
  },
  {
    id: 5,
    name: "Foundation",
    image: "/premium-liquid-foundation-bottle-luxury-packaging.jpg",
    category: "Makeup",
    featured: true,
  },
  {
    id: 6,
    name: "Eye Shadow",
    image: "/luxury-eyeshadow-palette-shimmer-gold-bronze.jpg",
    category: "Makeup",
  },
  {
    id: 7,
    name: "Face Cream",
    image: "/luxury-face-cream-jar-gold-black-elegant.jpg",
    category: "Skincare",
  },
  {
    id: 8,
    name: "Mascara Wand",
    image: "/luxury-mascara-with-gold-packaging.jpg",
    category: "Makeup",
  },
  {
    id: 9,
    name: "Body Oil",
    image: "/premium-body-oil-luxurious-packaging.jpg",
    category: "Skincare",
  },
]

export default function InteractiveGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [positions, setPositions] = useState<Record<number, { x: number; y: number }>>({})

  useEffect(() => {
    const initialPositions: Record<number, { x: number; y: number }> = {}
    products.forEach((product) => {
      initialPositions[product.id] = {
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
      }
    })
    setPositions(initialPositions)

    const interval = setInterval(() => {
      setPositions((prev) => {
        const updated = { ...prev }
        products.forEach((product) => {
          updated[product.id] = {
            x: Math.random() * 20 - 10,
            y: Math.random() * 20 - 10,
          }
        })
        return updated
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#BBA14F]/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            Explore Our <span className="text-[#BBA14F]">Exquisite</span> Collection
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our complete range of luxury beauty products, each crafted with precision and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => {
            const isFeatured = product.featured
            const isHovered = hoveredId === product.id
            const position = positions[product.id] || { x: 0, y: 0 }

            return (
              <div
                key={product.id}
                className={`relative group cursor-pointer transition-all duration-700 ease-out
                  ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}
                  ${isHovered ? "z-50" : "z-10"}
                `}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transform: isHovered
                    ? "scale(1.05) translateZ(50px)"
                    : `translateX(${position.x}px) translateY(${position.y}px) scale(1)`,
                  transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div
                  className="relative w-full overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm
                    border border-[#BBA14F]/20 hover:border-[#BBA14F]/60 transition-all duration-500
                    shadow-lg hover:shadow-2xl hover:shadow-[#BBA14F]/20"
                  style={{
                    aspectRatio: isFeatured ? "1" : "3/4",
                  }}
                >
                  {/* Image - using object-cover to maintain aspect ratio */}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={isFeatured}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent
                      opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  ></div>

                  {/* Gold shine effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-r from-transparent via-[#BBA14F]/30 to-transparent"
                    style={{
                      transform: "skewX(-20deg)",
                      animation: isHovered ? "shimmer 2s infinite" : "none",
                    }}
                  ></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span
                        className="inline-block px-3 py-1 text-xs font-semibold text-[#BBA14F]
                        bg-black/50 backdrop-blur rounded-full border border-[#BBA14F]/30
                        group-hover:bg-[#BBA14F]/20 transition-all duration-300"
                      >
                        {product.category}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3
                      className="text-white text-lg md:text-xl font-bold mb-2 group-hover:text-[#BBA14F]
                      transition-colors duration-300 line-clamp-2"
                    >
                      {product.name}
                    </h3>

                    {/* View Button */}
                    <button
                      className="mt-3 w-full py-2 px-4 bg-[#BBA14F]/10 hover:bg-[#BBA14F]/30
                        border border-[#BBA14F]/40 hover:border-[#BBA14F] text-[#BBA14F]
                        rounded-lg font-semibold text-sm transition-all duration-300
                        transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100"
                    >
                      View Product
                    </button>
                  </div>

                  {/* Featured badge */}
                  {isFeatured && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#BBA14F]/30 rounded-full blur-md animate-pulse"></div>
                        <span
                          className="relative px-4 py-2 text-xs font-bold text-[#BBA14F]
                          bg-black/60 backdrop-blur rounded-full border border-[#BBA14F]/60"
                        >
                          Featured
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            className="px-8 py-4 bg-[#BBA14F] hover:bg-[#BBA14F]/90 text-black font-bold
              rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#BBA14F]/50
              transform hover:scale-105"
          >
            Explore Full Catalog
          </button>
        </div>
      </div>
    </section>
  )
}
