"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Build gallery images from the four folders requested:
// lipstick, men-perfumes, women-perfums, skincare
const lipstickFiles = Array.from({ length: 29 }, (_, i) => `pic${i + 1}.jpg`);
const menFiles = Array.from({ length: 19 }, (_, i) => `pic${i + 1}.jpg`);
// women's folder includes 40 files but one (pic38) is missing in the repository, so include the ones we know exist
const womenFiles = [
  ...Array.from({ length: 37 }, (_, i) => `pic${i + 1}.jpg`),
  "pic39.jpg",
  "pic40.jpg",
];
const skincareFiles = Array.from({ length: 42 }, (_, i) => `pic${i + 1}.jpg`);

const buildItems = () => {
  const items: { id: number; name: string; image: string; category: string }[] =
    [];
  let id = 1;

  const add = (folder: string, files: string[], category: string) => {
    for (const name of files) {
      items.push({
        id: id++,
        name: `${category} ${name.replace(".jpg", "")}`,
        image: `/${folder}/${name}`,
        category,
      });
    }
  };

  add("lipstick", lipstickFiles, "Lipstick");
  add("men-perfumes", menFiles, "Men's Perfume");
  add("women-perfums", womenFiles, "Women's Perfume");
  add("skincare", skincareFiles, "Skincare");

  // Shuffle items so the gallery feels mixed
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  // Limit gallery to 20 images total (mixed from the four folders)
  return items.slice(0, 20)
};

const products = buildItems();

export default function InteractiveGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-visible">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#BBA14F]/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative w-[85%] mx-auto z-10 overflow-visible">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            Explore Our <span className="text-[#BBA14F]">Exquisite</span>{" "}
            Collection
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our complete range of luxury beauty products, each crafted
            with precision and elegance
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 py-8 md:py-12 overflow-visible"
          style={{ gridAutoRows: "minmax(300px, auto)" }}
        >
          {products.map((product, index) => {
            // Keep the featured flag for visual treatment but DON'T change layout spans
            const isFeatured = !!(product as any).featured;
            const isHovered = hoveredId === product.id;

            // Create staggered effect: alternate up and down based on column position
            // Columns 0,2 go up; Columns 1,3 go down
            // Reduced offset to prevent clipping
            const columnIndex = index % 4;
            const staggerOffset = isFeatured
              ? 0
              : columnIndex === 0 || columnIndex === 2
              ? "-30px"
              : "30px";

            return (
              <a
                key={product.id}
                href="/collections"
                className={`relative group cursor-pointer transition-all duration-700 ease-out block ${
                  isHovered ? "z-50" : "z-10"
                }`}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transform: isHovered
                    ? `scale(1.02) translateY(${staggerOffset})`
                    : `translateY(${staggerOffset})`,
                  transition:
                    "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div
                  className="relative w-full overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-[#BBA14F]/10 hover:border-[#BBA14F]/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#BBA14F]/20"
                  style={{
                    // Use a consistent aspect ratio so tiles are uniform and fill the grid
                    aspectRatio: "3/4",
                    minHeight: "280px",
                  }}
                >
                  {/* Image - using object-cover with object-position center to show full images */}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority={isFeatured}
                    sizes={
                      isFeatured
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 25vw"
                    }
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
                    <a
                      href="/collections"
                      className="mt-3 w-full py-2 px-4 bg-[#BBA14F]/10 hover:bg-[#BBA14F]/30
                        border border-[#BBA14F]/40 hover:border-[#BBA14F] text-[#BBA14F]
                        rounded-lg font-semibold text-sm transition-all duration-300
                        transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 inline-flex items-center justify-center"
                    >
                      View Product
                    </a>
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
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="/collections"
            className="px-8 py-4 bg-[#BBA14F] hover:bg-[#BBA14F]/90 text-black font-bold
              rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#BBA14F]/50
              transform hover:scale-105 inline-flex items-center justify-center"
          >
            Explore Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
