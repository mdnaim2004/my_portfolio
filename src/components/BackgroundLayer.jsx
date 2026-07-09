import { useTheme } from '../context/ThemeContext'
import './BackgroundLayer.css'

function BackgroundLayer() {
  const { theme } = useTheme()

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
        {/* Fallback color */}
        <div className="absolute inset-0 bg-[#0f172a]" />
        
        {/* Video Element */}
        {theme === 'natural' && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover natural-video"
          >
            <source src="/videos/nature.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Overlays for text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      </div>
    </div>
  )
}

export default BackgroundLayer
