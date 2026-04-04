import { site } from '../content/site'

export function Hero() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="max-w-xl">
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-[3.25rem]">
          {site.siteName}
        </h1>
        <p className="mt-2 text-lg font-medium text-violet-100">{site.professionalTitle}</p>
        <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
          {site.tagline}
        </p>
      </div>
    </div>
  )
}
