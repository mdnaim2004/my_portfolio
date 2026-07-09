import { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'
import './BackgroundLayer.css'

const STORAGE_KEY = 'portfolio-natural-video'

const videoOptions = [
  { id: 'nature-1', label: 'Forest', src: '/videos/nature-1.mp4' },
  { id: 'nature-2', label: 'Ocean', src: '/videos/nature-2.mp4' },
  { id: 'nature-3', label: 'Sky', src: '/videos/nature-3.mp4' },
]

function BackgroundLayer() {
  const { theme } = useTheme()
  const [selectedVideo, setSelectedVideo] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved && videoOptions.find((v) => v.id === saved)) return saved
    }
    return videoOptions[0].id
  })
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, selectedVideo)
    setVideoError(false)
  }, [selectedVideo])

  const currentVideo = videoOptions.find((v) => v.id === selectedVideo) || videoOptions[0]

  const handleVideoError = useCallback(() => {
    setVideoError(true)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dark Theme Background */}
      <div className={`theme-bg dark-bg ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 gradient-mesh" />
        <div className="glow-blob blob-one" />
        <div className="glow-blob blob-two" />
        <div className="glow-blob blob-three" />
      </div>

      {/* Light Theme Background */}
      <div className={`theme-bg light-bg ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 light-gradient-mesh" />
      </div>

      {/* Natural Theme Background */}
      <div className={`theme-bg natural-bg ${theme === 'natural' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-[#0f172a]" />

        {!videoError && (
          <video
            key={selectedVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover natural-video"
            onError={handleVideoError}
          >
            <source src={currentVideo.src} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      </div>

      {/* Video Selector - only visible in Natural mode */}
      {theme === 'natural' && (
        <div className="video-selector pointer-events-auto">
          {videoOptions.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video.id)}
              className={`video-selector-btn ${selectedVideo === video.id ? 'active' : ''}`}
            >
              {video.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default BackgroundLayer
