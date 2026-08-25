import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AI_TOOLS } from '../data/resume';
import { SectionHeading } from './ui/SectionHeading';

const TERMINAL_LINES = [
  { delay: 0,    text: '$ init ai_workflow --mode=agentic', accent: true },
  { delay: 0.6,  text: '> Connecting to Claude Code...', accent: false },
  { delay: 1.2,  text: '✓ Context loaded. 48k tokens.', accent: false },
  { delay: 1.8,  text: '> Running test coverage scan...', accent: false },
  { delay: 2.4,  text: '✓ 94% coverage. 0 regressions.', accent: false },
  { delay: 3.0,  text: '> Generating architecture docs...', accent: false },
  { delay: 3.6,  text: '✓ ADR-014 written. Ship it.', accent: true },
];

const WORKFLOWS = [
  {
    index: '01',
    title: 'Agentic code generation',
    description: 'Scaffold full features, implement complex logic, refactor legacy systems — with LLMs as the co-pilot.',
  },
  {
    index: '02',
    title: 'Test automation',
    description: 'Auto-generate unit tests, discover edge cases, keep coverage high without manual grunt work.',
  },
  {
    index: '03',
    title: 'Living documentation',
    description: 'Self-documenting codebases. ADRs and architecture decisions generated on the fly, never stale.',
  },
  {
    index: '04',
    title: 'Debug velocity',
    description: 'Trace analysis, error parsing, root-cause hunting — AI cuts debugging time to the bone.',
  },
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = TERMINAL_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay * 1000 + 800)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="rounded-xl overflow-hidden font-mono text-sm"
      style={{ background: 'var(--ink-bg-soft)', border: '1px solid var(--ink-line)' }}
    >
      {/* Terminal chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: '1px solid var(--ink-line)' }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--ink-fg-mute)' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--ink-fg-mute)', opacity: 0.6 }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--accent)' }} />
        <span className="ml-3 text-xs tracking-[0.1em]" style={{ color: 'var(--ink-fg-mute)' }}>
          ai_workflow.sh
        </span>
      </div>
      {/* Lines */}
      <div className="p-5 space-y-2 min-h-[190px]">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ color: line.accent ? 'var(--accent)' : 'var(--ink-fg-soft)' }}
          >
            {line.text}
          </motion.div>
        ))}
        {visibleLines < TERMINAL_LINES.length && (
          <span
            className="inline-block w-2 h-4 align-middle"
            style={{ background: 'var(--accent)', animation: 'blink-caret 0.9s step-end infinite' }}
          />
        )}
      </div>
    </div>
  );
}

export function AISection() {
  return (
    <section
      id="ai-workflows"
      className="py-28 relative"
      style={{ background: 'var(--ink-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="※"
          kicker="AI-native workflow"
          inverted
          title={
            <>
              LLMs as the{' '}
              <em className="serif-italic" style={{ color: 'var(--accent)' }}>operating layer</em>.
            </>
          }
          subtitle="Wired into every stage of the work — scaffolding, testing, documentation, debugging. Not a shortcut; the layer underneath it all."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Terminal + tools */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <TerminalCard />

            <div>
              <p className="kicker mb-4" style={{ color: 'var(--ink-fg-mute)' }}>Toolstack</p>
              <div className="flex flex-wrap gap-2">
                {AI_TOOLS.map((tool) => (
                  <span key={tool} className="tag tag--ink">{tool}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: workflow list */}
          <div>
            {WORKFLOWS.map((wf, idx) => (
              <motion.div
                key={wf.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="grid grid-cols-12 gap-4 border-t py-7"
                style={{ borderColor: 'var(--ink-line)' }}
              >
                <span className="col-span-2 sm:col-span-1 font-mono text-xs pt-1.5" style={{ color: 'var(--accent)' }}>
                  {wf.index}
                </span>
                <div className="col-span-10 sm:col-span-11">
                  <h3
                    className="font-display font-medium text-xl md:text-2xl tracking-tight mb-2"
                    style={{ color: 'var(--ink-fg)' }}
                  >
                    {wf.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--ink-fg-soft)' }}>
                    {wf.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid var(--ink-line)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
