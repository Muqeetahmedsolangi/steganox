import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { portfolioData } from '../constant/data';

gsap.registerPlugin(ScrollTrigger);

const ParallaxShowcase = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

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

          // Hover effects
          project.addEventListener('mouseenter', () => {
            gsap.to(project, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          project.addEventListener('mouseleave', () => {
            gsap.to(project, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="portfolio" 
      className="relative py-16 md:py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-black to-blue-900/5" />
      </div>

      {/* Title */}
      <div ref={titleRef} className="text-center mb-12 md:mb-16 px-4 relative z-10">
        <div className="inline-block mb-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30">
            <Icon icon="fluent:folder-lightning-24-filled" className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Portfolio</span>
          </div>
        </div>

        <h2 
          className="font-bold mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            lineHeight: '1.1'
          }}
        >
          <span className="text-white">Success </span>
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Stories
          </span>
        </h2>
        <p 
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400"
        >
          Transforming ideas into powerful digital solutions that drive real business impact
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-1 gap-8 md:gap-12 max-w-6xl mx-auto">
          {portfolioData.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="group cursor-pointer"
            >
              <div className="relative">
                {/* Card glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(168,85,247,0.2), transparent 70%)'
                  }}
                />
                
                <div 
                  className="relative rounded-2xl overflow-hidden border transition-all duration-500 bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl"
                  style={{
                    borderColor: 'rgba(255,255,255,0.1)'
                  }}
                >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className="relative h-64 md:h-96 overflow-hidden order-2 md:order-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                    
                    {/* Industry badge */}
                    <div 
                      className="absolute top-4 left-4 px-4 py-2 rounded-full border text-xs md:text-sm font-medium"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        borderColor: 'rgba(255,255,255,0.2)',
                        color: '#ffffff'
                      }}
                    >
                      {project.industry}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="p-8 md:p-12 flex flex-col justify-between order-1 md:order-2">
                    <div>
                      {/* Client */}
                      <p 
                        className="text-sm font-medium mb-2"
                        style={{
                          color: 'rgba(168,85,247,0.8)'
                        }}
                      >
                        {project.client}
                      </p>

                      <h3 
                        className="font-bold mb-4 md:mb-6"
                        style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                          color: '#ffffff',
                          lineHeight: '1.2'
                        }}
                      >
                        {project.title}
                      </h3>

                      <p 
                        className="text-sm md:text-base mb-6 md:mb-8"
                        style={{
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: '1.6'
                        }}
                      >
                        {project.description}
                      </p>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-full text-xs md:text-sm border"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              color: 'rgba(255,255,255,0.8)',
                              borderColor: 'rgba(255,255,255,0.1)'
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
                        className="text-sm font-medium mb-4"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        PROJECT IMPACT
                      </h4>
                      <div className="grid grid-cols-3 gap-4 md:gap-6">
                        {Object.entries(project.impact).map(([key, value], idx) => (
                          <div key={idx}>
                            <div 
                              className="font-bold mb-1"
                              style={{
                                fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                              }}
                            >
                              {value}
                            </div>
                            <div 
                              className="text-xs capitalize"
                              style={{
                                color: 'rgba(255,255,255,0.5)'
                              }}
                            >
                              {key.replace(/_/g, ' ')}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* View Case Study Button */}
                      <button 
                        className="mt-8 group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30 hover:border-purple-600/50 transition-all duration-300"
                      >
                        <span className="text-white font-medium">View Case Study</span>
                        <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5 text-purple-400 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 md:mt-16">
          <button 
            className="px-6 md:px-8 py-3 md:py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
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
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParallaxShowcase; 