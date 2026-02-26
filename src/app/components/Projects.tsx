import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'AceBank - Full-Stack Banking Application',
      description: 'A secure banking web application featuring user authentication, real-time transaction processing, and automated email notifications. Developed using a robust Java backend with JSP and Servlets, and integrated with a MySQL database for reliable financial data management.',
      tags: ['Java', 'JSP', 'Servlet', 'MySQL', 'JDBC', 'Maven', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/Shubh-Dixit/BankingApp.git', // Update with specific repo link if available
      //demo: '#'
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'ML-Based Power Infrastructure Recommendation System',
      description: 'Advanced recommendation system using K-Means clustering for project classification and Random Forest multi-output prediction. Features a modern React TypeScript frontend with Tailwind CSS and Flask backend for real-time predictions.',
      tags: ['Python', 'Flask', 'React', 'TypeScript', 'Scikit-learn', 'K-Means', 'Random Forest', 'Tailwind CSS'],
      github: 'https://github.com/Shubh-Dixit',
      demo: 'https://power-infra-demand-forecasting.vercel.app/',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      title: 'AI-Based Crop Recommendation System',
      description: 'Intelligent agricultural solution leveraging ML models with Scikit-learn and TensorFlow for accurate crop predictions. Integrated Firebase authentication for security and AWS services for scalable cloud deployment with real-time predictions.',
      tags: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'Firebase', 'React', 'TypeScript', 'Tailwind CSS', 'Machine Learning'],
      github: 'https://github.com/Shubh-Dixit',
      demo: 'https://crop-guidance-system-murex.vercel.app/',
      gradient: 'from-green-600 to-teal-600',
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative ML-powered applications that solve real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:border-[#6366f1]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6366f1]/10 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#6366f1] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary border border-border rounded-lg hover:bg-[#6366f1] hover:border-[#6366f1] hover:text-white transition-all duration-300 group/btn"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary border border-border rounded-lg hover:bg-[#a855f7] hover:border-[#a855f7] hover:text-white transition-all duration-300 group/btn"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 border border-[#6366f1]/20 rounded-md text-sm font-medium text-foreground/90 hover:border-[#6366f1]/50 hover:bg-gradient-to-r hover:from-[#6366f1]/20 hover:to-[#a855f7]/20 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Shubh-Dixit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-xl font-semibold hover:bg-secondary hover:border-[#6366f1]/50 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 group-hover:text-[#6366f1] transition-colors" />
            View More Projects on GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
