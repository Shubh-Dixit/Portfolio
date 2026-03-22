import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down by 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Trigger initially in case of refresh
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll to top"
        className={`
          glass-card p-4 rounded-full 
          shadow-[0_0_20px_rgba(139,92,246,0.2)] 
          hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1
          transition-all duration-300 group
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
      >
        <ArrowUp className="w-6 h-6 text-foreground group-hover:text-[var(--gradient-start)] transition-colors" />
      </button>
    </div>
  );
}
