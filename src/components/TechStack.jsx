import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStack = ({ technologies }) => {
  const [activeCategory, setActiveCategory] = useState('cad');
  const skillBarsRef = useRef([]);
  const sectionRef = useRef(null);

  const categories = [
    { id: 'cad', name: 'CAD Software', shortName: 'CAD', icon: 'carbon:3d-software' },
    { id: 'simulation', name: 'Simulation', shortName: 'Simulation', icon: 'carbon:analytics' },
    { id: 'manufacturing', name: 'Manufacturing', shortName: 'Mfg', icon: 'mdi:factory' },
    { id: 'standards', name: 'Standards', shortName: 'Standards', icon: 'mdi:certificate' },
    { id: 'tools', name: 'Engineering Tools', shortName: 'Tools', icon: 'mdi:tools' },
  ];

  useEffect(() => {
    // Animate skill bars on scroll
    skillBarsRef.current.forEach((bar, index) => {
      if (bar) {
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${technologies[activeCategory][index]?.level || 0}%`,
            duration: 1.5,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    });
  }, [activeCategory, technologies]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden">
      {/* Professional Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyber-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '16s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-neon-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '20s', animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-tech-grid opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Professional Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-cyber-500" />
            <Icon icon="carbon:3d-software" className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-500" />
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-cyber-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-neon-500 leading-tight">
            Technology Stack
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Cutting-edge technologies we use to build exceptional solutions
          </p>
        </div>

        {/* Professional Responsive Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl md:rounded-2xl font-bold transition-all duration-500 hover:scale-105 transform relative overflow-hidden ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-neon-500 to-cyber-500 text-white shadow-xl shadow-neon-500/40'
                  : 'bg-gradient-to-br from-void-800/60 to-void-700/60 text-gray-400 hover:bg-void-700/70 hover:text-white border border-void-600/50 hover:border-neon-500/30 backdrop-blur-sm'
              }`}
            >
              {/* Background effect */}
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-xl md:rounded-2xl blur-xl opacity-50" />
              )}
              
              <Icon icon={category.icon} className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              
              {/* Responsive text display */}
              <span className="text-xs sm:text-sm md:text-base relative z-10">
                <span className="block sm:hidden">{category.shortName}</span>
                <span className="hidden sm:block">{category.name}</span>
              </span>
              
              {/* Active indicator */}
              {activeCategory === category.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Professional Responsive Technology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {technologies[activeCategory]?.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-void-700/50 hover:border-neon-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-500/20 hover:scale-[1.02]"
            >
              {/* Professional background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 to-cyber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl lg:rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-400/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glass morphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-white/2 to-transparent rounded-2xl lg:rounded-3xl" />

              <div className="relative z-10">
                {/* Professional Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl lg:rounded-2xl bg-gradient-to-br from-void-800/80 to-void-700/80 border border-void-600/50 group-hover:border-neon-500/30 transition-all duration-300 shadow-lg">
                        <Icon icon={tech.icon} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-neon-400 group-hover:text-neon-300 transition-colors duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-neon-500/10 rounded-xl lg:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-neon-300 transition-colors duration-300 leading-tight">{tech.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Professional Tool</p>
                    </div>
                  </div>
                  
                  {/* Professional percentage display */}
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-neon-500 group-hover:text-neon-400 transition-colors duration-300 group-hover:scale-110 transform inline-block">{tech.level}%</span>
                    <p className="text-xs text-gray-500 mt-1">Proficiency</p>
                  </div>
                </div>

                {/* Professional Skill Bar */}
                <div className="relative">
                  <div className="relative h-2 sm:h-3 bg-void-800/80 rounded-full overflow-hidden border border-void-700/50 shadow-inner">
                    <div
                      ref={(el) => (skillBarsRef.current[index] = el)}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-500 via-cyber-500 to-neon-600 rounded-full shadow-lg relative overflow-hidden"
                      style={{ width: '0%' }}
                    >
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  </div>
                  
                  {/* Skill level indicators */}
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Beginner</span>
                    <span className="hidden sm:inline">Intermediate</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>

              {/* Professional corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-500/8 to-transparent rounded-tr-2xl lg:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-cyber-500/8 to-transparent rounded-bl-2xl lg:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Professional Statistics Footer */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-void-700/50">
              <div className="text-2xl sm:text-3xl font-bold text-neon-500 mb-2">{technologies[activeCategory]?.length || 0}</div>
              <div className="text-sm sm:text-base text-gray-400">Technologies Mastered</div>
            </div>
            <div className="bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-void-700/50">
              <div className="text-2xl sm:text-3xl font-bold text-cyber-500 mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-400">Average Proficiency</div>
            </div>
            <div className="bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-void-700/50">
              <div className="text-2xl sm:text-3xl font-bold text-neon-400 mb-2">10+</div>
              <div className="text-sm sm:text-base text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 