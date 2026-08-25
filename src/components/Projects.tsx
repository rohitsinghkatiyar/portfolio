import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const ACCENT_CYCLE = ['#ff6b9d', '#b794f4', '#63e2b7', '#ffb347', '#60c8f5', '#ff6b9d', '#b794f4'];

const projects = [
  {
    title: 'CashTrac',
    flagship: true,
    description: 'Enterprise cost simulation platform for manufacturing — modelling complex production line costs with real-time recalculation logic. Built for scale.',
    tags: ['React 18', 'TypeScript', 'Vite', 'Zustand', 'Tailwind'],
    impact: 'Simulated $10M+ in cost reductions for manufacturing clients.',
    accent: '#ff6b9d',
  },
  {
    title: 'Porna Satya',
    description: 'E-commerce and content platform with SSR-first architecture and aggressive image optimization.',
    tags: ['Next.js', 'React', 'Node.js', 'GraphQL'],
    impact: '99 Lighthouse score. Bounce rate down 20%.',
    accent: '#b794f4',
  },
  {
    title: 'Aforro',
    description: 'B2B SaaS for supply chain & inventory management. Designed and built the entire frontend stack.',
    tags: ['React', 'Redux', 'Material UI'],
    impact: 'MVP shipped in 90 days. Ops efficiency up 30%.',
    accent: '#63e2b7',
  },
  {
    title: 'Milk Book',
    description: 'Mobile-first PWA for daily subscription management with offline support.',
    tags: ['React', 'PWA', 'Tailwind CSS'],
    impact: '10,000+ DAUs in first month.',
    accent: '#ffb347',
  },
  {
    title: 'Khele Kya',
    description: 'Sports matchmaking & venue booking platform with real-time availability and push notifications.',
    tags: ['React Native', 'Firebase', 'Node.js'],
    impact: '50,000+ bookings facilitated across local arenas.',
    accent: '#60c8f5',
  },
  {
    title: 'RX Camp',
    description: 'Healthcare dashboard for clinic staff — patient onboarding, records, and appointment management.',
    tags: ['React', 'TypeScript', 'React Query'],
    impact: 'Patient onboarding time cut by 50%.',
    accent: '#b794f4',
  },
  {
    title: 'FerroDeal',
    description: 'B2B steel and raw materials marketplace — handled bulk transactions with real-time pricing.',
    tags: ['React', 'Next.js', 'PostgreSQL'],
    impact: '$5M+ in monthly transaction volume.',
    accent: '#ff6b9d',
  },
];

export function Projects() {
  const flagship = projects.find(p => p.flagship);
  const rest = projects.filter(p => !p.flagship);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(183,148,244,0.07) 0%, transparent 70%)' }}
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
            <span style={{ color: '#b794f4' }}>✦</span>
            Selected Projects
          </span>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ecff' }}
          >
            The{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #b794f4, #60c8f5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Garage.
            </span>
          </h2>
          <p className="mt-3 text-base max-w-xl" style={{ color: '#6e6e88' }}>
            Enterprise apps, SaaS platforms, and high-performance interfaces. No to-do apps. Actual builds.
          </p>
        </motion.div>

        {/* Flagship Feature Card */}
        {flagship && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-6 rounded-2xl p-8 overflow-hidden group transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,157,0.06) 0%, rgba(183,148,244,0.06) 100%)',
              border: '1px solid rgba(255,107,157,0.2)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 60px rgba(255,107,157,0.2), 0 0 0 1px rgba(255,107,157,0.3)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '';
            }}
          >
            {/* Top glow line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, transparent, #ff6b9d, #b794f4, transparent)' }}
            />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display font-bold text-2xl" style={{ color: '#f0ecff' }}>
                    {flagship.title}
                  </h3>
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,107,157,0.15)', color: '#ff6b9d', border: '1px solid rgba(255,107,157,0.3)' }}
                  >
                    ★ Flagship
                  </span>
                </div>
                <p className="text-base leading-relaxed mb-4 max-w-2xl" style={{ color: '#6e6e88' }}>
                  {flagship.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {flagship.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg"
                      style={{ background: 'rgba(255,107,157,0.10)', color: '#ff6b9d', border: '1px solid rgba(255,107,157,0.2)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:text-right">
                <div
                  className="inline-block text-sm font-medium px-4 py-2 rounded-xl"
                  style={{ background: 'rgba(255,107,157,0.10)', color: '#ff6b9d', border: '1px solid rgba(255,107,157,0.2)' }}
                >
                  💥 {flagship.impact}
                </div>
              </div>
            </div>

            {/* Action links */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: '#6e6e88' }} onMouseEnter={e => (e.currentTarget.style.color = '#ff6b9d')} onMouseLeave={e => (e.currentTarget.style.color = '#6e6e88')}>
                <GithubIcon /> Code
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: '#6e6e88' }} onMouseEnter={e => (e.currentTarget.style.color = '#ff6b9d')} onMouseLeave={e => (e.currentTarget.style.color = '#6e6e88')}>
                <ExternalLink className="w-4 h-4" /> Live
              </a>
            </div>
          </motion.div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative rounded-2xl p-6 flex flex-col group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = project.accent + '35';
                el.style.boxShadow = `0 0 40px ${project.accent}12`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.boxShadow = '';
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-6 right-6 h-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
              />

              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-lg" style={{ color: '#f0ecff' }}>
                  {project.title}
                </h3>
                <div className="flex gap-2" style={{ color: '#6e6e88' }}>
                  <a href="#" className="p-1 transition-colors hover:text-[#f0ecff]"><GithubIcon /></a>
                  <a href="#" className="p-1 transition-colors hover:text-[#f0ecff]"><ExternalLink className="w-4 h-4" /></a>
                </div>
              </div>

              <p className="text-sm leading-relaxed flex-grow mb-5" style={{ color: '#6e6e88' }}>
                {project.description}
              </p>

              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg"
                      style={{ background: project.accent + '12', color: project.accent, border: `1px solid ${project.accent}25` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="pt-3 text-xs font-medium"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#6e6e88' }}
                >
                  <span style={{ color: project.accent }}>↗ </span>
                  {project.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
