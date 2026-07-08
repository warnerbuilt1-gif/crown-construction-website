import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home(){
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
        <title>Crown Construction — Home</title>
      </Head>
      <Header />
      <main>
        <Hero />
          <section className="services-showcase" aria-labelledby="services-heading">
            <div className="services-shell">
              <div className="services-copy">
                <p className="services-eyebrow">What We Build</p>
                <h2 id="services-heading" className="services-title">Core Services</h2>
                <p className="services-intro">Crown Construction is positioned as a practical, local construction brand: clean sites, efficient equipment use, and dependable support from first prep through final walkthrough.</p>
              </div>
              <div className="services-grid">
                <article className="service-card">
                  <h4>Site Prep & Cleanup</h4>
                  <p>Pad prep, debris removal, grading support, and end-of-job cleanup that keeps projects moving.</p>
                </article>
                <article className="service-card">
                  <h4>Small Project Construction</h4>
                  <p>Exterior upgrades, repairs, and build support for property owners who want one crew to stay accountable.</p>
                </article>
                <article className="service-card">
                  <h4>Lift & Equipment Support</h4>
                  <p>Equipment-ready job assistance for overhead work, access challenges, and fast-moving field needs.</p>
                </article>
              </div>
            </div>
          </section>
        <section className="mx-auto mt-8 max-w-6xl rounded-[28px] border border-stone-800 bg-[#0f0f12] px-6 py-12 text-stone-100 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold uppercase tracking-[0.08em] text-white">Straight estimates. Clean finishes.</h3>
              <p className="mt-2 max-w-2xl text-stone-300">The site now presents Crown Construction with a darker industrial visual system, flexible construction-oriented messaging, and branding shaped by the supplied logo.</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold text-wood">Free estimates available</p>
              <a href="tel:4065954472" className="inline-block mt-2 rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">Call 406-595-4472</a>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-center gap-4 text-sm md:flex-row">
            <Link href="/services" className="text-wood underline">Review service categories</Link>
            <Link href="/contact" className="text-wood underline">Open the quote form</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
