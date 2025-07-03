import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { companyInfo, contactMethods } from '../../constant/data';
import mainLogo from '../../assets/images/logo/secondaryLogo.png';

function Header() {
  const { user } = useSelector((state) => state.auth);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const ctaRef = useRef(null);

  const navItems = [
    { name: 'Home', path: '/', icon: 'mdi:home' },
    { name: 'Services', path: '/services', icon: 'mdi:cog' },
    { name: 'Portfolio', path: '/portfolio', icon: 'mdi:briefcase' },
    { name: 'About', path: '/about-us', icon: 'mdi:information' },
    { name: 'Blog', path: '/blogs', icon: 'mdi:post' },
    { name: 'Contact', path: '/contact-us', icon: 'mdi:phone' }
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations
  useEffect(() => {
    // Header entrance animation
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { x: -50, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'back.out(1.7)' }
    );

    // Navigation items animation
    navItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.5 + index * 0.1, ease: 'power3.out' }
        );
      }
    });

    // CTA button animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Professional Top Bar - Enhanced Responsive */}
      <div className="bg-void-950 border-b border-void-700/30 text-white py-2 sm:py-3 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              <div className="flex items-center gap-2 text-gray-300 hover:text-neon-300 transition-colors duration-300">
                <Icon icon="mdi:phone" className="w-3 h-3 sm:w-4 sm:h-4 text-neon-500" />
                <span className="hidden sm:inline">{contactMethods[0]?.value || '+1 (555) 123-4567'}</span>
                <span className="sm:hidden">Call</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-cyber-300 transition-colors duration-300">
                <Icon icon="mdi:email" className="w-3 h-3 sm:w-4 sm:h-4 text-cyber-500" />
                <span className="hidden sm:inline">{contactMethods[1]?.value || 'info@mechnovate.com'}</span>
                <span className="sm:hidden">Email</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="hidden lg:inline">24/7 Support Available</span>
                <span className="lg:hidden">Support</span>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://linkedin.com/company/mechnovate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Icon icon="mdi:linkedin" className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://twitter.com/mechnovate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Icon icon="mdi:twitter" className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a
                  href="https://github.com/mechnovate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-quantum-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Icon icon="mdi:github" className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
              <div className="h-3 sm:h-4 w-px bg-void-700 hidden sm:block"></div>
              <div className="flex items-center gap-2 text-gray-300">
                <Icon icon="mdi:shield-check" className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                <span className="hidden lg:inline">ISO Certified</span>
                <span className="lg:hidden text-xs">ISO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Professional Main Header */}
      <header
        ref={headerRef}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-void-950/98 backdrop-blur-xl border-b border-void-700/50 shadow-2xl shadow-neon-500/10'
          : 'bg-void-950/90 backdrop-blur-lg border-b border-void-700/30'
          }`}
      >
        {/* Professional ambient effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-neon-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-0 right-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-cyber-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-tech-grid opacity-3 sm:opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            {/* Enhanced Professional Logo Section */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 group" ref={logoRef}>
              <div className="relative">
                {/* Professional glow effect background */}
                <div className="absolute -inset-1 sm:-inset-2 md:-inset-3 bg-gradient-to-r from-neon-500/15 to-cyber-500/15 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Enhanced logo container */}
                <img
                  src={mainLogo}
                  alt={companyInfo.name}
                  className="h-20 sm:h-20 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-110 filter drop-shadow-lg"
                />
                {/* Professional corner accent */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-neon-500/20 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Responsive company info */}
              <div className="hidden sm:block">
                <h1 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-orange-500 transition-all duration-500 leading-tight">
                  {companyInfo.name}
                </h1>

                <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium leading-tight">
                  <span className="hidden md:inline">{companyInfo.tagline}</span>
                  <span className="md:hidden">Engineering Excellence</span>
                </p>
              </div>
            </Link>

            {/* Enhanced Professional Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  ref={(el) => (navItemsRef.current[index] = el)}
                  className={`group relative px-3 xl:px-4 py-2 xl:py-3 rounded-xl transition-all duration-500 hover:bg-void-800/50 hover:shadow-lg hover:shadow-neon-500/10 ${location.pathname === item.path
                    ? 'text-neon-400 bg-gradient-to-br from-void-800/40 to-void-700/40 border border-neon-500/30 shadow-lg shadow-neon-500/20'
                    : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {/* Professional background effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-500/5 to-cyber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-center gap-2 relative z-10">
                    <Icon
                      icon={item.icon}
                      className={`w-4 h-4 transition-all duration-500 ${location.pathname === item.path
                        ? 'text-neon-500 scale-110'
                        : 'text-gray-500 group-hover:text-neon-400 group-hover:scale-110'
                        }`}
                    />
                    <span className="text-sm xl:text-base font-semibold">{item.name}</span>
                  </div>

                  {/* Enhanced active indicator */}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-full shadow-lg shadow-neon-500/50" />
                  )}

                  {/* Professional corner accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-neon-500/10 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              ))}
            </nav>

            {/* Enhanced Professional CTA Section */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4" ref={ctaRef}>
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-xs lg:text-sm font-medium">Online</span>
                </div>
                <div className="h-4 lg:h-6 w-px bg-void-700 hidden lg:block"></div>

                {user ? (
                  <Link to="/dashboard">
                    <button className="group flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-xl bg-gradient-to-r from-neon-500 to-cyber-500 text-white font-bold hover:from-neon-600 hover:to-cyber-600 transition-all duration-500 hover:shadow-xl hover:shadow-neon-500/30 hover:scale-105 border border-neon-400/50">
                      <Icon icon="mdi:view-dashboard" className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs lg:text-sm">Dashboard</span>
                    </button>
                  </Link>
                ) : (
                  <Link to="/contact-us">
                    <button className="group flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-xl bg-gradient-to-r from-neon-500/20 to-cyber-500/20 border border-neon-500/30 text-neon-400 hover:from-neon-500/30 hover:to-cyber-500/30 hover:border-neon-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-neon-500/20 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-500/10 to-cyber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon icon="mdi:phone" className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                      <span className="text-xs lg:text-sm font-bold relative z-10">
                        <span className="hidden lg:inline">Get Quote</span>
                        <span className="lg:hidden">Quote</span>
                      </span>
                      <Icon icon="mdi:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    </button>
                  </Link>
                )}
              </div>
            </div>

            {/* Clean Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-void-800/40 border border-void-700/30 hover:border-neon-500/50 transition-all duration-300 group"
            >
              <div className="relative z-10 flex flex-col justify-center items-center space-y-1">
                <span
                  className={`block h-0.5 w-5 sm:w-6 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-neon-400' : ''
                    }`}
                />
                <span
                  className={`block h-0.5 w-5 sm:w-6 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                  className={`block h-0.5 w-5 sm:w-6 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-neon-400' : ''
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Professional Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bg-void-950/98 backdrop-blur-xl border-b border-void-700/50 transition-all duration-700 z-40 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        style={{ top: '56px' }}
      >
        {/* Professional background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-tech-grid opacity-5" />
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cyber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }} />
        </div>

        <nav className="container mx-auto px-4 py-6 sm:py-8 relative z-10">
          <div className="flex flex-col gap-2 sm:gap-3">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl lg:rounded-2xl transition-all duration-500 hover:bg-void-800/50 hover:shadow-lg hover:shadow-neon-500/10 relative overflow-hidden ${location.pathname === item.path
                  ? 'text-neon-400 bg-gradient-to-br from-void-800/40 to-void-700/40 border border-neon-500/30 shadow-lg shadow-neon-500/20'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {/* Professional background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-500/5 to-cyber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl lg:rounded-2xl" />

                <Icon
                  icon={item.icon}
                  className={`w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-all duration-500 ${location.pathname === item.path
                    ? 'text-neon-500 scale-110'
                    : 'text-gray-500 group-hover:text-neon-400 group-hover:scale-110'
                    }`}
                />
                <span className="text-base sm:text-lg font-bold relative z-10">{item.name}</span>
                <Icon
                  icon="mdi:arrow-right"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 relative z-10"
                />

                {/* Professional corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-neon-500/10 to-transparent rounded-tr-xl lg:rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            ))}

            {/* Enhanced Mobile Contact Section */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-void-700/30">
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-void-800/40 to-void-700/40 border border-void-700/30 hover:border-neon-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-neon-500/10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-neon-500/20 to-neon-600/20 rounded-xl flex items-center justify-center">
                    <Icon icon="mdi:phone" className="w-5 h-5 sm:w-6 sm:h-6 text-neon-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base">Call Us</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{contactMethods[0]?.value || '+1 (555) 123-4567'}</p>
                  </div>
                </div>
                <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-void-800/40 to-void-700/40 border border-void-700/30 hover:border-cyber-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyber-500/10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyber-500/20 to-cyber-600/20 rounded-xl flex items-center justify-center">
                    <Icon icon="mdi:email" className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base">Email Us</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{contactMethods[1]?.value || 'info@mechnovate.com'}</p>
                  </div>
                </div>
              </div>

              {user ? (
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full mt-4 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-neon-500 to-cyber-500 text-white font-bold hover:from-neon-600 hover:to-cyber-600 transition-all duration-500 hover:shadow-xl hover:shadow-neon-500/30 border border-neon-400/50"
                >
                  <Icon icon="mdi:view-dashboard" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">Dashboard</span>
                </Link>
              ) : (
                <Link
                  to="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full mt-4 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-neon-500 to-cyber-500 text-white font-bold hover:from-neon-600 hover:to-cyber-600 transition-all duration-500 hover:shadow-xl hover:shadow-neon-500/30 border border-neon-400/50 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-400/20 to-cyber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon icon="mdi:rocket" className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                  <span className="text-sm sm:text-base relative z-10">Get Free Quote</span>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

