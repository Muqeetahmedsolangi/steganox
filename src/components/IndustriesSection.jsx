import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { industriesData } from '../constant/data';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const IndustriesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const hexRefs = useRef([]);
  const navigate = useNavigate();
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with stagger
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // Industry cards animations with improved timing
      hexRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            {
              scale: 0.9,
              opacity: 0,
              y: 40,
              rotationY: 15
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              rotationY: 0,
              duration: 0.8,
              delay: index * 0.15,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true
              }
            }
          );

          // Enhanced hover effects
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.03,
              y: -8,
              duration: 0.4,
              ease: "power2.out"
            });
            
            gsap.to(card.querySelector('.industry-icon'), {
              scale: 1.15,
              rotation: 5,
              duration: 0.5,
              ease: "power2.out"
            });

            gsap.to(card.querySelector('.icon-bg'), {
              scale: 1.1,
              opacity: 0.8,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out"
            });
            
            gsap.to(card.querySelector('.industry-icon'), {
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "power2.out"
            });

            gsap.to(card.querySelector('.icon-bg'), {
              scale: 1,
              opacity: 0.4,
              duration: 0.4,
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
      className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden"
      aria-labelledby="industries-heading"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `float ${3 + i}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 
            id="industries-heading"
            ref={titleRef}
            className="font-bold mb-6 md:mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#ffffff',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Industries We{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Transform
            </span>
          </h2>
          <p 
            className="max-w-4xl mx-auto text-lg md:text-xl px-4 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            Delivering cutting-edge software solutions across diverse sectors with deep domain expertise and innovative technology
          </p>
        </div>

        {/* Industries Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {industriesData.map((industry, index) => (
              <article
                key={index}
                ref={el => hexRefs.current[index] = el}
                className="group relative cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${industry.title}`}
              >
                <div 
                  className="relative p-8 md:p-10 rounded-2xl md:rounded-3xl border transition-all duration-500 h-full"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Icon with gradient background */}
                  <div className="relative mb-6 md:mb-8">
                    <div 
                      className="icon-bg absolute inset-0 rounded-2xl opacity-40 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${industry.gradient})`,
                        filter: 'blur(20px)'
                      }}
                    />
                    <div 
                      className="industry-icon relative z-10 text-5xl md:text-6xl transition-all duration-500 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl"
                      style={{ 
                        color: industry.color,
                        background: `linear-gradient(135deg, ${industry.gradient})`,
                        boxShadow: `0 8px 32px ${industry.color}30`
                      }}
                    >
                      <Icon icon={industry.icon} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-tight"
                    style={{ color: '#ffffff' }}
                  >
                    {industry.title}
                  </h3>
                  
                  <p 
                    className="text-base md:text-lg mb-6 leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    {industry.description}
                  </p>

                  {/* Clients badge */}
                  <div 
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300"
                    style={{
                      backgroundColor: `${industry.color}15`,
                      color: industry.color,
                      borderColor: `${industry.color}30`
                    }}
                  >
                    <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: industry.color }} />
                    {industry.clients}
                  </div>

                  {/* Hover gradient overlay */}
                  <div 
                    className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${industry.color}15 0%, transparent 100%)`,
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Enhanced glow effect */}
                  <div 
                    className="absolute -inset-1 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${industry.color}40 0%, transparent 100%)`,
                      zIndex: -1
                    }}
                  />

                  {/* Subtle border glow on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      border: `1px solid ${industry.color}40`,
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <p 
            className="text-lg md:text-xl mb-8 md:mb-10 px-4 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            Don't see your industry? We adapt our expertise to meet unique sector requirements and deliver custom solutions.
          </p>
          <button
            onClick={() => navigate('/contact-us')} 
            className="group relative px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/30"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              color: '#ffffff',
              boxShadow: '0 10px 40px rgba(168,85,247,0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 15px 50px rgba(168,85,247,0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 10px 40px rgba(168,85,247,0.4)';
            }}
          >
            <span className="relative z-10">Discuss Your Industry Needs</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection; 