import { motion } from 'framer-motion';
import pkg from 'lucide-react';
const { ExternalLink, Github } = pkg;

export function Projects() {
  const projects = [
    {
      title: 'CashTrac',
      flagship: true,
      description: 'An advanced cost simulation and financial tracking platform built for enterprise scale.',
      tags: ['React 18', 'TypeScript', 'Tailwind', 'Vite', 'Zustand'],
      impact: 'Simulated over $10M+ in cost reductions with complex recalculation logic.'
    },
    {
      title: 'Porna Satya',
      description: 'E-commerce and content platform with high-performance SSR and image optimization.',
      tags: ['Next.js', 'React', 'Node.js', 'GraphQL'],
      impact: 'Achieved 99 Lighthouse score and reduced bounce rate by 20%.'
    },
    {
      title: 'Aforro',
      description: 'B2B SaaS application tailored for supply chain and inventory management.',
      tags: ['React', 'Redux', 'Material UI'],
      impact: 'Built MVP in 90 days; improved operational efficiency by 30%.'
    },
    {
      title: 'Milk Book',
      description: 'Mobile-first progressive web app for daily subscription management.',
      tags: ['React', 'PWA', 'Tailwind CSS'],
      impact: 'Gained 10,000+ daily active users within the first month.'
    },
    {
      title: 'Khele Kya',
      description: 'Sports matchmaking and venue booking platform with real-time availability.',
      tags: ['React Native', 'Firebase', 'Node.js'],
      impact: 'Facilitated over 50,000 bookings in local arenas.'
    },
    {
      title: 'RX Camp',
      description: 'Healthcare management dashboard for doctors and clinic staff.',
      tags: ['React', 'TypeScript', 'React Query'],
      impact: 'Streamlined patient onboarding time by 50%.'
    },
    {
      title: 'FerroDeal',
      description: 'B2B marketplace for trading steel and raw materials.',
      tags: ['React', 'Next.js', 'PostgreSQL'],
      impact: 'Handled $5M+ in monthly transaction volume securely.'
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-muted/20">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Selected Projects
          </h2>
          <div className="w-20 h-1 bg-foreground mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            A showcase of enterprise applications, SaaS platforms, and high-performance interfaces I've built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card p-6 rounded-2xl flex flex-col h-full hover:-translate-y-1 transition-all duration-300 hover:border-primary/40"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.flagship && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                      Flagship
                    </span>
                  )}
                </div>
                <div className="flex gap-2 text-muted-foreground">
                  <a href="#" className="hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-foreground transition-colors"><ExternalLink className="w-5 h-5" /></a>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/50 text-sm font-medium">
                  <span className="text-foreground">Impact: </span>
                  <span className="text-muted-foreground">{project.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
