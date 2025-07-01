import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Icon } from '@iconify/react';
import MechanicalAssembly3D from './MechanicalAssembly3D';
import { useNavigate } from 'react-router-dom';
const HeroSection = ({ companyInfo }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingRef = useRef([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power4.out',
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      }
    );

    // CTA animation
    gsap.fromTo(
      ctaRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      }
    );

    // Floating elements animation
    floatingRef.current.forEach((el, index) => {
      gsap.to(el, {
        y: '+=20',
        x: '+=10',
        rotation: '+=5',
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });

    // Text glow effect
    const glowTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    glowTimeline
      .to(titleRef.current, {
        textShadow: '0 0 30px rgba(255, 102, 0, 0.9), 0 0 60px rgba(255, 153, 51, 0.7)',
        duration: 2,
        ease: 'power2.inOut',
      })
      .to(titleRef.current, {
        textShadow: '0 0 10px rgba(255, 153, 51, 0.7), 0 0 30px rgba(255, 102, 0, 0.5)',
        duration: 2,
        ease: 'power2.inOut',
      });
  }, []);

  return (
    <section className="relative h-screen max-h-[750px] flex items-center justify-center overflow-hidden pt-12 sm:pt-16 md:pt-0">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-void-900 via-void-950 to-void-900">
        <div className="absolute inset-0 bg-tech-grid opacity-10" />
      </div>

      {/* Floating mechanical elements - responsive positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={(el) => (floatingRef.current[0] = el)}
          className="absolute top-24 sm:top-28 md:top-16 lg:top-20 left-4 sm:left-8 md:left-12 lg:left-20 text-neon-500/20"
        >
          <Icon icon="mdi:cog" className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-24 lg:h-24" />
        </div>
        <div
          ref={(el) => (floatingRef.current[1] = el)}
          className="absolute top-40 sm:top-44 md:top-32 lg:top-40 right-4 sm:right-6 md:right-16 lg:right-32 text-cyber-500/20"
        >
          <Icon icon="carbon:3d-mpr-toggle" className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-32 lg:h-32" />
        </div>
        <div
          ref={(el) => (floatingRef.current[2] = el)}
          className="absolute bottom-32 sm:bottom-36 md:bottom-24 lg:bottom-32 left-4 sm:left-6 md:left-24 lg:left-40 text-neon-500/20"
        >
          <Icon icon="mdi:wrench" className="w-8 h-8 sm:w-10 sm:h-10 md:w-18 md:h-18 lg:w-28 lg:h-28" />
        </div>
        <div
          ref={(el) => (floatingRef.current[3] = el)}
          className="absolute bottom-24 sm:bottom-28 md:bottom-16 lg:bottom-20 right-4 sm:right-6 md:right-12 lg:right-20 text-cyber-500/20"
        >
          <Icon icon="mdi:robot-industrial" className="w-10 h-10 sm:w-12 sm:h-12 md:w-24 md:h-24 lg:w-36 lg:h-36" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          style={{
            textShadow: '0 0 20px rgba(110, 231, 183, 0.8), 0 0 40px rgba(110, 231, 183, 0.6)',
          }}
        >
          {companyInfo.name}
        </h1>

        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white mb-3 sm:mb-4 md:mb-6 max-w-3xl mx-auto"
        >
          {companyInfo.tagline}
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto">
          {companyInfo.description}
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-12 max-w-xs sm:max-w-md md:max-w-none mx-auto">
          <button onClick={() => navigate('/contact-us')} className="group relative w-full sm:w-auto px-4 sm:px-5 md:px-8 py-2 sm:py-2.5 md:py-4 bg-gradient-to-r from-neon-500 to-neon-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-500/50">
            <span className="relative z-10 text-xs sm:text-sm md:text-base">Get Started</span>
            <div className="absolute inset-0 bg-neon-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          <button onClick={() => navigate('/case-studies')} className="w-full sm:w-auto px-4 sm:px-5 md:px-8 py-2 sm:py-2.5 md:py-4 border-2 border-neon-500/50 rounded-lg font-semibold text-neon-500 hover:bg-neon-500/10 hover:border-neon-500 transition-all duration-300 text-xs sm:text-sm md:text-base">
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 mt-4 sm:mt-6 md:mt-8">
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-4xl font-bold text-neon-500 mb-1 md:mb-2">
              {companyInfo.projectsCompleted}
            </div>
            <div className="text-gray-400 text-xs sm:text-xs md:text-base">
              <span className="md:hidden">Projects</span>
              <span className="hidden md:inline">Projects Completed</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-4xl font-bold text-cyber-500 mb-1 md:mb-2">
              {companyInfo.clientsWorldwide}
            </div>
            <div className="text-gray-400 text-xs sm:text-xs md:text-base">
              <span className="md:hidden">Clients</span>
              <span className="hidden md:inline">Happy Clients</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-4xl font-bold text-neon-400 mb-1 md:mb-2">
              {companyInfo.employees}
            </div>
            <div className="text-gray-400 text-xs sm:text-xs md:text-base">
              <span className="md:hidden">Team</span>
              <span className="hidden md:inline">Team Members</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-4xl font-bold text-neon-600 mb-1 md:mb-2">
              {companyInfo.satisfaction}
            </div>
            <div className="text-gray-400 text-xs sm:text-xs md:text-base">
              <span className="md:hidden">Rating</span>
              <span className="hidden md:inline">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Mechanical Assembly - Hidden on small screens */}
      <div className="mb-8 hidden lg:block">
        <MechanicalAssembly3D />
      </div>

      {/* Scroll indicator - responsive sizing */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon icon="carbon:chevron-down" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-neon-500/50" />
      </div>
    </section>
  );
};

export default HeroSection; 