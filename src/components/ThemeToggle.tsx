import { useEffect, useState } from 'react';
import pkg from 'lucide-react';
const { Moon, Sun } = pkg;
import { cn } from '../utils/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  // Sync state with document on mount
  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  // Avoid hydration mismatch by not rendering the icons until mounted
  if (!mounted) {
    return <div className={cn("w-10 h-10", className)} />;
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
        "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 absolute transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="h-5 w-5 absolute transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </button>
  );
}
