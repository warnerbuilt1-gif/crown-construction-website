import Link from 'next/link'
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../config/site'

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar" aria-label="Quick contact">
      <a href={SITE_PHONE_TEL}>Call {SITE_PHONE_DISPLAY}</a>
      <Link href="/contact">Get a quote</Link>
    </div>
  )
}
