import Head from 'next/head'
import { SITE_URL } from '../config/site'

const SHARE_IMAGE = `${SITE_URL}/portfolio/foundation-layout-aerial.webp`

type SeoProps = {
  title: string
  description: string
  path: string
}

export default function Seo({ title, description, path }: SeoProps) {
  const url = `${SITE_URL}${path}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={SHARE_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SHARE_IMAGE} />
    </Head>
  )
}
