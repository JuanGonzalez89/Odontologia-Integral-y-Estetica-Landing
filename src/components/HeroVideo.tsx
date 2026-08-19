"use client"

import { useEffect, useRef } from "react"

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const viewportQuery = window.matchMedia("(min-width: 640px)")
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const syncPlayback = () => {
      if (viewportQuery.matches && !motionQuery.matches) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    }

    syncPlayback()
    viewportQuery.addEventListener("change", syncPlayback)
    motionQuery.addEventListener("change", syncPlayback)
    return () => {
      viewportQuery.removeEventListener("change", syncPlayback)
      motionQuery.removeEventListener("change", syncPlayback)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 hidden h-full w-full object-cover object-[50%_30%] sm:block"
      muted
      loop
      playsInline
      preload="none"
      poster="/images/hero-video-poster.jpg"
      aria-hidden="true"
    >
      <source src="/video/Smile-BG-pc.webm" type="video/webm" />
      <source src="/video/Smile-BG-pc.mp4" type="video/mp4" />
    </video>
  )
}
