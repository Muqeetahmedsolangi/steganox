import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { portfolioData } from '../../../constant/data';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get the project data
  const project = portfolioData.find(p => p.id === parseInt(id));

  useEffect(() => {
    const loadProjectData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 300));
        
        if (!project) {
          throw new Error('Project not found');
        }
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjectData();
  }, [id, project]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary-500/30 rounded-full animate-spin border-t-primary-500 mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-2 border-accent-500/20 rounded-full animate-pulse mx-auto"></div>
          </div>
          <p className="text-white text-lg">Loading project...</p>
          <p className="text-gray-400 text-sm mt-2">Please wait while we fetch the details</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-md">
          <Icon icon="carbon:warning" className="w-20 h-20 text-red-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">
            {error || "The project you're looking for doesn't exist or has been removed."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/portfolio')}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
            >
              <Icon icon="carbon:arrow-left" className="w-5 h-5 mr-2 inline" />
              Back to Portfolio
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

  // Tab configuration
  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'carbon:information' },
    { id: 'features', name: 'Features', icon: 'carbon:function' },
    { id: 'technologies', name: 'Tech Stack', icon: 'carbon:code' },
    { id: 'impact', name: 'Results', icon: 'carbon:chart-line' },
    { id: 'challenges', name: 'Challenges', icon: 'carbon:warning' },
    { id: 'timeline', name: 'Timeline', icon: 'carbon:time-plot' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Project Challenge */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Icon icon="carbon:warning" className="text-red-400" />
                  Project Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Icon icon="carbon:lightbulb" className="text-primary-400" />
                  Our Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Client', value: project.client, icon: 'carbon:user-avatar' },
                { label: 'Duration', value: project.duration, icon: 'carbon:time' },
                { label: 'Team Size', value: project.teamSize, icon: 'carbon:user-multiple' },
                { label: 'Budget', value: project.budget, icon: 'carbon:currency-dollar' },
                { label: 'Year', value: project.year, icon: 'carbon:calendar' },
                { label: 'Status', value: project.status, icon: 'carbon:checkmark-filled' }
              ].map((detail, index) => (
                <div
                  key={index}
                  className="p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon icon={detail.icon} className="w-5 h-5 text-primary-400" />
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
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="carbon:function" className="text-primary-400" />
              Key Features & Capabilities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                    <Icon icon="carbon:checkmark" className="w-5 h-5 text-white" />
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
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="carbon:code" className="text-primary-400" />
              Technology Stack
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl text-center hover:border-primary-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon icon="carbon:code" className="w-6 h-6 text-white" />
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
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="carbon:chart-line" className="text-primary-400" />
              Project Impact & Results
            </h3>
            
            {/* Key Metrics */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.impact && Object.entries(project.impact).map(([key, value], index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-white mb-2">{value}</div>
                  <div className="text-sm text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                  <div className="mt-2">
                    <div className="w-full h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Success Story */}
            <div className="p-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Icon icon="carbon:trophy" className="text-yellow-400" />
                Success Story
              </h4>
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
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="carbon:warning" className="text-primary-400" />
              Challenges & Solutions
            </h3>
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
                  className="grid md:grid-cols-3 gap-6 p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-2 flex items-center gap-2">
                      <Icon icon="carbon:warning" className="text-red-400" />
                      Challenge
                    </h4>
                    <p className="text-gray-300">{item.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2 flex items-center gap-2">
                      <Icon icon="carbon:lightbulb" className="text-blue-400" />
                      Solution
                    </h4>
                    <p className="text-gray-300">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <Icon icon="carbon:chart-line" className="text-green-400" />
                      Impact
                    </h4>
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
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="carbon:time-plot" className="text-primary-400" />
              Development Timeline
            </h3>
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
                  className="flex items-start gap-6 p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{milestone.phase}</h4>
                      <span className="text-sm text-primary-400 font-medium">{milestone.duration}</span>
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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div>
            {/* Back Button */}
            <button
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Icon icon="carbon:arrow-left" className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </button>

            {/* Project Header */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                    {project.type}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center gap-1">
                      <Icon icon="carbon:star-filled" className="w-4 h-4" />
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
                    <Icon icon="carbon:user-avatar" className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="carbon:calendar" className="w-5 h-5 text-secondary-400" />
                    <span className="text-gray-300">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="carbon:time" className="w-5 h-5 text-accent-400" />
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
      <section className="sticky top-0 z-50 py-4 border-b border-white/10 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
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
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {renderTabContent()}
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => navigate(`/portfolio/${relatedProject.id}`)}
                  className="group cursor-pointer bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
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
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Similar Results?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can apply our expertise to deliver exceptional results for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact-us')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/30"
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