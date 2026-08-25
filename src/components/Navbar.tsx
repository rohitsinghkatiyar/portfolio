import { cn } from '../utils/utils';
import { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { index: '01', label: 'About', href: '#about' },
  { index: '02', label: 'Interests', href: '#interests' },
  { index: '03', label: 'Skills', href: '#skills' },
  { index: '04', label: 'Experience', href: '#experience' },
  { index: '05', label: 'Projects', href: '#projects' },
  { index: '06', label: 'Education', href: '#education' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-[#faf6ef]/90 backdrop-blur-md border-b border-[rgba(23,20,16,0.12)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="/" className="group flex items-baseline gap-1.5">
          <span
            className="font-display font-semibold text-xl tracking-tight"
            style={{ color: 'var(--ink)' }}
          >
            Rohit
          </span>
          <span
            className="font-display italic text-xl transition-colors duration-300"
            style={{ color: 'var(--accent)' }}
          >
            S.K.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3.5 py-2 text-[0.82rem] font-medium transition-colors duration-200 group"
              style={{ color: 'var(--ink-soft)' }}
            >
              <sup className="font-mono text-[0.55rem] mr-0.5" style={{ color: 'var(--ink-mute)' }}>
                {link.index}
              </sup>
              {link.label}
              <span
                className="absolute bottom-1 left-3.5 right-3.5 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: 'var(--accent)' }}
              />
            </a>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full font-mono text-[0.68rem] tracking-[0.14em] font-semibold uppercase transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--ink)', color: 'var(--paper)' }}
          >
            Contact
          </a>

          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'var(--ink-soft)' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full-screen paper sheet */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 transition-all duration-500',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{ background: 'rgba(250, 246, 239, 0.98)', backdropFilter: 'blur(12px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'font-display text-4xl font-medium transition-all duration-300 py-3',
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
              style={{ color: 'var(--ink)', transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : '0ms' }}
            >
              <sup className="font-mono text-sm align-super mr-2" style={{ color: 'var(--accent)' }}>
                {link.index}
              </sup>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-ink mt-8"
            style={{ transitionDelay: isMobileMenuOpen ? '420ms' : '0ms' }}
          >
            Contact
          </a>
        </div>

        {/* Close button */}
        <button
          className="absolute top-6 right-6 p-2 transition-colors"
          style={{ color: 'var(--ink-soft)' }}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
