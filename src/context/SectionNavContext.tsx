import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

/** Panel order for horizontal navigation */
export const SECTION_INDEX = {
  home: 0,
  about: 1,
  identity: 2,
  cv: 3,
  work: 4,
  contact: 5,
} as const

export const SECTION_COUNT = 6

type SectionNavContextValue = {
  scrollRef: React.RefObject<HTMLDivElement | null>
  goTo: (index: number) => void
  activeIndex: number
}

const SectionNavContext = createContext<SectionNavContextValue | null>(null)

export function SectionNavProvider({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= SECTION_COUNT) return
    const el = scrollRef.current
    if (!el) return
    const w = el.clientWidth
    if (w <= 0) return
    el.scrollTo({ left: index * w, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const syncActive = () => {
      const w = el.clientWidth
      if (w <= 0) return
      const idx = Math.min(SECTION_COUNT - 1, Math.max(0, Math.round(el.scrollLeft / w)))
      setActiveIndex(idx)
    }

    el.addEventListener('scroll', syncActive, { passive: true })
    const ro = new ResizeObserver(syncActive)
    ro.observe(el)
    syncActive()
    return () => {
      el.removeEventListener('scroll', syncActive)
      ro.disconnect()
    }
  }, [])

  return (
    <SectionNavContext.Provider value={{ scrollRef, goTo, activeIndex }}>
      {children}
    </SectionNavContext.Provider>
  )
}

export function useSectionNav() {
  const ctx = useContext(SectionNavContext)
  if (!ctx) {
    throw new Error('useSectionNav must be used within SectionNavProvider')
  }
  return ctx
}
