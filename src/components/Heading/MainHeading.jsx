import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainHeading = ({ title, text, titleColor = '#6d8551', textColor = '#fff' }) => {
  const headingRef = useRef(null);
  const lineLeftRef = useRef(null);
  const lineRightRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const lineLeft = lineLeftRef.current;
    const lineRight = lineRightRef.current;

    // Heading animation
    gsap.fromTo(
      heading,
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Lines animation
    gsap.fromTo(
      [lineLeft, lineRight],
      {
        scaleX: 0,
        opacity: 0,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={headingRef} className="text-center mb-16 relative">
      <h4 
        className="text-lg font-bold uppercase tracking-wider mb-2 text-neon-500"
        // style={{ color: titleColor }}
      >
        {title}
      </h4>
      <div className="relative inline-block">
                  <h2 
           className="text-4xl md:text-5xl font-bold capitalize text-neon-500 leading-tight"
           style={{ 
             color: textColor,
            textShadow: '0 0 20px rgba(110, 231, 183, 0.3)'
          }}
        >
          {text}
        </h2>
        
        {/* Decorative lines */}
        <div 
          ref={lineLeftRef}
          className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent to-neon-500"
        />
        <div 
          ref={lineRightRef}
          className="absolute -right-20 top-1/2 transform -translate-y-1/2 w-16 h-0.5 bg-gradient-to-l from-transparent to-cyber-500"
        />
      </div>
    </div>
  );
};

export default MainHeading;