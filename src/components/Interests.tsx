import { motion } from 'framer-motion';

const INTERESTS = [
  {
    id: 'bikes',
    emoji: '🏍️',
    title: 'Suzuki Gixxer SF 250',
    subtitle: 'Faired. Fast. Surgical.',
    body: "There's no better way to understand performance than riding a sport-faired 250 on an open road. The Gixxer taught me that precision isn't optional — it's everything. The same philosophy lives in every line of code I write.",
    tag: 'gixxer_sf_250.ride();',
    accent: '#ff6b9d',
    glow: 'rgba(255,107,157,0.15)',
    bg: 'rgba(255,107,157,0.04)',
    detail: '250cc | Sport-faired | Always leaning',
    span: 'md:col-span-2',
  },
  {
    id: 'photography',
    emoji: '📷',
    title: 'Street & Night',
    subtitle: 'Finding frames in the dark.',
    body: "I shoot street, travel and night. Neon light on wet pavement, strangers mid-stride, empty highways at 2am. Photography is what happens when an engineer falls in love with chaos.",
    tag: 'mode: street | travel | night',
    accent: '#b794f4',
    glow: 'rgba(183,148,244,0.15)',
    bg: 'rgba(183,148,244,0.04)',
    detail: 'Golden hour? Nah. 2am > everything.',
    span: '',
  },
  {
    id: 'music',
    emoji: '🎵',
    title: 'EDM / House / Pop',
    subtitle: 'Drops harder than prod deployments.',
    body: "Fedagain, The Weeknd, deep house at 1am — this is the soundtrack to every late-night session. EDM structures code the same way: build-up, drop, release. Every great feature has a drop.",
    tag: 'now_playing: Fedagain 🔊',
    accent: '#ffb347',
    glow: 'rgba(255,179,71,0.15)',
    bg: 'rgba(255,179,71,0.04)',
    detail: 'BPM: 128 | Genre: House / EDM / Pop',
    span: '',
  },
  {
    id: 'cars',
    emoji: '🚗',
    title: 'Cars',
    subtitle: 'Obsessed with precision.',
    body: "Cars are software you can feel. Every design decision — spoiler angle, gear ratio, cabin noise — is an engineering tradeoff. Sound familiar? The overlap with building web products is uncanny.",
    tag: 'fuel: premium_octane',
    accent: '#60c8f5',
    glow: 'rgba(96,200,245,0.15)',
    bg: 'rgba(96,200,245,0.04)',
    detail: 'Spec sheets > spec docs. Maybe.',
    span: '',
  },
];

// Mini frequency bars for music card
function FreqBars({ color }: { color: string }) {
  const heights = [16, 28, 20, 36, 24, 32, 18, 28, 22, 30];
  return (
    <div className="flex items-end gap-1" style={{ height: '40px' }}>
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-1.5 rounded-full"
          style={{
            height: h,
            background: color,
            opacity: 0.7,
            animation: `pulseDot ${0.6 + i * 0.12}s ease-in-out ${i * 0.08}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

export function Interests() {
  return (
    <section id="vibes" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(255,107,157,0.07) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(255,179,71,0.07) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label w-fit mb-4 block">
            <span style={{ color: '#ff6b9d' }}>✦</span>
            Beyond The Screen
          </span>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ecff' }}
          >
            Not just code.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ffb347, #ff6b9d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A whole vibe.
            </span>
          </h2>
          <p className="mt-3 text-base max-w-xl" style={{ color: '#6e6e88' }}>
            Engineer by day, rider/photographer/music addict by night. The interests aren't hobbies — they're the operating system.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {INTERESTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl p-6 group cursor-default overflow-hidden transition-all duration-300 hover:-translate-y-1 ${item.span}`}
              style={{
                background: item.bg,
                border: `1px solid rgba(255,255,255,0.06)`,
                minHeight: item.id === 'bikes' ? '280px' : '240px',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = item.accent + '40';
                el.style.boxShadow = `0 0 50px ${item.glow}, 0 0 0 1px ${item.accent}22`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.boxShadow = '';
              }}
            >
              {/* Large faded emoji background */}
              <div
                className="absolute -right-4 -bottom-6 text-[7rem] select-none pointer-events-none"
                style={{ opacity: 0.06, filter: 'blur(2px)' }}
              >
                {item.emoji}
              </div>

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full gap-3">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <span className="text-3xl" style={{ filter: `drop-shadow(0 0 12px ${item.glow})` }}>
                    {item.emoji}
                  </span>
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-lg"
                    style={{ background: item.accent + '18', color: item.accent, border: `1px solid ${item.accent}30` }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Freq bars for music */}
                {item.id === 'music' && (
                  <FreqBars color={item.accent} />
                )}

                <h3
                  className="font-display font-bold text-xl mt-1"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </h3>
                <p className="text-sm font-medium" style={{ color: '#c4bfe8' }}>
                  {item.subtitle}
                </p>
                <p className="text-sm leading-relaxed flex-grow" style={{ color: '#6e6e88' }}>
                  {item.body}
                </p>

                {/* Detail */}
                <div
                  className="mt-auto pt-3 border-t text-xs font-mono"
                  style={{ borderColor: 'rgba(255,255,255,0.05)', color: '#6e6e88' }}
                >
                  {item.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
