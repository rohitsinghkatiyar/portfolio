import { motion } from 'framer-motion';
import { Cpu, Code, ShieldCheck, FileText, Bug } from 'lucide-react';

export function AISection() {
  const tools = [
    'Claude Code',
    'Cursor IDE',
    'GitHub Copilot',
    'OpenAI Codex',
    'Gemini CLI',
  ];

  const workflows = [
    {
      title: 'Agentic Code Generation',
      icon: <Code className="h-6 w-6" />,
      description: 'Rapid scaffolding, boilerplate generation, and complex logic implementation using context-aware LLMs.',
    },
    {
      title: 'Test Automation',
      icon: <ShieldCheck className="h-6 w-6" />,
      description: 'Automated unit test generation and edge-case discovery for higher code reliability.',
    },
    {
      title: 'Documentation',
      icon: <FileText className="h-6 w-6" />,
      description: 'Self-documenting codebases and architectural decision records (ADRs) generated on the fly.',
    },
    {
      title: 'Debugging Workflows',
      icon: <Bug className="h-6 w-6" />,
      description: 'Fast trace analysis, error log parsing, and root-cause identification using AI-assisted tools.',
    },
  ];

  return (
    <section id="ai-workflows" className="py-24 relative overflow-hidden bg-foreground text-background">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
        
        {/* Subtle grid pattern for futuristic look */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/10 border border-background/20 text-sm font-medium mb-6">
                <Cpu className="h-4 w-4" />
                <span>The Future of Development</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                AI-Assisted <br />
                <span className="text-muted-foreground">Engineering</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                I leverage state-of-the-art LLMs and agentic workflows to multiply productivity, 
                ensure code quality, and focus on architecture over boilerplate. 
                Writing code is just the beginning; orchestrating AI is the future.
              </p>

              <div className="flex flex-wrap gap-3">
                {tools.map((tool, idx) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="px-4 py-2 rounded-full bg-background/5 border border-background/10 font-medium text-sm backdrop-blur-sm"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {workflows.map((workflow, idx) => (
              <motion.div
                key={workflow.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors backdrop-blur-sm flex flex-col gap-4"
              >
                <div className="p-3 bg-background/10 w-fit rounded-xl">
                  {workflow.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {workflow.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {workflow.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
