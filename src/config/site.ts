export const SITE_NAME = 'Crown Construction'
export const SITE_LEGAL_NAME = 'Crown Construction of Montana'
export const SITE_SLOGAN = 'Built from the ground up.'
export const SITE_CREDENTIALS = [
  'Licensed & Insured',
  'Commercial Construction',
  'Government Bidding',
] as const
export const SITE_OWNER = 'Neal Warner'
export const SITE_OWNER_SHORT = 'Neal'
export const SITE_PHONE_DISPLAY = '(406) 595-4472'
export const SITE_PHONE_TEL = 'tel:4065954472'
export const SITE_EMAIL = 'crownconstrustion@gmail.com'
export const SITE_CITY = 'Anaconda'
export const SITE_ADDRESS = '2121 Garfield St, Anaconda, MT 59711'
export const SITE_ESTABLISHED = '2017'
export const SITE_SERVICE_AREA = 'Anaconda, Butte, Deer Lodge, Philipsburg, and nearby Southwest Montana'
export const SITE_URL = 'https://crownconstructionmt.com'
export const SITE_RENTALS_URL = 'https://crownrentalsmt.com'
export const SITE_MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=2121+Garfield+St+Anaconda+MT+59711'
export const SITE_DESCRIPTION =
  'Crown Construction of Montana in Anaconda. Neal Warner builds foundations, slabs, flatwork, waterproofing, and site work across Southwest Montana. Call (406) 595-4472 for a straight estimate.'

export const SERVICES = [
  {
    title: 'Foundations & footings',
    description:
      'Footings, formed walls, and rebar on residential sites, including mountain ground. The wall goes in square, the steel is where the plan calls for it, and the site stays workable for the next trade.',
  },
  {
    title: 'Slabs & flatwork',
    description:
      'Garage slabs, pads, and flatwork with clean edges. Tell us the pour date and we schedule the finish so the slab is not sitting open while the crew is somewhere else.',
  },
  {
    title: 'Waterproofing & drainage',
    description:
      'Perimeter waterproofing and drainage detail on foundation walls before backfill. The point is a dry basement, not a coating that disappears under the dirt.',
  },
  {
    title: 'Site prep & cleanup',
    description:
      'Clearing, grade support, debris haul-off, and end-of-job cleanup. The lot is left so the next crew, or you, can actually work it.',
  },
  {
    title: 'Retaining & grade work',
    description:
      'Cuts, backfill, and retaining layout on sloped Southwest Montana lots. We shape the ground so the foundation and the slab have somewhere solid to sit.',
  },
] as const

export const PROJECTS = [
  {
    id: 'hearst-library',
    title: 'Hearst Library plaza',
    town: 'Anaconda',
    copy: 'A finished plaza the library can open onto.',
    challenge: 'Public flatwork in front of an existing civic building. The pad had to meet the building and the plaza, not a blank lot.',
    approach: 'Neal walked the grade, formed the pad to the existing edges, and finished the flatwork in place.',
    result: 'A finished plaza surface the library could open onto.',
    image: '/portfolio/hearst-library-plaza.jpg',
    alt: 'Phoebe Apperson Hearst statue on the plaza in front of a brick library',
  },
  {
    id: 'retaining-wall',
    title: 'Retaining wall',
    town: 'Southwest Montana',
    copy: 'A wall the house and yard can sit against.',
    challenge: 'The grade dropped beside the house. The wall had to follow the curve and hold the yard.',
    approach: 'Layout along the slope, then a block wall with a poured cap.',
    result: 'A wall the house and yard can sit against.',
    image: '/portfolio/retaining-wall-curve.jpg',
    alt: 'Curved block retaining wall under construction along a house',
  },
  {
    id: 'patio-wall',
    title: 'Patio wall',
    town: 'Southwest Montana',
    copy: 'A usable patio with a finished wall.',
    challenge: 'The patio needed a finished edge, not an open cut beside the house.',
    approach: 'Stone wall with a poured cap, built to the house.',
    result: 'A usable patio with a finished wall.',
    image: '/portfolio/patio-stone-wall.jpg',
    alt: 'Finished curved stone retaining wall and concrete patio beside a house',
  },
] as const

export const SERVICE_TOWNS = [
  { slug: 'anaconda', city: 'Anaconda', path: '/foundations-anaconda-mt/' },
  { slug: 'butte', city: 'Butte', path: '/foundations-butte-mt/' },
  { slug: 'deer-lodge', city: 'Deer Lodge', path: '/foundations-deer-lodge-mt/' },
  { slug: 'philipsburg', city: 'Philipsburg', path: '/foundations-philipsburg-mt/' },
] as const
