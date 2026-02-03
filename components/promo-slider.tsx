"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

interface PromoSlide {
  title: string
  text: string
  button: string
  href: string
  icon: "gift" | "people"
  gradient: string
  buttonClass: string
  textClass?: string
}

interface PromoSliderProps {
  slides: PromoSlide[]
}

export function PromoSlider({ slides }: PromoSliderProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const slide = slides[current]

  return (
    <section className={`py-8 transition-colors duration-700 ${slide.gradient}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-shrink-0">
            <div className={`w-20 h-20 backdrop-blur rounded-2xl flex items-center justify-center ${slide.textClass ? "bg-[#1a2744]/20" : "bg-white/30"}`}>
              {slide.icon === "gift" ? (
                <svg className={`w-12 h-12 ${slide.textClass || "text-white"}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
              ) : (
                <svg className={`w-12 h-12 ${slide.textClass || "text-white"}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
              )}
            </div>
          </div>
          <div className="flex-1 text-center md:text-left min-h-[60px]">
            <h2 className={`text-2xl md:text-3xl font-bold drop-shadow-sm ${slide.textClass || "text-white"}`}>
              {slide.title}
            </h2>
            <p className={`mt-1 text-lg ${slide.textClass || "text-white/90"}`}>
              {slide.text}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href={slide.href}
              className={`inline-block px-8 py-3 rounded-full font-bold transition-colors shadow-lg whitespace-nowrap text-lg ${slide.buttonClass}`}
            >
              {slide.button}
            </Link>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                slide.textClass
                  ? (i === current ? "bg-[#1a2744] scale-110" : "bg-[#1a2744]/30 hover:bg-[#1a2744]/50")
                  : (i === current ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60")
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
