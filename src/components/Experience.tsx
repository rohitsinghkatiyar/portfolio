import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Softude',
    role: 'Senior Frontend Engineer',
    duration: 'Recent',
    period: '2022 – Present',
    accent: '#ff6b9d',
    badge: '🏭 Manufacturing Tech',
    badgeColor: '#ff6b9d',
    achievements: [
      'Architected a cost simulation system for manufacturing production lines with complex recalculation logic — handling real factory cost models.',
      'Led React 16 → 18 migration and CRA → Vite move, dramatically slashing build times and shipping velocity.',
      'Integrated PDF and Excel generation pipelines for industrial reporting workflows.',
      'Maintained high-performance, enterprise-scale frontend across complex data-heavy dashboards.',
    ],
  },
  {
    company: 'TechRadix',
    role: 'Frontend Engineer',
    duration: 'Previous',
    period: '2020 – 2022',
    accent: '#63e2b7',
    badge: '🚀 SaaS',
    badgeColor: '#63e2b7',
    achievements: [
      'Built a full B2B SaaS platform from zero to MVP — shipped in under 90 days.',
      'Boosted developer efficiency 30% by architecting a unified in-house component library.',
      'Drove 40% uplift in user engagement through UX overhaul and performance optimization.',
      'Integrated an LLM-powered support chatbot, reducing ticket load significantly.',
      'Mentored junior engineers and established code review culture.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(255,107,157,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label w-fit mb-4 block">
            <span style={{ color: '#ff6b9d' }}>✦</span>
            Work History
          </span>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ecff' }}
          >
            Pit{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff6b9d, #ffb347)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Stops.
            </span>
          </h2>
          <p className="mt-3 text-base" style={{ color: '#6e6e88' }}>
            Every stop was a full-throttle sprint. No coasting.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, rgba(255,107,157,0.4), rgba(99,226,183,0.4))' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot (desktop) */}
                <div
                  className="hidden md:flex absolute left-[16px] top-6 w-5 h-5 rounded-full items-center justify-center ring-4 z-10"
                  style={{
                    background: exp.accent,
                    ringColor: '#0d0d12',
                    boxShadow: `0 0 16px ${exp.accent}55`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#0d0d12]" />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-7 group transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = exp.accent + '35';
                    el.style.boxShadow = `0 0 40px ${exp.accent}15`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(255,255,255,0.06)';
                    el.style.boxShadow = '';
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: exp.accent }}
                  />

                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="font-display font-bold text-xl" style={{ color: '#f0ecff' }}>
                          {exp.company}
                        </h3>
                        <span
                          className="text-xs font-mono px-2.5 py-1 rounded-full"
                          style={{
                            background: exp.accent + '15',
                            color: exp.accent,
                            border: `1px solid ${exp.accent}30`,
                          }}
                        >
                          {exp.badge}
                        </span>
                      </div>
                      <p className="font-medium" style={{ color: exp.accent }}>
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div
                        className="text-xs font-mono px-3 py-1 rounded-lg w-fit ml-auto"
                        style={{ background: 'rgba(255,255,255,0.04)', color: '#6e6e88' }}
                      >
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#6e6e88' }}>
                        <span
                          className="shrink-0 mt-0.5 font-mono font-bold text-xs"
                          style={{ color: exp.accent }}
                        >
                          →
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
