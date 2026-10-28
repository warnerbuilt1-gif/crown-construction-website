import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SERVICES, SITE_LEGAL_NAME, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../config/site'

export default function Services(){
  const services = SERVICES

  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [sectionVisible, setSectionVisible] = useState(false)
  const rafRef = useRef<number | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const cycleMs = 5000

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    if (!revealItems.length) return

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isPaused || !sectionVisible) return

    let startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const nextProgress = Math.min((elapsed / cycleMs) * 100, 100)
      setProgress(nextProgress)

      if (nextProgress >= 100) {
        setActiveIndex((prev) => (prev + 1) % services.length)
        setProgress(0)
        startTime = now
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isPaused, sectionVisible, services.length])

  const handleManualSelect = (index: number) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
    }
    setIsPaused(true)
    setActiveIndex(index)
    setProgress(0)
  }

  const activeService = services[activeIndex]

  return (
    <>
      <Head>
        <title>{`Services | ${SITE_LEGAL_NAME}`}</title>
      </Head>
      <Header />
      <section
        ref={sectionRef}
        className={`services-forest-wrap reveal-section ${sectionVisible ? 'is-visible' : ''}`}
        aria-label="Service showcase section"
      >
      <main className="showcase-wrap">
        <section className="showcase-desktop" aria-label="Service showcase">
          <div className="showcase-left reveal">
            <h1 className="showcase-heading reveal">Construction Services</h1>
            {services.map((service, index) => (
              <button
                key={service.title}
                className={`service-tab ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleManualSelect(index)}
                type="button"
              >
                <h3>{service.title}</h3>
                <div className="progress-track" aria-hidden="true">
                  <span
                    className="progress-fill"
                    style={{
                      width: `${index === activeIndex ? progress : 0}%`
                    }}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="showcase-right" key={activeService.title}>
            <div className="service-copy fade-glide">
              <h4>{activeService.title}</h4>
              <p>{activeService.description}</p>
              <div className="hero-actions mt-6">
                <a href={SITE_PHONE_TEL} className="inline-block rounded-full bg-wood px-5 py-3 font-semibold text-[#120f0d]">Call {SITE_PHONE_DISPLAY}</a>
                <Link href="/contact" className="inline-block rounded-full border border-white/30 px-5 py-3 font-semibold text-white">Request a quote</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="showcase-mobile reveal" aria-label="Services mobile cards">
          <h2 className="reveal">Construction Services</h2>
          <div className="mobile-stack">
            {services.map((service) => (
              <article className="mobile-card reveal" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      </section>
      <Footer />
    </>
  )
}
