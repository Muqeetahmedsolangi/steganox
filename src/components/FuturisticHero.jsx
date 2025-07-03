import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroData } from '../constant/data';
import './heroGrid.css';
import { Link } from 'react-router-dom';

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
          scrub: 0.5,
          pin: true,
          pinSpacing: false
        }
      });

      // Background parallax
      heroTimeline.to(bgRef.current, {
        yPercent: -30,
        scale: 1.2,
        opacity: 0.3,
        duration: 1
      }, 0);

      // Main title animation
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

      // Scroll indicator
      heroTimeline.to(scrollIndicatorRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3
      }, 0);

      // Floating code elements (animate in/out on scroll up/down)
      codeRefs.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(el,
            {
              yPercent: 0,
              opacity: window.innerWidth > 768 ? 0.6 : 0.4,
              scale: 1,
              rotation: 0
            },
            {
              yPercent: -150 - (index * 30),
              opacity: 0,
              scale: 0.8,
              rotation: 180 * (index % 2 === 0 ? 1 : -1),
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.5,
                toggleActions: 'play reverse play reverse',
              }
            }
          );
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
              opacity: window.innerWidth > 768 ? 0.6 : 0.4,
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
    "const innovation = await deploy();",
    "security.encrypt(data);",
    "scale({ limit: 'none' });",
    "ai.optimize(performance);"
  ];

  return (
    <section 
      ref={containerRef} 
      id="home" 
      className="relative h-screen overflow-hidden hero-grid-bg"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
          <div className="w-full h-full bg-gradient-radial from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10 md:opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating code snippets - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
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
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-mono"
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
        {[...Array(8)].map((_, i) => (
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        <h1 
          ref={textRef} 
          className="font-bold mb-4 md:mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 7rem)',
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
            {heroData.title}
          </span>
          <span 
            className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-2"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {heroData.subtitle}
          </span>
        </h1>

        <p 
          ref={subRef} 
          className="mb-8 md:mb-10 max-w-3xl mx-auto px-4"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.5'
          }}
        >
          {heroData.description}
          <span className="block mt-2 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {heroData.subDescription}
          </span>
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link to="/contact-us" className="w-full sm:w-auto">
            <button 
              className="group relative px-6 md:px-8 py-3 md:py-4 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{ 
                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                boxShadow: '0 4px 30px rgba(168,85,247,0.3)'
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 40px rgba(168,85,247,0.5)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 30px rgba(168,85,247,0.3)'}
            >
              <span className="relative z-10 font-semibold text-sm md:text-base text-white">
                Schedule Consultation
              </span>
            </button>
          </Link>
          <Link to="/case-studies" className="w-full sm:w-auto">
            <button 
              className="group relative px-6 md:px-8 py-3 md:py-4 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: '#ffffff',
                border: '2px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(168,85,247,0.6)';
                e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <span className="relative z-10 font-semibold text-sm md:text-base">
                View Case Studies
              </span>
            </button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0">
          <div className="flex flex-col items-center gap-2">
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
              Scroll to explore
            </span>
            <div 
              className="w-6 h-10 md:w-7 md:h-12 rounded-full border-2 border-white/20 flex justify-center pt-2"
            >
              <div 
                className="w-1 h-2 md:h-3 bg-white/60 rounded-full animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero; 