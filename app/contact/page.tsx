"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactInfo from "@/components/contact-info"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      {isLoaded && (
        <>
          <Navigation />
          <ContactHero />
          <ContactInfo />
          <ContactForm />
          <Footer />
        </>
      )}
    </main>
  )
}

