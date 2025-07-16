import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Breadcrumb = ({ customPaths = [] }) => {
  const location = useLocation();
  
  // Default path mapping
  const pathMapping = {
    '': 'Home',
    'about': 'About',
    'services': 'Services',
    'portfolio': 'Portfolio', 
    'case-studies': 'Case Studies',
    'blogs': 'Blog',
    'contact': 'Contact',
    'contact-us': 'Contact'
  };

  // Use custom paths if provided, otherwise generate from current path
  const paths = customPaths.length > 0 ? customPaths : (() => {
    const pathnames = location.pathname.split('/').filter(x => x);
    return pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      return {
        name: pathMapping[name] || name.charAt(0).toUpperCase() + name.slice(1),
        path: routeTo
      };
    });
  })();

  if (paths.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
      <Link 
        to="/" 
        className="hover:text-primary-400 transition-colors flex items-center"
      >
        <Icon icon="carbon:home" className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          <Icon icon="carbon:chevron-right" className="w-3 h-3 text-gray-600" />
          {index === paths.length - 1 ? (
            <span className="text-primary-400 font-medium">{path.name}</span>
          ) : (
            <Link 
              to={path.path} 
              className="hover:text-primary-400 transition-colors"
            >
              {path.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb; 