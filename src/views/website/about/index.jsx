import React from 'react';
import { Icon } from '@iconify/react';
import { aboutStats, aboutTeamMembers, aboutTimeline, aboutValues } from '../../../constant/data';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Icon icon="carbon:information" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">About Us</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="text-white/90">Q HUB INFORMATION</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              Transforming businesses through innovative software solutions and cutting-edge technology since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p className="text-lg">
                  Founded in 2018, Q HUB INFORMATION began with a simple mission: to bridge the gap between complex business challenges and innovative software solutions. What started as a small team of passionate developers has grown into a leading software development company.
                </p>
                <p className="text-lg">
                  Today, we're proud to serve over 120 clients worldwide, delivering cutting-edge solutions that drive digital transformation and business growth across multiple industries.
                </p>
                <p className="text-lg">
                  Our commitment to excellence, innovation, and client success has made us a trusted partner for businesses looking to leverage technology for competitive advantage.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {aboutStats.map((stat, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <Icon icon={stat.icon} className="w-8 h-8 text-primary-300 mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutValues.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center">
                  <Icon icon={value.icon} className="w-8 h-8 text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {aboutTimeline.map((item, index) => (
              <div key={index} className="relative flex items-center mb-12 last:mb-0">
                <div className="flex-shrink-0 w-32 text-right mr-8">
                  <div className="text-2xl font-bold text-primary-300">{item.year}</div>
                </div>
                
                <div className="flex-shrink-0 w-4 h-4 bg-accent-400 rounded-full relative z-10"></div>
                
                <div className="flex-grow ml-8">
                  <div 
                    className="p-6 rounded-xl"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
                
                {index < aboutTimeline.length - 1 && (
                  <div className="absolute left-[140px] top-8 w-px h-16 bg-white/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Meet the experts driving innovation at Q HUB INFORMATION
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutTeamMembers.map((member, index) => (
              <div 
                key={index}
                className="text-center group transition-all duration-300 hover:scale-105"
              >
                <div 
                  className="p-6 rounded-xl mb-6"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-primary-300 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-white/60 mb-4">{member.education}</p>
                  
                  <div className="flex justify-center gap-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a 
                        key={platform}
                        href={url}
                        className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                      >
                        <Icon icon={`carbon:logo-${platform}`} className="w-4 h-4 text-white/70" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative software solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <span className="relative z-10 flex items-center justify-center">
                <Icon icon="carbon:arrow-right" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Get Started
              </span>
            </button>
            
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <span className="flex items-center justify-center">
                <Icon icon="carbon:phone" className="w-5 h-5 mr-2" />
                Contact Us
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
