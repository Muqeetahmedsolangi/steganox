import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Set initial state
    gsap.set(cursor, { scale: 1, opacity: 1 });
    gsap.set(follower, { scale: 1, opacity: 0.8 });

    const onMouseMove = (e) => {
      // Faster cursor movement with no delay - properly centered
      gsap.to(cursor, {
        x: e.clientX - 4, // 8px cursor / 2 = 4px offset
        y: e.clientY - 4,
        duration: 0,
        ease: "none"
      });

      // Smoother follower with reduced delay for faster feel - properly centered
      gsap.to(follower, {
        x: e.clientX - 12, // 24px follower / 2 = 12px offset
        y: e.clientY - 12,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const onMouseEnterLink = () => {
      // Professional hover effect - cursor becomes smaller dot
      gsap.to(cursor, {
        scale: 0.8,
        backgroundColor: '#ff5e14',
        duration: 0.15,
        ease: "power2.out"
      });
      
      // Follower becomes slightly larger with professional glow
      gsap.to(follower, {
        scale: 1.3,
        borderWidth: '2px',
        borderColor: '#ff5e14',
        backgroundColor: 'rgba(255, 94, 20, 0.05)',
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const onMouseLeaveLink = () => {
      // Return to normal state quickly
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#ff5e14',
        duration: 0.12,
        ease: "power2.out"
      });
      
      gsap.to(follower, {
        scale: 1,
        borderWidth: '1px',
        borderColor: '#ff5e14',
        backgroundColor: 'transparent',
        duration: 0.12,
        ease: "power2.out"
      });
    };

    // Special effect for buttons
    const onMouseEnterButton = () => {
      gsap.to(cursor, {
        scale: 0.6,
        backgroundColor: '#ffffff',
        duration: 0.15,
        ease: "power2.out"
      });
      
      gsap.to(follower, {
        scale: 1.5,
        borderWidth: '2px',
        borderColor: '#ff5e14',
        backgroundColor: 'rgba(255, 94, 20, 0.08)',
        duration: 0.15,
        ease: "power2.out"
      });
    };

    // Hide cursor when leaving window
    const onMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.1
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.1
      });
    };

    // Event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Add hover effects to different elements
    const links = document.querySelectorAll('a:not(button)');
    const buttons = document.querySelectorAll('button, [role="button"], input[type="submit"]');
    const interactiveElements = document.querySelectorAll('input, textarea, select');

    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    buttons.forEach((button) => {
      button.addEventListener('mouseenter', onMouseEnterButton);
      button.addEventListener('mouseleave', onMouseLeaveLink);
    });

    // Special effect for form elements
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          scale: 0.9,
          backgroundColor: '#ff5e14',
          duration: 0.15
        });
        gsap.to(follower, {
          scale: 1.2,
          borderColor: '#ff5e14',
          backgroundColor: 'rgba(255, 94, 20, 0.03)',
          duration: 0.15
        });
      });
      element.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      
      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', onMouseEnterButton);
        button.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseEnterLink);
        element.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot - smaller and more precise */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-normal"
        style={{
          backgroundColor: '#ff5e14',
          boxShadow: '0 0 6px rgba(255, 94, 20, 0.4)'
        }}
      />
      
      {/* Follower ring - smaller and less intrusive */}
      <div
        ref={followerRef}
        className="custom-cursor-follower fixed w-6 h-6 border rounded-full pointer-events-none z-[9998]"
        style={{
          borderColor: '#ff5e14',
          backgroundColor: 'transparent',
          borderWidth: '1px',
          transition: 'border-width 0.15s ease-out'
        }}
      />
    </>
  );
};

export default CustomCursor; 