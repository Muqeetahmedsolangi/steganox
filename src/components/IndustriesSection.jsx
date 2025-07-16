import { Icon } from '@iconify/react';
import { industriesData } from '../constant/data';
import { useNavigate } from 'react-router-dom';

const IndustriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <Icon icon="carbon:industry" className="w-5 h-5 text-accent-400 mr-3" />
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Industry Solutions</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
              Industries
            </span>
            <br />
            <span className="text-white/90">We Transform</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Delivering specialized software solutions across diverse sectors with deep domain expertise and cutting-edge technology
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">25+</div>
              <div className="text-sm text-white/60">Industries Served</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400">500+</div>
              <div className="text-sm text-white/60">Sector Projects</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-white/60">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industriesData.map((industry, index) => (
            <article
              key={index}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon={industry.icon} className="text-3xl text-primary-300" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-200 transition-colors">
                  {industry.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Clients Info */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent-400 mr-2"></div>
                    <span className="text-sm font-medium text-white/80">{industry.clients}</span>
                  </div>
                  
                  <Icon 
                    icon="carbon:arrow-right" 
                    className="w-5 h-5 text-white/40 group-hover:text-accent-400 group-hover:translate-x-1 transition-all" 
                  />
                </div>

                {/* Specialty Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {index === 0 && (
                    <>
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20">Digital Banking</span>
                      <span className="px-3 py-1 bg-accent-500/10 text-accent-300 text-xs rounded-full border border-accent-500/20">Risk Management</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20">Telemedicine</span>
                      <span className="px-3 py-1 bg-accent-500/10 text-accent-300 text-xs rounded-full border border-accent-500/20">HIPAA Compliant</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20">E-commerce</span>
                      <span className="px-3 py-1 bg-accent-500/10 text-accent-300 text-xs rounded-full border border-accent-500/20">Omnichannel</span>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20">IoT Solutions</span>
                      <span className="px-3 py-1 bg-accent-500/10 text-accent-300 text-xs rounded-full border border-accent-500/20">Automation</span>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20">Connected Cars</span>
                      <span className="px-3 py-1 bg-accent-500/10 text-accent-300 text-xs rounded-full border border-accent-500/20">Fleet Management</span>
                    </>
                  )}
                  {index === 5 && (
                    <>
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20">Smart Grid</span>
                      <span className="px-3 py-1 bg-accent-500/10 text-accent-300 text-xs rounded-full border border-accent-500/20">AI Analytics</span>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Industry?
            </h3>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
              We adapt our expertise to meet unique sector requirements and deliver custom solutions tailored to your specific industry challenges and opportunities.
            </p>
            
            {/* Industry Expertise Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Government", "Non-Profit", "Insurance", "Real Estate", 
                "Travel & Tourism", "Media & Entertainment", "Agriculture", "Construction"
              ].map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/80 text-sm hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact-us')} 
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Icon icon="carbon:chat" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Discuss Your Industry Needs
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </button>
            
            <button 
              onClick={() => navigate('/case-studies')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                <Icon icon="carbon:document" className="w-5 h-5 mr-2" />
                View Case Studies
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection; 