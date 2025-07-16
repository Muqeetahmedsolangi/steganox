import React from 'react';
import { Icon } from '@iconify/react';
import { techStackData } from '../constant/data';

const TechStack = () => {
  const categoryIcons = {
    'Frontend': 'carbon:application-web',
    'Backend': 'carbon:server',
    'Cloud & DevOps': 'carbon:cloud',
    'Data & AI': 'carbon:machine-learning'
  };

  const getTechIcon = (techName) => {
    const iconMap = {
      'React/Next.js': 'logos:react',
      'Angular': 'logos:angular-icon',
      'Vue.js': 'logos:vue',
      'TypeScript': 'logos:typescript-icon',
      'Node.js': 'logos:nodejs-icon',
      'Python': 'logos:python',
      'Java': 'logos:java',
      '.NET Core': 'logos:dotnet',
      'PHP': 'logos:php',
      'Go': 'logos:go',
      'PostgreSQL': 'logos:postgresql',
      'MongoDB': 'logos:mongodb-icon',
      'MySQL': 'logos:mysql-icon',
      'Redis': 'logos:redis',
      'Elasticsearch': 'logos:elasticsearch',
      'DynamoDB': 'simple-icons:amazondynamodb',
      'AWS': 'logos:aws',
      'Azure': 'logos:microsoft-azure',
      'Google Cloud': 'logos:google-cloud',
      'Docker': 'logos:docker-icon',
      'Kubernetes': 'logos:kubernetes',
      'Terraform': 'logos:terraform-icon',
      'TensorFlow': 'logos:tensorflow',
      'PyTorch': 'simple-icons:pytorch',
      'Spark': 'simple-icons:apachespark',
      'Kafka': 'simple-icons:apachekafka',
      'Git': 'logos:git-icon',
      'Jenkins': 'logos:jenkins',
      'GitLab CI': 'logos:gitlab',
      'Jira': 'logos:jira',
      'Selenium': 'logos:selenium',
      'Postman': 'simple-icons:postman'
    };
    return iconMap[techName] || 'carbon:code';
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            <Icon icon="carbon:code" className="w-4 h-4" />
            <span>Technology Stack</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Cutting-Edge Technologies
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We leverage the latest technologies and frameworks to build robust, 
            scalable solutions that stand the test of time.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(techStackData).map(([categoryKey, categoryData]) => (
            <div 
              key={categoryKey}
              className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                  <Icon 
                    icon={categoryIcons[categoryData.category]} 
                    className="w-6 h-6 text-primary" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {categoryData.category}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {categoryData.technologies.length} Technologies
                  </p>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categoryData.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="group bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon 
                        icon={getTechIcon(tech.name)} 
                        className="w-8 h-8" 
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 dark:text-white text-sm">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {tech.projects} Projects
                        </p>
                      </div>
                    </div>
                    
                    {/* Skill Level Bar */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {tech.level}%
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {tech.expertise}
                      </span>
                      <Icon 
                        icon="carbon:chevron-right" 
                        className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Uptime Guaranteed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 