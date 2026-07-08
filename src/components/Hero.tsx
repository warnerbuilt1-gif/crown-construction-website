import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero(){
  return (
    <section className="hero-gradient hero-section py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="hero-copy-block flex-1">
          <motion.p initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} className="hero-kicker">
            Crown Construction
          </motion.p>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="hero-title leading-tight">
            Built to handle the hard work and leave the site clean.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="hero-copy mt-4 max-w-xl">
            Crown Construction combines small-project building, site prep, cleanup, and equipment-backed job support into one dependable crew. The brand direction follows the supplied Crown logo with a darker industrial look and cleaner construction-focused messaging.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="hero-actions mt-6">
            <Link href="/contact" className="inline-block rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d] shadow-lg shadow-black/30">
              Request a Quote
            </Link>
            <Link href="/services" className="hero-action-secondary inline-block rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
              Explore Services
            </Link>
          </motion.div>
          <div className="hero-stat-grid mt-8">
            <div className="hero-stat-card">
              <span>Scheduling</span>
              <strong>Responsive project support</strong>
            </div>
            <div className="hero-stat-card">
              <span>Job Type</span>
              <strong>Residential + light commercial</strong>
            </div>
            <div className="hero-stat-card">
              <span>Approach</span>
              <strong>Straight pricing and clean turnover</strong>
            </div>
            <div className="hero-stat-card">
              <span>Brand Direction</span>
              <strong>Copper, black, and equipment-forward</strong>
            </div>
          </div>
        </div>
        <div className="hero-visual flex-1">
          <div className="hero-logo-panel">
            <Image src="/crown-rentals-logo.png" alt="Crown logo artwork with crown and equipment" width={1500} height={1500} sizes="(max-width: 768px) 86vw, 680px" className="hero-logo" />
          </div>
        </div>
      </div>
    </section>
  )
}
