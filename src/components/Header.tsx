import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../config/site'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/icf-foundations', label: 'ICF Foundations' },
  { href: '/gallery', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const audienceLinks = [
  { href: '/builders', label: 'Builders' },
  { href: '/commercial', label: 'Commercial' },
  { href: '/public-projects', label: 'Public projects' },
]

export default function Header() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  const crumb = [...navItems, ...audienceLinks].find((item) => item.href !== '/' && isActive(item.href))
  const audienceActive = audienceLinks.some((item) => isActive(item.href))

  useEffect(() => {
    setOpen(false)
  }, [router.pathname])

  useEffect(() => {
    if (!open) return
    const root = menuRef.current
    const focusable = root ? Array.from(root.querySelectorAll<HTMLElement>('a, button')) : []
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || focusable.length === 0) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="header-sticky">
        <div className="header-bar">
          <Link href="/" className="header-brand">
            <Image
              src="/crown-mark.svg"
              alt=""
              width={40}
              height={40}
              priority
              className="header-mark"
            />
            <span className="header-wordmark">Crown Construction</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Fragment key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
                {item.href === '/icf-foundations' ? (
                  <details className={`nav-dropdown${audienceActive ? ' is-active' : ''}`}>
                    <summary>
                      Who We Serve
                      <span aria-hidden="true"> ▾</span>
                    </summary>
                    <div className="nav-dropdown-panel">
                      {audienceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          aria-current={isActive(link.href) ? 'page' : undefined}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : null}
              </Fragment>
            ))}
          </nav>

          <div className="header-actions">
            <a href={SITE_PHONE_TEL} className="header-phone">
              {SITE_PHONE_DISPLAY}
            </a>
            <Link href="/contact/#quote-form" className="header-quote">
              Get a Quote
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {open ? (
          <div className="mobile-nav-layer" ref={menuRef}>
            <nav id={menuId} className="mobile-nav" aria-label="Mobile">
              {navItems.map((item) => (
                <Fragment key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={isActive(item.href) ? 'is-active' : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.href === '/icf-foundations' ? (
                    <>
                      <p className="mobile-nav-label">Who We Serve</p>
                      {audienceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          aria-current={isActive(link.href) ? 'page' : undefined}
                          className={isActive(link.href) ? 'is-active' : undefined}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </>
                  ) : null}
                </Fragment>
              ))}
              <a href={SITE_PHONE_TEL}>Call {SITE_PHONE_DISPLAY}</a>
            </nav>
          </div>
        ) : null}
      </div>

      {crumb ? (
        <nav className="crumb-bar" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">{crumb.label}</li>
          </ol>
        </nav>
      ) : null}
    </header>
  )
}
