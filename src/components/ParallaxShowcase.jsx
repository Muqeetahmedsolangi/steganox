import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { portfolioData } from '../constant/data';

gsap.registerPlugin(ScrollTrigger);

const ParallaxShowcase = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // Project cards animation
      projectRefs.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(project,
            {
              opacity: 0,
              y: 60,
              scale: 0.95
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: project,
                start: "top 85%",
                once: true
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleViewCaseStudy = (projectIndex) => {
    navigate(`/case-study/${projectIndex + 1}`);
  };

  return (
    <section 
      ref={sectionRef} 
      id="portfolio" 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30">
              <Icon icon="fluent:folder-lightning-24-filled" className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Portfolio</span>
            </div>
          </div>

          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1.1',
              color: '#ffffff'
            }}
          >
            Success <span style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Stories</span>
          </h2>
          
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Transforming ideas into powerful digital solutions that drive real business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
          {portfolioData.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="group cursor-pointer"
              onClick={() => handleViewCaseStudy(index)}
            >
              <div 
                className="relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(168,85,247,0.3), transparent 70%)'
                  }}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden shadow-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                    {/* Industry Badge */}
                    <div 
                      className="absolute top-4 left-4 px-4 py-2 rounded-full text-xs md:text-sm font-medium z-20"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#ffffff'
                      }}
                    >
                      {project.industry}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-12 flex flex-col justify-between bg-black/80 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
                    <div>
                      {/* Client */}
                      <p 
                        className="text-xs md:text-sm font-medium mb-2 md:mb-3"
                        style={{ color: 'rgba(168,85,247,0.8)' }}
                      >
                        {project.client}
                      </p>

                      {/* Title */}
                      <h3 
                        className="font-bold mb-3 md:mb-4"
                        style={{
                          fontSize: 'clamp(1.3rem, 3vw, 2.2rem)',
                          color: '#ffffff',
                          lineHeight: '1.2'
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p 
                        className="text-sm md:text-base mb-4 md:mb-6"
                        style={{
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: '1.6'
                        }}
                      >
                        {project.description}
                      </p>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                        {project.technologies.slice(0, 6).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-full text-xs md:text-sm"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.1)',
                              color: 'rgba(255,255,255,0.9)',
                              border: '1px solid rgba(255,255,255,0.2)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Stats */}
                    <div>
                      <h4 
                        className="text-xs uppercase tracking-wider mb-3 md:mb-4 font-semibold"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Project Impact
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 md:mb-6">
                        {Object.entries(project.impact).map(([key, value], idx) => (
                          <div key={idx}>
                            <div 
                              className="font-bold mb-1"
                              style={{
                                fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                              }}
                            >
                              {value}
                            </div>
                            <div 
                              className="text-xs capitalize"
                              style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                              {key.replace(/_/g, ' ')}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* View Case Study Button */}
                      <button 
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30 hover:border-purple-600/50 transition-all duration-300 group/btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewCaseStudy(index);
                        }}
                      >
                        <span className="text-white font-medium">View Case Study</span>
                        <Icon icon="fluent:arrow-right-24-filled" className="w-4 h-4 text-purple-400 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(168,85,247,0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 15px 40px rgba(168,85,247,0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 10px 30px rgba(168,85,247,0.3)';
              }}
              onClick={() => navigate('/portfolio')}
            >
              <div className="flex items-center gap-2">
                <Icon icon="mdi:briefcase" className="w-5 h-5" />
                View Full Portfolio
              </div>
            </button>
            
            <button 
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-white/5 border border-white/20 text-white hover:bg-white/10"
              onClick={() => navigate('/case-studies')}
            >
              <div className="flex items-center gap-2">
                <Icon icon="mdi:view-grid" className="w-5 h-5" />
                Case Studies
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxShowcase; 