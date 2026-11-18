import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'

type Point = {
  title: string
  text: string
}

type AudiencePageProps = {
  title: string
  description: string
  path: string
  h1: string
  intro: string
  points: Point[]
  placeholder: string
}

export default function AudiencePage({ title, description, path, h1, intro, points, placeholder }: AudiencePageProps) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <p className="services-eyebrow">Crown Construction</p>
        <h1 className="text-4xl font-semibold uppercase tracking-[0.04em]">{h1}</h1>
        <p className="mt-4 max-w-3xl text-lg">{intro}</p>

        <section className="mt-12" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-3xl font-semibold uppercase tracking-[0.06em]">Why this work</h2>
          <div className="step-row mt-6">
            {points.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="project-heading">
          <h2 id="project-heading" className="text-3xl font-semibold uppercase tracking-[0.06em]">Related project</h2>
          <p className="mt-4 max-w-3xl">{placeholder}</p>
        </section>

        <p className="mt-10">
          <Link href="/icf-foundations" className="text-wood underline">ICF foundations</Link>
        </p>
        <p className="mt-6">
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">
            Request a quote
          </Link>
        </p>
      </main>
      <Footer />
    </>
  )
}
