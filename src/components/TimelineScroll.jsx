import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimelineScroll = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);

  const steps = [
    {
      phase: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, analyze market requirements, and create a comprehensive technical roadmap.",
      icon: "🔍",
      duration: "1-2 weeks",
      deliverables: ["Market Research", "Technical Specs", "Project Roadmap"]
    },
    {
      phase: "02", 
      title: "Design & Prototype",
      description: "Our design team creates intuitive user experiences with pixel-perfect interfaces and interactive prototypes.",
      icon: "🎨",
      duration: "2-3 weeks",
      deliverables: ["UI/UX Design", "Interactive Prototype", "Design System"]
    },
    {
      phase: "03",
      title: "Development Sprints",
      description: "Agile development with continuous integration, automated testing, and regular client collaboration.",
      icon: "💻",
      duration: "4-12 weeks",
      deliverables: ["Core Features", "API Development", "Quality Assurance"]
    },
    {
      phase: "04",
      title: "Testing & Optimization",
      description: "Comprehensive testing across all devices, performance optimization, and security audits.",
      icon: "🧪",
      duration: "1-2 weeks",
      deliverables: ["Performance Tests", "Security Audit", "Bug Fixes"]
    },
    {
      phase: "05",
      title: "Launch & Scale",
      description: "Seamless deployment with monitoring, documentation, and ongoing support to ensure success.",
      icon: "🚀",
      duration: "Ongoing",
      deliverables: ["Production Deploy", "Documentation", "Support & Maintenance"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin section during scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
      });

      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=200",
            end: "top center",
            scrub: 1
          }
        }
      );

      // Animated timeline line
      gsap.fromTo(lineRef.current,
        {
          scaleY: 0,
          transformOrigin: "top"
        },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1
          }
        }
      );

      // Animate each step with stagger
      stepsRef.current.forEach((step, index) => {
        if (step) {
          // Initial state
          gsap.set(step, {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            scale: 0.8
          });

          // Animate in
          gsap.to(step, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
              onUpdate: (self) => {
                const progress = self.progress;
                const stepProgress = (progress * steps.length) - index;
                const clampedProgress = Math.max(0, Math.min(1, stepProgress));
                
                gsap.set(step, {
                  opacity: clampedProgress,
                  x: (index % 2 === 0 ? -100 : 100) * (1 - clampedProgress),
                  scale: 0.8 + (0.2 * clampedProgress)
                });
              }
            }
          });

          // Hover effects
          step.addEventListener('mouseenter', () => {
            gsap.to(step, {
              scale: 1.05,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          step.addEventListener('mouseleave', () => {
            gsap.to(step, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="process"
      className="relative py-20 overflow-hidden"
      style={{ 
        backgroundColor: '#000000',
        minHeight: '150vh'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 
            className="font-bold mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#ffffff'
            }}
          >
            Our Process
          </h2>
          <p 
            style={{
              fontSize: '1.3rem',
              color: 'rgba(255,255,255,0.6)'
            }}
          >
            From concept to deployment, we follow a proven methodology
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center line */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2"
            style={{
              width: '3px',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 80%, transparent 100%)'
            }}
          >
            <div 
              ref={lineRef}
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, #a855f7 0%, #3b82f6 100%)',
                transformOrigin: 'top'
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => stepsRef.current[index] = el}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`w-full max-w-lg ${index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}
                >
                  <div 
                    className="relative rounded-3xl p-8 border cursor-pointer group"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(20px)',
                      borderColor: 'rgba(255,255,255,0.1)'
                    }}
                  >
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(168,85,247,0.3) 0%, rgba(59,130,246,0.3) 100%)',
                        transform: 'scale(1.05)'
                      }}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center border"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderColor: 'rgba(255,255,255,0.2)',
                            fontSize: '2rem'
                          }}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <div 
                            style={{
                              color: 'rgba(255,255,255,0.5)',
                              fontWeight: '600',
                              fontSize: '0.9rem'
                            }}
                          >
                            PHASE {step.phase}
                          </div>
                          <h3 
                            className="font-bold"
                            style={{
                              fontSize: '1.5rem',
                              color: '#ffffff'
                            }}
                          >
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p 
                        className="mb-6"
                        style={{
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: '1.6'
                        }}
                      >
                        {step.description}
                      </p>

                      {/* Duration */}
                      <div 
                        className="inline-block px-3 py-1 rounded-full mb-6"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: '0.9rem'
                        }}
                      >
                        ⏱️ {step.duration}
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 
                          className="font-semibold mb-3"
                          style={{
                            color: '#ffffff',
                            fontSize: '1rem'
                          }}
                        >
                          Key Deliverables:
                        </h4>
                        <div className="space-y-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-2"
                              style={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: '0.9rem'
                              }}
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full"
                                style={{
                                  backgroundColor: '#a855f7'
                                }}
                              />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connection line to center */}
                    <div 
                      className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-16 h-0.5 transform -translate-y-1/2`}
                      style={{
                        background: 'linear-gradient(to right, rgba(255,255,255,0.2), transparent)',
                        transform: index % 2 === 0 ? 'translateY(-50%)' : 'translateY(-50%) scaleX(-1)'
                      }}
                    />
                  </div>
                </div>

                {/* Timeline dot */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 z-20"
                  style={{
                    backgroundColor: '#000000',
                    borderColor: '#a855f7'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineScroll; 