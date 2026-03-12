import { GraduationCap, Code2, Brain, Briefcase } from 'lucide-react';

export function About() {
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

  return (
    <section id="about" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Hi! I'm <span className="font-semibold text-[#6366f1]">Shubh Dixit</span>, a B.Tech Computer Science and Engineering student at Lovely Professional University with a CGPA of 8.22.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about building innovative solutions that bridge machine learning and web development. With strong expertise in <span className="font-semibold text-foreground">Data Structures & Algorithms</span>, <span className="font-semibold text-foreground">Object-Oriented Programming</span>, and <span className="font-semibold text-foreground">ML frameworks</span>, I love creating end-to-end applications that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience spans from developing ML-powered recommendation systems to building scalable full-stack applications using modern technologies like React, Flask, Django, and FastAPI. I'm always eager to learn new technologies and take on challenging projects.
            </p>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-[#6366f1]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/10"
                >
                  <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#6366f1]" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
