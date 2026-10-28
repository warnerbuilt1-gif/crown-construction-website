import Head from 'next/head'
import { useEffect, useState, type FormEvent } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SERVICES, SITE_ADDRESS, SITE_EMAIL, SITE_LEGAL_NAME, SITE_MAP_LINK, SITE_OWNER, SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_SERVICE_AREA } from '../config/site'

type QuoteFields = {
  name: string
  phone: string
  town: string
  service: string
  message: string
}

type QuoteErrors = Partial<Record<keyof QuoteFields, string>>

const emptyQuote: QuoteFields = { name: '', phone: '', town: '', service: '', message: '' }

function validateQuote(fields: QuoteFields): QuoteErrors {
  const errors: QuoteErrors = {}
  if (fields.name.trim().length < 2) errors.name = 'Enter your name.'
  if (fields.phone.replace(/\D/g, '').length < 10) errors.phone = 'Enter a phone number with at least 10 digits.'
  if (fields.town.trim().length < 2) errors.town = 'Enter the town.'
  if (!fields.service) errors.service = 'Choose the work.'
  if (fields.message.trim().length < 12) errors.message = 'Describe the lot and what you need built.'
  return errors
}

function quoteMailto(fields: QuoteFields) {
  const subject = encodeURIComponent(`Quote Request - ${fields.name.trim()}`)
  const body = encodeURIComponent(
    [`Name: ${fields.name.trim()}`, `Phone: ${fields.phone.trim()}`, `Town: ${fields.town.trim()}`, `Work: ${fields.service}`, '', 'Job:', fields.message.trim()].join('\n')
  )
  return `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`
}

export default function Contact(){
  const [fields, setFields] = useState<QuoteFields>(emptyQuote)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [mailto, setMailto] = useState('')

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
        <title>{`Request a Quote | ${SITE_LEGAL_NAME}`}</title>
        <meta name="description" content={`Call ${SITE_OWNER} at ${SITE_PHONE_DISPLAY} for a foundation, slab, or site-work estimate in Anaconda.`} />
      </Head>
      <Header />
      <main>
      <section className="contact-forest-wrap">
        <div className="contact-shell">
          <div className="contact-info reveal">
            <h1 className="contact-heading">Request a Quote</h1>
            <p className="contact-subhead">Call {SITE_OWNER} or send the lot, the work, and when you need it. A photo of the ground is enough to start.</p>
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
                <span>Town</span>
                <input type="text" name="town" value={fields.town} placeholder="Anaconda, Butte, Deer Lodge…" aria-invalid={Boolean(errors.town)} aria-describedby={errors.town ? 'town-error' : undefined} onChange={(event) => update('town', event.target.value)} />
                {errors.town ? <p id="town-error" className="field-error" role="alert">{errors.town}</p> : null}
              </label>
              <label className="form-field">
                <span>Work</span>
                <select name="service" value={fields.service} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? 'service-error' : undefined} onChange={(event) => update('service', event.target.value)}>
                  <option value="">What do you need built?</option>
                  {SERVICES.map((service) => (
                    <option key={service.title} value={service.title}>{service.title}</option>
                  ))}
                </select>
                {errors.service ? <p id="service-error" className="field-error" role="alert">{errors.service}</p> : null}
              </label>
              <label className="form-field">
                <span>The job</span>
                <textarea name="message" rows={5} value={fields.message} placeholder="Address or lot, what you want built, and when you need it." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} onChange={(event) => update('message', event.target.value)} />
                {errors.message ? <p id="message-error" className="field-error" role="alert">{errors.message}</p> : null}
              </label>
              <button type="submit" className="contact-submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Opening email…' : 'Send quote request'}
              </button>
              <p className="contact-note">Submitting opens your email app with this request filled in.</p>
            </form>
          )}
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
