import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FuturisticHero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subRef = useRef(null);
  const bgRef = useRef(null);
  const floatingRefs = useRef([]);
  const codeRefs = useRef([]);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create main timeline for hero animations
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5, // Faster response to scroll
          pin: true,
          pinSpacing: false
        }
      });

      // Background parallax - starts immediately
      heroTimeline.to(bgRef.current, {
        yPercent: -30,
        scale: 1.2,
        opacity: 0.3,
        duration: 1
      }, 0);

      // Main title animation - starts early
      heroTimeline.to(textRef.current, {
        yPercent: -100,
        scale: 0.7,
        opacity: 0,
        duration: 0.8
      }, 0);

      // Subtitle animation
      heroTimeline.to(subRef.current, {
        yPercent: -80,
        scale: 0.8,
        opacity: 0,
        duration: 0.8
      }, 0.1);

      // Buttons fade out
      heroTimeline.to(buttonsRef.current, {
        yPercent: -60,
        opacity: 0,
        duration: 0.6
      }, 0.2);

      // Scroll indicator disappears quickly
      heroTimeline.to(scrollIndicatorRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3
      }, 0);

      // Floating code elements animation
      codeRefs.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            yPercent: -150 - (index * 30),
            opacity: 0,
            scale: 0.8,
            rotation: 180 * (index % 2 === 0 ? 1 : -1),
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5
            }
          });
        }
      });

      // Floating particles
      floatingRefs.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: `${-300 - (Math.random() * 200)}`,
            x: `${(Math.random() - 0.5) * 200}`,
            opacity: 0,
            scale: 0,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "50% top",
              scrub: 0.5
            }
          });
        }
      });

      // Initial entrance animation
      gsap.timeline()
        .set([textRef.current, subRef.current, buttonsRef.current], { 
          opacity: 0,
          y: 30
        })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out"
        })
        .to(subRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8")
        .to(buttonsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6")
        .to(scrollIndicatorRef.current, {
          opacity: 1,
          duration: 0.6
        }, "-=0.3");

      // Code snippets entrance
      codeRefs.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(el,
            {
              opacity: 0,
              y: 50,
              scale: 0.8
            },
            {
              opacity: 0.6,
              y: 0,
              scale: 1,
              duration: 1,
              delay: 1.5 + (index * 0.1),
              ease: "power2.out"
            }
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const codeSnippets = [
    "const ai = await ML.train(data);",
    "deploy({ scale: 'infinite' });",
    "security.encrypt(sensitive);",
    "performance.optimize();"
  ];

  return (
    <section 
      ref={containerRef} 
      id="home" 
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background with better gradient */}
      <div ref={bgRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
          <div className="w-full h-full bg-gradient-radial from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating code snippets - positioned better */}
      <div className="absolute inset-0 pointer-events-none">
        {codeSnippets.map((code, i) => (
          <div
            key={i}
            ref={el => codeRefs.current[i] = el}
            className="absolute opacity-0"
            style={{
              left: `${15 + (i % 2) * 60}%`,
              top: `${20 + i * 15}%`
            }}
          >
            <code 
              className="px-4 py-2 rounded-lg text-sm font-mono"
              style={{
                backgroundColor: 'rgba(168,85,247,0.1)',
                border: '1px solid rgba(168,85,247,0.2)',
                color: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(8px)'
              }}
            >
              {code}
            </code>
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            ref={el => floatingRefs.current[i] = el}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              backgroundColor: i % 2 === 0 ? 'rgba(168,85,247,0.4)' : 'rgba(59,130,246,0.4)',
              borderRadius: '50%',
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 
          ref={textRef} 
          className="font-bold mb-6"
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
            lineHeight: '0.95',
            letterSpacing: '-0.02em'
          }}
        >
          <span 
            className="block"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.5))'
            }}
          >
            Steganox
          </span>
          <span 
            className="block text-3xl md:text-4xl lg:text-5xl mt-2"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Building Intelligent Software
          </span>
        </h1>

        <p 
          ref={subRef} 
          className="mb-10 max-w-3xl mx-auto"
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.5'
          }}
        >
          From Concept to Development, Intelligently Mapped.
          <span className="block mt-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Empowering Ambitious Businesses with Cutting-Edge Solutions
          </span>
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
          <button 
            className="group relative px-8 py-4 overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              boxShadow: '0 4px 30px rgba(168,85,247,0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(168,85,247,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(168,85,247,0.3)';
            }}
          >
            <span className="relative z-10 text-white font-semibold">
              Start Your Project
            </span>
          </button>

          <button 
            className="group relative px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              color: '#ffffff',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(168,85,247,0.6)';
              e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            }}
          >
            <span className="font-semibold">Explore Our Work</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0">
          <div className="flex flex-col items-center gap-2">
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
              Scroll to explore
            </span>
            <div 
              className="w-7 h-12 rounded-full border-2 border-white/20 flex justify-center pt-2"
            >
              <div 
                className="w-1 h-3 bg-white/60 rounded-full animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero; 