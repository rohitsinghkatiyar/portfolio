import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SUMMARY, SOCIALS } from '../data/resume';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ROTATING_TAGS = [
  'React Engineer',
  'AI-Native Developer',
  'Performance Obsessive',
  'Night Photographer',
  'Two-Wheel Enthusiast',
];

const MARQUEE_TOKENS = [
  'React', 'TypeScript', 'React Native', 'AI Workflows',
  'Manufacturing Systems', 'Performance', 'Photography', 'Music',
];
const MARQUEE_ITEMS = [...MARQUEE_TOKENS, ...MARQUEE_TOKENS, ...MARQUEE_TOKENS];

// Masked line reveal for the masthead
function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <span className="block">{children}</span>;
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Rotating circular "open to work" badge
function CircularBadge() {
  return (
    <a
      href="#contact"
      aria-label="Open to work — get in touch"
      className="hidden lg:flex absolute right-[7%] top-[26%] w-36 h-36 items-center justify-center group"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '7.6px',
            letterSpacing: '0.3em',
            fill: 'var(--ink-soft)',
          }}
        >
          <textPath href="#badge-circle">
            OPEN TO WORK · COLLABS · SAY HELLO ·
          </textPath>
        </text>
      </svg>
      <ArrowDownRight
        className="absolute w-6 h-6 transition-transform duration-300 group-hover:rotate-45"
        style={{ color: 'var(--accent)' }}
      />
    </a>
  );
}

export function Hero() {
  const [tagIndex, setTagIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % ROTATING_TAGS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-24 left-0 right-0"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <span className="kicker flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            {SUMMARY.role}
          </span>
          <span className="kicker hidden sm:block">
            {SUMMARY.location} — {SUMMARY.coordinates}
          </span>
        </div>
      </motion.div>

      <CircularBadge />

      {/* Masthead */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-44 pb-10">
        <h1
          className="font-display font-medium tracking-tight"
          style={{ fontSize: 'clamp(3.4rem, 11vw, 9.5rem)', lineHeight: 0.98, color: 'var(--ink)' }}
        >
          <RevealLine delay={0.15}>I build</RevealLine>
          <RevealLine delay={0.3}>
            <em className="serif-italic" style={{ color: 'var(--accent)' }}>fast</em>{' '}
            things.
          </RevealLine>
        </h1>

        {/* Sub row: rotating descriptor + summary */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="md:col-span-5"
          >
            <div className="kicker mb-3">Currently</div>
            <div className="h-9 overflow-hidden" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tagIndex}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display italic text-2xl md:text-[1.7rem]"
                  style={{ color: 'var(--ink)' }}
                >
                  {ROTATING_TAGS[tagIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="md:col-span-7 text-base md:text-lg leading-relaxed max-w-xl md:justify-self-end"
            style={{ color: 'var(--ink-soft)' }}
          >
            {SUMMARY.short}
          </motion.p>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <a href="#projects" className="btn-ink w-full sm:w-auto">
            View projects
            <ArrowDownRight className="h-4 w-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line w-full sm:w-auto"
          >
            Download CV
            <Download className="h-4 w-4" />
          </a>

          <div className="flex items-center gap-4 sm:ml-auto">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full border transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: 'var(--line)', color: 'var(--ink-soft)' }}
            >
              <GithubIcon />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full border transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: 'var(--line)', color: 'var(--ink-soft)' }}
            >
              <LinkedinIcon />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="border-t overflow-hidden py-4"
        style={{ borderColor: 'var(--line)' }}
      >
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              className="font-display italic text-lg px-6 shrink-0 whitespace-nowrap"
              style={{ color: 'var(--ink-mute)' }}
            >
              {item}
              <span className="ml-12 not-italic" style={{ color: 'var(--accent)' }}>✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
