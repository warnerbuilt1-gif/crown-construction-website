import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SERVICE_TOWNS, SITE_ADDRESS, SITE_LEGAL_NAME, SITE_OWNER, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../config/site'

type TownPageProps = {
  city: string
  path: string
  homeYard?: boolean
}

export default function TownPage({ city, path, homeYard = false }: TownPageProps) {
  const title = `Foundations and commercial construction in ${city}, MT | Crown Construction`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Foundations, slabs, and commercial construction in ${city}, MT. Licensed and insured. Call ${SITE_PHONE_DISPLAY}.`} />
        <link rel="canonical" href={`https://crownconstructionmt.com${path}`} />
      </Head>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="services-eyebrow">{SITE_LEGAL_NAME}</p>
        <h1 className="text-4xl font-semibold uppercase tracking-[0.04em]">Foundations and commercial construction in {city}, MT</h1>
        <p className="mt-4 text-lg">
          {homeYard
            ? `${SITE_OWNER}'s crew is based at ${SITE_ADDRESS}. Foundations, slabs, waterproofing, and site work, plus commercial construction and government bidding. Licensed and insured.`
            : `Crown Construction works ${city} from the Anaconda yard. Same crew, same phone, same estimate: Neal walks the job before a price is set.`}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">Get a consultation</Link>
          <a href={SITE_PHONE_TEL} className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 font-semibold">Call {SITE_PHONE_DISPLAY}</a>
        </div>
        <h2 className="mt-10 text-2xl uppercase">Also serving</h2>
        <p className="mt-3">
          {SERVICE_TOWNS.filter((town) => town.city !== city).map((town, index, list) => (
            <span key={town.slug}>
              <Link href={town.path} className="text-wood underline">{town.city}</Link>
              {index < list.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
        <p className="mt-6">
          <Link href="/services" className="text-wood underline">Services</Link>
          {' · '}
          <Link href="/gallery" className="text-wood underline">Portfolio</Link>
        </p>
      </main>
      <Footer />
    </>
  )
}
