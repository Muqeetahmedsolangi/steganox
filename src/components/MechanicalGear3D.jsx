import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MechanicalGear3D = () => {
  const gear1Ref = useRef(null);
  const gear2Ref = useRef(null);
  const gear3Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Continuous rotation for gears
    gsap.to(gear1Ref.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    gsap.to(gear2Ref.current, {
      rotation: -360,
      duration: 15,
      repeat: -1,
      ease: 'none',
    });

    gsap.to(gear3Ref.current, {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: 'none',
    });

    // 3D perspective on mouse move
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

      gsap.to(containerRef.current, {
        rotateY: x,
        rotateX: -y,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(containerRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-96 h-96 mx-auto perspective-1000">
      <div
        ref={containerRef}
        className="relative w-full h-full preserve-3d"
      >
        {/* Gear 1 - Large central gear */}
        <div
          ref={gear1Ref}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="gear1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff5e14" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
            <path
              d="M100,20 L110,40 L130,35 L135,55 L155,60 L150,80 L165,90 L155,110 L165,130 L150,140 L155,160 L135,165 L130,185 L110,180 L100,200 L90,180 L70,185 L65,165 L45,160 L50,140 L35,130 L45,110 L35,90 L50,80 L45,60 L65,55 L70,35 L90,40 Z"
              fill="url(#gear1Gradient)"
              stroke="#c2410c"
              strokeWidth="2"
            />
            <circle cx="100" cy="100" r="40" fill="#1e293b" />
            <circle cx="100" cy="100" r="30" fill="#0f172a" />
          </svg>
        </div>

        {/* Gear 2 - Top right smaller gear */}
        <div
          ref={gear2Ref}
          className="absolute top-20 right-20"
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="drop-shadow-xl"
          >
            <defs>
              <linearGradient id="gear2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d946ef" />
                <stop offset="100%" stopColor="#c026d3" />
              </linearGradient>
            </defs>
            <path
              d="M60,10 L65,25 L80,22 L83,37 L98,40 L95,55 L105,60 L95,75 L105,90 L95,95 L98,110 L83,113 L80,128 L65,125 L60,140 L55,125 L40,128 L37,113 L22,110 L25,95 L15,90 L25,75 L15,60 L25,55 L22,40 L37,37 L40,22 L55,25 Z"
              fill="url(#gear2Gradient)"
              stroke="#a21caf"
              strokeWidth="2"
            />
            <circle cx="60" cy="60" r="25" fill="#1e293b" />
            <circle cx="60" cy="60" r="18" fill="#0f172a" />
          </svg>
        </div>

        {/* Gear 3 - Bottom left smallest gear */}
        <div
          ref={gear3Ref}
          className="absolute bottom-32 left-16"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="drop-shadow-lg"
          >
            <defs>
              <linearGradient id="gear3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0d9488" />
              </linearGradient>
            </defs>
            <path
              d="M40,5 L43,15 L53,13 L55,23 L65,25 L63,35 L70,40 L63,50 L70,60 L63,65 L65,75 L55,77 L53,87 L43,85 L40,95 L37,85 L27,87 L25,77 L15,75 L17,65 L10,60 L17,50 L10,40 L17,35 L15,25 L25,23 L27,13 L37,15 Z"
              fill="url(#gear3Gradient)"
              stroke="#0f766e"
              strokeWidth="2"
            />
            <circle cx="40" cy="40" r="15" fill="#1e293b" />
            <circle cx="40" cy="40" r="10" fill="#0f172a" />
          </svg>
        </div>

        {/* Connecting elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-neon-500/20 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyber-500/10 rounded-full animate-pulse animation-delay-1000" />
        </div>

        {/* Tech particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-400 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MechanicalGear3D; 