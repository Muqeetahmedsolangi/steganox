import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { heroData } from '../constant/data';

const FuturisticHero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Dynamic gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-primary-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent-300 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 animate-fade-in">
          <Icon icon="carbon:innovation" className="w-5 h-5 text-accent-400 mr-3" />
          <span className="text-sm font-medium text-white/90 tracking-wide uppercase">{heroData.subtitle}</span>
          <Icon icon="carbon:arrow-right" className="w-4 h-4 text-accent-400 ml-3" />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
            {heroData.title}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 mb-6">
          {heroData.description}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
          {heroData.subDescription}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => navigate('/contact-us')}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center justify-center">
              Get Started
              <Icon icon="carbon:arrow-right" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
          </button>
          
          <button 
            onClick={() => navigate('/portfolio')}
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <span className="flex items-center justify-center">
              <Icon icon="carbon:play-filled" className="w-5 h-5 mr-2" />
              View Portfolio
            </span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">500+</div>
            <div className="text-white/60 text-sm uppercase tracking-wide">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">150+</div>
            <div className="text-white/60 text-sm uppercase tracking-wide">Expert Engineers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">120+</div>
            <div className="text-white/60 text-sm uppercase tracking-wide">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">98%</div>
            <div className="text-white/60 text-sm uppercase tracking-wide">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/40">
          <span className="text-sm mb-2 tracking-wide">Scroll to explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent relative">
            <div className="absolute top-0 w-px h-4 bg-primary-400 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero; 