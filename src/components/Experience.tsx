import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data/resume';
import { SectionHeading } from './ui/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="04"
          kicker="Experience"
          title={
            <>
              Where I've{' '}
              <em className="serif-italic" style={{ color: 'var(--accent)' }}>shipped</em>.
            </>
          }
          subtitle="Two roles, zero idle cycles. End-to-end feature ownership at every stop."
        />

        <div className="space-y-0">
          {EXPERIENCE.map((exp, idx) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t py-12 md:py-16"
              style={{ borderColor: 'var(--line-strong)' }}
            >
              {/* Left: company + meta */}
              <div className="md:col-span-4">
                <div className="kicker mb-4">{exp.period}</div>
                <h3
                  className="font-display font-medium tracking-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--ink)' }}
                >
                  {exp.company}
                </h3>
                <p className="mt-2 text-base font-medium" style={{ color: 'var(--accent)' }}>
                  {exp.role}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Right: product + achievements */}
              <div className="md:col-span-8">
                <p
                  className="font-display text-xl md:text-[1.35rem] leading-snug mb-8"
                  style={{ color: 'var(--ink)' }}
                >
                  {exp.product}
                </p>

                <ul className="space-y-4">
                  {exp.achievements.map((a, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-base leading-relaxed"
                      style={{ color: 'var(--ink-soft)' }}
                    >
                      <span
                        className="shrink-0 mt-3 w-5 h-px"
                        style={{ background: 'var(--accent)' }}
                        aria-hidden="true"
                      />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                {exp.footnote && (
                  <p className="mt-6 text-sm italic" style={{ color: 'var(--ink-mute)' }}>
                    {exp.footnote}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
          <div className="rule-strong" />
        </div>
      </div>
    </section>
  );
}
