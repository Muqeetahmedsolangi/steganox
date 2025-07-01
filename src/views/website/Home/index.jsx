import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FuturisticHero from '../../../components/FuturisticHero';
import AboutSection from '../../../components/AboutSection';
import ExpertiseSection from '../../../components/ExpertiseSection';
import ServicesSection from '../../../components/ServicesSection';
import IndustriesSection from '../../../components/IndustriesSection';
import WhyChooseSection from '../../../components/WhyChooseSection';
import MissionVisionSection from '../../../components/MissionVisionSection';
import InfiniteScroll3D from '../../../components/InfiniteScroll3D';
import ParallaxShowcase from '../../../components/ParallaxShowcase';
import TimelineScroll from '../../../components/TimelineScroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    // Lenis-like smooth scroll
    let scrollY = window.scrollY;
    let targetY = window.scrollY;
    
    const updateScroll = () => {
      scrollY += (targetY - scrollY) * 0.1;
      window.scrollTo(0, scrollY);
      
      if (Math.abs(targetY - scrollY) > 0.5) {
        requestAnimationFrame(updateScroll);
      }
    };

    const onWheel = (e) => {
      e.preventDefault();
      targetY += e.deltaY;
      targetY = Math.max(0, Math.min(targetY, document.body.scrollHeight - window.innerHeight));
      requestAnimationFrame(updateScroll);
    };

    // window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.documentElement.style.scrollBehavior = 'auto';
      // window.removeEventListener('wheel', onWheel);
    };
  }, [location]);

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Hero Section */}
      <FuturisticHero />

      {/* About Section */}
      <AboutSection />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Mission & Vision Section */}
      <MissionVisionSection />

      {/* 3D Infinite Scroll Tech */}
      <InfiniteScroll3D />

      {/* Process Timeline */}
      <TimelineScroll />

      {/* Parallax Portfolio Showcase */}
      <ParallaxShowcase />

      {/* Stats Section with Count Animation */}
      <section 
        className="relative py-32"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered", icon: "🚀" },
              { number: "50M+", label: "Users Served", icon: "👥" },
              { number: "99.9%", label: "Uptime SLA", icon: "⚡" },
              { number: "24/7", label: "Support Available", icon: "🛡️" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div 
                  className="mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ fontSize: '3rem' }}
                >
                  {stat.icon}
                </div>
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: '#ffffff'
                  }}
                >
                  {stat.number}
                </div>
                <div 
                  style={{
                    color: 'rgba(255,255,255,0.6)'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with 3D Cards */}
      <section 
        className="relative py-32 overflow-hidden"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="font-bold mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                color: '#ffffff'
              }}
            >
              Client Success Stories
            </h2>
            <p 
              style={{
                fontSize: '1.3rem',
                color: 'rgba(255,255,255,0.6)'
              }}
            >
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO, TechVentures",
                comment: "CodeCraft delivered our AI platform in record time. The code quality and architecture are exceptional.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
              },
              {
                name: "Michael Torres",
                role: "CTO, FinanceHub",
                comment: "Their blockchain expertise helped us launch a DeFi platform that now handles $100M+ in daily volume.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
              },
              {
                name: "Emily Watson",
                role: "Founder, HealthTech Pro",
                comment: "The mobile app they built scaled to 1M+ users seamlessly. Best development team we've worked with.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-8 border"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px)',
                  borderColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 
                      className="font-bold"
                      style={{ color: '#ffffff' }}
                    >
                      {testimonial.name}
                    </h4>
                    <p 
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.9rem'
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <p 
                  className="mb-6"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: '1.5'
                  }}
                >
                  {testimonial.comment}
                </p>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#fbbf24' }}>⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-32"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              color: '#ffffff',
              lineHeight: '1.1'
            }}
          >
            Ready to Build the Future?
          </h2>
          <p 
            className="mb-12 max-w-3xl mx-auto"
            style={{
              fontSize: '1.3rem',
              color: 'rgba(255,255,255,0.6)'
            }}
          >
            Let's create something extraordinary together. Get a free consultation and project estimate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              className="group relative px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontWeight: '600',
                border: 'none'
              }}
            >
              <span className="relative z-10">
                Start Your Project
              </span>
            </button>
            
            <button 
              className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '2px solid rgba(255,255,255,0.3)',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.6)';
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
