import { useState } from 'react'
import { site } from '../content/site'

export function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#work', label: site.navWorkLabel },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-white transition hover:text-[var(--color-accent)]"
        >
          {site.siteName}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-muted)] transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#work"
            className="rounded-full bg-[var(--color-accent-dim)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-600"
          >
            {site.navCta}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[var(--color-border)] p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[var(--color-muted)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#work"
              className="rounded-full bg-[var(--color-accent-dim)] px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {site.navCta}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
