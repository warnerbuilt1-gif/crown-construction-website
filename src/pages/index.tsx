import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { PROJECTS, SERVICES, SERVICE_TOWNS, SITE_DESCRIPTION, SITE_NAME, SITE_OWNER, SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_SERVICE_AREA } from '../config/site'

const homeServices = SERVICES.slice(0, 3)

export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card')
    if (!cards.length) return

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>{`Foundations & Flatwork in Anaconda, MT | ${SITE_NAME}`}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
      </Head>
      <Header />
      <main>
        <Hero />
        <section className="services-showcase" aria-labelledby="services-heading">
          <div className="services-shell">
            <div className="services-copy">
              <p className="services-eyebrow">What we build</p>
              <h2 id="services-heading" className="services-title">Work that holds up after we leave</h2>
              <p className="services-intro">
                Foundations, slabs, and the site work around them for homeowners and builders in {SITE_SERVICE_AREA}.
              </p>
              <p className="mt-3 text-sm">
                {SERVICE_TOWNS.map((town, index) => (
                  <span key={town.slug}>
                    <Link href={town.path} className="text-wood underline">{town.city}</Link>
                    {index < SERVICE_TOWNS.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
            </div>
            <div className="services-grid">
              {homeServices.map((service) => (
                <article className="service-card" key={service.title}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/services" className="text-wood underline">All services</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-6xl px-6" aria-labelledby="work-heading">
          <p className="services-eyebrow">On the ground</p>
          <h2 id="work-heading" className="text-3xl font-semibold uppercase tracking-[0.06em]">Recent work</h2>
          <p className="max-w-2xl">Three jobs from the ground we have already built. Each one starts with the problem on the lot and ends with a site the next trade can use.</p>
          <div className="work-grid mt-6">
            {PROJECTS.map((project) => (
              <Link href={`/gallery/#${project.id}`} className="work-card" key={project.id}>
                <Image src={project.image} alt={project.alt} width={1200} height={900} />
                <div>
                  <strong>{project.town}</strong>
                  <span>{project.title}</span>
                  <span>{project.copy}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-6xl px-6" aria-labelledby="process-heading">
          <p className="services-eyebrow">How a job starts</p>
          <h2 id="process-heading" className="text-3xl font-semibold uppercase tracking-[0.06em]">Call. Walk it. Price it.</h2>
          <div className="step-row mt-6">
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
        </section>

        <section className="mx-auto mt-16 max-w-6xl rounded-[28px] border border-white/[0.06] bg-zinc-900 px-6 py-16 text-stone-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_28px_80px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold uppercase tracking-[0.08em] text-white">Get a straight estimate</h3>
              <p className="mt-2 max-w-2xl text-stone-300">
                Call {SITE_OWNER} with the address and the work. Foundations, slabs, waterproofing, and site cleanup across {SITE_SERVICE_AREA}.
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold text-wood">Free estimates</p>
              <a href={SITE_PHONE_TEL} className="inline-block mt-2 rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">Call {SITE_PHONE_DISPLAY}</a>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-center gap-4 text-sm md:flex-row">
            <Link href="/gallery" className="text-wood underline">View our portfolio</Link>
            <Link href="/contact" className="text-wood underline">Get a consultation</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
