import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { industriesData } from '../constant/data';

gsap.registerPlugin(ScrollTrigger);

const IndustriesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const hexRefs = useRef([]);

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

      // Industry cards animations
      hexRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            {
              scale: 0.8,
              opacity: 0,
              y: 30
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: (index % 3) * 0.1,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true
              }
            }
          );

          // Hover effects
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });
            
            gsap.to(card.querySelector('.industry-icon'), {
              scale: 1.2,
              rotation: 10,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
            
            gsap.to(card.querySelector('.industry-icon'), {
              scale: 1,
              rotation: 0,
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
      className="py-16 md:py-24 lg:py-32 bg-black overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="font-bold mb-4 md:mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#ffffff',
              lineHeight: '1.1'
            }}
          >
            Industries We{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Serve
            </span>
          </h2>
          <p 
            className="max-w-3xl mx-auto text-base md:text-xl px-4"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Delivering tailored solutions across diverse sectors with deep domain expertise
          </p>
        </div>

        {/* Industries Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {industriesData.map((industry, index) => (
              <div
                key={index}
                ref={el => hexRefs.current[index] = el}
                className="group relative cursor-pointer"
              >
                <div 
                  className="relative p-6 md:p-8 rounded-xl md:rounded-2xl border transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="industry-icon text-4xl md:text-5xl mb-4 md:mb-6 transition-transform duration-300"
                    style={{ 
                      display: 'inline-block',
                      filter: `drop-shadow(0 0 20px ${industry.color}50)`
                    }}
                  >
                    {industry.icon}
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-lg md:text-xl font-bold mb-2 md:mb-3"
                    style={{ color: '#ffffff' }}
                  >
                    {industry.title}
                  </h3>
                  
                  <p 
                    className="text-sm md:text-base mb-4"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {industry.description}
                  </p>

                  {/* Clients badge */}
                  <div 
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${industry.color}20`,
                      color: industry.color,
                      border: `1px solid ${industry.color}40`
                    }}
                  >
                    {industry.clients}
                  </div>

                  {/* Hover gradient */}
                  <div 
                    className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${industry.color}20 0%, transparent 100%)`,
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Glow effect */}
                  <div 
                    className="absolute -inset-1 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${industry.color}40 0%, transparent 100%)`,
                      zIndex: -1
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p 
            className="text-base md:text-lg mb-6 md:mb-8 px-4"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Don't see your industry? We adapt our expertise to meet unique sector requirements.
          </p>
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
            Discuss Your Industry Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection; 