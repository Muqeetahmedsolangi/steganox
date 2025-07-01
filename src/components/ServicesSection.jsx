import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const floatingCodeRef = useRef([]);

  const services = [
    {
      icon: "⚡",
      title: "Custom Software",
      subtitle: "Development",
      description: "Tailored solutions built with cutting-edge technologies for your unique business needs.",
      tech: ["React", "Node.js", "Python", "Go"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🤖",
      title: "AI & Machine",
      subtitle: "Learning",
      description: "Intelligent automation and data-driven insights to transform your business operations.",
      tech: ["TensorFlow", "PyTorch", "OpenAI", "AWS ML"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📱",
      title: "Mobile & Web",
      subtitle: "Applications",
      description: "Cross-platform apps that deliver exceptional user experiences on all devices.",
      tech: ["React Native", "Flutter", "Swift", "Kotlin"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      subtitle: "& Prototyping",
      description: "User-centered design that converts visitors into customers with intuitive interfaces.",
      tech: ["Figma", "Adobe XD", "Framer", "Principle"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      subtitle: "Infrastructure",
      description: "Scalable cloud solutions with automated deployment and monitoring systems.",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      subtitle: "Solutions",
      description: "Comprehensive security frameworks to protect your digital assets and data.",
      tech: ["Encryption", "OAuth", "Blockchain", "Penetration"],
      gradient: "from-gray-500 to-slate-500"
    }
  ];

  const codeSnippets = [
    'const deploy = () => scale(∞)',
    'SELECT success FROM future',
    'git commit -m "innovation"',
    'npm run build:tomorrow',
    'docker-compose up dreams'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin section for extended scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
      });

      // Title entrance animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "20% top",
            scrub: 0.5
          }
        }
      );

      // Cards container animation
      const cardsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5
        }
      });

      // Individual card animations with stagger
      cardRefs.current.forEach((card, index) => {
        if (card) {
          // Initial state
          gsap.set(card, {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotationY: -15
          });

          // Card reveal animation
          cardsTimeline.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "back.out(1.2)"
          }, index * 0.15);

          // Parallax movement during scroll
          gsap.to(card, {
            y: -50 * (index + 1),
            rotationX: 5,
            scale: 0.95,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "50% top",
              end: "bottom top",
              scrub: 0.5
            }
          });

          // Hover animations
          const handleMouseEnter = () => {
            gsap.to(card, {
              scale: 1.05,
              y: "-=15",
              rotationY: 5,
              duration: 0.4,
              ease: "power2.out"
            });

            const techItems = card.querySelectorAll('.tech-item');
            gsap.to(techItems, {
              scale: 1.1,
              stagger: 0.05,
              duration: 0.3,
              ease: "back.out(1.2)"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              scale: 1,
              y: "+=15",
              rotationY: 0,
              duration: 0.4,
              ease: "power2.out"
            });

            const techItems = card.querySelectorAll('.tech-item');
            gsap.to(techItems, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);
        }
      });

      // Floating code snippets
      floatingCodeRef.current.forEach((code, i) => {
        if (code) {
          gsap.to(code, {
            y: `-${150 + (i * 30)}`,
            x: `${(Math.random() - 0.5) * 200}`,
            rotation: i % 2 === 0 ? 180 : -180,
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

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating code snippets */}
        <div className="absolute inset-0 pointer-events-none">
          {codeSnippets.map((code, i) => (
            <div
              key={i}
              ref={el => floatingCodeRef.current[i] = el}
              className="absolute opacity-20"
              style={{
                left: `${15 + (i * 18)}%`,
                top: `${20 + (i * 15)}%`
              }}
            >
              <code className="text-xs font-mono text-purple-400">
                {code}
              </code>
            </div>
          ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="font-bold mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: '#ffffff',
              lineHeight: '1.1'
            }}
          >
            Services We{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Offer
            </span>
          </h2>
          <p 
            className="max-w-2xl mx-auto text-lg"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Cutting-edge solutions that transform your vision into digital reality
          </p>
        </div>

        {/* Services cards grid */}
        <div 
          ref={cardsContainerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Card content */}
              <div className="p-6 relative z-10">
                {/* Icon and title */}
                <div className="mb-4">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 
                    className="text-xl font-bold mb-1"
                    style={{ color: '#ffffff' }}
                  >
                    {service.title}
                  </h3>
                  <div 
                    className="text-lg font-medium"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradient.split(' ')[1]} 0%, ${service.gradient.split(' ')[3]} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {service.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p 
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {service.description}
                </p>

                {/* Tech stack */}
                <div className="space-y-2">
                  <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-item text-xs px-3 py-1 rounded-full border"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          borderColor: 'rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.8)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gradient overlay */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}
              />

              {/* Border glow on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.gradient.split(' ')[1]}20 0%, ${service.gradient.split(' ')[3]}20 100%)`,
                  filter: 'blur(1px)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 