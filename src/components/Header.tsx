import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header(){
  const router = useRouter()
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/'
    }
    return router.pathname.startsWith(href)
  }

  return (
    <header className="w-full border-b border-stone-800 bg-[#0c0c0e] text-stone-100 shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
      <div className="max-w-6xl mx-auto p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Image src="/crown-mark.svg" alt="Crown Construction mark" width={44} height={44} className="rounded-2xl" />
            <div className="min-w-0">
              <p className="text-base sm:text-lg font-bold uppercase tracking-[0.14em] truncate text-stone-100">Crown Construction</p>
              <p className="text-xs sm:text-sm text-stone-400 truncate">General Contracting & Site Services</p>
            </div>
          </div>

          <a
            href="tel:4065954472"
            className="hidden sm:inline-flex rounded-full bg-wood px-4 py-2 text-sm font-semibold text-[#120f0d] shadow-sm transition hover:opacity-90"
          >
            Call 406-595-4472
          </a>
        </div>

        <nav className="mt-3 flex flex-wrap gap-2" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`inline-flex rounded-full border px-3 py-2 text-sm font-medium transition ${
                isActive(item.href)
                  ? 'border-wood bg-wood text-[#120f0d]'
                  : 'border-stone-700 text-stone-200 hover:border-wood/60 hover:text-wood'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
