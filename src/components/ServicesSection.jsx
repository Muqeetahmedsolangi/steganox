import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '../constant/data';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
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
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  const handleViewAllServices = () => {
    navigate('/services');
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
              OUR SERVICES
            </span>
          </div>

          <h2 
            ref={titleRef}
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1.1',
              color: '#ffffff'
            }}
          >
            Engineering{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p 
            className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            From concept to creation, we deliver precision-engineered solutions that transform your vision into reality
          </p>
        </div>

        {/* Services cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardRefs.current[index] = el}
              onClick={() => handleServiceClick(service.id)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ background: `radial-gradient(circle at center, ${service.gradient.includes('neon') ? '#00ff9f' : service.gradient.includes('cyber') ? '#00d4ff' : '#a855f7'}, transparent 70%)` }}
              />

              {/* Card content */}
              <div className="p-8 relative z-10">
                {/* Icon and title */}
                <div className="mb-6">
                  <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                       style={{ 
                         background: `linear-gradient(135deg, ${service.gradient})`,
                         backgroundOpacity: 0.1
                       }}>
                    <Icon 
                      icon={service.icon} 
                      className="w-8 h-8"
                      style={{ color: service.gradient.includes('neon') ? '#00ff9f' : service.gradient.includes('cyber') ? '#00d4ff' : '#a855f7' }}
                    />
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ color: '#ffffff' }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p 
                  className="text-base mb-8 leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="text-sm font-medium mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Key Features
                  </div>
                  <div className="space-y-3">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                        <span
                          className="text-sm"
                          style={{ color: 'rgba(255,255,255,0.8)' }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <button 
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white hover:border-white/30 transition-all duration-300 group/btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service.id);
                  }}
                >
                  <span className="font-medium">Learn More</span>
                  <Icon icon="fluent:arrow-right-24-filled" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Gradient overlay */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}
              />
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleViewAllServices}
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
            >
              <div className="flex items-center gap-2">
                <Icon icon="fluent:grid-24-filled" className="w-5 h-5" />
                View All Services
              </div>
            </button>
            
            <button 
              onClick={() => navigate('/portfolio')}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-white/5 border border-white/20 text-white hover:bg-white/10"
            >
              <div className="flex items-center gap-2">
                <Icon icon="mdi:briefcase" className="w-5 h-5" />
                View Portfolio
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 