"use client"

import { useMemo } from "react"
import Image from "next/image"

// Mixed products from all categories
const allProducts = [
  // Women's Perfume
  { id: 1, name: "Luxury Perfume", category: "Women's Perfume", image: "/women-perfums/pic14.jpg" },
  { id: 2, name: "Luxury Perfume", category: "Women's Perfume", image: "/women-perfums/pic15.jpg" },
  { id: 3, name: "Luxury Perfume", category: "Women's Perfume", image: "/women-perfums/pic16.jpg" },
  { id: 4, name: "Luxury Perfume", category: "Women's Perfume", image: "/women-perfums/pic17.jpg" },
  { id: 5, name: "Luxury Perfume", category: "Women's Perfume", image: "/women-perfums/pic18.jpg" },
  { id: 6, name: "Luxury Perfume", category: "Women's Perfume", image: "/women-perfums/pic19.jpg" },
  { id: 7, name: "Luxury Perfume", category: "Women's Perfume", image: "/women-perfums/pic20.jpg" },
  { id: 8, name: "Luxury Perfume", category: "Women's Perfume", image: "/women-perfums/pic21.jpg" },
  // Men's Perfume
  { id: 54, name: "Men's Luxury Perfume", category: "Men's Perfume", image: "/men-perfumes/pic1.jpg" },
  { id: 55, name: "Men's Luxury Perfume", category: "Men's Perfume", image: "/men-perfumes/pic2.jpg" },
  { id: 56, name: "Men's Luxury Perfume", category: "Men's Perfume", image: "/men-perfumes/pic3.jpg" },
  { id: 57, name: "Men's Luxury Perfume", category: "Men's Perfume", image: "/men-perfumes/pic4.jpg" },
  { id: 58, name: "Men's Luxury Perfume", category: "Men's Perfume", image: "/men-perfumes/pic5.jpg" },
  { id: 59, name: "Men's Luxury Perfume", category: "Men's Perfume", image: "/men-perfumes/pic6.jpg" },
  { id: 60, name: "Men's Luxury Perfume", category: "Men's Perfume", image: "/men-perfumes/pic7.jpg" },
  { id: 61, name: "Men's Luxury Perfume", category: "Men's Perfume", image: "/men-perfumes/pic8.jpg" },
  // Makeup
  { id: 41, name: "Premium Makeup Kit", category: "Makeup", image: "/high-end-makeup-palette-and-brushes-gold-black.jpg" },
  { id: 42, name: "Lipstick Collection", category: "Makeup", image: "/luxury-lipstick-collection-red-pink-nude-colors.jpg" },
  { id: 43, name: "Eye Shadow Palette", category: "Makeup", image: "/luxury-eyeshadow-palette-shimmer-gold-bronze.jpg" },
  { id: 44, name: "Mascara", category: "Makeup", image: "/luxury-mascara-with-gold-packaging.jpg" },
  { id: 45, name: "Foundation", category: "Makeup", image: "/premium-liquid-foundation-bottle-luxury-packaging.jpg" },
  { id: 46, name: "Face Products", category: "Makeup", image: "/makeup-face-products-palette-compacts.jpg" },
  // Skincare
  { id: 47, name: "Skincare Serum", category: "Skincare", image: "/luxury-skincare-serum-bottle-elegant-black-gold.jpg" },
  { id: 48, name: "Essence Serum", category: "Skincare", image: "/luxury-essence-serum-bottle-transparent.jpg" },
  { id: 49, name: "Face Cream", category: "Skincare", image: "/luxury-face-cream-jar-gold-black-elegant.jpg" },
  { id: 50, name: "Body Oil", category: "Skincare", image: "/premium-body-oil-luxurious-packaging.jpg" },
  { id: 51, name: "Premium Skincare", category: "Skincare", image: "/premium-skincare-bottles-and-creams.jpg" },
  // Gift Sets
  { id: 52, name: "Luxury Gift Set", category: "Gift Sets", image: "/luxury-beauty-gift-set-with-gold-accents.jpg" },
  { id: 53, name: "Cosmetics Collection", category: "Gift Sets", image: "/luxury-cosmetics-makeup-collection-display-elegant.jpg" },
]

// Shuffle function to randomize array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function ProductGallery() {
  // Create 4 rows with thoroughly mixed products
  const rows = useMemo(() => {
    // Shuffle multiple times for better mixing
    let shuffled = shuffleArray(allProducts)
    shuffled = shuffleArray(shuffled)
    shuffled = shuffleArray(shuffled)
    
    // Distribute products more evenly across rows
    const rowSize = Math.ceil(shuffled.length / 4)
    const rows = [[], [], [], []]
    
    // Distribute products in a round-robin fashion for better mixing
    shuffled.forEach((product, index) => {
      rows[index % 4].push(product)
    })
    
    // Shuffle each row individually for extra randomness
    return rows.map(row => shuffleArray(row))
  }, [])

  // Duplicate products for seamless infinite scroll
  const duplicateProducts = (products: typeof allProducts) => {
    return [...products, ...products, ...products]
  }

  return (
    <section className="relative py-24 overflow-hidden bg-black w-full">
      <div className="w-full">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Our Collection</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4 text-balance">
            Explore Our <span className="text-[#BBA14F]">Products</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Discover our complete range of luxury beauty products
          </p>
        </div>

        {/* 4 Rows of Scrolling Products */}
        <div className="space-y-6">
          {rows.map((rowProducts, rowIndex) => {
            const isEven = rowIndex % 2 === 0
            const direction = isEven ? "left" : "right"
            const duplicated = duplicateProducts(rowProducts)
            
            return (
              <div
                key={rowIndex}
                className="relative overflow-hidden"
                style={{ height: "220px" }}
              >
                <div
                  className={`flex gap-3 ${
                    direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
                  }`}
                  style={{
                    width: "fit-content",
                  }}
                >
                  {duplicated.map((product, index) => (
                    <a
                      key={`${product.id}-${index}`}
                      href="/collections"
                      className="group relative flex-shrink-0 w-48 h-48 rounded-xl overflow-hidden border border-[#BBA14F]/20 hover:border-[#BBA14F]/50 transition-all duration-500 cursor-pointer"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="192px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      
                      {/* Category badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#BBA14F]/20 backdrop-blur-sm rounded-full border border-[#BBA14F]/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[#BBA14F] text-xs uppercase tracking-widest font-light">
                          {product.category}
                        </span>
                      </div>

                      {/* Product name */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-base font-light text-white group-hover:text-[#BBA14F] transition-colors">
                          {product.name}
                        </h3>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
