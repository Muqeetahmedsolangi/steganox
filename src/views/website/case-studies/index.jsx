import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { caseStudies } from '../../../constant/data';

const CaseStudies = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const industries = [...new Set(caseStudies.map(study => study.industry))];
  
  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary-500/8 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Icon icon="carbon:chart-line-smooth" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Q HUB Case Studies</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
                Success
              </span>
              <br />
              <span className="text-white/90">Stories</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Real-world examples of how Q HUB INFORMATION has transformed businesses through innovative software solutions and cutting-edge technology
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">50+</div>
                <div className="text-sm text-white/60">Case Studies</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400">25+</div>
                <div className="text-sm text-white/60">Industries</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-white/60">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-20 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore by Industry</h2>
              <p className="text-lg text-white/70">Filter case studies by industry to see relevant success stories</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-white/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon icon="carbon:chart-area" className="w-4 h-4" />
                  All Industries ({caseStudies.length})
                </span>
              </button>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setFilter(industry)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                    filter === industry
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon icon="carbon:industry" className="w-4 h-4" />
                    {industry} ({caseStudies.filter(study => study.industry === industry).length})
                  </span>
                </button>
              ))}
            </div>
            
            {/* Results Count */}
            <div className="text-center">
              <p className="text-white/60">
                Showing <span className="text-primary-400 font-semibold">{filteredStudies.length}</span> case studies
                {filter !== 'all' && <span> in <span className="text-accent-400 font-semibold">{filter}</span></span>}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStudies.map((study, index) => (
              <article
                key={study.id}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                onClick={() => navigate(`/case-studies/${study.id}`)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge */}
                {study.isClientHighlight && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">
                      CLIENT HIGHLIGHT
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      study.status === 'Live' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {study.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20">
                      {study.industry}
                    </span>
                    <span className="text-sm text-white/60">{study.year}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-200 transition-colors">
                    {study.title}
                  </h2>

                  {/* Client */}
                  <p className="text-accent-400 font-medium mb-4">{study.client}</p>

                  {/* Challenge Preview */}
                  <p className="text-white/70 mb-6 leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.impact && Object.entries(study.impact).slice(0, 4).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-primary-300">{value}</div>
                        <div className="text-xs text-white/60 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-accent-500/10 text-accent-300 text-xs rounded border border-accent-500/20">
                        +{study.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Icon icon="carbon:time" className="w-4 h-4" />
                        {study.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon icon="carbon:user-multiple" className="w-4 h-4" />
                        {study.teamSize}
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

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-primary-900/20 to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <Icon icon="carbon:enterprise" className="w-5 h-5 text-accent-400 mr-3" />
            <span className="text-sm font-medium text-white/90 tracking-wide">Q HUB INFORMATION</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how Q HUB INFORMATION can help you achieve similar breakthrough results for your business through innovative software solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary-500/25">
              <span className="relative z-10 flex items-center justify-center">
                <Icon icon="carbon:chat" className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Start Your Project
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>
            
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
              <span className="flex items-center justify-center">
                <Icon icon="carbon:download" className="w-6 h-6 mr-3" />
                Download Case Studies
              </span>
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">500+</div>
                <div className="text-white/70 font-medium">Projects Delivered</div>
                <div className="text-white/50 text-sm">Across 25+ Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">150+</div>
                <div className="text-white/70 font-medium">Expert Developers</div>
                <div className="text-white/50 text-sm">Senior & Lead Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-white/70 font-medium">Client Satisfaction</div>
                <div className="text-white/50 text-sm">Based on 120+ Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-2">8+</div>
                <div className="text-white/70 font-medium">Years Experience</div>
                <div className="text-white/50 text-sm">Industry Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 