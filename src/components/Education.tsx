import { motion } from 'framer-motion';
import { EDUCATION, CERTIFICATIONS } from '../data/resume';
import { SectionHeading } from './ui/SectionHeading';

export function Education() {
  return (
    <section id="education" className="py-28 relative" style={{ background: 'var(--paper-warm)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="06"
          kicker="Education"
          title={
            <>
              Formal{' '}
              <em className="serif-italic" style={{ color: 'var(--accent)' }}>credentials</em>.
            </>
          }
          subtitle="Including an ongoing executive program in the exact systems I ship with."
        />

        <div>
          {EDUCATION.map((edu, idx) => {
            const inProgress = edu.status === 'IN PROGRESS';
            return (
              <motion.div
                key={edu.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline border-t py-8 md:py-10"
                style={{ borderColor: 'var(--line)' }}
              >
                <span className="md:col-span-2 kicker">{edu.period}</span>
                <div className="md:col-span-7">
                  <h3
                    className="font-display font-medium text-2xl md:text-3xl tracking-tight leading-snug"
                    style={{ color: 'var(--ink)' }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="mt-2 text-base" style={{ color: 'var(--ink-soft)' }}>
                    {edu.institution}
                  </p>
                </div>
                <span className="md:col-span-3 md:justify-self-end">
                  <span className={inProgress ? 'tag tag--accent' : 'tag'}>
                    {inProgress ? 'In progress' : 'Complete'}
                  </span>
                </span>
              </motion.div>
            );
          })}

          {/* Certification */}
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline border-t py-8 md:py-10"
              style={{ borderColor: 'var(--line)' }}
            >
              <span className="md:col-span-2 kicker">Certification</span>
              <div className="md:col-span-7">
                <h3
                  className="font-display font-medium text-2xl md:text-3xl tracking-tight leading-snug"
                  style={{ color: 'var(--ink)' }}
                >
                  {cert.name} — {cert.issuer}
                </h3>
                <p className="mt-2 text-base" style={{ color: 'var(--ink-soft)' }}>
                  {cert.detail}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
