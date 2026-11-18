import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from './Seo'
import { SERVICE_TOWNS, SITE_LEGAL_NAME, SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_URL } from '../config/site'

const audienceLinks = [
  { href: '/builders', label: 'Builders' },
  { href: '/commercial', label: 'Commercial' },
  { href: '/public-projects', label: 'Public projects' },
]

const townCopy: Record<string, { description: string; intro: string; winter: string }> = {
  Anaconda: {
    description:
      'ICF foundations in Anaconda, MT, where Crown Construction is based. Insulated concrete walls for builders, commercial, and public work through deep Southwest Montana winters.',
    intro:
      'Crown Construction builds ICF foundations in Anaconda, where the crew is based. The work is for builders, commercial projects, and public jobs.',
    winter:
      'Anaconda winters freeze the ground deep. The foundation is set below the local frost line and built for freeze-thaw. Butte, Deer Lodge, and Philipsburg are the nearby towns on the same list.',
  },
  Butte: {
    description:
      'ICF foundations in Butte, MT. Crown Construction pours insulated concrete walls for Butte’s long winters, working from the Anaconda yard.',
    intro:
      'Crown Construction builds ICF foundations in Butte from the Anaconda yard. The walls are for builders, commercial projects, and public jobs.',
    winter:
      'Butte’s winters are long and hard, and frost reaches below a shallow footing. The ICF wall is insulated in the pour and set for that frost. Anaconda is the next town over, with Deer Lodge and Philipsburg also nearby.',
  },
  'Deer Lodge': {
    description:
      'ICF foundations in Deer Lodge, MT. Crown Construction builds frost-ready insulated concrete walls from the Anaconda yard.',
    intro:
      'Crown Construction builds ICF foundations in Deer Lodge from the Anaconda yard. The walls are for builders, commercial projects, and public jobs.',
    winter:
      'Deer Lodge gets the same deep Montana frost as the rest of Southwest Montana. Footings and ICF walls are planned for the local frost line, not for a milder climate. Anaconda and Butte are the neighboring towns also covered.',
  },
  Philipsburg: {
    description:
      'ICF foundations in Philipsburg, MT. Crown Construction builds insulated concrete walls for mountain winters, from the Anaconda yard.',
    intro:
      'Crown Construction builds ICF foundations in Philipsburg from the Anaconda yard. The walls are for builders, commercial projects, and public jobs.',
    winter:
      'Philipsburg is a mountain town, and the winters push frost deep into the ground. The ICF foundation is built for that cold, with the wall insulated in the same pour. Anaconda is the home yard, with Deer Lodge and Butte on the same route.',
  },
}

type TownPageProps = {
  city: string
  path: string
  homeYard?: boolean
}

export default function TownPage({ city, path }: TownPageProps) {
  const copy = townCopy[city]
  const title = `ICF Foundations in ${city}, MT | Crown Construction`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_LEGAL_NAME,
    url: `${SITE_URL}${path}`,
    telephone: '+1-406-595-4472',
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: 'Montana',
      },
    },
  }

  return (
    <>
      <Seo title={title} description={copy.description} path={path} />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <p className="services-eyebrow">{SITE_LEGAL_NAME}</p>
        <h1 className="text-4xl font-semibold uppercase tracking-[0.04em]">ICF Foundations in {city}, MT</h1>
        <p className="mt-4 max-w-3xl text-lg">{copy.intro}</p>
        <p className="mt-4 max-w-3xl">{copy.winter}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact/#quote-form" className="inline-flex min-h-12 items-center rounded-full bg-wood px-6 py-3 font-semibold text-[#120f0d]">Get a consultation</Link>
          <a href={SITE_PHONE_TEL} className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 font-semibold">Call {SITE_PHONE_DISPLAY}</a>
        </div>
        <p className="mt-8">
          <Link href="/icf-foundations" className="text-wood underline">ICF foundations</Link>
        </p>
        <h2 className="mt-10 text-2xl">Who we serve</h2>
        <p className="mt-3">
          {audienceLinks.map((item, index) => (
            <span key={item.href}>
              <Link href={item.href} className="text-wood underline">{item.label}</Link>
              {index < audienceLinks.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
        <h2 className="mt-10 text-2xl">Areas We Serve</h2>
        <p className="mt-3">
          {SERVICE_TOWNS.map((town, index) => (
            <span key={town.slug}>
              {town.city === city ? (
                <span aria-current="page">{town.city}</span>
              ) : (
                <Link href={town.path} className="text-wood underline">{town.city}</Link>
              )}
              {index < SERVICE_TOWNS.length - 1 ? ' · ' : ''}
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
