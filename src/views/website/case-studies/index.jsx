import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { caseStudies } from '../../../constant/data';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const studiesRef = useRef([]);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      );

      // Animate case studies cards
      studiesRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 60, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true
              }
            }
          );
        }
      });
    });

    return () => ctx.revert();
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
    navigate(`/case-study/${studyId}`);
  };

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Navigation */}
      <div className="relative z-50 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <Icon icon="fluent:arrow-left-24-filled" className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pb-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30">
                <Icon icon="fluent:folder-lightning-24-filled" className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Portfolio</span>
              </div>
            </div>
            
            <h1 
              className="font-bold mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.1',
                color: '#ffffff'
              }}
            >
              Case <span style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Studies</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}
            >
              Explore our software development projects that showcase cutting-edge technology, scalable solutions, and digital transformation across diverse industries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {caseStudies.length}+
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Projects</div>
              </div>
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {filterOptions.length - 1}+
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Industries</div>
              </div>
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  98%
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Success Rate</div>
              </div>
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  24/7
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Icon icon="fluent:search-24-filled" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'rgba(255,255,255,0.5)' }} />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)'
                }}
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 justify-center">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'text-white shadow-xl'
                      : 'text-white/70 hover:text-white'
                  }`}
                  style={{
                    background: activeFilter === filter 
                      ? 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: activeFilter === filter ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Found {filteredStudies.length} Project{filteredStudies.length !== 1 ? 's' : ''}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>
              {activeFilter !== 'All' ? `Filtered by ${activeFilter}` : 'Showing all projects'}
            </p>
          </div>

          {filteredStudies.length === 0 ? (
            <div className="text-center py-16">
              <Icon icon="fluent:folder-open-24-filled" className="w-24 h-24 mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.3)' }} />
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>No case studies found</h3>
              <p className="mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('All');
                }}
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                  color: '#ffffff'
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredStudies.map((study, index) => (
                <div
                  key={study.id}
                  ref={(el) => (studiesRef.current[index] = el)}
                  onClick={() => handleStudyClick(study.id)}
                  className="group cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                    style={{ background: 'radial-gradient(circle at center, rgba(168,85,247,0.3), transparent 70%)' }}
                  />

                  {/* Image Section */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    {/* Tech badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                         style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)' }}>
                      {study.technologies[0]}
                    </div>
                    
                    {/* Industry indicator */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)' }}>
                      <Icon icon="mdi:code-tags" className="text-purple-400" />
                    </div>

                    {/* View Project overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-black font-semibold flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Icon icon="fluent:eye-24-filled" className="w-5 h-5" />
                        View Project
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(168,85,247,0.8)' }}>
                        {study.industry}
                      </span>
                      <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        #{String(study.id).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {study.challenge.substring(0, 120)}...
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.8)',
                            border: '1px solid rgba(255,255,255,0.2)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full"
                              style={{
                                backgroundColor: 'rgba(168,85,247,0.2)',
                                color: 'rgba(168,85,247,0.8)',
                                border: '1px solid rgba(168,85,247,0.3)'
                              }}>
                          +{study.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        <Icon icon="fluent:calendar-24-filled" className="w-4 h-4" />
                        <span>{study.duration || study.year}</span>
                      </div>
                      
                      <Icon
                        icon="fluent:arrow-right-24-filled"
                        className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"
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
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 
              className="font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                color: '#ffffff'
              }}
            >
              Ready to Start Your Own Success Story?
            </h2>
            <p 
              className="text-lg mb-8"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Let's discuss how we can develop innovative software solutions for your next project
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact-us')}
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                  color: '#ffffff',
                  boxShadow: '0 10px 30px rgba(168,85,247,0.3)'
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon icon="fluent:rocket-24-filled" className="w-5 h-5" />
                  Start Your Project
                </div>
              </button>
              
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon icon="fluent:settings-24-filled" className="w-5 h-5" />
                  View Services
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 