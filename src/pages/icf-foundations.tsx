import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'

const whyIcf = [
  {
    title: 'Insulated walls in one pour',
    text: 'Foam forms stay in place. The concrete is poured once, and the insulation is already on the wall.',
  },
  {
    title: 'Freeze-thaw winters',
    text: 'A solid concrete core stands up to Montana freeze-thaw cycles.',
  },
  {
    title: 'Lower heating costs',
    text: 'The wall is insulated, so less heat moves through it than through an uninsulated wall.',
  },
  {
    title: 'Sound dampening',
    text: 'Concrete and foam together reduce sound passing through the wall.',
  },
  {
    title: 'Fast install',
    text: 'The forms stack and stay, so the crew is not building and stripping wood forms for every wall.',
  },
]

const processSteps = [
  {
    title: 'Consultation',
    text: 'Neal looks at the plans, the site, and what the foundation has to do.',
  },
  {
    title: 'Plans and Quote',
    text: 'You get a quote from the plans and the ground before the crew is scheduled.',
  },
  {
    title: 'Excavation and Footings',
    text: 'The site is excavated and the footings are poured for the walls.',
  },
  {
    title: 'ICF Walls and Pour',
    text: 'The insulated forms are stacked, the steel is tied, and the concrete is poured.',
  },
  {
    title: 'Inspection and Backfill',
    text: 'The wall is inspected, then we backfill the excavation.',
  },
]

const photos = [
  {
    src: '/portfolio/foundation-layout-aerial.webp',
    alt: 'Aerial view of a formed foundation layout on a graded lot',
    caption: 'Formed foundation layout on a graded lot.',
  },
  {
    src: '/portfolio/foundation-wall-overview.webp',
    alt: 'Foundation wall overview on a mountain property',
    caption: 'Foundation wall progress on a mountain build.',
  },
  {
    src: '/portfolio/footing-layout.webp',
    alt: 'Long footing run with rebar and forms',
    caption: 'Long footing runs with clean form lines.',
  },
  {
    src: '/portfolio/waterproofing-detail.webp',
    alt: 'Waterproofing detail against a foundation wall',
    caption: 'Waterproofing detail and drainage prep.',
  },
]

const faqs = [
  {
    question: 'What is ICF?',
    answer:
      'ICF means insulated concrete form. The forms are foam blocks or panels that lock together and stay in the wall. Rebar goes in the cavity, then the concrete is poured once. The foam is both the form and the insulation.',
  },
  {
    question: 'How does ICF cost compare to poured walls?',
    answer:
      'An ICF wall is poured concrete with the insulation already in place. A conventional poured wall is the concrete, and insulation is a separate step. [PLACEHOLDER: your price difference between an ICF wall and a conventional poured wall.]',
  },
  {
    question: 'How long does an ICF foundation take?',
    answer:
      'The pour is one placement after the forms are stacked. Excavation, steel, inspection, and backfill still take the time the site needs. [PLACEHOLDER: typical days or weeks for an ICF foundation on your jobs.]',
  },
  {
    question: 'Do you work with my builder?',
    answer:
      'Yes. Crown Construction builds ICF foundations for builders, and for commercial and public projects in Anaconda, Butte, and Southwest Montana. Send the plans through the quote page and Neal will price the foundation.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function IcfFoundations() {
  return (
    <>
      <Seo
        title="ICF Foundations in Montana | Crown Construction"
        description="Crown Construction builds large-scale ICF foundations for builders, commercial and public projects in Anaconda, Butte, and Southwest Montana."
        path="/icf-foundations/"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <p className="services-eyebrow">Crown Construction</p>
        <h1 className="text-4xl font-semibold uppercase tracking-[0.04em]">ICF Foundations in Montana</h1>
        <p className="mt-4 max-w-3xl text-lg">
          Crown Construction builds large-scale ICF (insulated concrete form) foundations for builders, commercial and public projects in Anaconda, Butte and Southwest Montana.
        </p>

        <section className="mt-12" aria-labelledby="why-icf-heading">
          <h2 id="why-icf-heading" className="text-3xl font-semibold uppercase tracking-[0.06em]">Why ICF</h2>
          <div className="step-row mt-6">
            {whyIcf.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="what-we-build-heading">
          <h2 id="what-we-build-heading" className="text-3xl font-semibold uppercase tracking-[0.06em]">What we build</h2>
          <p className="mt-4 max-w-3xl">
            Basements, frost walls, stem walls, retaining walls, and large commercial foundations.
          </p>
          <p className="mt-3 max-w-3xl">Other projects are by request.</p>
          <p className="mt-3 max-w-3xl">[PLACEHOLDER: ICF brand, wall thickness, or sizes to name.]</p>
        </section>

        <section className="mt-12" aria-labelledby="process-heading">
          <h2 id="process-heading" className="text-3xl font-semibold uppercase tracking-[0.06em]">Our process</h2>
          <div className="step-row mt-6">
            {processSteps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-grid-wrap mt-12" aria-labelledby="photos-heading">
          <h2 id="photos-heading" className="text-3xl font-semibold uppercase tracking-[0.06em]">From the portfolio</h2>
          <p className="mt-4 max-w-3xl">Foundation photos already on this site. Captions describe what is in the picture.</p>
          <div className="portfolio-grid mt-6">
            {photos.map((photo) => (
              <figure key={photo.src} className="portfolio-grid-card">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 900px) 100vw, 25vw"
                  loading="lazy"
                  className="portfolio-grid-image"
                />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-3xl font-semibold uppercase tracking-[0.06em]">FAQ</h2>
          <div className="mt-6 grid gap-4">
            {faqs.map((item) => (
              <article key={item.question} className="rounded-[1.1rem] border border-white/[0.06] bg-[#18181b] px-5 py-5">
                <h3 className="text-2xl">{item.question}</h3>
                <p className="mt-2 text-stone-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">
            Request a quote
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
