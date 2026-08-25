import { motion } from 'framer-motion';
import { SKILL_MODULES } from '../data/resume';
import { SectionHeading } from './ui/SectionHeading';

// Daily drivers get the accent tag treatment
const PRIMARY_SKILLS = new Set(['React.js', 'TypeScript', 'Claude Code', 'Cursor']);

export function Skills() {
  return (
    <section id="skills" className="py-28 relative" style={{ background: 'var(--paper-warm)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="03"
          kicker="Capabilities"
          title={
            <>
              The <em className="serif-italic" style={{ color: 'var(--accent)' }}>stack</em>.
            </>
          }
          subtitle="No invented proficiency percentages — just the tools I actually ship with."
        />

        <div>
          {SKILL_MODULES.map((mod, idx) => (
            <motion.div
              key={mod.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t py-8 md:py-9"
              style={{ borderColor: 'var(--line)' }}
            >
              <span className="md:col-span-1 font-mono text-xs pt-1.5" style={{ color: 'var(--ink-mute)' }}>
                {String(idx + 1).padStart(2, '0')}
              </span>

              <div className="md:col-span-4">
                <h3
                  className="font-display font-medium text-2xl md:text-[1.65rem] tracking-tight"
                  style={{ color: 'var(--ink)' }}
                >
                  {mod.title}
                </h3>
                {mod.featured && (
                  <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: 'var(--ink-soft)' }}>
                    LLM tooling wired into every stage of the workflow — scaffolding, testing,
                    documentation, debugging. Not a shortcut; the operating layer.
                  </p>
                )}
              </div>

              <div className="md:col-span-7 flex flex-wrap gap-2 content-start">
                {mod.skills.map((skill) => (
                  <span
                    key={skill}
                    className={PRIMARY_SKILLS.has(skill) ? 'tag tag--accent' : 'tag'}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
