import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MechanicalAssembly3D = () => {
  const assemblyRef = useRef(null);
  const bearingRef = useRef(null);
  const shaftRef = useRef(null);
  const gearRef = useRef(null);
  const housingRef = useRef(null);

  useEffect(() => {
    // Continuous rotation for mechanical parts
    gsap.to(bearingRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });

    gsap.to(shaftRef.current, {
      rotation: -360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    gsap.to(gearRef.current, {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: 'none',
    });

    // 3D perspective animation on mouse move
    const handleMouseMove = (e) => {
      const rect = assemblyRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

      gsap.to(assemblyRef.current, {
        rotateY: x,
        rotateX: -y,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(assemblyRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    const assembly = assemblyRef.current;
    assembly.addEventListener('mousemove', handleMouseMove);
    assembly.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      assembly.removeEventListener('mousemove', handleMouseMove);
      assembly.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-[500px] h-[500px] mx-auto perspective-1000">
      <div
        ref={assemblyRef}
        className="relative w-full h-full preserve-3d"
      >
        {/* Housing/Frame */}
        <div
          ref={housingRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            width="450"
            height="450"
            viewBox="0 0 450 450"
            className="drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="housingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a4a4a" />
                <stop offset="100%" stopColor="#303030" />
              </linearGradient>
              <filter id="innerShadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="0" dy="2" result="offsetblur"/>
                <feFlood floodColor="#000000" floodOpacity="0.5"/>
                <feComposite in2="offsetblur" operator="in"/>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Outer housing */}
            <rect x="50" y="50" width="350" height="350" rx="20" fill="url(#housingGradient)" stroke="#F98614" strokeWidth="2" />
            <rect x="70" y="70" width="310" height="310" rx="15" fill="#202020" filter="url(#innerShadow)" />
            
            {/* Mounting holes */}
            <circle cx="80" cy="80" r="8" fill="#181818" stroke="#F98614" strokeWidth="1" />
            <circle cx="370" cy="80" r="8" fill="#181818" stroke="#F98614" strokeWidth="1" />
            <circle cx="80" cy="370" r="8" fill="#181818" stroke="#F98614" strokeWidth="1" />
            <circle cx="370" cy="370" r="8" fill="#181818" stroke="#F98614" strokeWidth="1" />
          </svg>
        </div>

        {/* Ball Bearing */}
        <div
          ref={bearingRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <svg
            width="280"
            height="280"
            viewBox="0 0 280 280"
            className="drop-shadow-xl"
          >
            <defs>
              <radialGradient id="bearingGradient">
                <stop offset="0%" stopColor="#ECECEC" />
                <stop offset="100%" stopColor="#999999" />
              </radialGradient>
              <pattern id="ballPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="8" fill="#ECECEC" stroke="#666666" strokeWidth="1" />
              </pattern>
            </defs>
            {/* Outer race */}
            <circle cx="140" cy="140" r="130" fill="url(#bearingGradient)" stroke="#666666" strokeWidth="2" />
            <circle cx="140" cy="140" r="110" fill="#303030" />
            {/* Balls */}
            <circle cx="140" cy="140" r="120" fill="none" stroke="url(#ballPattern)" strokeWidth="20" />
            {/* Inner race */}
            <circle cx="140" cy="140" r="100" fill="url(#bearingGradient)" stroke="#666666" strokeWidth="2" />
            <circle cx="140" cy="140" r="80" fill="#202020" />
          </svg>
        </div>

        {/* Shaft */}
        <div
          ref={shaftRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            className="drop-shadow-lg"
          >
            <defs>
              <linearGradient id="shaftGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ECECEC" />
                <stop offset="50%" stopColor="#F98614" />
                <stop offset="100%" stopColor="#c25d00" />
              </linearGradient>
              <filter id="shaftShadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                <feOffset dx="2" dy="2" result="offsetblur"/>
                <feFlood floodColor="#000000" floodOpacity="0.3"/>
                <feComposite in2="offsetblur" operator="in"/>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Main shaft */}
            <circle cx="80" cy="80" r="70" fill="url(#shaftGradient)" filter="url(#shaftShadow)" />
            {/* Keyway */}
            <rect x="75" y="10" width="10" height="70" fill="#303030" />
            {/* Center bore */}
            <circle cx="80" cy="80" r="20" fill="#181818" stroke="#F98614" strokeWidth="2" />
            {/* Splines */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1="80"
                y1="80"
                x2={80 + 60 * Math.cos((angle * Math.PI) / 180)}
                y2={80 + 60 * Math.sin((angle * Math.PI) / 180)}
                stroke="#666666"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}
          </svg>
        </div>

        {/* Precision Gear */}
        <div
          ref={gearRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            className="drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F98614" />
                <stop offset="100%" stopColor="#e67100" />
              </linearGradient>
              <filter id="gearBevel">
                <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="1"/>
                <feSpecularLighting result="specOut" in="blur" specularConstant="2" specularExponent="20" lightingColor="white">
                  <fePointLight x="-50" y="30" z="200"/>
                </feSpecularLighting>
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut2"/>
                <feComposite in="SourceGraphic" in2="specOut2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
              </filter>
            </defs>
            {/* Gear teeth - professional involute profile */}
            <path
              d="M120,20 L125,25 L130,22 L135,28 L140,26 L145,32 L150,31 L155,38 L160,38 L165,45 L170,46 L173,53 L178,55 L180,62 L185,65 L186,72 L190,76 L190,83 L194,88 L193,95 L196,101 L194,108 L196,115 L193,122 L194,129 L190,135 L190,142 L186,148 L185,155 L180,158 L178,165 L173,167 L170,174 L165,175 L160,182 L155,182 L150,189 L145,188 L140,194 L135,192 L130,198 L125,195 L120,200 L115,195 L110,198 L105,192 L100,194 L95,188 L90,189 L85,182 L80,182 L75,175 L70,174 L67,167 L62,165 L60,158 L55,155 L54,148 L50,142 L50,135 L46,129 L47,122 L44,115 L46,108 L44,101 L47,95 L46,88 L50,83 L50,76 L54,72 L55,65 L60,62 L62,55 L67,53 L70,46 L75,45 L80,38 L85,38 L90,31 L95,32 L100,26 L105,28 L110,22 L115,25 Z"
              fill="url(#gearGradient)"
              stroke="#9a4a00"
              strokeWidth="2"
              filter="url(#gearBevel)"
            />
            {/* Hub */}
            <circle cx="120" cy="120" r="50" fill="#303030" stroke="#F98614" strokeWidth="2" />
            {/* Bolt pattern */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <circle
                key={angle}
                cx={120 + 35 * Math.cos((angle * Math.PI) / 180)}
                cy={120 + 35 * Math.sin((angle * Math.PI) / 180)}
                r="4"
                fill="#181818"
                stroke="#666666"
                strokeWidth="1"
              />
            ))}
            {/* Center bore with keyway */}
            <circle cx="120" cy="120" r="20" fill="#181818" stroke="#F98614" strokeWidth="1" />
            <rect x="115" y="100" width="10" height="20" fill="#101010" />
          </svg>
        </div>

        {/* Technical details overlay */}
        <div className="absolute bottom-4 left-4 text-text-500 text-xs font-mono">
          <div>Module: 2.5</div>
          <div>Teeth: 48</div>
          <div>Pressure Angle: 20°</div>
        </div>

        {/* Dimension lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#F98614" opacity="0.5" />
            </marker>
          </defs>
          <line x1="50" y1="30" x2="200" y2="30" stroke="#F98614" strokeWidth="1" opacity="0.3" markerEnd="url(#arrowhead)" />
          <text x="125" y="25" fill="#F98614" fontSize="10" textAnchor="middle" opacity="0.5">⌀240mm</text>
        </svg>

        {/* Floating particles for depth */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MechanicalAssembly3D;
