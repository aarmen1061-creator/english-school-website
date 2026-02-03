"use client"

import { useEffect, useRef, useState } from "react"

interface Branch {
  id: string
  name: string
  address: string
  phone: string
  coordinates: [number, number]
}

interface YandexMapProps {
  branches: Branch[]
  lang: string
}

declare global {
  interface Window {
    ymaps: any
  }
}

export function YandexMap({ branches, lang }: YandexMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    if (window.ymaps) {
      setMapLoaded(true)
      return
    }

    const script = document.createElement("script")
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=7e682775-516a-403a-947c-352f67ca8809&lang=" +
      (lang === "ru" ? "ru_RU" : "en_US")
    script.async = true
    script.onload = () => setMapLoaded(true)
    document.head.appendChild(script)

    return () => {
      // Don't remove script on cleanup — ymaps should persist
    }
  }, [lang])

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !window.ymaps) return

    window.ymaps.ready(() => {
      // Clear previous map if re-rendered
      if (mapRef.current) {
        mapRef.current.innerHTML = ""
      }

      const map = new window.ymaps.Map(mapRef.current, {
        center: [55.53, 37.40],
        zoom: 10,
        controls: ["zoomControl", "fullscreenControl"],
      })

      const CustomLayout = window.ymaps.templateLayoutFactory.createClass(
        '<div style="position:relative;width:36px;height:50px;">' +
          '<svg width="36" height="50" viewBox="0 0 36 50" xmlns="http://www.w3.org/2000/svg">' +
            '<defs><filter id="shadow" x="-20%" y="-10%" width="140%" height="130%"><feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-opacity="0.3"/></filter></defs>' +
            '<path d="M18 49 C18 49 2 32 2 18 A16 16 0 1 1 34 18 C34 32 18 49 18 49Z" fill="#4A90D9" filter="url(#shadow)"/>' +
            '<circle cx="18" cy="18" r="12" fill="white"/>' +
          '</svg>' +
          '<img src="/images/logo/EWE_symbol_color.png" style="width:20px;height:20px;position:absolute;top:8px;left:8px;" />' +
        '</div>'
      )

      branches.forEach((branch) => {
        const placemark = new window.ymaps.Placemark(
          branch.coordinates,
          {
            balloonContentHeader: `<strong>${branch.name}</strong>`,
            balloonContentBody: `<p>${branch.address}</p><p><a href="tel:${branch.phone.replace(/[\s()-]/g, "")}">${branch.phone}</a></p>`,
            hintContent: branch.name,
          },
          {
            iconLayout: CustomLayout,
            iconShape: {
              type: "Circle",
              coordinates: [18, 18],
              radius: 18,
            },
            iconOffset: [-18, -50],
          }
        )
        map.geoObjects.add(placemark)
      })

      // Fit all markers
      if (branches.length > 1) {
        map.setBounds(map.geoObjects.getBounds(), {
          checkZoomRange: true,
          zoomMargin: 40,
        })
      }
    })
  }, [mapLoaded, branches])

  return (
    <div
      ref={mapRef}
      className="w-full h-80 rounded-2xl overflow-hidden"
      style={{ background: "#f3f4f6" }}
    />
  )
}
