import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_ADDRESS, SITE_ESTABLISHED, SITE_LEGAL_NAME, SITE_MAP_LINK, SITE_OWNER_SHORT, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../config/site'

export default function Hero() {
  return (
    <section className="hero-gradient hero-section py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="hero-copy-block flex-1">
          <motion.p initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} className="hero-kicker">
            {SITE_LEGAL_NAME} · Since {SITE_ESTABLISHED}
          </motion.p>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="hero-title leading-tight">
            Foundations, slabs, and a clean site.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="hero-copy mt-4 max-w-xl">
            Footings, foundation walls, slabs, and the grade around them. {SITE_OWNER_SHORT} walks the job, prices it straight, and the crew leaves the ground ready for the next trade.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="hero-actions mt-6">
            <a href={SITE_PHONE_TEL} className="inline-block rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d] shadow-lg shadow-black/30">
              Call {SITE_PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="hero-action-secondary inline-block rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
              Request a quote
            </Link>
          </motion.div>
          <div className="hero-stat-grid mt-8">
            <div className="hero-stat-card">
              <span>Google listing</span>
              <strong><a href={SITE_MAP_LINK} className="underline decoration-white/30">{SITE_ADDRESS}</a></strong>
            </div>
            <div className="hero-stat-card">
              <span>Hours</span>
              <strong>Call anytime. {SITE_OWNER_SHORT} sets the walk.</strong>
            </div>
            <div className="hero-stat-card">
              <span>Estimate</span>
              <strong>Free. You talk to {SITE_OWNER_SHORT}.</strong>
            </div>
            <div className="hero-stat-card">
              <span>Work</span>
              <strong>Foundations, slabs, site work</strong>
            </div>
          </div>
        </div>
        <div className="hero-visual flex-1">
          <div className="hero-logo-panel">
            <Image
              src="/portfolio/foundation-wall-overview.jpg"
              alt="Foundation walls Crown Construction formed on a mountain lot"
              width={1600}
              height={1200}
              priority
              sizes="(max-width: 768px) 86vw, 680px"
              className="hero-logo"
            />
            <p className="hero-photo-caption">Mountain foundation · Southwest Montana</p>
          </div>
        </div>
      </div>
    </section>
  )
}
