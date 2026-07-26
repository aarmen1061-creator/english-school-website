"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"

interface Slide {
  src: string
  alt: string
}

interface SummerCarouselProps {
  slides: Slide[]
  interval?: number
}

export function SummerCarousel({ slides, interval = 4000 }: SummerCarouselProps) {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [slides.length])

  // Auto-advance; resets whenever the user jumps to a slide manually
  useEffect(() => {
    const id = setTimeout(() => goTo(current + 1), interval)
    return () => clearTimeout(id)
  }, [current, goTo, interval])

  return (
    <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Arrows */}
      <button
        type="button"
        onClick={() => goTo(current - 1)}
        aria-label="Предыдущее фото"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-colors"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(current + 1)}
        aria-label="Следующее фото"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-colors"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Фото ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
