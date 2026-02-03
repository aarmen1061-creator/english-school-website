"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"playful" | "minimal">("playful")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Загрузить тему из localStorage
    const savedTheme = localStorage.getItem("theme") as "playful" | "minimal" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.setAttribute("data-theme", savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "playful" ? "minimal" : "playful"
    setTheme(newTheme)
    document.body.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-gray-200 hover:border-primary transition-all shadow-sm hover:shadow-md"
      aria-label="Переключить тему"
    >
      <div className="flex items-center gap-2">
        {theme === "playful" ? (
          <>
            <span className="text-2xl">🎨</span>
            <span className="text-sm font-medium">Яркая</span>
          </>
        ) : (
          <>
            <span className="text-2xl">✨</span>
            <span className="text-sm font-medium">Минимал</span>
          </>
        )}
      </div>
      <div className="w-10 h-6 bg-gray-200 rounded-full relative transition-colors">
        <div
          className={`absolute top-1 w-4 h-4 bg-primary rounded-full transition-transform ${
            theme === "minimal" ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </div>
    </button>
  )
}
