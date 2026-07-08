import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services(){
  const services = [
    {
      title: "Site Prep & Cleanup",
      description: "Initial clearing, debris haul-off, cleanup, and general field support to get a property ready for the next phase of work."
    },
    {
      title: "Framing & Exterior Support",
      description: "Practical labor support for small builds, repairs, punch-list work, and exterior construction projects that need a reliable crew."
    },
    {
      title: "Equipment Access Work",
      description: "Lift-assisted and equipment-backed job support for hard-to-reach areas, elevated work, and faster on-site execution."
    },
    {
      title: "Demolition & Tear-Out",
      description: "Selective demolition, tear-out, and disposal handled with attention to safety, sequencing, and site cleanliness."
    },
    {
      title: "General Project Support",
      description: "Extra hands for fast-moving jobs where scheduling, materials, cleanup, and follow-through matter just as much as the final finish."
    }
  ]

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
        <title>Services — Crown Construction</title>
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

          <div className="showcase-right reveal" key={activeService.title}>
            <div className="service-copy fade-glide reveal">
              <h4>{activeService.title}</h4>
              <p>{activeService.description}</p>
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
