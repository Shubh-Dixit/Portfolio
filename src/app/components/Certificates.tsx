import { Award, BookOpen, X } from 'lucide-react';
import { useState } from 'react';

export function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      icon: Award,
      title: 'Introduction to Large Language Models (LLMs)',
      organization: 'NPTEL',
      date: 'November 2025',
      color: 'from-amber-500 to-orange-500',
      image: '/resources/nptel_certificate.jpg'
    },
    {
      icon: BookOpen,
      title: 'Competitive Programming',
      organization: 'AlgoTutor',
      date: 'July 2025',
      color: 'from-indigo-500 to-purple-500',
      image: '/resources/algotutor_certificate.png'
    },
  ];

  return (
    <section id="certificates" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col p-8 bg-card border border-border rounded-2xl hover:border-[#6366f1]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#6366f1]/10 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                {/* Icon with gradient background */}
                <div className="mb-6 flex items-center justify-between z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${cert.color} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground px-3 py-1 rounded-full bg-secondary/50 border border-border">
                    {cert.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366f1] transition-colors z-10">
                  {cert.title}
                </h3>
                <p className="text-lg font-semibold text-muted-foreground z-10 mb-6">
                  {cert.organization}
                </p>

                {/* Image Thumbnail */}
                <div className="relative mt-auto w-full h-48 rounded-xl overflow-hidden border border-border group-hover:border-[#6366f1]/30 transition-colors">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`} 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-background/50 backdrop-blur-sm">
                    <span className="px-4 py-2 bg-[#6366f1] text-white text-sm font-medium rounded-lg shadow-lg">Click to View</span>
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${cert.color} opacity-5 rounded-bl-full`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-border bg-card animate-in zoom-in-95 duration-200"
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
            
            {/* Full Image */}
            <div className="w-full h-full p-2 bg-secondary/20">
              <img 
                src={selectedImage} 
                alt="Certificate Full View" 
                className="w-full h-auto max-h-[calc(90vh-1rem)] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
