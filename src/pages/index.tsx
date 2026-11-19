import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Seo from '../components/Seo'
import { PROJECTS, SERVICES, SERVICE_TOWNS, SITE_DESCRIPTION, SITE_OWNER, SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_SERVICE_AREA } from '../config/site'

const homeServiceTitles = [
  'Foundations & footings',
  'Slabs & flatwork',
  'Waterproofing & drainage',
  'Concrete Demolition',
  'Septic Tank Installation',
] as const

const homeServices = homeServiceTitles.flatMap((title) => {
  const service = SERVICES.find((item) => item.title === title)
  return service ? [service] : []
})

const servicePhotos: Record<string, { src: string; alt: string }> = {
  'Foundations & footings': {
    src: '/portfolio/footing-layout.webp',
    alt: 'Long footing run with rebar and forms',
  },
  'Slabs & flatwork': {
    src: '/portfolio/slab-finish.webp',
    alt: 'Finished slab reflecting the sky',
  },
  'Waterproofing & drainage': {
    src: '/portfolio/waterproofing-detail.webp',
    alt: 'Waterproofing detail against a foundation wall',
  },
  'Concrete Demolition': {
    src: '/portfolio/concrete-demo-hammer.webp',
    alt: 'Hydraulic hammer breaking a concrete wall',
  },
  'Septic Tank Installation': {
    src: '/portfolio/septic-tank-set.webp',
    alt: 'Concrete septic tank set in an excavated hole',
  },
}

export default function Home() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-fade]'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-in'))
      return
    }

    document.documentElement.classList.add('fade-ready')
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          currentObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )
    nodes.forEach((node) => observer.observe(node))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('fade-ready')
    }
  }, [])

  return (
    <>
      <Seo
        title="Crown Construction of Montana | ICF Foundations in Anaconda"
        description={SITE_DESCRIPTION}
        path="/"
      />
      <Head>
        <link rel="preload" as="image" href="/portfolio/foundation-layout-aerial.webp" />
      </Head>
      <Header />
      <main>
        <Hero />

        <section className="home-band home-bone" data-fade>
          <div className="home-inner home-narrow">
            <p className="home-statement">
              Neal Warner builds foundations, slabs, waterproofing, and site work for homeowners, builders, and public jobs across Anaconda, Butte, Deer Lodge, and Philipsburg. Licensed and insured. You get a straight price, a set start, and a site the next trade can use.
            </p>
          </div>
        </section>

        <section className="home-band home-dark" data-fade aria-labelledby="services-heading">
          <div className="home-inner">
            <p className="services-eyebrow">What we build</p>
            <h2 id="services-heading">Work that holds up after we leave</h2>
            <p className="home-lead">
              Foundations, slabs, and the site work around them for homeowners and builders in {SITE_SERVICE_AREA}.
            </p>
            <p className="home-towns">
              {SERVICE_TOWNS.map((town, index) => (
                <span key={town.slug}>
                  <Link href={town.path} className="text-wood underline">{town.city}</Link>
                  {index < SERVICE_TOWNS.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </p>
            <div className="build-stack">
              <Link href="/icf-foundations" className="feature-card">
                <div className="feature-media">
                  <Image
                    src="/portfolio/foundation-wall-overview.webp"
                    alt="Foundation wall overview on a mountain property"
                    fill
                    sizes="(max-width: 800px) 100vw, 46rem"
                  />
                </div>
                <div className="feature-copy">
                  <h3>ICF Foundations</h3>
                  <p>
                    Crown Construction builds large-scale ICF (insulated concrete form) foundations for builders, commercial and public projects in Anaconda, Butte and Southwest Montana.
                  </p>
                </div>
              </Link>
              <div className="build-grid">
                {homeServices.map((service) => {
                  const photo = servicePhotos[service.title]
                  return (
                    <article className="build-card" key={service.title}>
                      {photo ? (
                        <div className="build-card-media">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 800px) 100vw, 24rem"
                          />
                        </div>
                      ) : null}
                      <div className="build-card-copy">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
            <p className="home-more">
              <Link href="/services" className="text-wood underline">All services</Link>
            </p>
          </div>
        </section>

        <section className="home-band home-bone" data-fade aria-labelledby="work-heading">
          <div className="home-inner">
            <p className="services-eyebrow">On the ground</p>
            <h2 id="work-heading">Recent work</h2>
            <p className="home-lead">Three jobs from the ground we have already built. Each one starts with the problem on the lot and ends with a site the next trade can use.</p>
            <div className="work-grid">
              {PROJECTS.map((project) => (
                <Link href={`/gallery/#${project.id}`} className="work-photo" key={project.id}>
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 800px) 100vw, 24rem" />
                  <div className="work-caption">
                    <strong>{project.town}</strong>
                    <span className="work-title">{project.title}</span>
                    <span className="work-copy">{project.copy}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-band home-dark" data-fade aria-labelledby="process-heading">
          <div className="home-inner">
            <p className="services-eyebrow">How a job starts</p>
            <h2 id="process-heading">Call. Walk it. Price it.</h2>
            <div className="step-row">
              <article>
                <span>01</span>
                <h3>Tell {SITE_OWNER} the job</h3>
                <p>Town, what you want built, and when you need it. Photos of the lot help. A plan helps more.</p>
              </article>
              <article>
                <span>02</span>
                <h3>We look at the ground</h3>
                <p>Access, slope, and what is already in the way. The estimate matches that site, not a generic pad.</p>
              </article>
              <article>
                <span>03</span>
                <h3>We build it and clean up</h3>
                <p>The crew does the work on the estimate. When we leave, the site is ready for the next trade.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-band" data-fade>
          <div className="cta-band-inner">
            <p className="services-eyebrow">Free estimates</p>
            <h2>Get a straight estimate</h2>
            <p>
              Call {SITE_OWNER} with the address and the work. Foundations, slabs, waterproofing, and site cleanup across {SITE_SERVICE_AREA}.
            </p>
            <div className="cta-band-actions">
              <Link href="/contact/#quote-form" className="cta-quote">Get a Quote</Link>
              <a href={SITE_PHONE_TEL} className="cta-phone">Call {SITE_PHONE_DISPLAY}</a>
            </div>
            <p className="cta-band-note">
              <Link href="/gallery">View our portfolio</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
