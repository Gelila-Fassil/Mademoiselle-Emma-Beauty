"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProductGallery from "@/components/product-gallery"
import AnimatedGallery from "@/components/animated-gallery"
import InteractiveGallery from "@/components/interactive-gallery"
import ProductShowcase from "@/components/product-showcase"
import TrustSection from "@/components/trust-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      {isLoaded && (
        <>
          <Navigation />
          <HeroSection />
          <ProductGallery />
          <InteractiveGallery />
          <ProductShowcase />
          <TrustSection />
          <Footer />
        </>
      )}
    </main>
  )
}
