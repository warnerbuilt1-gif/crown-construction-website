import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SITE_LEGAL_NAME, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../config/site'

export default function Gallery(){
  const projectStories = [
    {
      id: 1,
      title: 'Mountain Foundation & Waterproofing',
      description: 'An uphill custom residential foundation showing excavation, reinforcing, formed work, foundation walls, and waterproofing details across multiple stages.',
      image: '/portfolio/foundation-wall-overview.jpg',
      alt: 'Large mountain foundation wall system under construction',
      details: [
        'Excavation, wall forms, and reinforced concrete work',
        'Waterproofing and drainage detailing around the perimeter',
        'Field-ready execution on steep mountain terrain',
      ],
      supporting: [
        '/portfolio/footing-layout.jpg',
        '/portfolio/waterproofing-detail.jpg',
      ],
    },
    {
      id: 2,
      title: 'Residential Slab & Exterior Progress',
      description: 'Concrete slab completion and exterior site coordination captured alongside the surrounding residence and access work.',
      image: '/portfolio/slab-finish.jpg',
      alt: 'Finished residential slab with equipment and home in the background',
      details: [
        'Finished slab surface and clean perimeter edges',
        'Coordinated work around equipment access and active site conditions',
        'Residential project support from structure to exterior finish stages',
      ],
      supporting: [
        '/portfolio/residential-exterior.jpg',
        '/portfolio/retaining-wall-layout.jpg',
      ],
    },
    {
      id: 3,
      title: 'Civic Flatwork & Site Detail',
      description: 'Flatwork and site detail around the historic library clock plaza, showing both close craftsmanship and wider site context.',
      image: '/portfolio/library-clock-pad.jpg',
      alt: 'Concrete flatwork pad in front of the historic library building',
      details: [
        'Clean pad formwork and finished flatwork in a public-facing area',
        'Attention to alignment, surrounding landscape, and existing architecture',
        'Strong fit for civic, commercial, and detail-oriented exterior work',
      ],
      supporting: [
        '/portfolio/library-clock-close.jpg',
        '/portfolio/rebar-detail.jpg',
      ],
    },
  ]

  const fieldPhotos = [
    {
      src: '/portfolio/footing-curve.jpg',
      alt: 'Curved footing and grade work in progress',
      caption: 'Curved footing layout and grade shaping.'
    },
    {
      src: '/portfolio/footing-layout.jpg',
      alt: 'Long footing run with rebar and forms',
      caption: 'Long footing runs with clean form lines.'
    },
    {
      src: '/portfolio/foundation-wall-overview.jpg',
      alt: 'Foundation wall overview on mountain property',
      caption: 'Foundation wall progress on a mountain build.'
    },
    {
      src: '/portfolio/waterproofing-detail.jpg',
      alt: 'Waterproofing detail against a foundation wall',
      caption: 'Waterproofing detail and drainage prep.'
    },
    {
      src: '/portfolio/slab-finish.jpg',
      alt: 'Finished slab reflecting the sky',
      caption: 'Fresh slab finish with equipment still on site.'
    },
    {
      src: '/portfolio/residential-exterior.jpg',
      alt: 'Residential exterior with siding and work area',
      caption: 'Exterior progress on a custom residence.'
    },
    {
      src: '/portfolio/library-clock-pad.jpg',
      alt: 'Wide shot of library clock pad concrete work',
      caption: 'Civic flatwork in a public-facing downtown setting.'
    },
    {
      src: '/portfolio/library-clock-close.jpg',
      alt: 'Closer view of library clock pad area',
      caption: 'Closer finish detail around the clock plaza.'
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
        <title>{`Recent Work | ${SITE_LEGAL_NAME}`}</title>
      </Head>
      <Header />
      <section className="gallery-forest-wrap" aria-label="Project gallery">
        <main className="gallery-shell">
          <div className="gallery-brand-card gallery-reveal">
            <div className="gallery-brand-copy">
              <p className="services-eyebrow">Portfolio</p>
              <h1 className="gallery-heading">Recent Work</h1>
              <p className="services-intro">Mountain foundations, waterproofing, slabs, and flatwork from {SITE_LEGAL_NAME}. If the job looks like this, call and Neal will price yours.</p>
            </div>
            <div className="gallery-brand-media">
              <Image
                src="/portfolio/slab-finish.jpg"
                alt="Completed slab project"
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 100vw, 420px"
                className="gallery-brand-image"
              />
            </div>
          </div>

          <div className="portfolio-story-stack">
            {projectStories.map((story) => (
              <article key={story.id} className="portfolio-story gallery-reveal">
                <div className="portfolio-story-media">
                  <Image
                    src={story.image}
                    alt={story.alt}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 900px) 100vw, 56vw"
                    className="portfolio-story-image"
                  />
                </div>
                <div className="portfolio-story-copy">
                  <span className="gallery-pillar-index">0{story.id}</span>
                  <h2>{story.title}</h2>
                  <p>{story.description}</p>
                  <ul className="portfolio-story-list">
                    {story.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="portfolio-support-grid">
                    {story.supporting.map((src) => (
                      <div key={src} className="portfolio-support-card">
                        <Image
                          src={src}
                          alt={story.title}
                          width={900}
                          height={1200}
                          sizes="(max-width: 900px) 100vw, 20vw"
                          className="portfolio-support-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="portfolio-grid-wrap gallery-reveal" aria-labelledby="field-photos-heading">
            <div className="portfolio-grid-header">
              <p className="services-eyebrow">Field Photos</p>
              <h2 id="field-photos-heading" className="gallery-heading">Jobsite Highlights</h2>
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
              <Link href="/contact" className="inline-block rounded-full border border-white/30 px-6 py-3 font-semibold text-white">Request a quote</Link>
            </div>
          </section>
        </main>
      </section>
      <Footer />
    </>
  )
}
