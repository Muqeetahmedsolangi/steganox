import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { processData } from '../constant/data';

gsap.registerPlugin(ScrollTrigger);

const TimelineScroll = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // Timeline line animation
      gsap.fromTo(lineRef.current,
        {
          scaleY: 0,
          transformOrigin: "top"
        },
        {
          scaleY: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true
          }
        }
      );

      // Animate each step
      stepsRef.current.forEach((step, index) => {
        if (step) {
          const isDesktop = window.innerWidth >= 768;
          const isLeftSide = index % 2 === 0;

          // Set initial state
          gsap.set(step, {
            opacity: 0,
            scale: 0.8
          });

          // Set initial x position based on side
          if (isDesktop) {
            gsap.set(step, {
              x: isLeftSide ? -150 : 150
            });
          } else {
            gsap.set(step, {
              x: -50
            });
          }

          // Create timeline for each card
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              once: true
            }
          });

          // Animate in
          tl.to(step, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out"
          })
          .to(step.querySelector('.step-card'), {
            rotateY: 0,
            duration: 1,
            ease: "power2.out"
          }, "-=0.8");

          // Add initial rotation for 3D effect
          if (step.querySelector('.step-card')) {
            gsap.set(step.querySelector('.step-card'), {
              rotateY: isLeftSide ? -15 : 15,
              transformPerspective: 1000
            });
          }

          // Enhanced hover effects
          const card = step.querySelector('.step-card');
          if (card) {
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                scale: 1.03,
                y: -8,
                rotateY: isLeftSide ? 3 : -3,
                boxShadow: "0 25px 50px rgba(168,85,247,0.4)",
                duration: 0.4,
                ease: "power2.out"
              });
              gsap.to(card.querySelector('.step-glow'), {
                opacity: 1,
                duration: 0.3
              });
              gsap.to(card.querySelector('.card-bg'), {
                opacity: 1,
                duration: 0.3
              });
            });

            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                scale: 1,
                y: 0,
                rotateY: 0,
                boxShadow: "none",
                duration: 0.4,
                ease: "power2.out"
              });
              gsap.to(card.querySelector('.step-glow'), {
                opacity: 0,
                duration: 0.3
              });
              gsap.to(card.querySelector('.card-bg'), {
                opacity: 0,
                duration: 0.3
              });
            });
          }
        }
      });

      // Background particles animation
      gsap.to('.timeline-particle', {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        opacity: "random(0.3, 0.8)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Process icons mapping
  const processIcons = {
    '🔍': 'fluent:search-sparkle-24-filled',
    '📐': 'fluent:design-ideas-24-filled',
    '💻': 'fluent:code-24-filled',
    '✅': 'fluent:checkmark-circle-24-filled',
    '🚀': 'fluent:rocket-24-filled'
  };

  // Phase number icons
  const phaseIcons = {
    '01': 'fluent:number-circle-1-24-filled',
    '02': 'fluent:number-circle-2-24-filled',
    '03': 'fluent:number-circle-3-24-filled',
    '04': 'fluent:number-circle-4-24-filled',
    '05': 'fluent:number-circle-5-24-filled'
  };

  const TimelineCard = ({ step, index, isLeftSide }) => (
    <div className="relative group max-w-md w-full">
      {/* Card glow */}
      <div 
        className="step-glow absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, rgba(168,85,247,0.3), transparent 70%)`
        }}
      />
      
      <div 
        className="step-card relative rounded-2xl p-8 bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl border cursor-pointer transition-all duration-300 overflow-hidden"
        style={{
          borderColor: 'rgba(255,255,255,0.1)'
        }}
      >
        {/* Background gradient */}
        <div 
          className="card-bg absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 transition-opacity duration-500"
        />
        
        {/* Phase badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 relative z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(59,130,246,0.2))',
            border: '1px solid rgba(168,85,247,0.3)'
          }}
        >
          <Icon icon={phaseIcons[step.phase] || 'fluent:number-circle-1-24-filled'} className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300">PHASE {step.phase}</span>
        </div>

        {/* Icon and title */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div 
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 p-0.5"
          >
            <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
              <Icon icon={processIcons[step.icon] || 'fluent:sparkle-24-filled'} className="w-7 h-7 text-white" />
            </div>
          </div>
          <h3 
            className="font-bold text-2xl text-white"
          >
            {step.title}
          </h3>
        </div>

        {/* Description */}
        <p 
          className="mb-6 text-base text-gray-300 leading-relaxed relative z-10"
        >
          {step.description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <Icon icon="fluent:clock-24-filled" className="w-5 h-5 text-purple-400" />
          <span className="text-sm text-gray-400">Duration:</span>
          <span className="text-sm font-medium text-white">
            {step.duration}
          </span>
        </div>

        {/* Deliverables */}
        <div className="space-y-3 relative z-10">
          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <Icon icon="fluent:clipboard-task-list-24-filled" className="w-4 h-4 text-purple-400" />
            Key Deliverables
          </h4>
          <div className="flex flex-wrap gap-2">
            {step.deliverables.map((deliverable, idx) => (
              <span 
                key={idx}
                className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-600/20 text-gray-300 hover:border-purple-600/40 transition-colors duration-300"
              >
                {deliverable}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef} 
      id="process"
      className="relative py-16 md:py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="timeline-particle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 2 === 0 ? 'rgba(168,85,247,0.4)' : 'rgba(59,130,246,0.4)',
              borderRadius: '50%'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30">
              <Icon icon="fluent:task-list-square-sparkle-24-filled" className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Development Process</span>
            </div>
          </div>

          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1.1'
            }}
          >
            <span className="text-white">How We </span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Build Success
            </span>
          </h2>
          <p 
            className="text-lg md:text-xl px-4 max-w-3xl mx-auto text-gray-400"
          >
            From concept to deployment, we follow a proven methodology that ensures quality at every step
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center line for desktop */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden md:block"
            style={{
              width: '2px',
              backgroundColor: 'rgba(255,255,255,0.1)'
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

          {/* Mobile line */}
          <div 
            className="absolute left-8 top-0 bottom-0 md:hidden"
            style={{
              width: '2px',
              background: 'linear-gradient(to bottom, #a855f7 0%, #3b82f6 100%)'
            }}
          />

          {/* Steps */}
          <div className="space-y-8 md:space-y-16">
            {processData.map((step, index) => {
              const isLeftSide = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={el => stepsRef.current[index] = el}
                  className="relative"
                >
                  {/* Desktop layout */}
                  <div className="hidden md:block">
                    <div className="flex items-center relative">
                      {/* Left side card (for even indices: 0,2,4 = Phase 1,3,5) */}
                      {isLeftSide ? (
                        <>
                          <div className="w-1/2 pr-8 flex justify-end">
                            <TimelineCard step={step} index={index} isLeftSide={true} />
                          </div>
                          
                          {/* Timeline dot */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                            <div className="relative">
                              <div 
                                className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-blue-600"
                              />
                              <div 
                                className="absolute inset-0 w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 animate-ping opacity-75"
                              />
                            </div>
                          </div>
                          
                          {/* Empty right side */}
                          <div className="w-1/2 pl-8"></div>
                        </>
                      ) : (
                        /* Right side card (for odd indices: 1,3 = Phase 2,4) */
                        <>
                          {/* Empty left side */}
                          <div className="w-1/2 pr-8"></div>
                          
                          {/* Timeline dot */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                            <div className="relative">
                              <div 
                                className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-blue-600"
                              />
                              <div 
                                className="absolute inset-0 w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 animate-ping opacity-75"
                              />
                            </div>
                          </div>
                          
                          <div className="w-1/2 pl-8 flex justify-start">
                            <TimelineCard step={step} index={index} isLeftSide={false} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden pl-16 w-full">
                    <div className="relative group">
                      <div 
                        className="step-glow absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, rgba(168,85,247,0.2), transparent 70%)`
                        }}
                      />
                      
                      <div 
                        className="step-card relative rounded-xl p-6 bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl border overflow-hidden"
                        style={{
                          borderColor: 'rgba(255,255,255,0.1)'
                        }}
                      >
                        {/* Phase badge */}
                        <div 
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
                          style={{
                            background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(59,130,246,0.2))',
                            border: '1px solid rgba(168,85,247,0.3)'
                          }}
                        >
                          <Icon icon={phaseIcons[step.phase] || 'fluent:number-circle-1-24-filled'} className="w-3.5 h-3.5 text-purple-400" />
                          <span className="text-purple-300">PHASE {step.phase}</span>
                        </div>

                        {/* Icon and title */}
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 p-0.5 flex-shrink-0"
                          >
                            <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                              <Icon icon={processIcons[step.icon] || 'fluent:sparkle-24-filled'} className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <h3 className="font-bold text-lg text-white">
                            {step.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="mb-4 text-sm text-gray-300 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Duration */}
                        <div className="flex items-center gap-2 mb-3">
                          <Icon icon="fluent:clock-16-filled" className="w-4 h-4 text-purple-400" />
                          <span className="text-xs text-white">{step.duration}</span>
                        </div>

                        {/* Deliverables */}
                        <div className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-2 text-xs text-gray-300"
                            >
                              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mobile timeline dot */}
                    <div className="absolute left-8 top-8 transform -translate-x-1/2 z-20">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600" />
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 animate-ping opacity-75" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineScroll; 