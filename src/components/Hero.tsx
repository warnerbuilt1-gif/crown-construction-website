import Image from 'next/image'
import Link from 'next/link'
import { SITE_ESTABLISHED, SITE_LEGAL_NAME, SITE_OWNER_SHORT } from '../config/site'

export default function Hero() {
  return (
    <section className="hero-section">
      <Image
        src="/portfolio/foundation-layout-aerial.webp"
        alt="Aerial view of a formed foundation layout on a graded lot"
        fill
        priority
        sizes="100vw"
        className="hero-logo"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy-block">
          <p className="hero-kicker">
            {SITE_LEGAL_NAME} · Anaconda · Since {SITE_ESTABLISHED}
          </p>
          <h1 className="hero-title leading-tight">
            Montana&apos;s ICF Foundation Specialists
          </h1>
          <p className="hero-copy mt-4 max-w-xl">
            We build large-scale ICF foundations for builders, commercial and public projects across Anaconda, Butte and Southwest Montana.
          </p>
          <p className="hero-copy mt-4 max-w-xl">
            Neal Warner builds foundations, slabs, waterproofing, and site work for homeowners, builders, and public jobs across Anaconda, Butte, Deer Lodge, and Philipsburg. Licensed and insured. You get a straight price, a set start, and a site the next trade can use.
          </p>
          <div className="hero-actions mt-6">
            <Link href="/contact/#quote-form" className="inline-block rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">
              Get a consultation
            </Link>
            <Link href="/gallery" className="hero-action-secondary inline-block rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
              View our portfolio
            </Link>
          </div>
          <div className="hero-stat-grid mt-8">
            <div className="hero-stat-card">
              <span>Credentials</span>
              <strong>Licensed and insured</strong>
            </div>
            <div className="hero-stat-card">
              <span>Commercial</span>
              <strong>Commercial construction</strong>
            </div>
            <div className="hero-stat-card">
              <span>Public work</span>
              <strong>Government bidding</strong>
            </div>
            <div className="hero-stat-card">
              <span>Estimate</span>
              <strong>Free walk with {SITE_OWNER_SHORT}</strong>
            </div>
          </div>
          <p className="hero-photo-caption">Foundation layout · Southwest Montana</p>
        </div>
      </div>
    </section>
  )
}
