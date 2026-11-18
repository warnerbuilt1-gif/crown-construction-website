import { useEffect, useState, type FormEvent } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { SITE_ADDRESS, SITE_EMAIL, SITE_LEGAL_NAME, SITE_MAP_LINK, SITE_OWNER, SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_SERVICE_AREA } from '../config/site'

const PROJECT_TYPES = [
  'ICF Basement',
  'Frost/Stem Walls',
  'Retaining Wall',
  'Commercial Foundation',
  'Public Project',
  'Other',
] as const

type QuoteFields = {
  name: string
  phone: string
  email: string
  projectType: string
  town: string
  size: string
  startDate: string
  message: string
  company: string
}

type QuoteErrors = Partial<Record<'name' | 'phone' | 'email' | 'projectType' | 'town', string>>

const emptyQuote: QuoteFields = {
  name: '',
  phone: '',
  email: '',
  projectType: '',
  town: '',
  size: '',
  startDate: '',
  message: '',
  company: '',
}

function validateQuote(fields: QuoteFields): QuoteErrors {
  const errors: QuoteErrors = {}
  if (fields.name.trim().length < 2) errors.name = 'Enter your name.'
  if (fields.phone.replace(/\D/g, '').length < 10) errors.phone = 'Enter a phone number with at least 10 digits.'
  if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = 'Enter a valid email, or leave it blank.'
  }
  if (!PROJECT_TYPES.includes(fields.projectType as (typeof PROJECT_TYPES)[number])) {
    errors.projectType = 'Select a project type.'
  }
  if (fields.town.trim().length < 2) errors.town = 'Enter the project town.'
  return errors
}

function quoteMailto(fields: QuoteFields) {
  const subject = encodeURIComponent(`Quote - ${fields.projectType} - ${fields.name.trim()}`)
  const body = encodeURIComponent(
    [
      `Name: ${fields.name.trim()}`,
      `Phone: ${fields.phone.trim()}`,
      `Email: ${fields.email.trim() || 'Not given'}`,
      `Project type: ${fields.projectType}`,
      `Location: ${fields.town.trim()}`,
      `Approximate size: ${fields.size.trim() || 'Not given'}`,
      `Target start date: ${fields.startDate.trim() || 'Not given'}`,
      '',
      'Message:',
      fields.message.trim() || 'Not given',
    ].join('\n')
  )
  return `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`
}

export default function Contact() {
  const router = useRouter()
  const [fields, setFields] = useState<QuoteFields>(emptyQuote)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [mailto, setMailto] = useState('')

  useEffect(() => {
    const job = typeof router.query.job === 'string' ? router.query.job : ''
    if (job) setFields((current) => ({ ...current, message: current.message || `A job like ${job}` }))
  }, [router.query.job])

  const update = (key: keyof QuoteFields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }))
    if (key !== 'company') setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (fields.company.trim()) {
      setMailto('')
      setStatus('success')
      return
    }
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
      <Seo
        title={`Get a Consultation | ${SITE_LEGAL_NAME}`}
        description={`Call ${SITE_OWNER} at ${SITE_PHONE_DISPLAY} for a foundation or commercial estimate in Anaconda.`}
        path="/contact/"
      />
      <Header />
      <main>
      <section className="contact-forest-wrap">
        <div className="contact-shell">
          <div className="contact-info reveal">
            <h1 className="contact-heading">Get a consultation</h1>
            <p className="contact-subhead">Call {SITE_OWNER} first, or leave your name and what you need built. Neal calls you back. Estimates are free.</p>
            <div className="contact-reach">
              <a href={SITE_PHONE_TEL} className="contact-call">Call {SITE_PHONE_DISPLAY}</a>
              <a href={`mailto:${SITE_EMAIL}`} className="contact-mail">{SITE_EMAIL}</a>
            </div>
            <p className="contact-detail">{SITE_ADDRESS}</p>
            <p className="contact-detail">Serving {SITE_SERVICE_AREA}.</p>
            <p className="contact-detail"><a href={SITE_MAP_LINK} target="_blank" rel="noreferrer">Open 2121 Garfield St in Maps</a></p>
          </div>
          <div id="quote-form">
          {status === 'success' ? (
            <div className="form-success" role="status">
              <h2>Quote request ready</h2>
              <p>Your email app should be open with the job filled in. If it did not open, use the link below.</p>
              {mailto ? <a href={mailto}>Open the email</a> : null}
              <button type="button" className="contact-submit" onClick={() => setStatus('idle')}>Write another request</button>
            </div>
          ) : (
            <form className="contact-form reveal" onSubmit={handleQuoteSubmit} noValidate>
              <label className="form-honeypot" aria-hidden="true">
                <span>Company website</span>
                <input type="text" name="company" tabIndex={-1} autoComplete="off" value={fields.company} onChange={(event) => update('company', event.target.value)} />
              </label>
              <label className="form-field">
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" value={fields.name} placeholder="Your full name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} onChange={(event) => update('name', event.target.value)} />
                {errors.name ? <p id="name-error" className="field-error" role="alert">{errors.name}</p> : null}
              </label>
              <label className="form-field">
                <span>Phone</span>
                <input type="tel" name="phone" autoComplete="tel" inputMode="tel" value={fields.phone} placeholder="Your phone number" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} onChange={(event) => update('phone', event.target.value)} />
                {errors.phone ? <p id="phone-error" className="field-error" role="alert">{errors.phone}</p> : null}
              </label>
              <label className="form-field">
                <span>Email (optional)</span>
                <input type="email" name="email" autoComplete="email" inputMode="email" value={fields.email} placeholder="Your email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} onChange={(event) => update('email', event.target.value)} />
                {errors.email ? <p id="email-error" className="field-error" role="alert">{errors.email}</p> : null}
              </label>
              <label className="form-field">
                <span>Project type</span>
                <select name="projectType" value={fields.projectType} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? 'project-type-error' : undefined} onChange={(event) => update('projectType', event.target.value)}>
                  <option value="">Select a project type</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType ? <p id="project-type-error" className="field-error" role="alert">{errors.projectType}</p> : null}
              </label>
              <label className="form-field">
                <span>Project location (town)</span>
                <input type="text" name="town" autoComplete="address-level2" value={fields.town} placeholder="Anaconda, Butte, Deer Lodge, Philipsburg" aria-invalid={Boolean(errors.town)} aria-describedby={errors.town ? 'town-error' : undefined} onChange={(event) => update('town', event.target.value)} />
                {errors.town ? <p id="town-error" className="field-error" role="alert">{errors.town}</p> : null}
              </label>
              <label className="form-field">
                <span>Approximate size or square footage (optional)</span>
                <input type="text" name="size" value={fields.size} placeholder="Size, if you know it" onChange={(event) => update('size', event.target.value)} />
              </label>
              <label className="form-field">
                <span>Target start date (optional)</span>
                <input type="date" name="startDate" value={fields.startDate} onChange={(event) => update('startDate', event.target.value)} />
              </label>
              <label className="form-field">
                <span>Message (optional)</span>
                <textarea name="message" rows={4} value={fields.message} placeholder="Foundation, slab, commercial pad, or the lot you have." onChange={(event) => update('message', event.target.value)} />
              </label>
              <button type="submit" className="contact-submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Opening email…' : 'Get a consultation'}
              </button>
              <p className="contact-note">Neal calls you back. No account. Estimates are free.</p>
            </form>
          )}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
