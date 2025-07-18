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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-primary-500/30 rounded-full animate-spin border-t-primary-500 mx-auto mb-6"></div>
            <div className="absolute inset-0 w-20 h-20 border-2 border-accent-500/20 rounded-full animate-pulse mx-auto"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Loading Project Details</h2>
          <p className="text-white/70 text-lg mb-2">Please wait while we fetch the information</p>
          <div className="flex items-center justify-center gap-2 text-accent-400">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-black flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto px-6 relative z-10">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon icon="carbon:warning" className="w-12 h-12 text-red-400" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Project Not Found</h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            {error || "The project you're looking for doesn't exist or has been removed. It might have been moved or deleted."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/portfolio')}
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center">
                <Icon icon="carbon:arrow-left" className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                <Icon icon="carbon:home" className="w-5 h-5 mr-2" />
                Go Home
              </span>
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
            {/* Project Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8">
              <div 
                className="p-8 rounded-2xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center">
                    <Icon icon="carbon:warning" className="w-6 h-6 text-red-400" />
                  </div>
                  Project Challenge
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">{project.challenge}</p>
              </div>
              
              <div 
                className="p-8 rounded-2xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center">
                    <Icon icon="carbon:lightbulb" className="w-6 h-6 text-primary-400" />
                  </div>
                  Our Solution
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">{project.solution}</p>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Client', value: project.client, icon: 'carbon:user-avatar', color: 'primary' },
                { label: 'Duration', value: project.duration, icon: 'carbon:time', color: 'accent' },
                { label: 'Team Size', value: project.teamSize, icon: 'carbon:user-multiple', color: 'secondary' },
                { label: 'Budget', value: project.budget, icon: 'carbon:currency-dollar', color: 'primary' },
                { label: 'Year', value: project.year, icon: 'carbon:calendar', color: 'accent' },
                { label: 'Status', value: project.status, icon: 'carbon:checkmark-filled', color: 'secondary' }
              ].map((detail, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br from-${detail.color}-500/20 to-${detail.color}-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon icon={detail.icon} className={`w-6 h-6 text-${detail.color}-400`} />
                    </div>
                    <span className="text-sm text-white/60 uppercase tracking-wide font-medium">{detail.label}</span>
                  </div>
                  <div className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">{detail.value}</div>
                </div>
              ))}
            </div>

            {/* Project Description */}
            <div 
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-xl flex items-center justify-center">
                  <Icon icon="carbon:document" className="w-6 h-6 text-accent-400" />
                </div>
                Project Description
              </h3>
              <p className="text-white/70 leading-relaxed text-lg">{project.description}</p>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-white/90">Key Features &</span>
                <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h3>
              <p className="text-xl text-white/70">Advanced functionality delivered with modern best practices</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-6 p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon icon="carbon:checkmark" className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{feature}</h4>
                    <p className="text-white/70 leading-relaxed">Advanced implementation with scalable architecture, security best practices, and optimal performance optimization.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'technologies':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-white/90">Technology</span>
                <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  Stack
                </span>
              </h3>
              <p className="text-xl text-white/70">Cutting-edge technologies powering this solution</p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon icon="carbon:code" className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{tech}</h4>
                  <p className="text-sm text-white/60">Core Technology</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-white/90">Project Impact &</span>
                <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  Results
                </span>
              </h3>
              <p className="text-xl text-white/70">Measurable outcomes and business value delivered</p>
            </div>
            
            {/* Key Metrics */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {project.impact && Object.entries(project.impact).map(([key, value], index) => (
                <div
                  key={index}
                  className="group text-center p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="text-4xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{value}</div>
                  <div className="text-sm text-white/60 capitalize mb-4">{key.replace('_', ' ')}</div>
                  <div className="w-full h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-30 group-hover:opacity-60 transition-opacity"></div>
                </div>
              ))}
            </div>

            {/* Success Story */}
            <div 
              className="p-8 md:p-12 rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                  <Icon icon="carbon:trophy" className="w-7 h-7 text-yellow-400" />
                </div>
                Success Story
              </h4>
              <p className="text-white/70 leading-relaxed text-lg">
                This project delivered exceptional business transformation, exceeding all initial expectations and establishing new performance benchmarks. 
                The implementation of cutting-edge technologies and strategic best practices resulted in significant improvements across all key performance 
                indicators, driving measurable business growth and operational excellence. The solution continues to provide ongoing value, demonstrating 
                the power of innovative software development in achieving sustainable competitive advantage.
              </p>
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-white/90">Challenges &</span>
                <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h3>
              <p className="text-xl text-white/70">How we overcame complex technical and business challenges</p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  challenge: "Scalability Requirements",
                  solution: "Implemented microservices architecture with auto-scaling capabilities to handle traffic spikes efficiently and maintain optimal performance.",
                  impact: "System now handles 10x the original load with 99.9% uptime"
                },
                {
                  challenge: "Security Compliance",
                  solution: "Integrated enterprise-grade security measures including end-to-end encryption, audit trails, and comprehensive compliance monitoring.",
                  impact: "Achieved industry certifications and zero security incidents"
                },
                {
                  challenge: "Integration Complexity",
                  solution: "Developed custom APIs and middleware to seamlessly connect with existing systems and third-party services without disruption.",
                  impact: "Reduced data processing time by 75% with seamless integrations"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-3 gap-8 p-8 rounded-2xl"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div>
                    <h4 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                      <Icon icon="carbon:warning" className="w-6 h-6 text-red-400" />
                      Challenge
                    </h4>
                    <p className="text-white/70 leading-relaxed">{item.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary-400 mb-4 flex items-center gap-2">
                      <Icon icon="carbon:lightbulb" className="w-6 h-6 text-primary-400" />
                      Solution
                    </h4>
                    <p className="text-white/70 leading-relaxed">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-accent-400 mb-4 flex items-center gap-2">
                      <Icon icon="carbon:chart-line" className="w-6 h-6 text-accent-400" />
                      Impact
                    </h4>
                    <p className="text-white/70 leading-relaxed">{item.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-white/90">Development</span>
                <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  Timeline
                </span>
              </h3>
              <p className="text-xl text-white/70">Structured development process from concept to deployment</p>
            </div>
            
            <div className="space-y-6">
              {[
                { phase: "Discovery & Planning", duration: "2 weeks", description: "Requirements gathering, technical analysis, stakeholder interviews, and comprehensive project planning" },
                { phase: "Design & Architecture", duration: "3 weeks", description: "System design, UI/UX mockups, technical architecture, and database schema design" },
                { phase: "Development Sprint 1", duration: "4 weeks", description: "Core functionality development, API creation, and initial testing with continuous integration" },
                { phase: "Development Sprint 2", duration: "4 weeks", description: "Feature implementation, user interface development, and comprehensive integration testing" },
                { phase: "Testing & QA", duration: "2 weeks", description: "Comprehensive testing, bug fixes, performance optimization, and quality assurance" },
                { phase: "Deployment & Launch", duration: "1 week", description: "Production deployment, monitoring setup, go-live support, and team training" }
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start gap-8 p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <h4 className="text-xl font-bold text-white mb-2 sm:mb-0">{milestone.phase}</h4>
                      <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-300 text-sm font-medium rounded-full border border-primary-500/30">
                        {milestone.duration}
                      </span>
                    </div>
                    <p className="text-white/70 leading-relaxed">{milestone.description}</p>
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary-500/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div>
            {/* Back Button */}
            <button
              onClick={() => navigate('/portfolio')}
              className="group inline-flex items-center gap-3 px-6 py-4 mb-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <Icon icon="carbon:arrow-left" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Portfolio</span>
            </button>

            {/* Project Header */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-primary-500 to-accent-500 text-white">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center gap-2">
                      <Icon icon="carbon:star-filled" className="w-4 h-4" />
                      Featured Project
                    </span>
                  )}
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : project.status === 'In Development'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  <span className="text-white/90">{project.title.split(' ').slice(0, -1).join(' ')}</span>
                  <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                    {project.title.split(' ').slice(-1)}
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <Icon icon="carbon:user-avatar" className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60 mb-1">Client</div>
                    <div className="text-white font-medium">{project.client}</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <Icon icon="carbon:calendar" className="w-6 h-6 text-accent-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60 mb-1">Year</div>
                    <div className="text-white font-medium">{project.year}</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <Icon icon="carbon:time" className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60 mb-1">Duration</div>
                    <div className="text-white font-medium">{project.duration}</div>
                  </div>
                </div>

                {/* Quick Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 6).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary-500/20 text-secondary-300 text-sm rounded border border-secondary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded border border-white/20">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-video group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Project Meta */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white/90 text-sm">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                          <Icon icon="carbon:user-multiple" className="w-4 h-4" />
                          {project.teamSize}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                          <Icon icon="carbon:currency-dollar" className="w-4 h-4" />
                          {project.budget}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-50 py-4 border-b border-white/10 bg-primary-900/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-2 md:gap-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl whitespace-nowrap transition-all duration-300 font-medium ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg scale-105'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:scale-105'
                }`}
              >
                <Icon icon={tab.icon} className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          {renderTabContent()}
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Icon icon="carbon:folders" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Related Work</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-white/90">Similar</span>
              <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => navigate(`/portfolio/${relatedProject.id}`)}
                  className="group cursor-pointer rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-accent-400 font-medium mb-2">{relatedProject.client}</p>
                    <p className="text-sm text-white/60">{relatedProject.category} • {relatedProject.year}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-primary-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <Icon icon="carbon:lightbulb" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-white/90 tracking-wide">GET STARTED</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-white/90">Ready for</span>
              <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Similar Results?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
              Let's discuss how we can apply our expertise to deliver exceptional results for your next project
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => navigate('/contact-us')}
                className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-primary-500/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:rocket" className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button
                onClick={() => navigate('/services')}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:document" className="w-6 h-6 mr-3" />
                  View Our Services
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail; 