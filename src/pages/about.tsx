import Head from 'next/head'
import { useEffect } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.18 }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>About | Crown Construction</title>
        <meta
          name="description"
          content="Learn about Crown Construction and the practical, equipment-ready approach behind every project."
        />
      </Head>
      <Header />

      <main>
        <section className="about-forest-wrap">
          <div className="about-shell">
            <div className="about-info reveal">
              <h1 className="about-heading">About Us</h1>
              <p className="about-body">
                Crown Construction is positioned as a local, hands-on contractor focused on practical project support,
                clean job sites, and dependable follow-through. The brand direction pulls from the supplied Crown logo:
                black, copper, strong geometry, and equipment-forward presentation.
              </p>
              <p className="about-body">
                This site is structured to present a crew that can step into prep work, light construction,
                demolition, cleanup, and equipment-supported field tasks without overcomplicating the message.
              </p>
            </div>

            <div className="about-card reveal">
              <div className="about-card-copy">
                <label className="form-field">
                  <span>Clear Scope</span>
                  <p>Built for owners who want straight answers about pricing, timing, and what gets handled on site.</p>
                </label>
                <label className="form-field">
                  <span>Clean Process</span>
                  <p>The visual system and copy both reinforce a clean handoff, organized work areas, and accountable project support.</p>
                </label>
                <label className="form-field">
                  <span>Flexible Positioning</span>
                  <p>
                    You can refine this version further toward rentals, excavation, remodeling, or general contracting once you decide how narrow the Crown brand should be.
                  </p>
                </label>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}