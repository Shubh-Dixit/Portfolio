import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Education() {
  const headerAnim = useScrollAnimation();

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      period: '2023 - 2027',
      grade: 'CGPA: 8.22',
      icon: '🎓',
    },
    {
      degree: '12th Grade',
      field: 'Science Stream',
      institution: 'ICSE/ISC',
      location: 'India',
      period: '2021 - 2022',
      grade: '83.5%',
      icon: '📚',
    },
    {
      degree: '10th Grade',
      field: 'General Studies',
      institution: 'ICSE',
      location: 'India',
      period: '2019 - 2020',
      grade: '87.2%',
      icon: '🏫',
    },
  ];

  return (
    <section id="education" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={headerAnim.ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center animate-on-scroll ${headerAnim.isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-gradient drop-shadow-sm">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gradient-start)]/50 to-[var(--gradient-end)]/50" />

          {/* Education items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-[calc(50%-2rem)] group">
                  <div className="glass-card p-8 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                    {/* Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div className="px-3 py-1 bg-[var(--gradient-start)]/10 border border-[var(--gradient-start)]/30 rounded-full text-[var(--gradient-start)] text-sm font-medium">
                        {item.grade}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground dark:text-white mb-2 group-hover:text-[var(--gradient-start)] transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-lg font-semibold text-foreground/80 mb-4">
                      {item.field}
                    </p>
                    
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-sm">{item.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] z-10">
                  <div className="w-3 h-3 bg-black rounded-full" />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
