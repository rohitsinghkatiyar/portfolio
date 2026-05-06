import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend Core',
    accent: '#63e2b7',
    icon: '⚛️',
    skills: [
      { name: 'React 18+', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Astro', level: 80 },
    ],
  },
  {
    title: 'State & Data',
    accent: '#b794f4',
    icon: '🔄',
    skills: [
      { name: 'Redux / RTK', level: 90 },
      { name: 'Zustand', level: 85 },
      { name: 'React Query', level: 88 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    title: 'UI & Motion',
    accent: '#ff6b9d',
    icon: '🎨',
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Radix UI', level: 80 },
      { name: 'D3 / Recharts', level: 72 },
    ],
  },
  {
    title: 'AI & DevOps',
    accent: '#ffb347',
    icon: '🤖',
    skills: [
      { name: 'Claude & Copilot', level: 90 },
      { name: 'Cursor IDE', level: 88 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'Vite / Webpack', level: 85 },
    ],
  },
];

function SkillBar({ name, level, accent, index }: { name: string; level: number; accent: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="flex flex-col gap-1.5"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" style={{ color: '#c4bfe8' }}>{name}</span>
        <span className="text-xs font-mono" style={{ color: accent }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.07 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: `linear-gradient(90deg, ${accent}aa, ${accent})` }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [gearSpin, setGearSpin] = useState(false);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(99,226,183,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label w-fit mb-4 block">
            <span style={{ color: '#63e2b7' }}>✦</span>
            Technical Arsenal
          </span>
          <div className="flex items-center gap-4">
            <h2
              className="font-display font-bold"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ecff' }}
            >
              The{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #63e2b7, #60c8f5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Stack.
              </span>
            </h2>
            {/* Easter egg gear */}
            <button
              title="Click me 👀"
              onClick={() => {
                setGearSpin(true);
                setTimeout(() => setGearSpin(false), 1200);
              }}
              className="text-3xl transition-transform focus:outline-none"
              style={{
                animation: gearSpin ? 'spin-slow 1.2s linear' : 'none',
                transformOrigin: 'center',
              }}
            >
              ⚙️
            </button>
          </div>
          <p className="mt-3 text-base max-w-xl" style={{ color: '#6e6e88' }}>
            Tools, frameworks, and patterns I wield daily. (And the occasional side project I swear I'll finish.)
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="relative rounded-2xl p-6 group transition-all duration-300"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = cat.accent + '40';
                el.style.boxShadow = `0 0 40px ${cat.accent}18`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.boxShadow = '';
              }}
            >
              {/* Left accent border */}
              <div
                className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: cat.accent }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-xl">{cat.icon}</span>
                <h3 className="font-display font-semibold text-base" style={{ color: '#f0ecff' }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    accent={cat.accent}
                    index={i}
                  />
                ))}
              </div>

              {/* Pulsing dot */}
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full"
                style={{
                  background: cat.accent,
                  animation: `pulseDot 2s ease-in-out ${catIdx * 0.3}s infinite`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
