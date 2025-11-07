"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import CEOMessage from "@/components/ceo-message"
import MissionVision from "@/components/mission-vision"
import ValuesShowcase from "@/components/values-showcase"
import TimelineSection from "@/components/timeline-section"
import InnovationSection from "@/components/innovation-section"
import ProcessGallery from "@/components/process-gallery"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      {isLoaded && (
        <>
          <Navigation />
          <AboutHero />
          <CEOMessage />
          <MissionVision />
          <ValuesShowcase />
          <TimelineSection />
          <ProcessGallery />
          <InnovationSection />
          <Footer />
        </>
      )}
    </main>
  )
}

