import { useEffect, useState } from 'react'

function shouldUseFallbackMode() {
  if (typeof window === 'undefined') return true

  const reduceMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (reduceMotionMedia.matches) return true

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (connection?.saveData) return true
  if (connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g') return true

  if (typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 4) return true

  return false
}

export default function CinematicBackground() {
  const [useFallback, setUseFallback] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduceMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    const updateFallbackMode = () => setUseFallback(shouldUseFallbackMode())

    updateFallbackMode()
    reduceMotionMedia.addEventListener?.('change', updateFallbackMode)
    connection?.addEventListener?.('change', updateFallbackMode)

    return () => {
      reduceMotionMedia.removeEventListener?.('change', updateFallbackMode)
      connection?.removeEventListener?.('change', updateFallbackMode)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />

      {!useFallback && (
        <video
          className="hidden h-full w-full object-cover opacity-30 md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/videos/nature-bg.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/30 to-indigo-950/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/65" />
    </div>
  )
}
