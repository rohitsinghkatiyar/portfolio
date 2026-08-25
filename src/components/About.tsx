import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

const CORE_CHIPS = ['React 18', 'React Native', 'TypeScript', 'Redux', 'Vite', 'Tailwind CSS'];

// All figures below come straight from the resume.
const STATS = [
  { value: '4+', label: 'Years of experience' },
  { value: '<90', label: 'Days to CashTrac MVP' },
  { value: '20+', label: 'Reusable components built' },
  { value: '+40%', label: 'Engagement from AI features' },
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="01"
          kicker="About"
          title={
            <>
              A <em className="serif-italic" style={{ color: 'var(--accent)' }}>system</em> for
              everything.
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: pull statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <p
              className="font-display text-2xl md:text-[1.8rem] leading-snug"
              style={{ color: 'var(--ink)' }}
            >
              Senior Frontend Engineer building enterprise React apps, SaaS platforms, and
              manufacturing solutions — with end-to-end ownership of every feature.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {CORE_CHIPS.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Right: body copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--ink-soft)' }}
          >
            <p>
              Four-plus years in, my work has ranged from fintech SaaS to enterprise
              manufacturing systems. I specialize in{' '}
              <span style={{ color: 'var(--ink)' }}>React</span>,{' '}
              <span style={{ color: 'var(--ink)' }}>TypeScript</span>, and{' '}
              <span style={{ color: 'var(--ink)' }}>AI-assisted workflows</span> — and I don't
              just write features, I own them end to end.
            </p>
            <p>
              Currently building cost simulation, reporting, and master-data modules for Cost It
              Right at Softude. Previously led CashTrac's frontend at TechRadix — MVP shipped in
              under 90 days.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="border-t pt-6 pb-8 pr-6"
              style={{ borderColor: 'var(--line-strong)' }}
            >
              <div
                className="font-display font-medium"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', color: 'var(--ink)' }}
              >
                {stat.value}
              </div>
              <div className="kicker mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
