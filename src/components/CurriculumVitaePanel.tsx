import { useState } from 'react'
import { Section } from './Section'
import { PdfModal } from './PdfModal'
import { site, assetUrl } from '../content/site'

interface CurriculumVitaePanelProps {
  panelClass: string
}

export function CurriculumVitaePanel({ panelClass }: CurriculumVitaePanelProps) {
  const resumeSrc = assetUrl(site.resume.href)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  return (
    <>
      <Section
        id="cv"
        title={site.cvSectionTitle}
        className={`${panelClass} border-l border-[var(--color-border)]/40 bg-[var(--color-surface-elevated)]/25 px-4 py-8 sm:px-6 sm:py-10 lg:px-8`}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/80 p-6 shadow-lg shadow-black/20 transition hover:border-[var(--color-accent)]/40">
            <h3 className="font-display text-xl font-semibold text-white">{site.resume.label}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
              View the curriculum vitae in the site viewer or download a copy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3" aria-label="Resume actions">
              <button
                type="button"
                onClick={() => setIsViewerOpen(true)}
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-[var(--color-accent-dim)] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-violet-600 sm:flex-initial"
              >
                View PDF
              </button>
              <a
                href={resumeSrc}
                download
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:flex-initial"
              >
                Download
              </a>
            </div>
          </article>
        </div>
      </Section>

      {isViewerOpen ? (
        <PdfModal
          isOpen
          onClose={() => setIsViewerOpen(false)}
          title={site.cvSectionTitle}
          pdfSrc={resumeSrc}
        />
      ) : null}
    </>
  )
}
