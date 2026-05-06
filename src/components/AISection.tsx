import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TERMINAL_LINES = [
  { delay: 0,    text: '$ init ai_workflow --mode=agentic', color: '#63e2b7' },
  { delay: 0.6,  text: '> Connecting to Claude Code...', color: '#6e6e88' },
  { delay: 1.2,  text: '✓ Context loaded. 48k tokens.', color: '#63e2b7' },
  { delay: 1.8,  text: '> Running test coverage scan...', color: '#6e6e88' },
  { delay: 2.4,  text: '✓ 94% coverage. 0 regressions.', color: '#63e2b7' },
  { delay: 3.0,  text: '> Generating architecture docs...', color: '#6e6e88' },
  { delay: 3.6,  text: '✓ ADR-014 written. Ship it. 🚀', color: '#b794f4' },
];

const tools = [
  { name: 'Claude Code', icon: '🧠', accent: '#b794f4' },
  { name: 'Cursor IDE',  icon: '⚡', accent: '#ffb347' },
  { name: 'Copilot',     icon: '🤖', accent: '#60c8f5' },
  { name: 'Gemini CLI',  icon: '♊', accent: '#63e2b7' },
  { name: 'OpenAI',      icon: '🔮', accent: '#ff6b9d' },
];

const workflows = [
  {
    title: 'Agentic Code Gen',
    icon: '⚙️',
    accent: '#63e2b7',
    description: 'Scaffold full features, implement complex logic, refactor legacy systems — with LLMs as the co-pilot.',
  },
  {
    title: 'Test Automation',
    icon: '🛡️',
    accent: '#b794f4',
    description: 'Auto-generate unit tests, discover edge cases, keep coverage high without manual grunt work.',
  },
  {
    title: 'Living Docs',
    icon: '📄',
    accent: '#ffb347',
    description: 'Self-documenting codebases. ADRs and architecture decisions generated on the fly, never stale.',
  },
  {
    title: 'Debug Velocity',
    icon: '🐛',
    accent: '#ff6b9d',
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
      className="rounded-2xl overflow-hidden font-mono text-sm"
      style={{ background: '#0d0d12', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Terminal chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: '#ff6b9d' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#ffb347' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#63e2b7' }} />
        <span className="ml-3 text-xs" style={{ color: '#6e6e88' }}>ai_workflow.sh</span>
      </div>
      {/* Lines */}
      <div className="p-5 space-y-2 min-h-[180px]">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ color: line.color }}
          >
            {line.text}
          </motion.div>
        ))}
        {visibleLines < TERMINAL_LINES.length && (
          <span
            className="inline-block w-2 h-4 align-middle"
            style={{ background: '#63e2b7', animation: 'pulseDot 0.8s ease-in-out infinite' }}
          />
        )}
      </div>
    </div>
  );
}

export function AISection() {
  return (
    <section id="ai-workflows" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: 'var(--bg-surface)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(99,226,183,0.06) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="section-label w-fit mx-auto mb-4 block">
            <span style={{ color: '#63e2b7' }}>✦</span>
            AI-Assisted Dev
          </span>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ecff' }}
          >
            OS{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #63e2b7, #b794f4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Mode.
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#6e6e88' }}>
            I run LLMs the same way I run a Gixxer — full throttle, no unnecessary braking.
            AI isn't a shortcut. It's the operating system underneath the work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Terminal + Tools */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <TerminalCard />

            {/* Tool pills */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: '#6e6e88' }}>
                Toolstack
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      background: tool.accent + '12',
                      color: tool.accent,
                      border: `1px solid ${tool.accent}25`,
                    }}
                  >
                    <span>{tool.icon}</span>
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Workflow cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workflows.map((wf, idx) => (
              <motion.div
                key={wf.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl p-5 group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(13,13,18,0.8)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = wf.accent + '35';
                  el.style.boxShadow = `0 0 30px ${wf.accent}12`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'rgba(255,255,255,0.06)';
                  el.style.boxShadow = '';
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: wf.accent + '15', border: `1px solid ${wf.accent}25` }}
                >
                  {wf.icon}
                </div>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: '#f0ecff' }}>
                  {wf.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6e6e88' }}>
                  {wf.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
