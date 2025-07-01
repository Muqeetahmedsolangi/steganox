import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExpertiseSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const categoriesRef = useRef([]);
  const floatingElementsRef = useRef([]);
  const bgCodeRef = useRef([]);
  const particlesRef = useRef([]);
  const logoGridRef = useRef(null);

  const techCategories = [
    {
      category: "Frontend Excellence",
      icon: "🎨",
      color: "#e11d48",
      gradient: "from-rose-500 via-pink-500 to-purple-500",
      technologies: [
        { name: "React", level: 98, logo: "⚛️", description: "Modern UI framework", years: "5+ years", projects: "150+" },
        { name: "Next.js", level: 96, logo: "▲", description: "Full-stack React framework", years: "4+ years", projects: "80+" },
        { name: "TypeScript", level: 94, logo: "📘", description: "Type-safe JavaScript", years: "4+ years", projects: "120+" },
        { name: "Vue.js", level: 90, logo: "💚", description: "Progressive framework", years: "3+ years", projects: "60+" },
        { name: "Angular", level: 85, logo: "🅰️", description: "Enterprise platform", years: "3+ years", projects: "45+" },
        { name: "Tailwind CSS", level: 97, logo: "🎨", description: "Utility-first CSS", years: "3+ years", projects: "200+" }
      ]
    },
    {
      category: "Backend Mastery",
      icon: "⚙️", 
      color: "#7c3aed",
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      technologies: [
        { name: "Node.js", level: 96, logo: "🟢", description: "JavaScript runtime", years: "5+ years", projects: "180+" },
        { name: "Python", level: 94, logo: "🐍", description: "Versatile programming", years: "6+ years", projects: "200+" },
        { name: "Go", level: 89, logo: "🔵", description: "Fast & efficient", years: "2+ years", projects: "40+" },
        { name: "Java", level: 87, logo: "☕", description: "Enterprise solutions", years: "4+ years", projects: "90+" },
        { name: "GraphQL", level: 92, logo: "🔗", description: "Query language", years: "3+ years", projects: "70+" },
        { name: "REST APIs", level: 99, logo: "🌐", description: "Web services", years: "6+ years", projects: "300+" }
      ]
    },
    {
      category: "AI & ML Innovation",
      icon: "🤖",
      color: "#059669",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      technologies: [
        { name: "TensorFlow", level: 91, logo: "🧠", description: "ML platform", years: "3+ years", projects: "50+" },
        { name: "PyTorch", level: 88, logo: "🔥", description: "Deep learning", years: "3+ years", projects: "45+" },
        { name: "OpenAI", level: 95, logo: "🎯", description: "AI models", years: "2+ years", projects: "80+" },
        { name: "Hugging Face", level: 87, logo: "🤗", description: "NLP models", years: "2+ years", projects: "35+" },
        { name: "Scikit-learn", level: 90, logo: "📊", description: "ML algorithms", years: "4+ years", projects: "60+" },
        { name: "Computer Vision", level: 84, logo: "👁️", description: "Image processing", years: "3+ years", projects: "40+" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      color: "#dc2626",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      technologies: [
        { name: "AWS", level: 96, logo: "☁️", description: "Cloud platform", years: "5+ years", projects: "150+" },
        { name: "Docker", level: 94, logo: "🐳", description: "Containerization", years: "4+ years", projects: "120+" },
        { name: "Kubernetes", level: 89, logo: "⚓", description: "Orchestration", years: "3+ years", projects: "70+" },
        { name: "Terraform", level: 87, logo: "🏗️", description: "Infrastructure as code", years: "3+ years", projects: "50+" },
        { name: "Jenkins", level: 90, logo: "🔧", description: "CI/CD automation", years: "4+ years", projects: "80+" },
        { name: "GitHub Actions", level: 92, logo: "🚀", description: "Workflow automation", years: "3+ years", projects: "100+" }
      ]
    },
    {
      category: "Database Excellence",
      icon: "💾",
      color: "#ea580c",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      technologies: [
        { name: "PostgreSQL", level: 94, logo: "🐘", description: "Relational database", years: "5+ years", projects: "120+" },
        { name: "MongoDB", level: 92, logo: "🍃", description: "NoSQL database", years: "4+ years", projects: "100+" },
        { name: "Redis", level: 89, logo: "🔴", description: "In-memory store", years: "4+ years", projects: "80+" },
        { name: "Elasticsearch", level: 86, logo: "🔍", description: "Search engine", years: "3+ years", projects: "45+" },
        { name: "MySQL", level: 91, logo: "🐬", description: "Popular RDBMS", years: "5+ years", projects: "130+" },
        { name: "Firebase", level: 88, logo: "🔥", description: "Real-time database", years: "3+ years", projects: "60+" }
      ]
    },
    {
      category: "Mobile Innovation",
      icon: "📱",
      color: "#0891b2",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      technologies: [
        { name: "React Native", level: 93, logo: "📱", description: "Cross-platform apps", years: "4+ years", projects: "70+" },
        { name: "Flutter", level: 89, logo: "🦋", description: "Multi-platform UI", years: "3+ years", projects: "50+" },
        { name: "Swift", level: 87, logo: "🍎", description: "iOS development", years: "4+ years", projects: "60+" },
        { name: "Kotlin", level: 85, logo: "🤖", description: "Android development", years: "3+ years", projects: "55+" },
        { name: "Expo", level: 91, logo: "⚡", description: "React Native platform", years: "3+ years", projects: "40+" },
        { name: "Progressive Web Apps", level: 94, logo: "📲", description: "Web-based apps", years: "4+ years", projects: "80+" }
      ]
    }
  ];

  const backgroundCode = [
    "const innovation = await deploy.future();",
    "SELECT excellence FROM world_class_tech;",
    "git commit -m 'revolutionary breakthrough'",
    "npm run build:perfection",
    "docker-compose up success",
    "kubectl apply -f world-domination.yaml",
    "terraform plan -out=ultimate.tfplan",
    "const mastery = technologies.map(perfect);"
  ];

  const companyLogos = ["🏢", "🏭", "🏦", "🏪", "🏛️", "🏬", "🏨", "🏤"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Optimized section pinning for better performance
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
      });

      // Optimized floating particles for performance
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          gsap.to(particle, {
            y: "random(-30, 30)",
            x: "random(-20, 20)",
            rotation: "random(-180, 180)",
            scale: "random(0.5, 1.2)",
            duration: "random(4, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1
          });
        }
      });

      // Fast background code animation
      bgCodeRef.current.forEach((code, i) => {
        if (code) {
          gsap.to(code, {
            y: `-${150 + (i * 30)}`,
            x: `${(Math.random() - 0.5) * 200}`,
            rotation: i % 2 === 0 ? 360 : -360,
            opacity: 0,
            scale: 0.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5
            }
          });
        }
      });

      // Fast title animation
      const titleSequence = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "30% top",
          scrub: 0.3
        }
      });

      titleSequence
        .fromTo(titleRef.current,
          {
            opacity: 0,
            scale: 0.6,
            y: 60
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8
          }
        )
        .fromTo(subtitleRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6
          }, "-=0.4")
        .to([titleRef.current, subtitleRef.current], {
          scale: 0.8,
          y: -50,
          opacity: 0.4,
          duration: 0.6
        });

      // Perfect category animation system
      categoriesRef.current.forEach((category, index) => {
        if (category) {
          // Fast initial state
          gsap.set(category, {
            opacity: 0,
            y: 80,
            scale: 0.9
          });

          // Quick entrance animation
          ScrollTrigger.create({
            trigger: category,
            start: "top 85%",
            end: "top 20%",
            onEnter: () => {
              gsap.to(category, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out"
              });
            },
            onLeaveBack: () => {
              gsap.to(category, {
                opacity: 0,
                y: 80,
                scale: 0.9,
                duration: 0.5,
                ease: "power2.in"
              });
            }
          });

          // Simple parallax
          gsap.to(category, {
            y: -15 * (index + 1),
            scale: 0.98,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "40% top",
              end: "bottom top",
              scrub: 0.5
            }
          });

          // Perfect tech items revelation
          const techItems = category.querySelectorAll('.tech-item');
          techItems.forEach((item, techIndex) => {
            // Fast initial state
            gsap.set(item, {
              opacity: 0,
              x: -40,
              scale: 0.95
            });

            // Quick tech item animation
            ScrollTrigger.create({
              trigger: item,
              start: "top 80%",
              end: "top 30%",
              onEnter: () => {
                gsap.to(item, {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  duration: 0.6,
                  delay: techIndex * 0.08,
                  ease: "power2.out"
                });

                // Fast progress bar
                const progressBar = item.querySelector('.progress-fill');
                if (progressBar) {
                  gsap.to(progressBar, {
                    width: progressBar.getAttribute('data-width'),
                    duration: 1.2,
                    delay: techIndex * 0.08 + 0.2,
                    ease: "power3.out"
                  });
                }

                // Quick counter
                const levelElement = item.querySelector('.tech-level');
                if (levelElement) {
                  const finalLevel = parseInt(levelElement.getAttribute('data-level'));
                  gsap.to({}, {
                    duration: 1,
                    delay: techIndex * 0.08 + 0.3,
                    ease: "power2.out",
                    onUpdate: function() {
                      const progress = this.progress();
                      levelElement.textContent = Math.floor(finalLevel * progress) + '%';
                    }
                  });
                }
              },
              onLeaveBack: () => {
                gsap.to(item, {
                  opacity: 0,
                  x: -40,
                  scale: 0.95,
                  duration: 0.4,
                  ease: "power2.in"
                });

                // Quick reset
                const progressBar = item.querySelector('.progress-fill');
                const levelElement = item.querySelector('.tech-level');
                if (progressBar) gsap.set(progressBar, { width: '0%' });
                if (levelElement) levelElement.textContent = '0%';
              }
            });
          });

          // Fast hover effects
          const handleMouseEnter = () => {
            gsap.to(category, {
              scale: 1.02,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });

            gsap.to(category.querySelectorAll('.tech-item'), {
              x: 10,
              stagger: 0.02,
              duration: 0.3,
              ease: "power2.out"
            });

            gsap.to(category.querySelector('.category-glow'), {
              opacity: 0.3,
              duration: 0.3
            });
          };

          const handleMouseLeave = () => {
            gsap.to(category, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });

            gsap.to(category.querySelectorAll('.tech-item'), {
              x: 0,
              duration: 0.3,
              ease: "power2.out"
            });

            gsap.to(category.querySelector('.category-glow'), {
              opacity: 0,
              duration: 0.3
            });
          };

          category.addEventListener('mouseenter', handleMouseEnter);
          category.addEventListener('mouseleave', handleMouseLeave);
        }
      });

      // Company logos animation
      if (logoGridRef.current) {
        gsap.fromTo(logoGridRef.current.children,
          {
            opacity: 0,
            scale: 0.5,
            rotation: -180
          },
          {
            opacity: 0.6,
            scale: 1,
            rotation: 0,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: logoGridRef.current,
              start: "top 80%"
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Ultimate background system */}
      <div className="absolute inset-0">
        {/* Multi-layer premium gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        
        {/* Fast animated grid */}
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridFlow 20s linear infinite'
          }}
        />

        {/* World-class background code */}
        <div className="absolute inset-0 pointer-events-none">
          {backgroundCode.map((code, i) => (
            <div
              key={i}
              ref={el => bgCodeRef.current[i] = el}
              className="absolute opacity-20 font-mono text-sm font-bold"
              style={{
                left: `${5 + (i * 12)}%`,
                top: `${8 + (i * 11)}%`,
                color: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#3b82f6' : '#06b6d4',
                textShadow: '0 0 10px currentColor'
              }}
            >
              {code}
            </div>
          ))}
        </div>

        {/* Optimized floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              ref={el => particlesRef.current[i] = el}
              className="absolute opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${12 + Math.random() * 30}px`,
                height: `${12 + Math.random() * 30}px`,
                background: i % 4 === 0 
                  ? 'linear-gradient(45deg, #a855f7, #3b82f6)' 
                  : i % 4 === 1
                  ? 'linear-gradient(45deg, #3b82f6, #06b6d4)'
                  : i % 4 === 2
                  ? 'linear-gradient(45deg, #06b6d4, #10b981)'
                  : 'linear-gradient(45deg, #f59e0b, #ef4444)',
                borderRadius: i % 5 === 0 ? '50%' : '25%',
                filter: 'blur(1px)',
                boxShadow: '0 0 20px currentColor'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        {/* World-class title section */}
        <div className="text-center mb-28">
          <h2 
            ref={titleRef}
            className="font-black mb-6"
            style={{
              fontSize: 'clamp(3.5rem, 7vw, 6rem)',
              lineHeight: '0.9',
              perspective: '1000px'
            }}
          >
            <div style={{ color: '#ffffff', marginBottom: '1rem' }}>Tech</div>
            <div style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 30%, #06b6d4 60%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(168,85,247,0.8))',
              textShadow: '0 0 80px rgba(168,85,247,0.5)'
            }}>
              Stack
            </div>
          </h2>
          <p 
            ref={subtitleRef}
            className="max-w-3xl mx-auto text-2xl font-semibold"
            style={{ 
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)'
            }}
          >
            Cutting-edge technologies we master to build the future
          </p>

          {/* Trust indicators */}
          <div 
            ref={logoGridRef}
            className="flex justify-center items-center gap-8 mt-12 opacity-60"
          >
            {companyLogos.map((logo, i) => (
              <div
                key={i}
                className="text-2xl transform hover:scale-110 transition-transform duration-300"
                style={{ filter: 'grayscale(1)' }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Ultimate tech categories grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-8xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={el => categoriesRef.current[categoryIndex] = el}
              className="relative p-10 rounded-3xl border transition-all duration-1000 group"
              style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(40px)',
                transformStyle: 'preserve-3d',
                boxShadow: '0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              {/* Premium category header */}
              <div className="flex items-center gap-8 mb-12">
                <div 
                  className="text-5xl p-5 rounded-2xl border-2 transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${category.color}20`,
                    borderColor: `${category.color}40`,
                    boxShadow: `0 0 30px ${category.color}30`
                  }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 
                    className="text-3xl font-black mb-2"
                    style={{ color: '#ffffff' }}
                  >
                    {category.category}
                  </h3>
                  <div 
                    className="text-lg font-medium opacity-80"
                    style={{ color: '#ffffff' }}
                  >
                    {category.technologies.length} Expert Technologies
                  </div>
                </div>
              </div>

              {/* World-class technologies list */}
              <div className="space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="tech-item group/item relative p-6 rounded-2xl border transition-all duration-500 hover:border-opacity-60"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      borderColor: 'rgba(255,255,255,0.1)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-4xl transform group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500">
                        {tech.logo}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span 
                              className="font-black text-xl"
                              style={{ color: '#ffffff' }}
                            >
                              {tech.name}
                            </span>
                            <div 
                              className="text-sm opacity-80 mt-1"
                              style={{ color: '#ffffff' }}
                            >
                              {tech.description}
                            </div>
                            <div className="flex gap-4 mt-2 text-xs opacity-60" style={{ color: '#ffffff' }}>
                              <span>⏱️ {tech.years}</span>
                              <span>📊 {tech.projects} projects</span>
                            </div>
                          </div>
                          <span 
                            className="tech-level text-2xl font-black px-4 py-2 rounded-xl"
                            data-level={tech.level}
                            style={{ 
                              color: category.color,
                              backgroundColor: `${category.color}20`,
                              border: `2px solid ${category.color}40`
                            }}
                          >
                            0%
                          </span>
                        </div>
                        
                        {/* Ultimate progress bar */}
                        <div 
                          className="h-4 rounded-full overflow-hidden relative"
                          style={{ 
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                          }}
                        >
                          <div 
                            className="progress-fill h-full rounded-full relative overflow-hidden"
                            data-width={`${tech.level}%`}
                            style={{
                              width: '0%',
                              background: `linear-gradient(90deg, ${category.color}, ${category.color}dd, ${category.color})`,
                              boxShadow: `0 0 20px ${category.color}60, inset 0 1px 0 rgba(255,255,255,0.3)`
                            }}
                          >
                            <div 
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              style={{ animation: 'shimmer 3s infinite' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ultimate category effects */}
              <div 
                className="category-glow absolute inset-0 rounded-3xl opacity-0 transition-all duration-1000 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${category.color}25 0%, transparent 70%)`,
                  filter: 'blur(4px)'
                }}
              />

              {/* Premium border glow */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${category.color}40, transparent)`,
                  filter: 'blur(3px)',
                  zIndex: -1
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gridFlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default ExpertiseSection;
