import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ProjectCarousel({ images, setSelectedImage }: { images: string[], setSelectedImage: (data: {images: string[], index: number}) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
      className="relative mt-6 w-full h-64 md:h-80 rounded-xl overflow-hidden border border-border group-hover:border-[#6366f1]/30 transition-colors cursor-pointer bg-secondary/20"
      onClick={() => setSelectedImage({ images, index: currentIndex })}
    >
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Project screenshot ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
            idx === currentIndex ? 'opacity-100 relative z-10' : 'opacity-0 absolute z-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-black/10 dark:bg-black/50 backdrop-blur-sm">
        <span className="px-4 py-2 bg-[var(--gradient-start)] text-white text-sm font-medium rounded-full shadow-lg">Click to View</span>
      </div>
    </div>
  );
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  note?: string;
  gradient: string;
  images: string[];
}

function AnimatedProjectCard({ project, setSelectedImage }: { project: Project; setSelectedImage: (data: {images: string[], index: number}) => void }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="glass-card group relative flex flex-col p-8 overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

        <div className="relative z-10 flex flex-col h-full">
          {/* Project Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--gradient-start)] transition-colors">
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
                className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full hover:bg-[var(--gradient-start)] hover:border-[var(--gradient-start)] hover:text-white transition-all duration-300 group/btn"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full hover:bg-[var(--gradient-end)] hover:border-[var(--gradient-end)] hover:text-white transition-all duration-300 group/btn"
                  aria-label="View live demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm font-medium text-foreground/90 hover:border-black/20 dark:hover:border-white/20 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Note */}
          {project.note && (
            <p className="text-xs text-muted-foreground/70 mt-2 italic">{project.note}</p>
          )}

          {/* Project Images Carousel */}
          {'images' in project && project.images && project.images.length > 0 && (
            <div className="mt-auto">
              <ProjectCarousel images={project.images} setSelectedImage={setSelectedImage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<{images: string[], index: number} | null>(null);
  const headerAnim = useScrollAnimation();

  const projects: Project[] = [
    {
      title: 'AceBank - Full-Stack Banking Application',
      description: 'A secure banking web application featuring user authentication, real-time transaction processing, and automated email notifications. Developed using a robust Java backend with JSP and Servlets, and integrated with a MySQL database for reliable financial data management.',
      tags: ['Java', 'JSP', 'Servlet', 'MySQL', 'JDBC', 'Maven', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/Shubh-Dixit/BankingApp.git',
      note: 'Backend not hosted — see README for local setup',
      gradient: 'from-amber-500 to-orange-600',
      images: [
        '/resources/acebank_1.png',
        '/resources/acebank_2.png',
        '/resources/acebank_3.png',
        '/resources/acebank_4.png',
        '/resources/acebank_5.png',
        '/resources/acebank_6.png',
        '/resources/acebank_7.png',
        '/resources/acebank_8.png'
      ]
    },
    {
      title: 'ML-Based Power Infrastructure Recommendation System',
      description: 'Advanced recommendation system using K-Means clustering for project classification and Random Forest multi-output prediction. Features a modern React TypeScript frontend with Tailwind CSS and Flask backend for real-time predictions.',
      tags: ['Python', 'Flask', 'React', 'TypeScript', 'Scikit-learn', 'K-Means', 'Random Forest', 'Tailwind CSS'],
      github: 'https://github.com/Shubh-Dixit/power-infra-demand-forecasting.git',
      demo: 'https://power-infra-demand-forecasting.vercel.app/',
      gradient: 'from-blue-600 to-purple-600',
      images: [
        '/resources/power_infra_1.png',
        '/resources/power_infra_2.png'
      ]
    },
    {
      title: 'AI-Based Crop Recommendation System',
      description: 'Built a full-stack agritech application providing crop recommendations and market insights. Engineered a machine learning pipeline using Random Forest and XGBoost, and leveraged the Google Gemini API to deliver localized farming tips.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Flask', 'Firebase', 'XGBoost', 'Google Gemini API', 'Machine Learning'],
      github: 'https://github.com/Shubh-Dixit/Crop-Guidance-System.git',
      demo: 'https://crop-guidance-system-murex.vercel.app/',
      gradient: 'from-green-600 to-teal-600',
      images: [
        '/resources/crop_1.png',
        '/resources/crop_2.png',
        '/resources/crop_3.png',
        '/resources/crop_4.png'
      ]
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={headerAnim.ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center animate-on-scroll ${headerAnim.isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Featured <span className="text-gradient drop-shadow-sm">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative ML-powered applications that solve real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <AnimatedProjectCard key={index} project={project} setSelectedImage={setSelectedImage} />
          ))}
        </div>

        {/* View More on GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Shubh-Dixit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 group-hover:text-[var(--gradient-start)] transition-colors" />
            View More Projects on GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Full Image Modal overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-border bg-card animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background text-foreground rounded-full backdrop-blur-sm transition-colors z-10 border border-border"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            {selectedImage.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) => 
                      prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background text-foreground rounded-full backdrop-blur-sm transition-colors z-[110] border border-border"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) => 
                      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background text-foreground rounded-full backdrop-blur-sm transition-colors z-[110] border border-border"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            
            {/* Full Image */}
            <div className="w-full h-full p-2 bg-secondary/20 flex items-center justify-center">
              <img 
                src={selectedImage.images[selectedImage.index]} 
                alt="Project Full View is unavailable" 
                className="w-full h-auto max-h-[calc(90vh-1rem)] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
