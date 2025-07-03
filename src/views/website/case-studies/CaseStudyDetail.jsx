import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData, caseStudies } from '../../../constant/data';

gsap.registerPlugin(ScrollTrigger);

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);

  // Get the case study data
  const caseStudyIndex = parseInt(id) - 1;
  const portfolioItem = portfolioData[caseStudyIndex];
  const detailedCase = caseStudies[caseStudyIndex];

  useEffect(() => {
    if (!portfolioItem) {
      navigate('/case-studies');
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
  }, [portfolioItem, navigate]);

  if (!portfolioItem) {
    return null;
  }

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
            <span>Back to Portfolio</span>
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
            {/* Industry Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30 text-purple-300 text-sm font-medium">
                {portfolioItem.industry}
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
              {portfolioItem.title}
            </h1>

            {/* Client */}
            <p 
              className="text-xl mb-8"
              style={{ color: 'rgba(168,85,247,0.8)' }}
            >
              {portfolioItem.client}
            </p>

            {/* Description */}
            <p 
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}
            >
              {portfolioItem.description}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {Object.entries(portfolioItem.impact).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div 
                    className="font-bold mb-2"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {value}
                  </div>
                  <div 
                    className="text-sm capitalize"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {key.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section ref={el => sectionsRef.current[0] = el} className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={portfolioItem.image}
                alt={portfolioItem.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div ref={contentRef} className="container mx-auto px-4 md:px-6 max-w-6xl">
        {detailedCase && (
          <>
            {/* Project Overview */}
            <section ref={el => sectionsRef.current[1] = el} className="py-16 border-b border-white/10">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 
                    className="font-bold mb-6"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                      color: '#ffffff'
                    }}
                  >
                    Project Overview
                  </h2>
                  <p 
                    className="text-lg mb-8"
                    style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}
                  >
                    {detailedCase.challenge}
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-white">Solution Approach</h3>
                  <p 
                    className="text-base"
                    style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}
                  >
                    {detailedCase.solution}
                  </p>
                </div>

                <div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-white">Project Details</h4>
                      <div className="space-y-3">
                        {[
                          { label: 'Duration', value: detailedCase.duration },
                          { label: 'Team Size', value: detailedCase.teamSize },
                          { label: 'Status', value: detailedCase.status },
                          { label: 'Year', value: detailedCase.year }
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-white/10">
                            <span style={{ color: 'rgba(255,255,255,0.6)' }}>{item.label}</span>
                            <span className="text-white font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technologies Used */}
            <section ref={el => sectionsRef.current[2] = el} className="py-16 border-b border-white/10">
              <h2 
                className="font-bold mb-8 text-center"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  color: '#ffffff'
                }}
              >
                Technologies Used
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {detailedCase.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 rounded-full text-lg font-medium"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.9)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Key Results */}
            <section ref={el => sectionsRef.current[3] = el} className="py-16 border-b border-white/10">
              <h2 
                className="font-bold mb-8 text-center"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  color: '#ffffff'
                }}
              >
                Key Results
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {detailedCase.results.map((result, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon icon="fluent:checkmark-24-filled" className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white font-medium">{result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Approach */}
            {detailedCase.approach && (
              <section ref={el => sectionsRef.current[4] = el} className="py-16 border-b border-white/10">
                <h2 
                  className="font-bold mb-8 text-center"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    color: '#ffffff'
                  }}
                >
                  Project Approach
                </h2>
                <div className="space-y-6">
                  {detailedCase.approach.map((step, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white font-bold"
                          style={{ backgroundColor: 'rgba(168,85,247,0.2)' }}
                        >
                          {index + 1}
                        </div>
                        <p className="text-white">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges & Solutions */}
            {detailedCase.challenges && (
              <section ref={el => sectionsRef.current[5] = el} className="py-16 border-b border-white/10">
                <h2 
                  className="font-bold mb-8 text-center"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    color: '#ffffff'
                  }}
                >
                  Challenges & Solutions
                </h2>
                <div className="space-y-8">
                  {detailedCase.challenges.map((item, index) => (
                    <div
                      key={index}
                      className="p-8 rounded-2xl"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-red-400">Challenge</h4>
                          <p style={{ color: 'rgba(255,255,255,0.7)' }}>{item.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-green-400">Solution</h4>
                          <p style={{ color: 'rgba(255,255,255,0.7)' }}>{item.resolution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Project Outcome */}
            {detailedCase.outcome && (
              <section ref={el => sectionsRef.current[6] = el} className="py-16 border-b border-white/10">
                <h2 
                  className="font-bold mb-8 text-center"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    color: '#ffffff'
                  }}
                >
                  Project Outcome
                </h2>
                <div className="max-w-4xl mx-auto">
                  <div
                    className="p-8 rounded-2xl text-center"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <p 
                      className="text-lg"
                      style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}
                    >
                      {detailedCase.outcome}
                    </p>
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {/* Next/Previous Cases */}
        <section ref={el => sectionsRef.current[7] = el} className="py-16">
          <div className="flex justify-between items-center">
            {caseStudyIndex > 0 && (
              <button
                onClick={() => navigate(`/case-study/${caseStudyIndex}`)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <Icon icon="fluent:arrow-left-24-filled" className="w-4 h-4" />
                <span>Previous Case</span>
              </button>
            )}
            
            {caseStudyIndex < portfolioData.length - 1 && (
              <button
                onClick={() => navigate(`/case-study/${caseStudyIndex + 2}`)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 ml-auto"
              >
                <span>Next Case</span>
                <Icon icon="fluent:arrow-right-24-filled" className="w-4 h-4" />
              </button>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section ref={el => sectionsRef.current[8] = el} className="py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 
              className="font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                color: '#ffffff'
              }}
            >
              Ready to Start Your Project?
            </h2>
            <p 
              className="text-lg mb-8"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <button 
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(168,85,247,0.3)'
              }}
              onClick={() => navigate('/contact')}
            >
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyDetail;  
