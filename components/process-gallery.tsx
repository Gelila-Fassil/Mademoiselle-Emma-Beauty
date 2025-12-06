"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const processSteps = [
  {
    image: "/makeup/pic13.jpg",
    title: "Research & Development",
    step: "01",
  },
  {
    image: "/makeup/pic14.jpg",
    title: "Quality Testing",
    step: "02",
  },
  {
    image: "/makeup/pic15.jpg",
    title: "Sustainable Packaging",
    step: "03",
  },
  {
    image: "/makeup/pic16.jpg",
    title: "Final Assembly",
    step: "04",
  },
];

export default function ProcessGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden bg-black"
    >
      <div className="w-[85%] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#BBA14F]/10 border border-[#BBA14F]/30 rounded-full mb-6">
            <span className="text-[#BBA14F] text-sm uppercase tracking-widest font-light">
              Behind The Scenes
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
            Our <span className="text-[#BBA14F]">Process</span>
          </h2>
        </div>

        {/* Staggered grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-[#BBA14F]/20 hover:border-[#BBA14F]/50 transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                gridRow:
                  index === 0 ? "span 2" : index === 3 ? "span 2" : "span 1",
              }}
            >
              <div
                className={`relative ${
                  index === 0 || index === 3 ? "h-[500px]" : "h-[240px]"
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Step number */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-[#BBA14F]/20 backdrop-blur-sm border border-[#BBA14F]/30 rounded-full flex items-center justify-center text-[#BBA14F] font-light text-xl">
                  {step.step}
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-light text-white">
                    {step.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
