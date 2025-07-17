import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { whyChooseData } from '../constant/data';

const WhyChooseSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-qhub-secondary">
            Why Choose Q HUB INFORMATION
          </h2>
          <p className="text-xl text-qhub-gray-600 max-w-3xl mx-auto">
            Partner with a team that delivers excellence, innovation, and results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseData.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-qhub-light flex items-center justify-center text-4xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-qhub-secondary">
                {item.title}
              </h3>
              <p className="text-qhub-gray-600 mb-4">
                {item.description}
              </p>
              <div className="text-qhub-primary font-semibold">
                {item.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/contact-us')}
            className="px-8 py-4 rounded-lg bg-qhub-primary text-white font-semibold hover:bg-qhub-primary/90 transition-colors"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection; 