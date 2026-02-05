import { ThemeProvider } from 'next-themes';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground relative">
        <div className="fixed top-6 left-6 z-50">
          <ThemeToggle />
        </div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
