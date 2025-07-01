import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfiniteScroll3D = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const titleRef = useRef(null);

  const techItems = [
    { title: "React Native", desc: "Cross-platform mobile apps", icon: "📱" },
    { title: "Next.js 14", desc: "Full-stack web applications", icon: "🌐" },
    { title: "AI/ML Integration", desc: "Intelligent solutions", icon: "🤖" },
    { title: "Cloud Architecture", desc: "Scalable infrastructure", icon: "☁️" },
    { title: "Blockchain", desc: "Decentralized systems", icon: "🔗" },
    { title: "Microservices", desc: "Modular architecture", icon: "🔧" },
    { title: "DevOps", desc: "Automated pipelines", icon: "🚀" },
    { title: "Real-time Systems", desc: "WebSocket & WebRTC", icon: "⚡" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
      });

      // Calculate scroll distance for horizontal movement
      const items = gsap.utils.toArray('.tech-item');
      const itemWidth = 320; // Width + gap
      const totalWidth = items.length * itemWidth;
      const scrollDistance = totalWidth - window.innerWidth;

      // Horizontal scroll animation
      gsap.to(trackRef.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          onUpdate: (self) => {
            // 3D rotation effect based on scroll progress
            items.forEach((item, index) => {
              const progress = self.progress;
              const offset = (index / items.length) + (progress * 2);
              const rotation = Math.sin(offset * Math.PI) * 25;
              const z = Math.cos(offset * Math.PI) * 100;
              
              gsap.set(item, {
                rotateY: rotation,
                z: z,
                scale: 0.8 + (Math.cos(offset * Math.PI) * 0.2)
              });
            });
          }
        }
      });

      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 100
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=200",
            end: "top center",
            scrub: 1
          }
        }
      );

      // Individual item hover effects
      items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.1,
            rotateY: 0,
            z: 200,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        item.addEventListener('mouseleave', () => {
          // Return to scroll-based transform
          const scrollProgress = ScrollTrigger.getById('horizontal-scroll')?.progress || 0;
          const index = items.indexOf(item);
          const offset = (index / items.length) + (scrollProgress * 2);
          const rotation = Math.sin(offset * Math.PI) * 25;
          const z = Math.cos(offset * Math.PI) * 100;
          
          gsap.to(item, {
            scale: 0.8 + (Math.cos(offset * Math.PI) * 0.2),
            rotateY: rotation,
            z: z,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="tech"
      className="relative py-20 overflow-hidden"
      style={{ 
        backgroundColor: '#000000',
        minHeight: '100vh'
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
      </div>
      
      {/* Title - Fixed Position */}
      <div 
        ref={titleRef} 
        className="absolute left-10 top-1/2 -translate-y-1/2 z-20 max-w-sm"
      >
        <h2 
          className="font-bold mb-4"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            color: '#ffffff',
            lineHeight: '1.1'
          }}
        >
          Tech
          <br />
          Stack
        </h2>
        <p 
          className="max-w-sm"
          style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.6)'
          }}
        >
          Cutting-edge technologies we master
        </p>
      </div>

      {/* Horizontal Scrolling Tech Cards */}
      <div 
        ref={trackRef} 
        className="flex items-center gap-8"
        style={{ 
          paddingLeft: '50vw', 
          paddingRight: '80px',
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {techItems.map((tech, index) => (
          <div
            key={index}
            className="tech-item flex-shrink-0 relative group cursor-pointer"
            style={{
              width: '300px',
              height: '400px',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, rgba(168,85,247,0.3) 0%, rgba(59,130,246,0.3) 100%)`,
                transform: 'scale(1.1)'
              }}
            />
            
            <div 
              className="relative h-full rounded-3xl p-8 border transition-all duration-500 group-hover:border-white/40"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Icon and Category */}
              <div className="flex items-center justify-between mb-8">
                <div style={{ fontSize: '3rem' }}>{tech.icon}</div>
                <h3 
                  className="font-bold"
                  style={{
                    fontSize: '1.5rem',
                    background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {tech.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex-1 flex items-center">
                <p 
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '1.1rem',
                    textAlign: 'center'
                  }}
                >
                  {tech.desc}
                </p>
              </div>

              {/* Progress indicators */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                    Expertise Level
                  </span>
                </div>
                <div 
                  className="h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <div 
                    className="h-full rounded-full transition-all duration-700 group-hover:scale-x-100"
                    style={{
                      width: `${85 + Math.random() * 15}%`,
                      background: 'linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)',
                      transformOrigin: 'left',
                      transform: 'scaleX(0.8)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlays for fade effect */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-40 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, #000000 0%, transparent 100%)'
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-40 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to left, #000000 0%, transparent 100%)'
        }}
      />
    </section>
  );
};

export default InfiniteScroll3D; 