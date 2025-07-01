import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollServices = () => {
  const containerRef = useRef(null);
  const servicesRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin section for scroll effect
      const pinTrigger = ScrollTrigger.create({
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
            trigger: titleRef.current,
            start: "top bottom-=200",
            end: "bottom center",
            scrub: 1
          }
        }
      );

      // Services cards animation with stagger
      servicesRef.current.forEach((service, index) => {
        // Initial state
        gsap.set(service, {
          opacity: 0,
          y: 100,
          rotateX: -15,
          transformPerspective: 1000
        });

        // Scroll animation
        gsap.to(service, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: service,
            start: "top bottom-=150",
            end: "bottom center+=100",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 0.8 + (0.2 * progress);
              gsap.set(service, { scale });
            }
          }
        });

        // Hover effect
        service.addEventListener('mouseenter', () => {
          gsap.to(service, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        service.addEventListener('mouseleave', () => {
          gsap.to(service, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      icon: "🌐",
      color: "from-blue-500 to-purple-600",
      features: ["React/Next.js", "Node.js", "Cloud Native", "PWA"]
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android",
      icon: "📱",
      color: "from-green-500 to-teal-600",
      features: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by advanced algorithms and data",
      icon: "🤖",
      color: "from-purple-500 to-pink-600",
      features: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps automation",
      icon: "☁️",
      color: "from-orange-500 to-red-600",
      features: ["AWS", "Azure", "Kubernetes", "CI/CD"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
      icon: "🎨",
      color: "from-pink-500 to-rose-600",
      features: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "Consulting",
      description: "Strategic technology guidance for digital transformation",
      icon: "💡",
      color: "from-yellow-500 to-orange-600",
      features: ["Architecture", "Tech Stack", "Best Practices", "Training"]
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => servicesRef.current[index] = el}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${service.color.split(' ')[1]} 0%, ${service.color.split(' ')[3]} 100%)`
                }}
              />
              
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-500">
                {/* Icon */}
                <div className="text-5xl mb-6">{service.icon}</div>
                
                {/* Title with gradient */}
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollServices; 