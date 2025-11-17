"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CollectionHero from "@/components/collection-hero"
import CategoryShowcase from "@/components/category-showcase"
import FuturisticStats from "@/components/futuristic-stats"
import FeaturedCollection from "@/components/featured-collection"
import ProductGrid from "@/components/product-grid"

function CollectionsContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {isLoaded && (
        <>
          <Navigation />
          <CollectionHero />
          <FuturisticStats />
          <CategoryShowcase />
          <FeaturedCollection />
          <ProductGrid initialCategory={categoryParam || null} />
          <Footer />
        </>
      )}
    </>
  )
}

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <CollectionsContent />
      </Suspense>
    </main>
  )
}

