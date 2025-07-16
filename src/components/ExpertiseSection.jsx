import { useState } from 'react';
import { Icon } from '@iconify/react';
import { technologies } from '../constant/data';

const ExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 'frontend', name: 'Frontend', data: technologies.frontend },
    { id: 'backend', name: 'Backend', data: technologies.backend },
    { id: 'database', name: 'Database', data: technologies.database },
    { id: 'cloud', name: 'Cloud & DevOps', data: technologies.cloud },
    { id: 'tools', name: 'Tools', data: technologies.tools }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-qhub-secondary">
            Our Technology Stack
          </h2>
          <p className="text-xl text-qhub-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable solutions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === index 
                  ? 'bg-qhub-primary text-white' 
                  : 'bg-qhub-gray-100 text-qhub-gray-600 hover:bg-qhub-gray-200'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Technology grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {tabs[activeTab].data.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              {/* Technology icon */}
              <div className="w-20 h-20 rounded-2xl bg-qhub-gray-50 flex items-center justify-center mb-4 group-hover:bg-qhub-light transition-colors">
                <Icon 
                  icon={tech.icon} 
                  className="w-10 h-10"
                  style={{ color: tech.color || '#1B4DFF' }}
                />
              </div>
              {/* Technology name */}
              <span className="text-sm font-medium text-qhub-gray-700 text-center">
                {tech.name}
              </span>
              {/* Expertise level */}
              <div className="w-full mt-2">
                <div className="h-1 bg-qhub-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-qhub-accent rounded-full transition-all duration-500"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
