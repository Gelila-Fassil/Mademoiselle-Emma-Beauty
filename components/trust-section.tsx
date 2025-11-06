"use client"

import { useEffect, useState } from "react"
import { Heart, Award, Users } from "lucide-react"

export default function TrustSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#BBA14F] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BBA14F] rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats grid */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="p-8 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#BBA14F]/50 transition-all duration-300">
            <Award className="w-12 h-12 text-[#BBA14F] mb-4" />
            <h3 className="text-4xl font-light text-white mb-2">500K+</h3>
            <p className="text-white/60">Happy Customers Worldwide</p>
          </div>

          <div className="p-8 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#BBA14F]/50 transition-all duration-300">
            <Heart className="w-12 h-12 text-[#BBA14F] mb-4" />
            <h3 className="text-4xl font-light text-white mb-2">98%</h3>
            <p className="text-white/60">Customer Satisfaction Rate</p>
          </div>

          <div className="p-8 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#BBA14F]/50 transition-all duration-300">
            <Users className="w-12 h-12 text-[#BBA14F] mb-4" />
            <h3 className="text-4xl font-light text-white mb-2">50+</h3>
            <p className="text-white/60">Years of Beauty Expertise</p>
          </div>
        </div>

        {/* Testimonial */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Testimonials</span>
          </div>
          <p className="text-3xl md:text-4xl font-light text-white mb-6 italic text-balance">
            {
              '"Mademoiselle Emma Beauty transformed my entire skincare routine. The quality is unmatched, and I feel like I\'m treating myself to a luxury experience every day."'
            }
          </p>
          <p className="text-[#BBA14F] font-light uppercase tracking-widest text-sm">
            — Sarah Mitchell, Beauty Enthusiast
          </p>
        </div>
      </div>
    </section>
  )
}
