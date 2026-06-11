import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/rohitsinghkatiyar',
    icon: <GithubIcon />,
    accent: '#f0ecff',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rohitsinghkatiyar',
    icon: <LinkedinIcon />,
    accent: '#60c8f5',
  },
  {
    label: 'Email',
    href: 'mailto:hello@rohitsinghkatiyar.com',
    icon: <Mail className="w-5 h-5" />,
    accent: '#ff6b9d',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(255,107,157,0.08) 0%, rgba(183,148,244,0.08) 60%, transparent 100%)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <span className="section-label w-fit mx-auto mb-8 block">
            <span style={{ color: '#ff6b9d' }}>✦</span>
            Open to Opportunities
          </span>

          {/* Headline */}
          <h2
            className="font-display font-bold mb-6 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#f0ecff' }}
          >
            Send a{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff6b9d, #b794f4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Signal.
            </span>
            <span className="block text-xl md:text-2xl font-medium mt-3" style={{ color: '#6e6e88' }}>
              📡 I'm listening.
            </span>
          </h2>

          <p className="text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: '#6e6e88' }}>
            Like the vibe? Think we'd click? Hit me up. Whether it's a collab, a full-time role,
            a wild project idea, or just to talk bikes + EDM — inbox is open. 🏍️🎵
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:hello@rohitsinghkatiyar.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 mb-14"
            style={{
              background: 'linear-gradient(135deg, #ff6b9d, #b794f4)',
              color: '#0d0d12',
              boxShadow: '0 0 0 0 rgba(255,107,157,0)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(255,107,157,0.4)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 0 rgba(255,107,157,0)';
            }}
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          {/* Socials */}
          <div
            className="flex items-center justify-center gap-6 pt-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(28,28,40,0.8)', border: '1px solid rgba(255,255,255,0.07)', color: '#6e6e88' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.color = s.accent;
                    el.style.borderColor = s.accent + '40';
                    el.style.boxShadow = `0 0 20px ${s.accent}30`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.color = '#6e6e88';
                    el.style.borderColor = 'rgba(255,255,255,0.07)';
                    el.style.boxShadow = '';
                  }}
                >
                  {s.icon}
                </div>
                <span className="text-xs font-mono" style={{ color: '#6e6e88' }}>{s.label}</span>
              </a>
            ))}

            <div className="w-px h-10" style={{ background: 'rgba(255,255,255,0.06)' }} />

            <div className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(28,28,40,0.8)', border: '1px solid rgba(255,255,255,0.07)', color: '#6e6e88' }}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono" style={{ color: '#6e6e88' }}>India 🇮🇳</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(13,13,18,0.8)' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-mono" style={{ color: '#6e6e88' }}>
          © {new Date().getFullYear()} Rohit Singh Katiyar — Built with ⚡ Astro + React
        </p>
        <div className="flex items-center gap-3 text-xs font-mono" style={{ color: '#6e6e88' }}>
          <span>🏍️ Gixxer SF 250</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>•</span>
          <span>📷 Street & Night</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>•</span>
          <span>🎵 EDM / House</span>
        </div>
      </div>
    </footer>
  );
}
