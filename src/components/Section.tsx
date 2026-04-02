import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
  /** Override inner content wrapper (default: centered max-w-5xl) */
  innerClassName?: string
}

const defaultSectionClass = 'scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8'

export function Section({ id, title, children, className, innerClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={className ?? defaultSectionClass}
      aria-labelledby={`${id}-heading`}
    >
      <div className={innerClassName ?? 'mx-auto max-w-5xl'}>
        <h2
          id={`${id}-heading`}
          className="font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
        >
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
