import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionVisionSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const titleRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: true,
      });

      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          scale: 2,
          y: -100
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
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

      // Split screen parallax effect
      gsap.to(leftRef.current, {
        xPercent: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(rightRef.current, {
        xPercent: 30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      // Mission content animation
      gsap.fromTo(missionRef.current,
        {
          opacity: 0,
          x: -100,
          rotateY: -45
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "center center",
            scrub: 1
          }
        }
      );

      // Vision content animation
      gsap.fromTo(visionRef.current,
        {
          opacity: 0,
          x: 100,
          rotateY: 45
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "center center",
            scrub: 1
          }
        }
      );

      // Floating particles
      gsap.to(".mission-particle", {
        y: "random(-100, 100)",
        x: "random(-50, 50)",
        rotation: "random(-180, 180)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 3,
          from: "random"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      </div>

      {/* --- MOBILE: Simple stacked cards --- */}
      <div className="w-full px-2 sm:px-4 md:px-6 block lg:hidden z-10">
        <div className="max-w-2xl mx-auto py-16 flex flex-col gap-6">
          {/* Mission Card */}
          <div className="bg-black/80 rounded-2xl shadow-lg p-6">
            <h3 className="font-bold mb-4 text-xl" style={{ color: '#a855f7' }}>Our Mission</h3>
            <p className="mb-4 text-base" style={{ color: 'rgba(255,255,255,0.9)' }}>
              To empower businesses through intelligent, reliable, and future-ready software — turning complex challenges into powerful digital opportunities.
            </p>
            <ul className="space-y-2">
              {['Innovation', 'Security', 'Scalability'].map((v, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#a855f7' }} />
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>{v} at our core</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Vision Card */}
          <div className="bg-black/80 rounded-2xl shadow-lg p-6">
            <h3 className="font-bold mb-4 text-xl" style={{ color: '#3b82f6' }}>Our Vision</h3>
            <p className="mb-4 text-base" style={{ color: 'rgba(255,255,255,0.9)' }}>
              To be a trusted global technology partner, known for precision engineering, innovation, and delivering solutions that make a meaningful impact.
            </p>
            <ul className="space-y-2">
              {['Global Reach', 'Trusted Partner', 'Meaningful Impact'].map((v, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#3b82f6' }} />
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* --- DESKTOP: Animated/Parallax Split --- */}
      <div className="hidden lg:block w-full">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="mission-particle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: i % 2 === 0 ? 'rgba(168,85,247,0.6)' : 'rgba(59,130,246,0.6)',
              borderRadius: '50%',
              filter: 'blur(1px)'
            }}
          />
        ))}
        {/* Who We Are Title */}
        <div 
          ref={titleRef}
          className="absolute top-20 left-1/2 -translate-x-1/2 z-20 text-center"
        >
          <h2 
            className="font-bold mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff'
            }}
          >
            Who We Are
          </h2>
          <p 
            className="max-w-2xl mx-auto"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1.1rem'
            }}
          >
            At Steganox, we turn complexity into clarity. Our name is inspired by Steganographers — 
            experts in precision, encryption, and hidden meaning.
          </p>
        </div>
        {/* Split screen content (animated) */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-0 min-h-screen items-center">
            {/* Mission - Left Side */}
            <div 
              ref={leftRef}
              className="relative w-full h-full flex items-center justify-center p-10 lg:p-12 bg-black/70 rounded-2xl shadow-lg mb-0"
              style={{ perspective: '1000px' }}
            >
              <div 
                ref={missionRef}
                className="relative max-w-xl w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div 
                  className="absolute -top-20 -left-20 text-[10rem] font-bold opacity-10 select-none pointer-events-none"
                  style={{ color: '#a855f7' }}
                >
                  M
                </div>
                <div className="relative z-10">
                  <h3 
                    className="font-bold mb-8"
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 3rem)',
                      background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Our Mission
                  </h3>
                  <p 
                    className="text-xl leading-relaxed mb-8"
                    style={{ color: 'rgba(255,255,255,0.9)' }}
                  >
                    To empower businesses through intelligent, reliable, and future-ready software — 
                    turning complex challenges into powerful digital opportunities.
                  </p>
                  <div className="space-y-4">
                    {['Innovation', 'Security', 'Scalability'].map((value, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3"
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#a855f7' }}
                        />
                        <span style={{ color: 'rgba(255,255,255,0.7)' }}>{value} at our core</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative element */}
                <div 
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl"
                  style={{ backgroundColor: '#a855f7' }}
                />
              </div>
            </div>
            {/* Vision - Right Side */}
            <div 
              ref={rightRef}
              className="relative w-full h-full flex items-center justify-center p-10 lg:p-12 bg-black/70 rounded-2xl shadow-lg"
              style={{ perspective: '1000px' }}
            >
              <div 
                ref={visionRef}
                className="relative max-w-xl w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div 
                  className="absolute -top-20 -right-20 text-[10rem] font-bold opacity-10 select-none pointer-events-none"
                  style={{ color: '#3b82f6' }}
                >
                  V
                </div>
                <div className="relative z-10">
                  <h3 
                    className="font-bold mb-8"
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 3rem)',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Our Vision
                  </h3>
                  <p 
                    className="text-xl leading-relaxed mb-8"
                    style={{ color: 'rgba(255,255,255,0.9)' }}
                  >
                    To be a trusted global technology partner, known for precision engineering, 
                    innovation, and delivering solutions that make a meaningful impact.
                  </p>
                  <div className="space-y-4">
                    {['Global Reach', 'Trusted Partner', 'Meaningful Impact'].map((goal, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3"
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#3b82f6' }}
                        />
                        <span style={{ color: 'rgba(255,255,255,0.7)' }}>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative element */}
                <div 
                  className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-20 blur-2xl"
                  style={{ backgroundColor: '#3b82f6' }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Center divider line */}
        <div 
          className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)'
          }}
        />
      </div>
    </section>
  );
};

export default MissionVisionSection; 