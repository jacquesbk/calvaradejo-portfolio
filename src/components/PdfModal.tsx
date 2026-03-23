import { useEffect, useRef } from 'react'

interface PdfModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  /** Absolute URL path to PDF under public */
  pdfSrc: string
  /** Optional note (e.g. large file warning) */
  hint?: string
}

export function PdfModal({ isOpen, onClose, title, pdfSrc, hint }: PdfModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[var(--color-surface)]/75 backdrop-blur-sm"
        aria-label="Close viewer"
        onClick={onClose}
      />

      <div className="relative z-[1] flex max-h-[min(92vh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-2xl">
        <header className="flex shrink-0 items-start justify-between gap-4 border-b border-[var(--color-border)] px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <h2 id="pdf-modal-title" className="font-display text-lg font-semibold text-slate-50">
              {title}
            </h2>
            {hint ? (
              <p className="mt-1 text-xs text-[var(--color-muted)]">{hint}</p>
            ) : null}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={pdfSrc}
              download
              className="hidden rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-[var(--color-accent)] hover:text-white sm:inline-block"
            >
              Download
            </a>
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-[var(--color-accent)] hover:text-white"
            >
              New tab
            </a>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[var(--color-border)] p-2 text-slate-200 transition hover:border-red-400/50 hover:bg-red-950/30 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        <div className="min-h-[min(75vh,720px)] flex-1 bg-slate-900/50">
          <iframe
            title={title}
            src={pdfSrc}
            className="h-[min(75vh,720px)] w-full border-0 sm:h-[min(78vh,760px)]"
          />
        </div>
      </div>
    </div>
  )
}
