import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const statsRefs = useRef([]);
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const codeBlocksRef = useRef([]);
  const floatingCodeRef = useRef([]);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section for extended scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: true,
      });

      // Background grid animation
      gsap.to(gridRef.current, {
        yPercent: -50,
        opacity: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5
        }
      });

      // Floating code blocks in background
      floatingCodeRef.current.forEach((block, i) => {
        if (block) {
          gsap.to(block, {
            y: `-${100 + (i * 50)}`,
            x: `${(Math.random() - 0.5) * 100}`,
            rotation: i % 2 === 0 ? 15 : -15,
            opacity: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.3 + (i * 0.1)
            }
          });
        }
      });

      // Title animation with 3D effect
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "30% top",
          scrub: 0.5
        }
      })
      .fromTo(titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.5,
          rotationX: -45
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1
        }
      )
      .to(titleRef.current, {
        scale: 0.8,
        y: -50,
        opacity: 0.8,
        duration: 0.5
      });

      // Text paragraphs with reveal animation
      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 0.5
        }
      });

      textRefs.current.forEach((text, index) => {
        if (text) {
          textTimeline.fromTo(text,
            {
              opacity: 0,
              y: 60,
              x: index % 2 === 0 ? -30 : 30,
              filter: 'blur(10px)',
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              filter: 'blur(0px)',
              scale: 1,
              duration: 0.8,
              ease: "power2.out"
            },
            index * 0.2
          );
        }
      });

      // Code blocks animation behind content
      codeBlocksRef.current.forEach((block, i) => {
        if (block) {
          gsap.fromTo(block,
            {
              opacity: 0,
              scale: 0.8,
              y: 50
            },
            {
              opacity: 0.15,
              scale: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: block,
                start: "top 90%",
                end: "top 50%",
                scrub: 0.5
              }
            }
          );
        }
      });

      // Stats animation - simpler and smoother
      statsRefs.current.forEach((stat, index) => {
        if (stat) {
          const numberEl = stat.querySelector('.stat-number');
          const finalNumber = parseInt(numberEl.getAttribute('data-value'));
          
          // Scale and fade in animation
          gsap.fromTo(stat,
            {
              scale: 0.5,
              opacity: 0,
              y: 30
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: stat,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Number counting animation
          ScrollTrigger.create({
            trigger: stat,
            start: "top 85%",
            onEnter: () => {
              gsap.to({}, {
                duration: 1.5,
                ease: "power2.out",
                onUpdate: function() {
                  const progress = this.progress();
                  numberEl.textContent = Math.floor(finalNumber * progress);
                }
              });
            }
          });
        }
      });

      // Image 3D parallax effect
      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        }
      });

      imageTimeline
        .fromTo(imageRef.current,
          {
            scale: 0.8,
            rotationY: -30,
            opacity: 0
          },
          {
            scale: 1,
            rotationY: 0,
            opacity: 1,
            duration: 1
          }
        )
        .to(imageRef.current, {
          scale: 1.1,
          rotationY: 10,
          yPercent: -20,
          duration: 1
        });

      // Floating tags animation
      gsap.utils.toArray('.floating-tag').forEach((tag, i) => {
        gsap.to(tag, {
          y: "random(-10, -30)",
          x: "random(-10, 10)",
          duration: "random(2, 3)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 200, label: "Projects Delivered", suffix: "+" },
    { value: 50, label: "Expert Engineers", suffix: "+" },
    { value: 15, label: "Countries Served", suffix: "+" },
    { value: 99, label: "Client Satisfaction", suffix: "%" }
  ];

  const codeSnippets = [
    'class Solution implements AI {',
    'const secure = encrypt(data);',
    'deploy({ scale: "infinite" });',
    'async function optimize() {',
    'return performance.max();'
  ];

  const floatingCode = [
    '{ "api": "REST", "version": "2.0" }',
    'SELECT * FROM success',
    'git push origin future',
    'npm run build:production',
    'docker-compose up -d'
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Animated code grid background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(45deg)',
          transformOrigin: 'center center'
        }}
      />

      {/* Floating code snippets in background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingCode.map((code, i) => (
          <div
            key={i}
            ref={el => floatingCodeRef.current[i] = el}
            className="absolute opacity-20"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
              transform: 'translateZ(0)'
            }}
          >
            <code className="text-sm font-mono text-purple-400">
              {code}
            </code>
          </div>
        ))}
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <div ref={contentRef} className="relative">
            {/* Code blocks behind content */}
            <div className="absolute -inset-4 pointer-events-none">
              {codeSnippets.map((code, i) => (
                <div
                  key={i}
                  ref={el => codeBlocksRef.current[i] = el}
                  className="absolute font-mono text-xs opacity-0"
                  style={{
                    color: 'rgba(168,85,247,0.3)',
                    left: `${-10 + (i * 20)}%`,
                    top: `${i * 80}px`,
                    transform: `rotate(${-5 + (i * 2)}deg)`
                  }}
                >
                  {code}
                </div>
              ))}
            </div>

            <h2 
              ref={titleRef}
              className="font-bold mb-8 relative"
              style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                color: '#ffffff',
                lineHeight: '1.1',
                perspective: '1000px'
              }}
            >
              About{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.5))'
              }}>
                Steganox
              </span>
            </h2>

            <div className="space-y-6">
              <p 
                ref={el => textRefs.current[0] = el}
                className="text-lg" 
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                At Steganox, we design and develop cutting-edge software solutions that help you innovate,
                scale, and lead in your industry. From smart platforms to data-driven systems, we deliver
                secure and scalable solutions.
              </p>

              <p 
                ref={el => textRefs.current[1] = el}
                className="text-lg" 
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                Our name is inspired by Steganographers — experts in precision, encryption, and hidden
                meaning. We carry that spirit into the software world, building intelligent, secure, and
                elegantly engineered solutions that reveal true value from beneath the surface.
              </p>

              <div ref={el => textRefs.current[2] = el}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#ffffff' }}>
                  We turn complexity into clarity.
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Whether it's crafting robust enterprise platforms, harnessing AI for deeper insights, or
                  designing user experiences that intuitively guide, we exist to help businesses uncover
                  opportunities hidden within their data and ideas.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={el => statsRefs.current[index] = el}
                  className="text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div 
                    className="stat-number text-3xl md:text-4xl font-bold mb-2"
                    data-value={stat.value}
                    style={{
                      background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    0{stat.suffix}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side with 3D effect */}
          <div className="relative h-[600px]" style={{ perspective: '1000px' }}>
            <div 
              ref={imageRef}
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 30px 80px rgba(168,85,247,0.3)',
                transform: 'translateZ(0)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-blue-600/30 z-10" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              
              {/* Floating elements */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div 
                  className="floating-tag absolute top-10 left-10 px-4 py-2 rounded-xl backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <span className="text-white font-semibold">Innovative</span>
                </div>
                
                <div 
                  className="floating-tag absolute bottom-10 right-10 px-4 py-2 rounded-xl backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <span className="text-white font-semibold">Secure</span>
                </div>
                
                <div 
                  className="floating-tag absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-xl backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <span className="text-white font-semibold">Scalable</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div 
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: '#a855f7' }}
            />
            <div 
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: '#3b82f6' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 