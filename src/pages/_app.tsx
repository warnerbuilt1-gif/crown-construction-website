import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import localFont from 'next/font/local'
import Script from 'next/script'
import MobileCallBar from '../components/MobileCallBar'

const sans = localFont({
  src: [
    { path: '../fonts/inter-400.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/inter-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/inter-600.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-sans',
  adjustFontFallback: 'Arial',
})

const serif = localFont({
  src: [
    { path: '../fonts/cormorant-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/cormorant-600.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/cormorant-700.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-serif',
  adjustFontFallback: 'Times New Roman',
})
import { GA4_ID, SITE_EMAIL, SITE_ESTABLISHED, SITE_NAME, SITE_OWNER, SITE_URL } from '../config/site'

const gaReady = GA4_ID !== '[GA4_ID_PLACEHOLDER]'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/crown-favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'GeneralContractor',
              name: SITE_NAME,
              url: SITE_URL,
              telephone: '+1-406-595-4472',
              email: SITE_EMAIL,
              founder: SITE_OWNER,
              foundingDate: SITE_ESTABLISHED,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '2121 Garfield St',
                addressLocality: 'Anaconda',
                addressRegion: 'MT',
                postalCode: '59711',
                addressCountry: 'US',
              },
              areaServed: ['Anaconda', 'Butte', 'Southwest Montana'],
            }),
          }}
        />
      </Head>
      {gaReady ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');
            `}
          </Script>
        </>
      ) : null}
      <div className={`${sans.variable} ${serif.variable} ${sans.className}`}>
        <Component {...pageProps} />
        <MobileCallBar />
      </div>
    </>
  )
}
