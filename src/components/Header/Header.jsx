import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { companyInfo, contactMethods } from '../../constant/data';
import qhubLogo from '../../assets/images/logo/QHUBLOGO.jpg';

function Header() {
  const { user } = useSelector((state) => state.auth);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', icon: 'mdi:home' },
    { name: 'Services', path: '/#services', icon: 'mdi:cog' },
    { name: 'Portfolio', path: '/portfolio', icon: 'mdi:briefcase' },
    { name: 'Case Studies', path: '/case-studies', icon: 'mdi:view-grid' },
    { name: 'Blog', path: '/blogs', icon: 'mdi:post' },
    { name: 'Contact', path: '/contact-us', icon: 'mdi:phone' }
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
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 hidden md:block border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 hover:text-accent transition-colors">
                <Icon icon="mdi:phone" className="w-4 h-4" />
                <span>{contactMethods[0]?.value || '+1 (555) 123-4567'}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-accent transition-colors">
                <Icon icon="mdi:email" className="w-4 h-4" />
                <span>{contactMethods[1]?.value || 'info@qhubinfo.com'}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon icon="mdi:linkedin" className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon icon="mdi:twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon icon="mdi:github" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={qhubLogo}
                alt={companyInfo.name}
                className="h-10 w-10 object-cover rounded"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white">
                  {companyInfo.name}
                </h1>
                <p className="text-xs text-gray-400">
                  Software Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <Link to="/dashboard">
                  <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all">
                    <Icon icon="mdi:view-dashboard" className="w-4 h-4" />
                    <span>Dashboard</span>
                  </button>
                </Link>
              ) : (
                <Link to="/contact-us">
                  <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all">
                    <span>Get Quote</span>
                    <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 bg-black/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 z-40 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        <nav className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <Icon icon={item.icon} className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            
            <div className="mt-4 pt-4 border-t border-white/10">
              {user ? (
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-primary text-white"
                >
                  <Icon icon="mdi:view-dashboard" className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link
                  to="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white"
                >
                  <span>Get Free Quote</span>
                  <Icon icon="mdi:arrow-right" className="w-5 h-5" />
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