import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const FuturisticHero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies = [
    { icon: 'logos:react', name: 'React', color: 'text-blue-400' },
    { icon: 'logos:nodejs-icon', name: 'Node.js', color: 'text-green-400' },
    { icon: 'logos:python', name: 'Python', color: 'text-yellow-400' },
    { icon: 'logos:aws', name: 'AWS', color: 'text-orange-400' },
    { icon: 'logos:docker-icon', name: 'Docker', color: 'text-blue-500' },
    { icon: 'logos:kubernetes', name: 'Kubernetes', color: 'text-blue-300' }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: 'carbon:checkmark-outline' },
    { number: '150+', label: 'Expert Developers', icon: 'carbon:user-multiple' },
    { number: '98%', label: 'Client Satisfaction', icon: 'carbon:star-filled' },
    { number: '24/7', label: 'Support Available', icon: 'carbon:time' }
  ];

  return (
    <div className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-screen overflow-hidden bg-gradient-to-br from-black via-primary-900 to-primary-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Dynamic gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-primary-500/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-accent-500/15 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '15%',
            bottom: '25%'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            left: '60%',
            top: '10%'
          }}
        ></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          
          {/* Left Content */}
          <div className={`space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Company Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <Icon icon="carbon:logo-github" className="w-4 h-4 text-primary-400 mr-2" />
              <span className="text-sm font-medium text-white/90 tracking-wide">Q HUB INFORMATION</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="block text-white/90">Q Information</span>
              <span className="block bg-gradient-to-r from-accent-400 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
                 Hub Software Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Scalable software solutions that drive growth and efficiency. From web apps to enterprise systems.
            </p>

            {/* Technology Showcase */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-2 px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <Icon icon={tech.icon} className={`w-5 h-5 ${tech.color}`} />
                  <span className="text-sm font-medium text-white/80">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-1">
                    <Icon icon={stat.icon} className="w-4 h-4 text-primary-400 mr-1" />
                    <div className="text-lg sm:text-xl font-bold text-white">{stat.number}</div>
                  </div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button 
                onClick={() => navigate('/contact-us')}
                className="group relative px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-bold rounded-lg hover:from-primary-600 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 shadow-2xl text-sm"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:rocket" className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button 
                onClick={() => navigate('/portfolio')}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
              >
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:view" className="w-4 h-4 mr-2" />
                  View Our Work
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Main Visual Container */}
            <div className="relative">
              
              {/* Professional Software Development Illustration */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8">
                
                {/* Code Editor Mockup */}
                <div className="bg-gray-900/90 rounded-lg border border-white/10 overflow-hidden mb-4">
                  <div className="flex items-center px-3 py-1.5 bg-gray-800/50 border-b border-white/10">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-3 text-xs text-white/60">Q-HUB-Project.jsx</div>
                  </div>
                  <div className="p-3 space-y-1 text-xs font-mono">
                    <div className="text-purple-400">import <span className="text-white">React</span> from <span className="text-green-400">'react'</span>;</div>
                    <div className="text-purple-400">import <span className="text-white">{  }</span> from <span className="text-green-400">'./innovation'</span>;</div>
                    <div className="text-blue-400 mt-2">const <span className="text-white">QHubSolution</span> = () =&gt; &#123;</div>
                    <div className="text-white ml-3">return <span className="text-yellow-400">&lt;Innovation /&gt;</span>;</div>
                    <div className="text-blue-400">&#125;;</div>
                  </div>
                </div>

                {/* Dashboard Mockup */}
                <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg border border-white/10 p-3 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold text-xs">Project Dashboard</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Live</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-white/10 rounded p-1.5 text-center">
                      <div className="text-sm font-bold text-primary-400">98%</div>
                      <div className="text-xs text-white/60">Uptime</div>
                    </div>
                    <div className="bg-white/10 rounded p-1.5 text-center">
                      <div className="text-sm font-bold text-accent-400">2.1s</div>
                      <div className="text-xs text-white/60">Load</div>
                    </div>
                    <div className="bg-white/10 rounded p-1.5 text-center">
                      <div className="text-sm font-bold text-white">1M+</div>
                      <div className="text-xs text-white/60">Users</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/70">Performance</span>
                      <span className="text-xs text-primary-400">Excellent</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-1.5 rounded-full w-11/12"></div>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="grid grid-cols-3 gap-2">
                  {['Frontend', 'Backend', 'Cloud'].map((category, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-2 text-center border border-white/10">
                      <div className="text-xs font-semibold text-white mb-1">{category}</div>
                      <div className="flex justify-center mb-1">
                        <Icon 
                          icon={['carbon:application-web', 'carbon:server', 'carbon:cloud'][index]} 
                          className="w-4 h-4 text-primary-400" 
                        />
                      </div>
                      <div className="text-xs text-white/60">Ready</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center animate-bounce">
                <Icon icon="carbon:rocket" className="w-5 h-5 text-white" />
              </div>
              
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center animate-pulse">
                <Icon icon="carbon:checkmark" className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <button 
        onClick={() => navigate('/contact-us')}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-110 group"
      >
        <Icon icon="carbon:chat" className="w-6 h-6 text-white mx-auto group-hover:scale-110 transition-transform" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs mb-2 hidden sm:block">Scroll to explore</span>
          <Icon icon="carbon:chevron-down" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default FuturisticHero; 