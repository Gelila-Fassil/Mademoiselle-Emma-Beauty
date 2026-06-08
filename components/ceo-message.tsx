 "use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { client, urlFor } from "@/lib/sanity"
import type { CEOProfile } from "@/types/sanity"

const envReady =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  !!process.env.NEXT_PUBLIC_SANITY_DATASET

export default function CEOMessage() {
  const [isVisible, setIsVisible] = useState(false)
  const [ceo, setCeo] = useState<CEOProfile | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!envReady) return

    const fetchCeoProfile = async () => {
      try {
        const data = await client.fetch<CEOProfile | null>(
          `*[_type == "ceoProfile"][0]{
            name,
            title,
            "photo": photo,
            highlightQuote,
            intro,
            body
          }`
        )
        setCeo(data)
      } catch (error) {
        console.error("Error fetching CEO profile from Sanity:", error)
      }
    }

    fetchCeoProfile()
  }, [])

  const displayName = ceo?.name || "Emma Desalegn"
  const displayTitle = ceo?.title || "Founder & CEO"
  const displayQuote =
    ceo?.highlightQuote ||
    `At MADEMOISELLE EMMA BEAUTY, we believe beauty has no boundaries — it is for her, for him, for everyone who dares to feel extraordinary.`

  const defaultBody =
    "Our journey began with a simple belief: that makeup, perfume, and personal care should be more than products — they should be an experience. A celebration of individuality. An embrace of elegance for every skin, every style, every story.\n\nFrom the bustling heart of Addis Ababa to the fashion capitals of Europe, we draw inspiration from the vibrant cultures that shape us. Every formula we craft, every scent we bottle, and every product we design reflects our commitment to inclusive luxury. We are not just creating beauty — we are redefining what it means to feel beautiful.\n\nToday, MADEMOISELLE EMMA BEAUTY stands as a bridge between timeless elegance and modern expression. Whether it is a bold lipstick, a captivating perfume, or a nurturing skincare essential, each creation carries our promise: elegance for her and him, crafted with passion, made for the world."

  const bodySource = `${ceo?.intro ? `${ceo.intro}\n\n` : ""}${ceo?.body || defaultBody}`

  const bodyParagraphs = bodySource
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)

  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-black">
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#BBA14F]/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#BBA14F]/5 to-transparent"></div>
      </div>

      <div className="relative w-[90%] mx-auto z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Image - Left side, spans 5 columns for a slightly wider appearance */}
          <div className={`md:col-span-5 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <div className="sticky top-20">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#BBA14F]/20">
                {ceo?.photo ? (
                  <Image
                    src={urlFor(ceo.photo).width(900).height(1200).url()}
                    alt={ceo.photo.alt || displayName}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 420px, (min-width: 768px) 60vw, 90vw"
                  />
                ) : (
                  <Image
                    src="/luxury-face-cream-jar-gold-black-elegant.jpg"
                    alt="CEO"
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="mt-6 pl-4 border-l-2 border-[#BBA14F]">
                <div className="text-2xl font-light text-white">{displayName}</div>
                <div className="text-sm text-[#BBA14F] uppercase tracking-widest mt-1">
                  {displayTitle}
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right side, spans 8 columns */}
          <div className={`md:col-span-7 space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="text-sm text-[#BBA14F] uppercase tracking-widest font-light">
              A Message From Leadership
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
              Building the Future
              <br />
              <span className="text-[#BBA14F]">of Beauty</span>
            </h2>

            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p className="text-2xl font-light text-white/90 italic border-l-4 border-[#BBA14F] pl-6">
                "{displayQuote}"
              </p>

              {bodyParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-8 border-t border-[#BBA14F]/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#BBA14F]/20 border border-[#BBA14F]/30 rounded-full flex items-center justify-center text-[#BBA14F] font-light text-xl">
                  {initials}
                </div>
                <div>
                  <div className="font-light text-white text-lg">{displayName}</div>
                  <div className="text-sm text-[#BBA14F] uppercase tracking-widest">
                    {displayTitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
