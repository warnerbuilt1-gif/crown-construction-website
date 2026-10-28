import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import MobileCallBar from '../components/MobileCallBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Crown Construction of Montana in Anaconda. Neal Warner builds foundations, slabs, flatwork, and site work. Call (406) 595-4472." />
        <link rel="icon" href="/crown-mark.svg" />
        <title>Crown Construction of Montana</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'GeneralContractor',
              name: 'Crown Construction of Montana',
              url: 'https://crownconstructionmt.com',
              telephone: '+1-406-595-4472',
              email: 'crownconstrustion@gmail.com',
              founder: 'Neal Warner',
              foundingDate: '2017',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '2121 Garfield St',
                addressLocality: 'Anaconda',
                addressRegion: 'MT',
                postalCode: '59711',
                addressCountry: 'US',
              },
              areaServed: ['Anaconda', 'Butte', 'Deer Lodge', 'Philipsburg'],
            }),
          }}
        />
      </Head>
      <Component {...pageProps} />
      <MobileCallBar />
    </>
  )
}
