import Head from 'next/head'
import { useEffect } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Gallery(){
  const items = [
    {
      id: 1,
      title: 'Site Prep',
      description: 'Pad preparation, cleanup, and ready-to-build field support.'
    },
    {
      id: 2,
      title: 'Exterior Work',
      description: 'Repairs, build support, and owner-facing punch list execution.'
    },
    {
      id: 3,
      title: 'Equipment Support',
      description: 'Lift-assisted access and efficient movement through hard-to-reach tasks.'
    },
    {
      id: 4,
      title: 'Clean Turnover',
      description: 'The final handoff stays as important as the work that happens before it.'
    },
  ]

  useEffect(() => {
    const revealCards = document.querySelectorAll('.gallery-reveal')
    if (!revealCards.length) return

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    )

    revealCards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Projects — Crown Construction</title>
      </Head>
      <Header />
      <section className="gallery-forest-wrap" aria-label="Project gallery">
        <main className="gallery-shell">
          <div className="gallery-brand-card gallery-reveal">
            <div className="gallery-brand-copy">
              <p className="services-eyebrow">Brand Direction</p>
              <h1 className="gallery-heading">Projects & Capabilities</h1>
              <p className="services-intro">Because there were no matching construction project photos in the repo, this page now works as a polished capability overview built around the supplied Crown logo artwork.</p>
            </div>
            <div className="gallery-brand-media">
              <Image
                src="/crown-rentals-logo.png"
                alt="Crown logo artwork"
                width={1200}
                height={1200}
                sizes="(max-width: 768px) 100vw, 420px"
                className="gallery-brand-image"
              />
            </div>
          </div>

          <div className="gallery-pillars">
            {items.map((it) => (
              <article key={it.id} className="gallery-pillar gallery-reveal">
                <span className="gallery-pillar-index">0{it.id}</span>
                <h2>{it.title}</h2>
                <p>{it.description}</p>
              </article>
            ))}
          </div>
        </main>
      </section>
      <Footer />
    </>
  )
}
