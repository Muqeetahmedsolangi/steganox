import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { caseStudies } from '../../../constant/data';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get the case study data
  const caseStudy = caseStudies.find(study => study.id === parseInt(id));

  // Enhanced data for better presentation
  const enhancedMetrics = caseStudy ? [
    { 
      icon: 'carbon:time', 
      label: 'Duration', 
      value: caseStudy.duration,
      description: 'Project completion time'
    },
    { 
      icon: 'carbon:user-multiple', 
      label: 'Team Size', 
      value: caseStudy.teamSize,
      description: 'Expert developers involved'
    },
    { 
      icon: 'carbon:calendar', 
      label: 'Year', 
      value: caseStudy.year,
      description: 'Project completion year'
    },
    { 
      icon: 'carbon:checkmark-filled', 
      label: 'Status', 
      value: caseStudy.status,
      description: 'Current project status'
    }
  ] : [];

  const tabNavigation = [
    { id: 'overview', label: 'Overview', icon: 'carbon:view' },
    { id: 'approach', label: 'Approach', icon: 'carbon:flow' },
    { id: 'technologies', label: 'Technologies', icon: 'carbon:code' },
    { id: 'results', label: 'Results', icon: 'carbon:chart-line' },
    { id: 'challenges', label: 'Challenges', icon: 'carbon:warning' },
    { id: 'timeline', label: 'Timeline', icon: 'carbon:time-plot' }
  ];

  useEffect(() => {
    if (!caseStudy) {
      navigate('/case-studies');
      return;
    }
  }, [caseStudy, navigate]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary-500/30 rounded-full animate-spin border-t-primary-500 mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-2 border-accent-500/20 rounded-full animate-pulse mx-auto"></div>
          </div>
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
            <span className="text-sm font-medium text-white/90 tracking-wide">Q HUB INFORMATION</span>
          </div>
          <p className="text-white text-lg">Loading case study...</p>
          <p className="text-gray-400 text-sm mt-2">Please wait while we fetch the details</p>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Icon icon="carbon:warning" className="text-red-400" />
                  Project Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Icon icon="carbon:lightbulb" className="text-primary-400" />
                  Our Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Project Scope */}
            {caseStudy.scope && (
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Icon icon="carbon:scope" className="text-accent-400" />
                  Project Scope
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-400 mb-4">Target Sectors</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.scope.targetSectors?.map((sector, index) => (
                        <span key={index} className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-400 mb-4">Project Types</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.scope.projectTypes?.map((type, index) => (
                        <span key={index} className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm border border-secondary-500/30">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Enhanced Visual Data */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary-900/30 to-primary-800/30 border border-primary-500/20 rounded-2xl p-6">
                <Icon icon="carbon:industry" className="w-12 h-12 text-primary-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Industry Focus</h4>
                <p className="text-primary-300">{caseStudy.industry}</p>
              </div>
              
              <div className="bg-gradient-to-br from-secondary-900/30 to-secondary-800/30 border border-secondary-500/20 rounded-2xl p-6">
                <Icon icon="carbon:user-avatar" className="w-12 h-12 text-secondary-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Client</h4>
                <p className="text-secondary-300">{caseStudy.client}</p>
              </div>
              
              <div className="bg-gradient-to-br from-accent-900/30 to-accent-800/30 border border-accent-500/20 rounded-2xl p-6">
                <Icon icon="carbon:rocket" className="w-12 h-12 text-accent-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Project Impact</h4>
                <p className="text-accent-300">Transformative solution</p>
              </div>
            </div>
          </div>
        );
        
      case 'approach':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="carbon:flow" className="text-primary-400" />
              Our Methodology
            </h3>
            {caseStudy.approach ? (
              <div className="space-y-6">
                {caseStudy.approach.map((step, index) => (
                  <div key={index} className="flex gap-6 p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {step.split(':')[0]}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {step.split(':')[1] || step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl">
                <Icon icon="carbon:information" className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Detailed approach information coming soon...</p>
              </div>
            )}
          </div>
        );
        
      case 'technologies':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="carbon:code" className="text-primary-400" />
              Technology Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.technologies.map((tech, index) => (
                <div key={index} className="group p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon icon="carbon:code" className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{tech}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Modern technology stack for scalable and robust software solutions
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'results':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="carbon:chart-line" className="text-primary-400" />
              Project Results
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/20 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon icon="carbon:checkmark" className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {result.includes('%') ? 'Performance Improvement' : 'Achievement'}
                      </h4>
                      <p className="text-green-300 font-medium">{result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {caseStudy.keyResults && (
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Icon icon="carbon:trophy" className="text-yellow-400" />
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  {caseStudy.keyResults.map((achievement, index) => (
                    <div key={index} className="p-4 bg-black/30 border border-white/10 rounded-xl">
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
        
      case 'challenges':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="carbon:warning" className="text-primary-400" />
              Challenges & Solutions
            </h3>
            {caseStudy.challenges ? (
              <div className="space-y-8">
                {caseStudy.challenges.map((item, index) => (
                  <div key={index} className="p-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Icon icon="carbon:warning" className="w-6 h-6 text-red-400" />
                          <h4 className="text-xl font-semibold text-red-400">Challenge</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.challenge}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Icon icon="carbon:lightbulb" className="w-6 h-6 text-green-400" />
                          <h4 className="text-xl font-semibold text-green-400">Solution</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.resolution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl">
                <Icon icon="carbon:information" className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Challenge details coming soon...</p>
              </div>
            )}
          </div>
        );
        
      case 'timeline':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon icon="carbon:time-plot" className="text-primary-400" />
              Project Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
              <div className="space-y-8">
                {[
                  { phase: 'Project Discovery', duration: '2 weeks', description: 'Requirements analysis and technical architecture planning' },
                  { phase: 'Design & Architecture', duration: '4 weeks', description: 'UI/UX design and system architecture development' },
                  { phase: 'Development Sprint', duration: '8 weeks', description: 'Agile development with continuous integration' },
                  { phase: 'Testing & QA', duration: '3 weeks', description: 'Automated testing, security audits, and performance optimization' },
                  { phase: 'Deployment & Launch', duration: '1 week', description: 'Production deployment and go-live support' }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1 p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl">
                      <h4 className="text-xl font-semibold text-white mb-2">{item.phase}</h4>
                      <p className="text-primary-400 font-medium mb-2">{item.duration}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <div className="relative z-50 py-6 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Icon icon="carbon:arrow-left" className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <span className="text-sm font-medium text-white/90 tracking-wide">Q HUB INFORMATION</span>
              </div>
              <button
                onClick={() => navigate('/contact-us')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/25"
              >
                <span className="flex items-center gap-2">
                  <Icon icon="carbon:rocket" className="w-4 h-4" />
                  Start Similar Project
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary-500/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {/* Industry Badge */}
              <div className="inline-block mb-6">
                <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <Icon icon="carbon:industry" className="w-5 h-5 text-accent-400 mr-3" />
                  <span className="text-sm font-medium text-white/90 tracking-wide uppercase">{caseStudy.industry}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
                  {caseStudy.title}
                </span>
              </h1>

              {/* Client */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <Icon icon="carbon:user-avatar" className="w-5 h-5 text-accent-400" />
                <p className="text-xl text-accent-400 font-medium">
                  Client: {caseStudy.client}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Project Image */}
            <div className="relative rounded-3xl overflow-hidden mb-12">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {enhancedMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={metric.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-white/60 mb-1">{metric.label}</div>
                  <div className="text-xs text-white/40">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 border-t border-white/10 sticky top-0 z-40 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabNavigation.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon icon={tab.icon} className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* Project Outcome */}
      {caseStudy.outcome && (
        <section className="py-16 bg-gradient-to-r from-black/60 to-primary-900/20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Project Impact
              </h2>
              <div className="p-8 bg-gradient-to-br from-primary-900/20 to-secondary-900/20 rounded-2xl border border-primary-500/20">
                <Icon icon="carbon:trophy" className="w-16 h-16 text-primary-400 mx-auto mb-6" />
                <p className="text-lg text-gray-300 leading-relaxed">
                  {caseStudy.outcome}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Related Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies
              .filter(study => study.id !== caseStudy.id && study.industry === caseStudy.industry)
              .slice(0, 3)
              .map((study) => (
                <div
                  key={study.id}
                  onClick={() => navigate(`/case-studies/${study.id}`)}
                  className="group cursor-pointer bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{study.client}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-400 text-sm">{study.industry}</span>
                      <Icon icon="carbon:arrow-right" className="w-5 h-5 text-gray-400 group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900/20 to-secondary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can develop innovative software solutions to achieve similar breakthrough results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact-us')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/30"
            >
              <div className="flex items-center justify-center gap-2">
                <Icon icon="carbon:rocket" className="w-5 h-5" />
                Start Your Project
              </div>
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center gap-2">
                <Icon icon="carbon:folder" className="w-5 h-5" />
                View All Case Studies
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;  
