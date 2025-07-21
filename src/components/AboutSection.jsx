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
    // {
    //   icon: "carbon:rocket",
    //   title: "Rapid Deployment",
    //   description: "Agile development with continuous integration and delivery"
    // }
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
    <section id="about-section" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 min-h-screen" aria-labelledby="about-heading">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Enhanced Particles */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400/80 rounded-full animate-bounce delay-500 shadow-lg shadow-blue-400/50"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-indigo-400/80 rounded-full animate-bounce delay-1000 shadow-lg shadow-indigo-400/50"></div>
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-blue-300/80 rounded-full animate-bounce delay-1500 shadow-lg shadow-blue-300/50"></div>
        <div className="absolute top-1/4 right-1/6 w-2 h-2 bg-indigo-300/60 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-300/60 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="opacity-100 translate-y-0 transition-all duration-1000">
              <div className="inline-flex items-center px-6 py-3 bg-blue-800/30 backdrop-blur-sm border border-blue-500/30 rounded-full mb-8 animate-pulse">
                <Icon icon="carbon:enterprise" className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-sm font-medium text-blue-100/90 tracking-wide uppercase">About Quest Information Hub</span>
              </div>
              
              <h2 
                id="about-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-blue-100 leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                  Innovating the Future
                </span>
                <br />
                <span className="text-blue-100/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  of Software Development
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100/70 max-w-4xl mx-auto leading-relaxed px-4">
                For over 8 years, Quest Information Hub has been at the forefront of digital transformation, 
                delivering cutting-edge software solutions that empower businesses worldwide.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Left Column - Story & Values */}
            <div className="opacity-100 translate-x-0 space-y-8 transition-all duration-1000">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-100">
                  Our <span className="text-blue-400">Story</span>
                </h3>
                <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed">
                  Founded by passionate engineers and visionaries, Quest Information Hub began with a simple mission: 
                  to bridge complex technology with business success. Today, we're the trusted technology 
                  partner for enterprises worldwide.
                </p>
                <p className="text-lg sm:text-xl text-blue-100/70 leading-relaxed">
                  Our expertise spans web development, mobile apps, cloud infrastructure, AI/ML solutions, 
                  and digital transformation. We craft digital experiences that drive measurable results.
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-100">
                  Our <span className="text-indigo-400">Values</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:bg-blue-800/30 hover:border-blue-400/30 transition-all duration-300 group">
                    <Icon icon="carbon:sustainability" className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold text-blue-100 mb-3">Innovation</h4>
                    <p className="text-blue-200/70 leading-relaxed">Continuously pushing boundaries with cutting-edge technology</p>
                  </div>
                  <div className="p-6 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:bg-blue-800/30 hover:border-blue-400/30 transition-all duration-300 group">
                    <Icon icon="carbon:partnership" className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold text-blue-100 mb-3">Partnership</h4>
                    <p className="text-blue-200/70 leading-relaxed">Building lasting relationships based on trust and transparency</p>
                  </div>
                  <div className="p-6 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:bg-blue-800/30 hover:border-blue-400/30 transition-all duration-300 group">
                    <Icon icon="carbon:star" className="w-8 h-8 text-blue-300 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold text-blue-100 mb-3">Excellence</h4>
                    <p className="text-blue-200/70 leading-relaxed">Delivering exceptional quality in every project we undertake</p>
                  </div>
                  <div className="p-6 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:bg-blue-800/30 hover:border-blue-400/30 transition-all duration-300 group">
                    <Icon icon="carbon:earth" className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold text-blue-100 mb-3">Impact</h4>
                    <p className="text-blue-200/70 leading-relaxed">Creating solutions that make a positive difference</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Features */}
            <div className="opacity-100 translate-x-0 space-y-8 transition-all duration-1000">
              {/* Statistics */}
              <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8 shadow-2xl shadow-blue-500/20">
                <h3 className="text-3xl sm:text-4xl font-bold text-blue-100 mb-10 text-center">
                  By the <span className="text-blue-400 animate-pulse">Numbers</span>
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center group">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {counters.experience}+
                    </div>
                    <div className="text-base sm:text-lg text-blue-200/70 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {counters.projects}+
                    </div>
                    <div className="text-base sm:text-lg text-blue-200/70 font-medium">Projects Delivered</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {counters.clients}+
                    </div>
                    <div className="text-base sm:text-lg text-blue-200/70 font-medium">Happy Clients</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-100 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {counters.satisfaction}%
                    </div>
                    <div className="text-base sm:text-lg text-blue-200/70 font-medium">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-100">
                  What Sets Us <span className="text-indigo-400">Apart</span>
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`p-6 bg-blue-900/20 backdrop-blur-sm rounded-xl border transition-all duration-300 cursor-pointer group ${
                        activeFeature === index 
                          ? 'bg-blue-800/30 border-blue-400/50 shadow-lg shadow-blue-500/20' 
                          : 'border-blue-500/20 hover:bg-blue-800/30 hover:border-blue-400/30'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg transition-all duration-300 ${
                          activeFeature === index ? 'bg-blue-600/30' : 'bg-blue-900/30'
                        } group-hover:bg-blue-600/30`}>
                          <Icon icon={feature.icon} className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-blue-100 mb-2">{feature.title}</h4>
                          <p className="text-blue-200/70 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="opacity-100 translate-y-0 mb-16 transition-all duration-1000">
            <div className="text-center mb-16">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-100 mb-6">
                Meet Our <span className="text-blue-400">Leadership</span>
              </h3>
              <p className="text-xl text-blue-100/70 max-w-3xl mx-auto leading-relaxed">
                Led by industry veterans with decades of combined experience in technology and business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group text-center p-8 bg-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:bg-blue-800/30 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="relative mx-auto mb-6 w-32 h-32">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-blue-100 mb-3">{member.name}</h4>
                  <p className="text-blue-400 font-semibold mb-2 text-lg">{member.role}</p>
                  <p className="text-blue-200/60 mb-2">{member.experience}</p>
                  <p className="text-indigo-400 font-medium">{member.speciality}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="opacity-100 translate-y-0 text-center transition-all duration-1000">
            <div className="bg-gradient-to-r from-blue-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-12 max-w-5xl mx-auto shadow-xl shadow-blue-500/20">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-100 mb-6">
                Ready to <span className="text-blue-400">Transform</span> Your Business?
              </h3>
              <p className="text-xl text-blue-100/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how we can help you achieve your technology goals and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => navigate('/contact-us')}
                  className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Icon icon="carbon:arrow-right" className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                    Get Started Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
                
                <button 
                  onClick={() => navigate('/portfolio')}
                  className="px-10 py-5 bg-blue-900/30 backdrop-blur-sm text-blue-100 font-bold rounded-xl border border-blue-500/30 hover:bg-blue-800/40 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <Icon icon="carbon:view" className="w-6 h-6 mr-3" />
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