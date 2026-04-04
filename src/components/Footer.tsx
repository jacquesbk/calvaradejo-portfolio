import { site, assetUrl } from '../content/site'

export function Footer() {
  return (
    <footer id="contact" className="w-full">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold text-white">{site.siteName}</p>
            <p className="mt-1 text-base font-medium text-violet-100">{site.professionalTitle}</p>
            <p className="mt-3 max-w-md text-base text-[var(--color-muted)]">{site.tagline}</p>
          </div>
          <div className="flex flex-col gap-4 text-base">
            <img
              src={assetUrl(site.homeImage.src)}
              alt={site.homeImage.alt}
              className="w-full max-w-[16rem] rounded-2xl border border-[var(--color-border)]/70 object-cover shadow-xl shadow-black/20"
              loading="lazy"
              decoding="async"
            />
            <a
              href="tel:+16504020897"
              className="inline-flex w-fit items-center rounded-full border border-[var(--color-border)] px-4 py-2 font-semibold text-white transition hover:border-[var(--color-accent)]"
            >
              (650) 402-0897
            </a>
            {site.socialLinks.length > 0 && (
              <ul className="flex flex-wrap gap-4">
                {site.socialLinks.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-200 transition hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-slate-300">
          © {new Date().getFullYear()} {site.siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
