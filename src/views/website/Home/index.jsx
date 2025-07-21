import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import FuturisticHero from '../../../components/FuturisticHero';
import AboutSection from '../../../components/AboutSection';
import ServicesSection from '../../../components/ServicesSection';
import IndustriesSection from '../../../components/IndustriesSection';
import WhyChooseSection from '../../../components/WhyChooseSection';
import MissionVisionSection from '../../../components/MissionVisionSection';
import ExpertiseSection from '../../../components/ExpertiseSection';
import PortfolioShowcase from '../../../components/PortfolioShowcase';
import TimelineScroll from '../../../components/TimelineScroll';
import FAQSection from '../../../components/FAQSection';
import { testimonials } from '../../../constant/data';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative">
      {/* Global IT Background Pattern with Dark Blue Theme */}
      <div className="absolute inset-0 z-0">
        {/* Primary Grid Pattern with Dark Blue */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(30, 58, 138, 0.15) 1px, transparent 0),
            linear-gradient(90deg, rgba(29, 78, 216, 0.08) 1px, transparent 1px),
            linear-gradient(rgba(29, 78, 216, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px, 60px 60px, 60px 60px'
        }}></div>

        {/* IT Mockup Elements with Dark Blue Theme */}
        {/* Terminal/Console Mockup */}
        <div className="absolute top-20 left-10 bg-slate-800/30 border border-blue-600/20 rounded p-2 text-xs font-mono text-blue-300/40 select-none hidden lg:block">
          <div className="flex items-center mb-1">
            <div className="w-2 h-2 bg-red-400/40 rounded-full mr-1"></div>
            <div className="w-2 h-2 bg-yellow-400/40 rounded-full mr-1"></div>
            <div className="w-2 h-2 bg-blue-400/40 rounded-full"></div>
          </div>
          <div>$ npm run dev</div>
          <div className="text-blue-400/40">✓ Server started</div>
        </div>

        {/* Code Snippet Mockup */}
        <div className="absolute top-32 right-16 bg-slate-800/30 border border-blue-600/20 rounded p-2 text-xs font-mono text-blue-300/40 select-none hidden lg:block">
          <div>{'function() {'}</div>
          <div className="ml-2">{'return <App />'}</div>
          <div>{'}'}</div>
        </div>

        {/* Database/Server Icons */}
        <div className="absolute bottom-40 left-16 flex flex-col gap-2 text-blue-500/30 hidden md:block">
          <Icon icon="carbon:db2-database" className="w-6 h-6" />
          <Icon icon="carbon:server" className="w-6 h-6" />
          <Icon icon="carbon:cloud" className="w-6 h-6" />
        </div>

        {/* API Endpoints Mockup */}
        <div className="absolute top-1/2 right-10 bg-slate-800/30 border border-blue-600/20 rounded p-2 text-xs font-mono text-blue-300/40 select-none hidden xl:block">
          <div className="text-blue-400/40">GET /api/users</div>
          <div className="text-indigo-400/40">POST /api/auth</div>
          <div className="text-blue-500/40">PUT /api/data</div>
        </div>

        {/* Binary/Hex Patterns */}
        <div className="absolute bottom-20 right-20 text-blue-400/15 font-mono text-xs select-none leading-relaxed hidden lg:block">
          1010 0101<br/>
          1100 0011<br/>
          0xFF 0x00
        </div>

        {/* Circuit Board Pattern */}
        <div className="absolute top-1/3 left-1/4 w-32 h-0.5 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-0.5 h-16 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-0.5 bg-gradient-to-l from-indigo-600/20 to-transparent"></div>
        <div className="absolute bottom-1/3 right-1/4 w-0.5 h-20 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>

        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-1/3 w-4 h-4 border border-blue-500/40 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-indigo-500/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/5 w-2 h-2 bg-blue-400/40 rotate-45 animate-ping delay-700"></div>
        <div className="absolute bottom-48 right-1/5 w-3 h-3 border border-indigo-500/30 rounded-sm animate-pulse delay-1000"></div>

        {/* Network Connection Nodes */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-500/50 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-indigo-500/50 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-600/50 rounded-full animate-ping delay-1000"></div>

        {/* Connection Lines */}
        <div className="absolute top-1/4 left-1/6 w-16 h-0.5 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-0.5 bg-gradient-to-r from-indigo-500/30 to-blue-600/30 -rotate-12"></div>

        {/* Code Symbols */}
        <div className="absolute top-16 left-1/2 text-blue-500/20 font-mono text-lg select-none">{'</>'}</div>
        <div className="absolute bottom-16 left-1/3 text-indigo-500/20 font-mono text-lg select-none">{'{}'}</div>
        <div className="absolute top-1/3 right-1/6 text-blue-600/20 font-mono text-lg select-none">{'[]'}</div>
      </div>

      {/* Content with unified dark blue background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="relative">
          <FuturisticHero />
        </section>

        {/* About Company Section */}
        <section id="about" className="relative bg-gradient-to-b from-slate-900 to-blue-900">
          <AboutSection />
        </section>

        {/* Core Services Section */}
        <section id="services" className="relative bg-gradient-to-b from-blue-900 to-slate-800">
          <ServicesSection />
        </section>

        {/* Portfolio Showcase Section */}
        <section id="portfolio" className="relative bg-gradient-to-b from-slate-800 to-blue-900">
          <PortfolioShowcase />
        </section>

        {/* FAQ & Support Section */}
        <section id="faq" className="relative bg-gradient-to-b from-blue-900 to-slate-900">
          <FAQSection />
        </section>

        {/* Call to Action Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16">
          <div className="container mx-auto px-6 relative z-10">
          
          {/* Main CTA Content */}
            <div className="max-w-4xl mx-auto text-center mb-12">
            
            {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full mb-8">
              <Icon icon="carbon:enterprise" className="w-5 h-5 text-blue-300 mr-3" />
                <span className="text-sm font-medium text-blue-100 tracking-wide">QUEST INFORMATION HUB</span>
            </div>
            
            {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="text-blue-100/90">Ready to Transform Your</span>
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                  Business with Quest Information Hub?
              </span>
            </h2>
            
            {/* Subheading */}
              <p className="text-lg md:text-xl text-blue-100/70 mb-10 leading-relaxed max-w-3xl mx-auto">
                Let's discuss your project requirements and build something extraordinary together
            </p>
            
            {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => navigate('/contact-us')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                    <Icon icon="carbon:chat" className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Let's Talk Business
                </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button 
                onClick={() => navigate('/portfolio')}
                  className="px-8 py-4 bg-slate-700/30 backdrop-blur-sm text-white font-bold rounded-lg border border-blue-500/30 hover:bg-blue-800/30 hover:border-blue-400/40 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                    <Icon icon="carbon:portfolio" className="w-5 h-5 mr-3" />
                    View Our Portfolio
                </span>
              </button>
            </div>
          </div>
          
            {/* Trust Indicators */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 md:p-8">
                
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-100 mb-2">
                    Trusted by Businesses Worldwide
                  </h3>
                  <p className="text-blue-100/70">
                    Join companies that trust Quest Information Hub for their software needs
                  </p>
              </div>
              
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">500+</div>
                    <div className="text-blue-100/70 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-1">8+</div>
                    <div className="text-blue-100/70 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-100 mb-1">98%</div>
                    <div className="text-blue-100/70 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-1">24/7</div>
                    <div className="text-blue-100/70 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    </div>
  );
}

export default Home;
