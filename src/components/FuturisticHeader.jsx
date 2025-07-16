import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';

const FuturisticHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: 'carbon:home' },
    { name: 'About', href: '/about', icon: 'carbon:information' },
    { name: 'Services', href: '/services', icon: 'carbon:tools' },
    { name: 'Portfolio', href: '/portfolio', icon: 'carbon:portfolio' },
    { name: 'Case Studies', href: '/case-studies', icon: 'carbon:chart-line-smooth' },
    { name: 'Blog', href: '/blogs', icon: 'carbon:blog' },
    { name: 'Contact', href: '/contact-us', icon: 'carbon:email' },
  ];

  const isActivePath = (href) => {
    // Handle home page specially
    if (href === '/') {
      return location.pathname === '/';
    }
    
    // Handle exact matches
    if (location.pathname === href) {
      return true;
    }
    
    // Handle sub-routes (like /case-studies/1, /blogs/post-1, etc.)
    const pathWithoutTrailingSlash = href.endsWith('/') ? href.slice(0, -1) : href;
    const currentPath = location.pathname;
    
    return currentPath.startsWith(pathWithoutTrailingSlash + '/') || 
           (currentPath.length > pathWithoutTrailingSlash.length && 
            currentPath.startsWith(pathWithoutTrailingSlash));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
              <Icon icon="carbon:code" className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">
                Q HUB
              </span>
              <span className="text-xl font-bold text-primary-300 ml-1">
                INFORMATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.href)
                    ? 'bg-primary-500/30 text-primary-200 border border-primary-500/50 shadow-lg shadow-primary-500/20'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon icon={item.icon} className="w-4 h-4" />
                <span>{item.name}</span>
                {isActivePath(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-primary-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <Icon icon="carbon:sun" className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link
              to="/contact-us"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/20"
            >
              <Icon icon="carbon:chat" className="w-4 h-4" />
              <span>Let's Talk</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Icon 
                icon={isMenuOpen ? "carbon:close" : "carbon:menu"} 
                className="w-6 h-6" 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div 
              className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10"
              style={{
                background: 'linear-gradient(145deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 100%)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActivePath(item.href)
                      ? 'bg-primary-500/30 text-primary-200 border border-primary-500/50 shadow-lg shadow-primary-500/20'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon icon={item.icon} className="w-5 h-5" />
                  <span>{item.name}</span>
                  {isActivePath(item.href) && (
                    <div className="ml-auto w-2 h-2 bg-primary-400 rounded-full"></div>
                  )}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                to="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 mt-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                <Icon icon="carbon:chat" className="w-5 h-5" />
                <span>Let's Talk</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default FuturisticHeader; 