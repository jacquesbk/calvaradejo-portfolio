import { useState } from 'react'
import type { PortfolioItem } from '../content/site'
import { assetUrl } from '../content/site'
import { PdfModal } from './PdfModal'

interface PortfolioGridProps {
  items: readonly PortfolioItem[]
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [pdfViewer, setPdfViewer] = useState<{
    title: string
    src: string
    hint?: string
  } | null>(null)

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => {
          const href = assetUrl(item.href)
          const downloadOptions = item.downloadOptions?.map((option) => ({
            label: option.label,
            href: assetUrl(option.href),
          }))
          if (item.kind === 'image') {
            return (
              <li key={item.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/80 shadow-lg shadow-black/20 transition hover:border-[var(--color-accent)]/40">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-black/30">
                    <img
                      src={href}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                      {item.description}
                    </p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center justify-center rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      Open full image
                    </a>
                  </div>
                </article>
              </li>
            )
          }

          const largeHint = item.largeFile
            ? 'Large file — loading may take a moment. Use Download or New tab if the viewer is slow.'
            : undefined

          return (
            <li key={item.id}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/80 p-6 shadow-lg shadow-black/20 transition hover:border-[var(--color-accent)]/40">
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.description}
                </p>
                {item.largeFile && (
                  <p className="mt-2 text-xs font-medium text-amber-100">
                    Large PDF — the in-page viewer may be slow; use New tab or Download from the
                    viewer if needed.
                  </p>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setPdfViewer({
                        title: item.title,
                        src: href,
                        hint: largeHint,
                      })
                    }
                    className="inline-flex flex-1 items-center justify-center rounded-lg bg-[var(--color-accent-dim)] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-violet-600 sm:flex-initial"
                  >
                    View PDF
                  </button>
                  {downloadOptions && downloadOptions.length > 0 ? (
                    downloadOptions.map((option) => (
                      <a
                        key={option.label}
                        href={option.href}
                        download
                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:flex-initial"
                      >
                        {option.label}
                      </a>
                    ))
                  ) : (
                    <a
                      href={href}
                      download
                      className="inline-flex flex-1 items-center justify-center rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:flex-initial"
                    >
                      Download
                    </a>
                  )}
                </div>
              </article>
            </li>
          )
        })}
      </ul>

      {pdfViewer ? (
        <PdfModal
          isOpen
          onClose={() => setPdfViewer(null)}
          title={pdfViewer.title}
          pdfSrc={pdfViewer.src}
          hint={pdfViewer.hint}
        />
      ) : null}
    </>
  )
}
