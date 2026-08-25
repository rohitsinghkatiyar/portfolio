import { motion } from 'framer-motion';
import { FLAGSHIP_PROJECT, PROJECTS } from '../data/resume';
import { SectionHeading } from './ui/SectionHeading';

export function Projects() {
  const flagship = FLAGSHIP_PROJECT;

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="05"
          kicker="Selected work"
          title={
            <>
              Things that{' '}
              <em className="serif-italic" style={{ color: 'var(--accent)' }}>shipped</em>.
            </>
          }
          subtitle="Enterprise apps, SaaS platforms, and high-performance interfaces. No to-do apps. Actual builds."
        />

        {/* Flagship feature */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 rounded-2xl p-8 md:p-12"
          style={{ background: 'var(--ink-bg)', color: 'var(--ink-fg)' }}
        >
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-8">
            <span className="kicker" style={{ color: 'var(--ink-fg-mute)' }}>
              Flagship — {flagship.domain}
            </span>
            <span className="tag tag--ink">{flagship.status}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <h3
                className="font-display font-medium tracking-tight"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', color: 'var(--ink-fg)' }}
              >
                {flagship.name}
              </h3>
              <p
                className="mt-4 font-mono text-xs tracking-[0.14em] uppercase leading-loose"
                style={{ color: 'var(--accent)' }}
              >
                {flagship.impact}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {flagship.tech.map((tag) => (
                  <span key={tag} className="tag tag--ink">{tag}</span>
                ))}
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'var(--ink-fg-soft)' }}>
                {flagship.description}
              </p>
              <ul className="space-y-3">
                {flagship.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-sm md:text-base leading-relaxed border-t pt-3"
                    style={{ color: 'var(--ink-fg-soft)', borderColor: 'var(--ink-line)' }}
                  >
                    <span className="font-mono text-xs mt-1 shrink-0" style={{ color: 'var(--accent)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              className="group border-t py-8 flex flex-col"
              style={{ borderColor: 'var(--line-strong)' }}
            >
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <h3
                  className="font-display font-medium text-2xl tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]"
                  style={{ color: 'var(--ink)' }}
                >
                  {project.name}
                </h3>
                <span className="font-mono text-[0.62rem] tracking-[0.14em] uppercase shrink-0" style={{ color: 'var(--ink-mute)' }}>
                  {project.status}
                </span>
              </div>
              <div className="kicker mb-4">{project.domain}</div>

              <p className="text-sm leading-relaxed flex-grow mb-6" style={{ color: 'var(--ink-soft)' }}>
                {project.description}
              </p>

              <div className="mt-auto space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {project.impact && (
                  <div className="font-mono text-[0.65rem] tracking-[0.12em] uppercase" style={{ color: 'var(--accent)' }}>
                    ↗ {project.impact}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
