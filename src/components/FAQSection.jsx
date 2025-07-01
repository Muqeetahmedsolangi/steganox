import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faqs, faqCategories } from '../constant/data';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState([]);
  const faqRefs = useRef([]);
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category.toLowerCase() === activeCategory.toLowerCase());

  useEffect(() => {
    // Animate section entrance
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Animate category pills
    categoryRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, scale: 0.8, rotateX: -90 },
          {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }
    });

    // Animate FAQ items
    faqRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { 
            opacity: 0, 
            x: index % 2 === 0 ? -50 : 50,
            rotateY: index % 2 === 0 ? -15 : 15,
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    });
  }, [activeCategory]);

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-void-950 via-void-900/50 to-void-950">
      {/* Professional Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-neon-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '16s' }} />
        <div className="absolute bottom-1/4 right-0 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-cyber-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '20s', animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-tech-grid opacity-5" />
        
        {/* Professional floating elements */}
        <div className="absolute top-20 right-20 w-4 h-4 border border-neon-500/20 rotate-45 animate-spin hidden sm:block" style={{ animationDuration: '25s' }} />
        <div className="absolute bottom-24 left-16 w-3 h-3 bg-cyber-400/30 rounded-full animate-ping hidden sm:block" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Professional Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-neon-500" />
            <Icon icon="carbon:help" className="w-6 h-6 sm:w-8 sm:h-8 text-neon-500" />
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-neon-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-neon-400 via-neon-500 to-cyber-400 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="text-white">Questions</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, and technology
          </p>
        </div>

        {/* Professional Responsive Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {faqCategories.map((category, index) => (
            <button
              key={category.id}
              ref={(el) => (categoryRefs.current[index] = el)}
              onClick={() => setActiveCategory(category.id)}
              className={`
                group relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-500
                transform hover:scale-105 hover:-translate-y-1 text-xs sm:text-sm md:text-base
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-neon-500 to-neon-600 text-white shadow-xl shadow-neon-500/50'
                  : 'bg-gradient-to-br from-void-800/60 to-void-700/60 text-gray-400 hover:text-white border border-void-700/50 hover:border-neon-500/50 backdrop-blur-sm'
                }
              `}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                <Icon icon={category.icon} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </span>
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-neon-500 to-neon-600 rounded-full blur-xl opacity-50" />
              )}
            </button>
          ))}
        </div>

        {/* Professional Responsive FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={faq.id}
              ref={(el) => (faqRefs.current[index] = el)}
              className="group relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className={`
                  relative backdrop-blur-xl rounded-2xl lg:rounded-3xl border transition-all duration-500
                  hover:shadow-2xl
                  ${openItems.includes(faq.id)
                    ? 'bg-gradient-to-br from-void-800/90 to-void-700/90 border-neon-500/60 shadow-xl shadow-neon-500/30'
                    : 'bg-gradient-to-br from-void-900/80 to-void-800/80 border-void-700/50 hover:border-neon-500/30 hover:shadow-neon-500/10'
                  }
                `}
              >
                {/* Professional background effects */}
                <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl lg:rounded-3xl transition-opacity duration-700 ${
                  openItems.includes(faq.id) 
                    ? 'from-neon-500/8 to-cyber-500/8 opacity-100' 
                    : 'from-neon-500/3 to-cyber-500/3 opacity-0 group-hover:opacity-100'
                }`} />
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-neon-400/4 to-transparent transition-opacity duration-500 ${
                  openItems.includes(faq.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
                
                {/* Glass morphism */}
                <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl lg:rounded-3xl transition-opacity duration-500 ${
                  openItems.includes(faq.id) 
                    ? 'from-white/8 via-white/4 to-transparent opacity-100' 
                    : 'from-white/5 via-white/2 to-transparent opacity-100'
                }`} />

                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-start gap-3 sm:gap-4 text-left relative z-10"
                >
                  {/* Professional Icon */}
                  <div className={`
                    flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center
                    transition-all duration-500 transform shadow-lg
                    ${openItems.includes(faq.id)
                      ? 'bg-gradient-to-br from-neon-400 to-neon-500 rotate-12 scale-110 shadow-neon-500/50'
                      : 'bg-gradient-to-br from-void-800/80 to-void-700/80 group-hover:rotate-6 border border-void-600/50 group-hover:border-neon-500/30'
                    }
                  `}>
                    <Icon 
                      icon={faq.icon} 
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                        openItems.includes(faq.id) ? 'text-white' : 'text-neon-400 group-hover:text-neon-300'
                      }`}
                    />
                  </div>

                  {/* Professional Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`
                      text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300 leading-tight
                      ${openItems.includes(faq.id) ? 'text-white' : 'text-white group-hover:text-neon-300'}
                    `}>
                      {faq.question}
                    </h3>
                    
                    {/* Professional Category Badge */}
                    <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-void-800/60 border border-void-700/50 text-xs sm:text-sm text-gray-400 font-medium backdrop-blur-sm">
                      <Icon icon="carbon:tag" className="w-3 h-3" />
                      <span className="hidden sm:inline">{faq.category}</span>
                      <span className="sm:hidden">{faq.category.slice(0, 3)}</span>
                    </span>
                  </div>

                  {/* Professional Toggle Icon */}
                  <div className={`
                    flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg lg:rounded-xl border
                    flex items-center justify-center transition-all duration-500 shadow-lg
                    ${openItems.includes(faq.id) 
                      ? 'rotate-180 border-neon-500/50 bg-gradient-to-br from-neon-500/30 to-neon-600/30 shadow-neon-500/30' 
                      : 'bg-gradient-to-br from-void-800/80 to-void-700/80 border-void-600/50 group-hover:border-neon-500/30'}
                  `}>
                    <Icon icon="carbon:chevron-down" className="w-4 h-4 sm:w-5 sm:h-5 text-neon-400" />
                  </div>
                </button>

                {/* Professional Answer Section */}
                <div className={`
                  overflow-hidden transition-all duration-700 ease-in-out
                  ${openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 relative z-10 bg-gradient-to-b from-void-800/20 to-transparent border-t border-neon-500/10">
                                          <div className="pl-13 sm:pl-16 pr-8 sm:pr-12">
                        <div className="border-l-2 border-neon-500/50 pl-4 sm:pl-6">
                                                  <p className="text-sm sm:text-base text-gray-100 leading-relaxed mb-4">
                            {faq.answer}
                          </p>
                                                  <button className="group/btn flex items-center gap-2 text-xs sm:text-sm text-neon-300 hover:text-neon-200 transition-colors duration-300 font-medium">
                            <span>Was this helpful?</span>
                            <Icon icon="carbon:thumbs-up" className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                          </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-500/8 to-transparent rounded-tr-2xl lg:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-cyber-500/8 to-transparent rounded-bl-2xl lg:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Professional Responsive CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 sm:gap-6 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-void-900/60 to-void-800/60 backdrop-blur-xl border border-void-700/50 hover:border-neon-500/30 transition-all duration-500 max-w-2xl mx-auto">
            <div className="relative">
              <Icon icon="carbon:help-filled" className="w-10 h-10 sm:w-12 sm:h-12 text-neon-500" />
              <div className="absolute inset-0 bg-neon-500/20 rounded-full blur-xl" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Still have questions?</h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button className="group px-5 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-neon-500 to-neon-600 text-white font-bold hover:shadow-xl hover:shadow-neon-500/50 transition-all duration-300 transform hover:scale-105 border border-neon-400/50">
                <span className="flex items-center justify-center gap-2">
                  <Icon icon="carbon:chat" className="w-4 h-4 sm:w-5 sm:h-5" />
                  Contact Support
                </span>
              </button>
              <button className="group px-5 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-neon-500/50 text-neon-400 font-bold hover:bg-neon-500/10 hover:border-neon-400/70 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-2">
                  <Icon icon="carbon:calendar" className="w-4 h-4 sm:w-5 sm:h-5" />
                  Schedule a Call
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 