import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const FuturisticFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Web Development', href: '/services#web' },
      { name: 'Mobile Apps', href: '/services#mobile' },
      { name: 'Cloud Solutions', href: '/services#cloud' },
      { name: 'AI & ML', href: '/services#ai' },
    ],
    resources: [
      { name: 'Blog', href: '/blogs' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Documentation', href: '/docs' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ]
  };

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: 'carbon:logo-github' },
    { name: 'LinkedIn', href: '#', icon: 'carbon:logo-linkedin' },
    { name: 'Twitter', href: '#', icon: 'carbon:logo-twitter' },
    { name: 'Discord', href: '#', icon: 'carbon:logo-discord' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon icon="carbon:code" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">
                    Q HUB
                  </span>
                  <span className="text-xl font-bold text-primary ml-1">
                    INFORMATION
                  </span>
                </div>
              </Link>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
                Transforming ideas into digital excellence. We build scalable, 
                secure software solutions that drive business growth.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon icon={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerSections.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {footerSections.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerSections.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerSections.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="py-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Stay updated with our newsletter
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Get the latest insights and updates about technology and software development.
              </p>
            </div>
            
            <div className="flex gap-3 max-w-md w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-200">
                <Icon icon="carbon:email" className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span>© {currentYear} Q HUB INFORMATION. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Icon icon="carbon:location" className="w-4 h-4" />
                <span>Global</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="carbon:email" className="w-4 h-4" />
                <span>info@qhubinformation.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="carbon:phone" className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter; 