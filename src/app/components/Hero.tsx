import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 via-transparent to-[#a855f7]/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1),transparent)]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-2xl p-1 bg-gradient-to-tr from-[#6366f1] to-[#a855f7]">
            <img 
              src="/resources/shubh_dixit_profile.jpg" 
              alt="Shubh Dixit" 
              className="w-full h-full object-cover object-top rounded-2xl border-4 border-background"
            />
          </div>
        </div>

        {/* Greeting */}
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-card/50 border border-border backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">👋 Welcome to my portfolio</p>
        </div>

        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            Shubh Dixit
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-4 font-medium">
          Software Engineer | ML & Full-Stack Developer | Java Backend Developer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          DSA Enthusiast • Building end-to-end ML + Web Applications
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-[#6366f1]/50 transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="https://github.com/Shubh-Dixit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-card border border-border rounded-lg font-semibold hover:bg-secondary transition-all duration-300 flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          
          <button
  onClick={() =>
    window.open(
      "https://drive.google.com/file/d/1A9lI4wo9VHTzhNXjT_j_5WBHhrMkwjGd/view",
      "_blank"
    )
  }
  className="px-8 py-4 bg-card border border-border rounded-lg font-semibold 
             hover:bg-secondary hover:scale-105 active:scale-95
             transition-all duration-300 
             flex items-center gap-2"
>
  <Download className="w-5 h-5" />
  Resume
</button>

        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Shubh-Dixit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#6366f1] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shubh-dixit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#6366f1] transition-colors"
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
