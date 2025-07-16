import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionVisionSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-black to-primary/20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="font-bold mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff'
            }}
          >
            Who We Are
          </h2>
          <p 
            className="max-w-2xl mx-auto"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1.1rem'
            }}
          >
            At Q HUB INFORMATION, we turn complexity into clarity. Our name reflects our commitment to 
            being the central hub for innovative software solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div 
            className="relative bg-black/70 rounded-2xl shadow-lg p-8 lg:p-10 border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative">
              <div 
                className="absolute -top-20 -left-20 text-[10rem] font-bold opacity-10 select-none pointer-events-none"
                style={{ color: '#1B4DFF' }}
              >
                M
              </div>
              <div className="relative z-10">
                <h3 
                  className="font-bold mb-6"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #1B4DFF 0%, #00D4FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Our Mission
                </h3>
                <p 
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: 'rgba(255,255,255,0.9)' }}
                >
                  To empower businesses through intelligent, reliable, and future-ready software — 
                  turning complex challenges into powerful digital opportunities.
                </p>
                <div className="space-y-3">
                  {['Innovation', 'Security', 'Scalability'].map((value, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: '#1B4DFF' }}
                      />
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>{value} at our core</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative element */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl"
                style={{ backgroundColor: '#1B4DFF' }}
              />
            </div>
          </div>

          {/* Vision Card */}
          <div 
            className="relative bg-black/70 rounded-2xl shadow-lg p-8 lg:p-10 border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative">
              <div 
                className="absolute -top-20 -right-20 text-[10rem] font-bold opacity-10 select-none pointer-events-none"
                style={{ color: '#00D4FF' }}
              >
                V
              </div>
              <div className="relative z-10">
                <h3 
                  className="font-bold mb-6"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #00D4FF 0%, #1B4DFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Our Vision
                </h3>
                <p 
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: 'rgba(255,255,255,0.9)' }}
                >
                  To be a trusted global technology partner, known for precision engineering, 
                  innovation, and delivering solutions that make a meaningful impact.
                </p>
                <div className="space-y-3">
                  {['Global Reach', 'Trusted Partner', 'Meaningful Impact'].map((goal, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: '#00D4FF' }}
                      />
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative element */}
              <div 
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-20 blur-2xl"
                style={{ backgroundColor: '#00D4FF' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection; 