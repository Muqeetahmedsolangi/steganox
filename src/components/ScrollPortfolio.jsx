import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollPortfolio = () => {
  const containerRef = useRef(null);
  const projectsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
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

      // Parallax cards effect
      projectsRef.current.forEach((project, index) => {
        // Calculate offset for stacking effect
        const yOffset = index * 40;
        
        gsap.set(project, {
          position: 'sticky',
          top: `${100 + yOffset}px`
        });

        // Scale and opacity animation
        gsap.fromTo(project,
          {
            scale: 0.85 + (index * 0.025),
            opacity: 0.5
          },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: project,
              start: "top bottom-=200",
              end: "bottom center",
              scrub: 1,
              onUpdate: self => {
                const progress = self.progress;
                const rotation = (1 - progress) * (index % 2 === 0 ? 5 : -5);
                gsap.set(project, { rotateY: rotation });
              }
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "E-Commerce Revolution",
      client: "TechStore Pro",
      description: "Next-gen shopping platform with AI-powered recommendations and AR try-before-you-buy features",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      tags: ["React", "Node.js", "AI/ML", "AR"],
      stats: { users: "2M+", revenue: "$50M+", performance: "99.9%" }
    },
    {
      title: "FinTech Dashboard",
      client: "CryptoFlow",
      description: "Real-time cryptocurrency trading platform with advanced analytics and automated trading bots",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
      tags: ["Vue.js", "Python", "WebSocket", "Blockchain"],
      stats: { trades: "10M+", volume: "$1B+", uptime: "99.99%" }
    },
    {
      title: "Healthcare AI",
      client: "MediCare Plus",
      description: "AI-powered diagnostic system with patient management and telemedicine capabilities",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      tags: ["Angular", "TensorFlow", "Docker", "HIPAA"],
      stats: { patients: "500K+", accuracy: "98.5%", hospitals: "200+" }
    },
    {
      title: "Social Learning Platform",
      client: "EduConnect",
      description: "Interactive learning platform with live streaming, gamification, and peer collaboration",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      tags: ["Next.js", "WebRTC", "Redis", "AWS"],
      stats: { students: "1M+", courses: "10K+", completion: "85%" }
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-gray-900 to-black py-20 min-h-[200vh]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into reality with cutting-edge technology
          </p>
        </div>

        {/* Stacked Cards */}
        <div className="relative max-w-5xl mx-auto" style={{ height: `${projects.length * 600}px` }}>
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectsRef.current[index] = el}
              className="w-full bg-gray-800/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700 shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="grid md:grid-cols-2 h-[500px]">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                  
                  {/* Client Badge */}
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                    <span className="text-white font-medium">{project.client}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="mt-8 group flex items-center gap-2 text-white hover:text-purple-400 transition-colors duration-300">
                    <span className="text-lg font-medium">View Case Study</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollPortfolio; 