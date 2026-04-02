import { Section } from './Section'
import { ResumePdfViewer } from './ResumePdfViewer'
import { site, assetUrl } from '../content/site'

interface CurriculumVitaePanelProps {
  panelClass: string
}

/** ~75% of viewport width; does not exceed panel width */
const viewerWidthClass = 'w-[min(100%,75vw)]'

export function CurriculumVitaePanel({ panelClass }: CurriculumVitaePanelProps) {
  const resumeSrc = assetUrl(site.resume.href)

  return (
    <Section
      id="cv"
      title={site.cvSectionTitle}
      className={`${panelClass} border-l border-[var(--color-border)]/40 bg-[var(--color-surface-elevated)]/25 px-4 py-8 sm:px-6 sm:py-10 lg:px-8`}
      innerClassName="mx-auto w-full max-w-none text-center"
    >
      <div className={`mx-auto flex flex-col items-center gap-5 ${viewerWidthClass}`}>
        <div
          className="w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-slate-900/50 shadow-inner"
          role="region"
          aria-label={site.cvSectionTitle}
        >
          <ResumePdfViewer file={resumeSrc} title={site.cvSectionTitle} />
        </div>

        <div
          className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
          aria-label="Resume actions"
        >
          <a
            href={resumeSrc}
            download
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-[var(--color-accent-dim)] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-violet-600 sm:flex-initial sm:min-w-[10rem]"
          >
            Download PDF
          </a>
          <a
            href={resumeSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-[var(--color-border)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:flex-initial sm:min-w-[10rem]"
          >
            Open in new tab
          </a>
        </div>
        <p className="w-full text-xs leading-relaxed text-[var(--color-muted)]">
          If the viewer does not load in your browser, use Open in new tab or Download.
        </p>
      </div>
    </Section>
  )
}
