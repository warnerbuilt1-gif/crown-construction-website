import Head from 'next/head'
import { useEffect, useState, type FormEvent } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SITE_ADDRESS, SITE_EMAIL, SITE_LEGAL_NAME, SITE_MAP_LINK, SITE_OWNER, SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_SERVICE_AREA } from '../config/site'

type QuoteFields = {
  name: string
  phone: string
  job: string
  town: string
}

type QuoteErrors = Partial<Record<'name' | 'phone' | 'job', string>>

const emptyQuote: QuoteFields = { name: '', phone: '', job: '', town: '' }

function validateQuote(fields: QuoteFields): QuoteErrors {
  const errors: QuoteErrors = {}
  if (fields.name.trim().length < 2) errors.name = 'Enter your name.'
  if (fields.phone.replace(/\D/g, '').length < 10) errors.phone = 'Enter a phone number with at least 10 digits.'
  if (fields.job.trim().length < 3) errors.job = 'Tell us what you need built.'
  return errors
}

function quoteMailto(fields: QuoteFields) {
  const subject = encodeURIComponent(`Consultation - ${fields.name.trim()}`)
  const body = encodeURIComponent(
    [`Name: ${fields.name.trim()}`, `Phone: ${fields.phone.trim()}`, `Town: ${fields.town.trim() || 'Not given'}`, '', 'Job:', fields.job.trim()].join('\n')
  )
  return `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`
}

export default function Contact(){
  const router = useRouter()
  const [fields, setFields] = useState<QuoteFields>(emptyQuote)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [mailto, setMailto] = useState('')

  useEffect(() => {
    const job = typeof router.query.job === 'string' ? router.query.job : ''
    if (job) setFields((current) => ({ ...current, job: current.job || `A job like ${job}` }))
  }, [router.query.job])

  const update = (key: keyof QuoteFields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateQuote(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    const href = quoteMailto(fields)
    setMailto(href)
    setStatus('submitting')
    window.setTimeout(() => {
      window.location.href = href
      setStatus('success')
    }, 250)
  }

  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    if (!items.length) return
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>{`Get a Consultation | ${SITE_LEGAL_NAME}`}</title>
        <meta name="description" content={`Call ${SITE_OWNER} at ${SITE_PHONE_DISPLAY} for a foundation or commercial estimate in Anaconda.`} />
      </Head>
      <Header />
      <main>
      <section className="contact-forest-wrap">
        <div className="contact-shell">
          <div className="contact-info reveal">
            <h1 className="contact-heading">Get a consultation</h1>
            <p className="contact-subhead">Call {SITE_OWNER} first, or leave your name and what you need built. Neal calls you back. Estimates are free.</p>
            <p className="contact-detail"><a href={SITE_PHONE_TEL}>{SITE_PHONE_DISPLAY}</a></p>
            <p className="contact-detail"><a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></p>
            <p className="contact-detail">{SITE_ADDRESS}</p>
            <p className="contact-detail">Serving {SITE_SERVICE_AREA}.</p>
            <p className="contact-detail"><a href={SITE_MAP_LINK} target="_blank" rel="noreferrer">Open 2121 Garfield St in Maps</a></p>
          </div>
          {status === 'success' ? (
            <div className="form-success" role="status">
              <h2>Quote request ready</h2>
              <p>Your email app should be open with the job filled in. If it did not open, use the link below.</p>
              <a href={mailto}>Open the email</a>
              <button type="button" className="contact-submit" onClick={() => setStatus('idle')}>Write another request</button>
            </div>
          ) : (
            <form className="contact-form reveal" onSubmit={handleQuoteSubmit} noValidate>
              <label className="form-field">
                <span>Name</span>
                <input type="text" name="name" value={fields.name} placeholder="Your full name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} onChange={(event) => update('name', event.target.value)} />
                {errors.name ? <p id="name-error" className="field-error" role="alert">{errors.name}</p> : null}
              </label>
              <label className="form-field">
                <span>Phone</span>
                <input type="tel" name="phone" value={fields.phone} placeholder="Your phone number" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} onChange={(event) => update('phone', event.target.value)} />
                {errors.phone ? <p id="phone-error" className="field-error" role="alert">{errors.phone}</p> : null}
              </label>
              <label className="form-field">
                <span>What do you need built?</span>
                <textarea name="job" rows={4} value={fields.job} placeholder="Foundation, slab, commercial pad, or the lot you have." aria-invalid={Boolean(errors.job)} aria-describedby={errors.job ? 'job-error' : undefined} onChange={(event) => update('job', event.target.value)} />
                {errors.job ? <p id="job-error" className="field-error" role="alert">{errors.job}</p> : null}
              </label>
              <label className="form-field">
                <span>Town, if you have it</span>
                <input type="text" name="town" value={fields.town} placeholder="Anaconda, Butte, Deer Lodge, Philipsburg" onChange={(event) => update('town', event.target.value)} />
              </label>
              <button type="submit" className="contact-submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Opening email…' : 'Get a consultation'}
              </button>
              <p className="contact-note">Neal calls you back. No account. Estimates are free.</p>
            </form>
          )}
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
