import Image from 'next/image'
import Link from 'next/link'
import { SITE_ESTABLISHED, SITE_LEGAL_NAME, SITE_OWNER_SHORT } from '../config/site'

const credentials = [
  { label: 'Credentials', value: 'Licensed and insured' },
  { label: 'Commercial', value: 'Commercial construction' },
  { label: 'Public work', value: 'Government bidding' },
  { label: 'Estimate', value: `Free walk with ${SITE_OWNER_SHORT}` },
]

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
          <h1 className="hero-title">
            Montana&apos;s ICF Foundation Specialists
          </h1>
          <p className="hero-copy">
            We build large-scale ICF foundations for builders, commercial and public projects across Anaconda, Butte and Southwest Montana.
          </p>
          <div className="hero-actions">
            <Link href="/contact/#quote-form" className="inline-block rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">
              Get a consultation
            </Link>
            <Link href="/gallery" className="hero-action-secondary inline-block rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
              View our portfolio
            </Link>
          </div>
        </div>
        <p className="hero-photo-caption">Foundation layout · Southwest Montana</p>
      </div>
      <ul className="hero-cred-strip">
        {credentials.map((item) => (
          <li key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
