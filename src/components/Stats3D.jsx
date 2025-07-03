import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Stats3D = ({ stats }) => {
  const navigate = useNavigate();
  const statsRef = useRef([]);
  const containerRef = useRef(null);
  useEffect(() => {
    // Animate stats on scroll
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        // Initial state
        gsap.set(stat, {
          opacity: 0,
          rotateX: -90,
          transformOrigin: 'center bottom',
        });

        // Animate in
        gsap.to(stat, {
          opacity: 1,
          rotateX: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            once: true,
          },
        });

        // Counter animation
        const counter = stat.querySelector('.counter');
        if (counter) {
          const endValue = parseInt(counter.getAttribute('data-value'));
          gsap.fromTo(
            counter,
            { textContent: 0 },
            {
              textContent: endValue,
              duration: 2,
              delay: index * 0.2 + 0.5,
              ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
                once: true,
              },
            }
          );
        }

        // Enhanced hover effect for larger screens only
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        if (mediaQuery.matches) {
          stat.addEventListener('mouseenter', () => {
            gsap.to(stat, {
              scale: 1.05,
              rotateY: 5,
              duration: 0.4,
              ease: 'power2.out',
            });
          });

          stat.addEventListener('mouseleave', () => {
            gsap.to(stat, {
              scale: 1,
              rotateY: 0,
              duration: 0.4,
              ease: 'power2.out',
            });
          });
        }
      }
    });
  }, []);

  const defaultStats = stats || [
    {
      icon: 'carbon:3d-mpr-toggle',
      value: 350,
      suffix: '+',
      label: 'Products Designed',
      description: 'Innovative mechanical solutions delivered',
      color: 'from-neon-500 to-neon-600',
    },
    {
      icon: 'mdi:factory',
      value: 80,
      suffix: '+',
      label: 'Manufacturing',
      description: 'Global network of production facilities',
      color: 'from-cyber-500 to-cyber-600',
    },
    {
      icon: 'mdi:certificate',
      value: 99,
      suffix: '%',
      label: 'Design Accuracy',
      description: 'Precision in every engineering detail',
      color: 'from-neon-400 to-neon-600',
    },
    {
      icon: 'mdi:clock-fast',
      value: 40,
      suffix: '%',
      label: 'Faster Time to Market',
      description: 'Streamlined development processes',
      color: 'from-cyber-400 to-cyber-600',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-void-900 to-void-950">
      {/* Professional Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-neon-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyber-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '18s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-neon-500/6 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-tech-grid opacity-5" />

        {/* Professional floating elements */}
        <div className="absolute top-20 right-20 w-4 h-4 border border-neon-500/20 rotate-45 animate-spin hidden sm:block" style={{ animationDuration: '25s' }} />
        <div className="absolute bottom-24 left-16 w-3 h-3 bg-cyber-400/30 rounded-full animate-ping hidden sm:block" style={{ animationDelay: '3s' }} />
      </div>

      <div ref={containerRef} className="container mx-auto relative z-10">
        {/* Professional Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-neon-500" />
            <Icon icon="carbon:analytics" className="w-6 h-6 sm:w-8 sm:h-8 text-neon-500" />
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-neon-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            <span className="bg-gradient-to-r from-neon-400 via-neon-500 to-cyber-400 bg-clip-text text-transparent">
              Software
            </span>
            <br />
            <span className="text-white">Excellence</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Delivering precision engineering solutions with measurable results
          </p>
        </div>

        {/* Professional Responsive Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {defaultStats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="relative group perspective-1000"
            >
              <div
                className="relative bg-gradient-to-br from-void-900/80 to-void-800/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-void-700/50 hover:border-neon-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-500/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Professional background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 to-cyber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl lg:rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-400/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glass morphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-white/2 to-transparent rounded-2xl lg:rounded-3xl" />

                {/* Professional Icon Container */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`inline-flex p-3 sm:p-4 lg:p-5 rounded-xl lg:rounded-2xl bg-gradient-to-br ${stat.color} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon icon={stat.icon} className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-neon-500/10 rounded-xl lg:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Professional Counter Display */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-baseline justify-center">
                    <span
                      className="counter text-3xl sm:text-4xl lg:text-5xl font-bold text-white group-hover:text-neon-300 transition-colors duration-300"
                      data-value={stat.value}
                    >
                      0
                    </span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neon-500 ml-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.suffix}
                    </span>
                  </div>
                </div>

                {/* Professional Label & Description */}
                <div className="text-center relative z-10">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-neon-300 transition-colors duration-300 leading-tight">{stat.label}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{stat.description}</p>
                </div>

                {/* Professional decorative elements */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-neon-500/8 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-tr from-cyber-500/8 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Professional corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-neon-500/10 to-transparent rounded-tl-2xl lg:rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-cyber-500/10 to-transparent rounded-br-2xl lg:rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Professional 3D shadow effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-void-900 to-void-800 rounded-2xl lg:rounded-3xl -z-10 transform translate-y-2 opacity-50 group-hover:translate-y-4 group-hover:opacity-70 transition-all duration-500 hidden md:block"
                  style={{ transform: 'translateZ(-20px)' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Professional Call-to-Action Footer */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 border border-void-700/50 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to Experience These Results?</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Join our growing list of satisfied clients and transform your mechanical engineering projects
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-500 to-neon-600 rounded-xl font-bold text-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-neon-500/50 border border-neon-400/50">
                <span className="flex items-center justify-center gap-2" onClick={() => navigate('/contact-us')}>
                  <Icon icon="carbon:rocket" className="w-5 h-5" />
                  Start Your Project
                </span>
              </button>
              <button className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-neon-500/50 rounded-xl font-bold text-neon-400 hover:bg-neon-500/10 hover:border-neon-400/70 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-2" onClick={() => navigate('/case-studies')}>
                  <Icon icon="carbon:document" className="w-5 h-5" />
                  View Case Studies
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats3D; 