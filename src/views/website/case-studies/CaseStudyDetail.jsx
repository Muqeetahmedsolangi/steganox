import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { caseStudies } from '../../../constant/data';

gsap.registerPlugin(ScrollTrigger);

function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(null);
  const [relatedStudies, setRelatedStudies] = useState([]);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Find the case study by ID
    const study = caseStudies.find(cs => cs.id === parseInt(id));
    if (study) {
      setCaseStudy(study);
      
      // Find related case studies (same industry, excluding current)
      const related = caseStudies.filter(cs => 
        cs.industry === study.industry && cs.id !== study.id
      ).slice(0, 3);
      setRelatedStudies(related);
    }
  }, [id]);

  useEffect(() => {
    if (caseStudy) {
      // Hero animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
          }
        );
      }

      // Content animation
      if (contentRef.current) {
        const sections = contentRef.current.querySelectorAll('.animate-section');
        sections.forEach((section, index) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                once: true,
              },
            }
          );
        });
      }
    }
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-void-950 flex items-center justify-center">
        <div className="text-center">
          <Icon icon="mdi:loading" className="w-12 h-12 text-cyber-500 animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Loading Case Study...</h2>
          <p className="text-gray-400">Please wait while we fetch the details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-void-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/50 to-transparent" />
        </div>

        {/* Professional Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-cyber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
          <div className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] bg-neon-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }} />
          <div className="absolute inset-0 bg-tech-grid opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <nav className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <Link to="/" className="hover:text-cyber-400 transition-colors">Home</Link>
                <Icon icon="mdi:chevron-right" className="w-4 h-4" />
                <Link to="/case-studies" className="hover:text-cyber-400 transition-colors">Case Studies</Link>
                <Icon icon="mdi:chevron-right" className="w-4 h-4" />
                <span className="text-cyber-400">{caseStudy.title}</span>
              </nav>
            </div>

            {/* Industry Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-500/20 backdrop-blur-sm rounded-full text-cyber-400 text-sm font-semibold border border-cyber-500/30">
                <Icon icon="carbon:industry" className="w-4 h-4" />
                {caseStudy.industry}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              {caseStudy.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {caseStudy.challenge}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyber-400 mb-2">
                  {caseStudy.results?.[0] || "40%"}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neon-400 mb-2">
                  {caseStudy.technologies?.length || 4}+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-quantum-400 mb-2">
                  {caseStudy.duration || "6 months"}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyber-400 mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-void-950 to-void-900 relative" ref={contentRef}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge Section */}
              <div className="animate-section">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Icon icon="mdi:target" className="text-cyber-500" />
                  The Challenge
                </h2>
                <div className="bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl p-6 border border-void-700/50">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {caseStudy.challenge}
                  </p>
                  <p className="text-gray-400 leading-relaxed mt-4">
                    Our client faced significant technical challenges requiring innovative engineering solutions. 
                    The project demanded expertise in advanced materials, precision manufacturing, and cutting-edge 
                    design methodologies to achieve the required performance specifications.
                  </p>
                </div>
              </div>

              {/* Solution Section */}
              <div className="animate-section">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Icon icon="mdi:lightbulb" className="text-neon-500" />
                  Our Solution
                </h2>
                <div className="bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl p-6 border border-void-700/50">
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    {caseStudy.solution}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Our multidisciplinary team leveraged advanced engineering principles, state-of-the-art 
                    simulation tools, and innovative manufacturing techniques to deliver a comprehensive solution 
                    that exceeded client expectations and industry standards.
                  </p>
                </div>
              </div>

              {/* Results Section */}
              <div className="animate-section">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Icon icon="mdi:chart-line" className="text-quantum-500" />
                  Results & Impact
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {caseStudy.results?.map((result, index) => (
                    <div key={index} className="bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl p-6 border border-void-700/50 text-center">
                      <div className="text-3xl font-bold text-cyber-400 mb-2">
                        {result}
                      </div>
                      <div className="text-gray-400 text-sm uppercase tracking-wider">
                        Achievement {index + 1}
                      </div>
                    </div>
                  )) || (
                    <div className="col-span-2 bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl p-6 border border-void-700/50">
                      <p className="text-gray-300 leading-relaxed">
                        The project delivered exceptional results, significantly improving performance metrics 
                        and establishing new benchmarks in the industry. Our innovative approach resulted in 
                        cost savings, enhanced efficiency, and superior product quality.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Process Section */}
              <div className="animate-section">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Icon icon="mdi:cog" className="text-plasma-500" />
                  Engineering Process
                </h2>
                <div className="space-y-4">
                  {[
                    { step: "Research & Analysis", description: "Comprehensive analysis of requirements and constraints" },
                    { step: "Concept Development", description: "Innovative design concepts and feasibility studies" },
                    { step: "Detailed Design", description: "Precise 3D modeling and engineering calculations" },
                    { step: "Simulation & Testing", description: "Virtual validation and performance optimization" },
                    { step: "Prototyping", description: "Physical prototypes and real-world testing" },
                    { step: "Manufacturing", description: "Production-ready design and quality assurance" }
                  ].map((phase, index) => (
                    <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-void-900/40 to-void-800/40 backdrop-blur-xl rounded-xl p-4 border border-void-700/30">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyber-500 to-neon-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{phase.step}</h4>
                        <p className="text-gray-400 text-sm">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details */}
              <div className="animate-section">
                <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                <div className="bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl rounded-2xl p-6 border border-void-700/50 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Client</span>
                    <span className="text-white font-medium">{caseStudy.client || "Confidential"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Industry</span>
                    <span className="text-cyber-400 font-medium">{caseStudy.industry}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-medium">{caseStudy.duration || "6 months"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status</span>
                    <span className="text-green-400 font-medium">Completed</span>
                  </div>

                </div>
              </div>

              {/* Technologies Used */}
              <div className="animate-section">
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="space-y-3">
                  {caseStudy.technologies?.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gradient-to-br from-void-900/40 to-void-800/40 backdrop-blur-xl rounded-xl p-3 border border-void-700/30">
                      <Icon icon="mdi:check-circle" className="text-cyber-500 w-5 h-5" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="animate-section">
                <div className="bg-gradient-to-br from-cyber-500/20 to-neon-500/20 backdrop-blur-xl rounded-2xl p-6 border border-cyber-500/30 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">Interested in Similar Work?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Let's discuss how we can help with your engineering challenges.
                  </p>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-500 to-cyber-600 rounded-xl font-bold text-white hover:scale-105 transition-all duration-300"
                  >
                    <Icon icon="mdi:rocket" className="w-5 h-5" />
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-16 px-4 bg-void-950 relative">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Related Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedStudies.map((study, index) => (
                <div
                  key={study.id}
                  onClick={() => navigate(`/case-studies/${study.id}`)}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl border border-void-700/50 hover:border-cyber-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyber-500/20"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void-900/90 via-void-900/20 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-cyber-400 font-semibold uppercase tracking-wider">{study.industry}</span>
                      <Icon icon="mdi:arrow-right" className="w-5 h-5 text-cyber-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyber-400 transition-colors duration-300 line-clamp-2">{study.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{study.challenge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Case Studies */}
      <section className="py-8 px-4 bg-void-950 border-t border-void-700/30">
        <div className="container mx-auto text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyber-500/50 rounded-xl font-bold text-cyber-400 hover:bg-cyber-500/10 hover:border-cyber-400/70 transition-all duration-300"
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5" />
            Back to All Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CaseStudyDetail;  
