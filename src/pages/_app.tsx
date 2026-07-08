import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Crown Construction — construction, site prep, cleanup, and equipment-backed project support." />
        <link rel="icon" href="/crown-mark.svg" />
        <title>Crown Construction</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
