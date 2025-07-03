import { Link } from 'react-router-dom';

const FuturisticFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'SaaS Development', href: '/services' },
      { name: 'Mobile Apps', href: '/services' },
      { name: 'AI Solutions', href: '/services' },
      { name: 'Blockchain', href: '/services' }
    ],
    Company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact-us' }
    ],
    Resources: [
      { name: 'Blog', href: '/blogs' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: '⚡', href: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com' },
    { name: 'Discord', icon: '💬', href: 'https://discord.com' }
  ];

  return (
    <footer 
      className="relative py-20 border-t"
      style={{
        backgroundColor: '#000000',
        borderColor: 'rgba(255,255,255,0.1)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                  borderColor: 'rgba(255,255,255,0.2)'
                }}
              >
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.4rem' }}>
                  S
                </span>
              </div>
              <span 
                className="font-bold text-2xl"
                style={{ color: '#ffffff' }}
              >
                Steganox
              </span>
            </Link>
            
            <p 
              className="mb-6 max-w-sm"
              style={{
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.6'
              }}
            >
              Building tomorrow's software with cutting-edge technology and innovative solutions.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderColor: 'rgba(255,255,255,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 
                className="font-semibold mb-6"
                style={{
                  color: '#ffffff',
                  fontSize: '1.1rem'
                }}
              >
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="transition-colors duration-300 hover:text-purple-400"
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#a855f7';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255,255,255,0.6)';
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div 
          className="py-8 mb-8 border-t border-b"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 
              className="font-bold mb-4"
              style={{
                fontSize: '1.5rem',
                color: '#ffffff'
              }}
            >
              Stay Updated with Latest Tech Trends
            </h3>
            <p 
              className="mb-6"
              style={{
                color: 'rgba(255,255,255,0.6)'
              }}
            >
              Get insights, tips, and updates on modern software development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  color: '#ffffff'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(168,85,247,0.5)';
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                }}
              />
              <button 
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                  color: '#ffffff',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 0 20px rgba(168,85,247,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p 
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.9rem'
            }}
          >
            © {currentYear} Steganox. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a 
              href="/privacy" 
              className="transition-colors duration-300 hover:text-purple-400"
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#a855f7';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255,255,255,0.5)';
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="transition-colors duration-300 hover:text-purple-400"
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#a855f7';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255,255,255,0.5)';
              }}
            >
              Terms of Service
            </a>
            <a 
              href="/cookies" 
              className="transition-colors duration-300 hover:text-purple-400"
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#a855f7';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255,255,255,0.5)';
              }}
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Decorative element */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)',
            opacity: 0.3
          }}
        />
      </div>
    </footer>
  );
};

export default FuturisticFooter; 