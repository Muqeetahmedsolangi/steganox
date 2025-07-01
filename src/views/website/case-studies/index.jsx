import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from "@iconify/react/dist/iconify.js";
import MainHeading from "../../../components/Heading/MainHeading";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { caseStudies, industries, technologies } from '../../../constant/data';

gsap.registerPlugin(ScrollTrigger);

function CaseStudies() {
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const studiesRef = useRef([]);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }

    // Animate case studies cards
    studiesRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    });
  }, [filteredStudies]);

  // Filter case studies
  useEffect(() => {
    let filtered = caseStudies;

    if (activeFilter !== 'All') {
      filtered = filtered.filter(study => study.industry === activeFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(study =>
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredStudies(filtered);
  }, [activeFilter, searchTerm]);

  const filterOptions = ['All', ...Array.from(new Set(caseStudies.map(study => study.industry)))];

  const handleStudyClick = (studyId) => {
    navigate(`/case-studies/${studyId}`);
  };

  return (
    <div className="wrapper">
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-void-950 via-void-900 to-void-950">
        {/* Professional Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyber-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
          <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-neon-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-500/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-tech-grid opacity-10" />
          
          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-6 h-6 border-2 border-cyber-500/20 rotate-45 animate-spin hidden sm:block" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-20 left-20 w-4 h-4 bg-neon-400/30 rounded-full animate-ping hidden sm:block" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
                <Link to="/" className="hover:text-cyber-400 transition-colors">Home</Link>
                <Icon icon="mdi:chevron-right" className="w-4 h-4" />
                <span className="text-cyber-400">Case Studies</span>
              </nav>
              
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-500/20 backdrop-blur-sm rounded-full text-cyber-400 text-sm font-semibold border border-cyber-500/30">
                <Icon icon="mdi:briefcase" className="w-4 h-4" />
                Our Portfolio
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-neon-400 via-neon-500 to-cyber-400 bg-clip-text text-transparent inline-block font-bold" 
                    style={{ 
                      WebkitBackgroundClip: 'text', 
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      display: 'inline-block'
                    }}>
                Case Studies
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore our engineering excellence through real-world projects that showcase innovation, 
              precision, and transformative solutions across diverse industries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyber-400 mb-2">{caseStudies.length}+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neon-400 mb-2">{filterOptions.length - 1}+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-quantum-400 mb-2">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyber-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 bg-void-950 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Icon icon="mdi:magnify" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-cyber-500/50 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 justify-center">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-cyber-500 to-cyber-600 text-white shadow-lg shadow-cyber-500/30'
                      : 'bg-void-800/50 text-gray-300 hover:bg-void-700/50 hover:text-white border border-void-600/50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-void-950 to-void-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-neon-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '18s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-cyber-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '22s', animationDelay: '4s' }} />
          <div className="absolute inset-0 bg-tech-grid opacity-5" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Found {filteredStudies.length} Project{filteredStudies.length !== 1 ? 's' : ''}
            </h2>
            <p className="text-gray-400">
              {activeFilter !== 'All' ? `Filtered by ${activeFilter}` : 'Showing all projects'}
            </p>
          </div>

          {filteredStudies.length === 0 ? (
            <div className="text-center py-16">
              <Icon icon="mdi:folder-open" className="w-24 h-24 text-gray-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-400 mb-4">No case studies found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('All');
                }}
                className="px-6 py-3 bg-cyber-500 text-white rounded-xl hover:bg-cyber-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, index) => (
                <div
                  key={study.id}
                  ref={(el) => (studiesRef.current[index] = el)}
                  onClick={() => handleStudyClick(study.id)}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl border border-void-700/50 hover:border-cyber-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyber-500/20"
                >
                  {/* Image Section */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void-900/90 via-void-900/20 to-transparent" />
                    
                    {/* Tech badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-cyber-500/90 backdrop-blur-md rounded-lg">
                      <span className="text-xs font-semibold text-white">{study.technologies[0]}</span>
                    </div>
                    
                    {/* Industry indicator */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-void-900/80 backdrop-blur-md rounded-lg flex items-center justify-center border border-cyber-500/30">
                      <Icon icon="carbon:industry" className="text-cyber-400" />
                    </div>

                    {/* View Project overlay */}
                    <div className="absolute inset-0 bg-cyber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-cyber-900 font-semibold flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Icon icon="mdi:eye" className="w-5 h-5" />
                        View Project
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-cyber-400 font-semibold uppercase tracking-wider">{study.industry}</span>
                      <span className="text-xs text-gray-500 font-mono">#{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-400 transition-colors duration-300 line-clamp-2">{study.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">{study.challenge}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-void-800/60 text-gray-300 border border-void-600/40"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-cyber-700/40 text-cyber-300 border border-cyber-600/30">
                          +{study.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-void-700/50">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Icon icon="mdi:calendar" className="w-4 h-4" />
                        <span>{study.duration || '3-6 months'}</span>
                      </div>
                      
                      <Icon
                        icon="mdi:arrow-right"
                        className="w-5 h-5 text-cyber-400 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-500/10 to-neon-500/10" />
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Own Success Story?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can engineer innovative solutions for your next project
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="group px-8 py-4 bg-gradient-to-r from-cyber-500 to-cyber-600 rounded-2xl font-bold text-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-500/50 border border-cyber-400/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-400/20 to-cyber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <Icon icon="mdi:rocket" className="w-5 h-5" />
                Start Your Project
              </span>
            </Link>
            
            <Link
              to="/services"
              className="group px-8 py-4 border-2 border-cyber-500/50 rounded-2xl font-bold text-cyber-400 hover:bg-cyber-500/10 hover:border-cyber-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-500/30 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-2">
                <Icon icon="mdi:cog" className="w-5 h-5" />
                View Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies; 