import { Icon } from '@iconify/react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const TestimonialCard = ({ testimonial }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;

      gsap.to(card, {
        rotationY: x,
        rotationX: -y,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // Only add 3D effects on larger screens
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    if (mediaQuery.matches) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative bg-gradient-to-br from-void-900/80 to-void-800/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-void-700/50 hover:border-neon-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-500/20 group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Professional Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-500/5 to-cyber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl lg:rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-400/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glass morphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/3 to-transparent rounded-2xl lg:rounded-3xl" />

      {/* Quote icon */}
      <Icon 
        icon="ri:double-quotes-l" 
        className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-neon-500/20 group-hover:text-neon-500/30 transition-colors duration-500"
      />

      {/* Professional Header with Client Info */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6 relative z-10">
        <div className="relative flex-shrink-0 self-center sm:self-start">
          <img
            ref={imageRef}
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl object-cover border-2 border-neon-500/50 group-hover:border-neon-400/70 transition-colors duration-300 shadow-lg"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-500/15 to-cyber-500/15 blur-lg group-hover:blur-xl transition-all duration-500" />
          
          {/* Professional status indicator */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-neon-400 to-neon-600 rounded-full border-2 border-void-900 shadow-lg">
            <Icon icon="carbon:checkmark-filled" className="w-full h-full text-white p-1" />
          </div>
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <h4 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-neon-300 transition-colors duration-300">{testimonial.name}</h4>
          <p className="text-neon-400 text-sm sm:text-base font-semibold mb-1">{testimonial.position}</p>
          <p className="text-gray-500 text-xs sm:text-sm">{testimonial.company}</p>
          
          {/* Professional company badge */}
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-cyber-500/20 rounded-full border border-cyber-500/30">
            <Icon icon="carbon:building" className="w-3 h-3 text-cyber-400" />
            <span className="text-xs text-cyber-300 font-medium tracking-wide">Verified Client</span>
          </div>
        </div>
      </div>

      {/* Professional Testimonial Content */}
      <div className="relative z-10 mb-4 sm:mb-6">
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg italic font-medium">
          "{testimonial.content}"
        </p>
      </div>

      {/* Professional Footer with Project & Rating */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyber-500/30 to-cyber-600/30 rounded-xl flex items-center justify-center">
            <Icon icon="carbon:application" className="w-4 h-4 text-cyber-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm text-gray-400 font-semibold">Project:</span>
            <span className="text-xs sm:text-sm text-gray-300 font-medium">{testimonial.project}</span>
          </div>
        </div>
        
        {/* Professional Rating Display */}
        <div className="flex flex-col items-start sm:items-end">
          <div className="flex gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                icon="carbon:star-filled"
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                  i < testimonial.rating 
                    ? 'text-plasma-400 group-hover:text-plasma-300' 
                    : 'text-void-700 group-hover:text-void-600'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">{testimonial.rating}/5 Rating</span>
        </div>
      </div>

      {/* Professional corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-neon-500/8 to-transparent rounded-tl-2xl lg:rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-cyber-500/8 to-transparent rounded-br-2xl lg:rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Professional 3D shadow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-void-900 to-void-800 rounded-2xl lg:rounded-3xl -z-10 transform translate-y-2 opacity-40 group-hover:translate-y-3 group-hover:opacity-60 transition-all duration-500 hidden md:block" />
    </div>
  );
};

export default TestimonialCard; 