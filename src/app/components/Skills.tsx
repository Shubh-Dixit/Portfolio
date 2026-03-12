import { Code, Layers, Wrench, Cpu, Users } from 'lucide-react';

export function Skills() {
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
      skills: ['HTML/CSS', 'React', 'Flask', 'Django', 'FastAPI', 'TensorFlow', 'Spring', 'Spring Boot'],
      gradient: 'from-purple-500 to-pink-500',
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

  return (
    <section id="skills" className="px-6 py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-2xl hover:border-[#6366f1]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#6366f1]/10 hover:-translate-y-1"
              >
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
                      className="px-4 py-2 bg-secondary/50 border border-border rounded-lg text-sm font-medium hover:border-[#6366f1]/50 hover:bg-secondary transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
