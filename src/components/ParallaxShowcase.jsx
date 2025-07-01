import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxShowcase = () => {
  const containerRef = useRef(null);
  const layersRef = useRef([]);
  const titleRef = useRef(null);

  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      client: "TechCorp Solutions",
      tech: ["Python", "TensorFlow", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      stats: { users: "1M+", accuracy: "99.2%", speed: "0.3s" }
    },
    {
      title: "Real-time Trading System",
      client: "FinanceHub",
      tech: ["Node.js", "WebSocket", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      stats: { trades: "50K/day", latency: "<1ms", uptime: "99.99%" }
    },
    {
      title: "Healthcare Mobile App",
      client: "MediCare Plus",
      tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      stats: { downloads: "500K+", rating: "4.9★", hospitals: "200+" }
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the showcase section
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

      // Stacked cards effect with enhanced parallax
      layersRef.current.forEach((layer, index) => {
        if (layer) {
          const depth = index + 1;
          const speed = 1 + (index * 0.3);
          
          // Set initial position for stacking
          gsap.set(layer, {
            zIndex: projects.length - index,
            y: index * 60
          });
          
          // Parallax movement
          gsap.fromTo(layer,
            {
              yPercent: 50 * speed,
              scale: 0.9 + (index * 0.03),
              rotateX: -10
            },
            {
              yPercent: -50 * speed,
              scale: 1 + (index * 0.02),
              rotateX: 0,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                onUpdate: (self) => {
                  const progress = self.progress;
                  const rotation = (progress - 0.5) * 10 * (index % 2 === 0 ? 1 : -1);
                  gsap.set(layer, { rotateY: rotation });
                }
              }
            }
          );

          // Enhanced hover effects with 3D tilt
          layer.addEventListener('mouseenter', (e) => {
            gsap.to(layer, {
              scale: 1.05,
              z: 100,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          layer.addEventListener('mouseleave', () => {
            gsap.to(layer, {
              scale: 1 + (index * 0.02),
              z: 0,
              rotateX: 0,
              rotateY: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          layer.addEventListener('mousemove', (e) => {
            const rect = layer.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            gsap.to(layer, {
              rotateY: x * 15,
              rotateX: -y * 15,
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
      id="portfolio" 
      className="relative overflow-hidden py-20"
      style={{ 
        backgroundColor: '#000000',
        minHeight: '150vh'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      {/* Title */}
      <div ref={titleRef} className="text-center mb-32 relative z-10">
        <h2 
          className="font-bold mb-4"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            color: '#ffffff'
          }}
        >
          Featured Projects
        </h2>
        <p 
          style={{
            fontSize: '1.3rem',
            color: 'rgba(255,255,255,0.6)'
          }}
        >
          Transforming ideas into powerful digital solutions
        </p>
      </div>

      {/* Parallax layers */}
      <div 
        className="relative max-w-6xl mx-auto px-6"
        style={{ 
          height: '80vh',
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => layersRef.current[index] = el}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            <div 
              className="w-full max-w-5xl rounded-3xl overflow-hidden border transition-all duration-500"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(255,255,255,0.1)',
                height: '500px'
              }}
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* Image side */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  
                  {/* Client badge */}
                  <div 
                    className="absolute top-6 left-6 px-4 py-2 rounded-full border"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderColor: 'rgba(255,255,255,0.2)',
                      color: '#ffffff',
                      fontWeight: '500'
                    }}
                  >
                    {project.client}
                  </div>
                </div>

                {/* Content side */}
                <div className="p-12 flex flex-col justify-between">
                  <div>
                    <h3 
                      className="font-bold mb-6"
                      style={{
                        fontSize: '2rem',
                        color: '#ffffff'
                      }}
                    >
                      {project.title}
                    </h3>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.8)',
                            border: '1px solid rgba(255,255,255,0.2)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    {Object.entries(project.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div 
                          className="font-bold mb-1"
                          style={{
                            fontSize: '1.5rem',
                            color: '#ffffff'
                          }}
                        >
                          {value}
                        </div>
                        <div 
                          className="capitalize"
                          style={{
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.6)'
                          }}
                        >
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View button */}
                  <button 
                    className="mt-8 group flex items-center gap-2 transition-all duration-300"
                    style={{
                      color: '#ffffff',
                      fontSize: '1.1rem',
                      fontWeight: '500'
                    }}
                  >
                    <span>View Case Study</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParallaxShowcase; 