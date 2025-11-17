"use client"

import { useState, useEffect } from "react"

const products = [
  {
    id: 1,
    title: "Premium Perfume",
    category: "Fragrances",
    image: "/luxury-perfume-bottle-with-golden-details.jpg",
  },
  {
    id: 2,
    title: "Makeup Essentials",
    category: "Makeup",
    image: "/luxury-makeup-cosmetics-collection.jpg",
  },
  {
    id: 3,
    title: "Skincare System",
    category: "Skincare",
    image: "/premium-skincare-bottles-and-creams.jpg",
  },
  {
    id: 4,
    title: "Luxury Bundle",
    category: "Sets",
    image: "/luxury-beauty-gift-set-with-gold-accents.jpg",
  },
  {
    id: 5,
    title: "Face Collection",
    category: "Face",
    image: "/makeup-face-products-palette-compacts.jpg",
  },
  {
    id: 6,
    title: "Essence Serum",
    category: "Skincare",
    image: "/luxury-essence-serum-bottle-transparent.jpg",
  },
]

export default function ProductGallery() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Our Collection</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4 text-balance">
            Curated for <span className="text-[#BBA14F]">Perfection</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Each product in our selection represents the pinnacle of luxury beauty craftsmanship
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => {
            // Map category names to match ProductGrid categories
            const categoryMap: { [key: string]: string } = {
              "Fragrances": "Fragrances",
              "Makeup": "Makeup",
              "Skincare": "Skincare",
              "Sets": "Gift Sets",
              "Face": "Makeup",
            }
            const mappedCategory = categoryMap[product.category] || product.category
            const categoryParam = encodeURIComponent(mappedCategory)
            
            return (
            <a
              key={product.id}
              href={`/collections?category=${categoryParam}`}
              className={`group relative overflow-hidden rounded-2xl h-96 cursor-pointer transition-all duration-500 transform hover:scale-105 block ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Product image */}
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[#BBA14F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[#BBA14F] text-sm uppercase tracking-widest font-light mb-2">
                  {product.category}
                </div>
                <h3 className="text-white text-2xl font-light">{product.title}</h3>
              </div>

              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#BBA14F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
