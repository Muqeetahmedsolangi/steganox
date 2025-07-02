import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseData } from '../constant/data';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin section for dramatic effect on desktop only
      if (window.innerWidth > 768) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          pinSpacing: true,
        });
      }

      // Background parallax
      gsap.to(bgRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.7
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
            scrub: window.innerWidth > 768 ? 1 : false,
            once: window.innerWidth <= 768
          }
        }
      );

      // Cards animation with stagger and 3D effect
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Set initial state
          gsap.set(card, {
            y: 200,
            opacity: 0,
            rotateX: -45,
            transformPerspective: 1000,
            transformOrigin: "center bottom"
          });

          // Scroll animation
          if (window.innerWidth > 768) {
            gsap.to(card, {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=100%",
                scrub: 1,
                onUpdate: (self) => {
                  const progress = self.progress;
                  const cardProgress = (progress * 4) - index;
                  const clampedProgress = Math.max(0, Math.min(1, cardProgress));
                  
                  gsap.set(card, {
                    y: 200 * (1 - clampedProgress),
                    opacity: clampedProgress,
                    rotateX: -45 * (1 - clampedProgress)
                  });
                }
              }
            });
          } else {
            // Simple fade in for mobile
            gsap.to(card, {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true
              }
            });
          }

          // Hover effect
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              y: -20,
              boxShadow: "0 30px 60px rgba(168,85,247,0.4)",
              duration: 0.3,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              boxShadow: "none",
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

      // Floating icons animation - only on desktop
      if (window.innerWidth > 768) {
        gsap.to(".floating-icon", {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          rotation: "random(-15, 15)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            amount: 2,
            from: "random"
          }
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden py-16 md:py-0"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Animated background */}
      <div ref={bgRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
        
        {/* Floating tech icons - hidden on mobile */}
        <div className="hidden md:block">
          {['⚛️', '🔧', '🎨', '🌐', '📱', '💾'].map((icon, i) => (
            <div
              key={i}
              className="floating-icon absolute text-4xl opacity-20"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-32 relative z-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 
            ref={titleRef}
            className="font-bold mb-4 md:mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: '#ffffff',
              lineHeight: '1.1'
            }}
          >
            Why Choose{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Steganox?
            </span>
          </h2>
          <p 
            className="max-w-3xl mx-auto text-base md:text-xl px-4"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            We turn complexity into clarity with precision engineering and innovative solutions
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {whyChooseData.map((reason, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div 
                className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl border h-full transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  transform: 'translateZ(0)'
                }}
              >
                {/* Icon */}
                <div 
                  className="text-4xl md:text-5xl mb-4 md:mb-6"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(168,85,247,0.5))'
                  }}
                >
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 
                  className="text-lg md:text-xl font-bold mb-3 md:mb-4"
                  style={{ color: '#ffffff' }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p 
                  className="mb-4 md:mb-6 text-sm md:text-base"
                  style={{ 
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: '1.6'
                  }}
                >
                  {reason.description}
                </p>

                {/* Highlight badge */}
                <div 
                  className="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.2) 100%)',
                    border: '1px solid rgba(168,85,247,0.3)',
                    color: 'rgba(255,255,255,0.9)'
                  }}
                >
                  {reason.highlight}
                </div>

                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(168,85,247,0.1) 0%, transparent 70%)',
                    filter: 'blur(20px)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="text-center mt-12 md:mt-20 px-4">
          <blockquote 
            className="text-lg md:text-2xl italic max-w-4xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            "At Steganox, we turn complexity into clarity — building intelligent, secure, and
            elegantly engineered solutions that reveal true value from beneath the surface."
          </blockquote>
          <p 
            className="mt-3 md:mt-4 text-sm md:text-base"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            — Team Steganox
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection; 