import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
const FuturisticHero = () => {
  
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-accent-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Professional Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
          <Icon icon="carbon:star-filled" className="w-4 h-4 text-accent-400 mr-2" />
          <span className="text-sm font-medium text-white/90">Trusted by 120+ Global Companies</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent animate-gradient">
            Q HUB
          </span>
          <span className="block text-white/90 text-4xl md:text-5xl lg:text-6xl font-light mt-2">
            INFORMATION
          </span>
        </h1>

        {/* Subtitle */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-200 font-light mb-4">
            Enterprise Software Solutions
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Transform Your Business with Cutting-Edge Technology
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: "carbon:code", text: "Custom Development" },
            { icon: "carbon:cloud", text: "Cloud Solutions" },
            { icon: "carbon:security", text: "Enterprise Security" },
            { icon: "carbon:mobile", text: "Mobile Apps" }
          ].map((feature, index) => (
            <div 
              key={index}
              className="flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Icon icon={feature.icon} className="w-5 h-5 text-accent-400 mr-2" />
              <span className="text-white/80 font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="relative z-10 flex items-center" onClick={() => navigate('/contact')}>
              Get Started
              <Icon icon="carbon:arrow-right" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
          </button>
          
          <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            <span className="flex items-center">
              <Icon icon="carbon:play-filled" className="w-5 h-5 mr-2" />
              View Portfolio
            </span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "Projects Delivered", icon: "carbon:checkmark-filled" },
            { value: "150+", label: "Expert Engineers", icon: "carbon:user-multiple" },
            { value: "120+", label: "Happy Clients", icon: "carbon:earth-filled" },
            { value: "98%", label: "Satisfaction Rate", icon: "carbon:face-satisfied" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-2">
                <Icon icon={stat.icon} className="w-8 h-8 text-accent-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <Icon icon="carbon:chevron-down" className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero; 