import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { services, enhancedServicesData } from '../../../constant/data';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get the service data
  const service = services.find(s => s.id === parseInt(id));

  useEffect(() => {
    const loadServiceData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 300));
        
        if (!service) {
          throw new Error('Service not found');
        }
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadServiceData();
  }, [id, service]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary-500/30 rounded-full animate-spin border-t-primary-500 mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-2 border-accent-500/20 rounded-full animate-pulse mx-auto"></div>
          </div>
          <p className="text-white text-lg">Loading service...</p>
          <p className="text-gray-400 text-sm mt-2">Please wait while we fetch the details</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-md">
          <Icon icon="carbon:warning" className="w-20 h-20 text-red-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-8">
            {error || "The service you're looking for doesn't exist or has been removed."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/services')}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
            >
              <Icon icon="carbon:arrow-left" className="w-5 h-5 mr-2 inline" />
              Back to Services
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Get related technologies based on service
  const getServiceTechnologies = (serviceTitle) => {
    switch(serviceTitle.toLowerCase()) {
      case 'web development':
        return enhancedServicesData.frontend.slice(0, 6);
      case 'mobile app development':
        return [...enhancedServicesData.frontend.slice(0, 3), ...enhancedServicesData.backend.slice(0, 3)];
      case 'cloud solutions':
        return enhancedServicesData.cloud;
      case 'ai & machine learning':
        return enhancedServicesData.database.slice(0, 6);
      case 'api development':
        return enhancedServicesData.backend;
      case 'cybersecurity solutions':
        return [...enhancedServicesData.backend.slice(0, 3), ...enhancedServicesData.cloud.slice(0, 3)];
      default:
        return enhancedServicesData.frontend.slice(0, 6);
    }
  };

  const serviceTechnologies = getServiceTechnologies(service.title);

  // Enhanced workflow steps
  const workflowSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Understanding your requirements, constraints, and project goals through detailed discussions.",
      icon: "carbon:chat"
    },
    {
      step: "2", 
      title: "Concept Development",
      description: "Creating preliminary designs and concepts with feasibility analysis and technical considerations.",
      icon: "carbon:idea"
    },
    {
      step: "3",
      title: "Detailed Design",
      description: "Developing comprehensive system architecture, technical specifications, and implementation plans.",
      icon: "carbon:blueprint"
    },
    {
      step: "4",
      title: "Development & Testing",
      description: "Building the solution using agile methodology with continuous testing and quality assurance.",
      icon: "carbon:code"
    },
    {
      step: "5",
      title: "Deployment",
      description: "Deploying to production environment with monitoring, optimization, and performance tuning.",
      icon: "carbon:deployment-unit-technical"
    },
    {
      step: "6",
      title: "Support & Maintenance",
      description: "Providing ongoing support, updates, maintenance, and technical assistance.",
      icon: "carbon:support"
    }
  ];

  const benefits = [
    "Reduced development time by up to 40%",
    "Cost-effective solutions with optimal resource usage",
    "Industry-standard compliance and security",
    "Scalable architecture for business growth",
    "Expert technical support throughout project lifecycle",
    "Access to cutting-edge technologies and frameworks"
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <div className="relative z-50 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <Icon icon="carbon:arrow-left" className="w-4 h-4" />
            <span>Back to Services</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pb-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Service Icon */}
            <div className="inline-block mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Icon 
                  icon={service.icon} 
                  className="w-10 h-10 text-white"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                  40%
                </div>
                <div className="text-sm text-gray-400">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                  99%
                </div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Service Features */}
        <section className="py-16 border-b border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Key Features
              </h2>
              <div className="space-y-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon icon="carbon:checkmark" className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{feature}</h4>
                      <p className="text-gray-300">
                        Professional implementation ensuring optimal results and industry compliance.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="py-16 border-b border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceTechnologies.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon 
                      icon="carbon:code" 
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{tech.name}</h4>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
                    <div 
                      className="bg-gradient-to-r from-primary-400 to-secondary-400 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400">{tech.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow Process */}
        <section className="py-16 border-b border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                    <Icon icon={step.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary-500/20 text-primary-400">
                        STEP {step.step}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Information */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Investment & Timeline
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <Icon icon="carbon:time" className="w-12 h-12 mx-auto mb-4 text-primary-400" />
                <h3 className="text-xl font-semibold text-white mb-2">Timeline</h3>
                <p className="text-gray-300">2-8 weeks depending on complexity</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <Icon icon="carbon:currency-dollar" className="w-12 h-12 mx-auto mb-4 text-primary-400" />
                <h3 className="text-xl font-semibold text-white mb-2">Starting From</h3>
                <p className="text-gray-300">$3,000 - $15,000</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <Icon icon="carbon:user-multiple" className="w-12 h-12 mx-auto mb-4 text-primary-400" />
                <h3 className="text-xl font-semibold text-white mb-2">Team Size</h3>
                <p className="text-gray-300">2-5 engineers dedicated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.filter(s => s.id !== service.id).slice(0, 3).map((relatedService, index) => (
              <div
                key={relatedService.id}
                onClick={() => navigate(`/service/${relatedService.id}`)}
                className="group cursor-pointer bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <Icon 
                      icon={relatedService.icon} 
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{relatedService.title}</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  {relatedService.description.substring(0, 120)}...
                </p>
                <button className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm group-hover:text-primary-300 transition-colors">
                  <span>Learn More</span>
                  <Icon icon="carbon:arrow-right" className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss your project requirements and how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/30"
                onClick={() => navigate('/contact-us')}
              >
                <div className="flex items-center gap-2">
                  <Icon icon="carbon:chat" className="w-5 h-5" />
                  Get Free Consultation
                </div>
              </button>
              
              <button 
                className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/case-studies')}
              >
                <div className="flex items-center gap-2">
                  <Icon icon="carbon:folder" className="w-5 h-5" />
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