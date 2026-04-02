import { useState } from 'react'
import { site } from '../content/site'
import { SECTION_INDEX, useSectionNav } from '../context/SectionNavContext'

export function Header() {
  const [open, setOpen] = useState(false)
  const { goTo, activeIndex } = useSectionNav()

  const navItems = [
    { index: SECTION_INDEX.home, label: 'Home' },
    { index: SECTION_INDEX.about, label: 'About Me' },
    { index: SECTION_INDEX.identity, label: site.aboutIdentity.title },
    { index: SECTION_INDEX.cv, label: site.cvSectionTitle },
    { index: SECTION_INDEX.work, label: site.navWorkLabel },
    { index: SECTION_INDEX.contact, label: 'Contact' },
  ]

  const navigate = (index: number) => {
    goTo(index)
    setOpen(false)
  }

  return (
    <header className="z-50 shrink-0 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(SECTION_INDEX.home)}
          className="font-display text-left text-lg font-semibold tracking-tight text-white transition hover:text-[var(--color-accent)]"
        >
          {site.siteName}
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.index}
              type="button"
              onClick={() => navigate(item.index)}
              className={`text-sm font-medium transition ${
                activeIndex === item.index
                  ? 'text-white'
                  : 'text-[var(--color-muted)] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
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
              <button
                key={item.index}
                type="button"
                onClick={() => navigate(item.index)}
                className={`text-left text-base font-medium ${
                  activeIndex === item.index ? 'text-white' : 'text-[var(--color-muted)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
