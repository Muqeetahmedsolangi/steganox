import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FuturisticHero from '../../../components/FuturisticHero';
import AboutSection from '../../../components/AboutSection';
import ServicesSection from '../../../components/ServicesSection';
import IndustriesSection from '../../../components/IndustriesSection';
import WhyChooseSection from '../../../components/WhyChooseSection';
import MissionVisionSection from '../../../components/MissionVisionSection';
import ExpertiseSection from '../../../components/ExpertiseSection';
import ParallaxShowcase from '../../../components/ParallaxShowcase';
import TimelineScroll from '../../../components/TimelineScroll';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    // Temporarily disabled custom scroll handling to fix navigation
    // let scrollY = window.scrollY;
    // let targetY = window.scrollY;
    
    // const updateScroll = () => {
    //   scrollY += (targetY - scrollY) * 0.1;
    //   window.scrollTo(0, scrollY);
      
    //   if (Math.abs(targetY - scrollY) > 0.5) {
    //     requestAnimationFrame(updateScroll);
    //   }
    // };

    // const onWheel = (e) => {
    //   e.preventDefault();
    //   targetY += e.deltaY;
    //   targetY = Math.max(0, Math.min(targetY, document.body.scrollHeight - window.innerHeight));
    //   requestAnimationFrame(updateScroll);
    // };

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
      <div id="home">
        <FuturisticHero />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Tech Stack */}
      <ExpertiseSection />

      {/* Portfolio Showcase */}
      <ParallaxShowcase />

      {/* Process Timeline */}
      <div id="process">
        <TimelineScroll />
      </div>

      {/* Stats Section with Count Animation */}
      {/* <Stats3D /> */}

      {/* FAQ Section */}
      {/* <FAQSection /> */}

      {/* Testimonials with 3D Cards */}
      <section 
        className="relative py-32 overflow-hidden"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-sm font-semibold rounded-full border border-purple-600/30">
                TESTIMONIALS
              </span>
            </div>
            <h2 
              className="font-bold mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: '1.1',
                color: '#ffffff'
              }}
            >
              Client Success <span style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Stories</span>
            </h2>
            <p 
              style={{
                fontSize: '1.3rem',
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Trusted by industry leaders worldwide. See how we've transformed their businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "CEO, TechVentures",
                company: "AI Platform",
                comment: "Steganox delivered our AI platform in record time. The code quality and architecture are exceptional. Their team's expertise in machine learning and scalable systems exceeded our expectations.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
                impact: "300% ROI",
                industry: "Technology"
              },
              {
                name: "Michael Torres",
                role: "CTO, FinanceHub",
                company: "DeFi Platform",
                comment: "Their blockchain expertise helped us launch a DeFi platform that now handles $100M+ in daily volume. The security implementation and performance optimization are outstanding.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
                impact: "$100M+ Daily Volume",
                industry: "Finance"
              },
              {
                name: "Emily Watson",
                role: "Founder, HealthTech Pro",
                company: "Mobile App",
                comment: "The mobile app they built scaled to 1M+ users seamlessly. Best development team we've worked with. Their attention to detail and user experience design is unmatched.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
                impact: "1M+ Users",
                industry: "Healthcare"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(168,85,247,0.3), transparent 70%)'
                  }}
                />

                {/* Header with large image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Industry badge */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#ffffff'
                    }}
                  >
                    {testimonial.industry}
                  </div>

                  {/* Impact badge */}
                  <div 
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                      color: '#ffffff'
                    }}
                  >
                    {testimonial.impact}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#fbbf24', fontSize: '1.1rem' }}>⭐</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <svg 
                      className="w-8 h-8 mb-4 opacity-30"
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      style={{ color: '#a855f7' }}
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p 
                      className="text-lg leading-relaxed"
                      style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontStyle: 'italic'
                      }}
                    >
                      "{testimonial.comment}"
                    </p>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/30"
                    />
                    <div>
                      <h4 
                        className="font-bold text-lg"
                        style={{ color: '#ffffff' }}
                      >
                        {testimonial.name}
                      </h4>
                      <p 
                        className="font-medium"
                        style={{
                          color: 'rgba(168,85,247,0.8)',
                          fontSize: '0.9rem'
                        }}
                      >
                        {testimonial.role}
                      </p>
                      <p 
                        style={{
                          color: 'rgba(255,255,255,0.6)', 
                          fontSize: '0.85rem'
                        }}
                      >
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p 
              className="mb-8 text-lg"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Ready to join our success stories?
            </p>
            <button 
              onClick={() => navigate('/contact-us')}
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                color: '#ffffff',
                fontWeight: '600',
                border: 'none',
                boxShadow: '0 10px 30px rgba(168,85,247,0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 15px 40px rgba(168,85,247,0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 10px 30px rgba(168,85,247,0.3)';
              }}
            >
              <span className="relative z-10">Start Your Project</span>
              
              {/* Hover effect overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.2) 100%)',
                  mixBlendMode: 'overlay'
                }}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
