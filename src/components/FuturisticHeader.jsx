import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import gsap from 'gsap';

const FuturisticHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const overlayRef = useRef(null);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/', icon: 'mdi:home' },
    { name: 'Services', path: '/services', icon: 'mdi:cog' },
    { name: 'Portfolio', path: '/portfolio', icon: 'mdi:folder-multiple' },
    { name: 'Case Studies', path: '/case-studies', icon: 'mdi:file-document' },
    { name: 'Contact', path: '/contact-us', icon: 'mdi:email' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header background animation on scroll
      gsap.to(headerRef.current, {
        backgroundColor: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.3)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
        borderBottomColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
        duration: 0.3,
        ease: 'power2.out'
      });

      // Menu open animation
      if (isOpen) {
        // Show overlay first
        gsap.set(overlayRef.current, { display: 'block' });
        gsap.fromTo(overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );

        // Show menu
        gsap.set(menuRef.current, { display: 'flex' });
        gsap.fromTo(menuRef.current,
          { 
            opacity: 0,
            y: -20,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power3.out',
            delay: 0.1
          }
        );

        // Animate nav items
        gsap.fromTo(navRef.current.children,
          {
            opacity: 0,
            y: 20,
            rotationX: -90
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.3
          }
        );
      } else {
        // Hide menu first
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -20,
          scale: 0.95,
          duration: 0.3,
          ease: 'power3.in',
          onComplete: () => {
            gsap.set(menuRef.current, { display: 'none' });
          }
        });

        // Hide overlay
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
          delay: 0.1,
          onComplete: () => {
            gsap.set(overlayRef.current, { display: 'none' });
          }
        });
      }
    }, headerRef);

    return () => ctx.revert();
  }, [isOpen, scrolled]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Blur Background Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden"
        style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(20px)'
        }}
        onClick={() => setIsOpen(false)}
      />

      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)' }}
                >
                  <Icon icon="mdi:code-braces" className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                  style={{ background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)' }}
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  Steganox
                </h1>
                <p className="text-xs text-gray-400 hidden sm:block">Digital Innovation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group relative ${
                    location.pathname === item.path
                      ? 'text-purple-400 bg-purple-500/10 border border-purple-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon icon={item.icon} className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                  
                  {/* Hover effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(59,130,246,0.1) 100%)',
                      filter: 'blur(8px)'
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link to="/contact-us">
                <button 
                  className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    boxShadow: '0 4px 20px rgba(168,85,247,0.3)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(168,85,247,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,85,247,0.3)'}
                >
                  <span className="text-white group-hover:text-white">Get Started</span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 z-60"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="flex flex-col space-y-1">
                <span 
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span 
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="lg:hidden absolute top-full left-0 right-0 hidden z-50"
          style={{
            backgroundColor: 'rgba(0,0,0,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8)'
          }}
        >
          <div className="container mx-auto px-4 py-6">
            <nav ref={navRef} className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'text-purple-400 bg-purple-500/10 border border-purple-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div 
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-purple-500/20'
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}
                  >
                    <Icon icon={item.icon} className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">{item.name}</span>
                  
                  {/* Arrow indicator */}
                  <Icon 
                    icon="mdi:chevron-right" 
                    className="w-5 h-5 ml-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link to="/contact-us" className="block">
                  <button 
                    className="w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                      boxShadow: '0 4px 20px rgba(168,85,247,0.3)'
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(168,85,247,0.5)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,85,247,0.3)'}
                  >
                    <span className="text-white group-hover:text-white flex items-center justify-center space-x-2">
                      <Icon icon="mdi:rocket-launch" className="w-5 h-5" />
                      <span>Start Your Project</span>
                    </span>
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default FuturisticHeader; 