import { motion } from 'framer-motion';

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  inverted?: boolean;
  align?: 'left' | 'center';
}

// Editorial section header: hairline rule, index number, oversized serif title.
export function SectionHeading({
  index,
  kicker,
  title,
  subtitle,
  inverted = false,
  align = 'left',
}: SectionHeadingProps) {
  const mute = inverted ? 'var(--ink-fg-mute)' : 'var(--ink-mute)';
  const fg = inverted ? 'var(--ink-fg)' : 'var(--ink)';
  const soft = inverted ? 'var(--ink-fg-soft)' : 'var(--ink-soft)';
  const line = inverted ? 'var(--ink-line)' : 'var(--line-strong)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      <div
        className={`flex items-baseline gap-4 border-t pt-5 ${align === 'center' ? 'justify-center' : 'justify-between'}`}
        style={{ borderColor: line }}
      >
        <span className="kicker" style={{ color: mute }}>
          {kicker}
        </span>
        <span className="font-mono text-xs" style={{ color: mute }}>
          ({index})
        </span>
      </div>
      <h2
        className="font-display font-medium mt-8 tracking-tight"
        style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.02, color: fg }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
          style={{ color: soft }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
