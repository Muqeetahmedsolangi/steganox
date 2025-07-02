import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData } from '../constant/data';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

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

      // Cards animation
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 60,
              scale: 0.9
            },
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

          // Hover animations
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.03,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });

            const techItems = card.querySelectorAll('.tech-item');
            gsap.to(techItems, {
              scale: 1.1,
              stagger: 0.05,
              duration: 0.3,
              ease: "back.out(1.2)"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });

            const techItems = card.querySelectorAll('.tech-item');
            gsap.to(techItems, {
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
            Services We{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Offer
            </span>
          </h2>
          <p 
            className="max-w-2xl mx-auto text-base md:text-lg px-4"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Cutting-edge solutions that transform your vision into digital reality
          </p>
        </div>

        {/* Services cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="group relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Card content */}
              <div className="p-6 md:p-8 relative z-10">
                {/* Icon and title */}
                <div className="mb-6">
                  <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
                  <h3 
                    className="text-xl md:text-2xl font-bold mb-1"
                    style={{ color: '#ffffff' }}
                  >
                    {service.title}
                  </h3>
                  <div 
                    className="text-base md:text-lg font-medium"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradient.split(' ')[1]} 0%, ${service.gradient.split(' ')[3]} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {service.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p 
                  className="text-sm md:text-base mb-6 leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <div className="text-xs font-medium mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Key Features
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="tech-item text-xs px-3 py-1.5 rounded-full border"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          borderColor: 'rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.8)'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gradient overlay */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}
              />

              {/* Border glow on hover */}
              <div 
                className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.gradient.split(' ')[1]}20 0%, ${service.gradient.split(' ')[3]}20 100%)`,
                  filter: 'blur(1px)'
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
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
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 