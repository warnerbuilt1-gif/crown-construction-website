import Link from 'next/link'
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

export default function Footer() {
  return (
    <footer className="mt-12 w-full border-t border-stone-700 bg-[#1F2226] text-stone-300">
      <div className="max-w-6xl mx-auto p-6 text-center text-sm">
        <p className="text-stone-100 font-semibold">{SITE_LEGAL_NAME}</p>
        <p className="mt-2">{SITE_ADDRESS}</p>
        <p className="mt-1">Serving {SITE_SERVICE_AREA}.</p>
        <nav className="mt-3" aria-label="Areas We Serve">
          <p className="text-stone-100 font-semibold">Areas We Serve</p>
          <p className="mt-1">
            {SERVICE_TOWNS.map((town, index) => (
              <span key={town.slug}>
                <Link href={town.path} className="font-semibold text-wood">{town.city}</Link>
                {index < SERVICE_TOWNS.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </nav>
        <div className="mt-2">
          Call: <a href={SITE_PHONE_TEL} className="font-semibold text-wood">{SITE_PHONE_DISPLAY}</a>
          {' · '}
          Email: <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-wood">{SITE_EMAIL}</a>
        </div>
        <div className="mt-2">
          <a href={SITE_MAP_LINK} className="font-semibold text-wood" target="_blank" rel="noreferrer">Open the map</a>
          {' · '}
          <a href={SITE_RENTALS_URL} className="font-semibold text-wood">Need the machine? Crown Rentals</a>
        </div>
        <div className="mt-3 text-[#8a7b72]">© {new Date().getFullYear()} {SITE_LEGAL_NAME}. Building in Anaconda since {SITE_ESTABLISHED}.</div>
      </div>
    </footer>
  )
}
