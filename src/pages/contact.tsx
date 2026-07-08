import Head from 'next/head'
import type { FormEvent } from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const service = String(formData.get('service') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Quote Request - ${name || 'Website Visitor'}`)
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Service Needed: ${service}`,
        '',
        'Message:',
        message,
      ].join('\n')
    )

    window.location.href = `mailto:crownconstrustion@gmail.com?subject=${subject}&body=${body}`
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
        <title>Contact — Crown Construction</title>
      </Head>
      <Header />
      <section className="contact-forest-wrap">
        <div className="contact-shell">
          <div className="contact-info reveal">
            <h1 className="contact-heading">Request a Quote</h1>
            <p className="contact-subhead">Call or send the form details to start a conversation about scope, schedule, access, and any equipment needs tied to the job.</p>
            <p className="contact-detail"><a href="tel:4065954472">406-595-4472</a></p>
            <p className="contact-detail"><a href="mailto:crownconstrustion@gmail.com">crownconstrustion@gmail.com</a></p>
          </div>
          <form className="contact-form reveal" onSubmit={handleQuoteSubmit}>
            <label className="form-field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label className="form-field">
              <span>Phone</span>
              <input type="tel" name="phone" placeholder="Your phone number" required />
            </label>
            <label className="form-field">
              <span>Service Needed</span>
              <input type="text" name="service" placeholder="e.g. Site Prep, Cleanup, Exterior Repair" required />
            </label>
            <label className="form-field">
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="Describe the project, timeline, and access conditions..." required></textarea>
            </label>
            <button type="submit" className="contact-submit">Send Quote Request</button>
            <p className="contact-note">Submitting opens your email app with this request pre-filled.</p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}
