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
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 overflow-hidden">
      
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        
        {/* Fluid Background Animation */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Gradient Definitions */}
              <radialGradient id="fluidGradient1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="#6366F1" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.1"/>
              </radialGradient>
              
              <radialGradient id="fluidGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.05"/>
              </radialGradient>

              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.1"/>
              </linearGradient>

              {/* Filter Effects */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Animated Fluid Blobs */}
            <g className="animate-float-slow">
              <ellipse 
                cx="20%" 
                cy="30%" 
                rx="200" 
                ry="150" 
                fill="url(#fluidGradient1)" 
                filter="url(#glow)"
                className="animate-morphing"
              />
            </g>
            
            <g className="animate-float-reverse">
              <ellipse 
                cx="80%" 
                cy="70%" 
                rx="180" 
                ry="220" 
                fill="url(#fluidGradient2)" 
                filter="url(#glow)"
                className="animate-morphing-delayed"
              />
            </g>

            <g className="animate-float-gentle">
              <ellipse 
                cx="60%" 
                cy="20%" 
                rx="160" 
                ry="180" 
                fill="url(#fluidGradient1)" 
                opacity="0.6"
                filter="url(#glow)"
                className="animate-pulse-slow"
              />
            </g>

            {/* Flowing Wave Paths */}
            <path 
              d="M-50,300 Q300,200 650,300 T1350,300 L1350,800 L-50,800 Z" 
              fill="url(#waveGradient)" 
              opacity="0.3"
              className="animate-wave"
            />
            
            <path 
              d="M-50,400 Q400,350 750,400 T1450,400 L1450,800 L-50,800 Z" 
              fill="url(#waveGradient)" 
              opacity="0.2"
              className="animate-wave-reverse"
            />
          </svg>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0">
          {/* Large Floating Orbs */}
          <div 
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/10 blur-xl animate-float-up"
            style={{
              left: `${20 + mousePosition.x * 0.05}%`,
              top: `${10 + mousePosition.y * 0.03}%`,
              animationDuration: '6s'
            }}
          />
          
          <div 
            className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/15 to-blue-500/10 blur-lg animate-float-down"
            style={{
              right: `${15 + mousePosition.x * 0.03}%`,
              top: `${60 + mousePosition.y * 0.02}%`,
              animationDuration: '8s'
            }}
          />

          <div 
            className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-500/10 blur-md animate-float-diagonal"
            style={{
              left: `${70 + mousePosition.x * 0.04}%`,
              bottom: `${20 + mousePosition.y * 0.02}%`,
              animationDuration: '7s'
            }}
          />

          {/* Geometric Shapes */}
          <div 
            className="absolute w-16 h-16 rotate-45 bg-gradient-to-br from-blue-300/10 to-indigo-400/5 animate-spin-slow"
            style={{
              left: `${40 + mousePosition.x * 0.02}%`,
              top: `${80 + mousePosition.y * 0.01}%`
            }}
          />

          <div 
            className="absolute w-12 h-12 rounded-full border-2 border-blue-400/20 animate-pulse-ring"
            style={{
              right: `${30 + mousePosition.x * 0.03}%`,
              bottom: `${40 + mousePosition.y * 0.02}%`
            }}
          />

          {/* Flowing Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <path 
              d="M100,200 Q300,100 500,200 T900,200" 
              stroke="url(#waveGradient)" 
              strokeWidth="2" 
              fill="none"
              className="animate-draw-line"
            />
            <path 
              d="M200,400 Q500,300 800,400 T1200,400" 
              stroke="url(#waveGradient)" 
              strokeWidth="1" 
              fill="none"
              className="animate-draw-line-delayed"
            />
          </svg>
        </div>

        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300/60 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-radial from-blue-400/5 via-indigo-500/3 to-transparent transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 12}%`,
            top: `${mousePosition.y - 12}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Ambient Light Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-ambient" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-ambient-delayed" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Company Badge */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-blue-950/40 backdrop-blur-xl border border-blue-400/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-semibold text-blue-100 tracking-wider">Q INFORMATION HUB</span>
              <div className="ml-3 text-blue-300">
                <Icon icon="carbon:star-filled" className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">Crafting Digital</span>
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                Excellence
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Transforming ideas into powerful software solutions that drive innovation and growth
            </p>
          </div>

          {/* Stats Row */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center group cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-sm text-blue-200/70">Projects</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-1 group-hover:scale-110 transition-transform">8+</div>
                <div className="text-sm text-blue-200/70">Years</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-1 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-blue-200/70">Success</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-indigo-300 mb-1 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm text-blue-200/70">Support</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => navigate('/contact-us')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/40"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:rocket" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
              </button>
              
              <button 
                onClick={() => navigate('/portfolio')}
                className="group px-8 py-4 bg-white/5 backdrop-blur-xl text-blue-100 font-semibold rounded-xl border border-blue-400/30 hover:bg-blue-900/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:view" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Portfolio
                </span>
              </button>
            </div>
          </div>

          {/* Technology Icons */}
          <div className={`transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="group cursor-pointer">
                <Icon icon="logos:react" className="w-8 h-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="group cursor-pointer">
                <Icon icon="logos:nodejs-icon" className="w-8 h-8 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300" />
              </div>
              <div className="group cursor-pointer">
                <Icon icon="logos:python" className="w-8 h-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="group cursor-pointer">
                <Icon icon="logos:aws" className="w-8 h-8 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300" />
              </div>
              <div className="group cursor-pointer">
                <Icon icon="logos:docker-icon" className="w-8 h-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-blue-300/60">
          <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full mb-2 flex justify-center">
            <div className="w-1 h-3 bg-blue-400/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs">Scroll</span>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => navigate('/contact-us')}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group"
      >
        <Icon icon="carbon:chat" className="w-6 h-6 text-white mx-auto group-hover:rotate-12 transition-transform" />
      </button>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(10px, -15px) scale(1.05); }
          50% { transform: translate(-5px, -25px) scale(0.95); }
          75% { transform: translate(-15px, -10px) scale(1.02); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-10px, 15px) rotate(5deg); }
          50% { transform: translate(5px, 25px) rotate(-3deg); }
          75% { transform: translate(15px, 10px) rotate(2deg); }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -12px); }
        }

        @keyframes morphing {
          0%, 100% { rx: 200; ry: 150; }
          25% { rx: 180; ry: 180; }
          50% { rx: 220; ry: 130; }
          75% { rx: 160; ry: 170; }
        }

        @keyframes morphing-delayed {
          0%, 100% { rx: 180; ry: 220; }
          25% { rx: 200; ry: 200; }
          50% { rx: 160; ry: 240; }
          75% { rx: 190; ry: 180; }
        }

        @keyframes wave {
          0%, 100% { d: path("M-50,300 Q300,200 650,300 T1350,300 L1350,800 L-50,800 Z"); }
          50% { d: path("M-50,320 Q300,220 650,280 T1350,320 L1350,800 L-50,800 Z"); }
        }

        @keyframes wave-reverse {
          0%, 100% { d: path("M-50,400 Q400,350 750,400 T1450,400 L1450,800 L-50,800 Z"); }
          50% { d: path("M-50,380 Q400,330 750,420 T1450,380 L1450,800 L-50,800 Z"); }
        }

        @keyframes float-up {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }

        @keyframes float-down {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(20px) scale(0.9); }
        }

        @keyframes float-diagonal {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -20px) scale(1.05); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes pulse-ambient {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes pulse-ambient-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.08); }
        }

        @keyframes draw-line {
          0% { stroke-dasharray: 0, 1000; }
          100% { stroke-dasharray: 1000, 0; }
        }

        @keyframes draw-line-delayed {
          0% { stroke-dasharray: 0, 800; }
          100% { stroke-dasharray: 800, 0; }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 0.8; }
          75% { transform: translateY(-30px) rotate(270deg); opacity: 0.4; }
        }

        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }

        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 10s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
        .animate-morphing { animation: morphing 12s ease-in-out infinite; }
        .animate-morphing-delayed { animation: morphing-delayed 14s ease-in-out infinite; }
        .animate-wave { animation: wave 8s ease-in-out infinite; }
        .animate-wave-reverse { animation: wave-reverse 10s ease-in-out infinite; }
        .animate-float-up { animation: float-up 6s ease-in-out infinite; }
        .animate-float-down { animation: float-down 7s ease-in-out infinite; }
        .animate-float-diagonal { animation: float-diagonal 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-ambient { animation: pulse-ambient 6s ease-in-out infinite; }
        .animate-pulse-ambient-delayed { animation: pulse-ambient-delayed 8s ease-in-out infinite 2s; }
        .animate-draw-line { animation: draw-line 3s ease-in-out infinite; }
        .animate-draw-line-delayed { animation: draw-line-delayed 4s ease-in-out infinite 1s; }
        .animate-float-particle { animation: float-particle 8s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
      `}</style>
    </div>
  );
};

export default FuturisticHero; 