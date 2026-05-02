import { motion } from 'framer-motion';
import { cn } from '../utils/utils';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Architecture',
      skills: [
        { name: 'React 18+', context: 'Concurrent features & suspense' },
        { name: 'TypeScript', context: 'Strict typing & generics' },
        { name: 'Astro', context: 'Island architecture & SSG' },
        { name: 'Next.js', context: 'App router & SSR' },
      ],
    },
    {
      title: 'State & Data',
      skills: [
        { name: 'Redux / RTK', context: 'Large scale state management' },
        { name: 'Zustand', context: 'Lightweight atomic state' },
        { name: 'React Query', context: 'Server state & caching' },
        { name: 'GraphQL', context: 'Declarative data fetching' },
      ],
    },
    {
      title: 'UI & Visualization',
      skills: [
        { name: 'Tailwind CSS', context: 'Utility-first design systems' },
        { name: 'Framer Motion', context: 'Complex orchestrations' },
        { name: 'D3.js / Recharts', context: 'Data visualization' },
        { name: 'Radix UI', context: 'Accessible headless components' },
      ],
    },
    {
      title: 'AI & Workflows',
      skills: [
        { name: 'Claude & Copilot', context: '10x Developer workflows' },
        { name: 'Cursor IDE', context: 'Agentic code generation' },
        { name: 'Vite', context: 'Fast modern build tooling' },
        { name: 'CI/CD Pipelines', context: 'GitHub Actions & Vercel' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30 relative">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the tools, frameworks, and patterns I use to build scalable systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col gap-6 group hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold tracking-tight pb-4 border-b border-border/50">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="group/item">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.context}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
