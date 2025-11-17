"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

export default function CollectionHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center pt-42 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto w-full h-full">
        {/* Split screen design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Left side - Image collage */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 grid grid-rows-2 gap-4 p-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#BBA14F]/20">
                <Image
                  src="/luxury-cosmetics-makeup-collection-display-elegant.jpg"
                  alt="Collection 1"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#BBA14F]/20">
                <Image
                  src="/luxury-makeup-cosmetics-collection.jpg"
                  alt="Collection 2"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="relative bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a] flex items-center px-6 lg:px-12">
            <div className={`w-full space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
            <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border-l-4 border-[#BBA14F] mb-6">
              <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">New Collection</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-light text-white leading-[0.9]">
              Luxury
              <br />
              <span className="text-[#BBA14F]">Redefined</span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              Discover our complete range of premium beauty products. Each piece is meticulously 
              crafted to elevate your beauty routine with elegance and sophistication.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a href="/collections" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#BBA14F] text-black font-light text-lg uppercase tracking-widest rounded-lg hover:bg-[#d4be70] transition">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#featured" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#BBA14F]/30 text-[#BBA14F] font-light text-lg uppercase tracking-widest rounded-lg hover:border-[#BBA14F] hover:bg-[#BBA14F]/10 transition">
                <Play className="w-5 h-5" />
                Watch Video
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-[#BBA14F]/20">
              <div>
                <div className="text-3xl font-light text-[#BBA14F]">16+</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">Products</div>
              </div>
              <div className="h-12 w-px bg-[#BBA14F]/30"></div>
              <div>
                <div className="text-3xl font-light text-[#BBA14F]">4</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">Categories</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BBA14F] rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BBA14F] rounded-full blur-3xl opacity-5"></div>
    </section>
  )
}
