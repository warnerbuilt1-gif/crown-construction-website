import Link from 'next/link'
import Image from 'next/image'
import {
  SERVICE_TOWNS,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_ESTABLISHED,
  SITE_LEGAL_NAME,
  SITE_MAP_LINK,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_RENTALS_URL,
  SITE_SERVICE_AREA,
} from '../config/site'

const pages = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/icf-foundations', label: 'ICF Foundations' },
  { href: '/gallery', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-brand">
          <Image src="/crown-mark.svg" alt="" width={36} height={36} className="site-footer-mark" />
          <div>
            <p className="footer-name">{SITE_LEGAL_NAME}</p>
            <p className="footer-line">Serving {SITE_SERVICE_AREA}.</p>
            <p className="footer-rentals">
              <a href={SITE_RENTALS_URL}>Need the machine? Crown Rentals</a>
            </p>
          </div>
        </div>

        <nav aria-label="Pages">
          <p className="footer-label">Pages</p>
          <ul className="footer-list">
            {pages.map((page) => (
              <li key={page.href}>
                <Link href={page.href}>{page.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Areas We Serve">
          <p className="footer-label">Areas We Serve</p>
          <ul className="footer-list">
            {SERVICE_TOWNS.map((town) => (
              <li key={town.slug}>
                <Link href={town.path}>{town.city}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="footer-label">Contact</p>
          <ul className="footer-list">
            <li>
              <a href={SITE_PHONE_TEL}>{SITE_PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
            </li>
            <li>{SITE_ADDRESS}</li>
            <li>
              <a href={SITE_MAP_LINK} target="_blank" rel="noreferrer">Open the map</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-footer-bar">
        © {new Date().getFullYear()} {SITE_LEGAL_NAME}. Building in Anaconda since {SITE_ESTABLISHED}.
      </div>
    </footer>
  )
}
