import { useState } from 'react'
import { useTheme } from '../context/useTheme'

function BackgroundLayer() {
  const { theme, isReducedMotion } = useTheme()
  const [videoFailed, setVideoFailed] = useState(false)

  const showNaturalVideo = theme === 'natural' && !isReducedMotion && !videoFailed

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="theme-base-bg absolute inset-0" />

      {theme === 'natural' && (
        <>
          {!videoFailed && (
            <video
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                showNaturalVideo ? 'opacity-40' : 'opacity-0'
              }`}
              autoPlay={!isReducedMotion}
              muted
              loop={!isReducedMotion}
              playsInline
              preload="metadata"
              onError={() => setVideoFailed(true)}
            >
              <source src="/videos/nature-bg.mp4" type="video/mp4" />
            </video>
          )}
          <div className="natural-fallback absolute inset-0" />
          <div className="natural-overlay absolute inset-0" />
          <div className="natural-gradient absolute inset-0" />
        </>
      )}

      {theme !== 'natural' && (
        <>
          <div className="gradient-mesh absolute inset-0" />
          <div className="glow-blob blob-one" />
          <div className="glow-blob blob-two" />
          <div className="glow-blob blob-three" />
          <div className="radial-vignette absolute inset-0" />
        </>
      )}
    </div>
  )
}

export default BackgroundLayer
