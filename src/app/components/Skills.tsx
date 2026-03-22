import { Code, Layers, Wrench, Cpu, Users, Globe } from 'lucide-react';
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

export function Skills() {
  const headerAnim = useScrollAnimation();

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['C++', 'Java', 'C', 'Python'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Layers,
      title: 'Frameworks',
      skills: ['React', 'Flask', 'Django', 'FastAPI', 'TensorFlow', 'Spring', 'Spring Boot'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Web & Styling',
      skills: ['HTML/CSS', 'JavaScript'],
      gradient: 'from-sky-500 to-blue-500',
    },
    {
      icon: Wrench,
      title: 'Libraries / Tools',
      skills: ['MySQL', 'Google Colab', 'Jupyter', 'GitHub', 'Docker', 'Scikit-learn', 'NumPy', 'Pandas', 'OCR (Tesseract)', 'Gemini API', 'Git'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Cpu,
      title: 'Core Concepts',
      skills: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'Operating Systems'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Problem-Solving', 'Collaborator', 'Adaptability'],
      gradient: 'from-indigo-500 to-violet-500',
    },
  ];

  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', '', ''];

  return (
    <section id="skills" className="px-6 py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={headerAnim.ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center animate-on-scroll ${headerAnim.isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Technical <span className="text-gradient drop-shadow-sm">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedCard key={index} delay={delays[index]}>
                <div className="glass-card group p-8 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 group-hover:opacity-30 rounded-xl transition-opacity`} />
                      <Icon className="w-7 h-7 relative z-10 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
