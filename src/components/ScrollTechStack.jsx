import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollTechStack = () => {
  const containerRef = useRef(null);
  const techRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate scroll distance
      const techWidth = techRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = techWidth - viewportWidth;

      // Pin container and horizontal scroll
      gsap.to(techRef.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Title fade animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "top top",
            scrub: 1
          }
        }
      );

      // Individual tech animations
      const techItems = techRef.current.querySelectorAll('.tech-item');
      techItems.forEach((item, index) => {
        gsap.fromTo(item,
          {
            opacity: 0,
            scale: 0.8,
            rotateY: 45
          },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${index * 100} center`,
              end: `top+=${index * 100 + 300} center`,
              scrub: 1
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const technologies = [
    {
      category: "Frontend",
      icon: "⚛️",
      techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      color: "from-blue-400 to-cyan-600"
    },
    {
      category: "Backend",
      icon: "🔧",
      techs: ["Node.js", "Python", "Java", "Go", "PostgreSQL", "MongoDB"],
      color: "from-green-400 to-emerald-600"
    },
    {
      category: "Mobile",
      icon: "📱",
      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Expo"],
      color: "from-purple-400 to-pink-600"
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      techs: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      color: "from-orange-400 to-red-600"
    },
    {
      category: "AI/ML",
      icon: "🤖",
      techs: ["TensorFlow", "PyTorch", "OpenAI", "Langchain", "Scikit-learn", "Pandas"],
      color: "from-pink-400 to-purple-600"
    },
    {
      category: "Tools",
      icon: "🛠️",
      techs: ["Git", "Jira", "Figma", "VS Code", "Postman", "Jenkins"],
      color: "from-yellow-400 to-orange-600"
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-black overflow-hidden">
      <div className="h-screen flex items-center">
        {/* Title - Fixed Position */}
        <div ref={titleRef} className="absolute left-20 top-1/2 -translate-y-1/2 z-20">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4">
            Tech
            <br />
            Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-sm">
            Cutting-edge technologies we master
          </p>
        </div>

        {/* Horizontal Scrolling Tech Cards */}
        <div ref={techRef} className="flex items-center gap-8 pl-[50vw] pr-20">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-item flex-shrink-0 w-[400px] h-[500px] relative group"
              style={{ perspective: '1000px' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative h-full bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:scale-105">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-6xl">{tech.icon}</div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                    {tech.category}
                  </h3>
                </div>

                {/* Tech List */}
                <div className="space-y-4">
                  {tech.techs.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group/item"
                    >
                      <span className="text-white font-medium">{item}</span>
                      <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${tech.color} transform origin-left scale-x-0 group-hover/item:scale-x-100 transition-transform duration-700`}
                          style={{ width: `${80 + Math.random() * 20}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-700">
                    <span className="text-sm text-gray-400">Experience Level</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i < 4 ? `bg-gradient-to-r ${tech.color}` : 'bg-gray-700'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollTechStack; 