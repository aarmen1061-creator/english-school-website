import type { MetadataRoute } from "next"

const BASE = "https://eweschool.ru"

const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
  { path: "", priority: 1.0, freq: "weekly" },
  { path: "/enroll", priority: 0.9, freq: "monthly" },
  { path: "/courses", priority: 0.9, freq: "monthly" },
  { path: "/branches", priority: 0.8, freq: "monthly" },
  { path: "/promo", priority: 0.8, freq: "weekly" },
  { path: "/summer", priority: 0.8, freq: "monthly" },
  { path: "/about", priority: 0.7, freq: "monthly" },
  { path: "/reviews", priority: 0.7, freq: "monthly" },
  { path: "/contacts", priority: 0.7, freq: "monthly" },
  { path: "/ambassador", priority: 0.6, freq: "monthly" },
  { path: "/schedule", priority: 0.6, freq: "monthly" },
  { path: "/pricing", priority: 0.6, freq: "monthly" },
  { path: "/programs", priority: 0.6, freq: "monthly" },
  { path: "/privacy", priority: 0.3, freq: "monthly" },
  { path: "/terms", priority: 0.3, freq: "monthly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return ["ru", "en"].flatMap((lang) =>
    routes.map((r) => ({
      url: `${BASE}/${lang}${r.path}`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
      alternates: {
        languages: {
          ru: `${BASE}/ru${r.path}`,
          en: `${BASE}/en${r.path}`,
        },
      },
    })),
  )
}
