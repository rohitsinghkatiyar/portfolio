import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

const INTERESTS = [
  {
    id: 'riding',
    index: 'A',
    title: 'Motorcycling',
    detail: 'Suzuki Gixxer SF 250',
    body: 'A sport-faired 250 and an open road. Riding is where the obsession with precision started — it carries straight into the work.',
  },
  {
    id: 'photography',
    index: 'B',
    title: 'Photography',
    detail: 'Street · Travel · Night',
    body: 'Neon light on wet pavement, strangers mid-stride, empty highways at 2am. Finding geometry in chaos.',
  },
  {
    id: 'music',
    index: 'C',
    title: 'Music',
    detail: 'EDM · House · Pop',
    body: 'Fedagain, The Weeknd, deep house at 1am — the soundtrack to every late-night session.',
  },
  {
    id: 'cars',
    index: 'D',
    title: 'Cars',
    detail: 'Spec sheets & engineering',
    body: 'Every design decision — spoiler angle, gear ratio, cabin noise — is an engineering tradeoff. The overlap with building products is uncanny.',
  },
];

export function Interests() {
  return (
    <section id="interests" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="02"
          kicker="Off the clock"
          title={
            <>
              Beyond the{' '}
              <em className="serif-italic" style={{ color: 'var(--accent)' }}>editor</em>.
            </>
          }
        />

        <div>
          {INTERESTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline border-t py-8 md:py-10 transition-colors duration-300"
              style={{ borderColor: 'var(--line)' }}
            >
              <span
                className="md:col-span-1 font-mono text-xs"
                style={{ color: 'var(--ink-mute)' }}
              >
                ({item.index})
              </span>
              <h3
                className="md:col-span-4 font-display font-medium text-3xl md:text-4xl tracking-tight transition-transform duration-300 md:group-hover:translate-x-2"
                style={{ color: 'var(--ink)' }}
              >
                {item.title}
              </h3>
              <p
                className="md:col-span-4 text-base leading-relaxed"
                style={{ color: 'var(--ink-soft)' }}
              >
                {item.body}
              </p>
              <span
                className="md:col-span-3 md:text-right kicker transition-colors duration-300 group-hover:text-[var(--accent)]"
              >
                {item.detail}
              </span>
            </motion.div>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
