import { Award, Trophy, Star } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Award,
      title: 'Elite Certificate',
      organization: 'NPTEL',
      description: 'Introduction to Large Language Models',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Trophy,
      title: 'Second Rank (2x)',
      organization: 'CypherSchool',
      description: 'Weekly Competitive Programming Contest',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Star,
      title: 'CP Training',
      organization: 'AlgoTutor',
      description: 'Competitive Programming Training Program',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="achievements" className="px-6 py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-card border border-border rounded-2xl hover:border-[#6366f1]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#6366f1]/10 hover:-translate-y-2"
              >
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${achievement.color} opacity-20 group-hover:opacity-30 transition-opacity`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${achievement.color} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366f1] transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  {achievement.organization}
                </p>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-5 rounded-bl-full`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
