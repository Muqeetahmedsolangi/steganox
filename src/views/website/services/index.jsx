import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import MainHeading from "../../../components/Heading/MainHeading";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  companyInfo, 
  services, 
  technologies, 
  testimonials, 
  caseStudies,
  process,
  industries,
  pricing,
  enhancedServicesData,
  companyStats,
  contactMethods
} from "../../../constant/data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [filteredServices, setFilteredServices] = useState(services);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const servicesRef = useRef([]);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  // Enhanced mechanical engineering services using data from data.js
  const enhancedServices = services.map((service, index) => ({
    ...service,
    detailedDescription: enhancedServicesData.detailedDescriptions[index],
    workflow: enhancedServicesData.workflows[index],
    pricing: enhancedServicesData.servicePricing[index],
    timeline: enhancedServicesData.serviceTimelines[index],
    technologies: enhancedServicesData.serviceTechnologies[index],
    enhancedFeatures: enhancedServicesData.enhancedFeatures[index]
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
          ease: "power3.out"
        }
      );

      // Animate service cards
      servicesRef.current.forEach((card, index) => {
      if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
                once: true
              }
          }
        );
      }
    });
    });

    return () => ctx.revert();
  }, [filteredServices]);

  // Filter services
  useEffect(() => {
    let filtered = services;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredServices(filtered);
  }, [searchTerm]);

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Navigation */}
      <div className="relative z-50 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <Icon icon="fluent:arrow-left-24-filled" className="w-4 h-4" />
            <span>Back</span>
          </button>
          </div>
          </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pb-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-600/30">
                <Icon icon="fluent:settings-24-filled" className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Our Services</span>
            </div>
          </div>
            
            <h1 
              className="font-bold mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.1',
                color: '#ffffff'
              }}
            >
              Engineering <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Excellence</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}
            >
              Comprehensive mechanical engineering services that transform concepts into reality through precision, innovation, and expertise
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {services.length}+
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Services</div>
              </div>
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  450+
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Projects</div>
                  </div>
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  15+
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Years</div>
              </div>
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  32+
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Search Bar */}
          <div className="relative">
              <Icon icon="fluent:search-24-filled" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'rgba(255,255,255,0.5)' }} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              {filteredServices.length} Service{filteredServices.length !== 1 ? 's' : ''} Available
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>
              Professional engineering solutions tailored to your needs
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <Icon icon="fluent:settings-24-filled" className="w-24 h-24 mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.3)' }} />
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>No services found</h3>
              <p className="mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Try adjusting your search terms</p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  color: '#ffffff'
                }}
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => (servicesRef.current[index] = el)}
                  onClick={() => handleServiceClick(service.id)}
                  className="group cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                    style={{ background: 'radial-gradient(circle at center, rgba(6,182,212,0.3), transparent 70%)' }}
                  />

                  {/* Card content */}
                  <div className="p-8 relative z-10">
                    {/* Icon and title */}
                    <div className="mb-6">
                      <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                           style={{ 
                             background: `linear-gradient(135deg, ${service.gradient})`,
                             backgroundOpacity: 0.1
                           }}>
                        <Icon 
                          icon={service.icon} 
                          className="w-8 h-8"
                          style={{ color: '#06b6d4' }}
                        />
                      </div>
                      <h3 
                        className="text-2xl font-bold mb-2"
                        style={{ color: '#ffffff' }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p 
                      className="text-base mb-8 leading-relaxed"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      <div className="text-sm font-medium mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        Key Features
                      </div>
                      <div className="space-y-3">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                            <span
                              className="text-sm"
                              style={{ color: 'rgba(255,255,255,0.8)' }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <button 
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-600/30 text-white hover:border-cyan-600/50 transition-all duration-300 group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(service.id);
                      }}
                    >
                      <span className="font-medium">Learn More</span>
                      <Icon icon="fluent:arrow-right-24-filled" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Gradient overlay */}
                  <div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}
                  />
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 
              className="font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                color: '#ffffff'
              }}
            >
              Ready to Get Started?
            </h2>
            <p 
              className="text-lg mb-8"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Let's discuss how our engineering expertise can bring your project to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact-us')}
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  color: '#ffffff',
                  boxShadow: '0 10px 30px rgba(6,182,212,0.3)'
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon icon="fluent:chat-24-filled" className="w-5 h-5" />
                  Get Consultation
                </div>
              </button>
              
              <button
                onClick={() => navigate('/case-studies')}
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon icon="fluent:folder-24-filled" className="w-5 h-5" />
                  View Case Studies
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;