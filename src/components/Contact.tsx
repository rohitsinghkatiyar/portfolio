import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { SOCIALS } from '../data/resume';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const socials = [
  { label: 'GitHub', href: SOCIALS.github, icon: <GithubIcon /> },
  { label: 'LinkedIn', href: SOCIALS.linkedin, icon: <LinkedinIcon /> },
  { label: 'Email', href: `mailto:${SOCIALS.email}`, icon: <Mail className="w-[18px] h-[18px]" /> },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="pt-32 pb-24 relative overflow-hidden"
      style={{ background: 'var(--ink-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Kicker */}
          <div
            className="flex items-baseline justify-between gap-4 border-t pt-5 mb-14"
            style={{ borderColor: 'var(--ink-line)' }}
          >
            <span className="kicker" style={{ color: 'var(--ink-fg-mute)' }}>Contact</span>
            <span className="kicker" style={{ color: 'var(--ink-fg-mute)' }}>IN — UTC+5:30</span>
          </div>

          {/* Headline */}
          <h2
            className="font-display font-medium tracking-tight mb-8"
            style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', lineHeight: 1, color: 'var(--ink-fg)' }}
          >
            Let's make{' '}
            <em className="serif-italic" style={{ color: 'var(--accent)' }}>something</em>.
          </h2>

          <p
            className="text-base md:text-lg max-w-xl leading-relaxed mb-14"
            style={{ color: 'var(--ink-fg-soft)' }}
          >
            Whether it's a collab, a full-time role, a wild project idea, or just to talk
            bikes and music — the inbox is open.
          </p>

          {/* Giant email link */}
          <a
            href={`mailto:${SOCIALS.email}`}
            className="group inline-flex items-center gap-4 border-b pb-3 transition-colors duration-300"
            style={{ borderColor: 'var(--ink-line)', color: 'var(--ink-fg)' }}
          >
            <span
              className="font-display tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] break-all"
              style={{ fontSize: 'clamp(1.3rem, 4vw, 2.8rem)' }}
            >
              {SOCIALS.email}
            </span>
            <ArrowUpRight
              className="w-7 h-7 md:w-10 md:h-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: 'var(--accent)' }}
            />
          </a>

          {/* Socials */}
          <div className="flex flex-wrap items-center gap-4 mt-16">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border font-mono text-[0.7rem] tracking-[0.14em] uppercase transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: 'var(--ink-line)', color: 'var(--ink-fg-soft)' }}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="py-8"
      style={{ background: 'var(--ink-bg)', borderTop: '1px solid var(--ink-line)' }}
    >
      <div
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[0.68rem] tracking-[0.14em] uppercase"
        style={{ color: 'var(--ink-fg-mute)' }}
      >
        <p>© {new Date().getFullYear()} Rohit Singh Katiyar</p>
        <p>Built with Astro 6 + React 19</p>
        <p>
          Indore, India <span style={{ color: 'var(--accent)' }}>✦</span> 22.71°N 75.85°E
        </p>
      </div>
    </footer>
  );
}
