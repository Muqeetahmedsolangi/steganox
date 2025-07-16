import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../../../constant/data';

const Portfolio = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const categories = [...new Set(portfolioData.map(project => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Icon icon="carbon:portfolio" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Our Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="text-white/90">Projects</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              Discover our latest software development projects showcasing innovation and technical excellence
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-white/10'
                }`}
              >
                All Projects
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                onClick={() => navigate(`/portfolio/${project.id}`)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20">
                      {project.category}
                    </span>
                    <span className="text-sm text-white/60">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-200 transition-colors line-clamp-2">
                    {project.title}
                  </h2>

                  {/* Client */}
                  <p className="text-accent-400 font-medium mb-4">{project.client}</p>

                  {/* Description */}
                  <p className="text-white/70 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.impact).slice(0, 2).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-primary-300">{value}</div>
                        <div className="text-xs text-white/60 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-accent-500/10 text-accent-300 text-xs rounded border border-accent-500/20">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Icon icon="carbon:time" className="w-4 h-4" />
                        {project.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon icon="carbon:user-multiple" className="w-4 h-4" />
                        {project.teamSize}
                      </span>
                    </div>
                    
                    <Icon 
                      icon="carbon:arrow-right" 
                      className="w-5 h-5 text-white/40 group-hover:text-accent-400 group-hover:translate-x-1 transition-all" 
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technologies We Use</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'TypeScript', 'Kubernetes'].map((tech, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center">
                  <Icon icon="carbon:code" className="w-6 h-6 text-primary-300" />
                </div>
                <h3 className="text-white font-bold">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Let's collaborate to create innovative software solutions that drive your business forward
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <span className="relative z-10 flex items-center justify-center">
                <Icon icon="carbon:rocket" className="w-5 h-5 mr-2" />
                Start Your Project
              </span>
            </button>
            
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <span className="flex items-center justify-center">
                <Icon icon="carbon:document" className="w-5 h-5 mr-2" />
                View Our Services
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 