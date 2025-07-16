import React from 'react';
import { Icon } from '@iconify/react';
import { services } from '../constant/data';

const ServicesSection = () => {
  const serviceIcons = {
    1: 'carbon:application-web',
    2: 'carbon:mobile-check',
    3: 'carbon:cloud-computing',
    4: 'carbon:machine-learning',
    5: 'carbon:api',
    6: 'carbon:security'
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            <Icon icon="carbon:tools" className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Complete Software Solutions
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end software development services 
            that scale with your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon 
                    icon={serviceIcons[service.id]} 
                    className="w-8 h-8 text-primary" 
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Icon icon="carbon:checkmark" className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="group/btn inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200">
                <span>Learn More</span>
                <Icon icon="carbon:arrow-right" className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Ready to transform your business with our software solutions?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            <Icon icon="carbon:chat" className="w-5 h-5" />
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 