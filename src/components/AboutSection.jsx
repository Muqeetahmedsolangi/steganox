import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { aboutData } from '../constant/data';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % aboutData.badges.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden" aria-labelledby="about-heading">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-accent-400/60 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary-400/60 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-secondary-400/60 rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm border border-white/10 rounded-full mb-8">
                <Icon icon="carbon:rocket" className="w-5 h-5 text-accent-400 mr-3" />
                <span className="text-sm font-medium text-white/90 tracking-wide uppercase">About Q HUB</span>
              </div>
              
              <h2 
                id="about-heading"
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight"
              >
                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  Innovating
                </span>
                <br />
                <span className="text-white/90">The Future</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto">
                Transforming businesses through cutting-edge software solutions and revolutionary technology
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            {/* Interactive Feature Showcase */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                {/* Interactive Cards */}
                <div className="space-y-6">
                  {aboutData.badges.map((feature, index) => (
                    <div
                      key={index}
                      className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                        activeFeature === index
                          ? 'bg-gradient-to-r from-primary-500/20 to-accent-500/20 border-primary-400/50 scale-105'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      } backdrop-blur-sm border`}
                      onClick={() => setActiveFeature(index)}
                      onMouseEnter={() => setActiveFeature(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeFeature === index
                            ? 'bg-gradient-to-r from-primary-500 to-accent-500 scale-110'
                            : 'bg-white/10'
                        }`}>
                          <Icon 
                            icon={
                              index === 0 ? "carbon:innovation" :
                              index === 1 ? "carbon:development" :
                              index === 2 ? "carbon:support" :
                              "carbon:earth"
                            } 
                            className="w-6 h-6 text-white" 
                          />
                        </div>
                        <div>
                          <h3 className={`text-lg font-bold transition-colors duration-300 ${
                            activeFeature === index ? 'text-primary-300' : 'text-white'
                          }`}>
                            {feature}
                          </h3>
                          <p className="text-white/60 text-sm">
                            {index === 0 && "Cutting-edge solutions"}
                            {index === 1 && "Agile development process"}
                            {index === 2 && "24/7 dedicated support"}
                            {index === 3 && "Worldwide presence"}
                          </p>
                        </div>
                        <div className={`ml-auto transition-transform duration-300 ${
                          activeFeature === index ? 'rotate-90' : ''
                        }`}>
                          <Icon icon="carbon:chevron-right" className="w-5 h-5 text-white/60" />
                        </div>
                      </div>
                      
                      {/* Active indicator */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-accent-400 rounded-r transition-opacity duration-300 ${
                        activeFeature === index ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  ))}
                </div>

                {/* Floating Achievement Badge */}
                <div className="absolute -top-6 -right-6 z-10">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center animate-spin-slow">
                      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                        <Icon icon="carbon:trophy" className="w-8 h-8 text-accent-400" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur opacity-50 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Content Side */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-8">
                {/* Main Description */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10">
                  <div className="absolute top-4 right-4">
                    <Icon icon="carbon:quote" className="w-8 h-8 text-primary-400/40" />
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    {aboutData.mainText}
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    {aboutData.secondaryText}
                  </p>
                </div>

                {/* Highlighted Achievement */}
                <div className="relative p-6 rounded-xl bg-gradient-to-r from-primary-500/10 via-accent-500/5 to-secondary-500/10 border border-primary-400/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon icon="carbon:star-filled" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-300 mb-2">
                        {aboutData.highlights.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {aboutData.highlights.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/about')}
                    className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      <Icon icon="carbon:arrow-right" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Learn More About Us
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/portfolio')}
                    className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <Icon icon="carbon:play-filled" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Watch Story
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-primary-400/30 transition-all duration-500 hover:scale-105"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Animated Icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Icon 
                      icon={
                        index === 0 ? "carbon:checkmark-filled" :
                        index === 1 ? "carbon:user-multiple" :
                        index === 2 ? "carbon:earth-filled" :
                        "carbon:face-satisfied"
                      } 
                      className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  
                  <div className="relative text-center">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-white/60 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-secondary-500/10 backdrop-blur-xl border border-white/10">
              {/* Decorative Elements */}
              <div className="absolute top-6 left-6">
                <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-6 right-6">
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse delay-500"></div>
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-secondary-400 rounded-full animate-pulse delay-1000"></div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that trust Q HUB INFORMATION for their digital transformation journey
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/contact-us')}
                  className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-2xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <Icon icon="carbon:rocket" className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                    Start Your Project
                  </span>
                </button>
                
                <button 
                  onClick={() => navigate('/contact-us')}
                  className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    <Icon icon="carbon:chat" className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                    Schedule Call
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 