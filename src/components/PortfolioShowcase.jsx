import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const PortfolioShowcase = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const portfolioData = [
    {
      id: 1,
      title: 'FinanceFlow - Digital Banking Platform',
      category: 'FinTech',
      description: 'Complete digital banking solution with mobile app, web portal, and admin dashboard featuring real-time transactions and advanced security.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
      results: ['1M+ active users', '99.9% uptime', '50% faster transactions', '256-bit encryption'],
      client: 'Global Bank Inc.',
      duration: '12 months',
      year: '2023',
      color: 'from-primary-500 to-accent-600'
    },
    {
      id: 2,
      title: 'MediCare Plus - Healthcare Management',
      category: 'Healthcare',
      description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Docker'],
      results: ['10K+ patients', '95% satisfaction', '40% reduced wait times', 'HIPAA compliant'],
      client: 'Healthcare Solutions Ltd.',
      duration: '8 months',
      year: '2023',
      color: 'from-secondary-500 to-primary-600'
    },
    {
      id: 3,
      title: 'ShopSmart - E-commerce Platform',
      category: 'E-commerce',
      description: 'Modern e-commerce platform with AI-powered recommendations, real-time inventory, and multi-vendor support.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'ElasticSearch'],
      results: ['500K+ products', '2M+ monthly users', '35% increase in sales', '99.8% uptime'],
      client: 'RetailMaster Corp.',
      duration: '10 months',
      year: '2023',
      color: 'from-accent-500 to-secondary-600'
    },
    {
      id: 4,
      title: 'EduLearn - Online Learning Platform',
      category: 'Education',
      description: 'Interactive online learning platform with video streaming, progress tracking, and collaborative features.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Angular', 'Node.js', 'MySQL', 'WebRTC', 'AWS S3'],
      results: ['100K+ students', '5K+ courses', '90% completion rate', 'Global accessibility'],
      client: 'EduTech Innovations',
      duration: '6 months',
      year: '2022',
      color: 'from-primary-600 to-accent-500'
    },
    {
      id: 5,
      title: 'SmartFactory - IoT Management',
      category: 'IoT',
      description: 'Industrial IoT platform for manufacturing with real-time monitoring, predictive maintenance, and analytics.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      technologies: ['React', 'Python', 'InfluxDB', 'MQTT', 'Kubernetes'],
      results: ['300+ sensors', '25% efficiency gain', '60% reduced downtime', 'Real-time alerts'],
      client: 'Industrial Solutions Inc.',
      duration: '14 months',
      year: '2023',
      color: 'from-secondary-600 to-primary-500'
    },
    {
      id: 6,
      title: 'MediaStream - Content Platform',
      category: 'Media',
      description: 'High-performance video streaming platform with content management, analytics, and monetization features.',
      image: 'https://images.unsplash.com/photo-1551191031-d34e92a13ca1?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'FFmpeg', 'CDN', 'Redis'],
      results: ['1M+ hours streamed', '50+ countries', '4K streaming', '99.99% availability'],
      client: 'StreamTech Media',
      duration: '9 months',
      year: '2022',
      color: 'from-accent-600 to-primary-500'
    }
  ];

  const categories = [
    { name: 'All', icon: 'carbon:grid', count: portfolioData.length },
    { name: 'FinTech', icon: 'carbon:currency-dollar', count: portfolioData.filter(p => p.category === 'FinTech').length },
    { name: 'Healthcare', icon: 'carbon:health-cross', count: portfolioData.filter(p => p.category === 'Healthcare').length },
    { name: 'E-commerce', icon: 'carbon:shopping-cart', count: portfolioData.filter(p => p.category === 'E-commerce').length },
    { name: 'Education', icon: 'carbon:education', count: portfolioData.filter(p => p.category === 'Education').length },
    { name: 'IoT', icon: 'carbon:iot-platform', count: portfolioData.filter(p => p.category === 'IoT').length },
    { name: 'Media', icon: 'carbon:video', count: portfolioData.filter(p => p.category === 'Media').length }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured project every 6 seconds
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % portfolioData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [portfolioData.length]);

  const filteredProjects = portfolioData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = !searchTerm || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Icon icon="carbon:portfolio" className="w-4 h-4 text-accent-400 mr-2" />
            <span className="text-sm font-medium text-white/90 tracking-wide">Portfolio</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-300 to-accent-400 bg-clip-text text-transparent">
              Our Featured
            </span>
            <br />
            <span className="text-white/90">Work</span>
          </h2>
          
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful software projects that have transformed businesses across various industries
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-5xl mx-auto mb-12">
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="carbon:search" className="w-5 h-5 text-white/50" />
            </div>
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.name
                    ? 'bg-primary-600 border-primary-500 text-white'
                    : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon icon={category.icon} className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Spotlight */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Project Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={portfolioData[activeProject].image}
                    alt={portfolioData[activeProject].title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                {/* Project Navigation */}
                <div className="flex justify-center mt-4 gap-2">
                  {portfolioData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeProject ? 'bg-primary-400 w-6' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      {portfolioData[activeProject].category}
                    </span>
                    <span className="text-white/60 text-sm">{portfolioData[activeProject].year}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {portfolioData[activeProject].title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {portfolioData[activeProject].description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData[activeProject].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-lg border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Results</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {portfolioData[activeProject].results.map((result, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Icon icon="carbon:checkmark" className="w-4 h-4 text-accent-400" />
                        <span className="text-white/80 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                  <div>
                    <div className="text-white/60 text-sm">Client</div>
                    <div className="text-white font-medium">{portfolioData[activeProject].client}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Duration</div>
                    <div className="text-white font-medium">{portfolioData[activeProject].duration}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button 
                    onClick={() => navigate(`/portfolio/${portfolioData[activeProject].id}`)}
                    className="group relative px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Icon icon="carbon:view" className="w-4 h-4 mr-2" />
                      View Case Study
                    </span>
                  </button>
                  <button 
                    onClick={() => navigate('/contact-us')}
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <Icon icon="carbon:chat" className="w-4 h-4 mr-2" />
                      Discuss Your Project
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded border border-white/20">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded border border-white/20">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="text-white/60 text-xs">
                        {project.client}
                      </div>
                      <button 
                        onClick={() => navigate(`/portfolio/${project.id}`)}
                        className="flex items-center gap-1 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                      >
                        View Details
                        <Icon icon="carbon:arrow-right" className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Icon icon="carbon:no-image" className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-white/60">Try adjusting your search terms or filter selection.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-base text-white/70 mb-8">
              Let's discuss your requirements and create a solution that drives results for your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact-us')}
                className="group relative px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:rocket" className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button 
                onClick={() => navigate('/services')}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:information" className="w-4 h-4 mr-2" />
                  Learn About Services
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase; 