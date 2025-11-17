"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Send, Mail, MessageSquare, User } from "lucide-react"

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-12">
              <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6 backdrop-blur-md">
                <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">Send Us a Message</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                We're Here to <span className="text-[#BBA14F]">Help</span>
              </h2>
              <p className="text-lg text-white/70">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-white/70 text-sm mb-2 uppercase tracking-widest">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BBA14F] z-10" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black/60 backdrop-blur-xl border border-[#BBA14F]/20 rounded-lg text-white placeholder-white/40 focus:border-[#BBA14F] focus:outline-none transition"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-white/70 text-sm mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BBA14F] z-10" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black/60 backdrop-blur-xl border border-[#BBA14F]/20 rounded-lg text-white placeholder-white/40 focus:border-[#BBA14F] focus:outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="subject" className="block text-white/70 text-sm mb-2 uppercase tracking-widest">
                  Subject
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BBA14F] z-10" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-black/60 backdrop-blur-xl border border-[#BBA14F]/20 rounded-lg text-white placeholder-white/40 focus:border-[#BBA14F] focus:outline-none transition"
                    placeholder="What is this regarding?"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-white/70 text-sm mb-2 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-black/60 backdrop-blur-xl border border-[#BBA14F]/20 rounded-lg text-white placeholder-white/40 focus:border-[#BBA14F] focus:outline-none transition resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto px-10 py-4 bg-[#BBA14F] text-black font-light text-lg uppercase tracking-widest rounded-lg hover:bg-[#d4be70] transition flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Image Gallery */}
          <div
            className={`hidden lg:grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#BBA14F]/20">
              <Image
                src="/premium-skincare-bottles-and-creams.jpg"
                alt="Skincare"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#BBA14F]/20">
              <Image
                src="/luxury-makeup-cosmetics-collection.jpg"
                alt="Makeup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#BBA14F]/20">
              <Image
                src="/skincare-bottles-creams-serums-premium-beauty-prod.jpg"
                alt="Beauty Products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#BBA14F]/20">
              <Image
                src="/luxury-cosmetics-makeup-collection-display-elegant.jpg"
                alt="Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
