import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services, technologies } from '../../../constant/data';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);

  // Get the service data
  const serviceId = parseInt(id);
  const service = services.find(s => s.id === serviceId);

  useEffect(() => {
    if (!service) {
      navigate('/services');
      return;
    }

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power3.out" 
        }
      );

      // Sections animation
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true
              }
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, [service, navigate]);

  if (!service) {
    return null;
  }

  // Get related technologies based on service
  const getServiceTechnologies = (serviceTitle) => {
    switch(serviceTitle.toLowerCase()) {
      case 'concept design & engineering':
        return technologies.cad.slice(0, 6);
      case 'cad modeling & 3d design':
        return technologies.cad;
      case 'cfd & fea simulation':
        return technologies.simulation;
      case 'prototyping & testing':
        return technologies.manufacturing.slice(0, 4);
      case 'design for manufacturing':
        return technologies.manufacturing;
      case 'reverse engineering':
        return [...technologies.cad.slice(0, 3), ...technologies.tools.slice(0, 3)];
      default:
        return technologies.cad.slice(0, 6);
    }
  };

  const serviceTechnologies = getServiceTechnologies(service.title);

  // Enhanced workflow steps
  const workflowSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Understanding your requirements, constraints, and project goals through detailed discussions.",
      icon: "fluent:chat-24-filled"
    },
    {
      step: "2", 
      title: "Concept Development",
      description: "Creating preliminary designs and concepts with feasibility analysis and material considerations.",
      icon: "fluent:lightbulb-24-filled"
    },
    {
      step: "3",
      title: "Detailed Design",
      description: "Developing comprehensive 3D models, technical drawings, and engineering calculations.",
      icon: "fluent:drafting-compass-24-filled"
    },
    {
      step: "4",
      title: "Analysis & Validation",
      description: "Performing simulations, stress analysis, and design validation to ensure optimal performance.",
      icon: "fluent:calculator-24-filled"
    },
    {
      step: "5",
      title: "Prototyping",
      description: "Creating physical prototypes for testing, validation, and design refinement.",
      icon: "fluent:cube-24-filled"
    },
    {
      step: "6",
      title: "Final Delivery",
      description: "Delivering complete design documentation, manufacturing files, and technical support.",
      icon: "fluent:checkmark-circle-24-filled"
    }
  ];

  const benefits = [
    "Reduced development time by up to 40%",
    "Cost-effective solutions with optimal material usage",
    "Industry-standard compliance and certification",
    "Scalable designs for volume production",
    "Expert technical support throughout project lifecycle",
    "Access to cutting-edge engineering tools and software"
  ];

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
            <span>Back to Services</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-8 pb-16 md:pb-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Service Icon */}
            <div className="inline-block mb-6">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                   style={{ 
                     background: `linear-gradient(135deg, ${service.gradient})`,
                     backgroundOpacity: 0.2
                   }}>
                <Icon 
                  icon={service.icon} 
                  className="w-10 h-10"
                  style={{ color: '#a855f7' }}
                />
              </div>
            </div>

            {/* Title */}
            <h1 
              className="font-bold mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.1',
                color: '#ffffff'
              }}
            >
              {service.title}
            </h1>

            {/* Description */}
            <p 
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}
            >
              {service.description}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  40%
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Time Saved</div>
              </div>
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  99%
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Accuracy</div>
              </div>
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  150+
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Projects</div>
              </div>
              <div className="text-center">
                <div 
                  className="font-bold mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  24/7
                </div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div ref={contentRef} className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Service Features */}
        <section ref={el => sectionsRef.current[0] = el} className="py-16 border-b border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 
                className="font-bold mb-8"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  color: '#ffffff'
                }}
              >
                Key Features
              </h2>
              <div className="space-y-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon icon="fluent:checkmark-24-filled" className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{feature}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Professional implementation ensuring optimal results and industry compliance.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 
                className="font-bold mb-8"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  color: '#ffffff'
                }}
              >
                Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section ref={el => sectionsRef.current[1] = el} className="py-16 border-b border-white/10">
          <h2 
            className="font-bold mb-12 text-center"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              color: '#ffffff'
            }}
          >
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceTechnologies.map((tech, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                  style={{ background: 'radial-gradient(circle at center, rgba(168,85,247,0.3), transparent 70%)' }}
                />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(168,85,247,0.1)' }}
                  >
                    <Icon 
                      icon="fluent:settings-24-filled" 
                      className="w-6 h-6"
                      style={{ color: '#a855f7' }}
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{tech.name}</h4>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
                    <div 
                      className="bg-gradient-to-r from-purple-400 to-blue-400 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{tech.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow Process */}
        <section ref={el => sectionsRef.current[2] = el} className="py-16 border-b border-white/10">
          <h2 
            className="font-bold mb-12 text-center"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              color: '#ffffff'
            }}
          >
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-8"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}
                  >
                    <Icon icon={step.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span 
                        className="text-xs font-bold px-2 py-1 rounded-full"
                        style={{ 
                          background: 'rgba(168,85,247,0.2)', 
                          color: '#a855f7' 
                        }}
                      >
                        STEP {step.step}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Information */}
        <section ref={el => sectionsRef.current[3] = el} className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="font-bold mb-8"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                color: '#ffffff'
              }}
            >
              Investment & Timeline
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Icon icon="fluent:clock-24-filled" className="w-12 h-12 mx-auto mb-4" style={{ color: '#a855f7' }} />
                <h3 className="text-xl font-semibold text-white mb-2">Timeline</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>2-8 weeks depending on complexity</p>
              </div>
              <div
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Icon icon="fluent:money-24-filled" className="w-12 h-12 mx-auto mb-4" style={{ color: '#a855f7' }} />
                <h3 className="text-xl font-semibold text-white mb-2">Starting From</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>$3,000 - $15,000</p>
              </div>
              <div
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Icon icon="fluent:people-24-filled" className="w-12 h-12 mx-auto mb-4" style={{ color: '#a855f7' }} />
                <h3 className="text-xl font-semibold text-white mb-2">Team Size</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>2-5 engineers dedicated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section ref={el => sectionsRef.current[4] = el} className="py-16">
          <h2 
            className="font-bold mb-12 text-center"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              color: '#ffffff'
            }}
          >
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.filter(s => s.id !== service.id).slice(0, 3).map((relatedService, index) => (
              <div
                key={relatedService.id}
                onClick={() => navigate(`/service/${relatedService.id}`)}
                className="group cursor-pointer relative rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ backgroundColor: 'rgba(168,85,247,0.1)' }}>
                    <Icon 
                      icon={relatedService.icon} 
                      className="w-6 h-6"
                      style={{ color: '#a855f7' }}
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{relatedService.title}</h4>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm mb-4">
                  {relatedService.description.substring(0, 120)}...
                </p>
                <button className="inline-flex items-center gap-2 text-purple-400 font-medium text-sm group-hover:text-purple-300 transition-colors">
                  <span>Learn More</span>
                  <Icon icon="fluent:arrow-right-24-filled" className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section ref={el => sectionsRef.current[5] = el} className="py-16 text-center">
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
              Let's discuss your project requirements and how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                  color: '#ffffff',
                  boxShadow: '0 10px 30px rgba(168,85,247,0.3)'
                }}
                onClick={() => navigate('/contact-us')}
              >
                <div className="flex items-center gap-2">
                  <Icon icon="fluent:chat-24-filled" className="w-5 h-5" />
                  Get Free Consultation
                </div>
              </button>
              
              <button 
                className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  backdropFilter: 'blur(20px)'
                }}
                onClick={() => navigate('/case-studies')}
              >
                <div className="flex items-center gap-2">
                  <Icon icon="fluent:folder-24-filled" className="w-5 h-5" />
                  View Portfolio
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail; 