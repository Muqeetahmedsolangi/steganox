import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { aboutData } from '../constant/data';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const statsRefs = useRef([]);
  const imageRef = useRef(null);
  const badgeRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content fade in
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Badges animation
      badgeRefs.current.forEach((badge, i) => {
        if (badge) {
          gsap.fromTo(badge,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.2 + i * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: badge,
                start: 'top 90%',
                once: true
              }
            }
          );
        }
      });

      // Stats animation
      statsRefs.current.forEach((stat, index) => {
        if (stat) {
          const numberEl = stat.querySelector('.stat-number');
          const finalNumber = parseInt(numberEl.getAttribute('data-value'));
          gsap.fromTo(stat,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: stat,
                start: 'top 90%',
                once: true
              }
            }
          );
          // Number counting
          gsap.to({}, {
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              once: true
            },
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              const progress = this.progress();
              numberEl.textContent = Math.floor(finalNumber * progress) + (stat.dataset.suffix || '');
            },
            onComplete: function() {
              numberEl.textContent = finalNumber + (stat.dataset.suffix || '');
            }
          });
        }
      });

      // Image fade in + animated border
      gsap.fromTo(imageRef.current,
        { scale: 0.96, opacity: 0, boxShadow: '0 0 0 0 rgba(168,85,247,0.0)' },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          boxShadow: '0 0 32px 0 rgba(168,85,247,0.25)',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
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
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-black"
      aria-labelledby="about-heading"
    >
      {/* Subtle animated SVG background */}
      <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
        <defs>
          <radialGradient id="bg-grad" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.04" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-grad)" />
        <circle cx="80%" cy="20%" r="120" fill="#a855f7" fillOpacity="0.08">
          <animate attributeName="r" values="120;140;120" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-1 lg:order-2 w-full mb-10 lg:mb-0">
            <div 
              ref={imageRef}
              className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-purple-500/10"
              style={{ boxShadow: '0 20px 60px rgba(168,85,247,0.18)' }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-blue-600/30 z-10" />
              <img
                src={aboutData.image || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80'}
                alt={aboutData.imageAlt || 'Modern software development team at work'}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Dynamic overlay badges */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-20 flex flex-wrap gap-2 md:gap-3">
                {aboutData.badges && aboutData.badges.map((tag, index) => (
                  <div
                    key={index}
                    ref={el => badgeRefs.current[index] = el}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-md text-xs md:text-sm border border-white/20 text-white bg-white/10 shadow-sm"
                    style={{
                      color: '#fff',
                      fontWeight: 500,
                      letterSpacing: '0.01em',
                      backgroundColor: 'rgba(255,255,255,0.10)',
                      border: '1px solid rgba(255,255,255,0.18)'
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
              id="about-heading"
              className="font-bold mb-6 md:mb-8"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#fff',
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
              <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.88)' }}>
                {aboutData.mainText}
              </p>
              <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {aboutData.secondaryText}
              </p>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#fff' }}>
                  {aboutData.highlights.title}
                </h3>
                <p className="text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {aboutData.highlights.description}
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12" aria-label="Company stats">
              {aboutData.stats.map((stat, index) => (
                <li
                  key={index}
                  ref={el => statsRefs.current[index] = el}
                  className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border transition-all duration-300 hover:scale-105 bg-black/60 focus-within:ring-2 ring-purple-500/30 outline-none cursor-pointer"
                  tabIndex={0}
                  data-suffix={stat.suffix || ''}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)'
                  }}
                  aria-label={stat.label + ': ' + stat.value + (stat.suffix || '')}
                >
                  <span
                    className="stat-number text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2"
                    data-value={stat.value}
                    style={{
                      background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}
                  >
                    0{stat.suffix}
                  </span>
                  <div className="text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {stat.label}
                  </div>
                </li>
              ))}
            </ul>

            {/* Optional CTA */}
            {aboutData.cta && (
              <div className="mt-10 md:mt-14">
                <a
                  href={aboutData.cta.href}
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  style={{ fontSize: '1.1rem' }}
                >
                  {aboutData.cta.label}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 