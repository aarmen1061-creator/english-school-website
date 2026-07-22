"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { captureAttribution } from "@/lib/attribution"

/** Mounted globally: the utm params land on the first page, the form is on another one. */
export function AttributionTracker() {
  const pathname = usePathname()

  useEffect(() => {
    captureAttribution()
  }, [pathname])

  return null
}
