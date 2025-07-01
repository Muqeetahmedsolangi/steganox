import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndustriesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const hexRefs = useRef([]);

  const industries = [
    {
      icon: "💰",
      title: "Fintech & Banking",
      description: "Digital banking solutions, payment gateways, trading platforms, and blockchain integration",
      color: "#4F46E5"
    },
    {
      icon: "🏥",
      title: "Healthcare & MedTech",
      description: "Telemedicine platforms, patient management systems, and health monitoring apps",
      color: "#059669"
    },
    {
      icon: "🛍️",
      title: "Retail & eCommerce",
      description: "Online marketplaces, inventory management, and omnichannel retail solutions",
      color: "#DC2626"
    },
    {
      icon: "🏭",
      title: "Manufacturing & Logistics",
      description: "Supply chain optimization, IoT integration, and warehouse management systems",
      color: "#7C3AED"
    },
    {
      icon: "📚",
      title: "Education & eLearning",
      description: "Learning management systems, virtual classrooms, and educational content platforms",
      color: "#2563EB"
    },
    {
      icon: "✈️",
      title: "Travel & Hospitality",
      description: "Booking platforms, property management systems, and travel experience apps",
      color: "#F59E0B"
    },
    {
      icon: "🏢",
      title: "Enterprise & SaaS",
      description: "Business process automation, CRM systems, and enterprise resource planning",
      color: "#8B5CF6"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "top top",
            scrub: 1
          }
        }
      );

      // Hexagon animations
      hexRefs.current.forEach((hex, index) => {
        if (hex) {
          // Initial state
          gsap.set(hex, {
            scale: 0,
            rotation: -180,
            opacity: 0
          });

          // Scroll triggered animation
          ScrollTrigger.create({
            trigger: hex,
            start: "top bottom-=100",
            onEnter: () => {
              gsap.to(hex, {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 1,
                delay: (index % 3) * 0.1,
                ease: "back.out(1.5)"
              });
            },
            onLeaveBack: () => {
              gsap.to(hex, {
                scale: 0,
                rotation: -180,
                opacity: 0,
                duration: 0.8,
                ease: "power2.in"
              });
            }
          });

          // Hover effects
          hex.addEventListener('mouseenter', () => {
            gsap.to(hex, {
              scale: 1.1,
              z: 50,
              duration: 0.3,
              ease: "power2.out"
            });
            
            gsap.to(hex.querySelector('.hex-icon'), {
              scale: 1.2,
              rotation: 360,
              duration: 0.6,
              ease: "power2.out"
            });
          });

          hex.addEventListener('mouseleave', () => {
            gsap.to(hex, {
              scale: 1,
              z: 0,
              duration: 0.3,
              ease: "power2.out"
            });
            
            gsap.to(hex.querySelector('.hex-icon'), {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: "power2.out"
            });
          });
        }
      });

      // Background animation
      gsap.to(".industry-bg-gradient", {
        backgroundPosition: "100% 100%",
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Animated gradient background */}
      <div 
        className="industry-bg-gradient absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(168,85,247,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(59,130,246,0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(236,72,153,0.3) 0%, transparent 50%)
          `,
          backgroundSize: '200% 200%'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
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
            className="max-w-3xl mx-auto text-xl"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Delivering tailored solutions across diverse sectors with deep domain expertise
          </p>
        </div>

        {/* Hexagon Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hexagon-grid">
            {industries.map((industry, index) => (
              <div
                key={index}
                ref={el => hexRefs.current[index] = el}
                className="group relative cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <div 
                  className="relative p-8 rounded-2xl border transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(20px)',
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(0)'
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="hex-icon text-6xl mb-6 transition-transform duration-300"
                    style={{ 
                      display: 'inline-block',
                      filter: `drop-shadow(0 0 20px ${industry.color}50)`
                    }}
                  >
                    {industry.icon}
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: '#ffffff' }}
                  >
                    {industry.title}
                  </h3>
                  
                  <p 
                    className="text-sm"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {industry.description}
                  </p>

                  {/* Hover gradient */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${industry.color}20 0%, transparent 100%)`,
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Glow effect */}
                  <div 
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
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
        <div className="text-center mt-16">
          <p 
            className="text-lg mb-8"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Don't see your industry? We adapt our expertise to meet unique sector requirements.
          </p>
          <button 
            className="px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
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