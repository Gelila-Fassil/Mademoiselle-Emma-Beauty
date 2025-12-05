"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Fragrances",
    description: "Luxury perfumes and scents",
    image: "/women-perfums/pic11.jpg",
    count: 3,
    color: "from-purple-500/20 to-[#BBA14F]/20",
  },
  {
    name: "Makeup",
    description: "Premium cosmetics collection",
    image: "/luxury-makeup-cosmetics-collection.jpg",
    count: 6,
    color: "from-pink-500/20 to-[#BBA14F]/20",
  },
  {
    name: "Skincare",
    description: "Advanced skincare solutions",
    image: "/premium-skincare-bottles-and-creams.jpg",
    count: 42,
    color: "from-blue-500/20 to-[#BBA14F]/20",
  },
  {
    name: "Gift Sets",
    description: "Curated luxury collections",
    image: "/luxury-beauty-gift-set-with-gold-accents.jpg",
    count: 2,
    color: "from-amber-500/20 to-[#BBA14F]/20",
  },
];

export default function CategoryShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="w-[85%] mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">
              Shop By Category
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4 text-balance">
            Browse Our <span className="text-[#BBA14F]">Categories</span>
          </h2>
        </div>

        {/* Category cards - Masonry style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`/collections?category=${encodeURIComponent(
                category.name
              )}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-2xl border border-[#BBA14F]/20 hover:border-[#BBA14F]/50 transition-all duration-500 cursor-pointer block ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${hoveredIndex === index ? "scale-105 z-10" : "scale-100"} ${
                index === 0 || index === 3 ? "md:row-span-2" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`relative ${
                  index === 0 || index === 3 ? "h-[600px]" : "h-[300px]"
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-125" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-40 transition-opacity`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-4">
                    <div className="text-[#BBA14F] text-xs uppercase tracking-widest font-light mb-2">
                      {category.count} Products
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-2 group-hover:text-[#BBA14F] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {category.description}
                    </p>
                  </div>
                  <div className="group/btn inline-flex items-center gap-2 text-[#BBA14F] hover:text-[#d4be70] transition">
                    <span className="uppercase tracking-widest text-xs">
                      Explore
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
