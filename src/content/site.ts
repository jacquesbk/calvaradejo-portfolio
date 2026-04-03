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
  /** Optional additional downloadable variants (e.g. PDF + PPTX). */
  downloadOptions?: readonly {
    label: string
    href: string
  }[]
}

export interface SocialLink {
  label: string
  href: string
}

export const site = {
  siteName: 'Claudia Alvaradejo',
  /** Shown near the name; align wording with your resume (degree title, license when applicable). */
  professionalTitle: 'M.S in Clinical Psychology, MFT/LPCC Intern',
  tagline:
    'Clinical training, reflective practice, and relationship-centered care — with attention to trauma, identity, and resilience.',
  about: [
    'Claudia Alvaradejo is a bilingual, bicultural therapist whose professional identity is shaped by extensive clinical experience in both Mexico and the United States. With degrees in Psychology and Clinical Psychology from Mexico and a Master of Science in Counseling from NDNU, she brings a deep cross-cultural lens to her collaborative clinical approach.',
    'Her clinical foundation began in Mexico, where she provided vital support to children and families navigating the complexities of cancer and disabilities. Since moving to the United States, she has specialized in school-based counseling at One Life Counseling Center. In this role, she serves newcomer students and elementary-aged children in San Mateo and Redwood City, bridging the gap between clinical depth and the practical needs of the school environment.',
  ],
  aboutIdentity: {
    /** Main heading for the Identity panel */
    title: 'Identity as a Psychotherapist',
    paragraphs: [
      "My identity as a therapist is built on the belief that a child's most profound stories are often told without words. I am a psychodynamically oriented therapist dedicated to the healing of children, particularly those within immigrant communities who have navigated the weight of profound trauma. To me, behavior is a language. Whether I am helping a child decode a nightmare by recognizing that a 'monster with a red shirt' is actually a fragmented memory of a traumatic past, or providing a safe container for aggressive play, my goal is to look beyond the symptom to the child underneath.",
      'I balance the depth of psychodynamic inquiry with the practicality of school-based support, ensuring that immediate care is always informed by a deeper understanding. This is evident in my work with child-centered play therapy, where I might spend weeks as a steady, regulated presence while a child uses plush toys to "attack" and process the violent loss of a parent. I strive to offer a space where limits are set with care, silence is heard, and play is transformative. My mission is to ensure that every child is seen and heard within the full context of their history and culture.',
    ],
  },
  email: 'hello@example.com',
  /** Nav: work / portfolio panel label */
  navWorkLabel: 'Coursework',
  /** Horizontal panel: embedded resume viewer */
  cvSectionTitle: 'Curriculum Vitae',
  /** Section heading above the PDF/image grid */
  workSectionTitle: 'Coursework',
  socialLinks: [] as SocialLink[],
  /** Full-screen background image behind all horizontal panels (Home through Contact). */
  sectionBackgroundImage: {
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
      id: 'play-therapy',
      title: 'Play Therapy',
      description:
        'Coursework on child-centered play therapy — theory, technique, and reflective practice aligned with school-based and clinical work with children.',
      href: '/Play Therapy.pdf',
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
    {
      id: 'strength-in-uncertainty',
      title: 'Strength in Uncertainty',
      description:
        'Presentation resource exploring support, resilience, and belonging for immigrant students and dreamers.',
      href: '/Strength in Uncertainty  A Safe Space for Dreamers.pdf',
      kind: 'pdf',
      downloadOptions: [
        {
          label: 'Download PDF',
          href: '/Strength in Uncertainty  A Safe Space for Dreamers.pdf',
        },
        {
          label: 'Download PPTX',
          href: '/Strength in Uncertainty  A Safe Space for Dreamers.pptx',
        },
      ],
    },
  ] satisfies PortfolioItem[],
} as const

export function assetUrl(path: string): string {
  const segments = path.split('/').filter(Boolean)
  return '/' + segments.map((s) => encodeURIComponent(s)).join('/')
}
