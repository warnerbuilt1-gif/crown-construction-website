import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_ESTABLISHED, SITE_LEGAL_NAME, SITE_OWNER_SHORT } from '../config/site'

export default function Hero() {
  return (
    <section className="hero-gradient hero-section py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="hero-copy-block flex-1">
          <motion.p initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} className="hero-kicker">
            {SITE_LEGAL_NAME} · Anaconda · Since {SITE_ESTABLISHED}
          </motion.p>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="hero-title leading-tight">
            Foundations and commercial work, built on schedule.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="hero-copy mt-4 max-w-xl">
            Neal Warner builds foundations, slabs, waterproofing, and site work for homeowners, builders, and public jobs across Anaconda, Butte, Deer Lodge, and Philipsburg. Licensed and insured. You get a straight price, a set start, and a site the next trade can use.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="hero-actions mt-6">
            <Link href="/contact" className="inline-block rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d] shadow-lg shadow-black/30">
              Get a consultation
            </Link>
            <Link href="/gallery" className="hero-action-secondary inline-block rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
              View our portfolio
            </Link>
          </motion.div>
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
        </div>
        <div className="hero-visual flex-1">
          <div className="hero-logo-panel">
            <Image
              src="/portfolio/foundation-layout-aerial.jpg"
              alt="Aerial view of a formed foundation layout on a graded lot"
              width={2048}
              height={1365}
              priority
              sizes="(max-width: 768px) 86vw, 680px"
              className="hero-logo"
            />
            <p className="hero-photo-caption">Foundation layout · Southwest Montana</p>
          </div>
        </div>
      </div>
    </section>
  )
}
