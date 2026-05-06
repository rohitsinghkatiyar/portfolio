import { motion } from 'framer-motion';
import { Bot, Code2, Server, Zap } from 'lucide-react';
import { cn } from '../utils/utils';

export function About() {
  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Frontend Architecture',
      description: 'Designing scalable, maintainable, and highly performant component systems for enterprise apps.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Performance Optimization',
      description: 'Specializing in core web vitals, lazy loading, and minimizing render cycles.'
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Product Ownership',
      description: 'Driving features from end to end, collaborating closely with backend, design, and product.'
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: 'AI-Assisted Workflows',
      description: 'Leveraging LLM tooling like Claude, Copilot, and Cursor for 10x developer efficiency.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -rotate-12" />
        <div className="absolute inset-0 bg-[radial-gradient(#80808033_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left Column: Text */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-foreground mb-8" />
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I am a Senior Frontend Engineer with over 4 years of experience specializing in 
                  React, TypeScript, and modern web architectures.
                </p>
                <p>
                  My background spans enterprise systems and SaaS platforms where I've led migrations, 
                  built scalable products from scratch, and focused on building robust, metric-driven solutions.
                </p>
                <p>
                  Beyond just writing code (and occasionally fighting with CSS), I am a system thinker. I believe in extreme ownership, 
                  performance optimization, and integrating AI-agentic tools into development workflows 
                  to deliver high-quality software faster.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Grid Highlights */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-foreground/20 transition-colors"
              >
                <div className="p-3 bg-muted rounded-xl text-foreground">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
