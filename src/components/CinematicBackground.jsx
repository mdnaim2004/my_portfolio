import { useEffect, useState } from 'react'

export default function CinematicBackground() {
    const [reduceMotion, setReduceMotion] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        const handle = () => setReduceMotion(mq.matches)
        handle()
        mq.addEventListener?.('change', handle)
        return () => mq.removeEventListener?.('change', handle)
    }, [])

    // Video will only render on medium+ screens for performance and mobile fallback
    return (
        // container sits fixed and behind the app content
        <div aria-hidden="true" className="fixed inset-0 -z-20 pointer-events-none">
            {/* Fallback for small screens / slow devices */}
            <div className="md:hidden inset-0 fixed -z-20 w-full h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

            {/* Video for md+ screens. Honors reduced motion preference by not autoplaying */}
            <div className="hidden md:block fixed inset-0 -z-20 w-full h-full overflow-hidden">
                {!reduceMotion && (
                    <video
                        className="w-full h-full object-cover opacity-40"
                        src="/videos/nature-bg.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/videos/nature-poster.jpg"
                    />
                )}

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Smooth gradient overlay to add cinematic color */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-indigo-900/30" />
            </div>
        </div>
    )
}
