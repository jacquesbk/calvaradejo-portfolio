import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { PortfolioGrid } from './components/PortfolioGrid'
import { site } from './content/site'

export default function App() {
  return (
    <Layout>
      <Hero />
      <Section id="about" title="About">
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
        id="work"
        title={site.workSectionTitle}
        className="border-t border-[var(--color-border)]/50 bg-[var(--color-surface-elevated)]/35 backdrop-blur-sm"
      >
        <PortfolioGrid items={site.portfolioItems} />
      </Section>
    </Layout>
  )
}
