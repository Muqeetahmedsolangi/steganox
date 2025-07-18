import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const WhyChooseSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const whyChooseSection = document.getElementById('why-choose-section');
    if (whyChooseSection) {
      observer.observe(whyChooseSection);
    }

    // Auto-rotate featured item
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 6);
    }, 4000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const whyChooseData = [
    {
      icon: 'carbon:cloud-satellite',
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies and frameworks to build future-ready solutions',
      highlight: 'Advanced Tech Stack',
      metrics: '50+ Technologies',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: 'carbon:user-multiple',
      title: 'Expert Team',
      description: 'Our seasoned developers and architects bring decades of combined experience',
      highlight: 'Senior Expertise',
      metrics: '150+ Experts',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: 'carbon:time',
      title: 'On-Time Delivery',
      description: 'We pride ourselves on meeting deadlines and delivering projects on schedule',
      highlight: '98% Success Rate',
      metrics: 'Always On Time',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: 'carbon:security',
      title: 'Enterprise Security',
      description: 'Bank-grade security measures and compliance standards built into every solution',
      highlight: 'ISO Certified',
      metrics: 'Zero Breaches',
      color: 'from-red-500 to-orange-600',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: 'carbon:rocket',
      title: 'Scalable Solutions',
      description: 'Architectures designed to grow with your business from startup to enterprise',
      highlight: 'Future-Proof',
      metrics: '10x Scalability',
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-500/10'
    },
    {
      icon: 'carbon:customer-service',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for peace of mind',
      highlight: 'Always Available',
      metrics: '< 1hr Response',
      color: 'from-teal-500 to-green-600',
      bgColor: 'bg-teal-500/10'
    }
  ];

  const achievements = [
    {
      title: 'Industry Recognition',
      items: ['Top Software Company 2023', 'Innovation Award Winner', 'Client Choice Award']
    },
    {
      title: 'Certifications',
      items: ['ISO 27001 Certified', 'AWS Advanced Partner', 'Microsoft Gold Partner']
    },
    {
      title: 'Global Presence',
      items: ['25+ Countries Served', '5 Development Centers', '3 Continents Coverage']
    }
  ];

  return (
    <section id="why-choose-section" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 sm:left-20 w-48 sm:w-64 h-48 sm:h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 sm:right-20 w-64 sm:w-80 h-64 sm:h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Decorative Elements */}
        <div className="hidden lg:block absolute top-40 right-1/3 w-20 h-20 bg-secondary-500/10 rounded-full animate-float"></div>
        <div className="hidden lg:block absolute bottom-40 left-1/3 w-16 h-16 bg-primary-500/10 rounded-full animate-float delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6 sm:mb-8">
                <Icon icon="carbon:thumbs-up" className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide uppercase">Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight">
                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  Your Trusted
                </span>
                <br />
                <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Technology Partner
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4">
                Partner with a team that delivers excellence, innovation, and results. 
                We combine technical expertise with business acumen to drive your success.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {whyChooseData.map((item, index) => (
                <div
                  key={index}
                  className={`group relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${activeFeature === index ? 'ring-2 ring-primary-400/50' : ''}`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animationDelay: `${index * 100}ms`
                  }}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 ${item.bgColor} rounded-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon 
                        icon={item.icon} 
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-primary-300 transition-colors duration-300" 
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-white/70 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlight */}
                    <div className="flex items-center justify-between">
                      <div className="px-3 py-1 bg-white/10 rounded-lg border border-white/20">
                        <span className="text-sm font-semibold text-accent-400">{item.highlight}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary-400">{item.metrics}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <Icon icon="carbon:trophy" className="w-8 h-8 text-primary-400 mr-3" />
                    <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Proven Excellence</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                    Why Top Companies <span className="text-primary-400">Choose Us</span>
                  </h3>
                  
                  <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <h4 className="text-lg font-bold text-white mb-3">{achievement.title}</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {achievement.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center">
                              <Icon icon="carbon:checkmark" className="w-5 h-5 text-accent-400 mr-2 flex-shrink-0" />
                              <span className="text-white/70 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl border border-white/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 ${whyChooseData[activeFeature].bgColor} rounded-2xl flex items-center justify-center`}>
                        <Icon 
                          icon={whyChooseData[activeFeature].icon} 
                          className="w-16 h-16 text-white" 
                        />
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary-400/20 rounded-full blur-lg animate-float delay-1000"></div>
                    <div className="absolute top-1/2 left-4 w-12 h-12 bg-accent-400/20 rounded-full blur-md animate-float delay-2000"></div>
                  </div>
                  
                  {/* Stats overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-400">{whyChooseData[activeFeature].metrics}</div>
                      <div className="text-xs text-white/70">{whyChooseData[activeFeature].highlight}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial Section */}
          <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Our <span className="text-primary-400">Clients Say</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  quote: "Q HUB transformed our entire digital infrastructure. Their expertise and dedication exceeded our expectations.",
                  author: "Sarah Johnson",
                  position: "CTO, TechCorp",
                  rating: 5
                },
                {
                  quote: "Outstanding technical skills combined with excellent project management. They delivered on time and within budget.",
                  author: "Michael Chen",
                  position: "CEO, StartupXYZ",
                  rating: 5
                },
                {
                  quote: "The best technology partner we've worked with. Their solutions scaled perfectly with our business growth.",
                  author: "Emily Rodriguez",
                  position: "VP Engineering, Enterprise Co",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} icon="carbon:star-filled" className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-white/80 mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-white/60 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 sm:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Experience the <span className="text-primary-400">Q HUB Difference</span>?
              </h3>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful companies who trust us with their most critical technology initiatives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/contact-us')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Icon icon="carbon:rocket" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Start Your Project Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </button>
                
                <button 
                  onClick={() => navigate('/case-studies')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    <Icon icon="carbon:document" className="w-5 h-5 mr-2" />
                    View Success Stories
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-1">98%</div>
                  <div className="text-sm text-white/60">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">500+</div>
                  <div className="text-sm text-white/60">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-white/60">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary-400 mb-1">8+</div>
                  <div className="text-sm text-white/60">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection; 