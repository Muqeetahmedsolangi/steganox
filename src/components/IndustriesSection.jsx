import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IndustriesSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const industriesSection = document.getElementById('industries-section');
    if (industriesSection) {
      observer.observe(industriesSection);
    }

    // Auto-rotate featured industry
    const interval = setInterval(() => {
      setActiveIndustry(prev => (prev + 1) % 8);
    }, 4000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const industries = [
    {
      id: 1,
      icon: 'carbon:money',
      title: 'FinTech & Banking',
      description: 'Revolutionary financial technology solutions for digital banking and payment systems',
      projects: 45,
      keyFeatures: ['Digital Banking', 'Payment Gateways', 'Blockchain', 'Trading Platforms'],
      caseStudy: 'Built a complete digital banking platform serving 1M+ users',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      icon: 'carbon:health-cross',
      title: 'Healthcare MedTech',
      description: 'Innovative healthcare solutions improving patient care and medical workflows',
      projects: 38,
      keyFeatures: ['EHR Systems', 'Telemedicine', 'Medical IoT', 'Health Analytics'],
      caseStudy: 'Developed telemedicine platform reducing wait times by 70%',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      icon: 'carbon:shopping-cart',
      title: 'E-Commerce & Retail',
      description: 'Next-generation e-commerce platforms and retail management systems',
      projects: 62,
      keyFeatures: ['Online Stores', 'Inventory Management', 'AI Recommendations', 'Mobile Commerce'],
      caseStudy: 'E-commerce platform increased client sales by 300%',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      icon: 'carbon:education',
      title: 'Education & EdTech',
      description: 'Modern learning management systems and educational technology solutions',
      projects: 29,
      keyFeatures: ['LMS Platforms', 'Virtual Classrooms', 'Student Analytics', 'Mobile Learning'],
      caseStudy: 'LMS platform supporting 500K+ students globally with 95% satisfaction rate',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      icon: 'carbon:machine-learning',
      title: 'Manufacturing & Intelligence',
      description: 'Smart manufacturing solutions with IoT integration and automation',
      projects: 35,
      keyFeatures: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain', 'Quality Control'],
      caseStudy: 'IoT solution reduced production downtime by 40%',
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-500/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      icon: 'carbon:logo-discord',
      title: 'Media & Entertainment',
      description: 'Digital media platforms and entertainment technology solutions',
      projects: 25,
      keyFeatures: ['Streaming Platforms', 'Content Management', 'Social Media', 'Gaming Solutions'],
      caseStudy: 'Streaming platform handling 10M+ concurrent users',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-pink-500/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 7,
      icon: 'carbon:delivery-truck',
      title: 'Logistics & Transportation',
      description: 'Advanced logistics management and transportation optimization systems',
      projects: 31,
      keyFeatures: ['Fleet Management', 'Route Optimization', 'Tracking Systems', 'Warehouse Management'],
      caseStudy: 'Logistics platform reduced delivery times by 35%',
      color: 'from-teal-500 to-green-600',
      bgColor: 'bg-teal-500/10',
      image: '/api/placeholder/400/300'
    },
    {
      id: 8,
      icon: 'carbon:earth',
      title: 'Real Estate & PropTech',
      description: 'Property technology solutions transforming real estate operations',
      projects: 22,
      keyFeatures: ['Property Management', 'Virtual Tours', 'CRM Systems', 'Market Analytics'],
      caseStudy: 'PropTech platform managing $2B+ in properties',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-500/10',
      image: '/api/placeholder/400/300'
    }
  ];

  const successMetrics = [
    { label: 'Industries Served', value: '25+', icon: 'carbon:industry' },
    { label: 'Sector Projects', value: '300+', icon: 'carbon:chart-line' },
    { label: 'Domain Experts', value: '50+', icon: 'carbon:user-multiple' },
    { label: 'Client Retention', value: '95%', icon: 'carbon:thumbs-up' }
  ];

  return (
    <section id="industries-section" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-black/50 to-gray-800/70"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 left-10 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 sm:right-20 w-64 sm:w-80 h-64 sm:h-80 bg-accent-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Industry Icons Background */}
        <div className="hidden lg:block absolute top-40 right-1/3 w-20 h-20 bg-secondary-500/10 rounded-full animate-float"></div>
        <div className="hidden lg:block absolute bottom-40 left-1/3 w-16 h-16 bg-primary-500/10 rounded-full animate-float delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6 sm:mb-8">
                <Icon icon="carbon:industry" className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide uppercase">Industry Solutions</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
                  Industries We
                </span>
                <br />
                <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Transform & Innovate
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4">
                Delivering specialized software solutions across diverse sectors with deep domain expertise, 
                cutting-edge technology, and industry-specific innovations.
              </p>
              
              {/* Success Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 max-w-4xl mx-auto">
                {successMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <Icon icon={metric.icon} className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">{metric.value}</div>
                    <div className="text-xs sm:text-sm text-white/60">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Grid */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {industries.map((industry, index) => (
                <div
                  key={industry.id}
                  className={`group relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${activeIndustry === index ? 'ring-2 ring-primary-400/50' : ''}`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animationDelay: `${index * 100}ms`
                  }}
                  onMouseEnter={() => setActiveIndustry(index)}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon & Stats */}
                  <div className="relative mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 ${industry.bgColor} rounded-xl group-hover:scale-110 transition-all duration-300`}>
                        <Icon 
                          icon={industry.icon} 
                          className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-primary-300 transition-colors duration-300" 
                        />
                      </div>
                      <div className="text-right">
                        <div className="text-lg sm:text-xl font-bold text-accent-400">{industry.projects}</div>
                        <div className="text-xs text-white/60">Projects</div>
                      </div>
                    </div>
                    <div className={`absolute top-0 right-0 w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                      {industry.title}
                    </h3>
                    
                    <p className="text-sm text-white/70 mb-4 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-1 mb-4">
                      {industry.keyFeatures.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-white/60">
                          <Icon icon="carbon:dot-mark" className="w-3 h-3 text-accent-400 mr-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {industry.keyFeatures.length > 3 && (
                        <div className="text-xs text-white/50">+{industry.keyFeatures.length - 3} more solutions</div>
                      )}
                    </div>

                    {/* Case Study Highlight */}
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 mb-4">
                      <div className="flex items-start space-x-2">
                        <Icon icon="carbon:star-filled" className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-white/80 leading-relaxed">{industry.caseStudy}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <button 
                      onClick={() => navigate(`/industries/${industry.title.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="group/btn w-full px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 text-white font-semibold rounded-lg border border-white/20 hover:from-primary-500/20 hover:to-accent-500/20 hover:border-primary-400/50 transition-all duration-300 text-sm"
                    >
                      <span className="flex items-center justify-center">
                        Explore Solutions
                        <Icon icon="carbon:arrow-right" className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Industry Showcase */}
          <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <Icon icon="carbon:trophy" className="w-8 h-8 text-primary-400 mr-3" />
                    <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Featured Success Story</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Transforming <span className="text-primary-400">{industries[activeIndustry].title}</span>
                  </h3>
                  
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    {industries[activeIndustry].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {industries[activeIndustry].keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Icon icon="carbon:checkmark" className="w-5 h-5 text-accent-400 mr-2" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => navigate('/case-studies')}
                      className="group relative px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Icon icon="carbon:document" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        View Case Studies
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    </button>
                    
                    <button 
                      onClick={() => navigate('/contact-us')}
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center">
                        <Icon icon="carbon:chat" className="w-5 h-5 mr-2" />
                        Discuss Your Project
                      </span>
                    </button>
                  </div>
                </div>

                {/* Visual */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl border border-white/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-24 h-24 ${industries[activeIndustry].bgColor} rounded-2xl flex items-center justify-center`}>
                        <Icon 
                          icon={industries[activeIndustry].icon} 
                          className="w-12 h-12 text-white" 
                        />
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary-400/20 rounded-full blur-lg"></div>
                  </div>
                  
                  {/* Stats overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-400">{industries[activeIndustry].projects}+</div>
                      <div className="text-xs text-white/70">Successful Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 sm:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Don't See Your <span className="text-primary-400">Industry</span>?
              </h3>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                We work across many more sectors and love tackling new challenges. 
                Let's discuss how we can bring innovation to your industry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/contact-us')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Icon icon="carbon:rocket" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Let's Innovate Together
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
                
                <button 
                  onClick={() => navigate('/portfolio')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    <Icon icon="carbon:view" className="w-5 h-5 mr-2" />
                    Explore All Projects
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

export default IndustriesSection; 