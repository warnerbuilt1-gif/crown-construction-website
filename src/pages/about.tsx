import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {
  SITE_ADDRESS,
  SITE_CITY,
  SITE_ESTABLISHED,
  SITE_LEGAL_NAME,
  SITE_MAP_LINK,
  SITE_NAME,
  SITE_OWNER,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_RENTALS_URL,
  SITE_SERVICE_AREA,
} from '../config/site'

export default function About() {
  return (
    <>
      <Head>
        <title>{`About ${SITE_OWNER} | ${SITE_LEGAL_NAME}`}</title>
        <meta
          name="description"
          content={`${SITE_LEGAL_NAME} is ${SITE_OWNER}'s construction company in ${SITE_CITY}, Montana. Foundations, slabs, flatwork, and site work since ${SITE_ESTABLISHED}.`}
        />
      </Head>
      <Header />
      <main>
        <section className="about-forest-wrap">
          <div className="about-shell">
            <div className="about-info reveal active">
              <h1 className="about-heading">About {SITE_NAME}</h1>
              <p className="about-body">
                {SITE_LEGAL_NAME} is {SITE_OWNER}&apos;s company in {SITE_CITY}. He has been building here since {SITE_ESTABLISHED}. The work is foundations, footings, slabs, waterproofing, and the site prep that has to happen before a house or a pad can go in.
              </p>
              <p className="about-body">
                Recent field work includes mountain foundation walls, finished slabs, and flatwork in town. Public work includes a parking area at Lookout Pass for the Lolo National Forest. If you need the machine and not the crew, the same phone rents it at <a href={SITE_RENTALS_URL}>Crown Rentals</a>.
              </p>
              <p className="about-body">
                Shop: {SITE_ADDRESS}. Serving {SITE_SERVICE_AREA}.
              </p>
              <p className="about-body">
                <a href={SITE_PHONE_TEL}>{SITE_PHONE_DISPLAY}</a>
                {' · '}
                <a href={SITE_MAP_LINK} target="_blank" rel="noreferrer">Map</a>
              </p>
            </div>
            <div className="about-card reveal active">
              <div className="about-card-copy">
                <label className="form-field">
                  <span>You talk to Neal</span>
                  <p>The estimate comes from the person who walks the site. No office handoff and no number that changes after the bid.</p>
                </label>
                <label className="form-field">
                  <span>The ground decides the price</span>
                  <p>Slope, access, and what is already in the way are part of the number. Send photos if you want a first look before a site visit.</p>
                </label>
                <label className="form-field">
                  <span>The site gets left workable</span>
                  <p>Forms, spoil, and trash come off the pad so the next trade is not cleaning up before they can start.</p>
                </label>
                <Link href="/contact" className="inline-block rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">
                  Request a quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
