import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { companyInfo } from '../../constant/data';
import withoutBGLogo from '../../assets/images/logo/withoutBGLOGO.png';

function Header() {
  const { user } = useSelector((state) => state.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: 'carbon:home' },
    { name: 'Services', path: '/#services', icon: 'carbon:tools' },
    { name: 'Portfolio', path: '/portfolio', icon: 'carbon:portfolio' },
    { name: 'Case Studies', path: '/case-studies', icon: 'carbon:chart-line-smooth' },
    { name: 'Blog', path: '/blogs', icon: 'carbon:blog' },
    { name: 'Contact', path: '/contact-us', icon: 'carbon:email' }
  ];

  const handleNavClick = (item) => {
    if (item.name === 'Services') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 400);
      } else {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.path);
    }
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      {/* Main Header - Sticky */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-2xl' 
            : 'bg-black/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            
            {/* Logo - PNG Only */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <img
                  src={withoutBGLogo}
                  alt="Q Information Hub"
                  className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 filter drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isActivePath(item.path)
                      ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30 shadow-lg shadow-primary-500/20'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon icon={item.icon} className="w-4 h-4" />
                  <span>{item.name}</span>
                  {isActivePath(item.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-primary-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Let's Talk Business CTA */}
              <Link
                to="/contact-us"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/30"
              >
                <Icon icon="carbon:chat" className="w-5 h-5" />
                <span>Let's Talk Business</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center gap-1">
                  <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 bg-black/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          style={{ top: isScrolled ? '64px' : '64px' }}
        >
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon icon={item.icon} className="w-5 h-5" />
                  <span>{item.name}</span>
                  {isActivePath(item.path) && (
                    <div className="ml-auto w-2 h-2 bg-primary-400 rounded-full"></div>
                  )}
                </button>
              ))}
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <Link
                  to="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
                >
                  <Icon icon="carbon:chat" className="w-5 h-5" />
                  <span>Let's Talk Business</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header; 