// components/ProductGrid.tsx

"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";

// ⭐️ Import the Sanity-related items ⭐️
import { useSanityProducts } from "@/hooks/useSanityProducts"
import { urlFor } from "@/lib/sanity"
import { SanityProduct, SanityCategory } from "@/types/sanity"

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "") || "uncategorized"

interface ProductGridProps {
  initialCategory?: string | null // slug expected; falls back to slugify if a label comes through
}

export default function ProductGrid({
  initialCategory = null,
}: ProductGridProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(
    initialCategory ? slugify(initialCategory) : null
  );
  // Changed hoveredId to accept string, matching Sanity's _id/id
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // ⭐️ Data is fetched directly from the hook ⭐️
  const {
    products, // This is the array of SanityProduct objects
    categories, // This is the array of SanityCategory objects
    loading,
    error,
  } = useSanityProducts(selectedCategorySlug);

  // Intersection Observer for animation (kept from original)
  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  // Shuffle function to randomize array (Fisher-Yates algorithm)
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // The hook already filters by selectedCategorySlug; we only shuffle for variety.
  const filteredProducts: SanityProduct[] = useMemo(() => shuffleArray(products), [products]);


  // --- Loading and Error States ---
  if (loading && filteredProducts.length === 0) {
    return <div className="text-center py-32 text-white">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-32 text-red-500">Error fetching products: {error}</div>;
  }


  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="w-[85%] mx-auto">
        
        {/* Category filter buttons */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* All Products button */}
            <button
              onClick={() => setSelectedCategorySlug(null)}
              className={`px-6 py-3 rounded-full border transition-all ${
                selectedCategorySlug === null
                  ? "bg-[#BBA14F] text-black border-[#BBA14F]"
                  : "bg-transparent text-white/70 border-[#BBA14F]/20 hover:border-[#BBA14F]/40"
              }`}
            >
              All Products
            </button>

            {/* Dynamic Category buttons from Sanity */}
            {categories.map((category: SanityCategory) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategorySlug(category.slug)}
                className={`px-6 py-3 rounded-full border transition-all ${
                  selectedCategorySlug === category.slug
                    ? "bg-[#BBA14F] text-black border-[#BBA14F]"
                    : "bg-transparent text-white/70 border-[#BBA14F]/20 hover:border-[#BBA14F]/40"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid - Staggered layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: SanityProduct, index) => (
            <a
              key={product.id}
              href={`/collections?category=${product.categorySlug}`} // stay on collections filtered by category
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden rounded-2xl border border-[#BBA14F]/20 hover:border-[#BBA14F]/50 transition-all duration-500 cursor-pointer block ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${hoveredId === product.id ? "scale-105 z-10" : "scale-100"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black/20">
                <Image
                  // ⭐️ FIX: Correctly call urlFor() and chain methods ⭐️
                  src={
                    product.mainImage
                      ? urlFor(product.mainImage).width(500).height(667).url()
                      : "/placeholder.jpg"
                  }
                  alt={product.mainImage?.alt || product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover transition-transform duration-700 ${
                    hoveredId === product.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#BBA14F]/20 backdrop-blur-sm rounded-full border border-[#BBA14F]/30">
                  <span className="text-[#BBA14F] text-xs uppercase tracking-widest font-light">
                    {product.categoryTitle || "Uncategorized"}
                  </span>
                </div>

                {/* Favorite button (UI remains the same) */}
                <button 
                  className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm rounded-full border border-[#BBA14F]/20 hover:bg-[#BBA14F]/20 transition-all opacity-0 group-hover:opacity-100"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                >
                  <Heart className="w-4 h-4 text-[#BBA14F]" />
                </button>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-light text-white mb-2 group-hover:text-[#BBA14F] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-end">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.location.href = `/collections?category=${product.categorySlug}`;
                      }}
                      className="p-2 bg-[#BBA14F] text-black rounded-full hover:bg-[#d4be70] transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 inline-flex items-center justify-center"
                      aria-label="View category"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-16">
          <a
            href="/collections"
            className="px-8 py-4 bg-[#BBA14F] text-black font-light text-lg uppercase tracking-widest rounded-lg hover:bg-[#d4be70] transition inline-flex items-center justify-center"
          >
            Load More Products
          </a>
        </div>
      </div>
    </section>
  );
}