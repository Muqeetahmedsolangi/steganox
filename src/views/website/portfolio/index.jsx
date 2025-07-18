import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../../../constant/data';

const Portfolio = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [featuredProject, setFeaturedProject] = useState(0);

  const categories = [...new Set(portfolioData.map(project => project.category))];
  
  const filteredProjects = portfolioData.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Auto-rotate featured project
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedProject(prev => (prev + 1) % Math.min(3, portfolioData.filter(p => p.featured).length));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  const handleProjectClick = (projectId) => {
    navigate(`/portfolio/${projectId}`);
  };

  const featuredProjects = portfolioData.filter(p => p.featured);
  const currentFeatured = featuredProjects[featuredProject] || featuredProjects[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary-500/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                <Icon icon="carbon:enterprise" className="w-5 h-5 text-accent-400 mr-3" />
                <span className="text-sm font-medium text-white/90 tracking-wide">OUR PORTFOLIO</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="text-white/90">Our</span>
                <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  Featured Work
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-4xl mx-auto">
                Discover our latest software development projects showcasing innovation, technical excellence, and proven business results
              </p>

              {/* Portfolio Stats */}
              <div className="flex items-center justify-center gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">50+</div>
                  <div className="text-sm text-white/60">Projects Delivered</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-400">25+</div>
                  <div className="text-sm text-white/60">Industries Served</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-white/60">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight */}
      {currentFeatured && (
        <section className="relative py-20 bg-gradient-to-b from-primary-900 to-black">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-20 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                  <Icon icon="carbon:star-filled" className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Featured Project</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Spotlight</h2>
              </div>

              <div 
                className="group relative rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
                onClick={() => handleProjectClick(currentFeatured.id)}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Project Info */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-bold rounded-full">
                        {currentFeatured.category}
                      </span>
                      <span className="px-4 py-2 bg-white/10 text-white/90 text-sm rounded-full border border-white/20">
                        {currentFeatured.year}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                      {currentFeatured.title}
                    </h3>

                    <p className="text-xl text-primary-300 font-medium mb-6">{currentFeatured.client}</p>

                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                      {currentFeatured.description}
                    </p>

                    {/* Key Results */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {Object.entries(currentFeatured.impact).slice(0, 4).map(([key, value], index) => (
                        <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-2xl font-bold text-accent-400">{value}</div>
                          <div className="text-sm text-white/60 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentFeatured.technologies.slice(0, 5).map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-secondary-500/20 text-secondary-300 text-sm rounded border border-secondary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="group/btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300 hover:scale-105 shadow-lg">
                      <span className="mr-3">View Project Details</span>
                      <Icon icon="carbon:arrow-right" className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Project Image */}
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden aspect-video">
                      <img 
                        src={currentFeatured.image}
                        alt={currentFeatured.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-6 right-6">
                        <span className="px-4 py-2 bg-green-500/20 text-green-300 text-sm font-medium rounded-full border border-green-500/30">
                          <Icon icon="carbon:checkmark-filled" className="w-4 h-4 mr-2 inline" />
                          {currentFeatured.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Meta */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between text-white/90 text-sm">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Icon icon="carbon:time" className="w-4 h-4" />
                            {currentFeatured.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon icon="carbon:user-multiple" className="w-4 h-4" />
                            {currentFeatured.teamSize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Project Navigation */}
              <div className="flex justify-center gap-2 mt-8">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setFeaturedProject(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === featuredProject ? 'bg-primary-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter & Search Section */}
      <section className="relative py-16 bg-gradient-to-b from-black to-primary-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Icon icon="carbon:search" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-primary-400 transition-colors"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    filter === 'all'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <Icon icon="carbon:apps" className="w-4 h-4 mr-2 inline" />
                  All Projects ({portfolioData.length})
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      filter === category
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                        : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    {category} ({portfolioData.filter(p => p.category === category).length})
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-white/70">
                Showing <span className="text-primary-400 font-semibold">{filteredProjects.length}</span> of <span className="text-accent-400 font-semibold">{portfolioData.length}</span> projects
                {searchTerm && (
                  <span> matching "<span className="text-white font-medium">{searchTerm}</span>"</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <Icon icon="carbon:search" className="w-20 h-20 text-white/30 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
                <p className="text-white/70 mb-8">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilter('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                    <article
                      key={project.id}
                      className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer"
                      style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}
                      onClick={() => handleProjectClick(project.id)}
                    >
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-6 left-6 z-10">
                          <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                            <Icon icon="carbon:star-filled" className="w-3 h-3" />
                            FEATURED
                          </span>
                        </div>
                      )}

                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
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
                              : project.status === 'In Development'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
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
                            <div key={statIndex} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
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

                {/* Load More Button */}
                {filteredProjects.length > visibleProjects && (
                  <div className="text-center mt-12">
                    <button
                      onClick={loadMore}
                      className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center">
                        <Icon icon="carbon:chevron-down" className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                        Load More Projects ({filteredProjects.length - visibleProjects} remaining)
                      </span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-primary-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
                <Icon icon="carbon:code" className="w-5 h-5 text-accent-400 mr-3" />
                <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Technology Stack</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-white/90">Technologies We</span>
                <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  Master
                </span>
              </h2>
              
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to deliver exceptional, scalable, and future-proof solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'React', icon: 'carbon:logo-react', category: 'Frontend' },
                { name: 'Node.js', icon: 'carbon:logo-nodejs', category: 'Backend' },
                { name: 'Python', icon: 'carbon:logo-python', category: 'Backend' },
                { name: 'AWS', icon: 'carbon:cloud', category: 'Cloud' },
                { name: 'Docker', icon: 'carbon:container-registry', category: 'DevOps' },
                { name: 'MongoDB', icon: 'carbon:document', category: 'Database' },
                { name: 'TypeScript', icon: 'carbon:code', category: 'Language' },
                { name: 'Kubernetes', icon: 'carbon:kubernetes', category: 'DevOps' }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="group text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={tech.icon} className="w-8 h-8 text-primary-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{tech.name}</h3>
                  <p className="text-sm text-white/60">{tech.category}</p>
                </div>
              ))}
            </div>

            {/* Technology Stats */}
            <div className="mt-16 grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
                <div className="text-white/70">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">25+</div>
                <div className="text-white/70">Frameworks & Libraries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-2">10+</div>
                <div className="text-white/70">Cloud Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">8+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <Icon icon="carbon-lightbulb" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-white/90 tracking-wide">START YOUR PROJECT</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-white/90">Ready to Build</span>
              <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
              Let's collaborate to create innovative software solutions that drive your business forward and exceed expectations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => navigate('/contact-us')}
                className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary-500/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:rocket" className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button 
                onClick={() => navigate('/services')}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:document" className="w-6 h-6 mr-3" />
                  View Our Services
                </span>
              </button>
            </div>

            {/* Quick Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <Icon icon="carbon:phone" className="w-8 h-8 text-primary-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <p className="text-white/70">+1 (234) 567-8900</p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <Icon icon="carbon:email" className="w-8 h-8 text-accent-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                <p className="text-white/70">info@qhubinformation.com</p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <Icon icon="carbon:time" className="w-8 h-8 text-secondary-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Response Time</h3>
                <p className="text-white/70">Within 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 