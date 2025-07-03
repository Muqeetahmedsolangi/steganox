import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { aboutData } from '../constant/data';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const statsRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade in animation on scroll
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // Stats animation
      statsRefs.current.forEach((stat, index) => {
        if (stat) {
          const numberEl = stat.querySelector('.stat-number');
          const finalNumber = parseInt(numberEl.getAttribute('data-value'));
          
          gsap.fromTo(stat,
            {
              scale: 0.8,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: stat,
                start: "top 90%",
                once: true
              }
            }
          );

          // Number counting
          gsap.to({}, {
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              once: true
            },
            duration: 2,
            ease: "power2.out",
            onUpdate: function() {
              const progress = this.progress();
              numberEl.textContent = Math.floor(finalNumber * progress);
            }
          });
        }
      });

      // Image fade in
      gsap.fromTo(imageRef.current,
        {
          scale: 0.9,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 overflow-hidden bg-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-1 lg:order-2 w-full mb-10 lg:mb-0">
            <div 
              ref={imageRef}
              className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: '0 20px 60px rgba(168,85,247,0.2)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-blue-600/30 z-10" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              {/* Simple overlay badges */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-20 flex flex-wrap gap-2 md:gap-3">
                {['Innovation', 'Security', 'Scale'].map((tag, index) => (
                  <div 
                    key={index}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-md text-xs md:text-sm"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#ffffff'
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content side */}
          <div ref={contentRef} className="order-2 lg:order-1 w-full">
            <h2 
              className="font-bold mb-6 md:mb-8"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#ffffff',
                lineHeight: '1.2'
              }}
            >
              {aboutData.title.split(' ').map((word, index) => (
                <span key={index}>
                  {word}{' '}
                  {word === 'Steganox' && (
                    <span style={{
                      background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {word}
                    </span>
                  )}
                </span>
              ))}
            </h2>

            <div className="space-y-4 md:space-y-6">
              <p 
                className="text-base md:text-lg" 
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                {aboutData.mainText}
              </p>

              <p 
                className="text-base md:text-lg" 
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {aboutData.secondaryText}
              </p>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#ffffff' }}>
                  {aboutData.highlights.title}
                </h3>
                <p className="text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {aboutData.highlights.description}
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={index}
                  ref={el => statsRefs.current[index] = el}
                  className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border transition-all duration-300 hover:scale-105 bg-black/60"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div 
                    className="stat-number text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2"
                    data-value={stat.value}
                    style={{
                      background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    0{stat.suffix}
                  </div>
                  <div className="text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 