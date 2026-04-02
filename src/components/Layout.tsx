import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { Header } from './Header'
import { site, assetUrl } from '../content/site'
import { SECTION_INDEX, useSectionNav } from '../context/SectionNavContext'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { activeIndex } = useSectionNav()
  const videoRef = useRef<HTMLVideoElement>(null)
  const stillBgSrc = assetUrl(site.sectionBackgroundImage.src)
  const videoSrc = assetUrl(site.backgroundVideo.src)
  const isHome = activeIndex === SECTION_INDEX.home

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (isHome) {
      void v.play().catch(() => {
        /* autoplay policies / missing file */
      })
    } else {
      v.pause()
    }
  }, [isHome])

  return (
    <div className="relative h-[100dvh] max-h-[100dvh] overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        {/* Home: video visible. Other sections: hidden; still image layer below shows installation photo. */}
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isHome ? 'opacity-100' : 'opacity-0'
          }`}
          poster={stillBgSrc}
          muted
          playsInline
          preload="auto"
          autoPlay
          aria-hidden
        >
          <source src={videoSrc} type="video/quicktime" />
        </video>
        <img
          src={stillBgSrc}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isHome ? 'opacity-0' : 'opacity-100'
          }`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[var(--color-surface)]/48" aria-hidden />
      </div>

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <Header />
        <main className="min-h-0 flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  )
}
