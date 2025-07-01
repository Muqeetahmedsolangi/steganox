import { Icon } from '@iconify/react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(glow, {
        x: x,
        y: y,
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.3,
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl border border-void-700/50 hover:border-neon-500/50 p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-neon-500/20"
    >
      {/* Professional glow effect */}
      <div
        ref={glowRef}
        className="absolute w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(110, 231, 183, 0.25) 0%, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-500/8 to-cyber-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl lg:rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Professional glass morphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-white/2 to-transparent rounded-2xl lg:rounded-3xl" />

      {/* Content */}
      <div className="relative z-10">
        {/* Professional Icon Container */}
        <div className="relative mb-4 sm:mb-6">
          <div className={`inline-flex p-3 sm:p-4 lg:p-5 rounded-xl lg:rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            <Icon icon={service.icon} className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
          </div>
          <div className="absolute inset-0 bg-neon-500/10 rounded-xl lg:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-neon-400 transition-all duration-500 leading-tight">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* Professional Features List */}
        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-3 group/feature">
              <div className="flex-shrink-0 mt-1">
                <Icon icon="carbon:checkmark-filled" className="w-4 h-4 sm:w-5 sm:h-5 text-neon-500 group-hover/feature:text-cyber-400 group-hover/feature:scale-110 transition-all duration-300" />
              </div>
              <span className="text-xs sm:text-sm text-gray-300 group-hover/feature:text-gray-200 transition-colors duration-300 leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* Professional CTA Button */}
        <button className="group/btn relative w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-neon-500/20 to-neon-600/20 text-white font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-neon-500/40 hover:border-neon-400/60 overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-500/30 to-neon-600/30 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
            <span>Learn More</span>
            <Icon icon="carbon:arrow-right" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
        </button>

              {/* Professional corner accents */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-500/10 to-transparent rounded-tr-2xl lg:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-cyber-500/8 to-transparent rounded-bl-2xl lg:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </div>
  );
};

export default ServiceCard; 