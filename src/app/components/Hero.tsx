import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)]/10 via-transparent to-[var(--gradient-end)]/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.15),transparent)]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-tr from-[var(--gradient-start)] to-[var(--gradient-end)] shadow-[0_0_30px_rgba(139,92,246,0.2)]">
            <img 
              src="/resources/shubh_dixit_profile.jpg" 
              alt="Shubh Dixit" 
              className="w-full h-full object-cover object-top rounded-full border-4 border-background"
            />
          </div>
        </div>

        {/* Greeting */}
        <div className="inline-block mb-6 px-4 py-2 rounded-full glass-card">
          <p className="text-sm text-muted-foreground">👋 Welcome to my portfolio</p>
        </div>

        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tighter">
          <span className="text-gradient drop-shadow-sm">
            Shubh Dixit
          </span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 dark:text-white/90 mb-4 font-medium tracking-tight">
          Building ML-powered full-stack applications | Java Backend Developer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          DSA Enthusiast • Building end-to-end ML + Web Applications
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="https://github.com/Shubh-Dixit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass-card rounded-full font-semibold text-foreground dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1gxEsJSLkyWx9XWxnUGjM2KNabTf6S2Pm/view?usp=sharing",
                "_blank"
              )
            }
            className="px-8 py-4 glass-card rounded-full font-semibold text-foreground dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Resume
          </button>

        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/shubh-dixit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
