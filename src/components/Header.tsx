import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useId, useRef, useState } from 'react'
import { SITE_CREDENTIALS, SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_SLOGAN } from '../config/site'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
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

  const crumb = navItems.find((item) => item.href !== '/' && isActive(item.href))

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
    <header className="site-header w-full border-b border-stone-800 bg-[#0c0c0e] text-stone-100 shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
      <div className="max-w-6xl mx-auto p-3 sm:p-4">
        <div className="header-brand-row">
          <Link href="/" className="header-brand">
            <Image
              src="/crown-logo.jpg"
              alt="Crown Construction"
              width={840}
              height={632}
              priority
              className="header-logo"
            />
            <p className="header-slogan">{SITE_SLOGAN}</p>
          </Link>

          <div className="header-actions">
            <a
              href={SITE_PHONE_TEL}
              className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-wood px-3 py-2 text-xs sm:px-4 sm:text-sm font-semibold text-[#120f0d]"
            >
              Call {SITE_PHONE_DISPLAY}
            </a>
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

        <ul className="credential-lines">
          {SITE_CREDENTIALS.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <nav className="desktop-nav mt-3 flex flex-wrap gap-2" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`inline-flex rounded-full border px-3 py-2 text-sm font-medium ${
                isActive(item.href)
                  ? 'border-wood bg-wood text-[#120f0d]'
                  : 'border-stone-700 text-stone-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {open ? (
        <div className="mobile-nav-layer" ref={menuRef}>
          <nav id={menuId} className="mobile-nav" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={isActive(item.href) ? 'is-active' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a href={SITE_PHONE_TEL}>Call {SITE_PHONE_DISPLAY}</a>
          </nav>
        </div>
      ) : null}

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
