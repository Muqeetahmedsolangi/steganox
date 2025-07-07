import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../../../constant/data';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const tabRefs = useRef([]);
  const contentRef = useRef(null);
  
  const [activeTab, setActiveTab] = useState('overview');
  const [project, setProject] = useState(null);

  // Tab configuration
  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'mdi:information-outline' },
    { id: 'features', name: 'Features', icon: 'mdi:feature-search' },
    { id: 'technologies', name: 'Tech Stack', icon: 'mdi:code-tags' },
    { id: 'impact', name: 'Results', icon: 'mdi:chart-line' },
    { id: 'challenges', name: 'Challenges', icon: 'mdi:puzzle' },
    { id: 'timeline', name: 'Timeline', icon: 'mdi:timeline' }
  ];

  useEffect(() => {
    const foundProject = portfolioData.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/portfolio');
    }
  }, [id, navigate]);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out"
        }
      );

      // Tab navigation animation
      tabRefs.current.forEach((tab, index) => {
        if (tab) {
          gsap.fromTo(tab,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out"
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [project]);

  // Animate content when tab changes
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        }
      );
    }
  }, [activeTab]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Project Challenge */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Project Challenge</h3>
                <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
                <p className="text-gray-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Client', value: project.client, icon: 'mdi:account-tie' },
                { label: 'Duration', value: project.duration, icon: 'mdi:clock-outline' },
                { label: 'Team Size', value: project.teamSize, icon: 'mdi:account-group' },
                { label: 'Budget', value: project.budget, icon: 'mdi:currency-usd' },
                { label: 'Year', value: project.year, icon: 'mdi:calendar' },
                { label: 'Status', value: project.status, icon: 'mdi:check-circle' }
              ].map((detail, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon icon={detail.icon} className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-400 uppercase tracking-wide">{detail.label}</span>
                  </div>
                  <div className="text-lg font-semibold text-white">{detail.value}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Key Features & Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon icon="mdi:check" className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature}</h4>
                    <p className="text-gray-400 text-sm">Advanced implementation with modern best practices and scalable architecture.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'technologies':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border text-center transition-all duration-300 hover:scale-105 group"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon icon="mdi:code-tags" className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{tech}</h4>
                  <p className="text-xs text-gray-400">Core Technology</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Project Impact & Results</h3>
            
            {/* Key Metrics */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(project.impact).map(([key, value], index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{value}</div>
                  <div className="text-sm text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                  <div className="mt-2">
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} opacity-30`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Success Story */}
            <div className="p-8 rounded-xl border" style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderColor: 'rgba(255,255,255,0.08)'
            }}>
              <h4 className="text-xl font-bold text-white mb-4">Success Story</h4>
              <p className="text-gray-300 leading-relaxed">
                This project transformed the client's business operations, delivering exceptional results that exceeded expectations. 
                The implementation of cutting-edge technologies and best practices resulted in significant improvements across 
                all key performance indicators, establishing a new benchmark for excellence in the industry.
              </p>
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h3>
            <div className="space-y-6">
              {[
                {
                  challenge: "Scalability Requirements",
                  solution: "Implemented microservices architecture with auto-scaling capabilities to handle traffic spikes efficiently.",
                  impact: "System now handles 10x the original load with 99.9% uptime"
                },
                {
                  challenge: "Security Compliance",
                  solution: "Integrated enterprise-grade security measures including encryption, audit trails, and compliance monitoring.",
                  impact: "Achieved industry certifications and zero security incidents"
                },
                {
                  challenge: "Integration Complexity",
                  solution: "Developed custom APIs and middleware to seamlessly connect with existing systems and third-party services.",
                  impact: "Reduced data processing time by 75% with seamless integrations"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-3 gap-6 p-6 rounded-xl border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">{item.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Solution</h4>
                    <p className="text-gray-300">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Impact</h4>
                    <p className="text-gray-300">{item.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Development Timeline</h3>
            <div className="space-y-6">
              {[
                { phase: "Discovery & Planning", duration: "2 weeks", description: "Requirements gathering, technical analysis, and project planning" },
                { phase: "Design & Architecture", duration: "3 weeks", description: "System design, UI/UX mockups, and technical architecture" },
                { phase: "Development Sprint 1", duration: "4 weeks", description: "Core functionality development and initial testing" },
                { phase: "Development Sprint 2", duration: "4 weeks", description: "Feature implementation and integration testing" },
                { phase: "Testing & QA", duration: "2 weeks", description: "Comprehensive testing, bug fixes, and quality assurance" },
                { phase: "Deployment & Launch", duration: "1 week", description: "Production deployment, monitoring setup, and go-live support" }
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 rounded-xl border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{milestone.phase}</h4>
                      <span className="text-sm text-purple-400 font-medium">{milestone.duration}</span>
                    </div>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={heroRef}>
            {/* Back Button */}
            <button
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </button>

            {/* Project Header */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.type}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center gap-1">
                      <Icon icon="mdi:star" className="w-4 h-4" />
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {project.title}
                </h1>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:account-tie" className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:calendar" className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:clock" className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{project.duration}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">{project.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-50 py-4 border-b border-white/10" style={{ backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-2 md:gap-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={el => tabRefs.current[index] = el}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon icon={tab.icon} className="w-4 h-4" />
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={contentRef}>
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => navigate(`/portfolio/${relatedProject.id}`)}
                  className="group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)'
                  }}
                >
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-gray-400">{relatedProject.client}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Similar Results?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can apply our expertise to deliver exceptional results for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact-us')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Start Your Project
            </button>
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail; 