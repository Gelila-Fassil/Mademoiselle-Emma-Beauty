"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ShoppingBag, Heart } from "lucide-react"

const products = [
  // Fragrances
  {
    id: 1,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic14.jpg",
  },

  {
    id: 2,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic15.jpg",
  },

  {
    id: 3,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic16.jpg",
  },
  {
    id: 4,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic17.jpg",
  },
  {
    id: 5,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic18.jpg",
  },
  {
    id: 6,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic19.jpg",
  },
  {
    id: 7,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic20.jpg",
  },
  {
    id: 8,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic21.jpg",
  },
  {
    id: 9,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic22.jpg",
  },
  {
    id: 10,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic23.jpg",
  },
  {
    id: 11,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic24.jpg",
  },
  {
    id: 12,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic25.jpg",
  },
  {
    id: 13,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic26.jpg",
  },
  {
    id: 14,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic27.jpg",
  },
  {
    id: 15,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic28.jpg",
  },
  {
    id: 16,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic29.jpg",
  },
  {
    id: 17,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic30.jpg",
  },
  {
    id: 18,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic31.jpg",
  },
  {
    id: 19,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic32.jpg",
  },
  {
    id: 20,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic33.jpg",
  },
  {
    id: 21,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic34.jpg",
  },
  {
    id: 22,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic35.jpg",
  },
  {
    id: 23,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic36.jpg",
  },
  {
    id: 24,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic37.jpg",
  },
  {
    id: 25,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic38.jpg",
  },
  {
    id: 26,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic39.jpg",
  },
  {
    id: 27,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic40.jpg",
  },
  {
    id: 28,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic1.jpg",
  },
  {
    id: 29,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic2.jpg",
  },
  {
    id: 30,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic3.jpg",
  },
  
  {
    id: 31,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic4.jpg",
  },
  {
    id: 32,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic5.jpg",
  },
  {
    id: 33,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic6.jpg",
  },
  {
    id: 34,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic7.jpg",
  },
  {
    id: 35,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic8.jpg",
  },
  {
    id: 36,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic9.jpg",
  },

   {
    id: 37,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic10.jpg",
  },
   {
    id: 38,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic11.jpg",
  },
   {
    id: 39,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic12.jpg",
  },
   {
    id: 40,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic13.jpg",
  },

  // men's perfume

  

  
  // Makeup
  {
    id: 4,
    name: "Premium Makeup Kit",
    category: "Makeup",
    image: "/high-end-makeup-palette-and-brushes-gold-black.jpg",
    price: "$189",
  },
  {
    id: 5,
    name: "Lipstick Collection",
    category: "Makeup",
    image: "/luxury-lipstick-collection-red-pink-nude-colors.jpg",
    price: "$129",
  },
  {
    id: 6,
    name: "Eye Shadow Palette",
    category: "Makeup",
    image: "/luxury-eyeshadow-palette-shimmer-gold-bronze.jpg",
    price: "$149",
  },
  {
    id: 7,
    name: "Mascara",
    category: "Makeup",
    image: "/luxury-mascara-with-gold-packaging.jpg",
    price: "$49",
  },
  {
    id: 8,
    name: "Foundation",
    category: "Makeup",
    image: "/premium-liquid-foundation-bottle-luxury-packaging.jpg",
    price: "$89",
  },
  {
    id: 9,
    name: "Face Products",
    category: "Makeup",
    image: "/makeup-face-products-palette-compacts.jpg",
    price: "$159",
  },
  // Skincare
  {
    id: 10,
    name: "Skincare Serum",
    category: "Skincare",
    image: "/luxury-skincare-serum-bottle-elegant-black-gold.jpg",
    price: "$199",
  },
  {
    id: 11,
    name: "Essence Serum",
    category: "Skincare",
    image: "/luxury-essence-serum-bottle-transparent.jpg",
    price: "$179",
  },
  {
    id: 12,
    name: "Face Cream",
    category: "Skincare",
    image: "/luxury-face-cream-jar-gold-black-elegant.jpg",
    price: "$219",
  },
  {
    id: 13,
    name: "Body Oil",
    category: "Skincare",
    image: "/premium-body-oil-luxurious-packaging.jpg",
    price: "$139",
  },
  {
    id: 14,
    name: "Premium Skincare",
    category: "Skincare",
    image: "/premium-skincare-bottles-and-creams.jpg",
    price: "$249",
  },
  // Gift Sets
  {
    id: 15,
    name: "Luxury Gift Set",
    category: "Gift Sets",
    image: "/luxury-beauty-gift-set-with-gold-accents.jpg",
    price: "$399",
  },
  {
    id: 16,
    name: "Cosmetics Collection",
    category: "Gift Sets",
    image: "/luxury-cosmetics-makeup-collection-display-elegant.jpg",
    price: "$449",
  },
]

interface ProductGridProps {
  initialCategory?: string | null
}

export default function ProductGrid({ initialCategory = null }: ProductGridProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
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

  // Update selected category when initialCategory changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory)
      // Scroll to product grid when category is set from URL
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [initialCategory])

  const categories = Array.from(new Set(products.map((p) => p.category)))
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Category filter */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full border transition-all ${
                selectedCategory === null
                  ? "bg-[#BBA14F] text-black border-[#BBA14F]"
                  : "bg-transparent text-white/70 border-[#BBA14F]/20 hover:border-[#BBA14F]/40"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all ${
                  selectedCategory === category
                    ? "bg-[#BBA14F] text-black border-[#BBA14F]"
                    : "bg-transparent text-white/70 border-[#BBA14F]/20 hover:border-[#BBA14F]/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid - Staggered layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <a
              key={product.id}
              href="/collections"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden rounded-2xl border border-[#BBA14F]/20 hover:border-[#BBA14F]/50 transition-all duration-500 cursor-pointer block ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${hoveredId === product.id ? "scale-105 z-10" : "scale-100"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredId === product.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#BBA14F]/20 backdrop-blur-sm rounded-full border border-[#BBA14F]/30">
                  <span className="text-[#BBA14F] text-xs uppercase tracking-widest font-light">
                    {product.category}
                  </span>
                </div>

                {/* Favorite button */}
                <button className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm rounded-full border border-[#BBA14F]/20 hover:bg-[#BBA14F]/20 transition-all opacity-0 group-hover:opacity-100">
                  <Heart className="w-4 h-4 text-[#BBA14F]" />
                </button>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-light text-white mb-2 group-hover:text-[#BBA14F] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-[#BBA14F]">{product.price}</span>
                    <a href="/collections" className="p-2 bg-[#BBA14F] text-black rounded-full hover:bg-[#d4be70] transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 inline-flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-16">
          <a href="/collections" className="px-8 py-4 bg-[#BBA14F] text-black font-light text-lg uppercase tracking-widest rounded-lg hover:bg-[#d4be70] transition inline-flex items-center justify-center">
            Load More Products
          </a>
        </div>
      </div>
    </section>
  )
}

