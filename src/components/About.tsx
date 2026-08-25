import { motion } from 'framer-motion';

const BENTO_ITEMS = [
  {
    id: 'who',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    accent: '#b794f4',
    accentGlow: 'rgba(183,148,244,0.12)',
    content: (
      <div className="flex flex-col gap-5 h-full">
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-mono font-medium px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ background: 'rgba(183,148,244,0.12)', color: '#b794f4', border: '1px solid rgba(183,148,244,0.25)' }}
          >
            // who_am_i.tsx
          </span>
        </div>
        <h2
          className="font-display font-bold leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f0ecff' }}
        >
          Senior Frontend Engineer with a{' '}
          <span style={{ color: '#b794f4' }}>system</span> for everything.
        </h2>
        <div className="space-y-4 text-base leading-relaxed" style={{ color: '#6e6e88' }}>
          <p>
            4+ years building enterprise React apps, SaaS platforms, and manufacturing solutions.
            I treat code like a precision machine — every part exists for a reason.
          </p>
          <p>
            Specializing in{' '}
            <span style={{ color: '#63e2b7' }}>React</span>,{' '}
            <span style={{ color: '#60c8f5' }}>TypeScript</span>, and{' '}
            <span style={{ color: '#b794f4' }}>AI-assisted workflows</span>.
            I don't just write features — I architect experiences.
          </p>
          <p>
            Previously shipped cost simulation systems for manufacturing lines at Softude,
            and built a B2B SaaS MVP in under 90 days at TechRadix.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {['React 18+', 'TypeScript', 'Next.js', 'Astro', 'Vite', 'Redux'].map(skill => (
            <span
              key={skill}
              className="text-xs font-mono px-3 py-1 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#c4bfe8', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'bikes',
    accent: '#ff6b9d',
    accentGlow: 'rgba(255,107,157,0.10)',
    content: (
      <div className="flex flex-col gap-3 h-full">
        <div className="text-4xl" style={{ animation: 'float 5s ease-in-out infinite' }}>🏍️</div>
        <h3 className="font-display font-bold text-xl" style={{ color: '#ff6b9d' }}>Bikes</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#6e6e88' }}>
          I ride a Suzuki Gixxer SF 250. Faired, fast, surgical.
          The same obsession with performance that goes into cornering goes into my code.
        </p>
        <div
          className="mt-auto text-xs font-mono px-3 py-1.5 rounded-lg w-fit"
          style={{ background: 'rgba(255,107,157,0.10)', color: '#ff6b9d' }}
        >
          gixxer_sf_250.ride();
        </div>
      </div>
    ),
  },
  {
    id: 'photography',
    accent: '#b794f4',
    accentGlow: 'rgba(183,148,244,0.10)',
    content: (
      <div className="flex flex-col gap-3 h-full">
        <div className="text-4xl" style={{ animation: 'float 6s ease-in-out 0.5s infinite' }}>📷</div>
        <h3 className="font-display font-bold text-xl" style={{ color: '#b794f4' }}>Photography</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#6e6e88' }}>
          Street, travel & night. Finding geometry in chaos — neon reflections,
          empty roads at 2am, strangers mid-motion.
        </p>
        <div
          className="mt-auto text-xs font-mono px-3 py-1.5 rounded-lg w-fit"
          style={{ background: 'rgba(183,148,244,0.10)', color: '#b794f4' }}
        >
          shoot: street | night | travel
        </div>
      </div>
    ),
  },
  {
    id: 'music',
    accent: '#ffb347',
    accentGlow: 'rgba(255,179,71,0.10)',
    content: (
      <div className="flex flex-col gap-3 h-full">
        <div className="flex items-end gap-1 h-10 mb-1">
          {[4, 7, 5, 9, 6, 8, 4, 7].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full"
              style={{
                height: `${h * 4}px`,
                background: '#ffb347',
                opacity: 0.7,
                animation: `pulseDot ${0.8 + i * 0.15}s ease-in-out ${i * 0.1}s infinite alternate`,
              }}
            />
          ))}
        </div>
        <h3 className="font-display font-bold text-xl" style={{ color: '#ffb347' }}>Music</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#6e6e88' }}>
          EDM, House, Pop. Fedagain, The Weeknd.
          Drop kicks in between deployments. Bass lines are just waveforms with better UX.
        </p>
      </div>
    ),
  },
  {
    id: 'cars',
    accent: '#60c8f5',
    accentGlow: 'rgba(96,200,245,0.10)',
    content: (
      <div className="flex flex-col gap-3 h-full">
        <div className="text-4xl" style={{ animation: 'float 7s ease-in-out 1s infinite' }}>🚗</div>
        <h3 className="font-display font-bold text-xl" style={{ color: '#60c8f5' }}>Cars</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#6e6e88' }}>
          Precision machines. Every component engineered with intent.
          The obsession with performance carries from the garage to the IDE.
        </p>
      </div>
    ),
  },
  {
    id: 'manufacturing',
    accent: '#63e2b7',
    accentGlow: 'rgba(99,226,183,0.10)',
    content: (
      <div className="flex flex-col gap-3 h-full">
        <div className="text-4xl">🏭</div>
        <h3 className="font-display font-bold text-xl" style={{ color: '#63e2b7' }}>Manufacturing DNA</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#6e6e88' }}>
          Built frontend systems for production-line cost simulation at Softude.
          Manufacturing taught me that tolerances matter — in metal and in code.
        </p>
      </div>
    ),
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(183,148,244,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-4"
        >
          <span className="section-label w-fit">
            <span style={{ color: '#b794f4' }}>✦</span>
            About Me
          </span>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ecff' }}
          >
            Code, Craft &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff6b9d, #b794f4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Character.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {BENTO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`bento-card p-6 group cursor-default ${item.colSpan ?? ''} ${item.rowSpan ?? ''}`}
              style={{
                minHeight: item.id === 'who' ? '360px' : '200px',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = item.accent + '55';
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${item.accentGlow}, 0 0 0 1px ${item.accent}33`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-6 right-6 h-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
              />
              {item.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
