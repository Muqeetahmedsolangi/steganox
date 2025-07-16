import { Icon } from '@iconify/react';
import { portfolioData } from '../constant/data';

const PortfolioShowcase = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
              <Icon icon="fluent:apps-24-filled" className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Portfolio</span>
            </div>
          </div>
          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1.1'
            }}
          >
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400">
            Explore our latest projects showcasing innovation and technical excellence
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioData.slice(0, 6).map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category badge */}
                <div 
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#ffffff'
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 text-gray-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <Icon icon="fluent:open-16-filled" className="w-4 h-4" />
                    <span>View Live</span>
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon icon="mdi:github" className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span>View All Projects</span>
            <Icon icon="fluent:arrow-right-16-filled" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase; 