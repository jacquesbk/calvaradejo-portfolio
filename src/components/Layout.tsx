import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { site, assetUrl } from '../content/site'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const bgSrc = assetUrl(site.heroImage.src)

  return (
    <div className="relative">
      {/* Full-page background — installation photo + scrim for readable content */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <img
          src={bgSrc}
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-[var(--color-surface)]/48"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
