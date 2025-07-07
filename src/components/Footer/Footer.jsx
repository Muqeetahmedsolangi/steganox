import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  companyInfo, 
  services, 
  technologies, 
  contactMethods,
  officeLocations,
  aboutStats
} from '../../constant/data';
import mainLogo from '../../assets/images/logo/secondaryLogo.png';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);
  const socialLinksRef = useRef([]);
  const statsRef = useRef([]);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  useEffect(() => {
    // Animate footer on scroll
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          once: true,
        },
      }
    );

    // Animate social links
    socialLinksRef.current.forEach((link, index) => {
      if (link) {
        gsap.fromTo(
          link,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    });

    // Animate stats counting
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        const value = aboutStats[index]?.value || 0;
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: value,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              once: true
            },
            onUpdate: function() {
              const currentValue = Math.ceil(this.targets()[0].textContent);
              if (aboutStats[index]?.unit) {
                stat.textContent = currentValue + aboutStats[index].unit;
              } else {
                stat.textContent = currentValue.toLocaleString();
              }
            }
          }
        );
      }
    });
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setNewsletterStatus('subscribing');
    
    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus('success');
      setEmail('');
      setTimeout(() => setNewsletterStatus(''), 3000);
    }, 1500);
  };

  const socialLinks = [
    { icon: 'mdi:linkedin', href: 'https://linkedin.com/company/mechnovate', color: 'hover:text-neon-400', name: 'LinkedIn' },
    { icon: 'mdi:twitter', href: 'https://twitter.com/mechnovate', color: 'hover:text-cyber-400', name: 'Twitter' },
    { icon: 'mdi:github', href: 'https://github.com/mechnovate', color: 'hover:text-quantum-400', name: 'GitHub' },
    { icon: 'mdi:instagram', href: 'https://instagram.com/mechnovate', color: 'hover:text-plasma-400', name: 'Instagram' },
    { icon: 'mdi:youtube', href: 'https://youtube.com/mechnovate', color: 'hover:text-hologram-400', name: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about-us', icon: 'mdi:information' },
    { name: 'Services', path: '/services', icon: 'mdi:cog' },
    { name: 'Portfolio', path: '/portfolio', icon: 'mdi:briefcase' },
    { name: 'Case Studies', path: '/case-studies', icon: 'mdi:view-grid' },
    { name: 'Blog', path: '/blogs', icon: 'mdi:post' },
    { name: 'Contact', path: '/contact-us', icon: 'mdi:phone' },
  ];

  const legalLinks = [
    // Removed all legal links as they are not defined in routes
  ];

  const techStack = Object.values(technologies).flat().slice(0, 8);

  return (
    <footer ref={footerRef} className="relative bg-void-950 border-t border-void-700/50 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-tech-grid opacity-8" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-500/3 rounded-full blur-3xl" />

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-4 h-4 border border-neon-500/20 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-cyber-400/20 rotate-45 animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="relative z-10">
        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-void-900/80 to-void-800/80 backdrop-blur-xl border-b border-void-700/30">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {aboutStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Icon icon={stat.icon} className="text-neon-500 text-2xl group-hover:text-cyber-400 transition-colors duration-300" />
                    <div>
                      <div 
                        ref={el => statsRef.current[index] = el}
                        className="text-2xl md:text-3xl font-bold text-white group-hover:text-neon-400 transition-colors duration-300"
                      >
                        0{stat.unit || ''}
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              {/* Logo and Company Name - matching header style */}
              <Link to="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 group inline-flex">
                <div className="relative">
                  {/* Professional glow effect background */}
                  <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-neon-500/15 to-cyber-500/15 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Enhanced logo container */}
                  <img 
                    src={mainLogo} 
                    alt={companyInfo.name}
                    className="h-20 sm:h-20 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-110 filter drop-shadow-lg"
                  />
                  {/* Professional corner accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-neon-500/20 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Company name with gradient text */}
                <div>
                  <h1 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-orange-500 transition-all duration-500 leading-tight">
                    {companyInfo.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium leading-tight">
                    Software Excellence
                  </p>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                {companyInfo.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-neon-400 transition-colors duration-300">
                  <Icon icon="mdi:map-marker" className="w-5 h-5 text-neon-500" />
                  <span>{officeLocations[0]?.address || 'Detroit, MI'}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-cyber-400 transition-colors duration-300">
                  <Icon icon="mdi:clock" className="w-5 h-5 text-cyber-500" />
                  <span>Founded in {companyInfo.founded}</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={(el) => (socialLinksRef.current[index] = el)}
                    className={`group relative w-12 h-12 rounded-xl bg-gradient-to-br from-void-800/50 to-void-700/50 backdrop-blur-xl border border-void-600/50 flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-neon-500/50 hover:shadow-lg hover:shadow-neon-500/20 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <Icon icon={social.icon} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-500/10 to-cyber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Icon icon="mdi:flash" className="text-neon-500" />
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-3 text-gray-300 hover:text-neon-400 transition-all duration-300 p-2 rounded-lg hover:bg-void-800/30"
                    >
                      <Icon icon={link.icon} className="w-5 h-5 text-gray-500 group-hover:text-neon-500 transition-colors duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      <Icon
                        icon="mdi:arrow-right"
                        className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Icon icon="mdi:cog" className="text-cyber-500" />
                Our Services
              </h4>
              <ul className="space-y-4">
                {services.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      to="/services"
                      className="group flex items-center gap-3 text-gray-300 hover:text-cyber-400 transition-all duration-300 p-2 rounded-lg hover:bg-void-800/30"
                    >
                      <Icon icon={service.icon} className="w-5 h-5 text-gray-500 group-hover:text-cyber-500 transition-colors duration-300" />
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Icon icon="mdi:phone" className="text-quantum-500" />
                Get in Touch
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactMethods.slice(0, 3).map((contact, index) => (
                  <div key={index} className="group flex items-center gap-3 text-gray-300 hover:text-quantum-400 transition-colors duration-300">
                    <Icon icon={contact.icon} className="w-5 h-5 text-quantum-500 group-hover:scale-110 transition-transform duration-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{contact.name}</span>
                      <span className="text-xs text-gray-400">{contact.email}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-void-800/30 to-void-700/30 backdrop-blur-xl rounded-xl p-6 border border-void-600/30">
                <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Icon icon="mdi:email-newsletter" className="text-neon-500" />
                  Newsletter
                </h5>
                <p className="text-sm text-gray-400 mb-4">
                  Get the latest engineering insights and updates
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-void-800/50 border border-void-600/50 text-white placeholder-gray-500 focus:outline-none focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20 transition-all duration-300"
                      required
                    />
                    <Icon icon="mdi:email" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={newsletterStatus === 'subscribing'}
                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-neon-500 to-cyber-500 text-white font-semibold hover:from-neon-600 hover:to-cyber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-500/30"
                  >
                    {newsletterStatus === 'subscribing' ? (
                      <>
                        <Icon icon="mdi:loading" className="animate-spin w-5 h-5" />
                        Subscribing...
                      </>
                    ) : newsletterStatus === 'success' ? (
                      <>
                        <Icon icon="mdi:check" className="w-5 h-5" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Icon icon="mdi:send" className="w-5 h-5" />
                        Subscribe
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Tech Stack Showcase */}
          <div className="mt-16 pt-12 border-t border-void-700/30">
            <h4 className="text-center text-lg font-bold text-white mb-8 flex items-center justify-center gap-3">
              <Icon icon="mdi:tools" className="text-neon-500" />
              Technologies We Master
              <Icon icon="mdi:tools" className="text-cyber-500" />
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group relative flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-void-800/30 to-void-700/30 backdrop-blur-xl border border-void-600/30 text-gray-400 hover:text-neon-400 hover:border-neon-500/30 transition-all duration-300 hover:scale-105"
                >
                  <Icon icon={tech.icon} className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-500/5 to-cyber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-void-700/30 bg-gradient-to-r from-void-900/80 to-void-800/80 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon icon="mdi:copyright" className="w-4 h-4" />
                  {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Icon icon="mdi:shield-check" className="w-4 h-4 text-green-500" />
                  <span>Secure & Confidential</span>
                </div>
              </div>
              
              {legalLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  {legalLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.path} 
                      className="text-gray-400 hover:text-neon-400 transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Made with love */}
            <div className="mt-6 pt-6 border-t border-void-700/20 text-center">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                Made with 
                <Icon icon="mdi:heart" className="w-4 h-4 text-red-500 animate-pulse" />
                by the Q-Hub Information Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
