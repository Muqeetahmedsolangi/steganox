import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { aboutData } from '../constant/data';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Set visible immediately to ensure content shows
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animations
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);
    
    // Start counter animation immediately
    setTimeout(() => {
      animateCounters();
    }, 500);
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const animateCounters = () => {
    const targets = { experience: 8, projects: 500, clients: 150, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });
  };

  const features = [
    {
      icon: "carbon:analytics",
      title: "Data-Driven Solutions",
      description: "Leveraging analytics and AI to drive business intelligence"
    },
    {
      icon: "carbon:cloud-satellite",
      title: "Cloud-First Architecture",
      description: "Scalable, secure, and modern cloud-native applications"
    },
    {
      icon: "carbon:security",
      title: "Enterprise Security",
      description: "Bank-grade security and compliance standards"
    },
    {
      icon: "carbon:rocket",
      title: "Rapid Deployment",
      description: "Agile development with continuous integration and delivery"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CTO & Co-Founder",
      experience: "15+ years",
      speciality: "AI & Machine Learning",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Michael Chen",
      role: "Lead Architect",
      experience: "12+ years",
      speciality: "Cloud Infrastructure",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Director",
      experience: "10+ years",
      speciality: "UX & Product Strategy",
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <section id="about-section" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-black min-h-screen" aria-labelledby="about-heading">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-black/50 to-secondary-900/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-accent-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-secondary-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Enhanced Particles */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-accent-400/80 rounded-full animate-bounce delay-500 shadow-lg shadow-accent-400/50"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary-400/80 rounded-full animate-bounce delay-1000 shadow-lg shadow-primary-400/50"></div>
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-secondary-400/80 rounded-full animate-bounce delay-1500 shadow-lg shadow-secondary-400/50"></div>
        <div className="absolute top-1/4 right-1/6 w-2 h-2 bg-accent-300/60 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-300/60 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="opacity-100 translate-y-0 transition-all duration-1000">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full mb-6 sm:mb-8 animate-pulse">
                <Icon icon="carbon:enterprise" className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">About Q Information Hub</span>
              </div>
              
              <h2 
                id="about-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              >
                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent animate-pulse">
                  Innovating the Future
                </span>
                <br />
                <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  of Software Development
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
                For over 8 years, Q Information Hub has been at the forefront of digital transformation, 
                delivering cutting-edge software solutions that empower businesses worldwide.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Left Column - Story & Values */}
            <div className="opacity-100 translate-x-0 space-y-6 transition-all duration-1000">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Our <span className="text-primary-400">Story</span>
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Founded by passionate engineers and visionaries, Q Information Hub began with a simple mission: 
                  to bridge complex technology with business success. Today, we're the trusted technology 
                  partner for enterprises worldwide.
                </p>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  Our expertise spans web development, mobile apps, cloud infrastructure, AI/ML solutions, 
                  and digital transformation. We craft digital experiences that drive measurable results.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Our <span className="text-accent-400">Values</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <Icon icon="carbon:sustainability" className="w-8 h-8 text-primary-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-white mb-2">Innovation</h4>
                    <p className="text-sm text-white/70">Continuously pushing boundaries with cutting-edge technology</p>
                  </div>
                  <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <Icon icon="carbon:partnership" className="w-8 h-8 text-accent-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-white mb-2">Partnership</h4>
                    <p className="text-sm text-white/70">Building lasting relationships based on trust and transparency</p>
                  </div>
                  <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <Icon icon="carbon:star" className="w-8 h-8 text-secondary-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-white mb-2">Excellence</h4>
                    <p className="text-sm text-white/70">Delivering exceptional quality in every project we undertake</p>
                  </div>
                  <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <Icon icon="carbon:earth" className="w-8 h-8 text-primary-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
                    <p className="text-sm text-white/70">Creating solutions that make a positive difference</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Features */}
            <div className="opacity-100 translate-x-0 space-y-6 transition-all duration-1000">
              {/* Statistics */}
              <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 backdrop-blur-sm rounded-2xl border border-primary-400/30 p-6 sm:p-8 shadow-2xl shadow-primary-500/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                  By the <span className="text-primary-400 animate-pulse">Numbers</span>
                </h3>
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  <div className="text-center group">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {counters.experience}+
                    </div>
                    <div className="text-sm sm:text-base text-white/70">Years Experience</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {counters.projects}+
                    </div>
                    <div className="text-sm sm:text-base text-white/70">Projects Delivered</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {counters.clients}+
                    </div>
                    <div className="text-sm sm:text-base text-white/70">Happy Clients</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {counters.satisfaction}%
                    </div>
                    <div className="text-sm sm:text-base text-white/70">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  What Sets Us <span className="text-accent-400">Apart</span>
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group ${activeFeature === index ? 'bg-white/10 border-primary-400/50' : ''}`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg transition-all duration-300 ${activeFeature === index ? 'bg-primary-500/20' : 'bg-white/10'} group-hover:bg-primary-500/20`}>
                          <Icon icon={feature.icon} className="w-6 h-6 text-primary-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                          <p className="text-sm text-white/70">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="opacity-100 translate-y-0 mb-12 transition-all duration-1000">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Meet Our <span className="text-primary-400">Leadership</span>
              </h3>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Led by industry veterans with decades of combined experience in technology and business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group text-center p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative mx-auto mb-6 w-24 h-24 sm:w-32 sm:h-32">
                    <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-primary-400 font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-white/60 mb-2">{member.experience}</p>
                  <p className="text-sm text-accent-400 font-medium">{member.speciality}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="opacity-100 translate-y-0 text-center transition-all duration-1000">
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 sm:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to <span className="text-primary-400">Transform</span> Your Business?
              </h3>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your technology goals and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/contact-us')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Icon icon="carbon:arrow-right" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Get Started Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
                
                <button 
                  onClick={() => navigate('/portfolio')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    <Icon icon="carbon:view" className="w-5 h-5 mr-2" />
                    View Our Work
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 