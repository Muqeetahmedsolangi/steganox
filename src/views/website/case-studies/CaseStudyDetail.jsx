import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { caseStudies } from '../../../constant/data';

gsap.registerPlugin(ScrollTrigger);

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(false);
  
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);
  const tabsRef = useRef([]);
  const statsRef = useRef([]);

  // Get the case study data
  const caseStudy = caseStudies.find(study => study.id === parseInt(id));

  // Enhanced data for better presentation
  const enhancedMetrics = caseStudy ? [
    { 
      icon: 'mdi:clock-outline', 
      label: 'Duration', 
      value: caseStudy.duration,
      description: 'Project completion time',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: 'mdi:account-group', 
      label: 'Team Size', 
      value: caseStudy.teamSize,
      description: 'Expert developers involved',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: 'mdi:calendar-check', 
      label: 'Year', 
      value: caseStudy.year,
      description: 'Project completion year',
      color: 'from-green-500 to-teal-500'
    },
    { 
      icon: 'mdi:check-circle', 
      label: 'Status', 
      value: caseStudy.status,
      description: 'Current project status',
      color: 'from-orange-500 to-red-500'
    }
  ] : [];

  const tabNavigation = [
    { id: 'overview', label: 'Overview', icon: 'mdi:view-dashboard' },
    { id: 'approach', label: 'Approach', icon: 'mdi:map-marker-path' },
    { id: 'technologies', label: 'Technologies', icon: 'mdi:cog' },
    { id: 'results', label: 'Results', icon: 'mdi:chart-line' },
    { id: 'challenges', label: 'Challenges', icon: 'mdi:puzzle' },
    { id: 'timeline', label: 'Timeline', icon: 'mdi:timeline' }
  ];

  useEffect(() => {
    if (!caseStudy) {
      navigate('/case-studies');
      return;
    }

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          ease: "power3.out" 
        }
      );

      // Stats animation
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          gsap.fromTo(stat,
            { scale: 0.8, opacity: 0, y: 30 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.15,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                once: true
              }
            }
          );
        }
      });

      // Tab animation
      tabsRef.current.forEach((tab, index) => {
        if (tab) {
          gsap.fromTo(tab,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: tab,
                start: "top 90%",
                once: true
              }
            }
          );
        }
      });

      // Content sections animation
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          gsap.fromTo(section,
            { opacity: 0, y: 40 },
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
  }, [caseStudy, navigate]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <Icon icon="mdi:loading" className="w-12 h-12 text-purple-500 animate-spin mx-auto mb-4" />
          <p className="text-white">Loading case study...</p>
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
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Project Challenge</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{caseStudy.challenge}</p>
                
                <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
                <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Project Scope</h3>
                {caseStudy.scope && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Target Sectors</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.scope.targetSectors?.map((sector, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">Project Types</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.scope.projectTypes?.map((type, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Enhanced Visual Data */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-6 rounded-2xl border border-purple-500/20">
                <Icon icon="mdi:target" className="w-12 h-12 text-purple-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Industry Focus</h4>
                <p className="text-purple-300">{caseStudy.industry}</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-6 rounded-2xl border border-blue-500/20">
                <Icon icon="mdi:account-tie" className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Client</h4>
                <p className="text-blue-300">{caseStudy.client}</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-6 rounded-2xl border border-green-500/20">
                <Icon icon="mdi:rocket-launch" className="w-12 h-12 text-green-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Project Impact</h4>
                <p className="text-green-300">Transformative software solution</p>
              </div>
            </div>
          </div>
        );
        
      case 'approach':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Our Methodology</h3>
            {caseStudy.approach ? (
              <div className="space-y-6">
                {caseStudy.approach.map((step, index) => (
                  <div key={index} className="flex gap-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
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
              <div className="text-center py-12">
                <Icon icon="mdi:information" className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Detailed approach information coming soon...</p>
              </div>
            )}
          </div>
        );
        
      case 'technologies':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.technologies.map((tech, index) => (
                <div key={index} className="group p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon icon="mdi:cog" className="w-6 h-6 text-white" />
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
            <h3 className="text-2xl font-bold text-white mb-6">Project Results</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-2xl border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon icon="mdi:check-bold" className="w-5 h-5 text-white" />
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
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
                <div className="space-y-4">
                  {caseStudy.keyResults.map((achievement, index) => (
                    <div key={index} className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
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
            <h3 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h3>
            {caseStudy.challenges ? (
              <div className="space-y-8">
                {caseStudy.challenges.map((item, index) => (
                  <div key={index} className="p-8 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Icon icon="mdi:alert-circle" className="w-6 h-6 text-red-400" />
                          <h4 className="text-xl font-semibold text-red-400">Challenge</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.challenge}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Icon icon="mdi:lightbulb" className="w-6 h-6 text-green-400" />
                          <h4 className="text-xl font-semibold text-green-400">Solution</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.resolution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon icon="mdi:information" className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Challenge details coming soon...</p>
              </div>
            )}
          </div>
        );
        
      case 'timeline':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Project Timeline</h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
              <div className="space-y-8">
                {[
                  { phase: 'Project Discovery', duration: '2 weeks', description: 'Requirements analysis and technical architecture planning' },
                  { phase: 'Design & Architecture', duration: '4 weeks', description: 'UI/UX design and system architecture development' },
                  { phase: 'Development Sprint', duration: '8 weeks', description: 'Agile development with continuous integration' },
                  { phase: 'Testing & QA', duration: '3 weeks', description: 'Automated testing, security audits, and performance optimization' },
                  { phase: 'Deployment & Launch', duration: '1 week', description: 'Production deployment and go-live support' }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-white mb-2">{item.phase}</h4>
                      <p className="text-purple-400 font-medium mb-2">{item.duration}</p>
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
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Navigation */}
      <div className="relative z-50 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Icon icon="mdi:arrow-left" className="w-4 h-4" />
              <span>Back</span>
            </button>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Start Similar Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-8 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {/* Industry Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30 text-purple-300 text-sm font-medium">
                  {caseStudy.industry}
                </span>
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
                {caseStudy.title}
              </h1>

              {/* Client */}
              <p 
                className="text-xl mb-8"
                style={{ color: 'rgba(168,85,247,0.8)' }}
              >
                Client: {caseStudy.client}
              </p>

              {/* Description */}
              <p 
                className="text-lg md:text-xl mb-12 max-w-4xl mx-auto"
                style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}
              >
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
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Icon icon={isPlaying ? "mdi:pause" : "mdi:play"} className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {enhancedMetrics.map((metric, index) => (
                <div
                  key={index}
                  ref={el => statsRef.current[index] = el}
                  className="text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                    <Icon icon={metric.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 border-t border-white/10 sticky top-0 z-40 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {tabNavigation.map((tab, index) => (
              <button
                key={tab.id}
                ref={el => tabsRef.current[index] = el}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon icon={tab.icon} className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div ref={el => sectionsRef.current[0] = el}>
              {renderTabContent()}
            </div>
          </div>
        </div>
      </section>

      {/* Project Outcome */}
      {caseStudy.outcome && (
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                className="font-bold mb-8"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  color: '#ffffff'
                }}
              >
                Project Impact
              </h2>
              <div className="p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/20">
                <Icon icon="mdi:trophy" className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <p 
                  className="text-lg"
                  style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}
                >
                  {caseStudy.outcome}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Related Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies
              .filter(study => study.id !== caseStudy.id && study.industry === caseStudy.industry)
              .slice(0, 3)
              .map((study, index) => (
                <div
                  key={study.id}
                  onClick={() => navigate(`/case-study/${study.id}`)}
                  className="group cursor-pointer bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{study.client}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 text-sm">{study.industry}</span>
                      <Icon icon="mdi:arrow-right" className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can develop innovative software solutions to achieve similar breakthrough results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              <div className="flex items-center justify-center gap-2">
                <Icon icon="mdi:rocket-launch" className="w-5 h-5" />
                Start Your Project
              </div>
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center gap-2">
                <Icon icon="mdi:folder-multiple" className="w-5 h-5" />
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
