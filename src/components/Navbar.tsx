import { cn } from '../utils/utils';
import { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Vibes', href: '#vibes' },
  { label: 'Stack', href: '#skills' },
  { label: 'Journey', href: '#experience' },
  { label: 'Garage', href: '#projects' },
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
          ? 'bg-[#0d0d12]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-3 border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="/"
          className="relative group flex items-center gap-2"
        >
          <div className="relative">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm tracking-tighter"
              style={{
                background: 'linear-gradient(135deg, #ff6b9d, #b794f4)',
                color: '#0d0d12',
              }}
            >
              RSK
            </div>
          </div>
          <span
            className="font-display font-semibold text-lg tracking-tight text-[#f0ecff] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ff6b9d, #b794f4)',
              WebkitBackgroundClip: 'text',
            } as React.CSSProperties}
          >
            rohit<span style={{ color: 'var(--accent-lavender)' }}>.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-[#6e6e88] hover:text-[#f0ecff] transition-colors duration-200 group"
            >
              {link.label}
              <span
                className="absolute bottom-1 left-4 right-4 h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                style={{ background: 'linear-gradient(90deg, #ff6b9d, #b794f4)' }}
              />
            </a>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #ff6b9d22, #b794f422)',
              border: '1px solid rgba(255, 107, 157, 0.3)',
              color: '#ff6b9d',
            }}
          >
            Let's talk ✦
          </a>

          <button
            className="md:hidden p-2 rounded-lg text-[#6e6e88] hover:text-[#f0ecff] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full-screen slide in */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 transition-all duration-500',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{ background: 'rgba(13, 13, 18, 0.97)', backdropFilter: 'blur(24px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(183,148,244,0.08) 0%, transparent 70%)' }}
          />
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'text-4xl font-display font-bold text-[#f0ecff] hover:text-transparent transition-all duration-300 py-3',
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : '0ms',
                backgroundImage: 'linear-gradient(135deg, #ff6b9d, #b794f4)',
                WebkitBackgroundClip: 'text',
              } as React.CSSProperties}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #ff6b9d, #b794f4)',
              color: '#0d0d12',
              transitionDelay: isMobileMenuOpen ? '360ms' : '0ms',
            }}
          >
            Let's talk ✦
          </a>
        </div>

        {/* Close button */}
        <button
          className="absolute top-6 right-6 p-2 text-[#6e6e88] hover:text-[#f0ecff] transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
