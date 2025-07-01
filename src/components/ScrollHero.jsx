import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollHero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 100
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "center center",
            scrub: 1
          }
        }
      );

      // Subtitle animation
      gsap.fromTo(subtitleRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center+=100",
            end: "center center",
            scrub: 1
          }
        }
      );

      // Image parallax effect
      gsap.to(imageRef.current, {
        y: -100,
        scale: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      // Features stagger animation
      featuresRef.current.forEach((feature, index) => {
        gsap.fromTo(feature,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            scale: 0.9
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: feature,
              start: "top bottom-=100",
              end: "bottom center",
              scrub: 1
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Deliver projects 3x faster with agile development"
    },
    {
      icon: "🎯",
      title: "Pixel Perfect",
      description: "Attention to detail in every line of code"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-grade security for your applications"
    },
    {
      icon: "🌐",
      title: "Global Scale",
      description: "Built to handle millions of users worldwide"
    }
  ];

  return (
    <section ref={containerRef} className="relative h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      
      {/* Animated background image */}
      <div 
        ref={imageRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 
          ref={titleRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6"
          style={{
            background: 'linear-gradient(to right, #fff, #a78bfa, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          CodeCraft Pro
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl"
        >
          We transform your ideas into powerful software solutions that drive business growth
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-6xl">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featuresRef.current[index] = el}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ScrollHero; 