import { GraduationCap, Code2, Brain, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AnimatedCard({ children, delay }: { children: React.ReactNode; delay?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} ${delay ?? ''}`}
    >
      {children}
    </div>
  );
}

export function About() {
  const headerAnim = useScrollAnimation();
  const textAnim = useScrollAnimation();

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Tech CSE at LPU (CGPA 8.22)',
    },
    {
      icon: Code2,
      title: 'DSA & OOP',
      description: 'Strong foundation in algorithms',
    },
    {
      icon: Brain,
      title: 'ML Engineer',
      description: 'TensorFlow, Scikit-learn expertise',
    },
    {
      icon: Briefcase,
      title: 'Full-Stack',
      description: 'React, Flask, Django, FastAPI',
    },
  ];

  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];

  return (
    <section id="about" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={headerAnim.ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center animate-on-scroll ${headerAnim.isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            About <span className="text-gradient drop-shadow-sm">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div
            ref={textAnim.ref as React.RefObject<HTMLDivElement>}
            className={`space-y-6 animate-on-scroll ${textAnim.isVisible ? 'is-visible' : ''}`}
          >
            <p className="text-lg text-foreground/90 dark:text-white/90 leading-relaxed">
              Hi! I'm <span className="font-semibold text-gradient">Shubh Dixit</span>, a B.Tech Computer Science and Engineering student at Lovely Professional University with a CGPA of 8.22.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about building innovative solutions that bridge machine learning and web development. With strong expertise in <span className="font-semibold text-foreground">Data Structures &amp; Algorithms</span>, <span className="font-semibold text-foreground">Object-Oriented Programming</span>, and <span className="font-semibold text-foreground">ML frameworks</span>, I love creating end-to-end applications — from scalable full-stack systems using React, Flask, Django, and FastAPI to ML-powered recommendation systems that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as curiosity about how recommendation systems work turned into a passion for building full-stack ML applications from data pipeline to deployed UI.
            </p>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedCard key={index} delay={delays[index]}>
                  <div className="glass-card group p-6 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                    <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-end)]/20 flex items-center justify-center group-hover:scale-110 transition-transform border border-black/5 dark:border-white/5">
                      <Icon className="w-6 h-6 text-[var(--gradient-start)]" />
                    </div>
                    <h3 className="font-semibold text-foreground dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
