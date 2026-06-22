import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[rgba(15,17,23,0.92)] backdrop-blur-xl shadow-[0_1px_0_var(--border)] py-3'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="font-mono text-[0.6rem] text-[#FFE5BF] tracking-wider opacity-60 italic leading-tight hidden sm:block max-w-[160px]">
            &ldquo;Data tells a story if you listen.&rdquo;
          </p>
        </div>

        <button
          className="md:hidden text-[var(--foreground)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={cn(
            'hidden md:flex items-center gap-8 list-none',
            menuOpen && 'flex md:hidden flex-col absolute top-full left-0 right-0 bg-[rgba(15,17,23,0.98)] backdrop-blur-xl p-6 pb-8 border-b border-[var(--border)]'
          )}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#FFE5BF] hover:text-[#FFE5BF] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
