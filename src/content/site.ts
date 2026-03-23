/**
 * Edit this file to update copy, links, and portfolio items.
 * PDFs and images live in /public/ and are served from the site root.
 */

export type PortfolioKind = 'pdf' | 'image'

export interface PortfolioItem {
  id: string
  title: string
  description: string
  /** Path under public/, e.g. "/Resume_Alvaradejo.pdf" */
  href: string
  kind: PortfolioKind
  /** Large PDFs: prefer download-only UX */
  largeFile?: boolean
}

export interface SocialLink {
  label: string
  href: string
}

export const site = {
  siteName: 'Claudia Alvaradejo',
  /** Shown near the name; align wording with your resume (degree title, license when applicable). */
  professionalTitle: 'Psychologist · M.A. in Counseling',
  tagline:
    'Clinical training, reflective practice, and relationship-centered care — with attention to trauma, identity, and resilience.',
  /** Short bio — expand with bullets from Resume_Alvaradejo.pdf (education, practicum, licenses). */
  about: [
    'Claudia Alvaradejo is a psychologist who has recently completed a Master of Arts in Counseling. Her preparation weaves together psychological science, ethical practice, and collaborative ways of working with individuals, couples, and families across the lifespan.',
    'She is interested in how culture, attachment, and life story shape emotional health, and she grounds her work in evidence-informed approaches while staying curious, warm, and human. Reflective writing, expressive projects, and trauma-focused literature have been part of how she studies care for the whole person — mind, body, and context.',
    'The PDFs below sample selected coursework and readings from her graduate journey (including creative-arts reflection and trauma-related material). For full academic history, clinical training, and professional experience, please use the resume.',
  ],
  email: 'hello@example.com',
  /** Hero eyebrow + CTAs (edit to match your voice) */
  heroEyebrow: 'Psychology & counseling',
  ctaPrimary: 'Selected writings & materials',
  ctaSecondary: 'Download resume (PDF)',
  /** Sticky nav CTA — scrolls to #work */
  navCta: 'View materials',
  /** Nav: second section anchor label */
  navWorkLabel: 'Materials',
  /** Section heading above the PDF/image grid */
  workSectionTitle: 'Coursework, readings & creative reflection',
  socialLinks: [] as SocialLink[],
  /** Full-page background image (fixed in Layout; alt empty) */
  heroImage: {
    src: '/installation-srgm-nick-cave-forothermore-2022-2023-tondo-2.jpg',
  },
  resume: {
    label: 'Resume / CV',
    href: '/Resume_Alvaradejo.pdf',
  },
  portfolioItems: [
    {
      id: 'creative-arts-journal',
      title: 'Creative Arts Journal',
      description:
        'Graduate creative-arts journal: reflective writing on process, self-awareness, and themes that intersect with counseling practice.',
      href: '/Creative Arts Journal.pdf',
      kind: 'pdf',
    },
    {
      id: 'soul-collage',
      title: 'Soul Collage',
      description:
        'Integrative collage and narrative work — expressive exploration connected to identity and inner life during clinical training.',
      href: '/Soul Collage.pdf',
      kind: 'pdf',
    },
    {
      id: 'waking-the-tiger',
      title: 'Waking the Tiger',
      description:
        'Peter Levine’s work on trauma and the body (full PDF; large file). Complements trauma-informed counseling coursework — download recommended.',
      href: '/Waking the Tiger.pdf',
      kind: 'pdf',
      largeFile: true,
    },
  ] satisfies PortfolioItem[],
} as const

export function assetUrl(path: string): string {
  const segments = path.split('/').filter(Boolean)
  return '/' + segments.map((s) => encodeURIComponent(s)).join('/')
}
