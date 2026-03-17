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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366f1] to-[#a855f7]" />

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
                  <div className="p-8 bg-card border border-border rounded-2xl hover:border-[#6366f1]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#6366f1]/10">
                    {/* Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div className="px-3 py-1 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 border border-[#6366f1]/30 rounded-full text-sm font-medium">
                        {item.grade}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#6366f1] transition-colors">
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
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-full items-center justify-center shadow-lg shadow-[#6366f1]/50 z-10">
                  <div className="w-3 h-3 bg-background rounded-full" />
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
