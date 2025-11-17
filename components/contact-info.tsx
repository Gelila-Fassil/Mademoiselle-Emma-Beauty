"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    info: "hello@mademoiselle.com",
    description: "Send us an email anytime",
    image: "/luxury-skincare-serum-bottle-elegant-black-gold.jpg",
  },
  {
    icon: Phone,
    title: "Phone",
    info: "+1 (555) 123-4567",
    description: "Mon-Fri from 9am to 6pm",
    image: "/premium-skincare-bottles-and-creams.jpg",
  },
  {
    icon: MapPin,
    title: "Address",
    info: "123 Luxury Avenue, New York, NY 10001",
    description: "Visit our flagship store",
    image: "/luxury-makeup-cosmetics-collection.jpg",
  },
  {
    icon: Clock,
    title: "Business Hours",
    info: "Mon-Sat: 10am - 8pm",
    description: "Sunday: 12pm - 6pm",
    image: "/skincare-bottles-creams-serums-premium-beauty-prod.jpg",
  },
]

export default function ContactInfo() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <div
                key={index}
                className={`group relative overflow-hidden p-8 bg-black/40 backdrop-blur-xl border border-[#BBA14F]/20 rounded-2xl hover:border-[#BBA14F]/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image
                    src={method.image}
                    alt={method.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-[#BBA14F]/20 rounded-2xl border border-[#BBA14F]/30 group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <Icon className="w-8 h-8 text-[#BBA14F]" />
                  </div>
                  <h3 className="text-xl font-light text-white group-hover:text-[#BBA14F] transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-[#BBA14F] font-light text-lg">{method.info}</p>
                  <p className="text-white/60 text-sm">{method.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
