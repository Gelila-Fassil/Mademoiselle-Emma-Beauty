"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

export default function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Featured product showcase */}
        <div
          className={`grid md:grid-cols-2 gap-12 items-center mb-24 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#BBA14F]/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/luxury-cosmetics-makeup-collection-display-elegant.jpg"
              alt="Signature Line"
              className="relative w-full h-96 md:h-full object-cover rounded-3xl"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Signature Line</h3>
              <h2 className="text-5xl md:text-6xl font-light text-white text-balance">
                The Art of <span className="text-[#BBA14F]">Beauty</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Our signature collection represents years of expertise and innovation. Every formulation is tested for
                efficacy and luxury, delivering visible results with an elegant touch.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-[#BBA14F] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-light mb-1">Premium Ingredients</h4>
                  <p className="text-white/60 text-sm">Sourced from the finest suppliers worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-[#BBA14F] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-light mb-1">Clinically Tested</h4>
                  <p className="text-white/60 text-sm">Dermatologist approved formulations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-[#BBA14F] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-light mb-1">Sustainable Luxury</h4>
                  <p className="text-white/60 text-sm">Eco-conscious packaging and production</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-[#BBA14F] text-black font-light uppercase tracking-widest hover:bg-[#d4be70] transition rounded-lg">
              Discover More
            </button>
          </div>
        </div>

        {/* Secondary showcase */}
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Skincare Innovation</h3>
              <h2 className="text-5xl md:text-6xl font-light text-white text-balance">
                Radiance <span className="text-[#BBA14F]">Redefined</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Transform your skin with our revolutionary skincare line. Advanced formulas combine scientific research
                with luxurious sensoriality for visible transformation.
              </p>
            </div>

            <button className="px-8 py-4 bg-[#BBA14F] text-black font-light uppercase tracking-widest hover:bg-[#d4be70] transition rounded-lg">
              Explore Skincare
            </button>
          </div>

          <div className="order-1 md:order-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-l from-[#BBA14F]/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/skincare-bottles-creams-serums-premium-beauty-prod.jpg"
              alt="Skincare Range"
              className="relative w-full h-96 md:h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
