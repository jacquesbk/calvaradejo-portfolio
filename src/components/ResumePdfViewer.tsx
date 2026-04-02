interface ResumePdfViewerProps {
  /** Same-origin path under /public, e.g. /Resume_Alvaradejo.pdf */
  file: string
  /** Accessible name for the embedded document */
  title: string
}

/**
 * Native browser PDF rendering (Chrome/Safari/Firefox built-in viewer).
 * Avoids pdf.js bundle size and worker issues from react-pdf.
 */
export function ResumePdfViewer({ file, title }: ResumePdfViewerProps) {
  return (
    <div className="h-full min-h-[min(68vh,720px)] w-full overflow-hidden rounded-xl bg-slate-950/40">
      <iframe
        src={file}
        title={title}
        className="h-full min-h-[min(68vh,720px)] w-full border-0 bg-slate-900/30"
      />
    </div>
  )
}
