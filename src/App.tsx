import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { PortfolioGrid } from './components/PortfolioGrid'
import { Footer } from './components/Footer'
import { CurriculumVitaePanel } from './components/CurriculumVitaePanel'
import { site } from './content/site'
import { useSectionNav } from './context/SectionNavContext'

const panelClass =
  'flex h-full min-w-full shrink-0 snap-center snap-always flex-col overflow-y-auto overflow-x-hidden overscroll-y-contain'

export default function App() {
  const { scrollRef } = useSectionNav()

  return (
    <Layout>
      <div
        ref={scrollRef}
        className="flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch]"
        tabIndex={0}
        aria-label="Page sections"
      >
        <section
          className={panelClass}
          aria-label="Home"
          id="panel-home"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <Hero />
          </div>
        </section>

        <Section
          id="about"
          title="About Me"
          className={`${panelClass} px-4 py-8 sm:px-6 sm:py-10 lg:px-8`}
        >
          <div className="max-w-3xl">
            {site.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-[var(--color-muted)] first:mt-0 [&:not(:first-child)]:mt-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        <Section
          id="identity"
          title={site.aboutIdentity.title}
          className={`${panelClass} border-l border-[var(--color-border)]/40 px-4 py-8 sm:px-6 sm:py-10 lg:px-8`}
        >
          <div className="max-w-3xl">
            {site.aboutIdentity.paragraphs.map((paragraph, i) => (
              <p
                key={`identity-${i}`}
                className="text-base leading-relaxed text-[var(--color-muted)] first:mt-0 [&:not(:first-child)]:mt-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        <CurriculumVitaePanel panelClass={panelClass} />

        <Section
          id="work"
          title={site.workSectionTitle}
          className={`${panelClass} border-l border-[var(--color-border)]/40 bg-[var(--color-surface-elevated)]/35 backdrop-blur-sm px-4 py-8 sm:px-6 sm:py-10 lg:px-8`}
        >
          <PortfolioGrid items={site.portfolioItems} />
        </Section>

        <section
          className={`${panelClass} border-l border-[var(--color-border)]/40 bg-[var(--color-surface-elevated)]/50`}
          aria-label="Contact"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
            <Footer />
          </div>
        </section>
      </div>
    </Layout>
  )
}
