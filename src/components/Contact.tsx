import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container px-6 mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-muted-foreground">
              something great?
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Like my vibe? Why don't you hire me and find out! Whether you have a question, a project proposal, 
            or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:hello@rohitsinghkatiyar.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 border-t border-border pt-8">
            <a href="https://github.com/rohitsinghkatiyar" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <div className="p-3 rounded-full bg-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="font-medium hidden sm:block">GitHub</span>
            </a>
            
            <a href="https://linkedin.com/in/rohitsinghkatiyar" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <div className="p-3 rounded-full bg-muted group-hover:bg-[#0A66C2]/10 group-hover:text-[#0A66C2] transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <span className="font-medium hidden sm:block">LinkedIn</span>
            </a>

            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="p-3 rounded-full bg-muted">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-medium hidden sm:block">India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-muted/20">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rohit Singh Katiyar. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Designed & Built with <span className="text-primary">Astro</span>, <span className="text-primary">React</span>, & <span className="text-primary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
