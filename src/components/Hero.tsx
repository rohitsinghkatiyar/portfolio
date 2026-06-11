import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ROTATING_TAGS = [
  { label: 'React Engineer', color: '#63e2b7' },
  { label: 'Bike Enthusiast', color: '#ff6b9d' },
  { label: 'Shutter Nerd', color: '#b794f4' },
  { label: 'Music Addict', color: '#ffb347' },
  { label: 'Car Obsessive', color: '#60c8f5' },
];

const MARQUEE_ITEMS = [
  '⚡ REACT', '🏍️ BIKES', '📷 PHOTOGRAPHY', '🎵 MUSIC',
  '🚗 CARS', '🏭 MANUFACTURING', '⚡ TYPESCRIPT', '🤖 AI WORKFLOWS',
  '🚀 PERFORMANCE', '🏍️ BIKES', '📷 PHOTOGRAPHY', '🎵 MUSIC',
  '⚡ REACT', '🏍️ BIKES', '📷 PHOTOGRAPHY', '🎵 MUSIC',
  '🚗 CARS', '🏭 MANUFACTURING', '⚡ TYPESCRIPT', '🤖 AI WORKFLOWS',
  '🚀 PERFORMANCE', '🏍️ BIKES', '📷 PHOTOGRAPHY', '🎵 MUSIC',
];

// Floating interest icons
const FLOAT_ICONS = [
  { emoji: '🏍️', top: '20%', left: '8%',  delay: '0s',    duration: '6s',  size: 40 },
  { emoji: '📷', top: '65%', left: '5%',  delay: '1.5s',  duration: '7s',  size: 32 },
  { emoji: '🎵', top: '30%', right: '6%', delay: '0.8s',  duration: '5.5s',size: 36 },
  { emoji: '🚗', top: '70%', right: '8%', delay: '2s',    duration: '6.5s',size: 34 },
  { emoji: '🏭', top: '85%', left: '18%', delay: '1s',    duration: '8s',  size: 28 },
];

// Kinetic heading letters
function AnimatedLetter({ char, delay }: { char: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'inline-block', perspective: '400px' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}

function KineticText({ text, baseDelay = 0, className, style }: { text: string; baseDelay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <span className={className} style={{ display: 'inline-block', ...style }}>
      {text.split('').map((char, i) => (
        <AnimatedLetter key={i} char={char} delay={baseDelay + i * 0.04} />
      ))}
    </span>
  );
}

export function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % ROTATING_TAGS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const currentTag = ROTATING_TAGS[tagIndex];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(183,148,244,0.18) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(255,107,157,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-[50%] left-[45%] w-[350px] h-[350px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(99,226,183,0.10) 0%, transparent 70%)' }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Floating Icons */}
      {FLOAT_ICONS.map((icon, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex items-center justify-center pointer-events-none select-none"
          style={{
            top: icon.top,
            left: (icon as any).left,
            right: (icon as any).right,
            fontSize: icon.size,
            opacity: 0.18,
            animation: `float ${icon.duration} ease-in-out ${icon.delay} infinite`,
            filter: 'blur(0.5px)',
          }}
        >
          {icon.emoji}
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'backOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 font-mono text-xs font-medium tracking-widest uppercase"
          style={{
            background: 'rgba(28, 28, 40, 0.8)',
            border: '1px solid rgba(255, 179, 71, 0.3)',
            color: '#ffb347',
          }}
        >
          <span style={{ animation: 'pulseDot 2s infinite', display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#ffb347' }} />
          ⚡ Builds fast things. Literally.
        </motion.div>

        {/* Kinetic heading */}
        <h1
          className="font-display font-bold tracking-tight mb-3 leading-none"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
        >
          <KineticText text="I build" baseDelay={0.2} className="text-[#f0ecff]" />
          <br />
          <span>
            <KineticText
              text="fast "
              baseDelay={0.55}
              className="text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #ff6b9d, #b794f4, #63e2b7)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            />
            <KineticText text="things." baseDelay={0.8} className="text-[#f0ecff]" />
          </span>
        </h1>

        {/* Rotating tag */}
        <div className="h-10 flex items-center justify-center mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={tagIndex}
              initial={{ y: 30, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -30, opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-xl md:text-2xl"
              style={{ color: currentTag.color }}
            >
              {currentTag.label}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ color: '#6e6e88' }}
        >
          Senior Frontend Engineer obsessed with React, TypeScript & AI-powered workflows.
          Off-screen: riding bikes, chasing light, and losing myself in bass lines.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-12 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(183,148,244,0.4)]"
            style={{
              background: 'linear-gradient(135deg, #ff6b9d, #b794f4)',
              color: '#0d0d12',
            }}
          >
            Enter The Garage
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(28, 28, 40, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#c4bfe8',
            }}
          >
            Download CV
            <Download className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex items-center gap-5"
        >
          <a
            href="https://github.com/rohitsinghkatiyar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(28, 28, 40, 0.8)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: '#6e6e88',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f0ecff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6e6e88')}
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/rohitsinghkatiyar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(28, 28, 40, 0.8)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: '#6e6e88',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#60c8f5')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6e6e88')}
          >
            <LinkedinIcon />
          </a>
          <div className="w-px h-5" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <span className="text-xs font-mono" style={{ color: '#6e6e88' }}>Based in India 🇮🇳</span>
        </motion.div>
      </div>

      {/* Marquee Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 border-t"
        style={{
          background: 'rgba(21, 21, 30, 0.8)',
          borderColor: 'rgba(255,255,255,0.05)',
        }}
      >
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              className="text-xs font-mono font-medium px-5 shrink-0"
              style={{ color: '#6e6e88' }}
            >
              {item}
              <span className="mx-5 opacity-30">•</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
