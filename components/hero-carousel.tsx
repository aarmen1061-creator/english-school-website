"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"

interface HeroButton {
  label: string
  href: string
  variant: "primary" | "secondary"
}

interface HeroSlide {
  bg: string
  title: string
  subtitle?: string
  // Bullets rendered with a dot marker; points already carry their own emoji marker
  bullets?: string[]
  points?: string[]
  buttons: HeroButton[]
}

interface HeroCarouselProps {
  slides: HeroSlide[]
  className?: string
  interval?: number
}

export function HeroCarousel({ slides, className = "", interval = 6000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const id = setTimeout(() => goTo(current + 1), interval)
    return () => clearTimeout(id)
  }, [current, goTo, interval])

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={slide.bg}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.bg}
            alt=""
            fill
            className="object-cover object-[center_30%]"
            priority
            sizes="100vw"
          />
          {/* Dense under the text on the left, clear on the right so the photo swap is visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/40" />
        </div>
      ))}

      {/* Slides content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex items-center min-h-[420px] md:min-h-[460px]">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={`max-w-2xl transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none absolute"
            }`}
            aria-hidden={i !== current}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#1a2744] font-bold leading-tight">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="mt-4 text-lg md:text-xl text-[#1a2744] font-semibold">
                {slide.subtitle}
              </p>
            )}
            <div className="mt-5 space-y-2">
              {slide.bullets?.map((b) => (
                <p key={b} className="flex items-center gap-3 text-base md:text-lg text-[#1a2744] leading-relaxed font-bold">
                  <span className="w-3 h-3 rounded-full bg-[#1a2744] flex-shrink-0" />
                  {b}
                </p>
              ))}
              {slide.points?.map((p) => (
                <p key={p} className="text-base md:text-lg text-[#1a2744] leading-relaxed font-bold">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              {slide.buttons.map((btn) => (
                <Link
                  key={btn.href + btn.label}
                  href={btn.href}
                  className={
                    btn.variant === "primary"
                      ? "inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
                      : "inline-block bg-white/80 hover:bg-white text-gray-800 px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-200"
                  }
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => goTo(current - 1)}
        aria-label="Предыдущий слайд"
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center shadow transition-colors"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(current + 1)}
        aria-label="Следующий слайд"
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center shadow transition-colors"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.bg}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Слайд ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-6 bg-[#1a2744]" : "w-2.5 bg-[#1a2744]/30 hover:bg-[#1a2744]/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
