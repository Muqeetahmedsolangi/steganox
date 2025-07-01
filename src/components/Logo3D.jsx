import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import mainLogo from '../assets/images/logo/mainLogo.png';

const Logo3D = () => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const container = containerRef.current;

    // Initial animation
    gsap.fromTo(
      logo,
      {
        opacity: 0,
        scale: 0.5,
        rotateY: -180,
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 2,
        ease: 'power4.out',
      }
    );

    // Continuous floating animation
    gsap.to(logo, {
      y: '+=20',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

      gsap.to(logo, {
        rotateY: x,
        rotateX: -y,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(logo, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-64 h-64 mx-auto perspective-1000"
    >
      <div
        ref={logoRef}
        className="relative w-full h-full preserve-3d"
      >
        {/* Main logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={mainLogo}
            alt="Machnavote"
            className="w-48 h-48 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-neon-500 rounded-full blur-xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyber-500 rounded-full blur-xl opacity-50 animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-quantum-500 rounded-full blur-2xl opacity-30 animate-pulse animation-delay-2000" />

        {/* Rotating rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-56 h-56 border-2 border-neon-500/30 rounded-full animate-spin-slow" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border border-cyber-500/20 rounded-full animate-spin-slow animation-reverse" />
        </div>

        {/* Tech particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-neon-400 rounded-full animate-float"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Shadow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-black/20 rounded-full blur-xl" />
    </div>
  );
};

export default Logo3D; 