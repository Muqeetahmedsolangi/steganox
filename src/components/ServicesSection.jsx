import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ServicesSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      observer.observe(servicesSection);
    }

    // Auto-rotate featured service
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % 6);
    }, 5000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: 'carbon:application-web',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and scalable architecture',
      features: ['React/Vue.js', 'Node.js Backend', 'Progressive Web Apps', 'API Integration'],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-500/10',
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'MongoDB']
    },
    {
      id: 2,
      icon: 'carbon:mobile-check',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-500/10',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic']
    },
    {
      id: 3,
      icon: 'carbon:cloud-computing',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS/Azure/GCP', 'DevOps', 'Microservices', 'Container Orchestration'],
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-500/10',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
    },
    {
      id: 4,
      icon: 'carbon:machine-learning',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and ML',
      features: ['Custom AI Models', 'Data Analytics', 'Computer Vision', 'NLP Solutions'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK']
    },
    {
      id: 5,
      icon: 'carbon:api',
      title: 'API Development',
      description: 'Robust APIs and integration services for seamless connectivity',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Third-party Integrations'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500/10',
      technologies: ['REST', 'GraphQL', 'gRPC', 'OAuth', 'JWT', 'OpenAPI']
    },
    {
      id: 6,
      icon: 'carbon:security',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Data Protection'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-500/10',
      technologies: ['OWASP', 'SSL/TLS', 'GDPR', 'SOC2', 'ISO27001', 'NIST']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning Phase',
      description: 'Understanding your requirements and creating a strategic roadmap',
      icon: 'carbon:search'
    },
    {
      step: '02',
      title: 'Design & Architecture Phase',
      description: 'Creating user-centric designs and scalable system architecture',
      icon: 'carbon:code'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and quality assurance',
      icon: 'carbon:code'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing maintenance and support',
      icon: 'carbon:rocket'
    }
  ];

  return (
    <section id="services-section" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black/40 to-gray-800/60"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-secondary-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Tech Icons Background */}
        <div className="hidden lg:block absolute top-32 left-1/4 w-16 h-16 bg-accent-500/20 rounded-full animate-float"></div>
        <div className="hidden lg:block absolute bottom-32 right-1/4 w-12 h-12 bg-secondary-500/20 rounded-full animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 backdrop-blur-sm border border-white/10 rounded-full mb-6 sm:mb-8">
                <Icon icon="carbon:tools" className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-400 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide uppercase">Our Services</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight">
                <span className="bg-gradient-to-r from-secondary-400 via-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Complete Software
                </span>
                <br />
                <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Solutions Portfolio
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4">
                From concept to deployment, we deliver end-to-end software development services 
                that drive innovation and accelerate your digital transformation journey.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`group relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animationDelay: `${index * 100}ms`
                  }}
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 ${service.bgColor} rounded-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon 
                        icon={service.icon} 
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-primary-300 transition-colors duration-300" 
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-white/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-white/60">
                          <Icon icon="carbon:checkmark" className="w-4 h-4 text-accent-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-white/10 text-white/60 rounded border border-white/20">
                          +{service.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <button 
                      onClick={() => navigate(`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="group/btn relative w-full px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 text-white font-semibold rounded-lg border border-white/20 hover:from-primary-500/20 hover:to-accent-500/20 hover:border-primary-400/50 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center">
                        Learn More
                        <Icon icon="carbon:arrow-right" className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Our <span className="text-primary-400">Development Process</span>
              </h3>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                A proven methodology that ensures quality delivery and client satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative text-center p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  {/* Step Number */}
                  <div className="relative mx-auto mb-6 w-16 h-16 sm:w-20 sm:h-20">
                    <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-lg sm:text-xl font-bold text-white">{step.step}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon icon={step.icon} className="w-8 h-8 text-primary-400 mx-auto group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">{step.description}</p>

                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary-400 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 sm:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Build Something <span className="text-primary-400">Amazing</span>?
              </h3>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a tailored solution that exceeds your expectations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/contact-us')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Icon icon="carbon:chat" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Start Your Project
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

              {/* Additional Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-1">200+</div>
                  <div className="text-sm text-white/60">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent-400 mb-1">50+</div>
                  <div className="text-sm text-white/60">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-white/60">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 