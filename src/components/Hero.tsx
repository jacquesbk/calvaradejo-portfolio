import { site, assetUrl } from '../content/site'
import { SECTION_INDEX, useSectionNav } from '../context/SectionNavContext'

export function Hero() {
  const { goTo } = useSectionNav()

  return (
    <div>
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-[3.25rem]">
            {site.siteName}
          </h1>
          <p className="mt-2 text-lg font-medium text-violet-100">{site.professionalTitle}</p>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => goTo(SECTION_INDEX.work)}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-dim)] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-950/30 transition hover:bg-violet-600"
            >
              {site.ctaPrimary}
            </button>
            <a
              href={assetUrl(site.resume.href)}
              download
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {site.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
