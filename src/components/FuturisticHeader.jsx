import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FuturisticHeader = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', href: '/', sectionId: 'home' },
    { id: 'services', label: 'Services', href: '/services', sectionId: 'services' },
    { id: 'case-studies', label: 'Case Studies', href: '/case-studies', sectionId: null },
    // { id: 'process', label: 'Process', href: '/process', sectionId: 'process' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio', sectionId: null },
    { id: 'contact', label: 'Contact', href: '/contact-us', sectionId: null }
  ];

  useEffect(() => {
    // Header background change on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Logo animation
    gsap.fromTo(logoRef.current,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      }
    );

    // Nav items stagger animation
    gsap.fromTo('.nav-item',
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.8
      }
    );

    // Set active section based on current route
    if (location.pathname === '/') {
      // On homepage, track scroll position for sections
      const sections = ['home', 'services', 'process'];
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) observer.observe(section);
      });

      return () => {
        sections.forEach(sectionId => {
          const section = document.getElementById(sectionId);
          if (section) observer.unobserve(section);
        });
      };
    } else {
      // On other pages, set active based on route
      const currentRoute = navItems.find(item => item.href === location.pathname);
      if (currentRoute) {
        setActiveSection(currentRoute.id);
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (item.href.startsWith('/#')) {
      // Internal section link on homepage
      if (location.pathname !== '/') {
        // Navigate to homepage first
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(item.href.substring(1));
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        // Already on homepage, just scroll
        const element = document.querySelector(item.href.substring(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else {
      // Regular page navigation
      navigate(item.href);
    }
  };

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent'
      }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div 
              ref={logoRef}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                  borderColor: 'rgba(255,255,255,0.2)'
                }}
              >
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  S
                </span>
              </div>
              <span 
                className="font-bold text-xl transition-colors duration-300 group-hover:text-purple-400"
                style={{ color: '#ffffff' }}
              >
                Steganox
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`nav-item relative px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id ? 'active' : ''
                }`}
                style={{
                  color: activeSection === item.id ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  backgroundColor: activeSection === item.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: activeSection === item.id ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.target.style.color = 'rgba(255,255,255,0.7)';
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: '#a855f7' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact-us">
              <button 
                className="group relative px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                  color: '#ffffff',
                  fontWeight: '600',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 0 30px rgba(168,85,247,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span className="relative z-10">Get Started</span>
                
                {/* Hover effect overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.2) 100%)',
                    mixBlendMode: 'overlay'
                  }}
                />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
            style={{
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 w-screen h-screen z-50 bg-black/80 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden transition-all duration-300">
          <button
            className="absolute top-6 right-6 p-2 rounded-lg hover:bg-white/10 text-white"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-[90vw] max-w-xs bg-gradient-to-br from-black/90 via-purple-900/80 to-blue-900/80 rounded-2xl border border-purple-700 shadow-2xl flex flex-col gap-8 items-center py-10 px-4 mt-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-lg font-semibold px-6 py-3 rounded-full transition-all duration-200 w-full text-center ${
                  activeSection === item.id ? 'bg-purple-700/80 text-white shadow-md' : 'text-gray-200 hover:bg-white/10 hover:text-white'
                }`}
                style={{
                  border: activeSection === item.id ? '1.5px solid #a855f7' : '1.5px solid transparent',
                  letterSpacing: '0.02em'
                }}
              >
                {item.label}
              </button>
            ))}
            <Link to="/contact-us" className="w-full flex justify-center">
              <button 
                className="mt-6 px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg w-full text-lg transition-all duration-200 hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default FuturisticHeader; 