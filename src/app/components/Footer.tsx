import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Shubh Dixit
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Software Engineer passionate about building innovative ML-powered applications and scalable web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-[#6366f1] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-[#6366f1] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-[#6366f1] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-[#6366f1] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Shubh-Dixit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:bg-[#6366f1] hover:border-[#6366f1] hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubh-dixit/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:bg-[#6366f1] hover:border-[#6366f1] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:shubhdixit2411@gmail.com"
                className="p-3 bg-card border border-border rounded-lg hover:bg-[#6366f1] hover:border-[#6366f1] hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Shubh Dixit. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}