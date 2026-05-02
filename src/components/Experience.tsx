import { motion } from 'framer-motion';

export function Experience() {
  const experiences = [
    {
      company: 'Softude',
      role: 'Senior Frontend Engineer',
      duration: 'Recent',
      achievements: [
        'Architected and implemented a cost simulation system with complex recalculation logic.',
        'Led the successful migration of legacy codebase from React 16 to 18, and CRA to Vite, significantly improving build times and developer experience.',
        'Integrated complex backend services for PDF and Excel generation workflows.',
        'Ensured high performance and maintainability across enterprise-scale applications.'
      ]
    },
    {
      company: 'TechRadix',
      role: 'Frontend Engineer',
      duration: 'Previous',
      achievements: [
        'Built a B2B SaaS platform from scratch, delivering the MVP in under 90 days.',
        'Improved developer efficiency by 30% through the implementation of a unified UI component library.',
        'Increased user engagement by 40% via UX overhaul and performance optimizations.',
        'Integrated an LLM-powered chatbot to automate customer support workflows.',
        'Mentored junior developers and established code review best practices.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-foreground mb-8" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                
                {/* Timeline Line & Dot (Mobile) */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-border md:hidden" />
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-primary md:hidden" />

                {/* Left Side: Meta (Desktop) */}
                <div className="md:col-span-1 md:text-right mb-4 md:mb-0 relative">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    {exp.duration}
                  </div>
                  <div className="font-semibold text-lg">{exp.company}</div>
                </div>

                {/* Timeline Line & Dot (Desktop) */}
                <div className="hidden md:flex flex-col items-center justify-start relative pt-2">
                  <div className="h-3 w-3 rounded-full bg-primary z-10 ring-4 ring-background" />
                  <div className="absolute top-5 bottom-[-3rem] w-px bg-border" />
                </div>

                {/* Right Side: Content */}
                <div className="md:col-span-3 pb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    {exp.role}
                  </h3>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
