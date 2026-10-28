import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SITE_LEGAL_NAME, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../config/site'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>{`Page not found | ${SITE_LEGAL_NAME}`}</title>
      </Head>
      <Header />
      <main className="contact-forest-wrap">
        <div className="max-w-xl mx-auto text-center">
          <p className="services-eyebrow">404</p>
          <h1 className="text-4xl text-white">That page is not on this site.</h1>
          <p className="mt-3 text-stone-200">The link may be old. The work, the gallery, and the quote form are still here.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-block rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">Home</Link>
            <Link href="/contact" className="inline-block rounded-full border border-white/30 px-6 py-3 font-semibold text-white">Request a quote</Link>
            <a href={SITE_PHONE_TEL} className="inline-block rounded-full border border-white/30 px-6 py-3 font-semibold text-white">Call {SITE_PHONE_DISPLAY}</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
