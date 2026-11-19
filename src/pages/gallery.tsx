import Link from 'next/link'
import { useEffect } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { SITE_LEGAL_NAME, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../config/site'

const supportAlt: Record<string, string> = {
  '/portfolio/library-clock-close.webp': 'Closer view of the library clock pad',
  '/portfolio/hearst-library-plaza.webp': 'Phoebe Apperson Hearst statue on the plaza in front of a brick library',
  '/portfolio/retaining-wall-layout.webp': 'Layout along a curved retaining wall',
  '/portfolio/footing-curve.webp': 'Curved footing and grade work in progress',
  '/portfolio/residential-exterior.webp': 'Residential exterior with siding and work area',
  '/portfolio/slab-finish.webp': 'Finished slab reflecting the sky',
}

export default function Gallery(){
  const projectStories = [
    {
      id: 'hearst-library',
      title: 'Hearst Library plaza',
      town: 'Anaconda',
      description: 'Public flatwork in front of an existing civic building.',
      challenge: 'The pad had to meet the building and the plaza, not a blank lot.',
      approach: 'Neal walked the grade, formed the pad to the existing edges, and finished the flatwork in place.',
      result: 'A finished plaza surface the library could open onto.',
      image: '/portfolio/library-clock-pad.webp',
      alt: 'Concrete flatwork pad in front of the historic library building',
      supporting: [
        '/portfolio/library-clock-close.webp',
        '/portfolio/hearst-library-plaza.webp',
      ],
    },
    {
      id: 'retaining-wall',
      title: 'Retaining wall',
      town: 'Southwest Montana',
      description: 'A house lot where the grade dropped beside the building.',
      challenge: 'The wall had to follow the curve and hold the yard.',
      approach: 'Layout along the slope, then a block wall with a poured cap.',
      result: 'A wall the house and yard can sit against.',
      image: '/portfolio/retaining-wall-curve.webp',
      alt: 'Curved block retaining wall under construction along a house',
      supporting: [
        '/portfolio/retaining-wall-layout.webp',
        '/portfolio/footing-curve.webp',
      ],
    },
    {
      id: 'patio-wall',
      title: 'Patio wall',
      town: 'Southwest Montana',
      description: 'A residential patio that needed a finished edge.',
      challenge: 'The patio needed a finished edge, not an open cut beside the house.',
      approach: 'Stone wall with a poured cap, built to the house.',
      result: 'A usable patio with a finished wall.',
      image: '/portfolio/patio-stone-wall.webp',
      alt: 'Finished curved stone retaining wall and concrete patio beside a house',
      supporting: [
        '/portfolio/residential-exterior.webp',
        '/portfolio/slab-finish.webp',
      ],
    },
  ]

  const fieldPhotos = [
    {
      src: '/portfolio/footing-curve.webp',
      alt: 'Curved footing and grade work in progress',
      caption: 'Curved footing layout and grade shaping.'
    },
    {
      src: '/portfolio/footing-layout.webp',
      alt: 'Long footing run with rebar and forms',
      caption: 'Long footing runs with clean form lines.'
    },
    {
      src: '/portfolio/foundation-wall-overview.webp',
      alt: 'Foundation wall overview on mountain property',
      caption: 'Foundation wall progress on a mountain build.'
    },
    {
      src: '/portfolio/waterproofing-detail.webp',
      alt: 'Waterproofing detail against a foundation wall',
      caption: 'Waterproofing detail and drainage prep.'
    },
    {
      src: '/portfolio/slab-finish.webp',
      alt: 'Finished slab reflecting the sky',
      caption: 'Fresh slab finish with equipment still on site.'
    },
    {
      src: '/portfolio/residential-exterior.webp',
      alt: 'Residential exterior with siding and work area',
      caption: 'Exterior progress on a custom residence.'
    },
    {
      src: '/portfolio/library-clock-pad.webp',
      alt: 'Wide shot of library clock pad concrete work',
      caption: 'Civic flatwork in a public-facing downtown setting.'
    },
    {
      src: '/portfolio/library-clock-close.webp',
      alt: 'Closer view of library clock pad area',
      caption: 'Closer finish detail around the clock plaza.'
    },
    {
      src: '/portfolio/concrete-demo-hammer.webp',
      alt: 'Hydraulic hammer breaking a concrete wall',
      caption: 'A hammer breaking out a concrete wall.'
    },
    {
      src: '/portfolio/concrete-demo-pile.webp',
      alt: 'Broken concrete sections piled on a lot',
      caption: 'Broken concrete stacked after it was broken out.'
    },
    {
      src: '/portfolio/concrete-demo-sections.webp',
      alt: 'Closer view of broken concrete wall sections',
      caption: 'Broken concrete sections on the lot.'
    },
    {
      src: '/portfolio/concrete-demo-lot.webp',
      alt: 'Broken concrete pieces on an open lot',
      caption: 'Broken concrete left on the lot after the wall came out.'
    },
    {
      src: '/portfolio/septic-excavation.webp',
      alt: 'Excavator beside a deep hole dug in a field',
      caption: 'The hole dug before the tank went in.'
    },
    {
      src: '/portfolio/septic-trench.webp',
      alt: 'Excavated trench with a white pipe and an excavator',
      caption: 'Pipe laid in the trench toward the excavation.'
    },
    {
      src: '/portfolio/septic-tank-lower.webp',
      alt: 'Concrete septic tank being lowered into an excavated hole',
      caption: 'The tank being lowered into the hole.'
    },
    {
      src: '/portfolio/septic-tank-set.webp',
      alt: 'Concrete septic tank set in an excavated hole',
      caption: 'The tank set in the hole.'
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
      <Seo
        title={`Recent Work | ${SITE_LEGAL_NAME}`}
        description={`Foundations, commercial work, and public flatwork from ${SITE_LEGAL_NAME}.`}
        path="/gallery/"
      />
      <Header />
      <section className="gallery-forest-wrap" aria-label="Project gallery">
        <main className="gallery-shell">
          <div className="gallery-brand-card gallery-reveal">
            <div className="gallery-brand-copy">
              <p className="services-eyebrow">Portfolio</p>
              <h1 className="gallery-heading">Portfolio</h1>
              <p className="services-intro">Foundations, commercial work, and public flatwork from {SITE_LEGAL_NAME}. If the job looks like this, Neal will walk yours.</p>
            </div>
            <div className="gallery-brand-media">
              <Image
                src="/portfolio/slab-finish.webp"
                alt="Completed slab project"
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 100vw, 420px"
                loading="lazy"
                className="gallery-brand-image"
              />
            </div>
          </div>

          <div className="portfolio-story-stack">
            {projectStories.map((story) => (
              <article key={story.id} id={story.id} className="portfolio-story gallery-reveal">
                <div className="portfolio-story-media">
                  <Image
                    src={story.image}
                    alt={story.alt}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 900px) 100vw, 56vw"
                    loading="lazy"
                    className="portfolio-story-image"
                  />
                </div>
                <div className="portfolio-story-copy">
                  <p className="services-eyebrow">{story.town}</p>
                  <h2>{story.title}</h2>
                  <h3>The challenge</h3>
                  <p>{story.challenge}</p>
                  <h3>Our approach</h3>
                  <p>{story.approach}</p>
                  <h3>The result</h3>
                  <p>{story.result}</p>
                  <div className="portfolio-support-grid">
                    {story.supporting.map((src) => (
                      <div key={src} className="portfolio-support-card">
                        <Image
                          src={src}
                          alt={supportAlt[src] || 'Project photo from the Crown Construction portfolio'}
                          width={900}
                          height={1200}
                          sizes="(max-width: 900px) 100vw, 20vw"
                          loading="lazy"
                          className="portfolio-support-image"
                        />
                      </div>
                    ))}
                  </div>
                  <Link href={`/contact/?job=${encodeURIComponent(story.title)}#quote-form`} className="inline-block mt-4 rounded-full bg-wood px-5 py-3 font-semibold text-[#120f0d]">
                    Get a consultation for a job like this
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <section className="portfolio-grid-wrap gallery-reveal" aria-labelledby="field-photos-heading">
            <div className="portfolio-grid-header">
              <p className="services-eyebrow">Field photos</p>
              <h2 id="field-photos-heading" className="gallery-heading">Field photos</h2>
            </div>
            <div className="portfolio-grid">
              {fieldPhotos.map((photo) => (
                <figure key={photo.src} className="portfolio-grid-card">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1200}
                    height={1600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="portfolio-grid-image"
                  />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-white/15 bg-black/40 px-6 py-10 text-center">
            <h2 className="text-2xl text-white">Have a lot that looks like this?</h2>
            <p className="mt-2 text-stone-200">Send the town, the work, and a photo. Neal walks it and prices it.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href={SITE_PHONE_TEL} className="inline-block rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">Call {SITE_PHONE_DISPLAY}</a>
              <Link href="/contact/#quote-form" className="inline-block rounded-full border border-white/30 px-6 py-3 font-semibold text-white">Get a consultation</Link>
            </div>
          </section>
        </main>
      </section>
      <Footer />
    </>
  )
}
