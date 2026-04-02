import type { ReactNode } from 'react'
import { Header } from './Header'
import { site, assetUrl } from '../content/site'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const stillBgSrc = assetUrl(site.sectionBackgroundImage.src)

  return (
    <div className="relative h-[100dvh] max-h-[100dvh] overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <img
          src={stillBgSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
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
