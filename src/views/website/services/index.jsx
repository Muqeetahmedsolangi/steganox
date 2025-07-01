import { useEffect, useRef, useState } from "react";
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

function index() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const processRef = useRef(null);
  const workflowRef = useRef(null);
  const [activeService, setActiveService] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);

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
    // Animate section entrance
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // Animate service cards with stagger
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });

    // Animate process section
    if (processRef.current) {
      gsap.fromTo(
        processRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-void-950 text-white min-h-screen">
      {/* Hero Banner - Mobile Responsive */}
      <div className="w-full">
        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-void-950 via-void-900 to-void-950">
            <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
          </div>
          
          {/* Animated particles - Reduced for mobile */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-neon-500 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Floating mechanical icons - Mobile optimized */}
          <div className="absolute inset-0 overflow-hidden">
            <Icon 
              icon="carbon:idea" 
              className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-4 sm:left-8 md:left-12 lg:left-20 text-neon-500/10 sm:text-neon-500/15 md:text-neon-500/20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 animate-float"
            />
            <Icon 
              icon="carbon:3d-mpr-toggle" 
              className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 right-8 sm:right-16 md:right-24 lg:right-40 text-cyber-500/10 sm:text-cyber-500/15 md:text-cyber-500/20 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 animate-float-delayed"
            />
            <Icon 
              icon="carbon:flow-data" 
              className="absolute top-12 sm:top-16 md:top-24 lg:top-40 right-4 sm:right-8 md:right-12 lg:right-20 text-neon-500/10 sm:text-neon-500/15 md:text-neon-500/20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-bounce-slow hidden sm:block"
            />
            <Icon 
              icon="carbon:3d-print-mesh" 
              className="absolute bottom-12 sm:bottom-16 md:bottom-24 lg:bottom-40 left-8 sm:left-16 md:left-24 lg:left-40 text-cyber-500/10 sm:text-cyber-500/15 md:text-cyber-500/20 w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-28 lg:h-28 animate-pulse hidden sm:block"
            />
          </div>

          {/* Content - Mobile optimized */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-neon-500 via-primary to-primary-600 bg-clip-text text-transparent leading-tight">
                Our Engineering Services
              </h1>
              <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-neon-400 to-cyber-400 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed">
                {companyInfo.description} - Comprehensive mechanical engineering solutions from concept to production
              </p>
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-gray-300 text-sm sm:text-base">
                <span>Home</span>
                <Icon icon="carbon:chevron-right" className="w-4 h-4 sm:w-5 sm:h-5 text-neon-500" />
                <span className="text-neon-500">Services</span>
              </div>
            </div>
          </div>
            
          {/* Glowing orbs - Mobile responsive */}
          <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 left-4 sm:left-6 md:left-8 lg:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-neon-500/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse" />
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-cyber-500/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Services Overview - Mobile Responsive */}
      <div ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-900/50 to-void-950" />
        <div className="container mx-auto relative z-10">
          <MainHeading title="What We Do" text="Our Services" />
          
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Transform your innovative ideas into manufacturable, market-ready products with our comprehensive mechanical engineering services. 
              From concept to production, we deliver excellence at every step.
            </p>
          </div>

          {/* Services Grid - Mobile Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {enhancedServices.map((service, idx) => (
              <div 
                key={service.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="group relative bg-gradient-to-br from-void-900/50 to-void-800/50 backdrop-blur-xl border border-void-700/50 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:border-neon-500/50 hover:shadow-2xl hover:shadow-neon-400/10 hover:scale-105 cursor-pointer"
                onClick={() => setActiveService(idx)}
              >
                <div className="p-4 sm:p-6 md:p-8 relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.gradient} mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                    <Icon icon={service.icon} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-neon-500 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {service.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="px-2 sm:px-3 py-1 text-xs bg-void-800 text-gray-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Icon icon="carbon:checkmark-filled" className="w-3 h-3 sm:w-4 sm:h-4 text-neon-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-400 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pricing & Timeline */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4 sm:mb-6">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400">Starting from</p>
                      <p className="text-sm sm:text-lg font-bold text-neon-500">{service.pricing}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-xs sm:text-sm text-gray-400">Timeline</p>
                      <p className="text-sm sm:text-lg font-bold text-neon-500">{service.timeline}</p>
                    </div>
                  </div>
                  
                  {/* Button */}
                  <button className="w-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-gradient-to-r from-neon-500 to-neon-600 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg hover:shadow-neon-500/50">
                    View Details
                  </button>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-500/10 to-cyber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Service View - Mobile Responsive */}
      {activeService !== null && (
        <div className="py-12 sm:py-16 md:py-20 bg-void-950">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <MainHeading title="Service Details" text={enhancedServices[activeService]?.title} />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-2 sm:px-0">
                  {enhancedServices[activeService]?.detailedDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
                {/* Features - Mobile Responsive */}
                <div className="bg-gradient-to-br from-void-900/50 to-void-800/50 backdrop-blur-xl border border-void-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-neon-500">Key Features</h3>
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    {enhancedServices[activeService]?.enhancedFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <Icon icon="carbon:checkmark-filled" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neon-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies - Mobile Responsive */}
                <div className="bg-gradient-to-br from-void-900/50 to-void-800/50 backdrop-blur-xl border border-void-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-neon-500">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {enhancedServices[activeService]?.technologies.map((tech, index) => (
                      <span key={index} className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-void-800 text-gray-300 rounded-md sm:rounded-lg border border-void-700 hover:border-neon-500/50 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Workflow - Mobile Responsive */}
              <div className="bg-gradient-to-br from-void-900/50 to-void-800/50 backdrop-blur-xl border border-void-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center text-white leading-tight">
                  Engineering Workflow
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {enhancedServices[activeService]?.workflow.map((step, index) => (
                    <div key={index} className="flex gap-3 sm:gap-4 md:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-neon-500 to-cyber-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-neon-500 leading-tight">{step.step}</h4>
                          <span className="px-2 sm:px-3 py-1 bg-void-800 text-neon-500 text-xs sm:text-sm rounded-full self-start">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">{step.description}</p>
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <h5 className="text-xs sm:text-sm font-semibold text-neon-500 mb-2">Deliverables:</h5>
                            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                              {step.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Icon icon="carbon:dot-mark" className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-neon-500 mt-1.5 flex-shrink-0" />
                                  <span className="leading-relaxed">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engineering Process - Mobile Responsive */}
      <div ref={processRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-900/50 to-void-950" />
        <div className="container mx-auto relative z-10">
          <MainHeading title="How We Work" text="Our Process" />
          <div className="relative">
            {/* Timeline line - Hidden on mobile for cleaner look */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-500 via-cyber-500 to-neon-600 hidden md:block" />
            
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {process.map((step, index) => (
                <div key={step.id} className="process-item flex gap-4 sm:gap-6 md:gap-8 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-neon-500 to-cyber-500 flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl">
                      {step.id}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-500/20 to-cyber-500/20 blur-lg md:blur-xl" />
                  </div>
                  <div className="flex-1 bg-void-900/50 backdrop-blur-xl rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-void-700/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">{step.title}</h3>
                      <span className="text-xs sm:text-sm text-neon-500 self-start bg-neon-500/10 px-2 py-1 rounded-full">{step.duration}</span>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">{step.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {step.activities.map((activity, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-1 text-xs rounded-full bg-void-800 text-gray-300"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose MechNovate - Mobile Responsive */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-void-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <MainHeading title="Why Choose Us" text={`Why Choose ${companyInfo.name}?`} />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-2 sm:px-0">
              {companyInfo.tagline} - Delivering exceptional mechanical engineering solutions since {companyInfo.founded}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {companyStats.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-void-900/50 to-void-800/50 backdrop-blur-xl border border-void-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-neon-500/50 hover:shadow-2xl hover:shadow-neon-400/10 transition-all duration-300">
                  <div className="inline-flex p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-neon-500 to-cyber-500 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon icon={item.icon} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-500 mb-2">{item.stat}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Mobile Responsive */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-500/20 via-cyber-500/20 to-neon-600/20" />
        <div className="absolute inset-0 bg-tech-grid opacity-10" />
        
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Engineer Your Ideas into Reality?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Let's transform your mechanical concepts into manufacturable, market-ready products with {companyInfo.name}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-neon-500 to-neon-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform hover:shadow-lg hover:shadow-neon-500/50">
                Start Your Design
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-2 border-neon-500/50 rounded-lg font-semibold text-neon-500 hover:bg-neon-500/10 transition-all">
                Get Free Consultation
              </button>
            </div>
            
            {/* Contact info - Mobile responsive grid */}
            <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-gray-400">
              {contactMethods.slice(0, 4).map((contact, index) => (
                <div key={index} className="flex items-center gap-1 sm:gap-2 justify-center">
                  <Icon icon={contact.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-neon-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base truncate">{contact.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;