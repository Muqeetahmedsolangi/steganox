import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const FAQSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState({});
  const [filteredFAQs, setFilteredFAQs] = useState([]);

  const faqData = [
    {
      id: 1,
      category: 'General',
      question: 'What types of software solutions does Q HUB INFORMATION develop?',
      answer: 'We specialize in custom web applications, mobile apps, enterprise software, e-commerce platforms, API development, cloud solutions, and AI/ML implementations. Our team delivers scalable solutions tailored to your business needs.'
    },
    {
      id: 2,
      category: 'General',
      question: 'How long has Q HUB INFORMATION been in business?',
      answer: 'Q HUB INFORMATION has been delivering innovative software solutions for over 8 years, with a proven track record of 500+ successful projects across various industries.'
    },
    {
      id: 3,
      category: 'Process',
      question: 'What is your development process?',
      answer: 'We follow an agile development methodology with clear phases: Requirements Analysis → Design & Planning → Development & Testing → Deployment → Ongoing Support. We maintain transparent communication throughout the entire process.'
    },
    {
      id: 4,
      category: 'Process',
      question: 'How do you ensure project quality?',
      answer: 'We implement rigorous quality assurance processes including code reviews, automated testing, manual testing, security audits, and performance optimization. Every project undergoes multiple quality checkpoints.'
    },
    {
      id: 5,
      category: 'Technical',
      question: 'Which technologies do you work with?',
      answer: 'Our tech stack includes React, Node.js, Python, AWS, Docker, Kubernetes, MongoDB, PostgreSQL, and more. We choose the best technology combination for each project\'s specific requirements.'
    },
    {
      id: 6,
      category: 'Technical',
      question: 'Do you provide cloud hosting and deployment services?',
      answer: 'Yes, we offer comprehensive cloud solutions including AWS, Azure, and Google Cloud deployment, scaling, monitoring, and maintenance. We ensure your applications are secure and performant.'
    },
    {
      id: 7,
      category: 'Support',
      question: 'What kind of support do you provide after project completion?',
      answer: 'We provide 24/7 technical support, regular maintenance, security updates, performance monitoring, and feature enhancements. Our support plans are customized based on your needs.'
    },
    {
      id: 8,
      category: 'Support',
      question: 'Can you help modernize our existing legacy systems?',
      answer: 'Absolutely! We specialize in legacy system modernization, including technology migration, database optimization, API integration, and gradual system transformation with minimal business disruption.'
    },
    {
      id: 9,
      category: 'Pricing',
      question: 'How do you structure your pricing?',
      answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team models. Pricing depends on project scope, complexity, timeline, and resource requirements.'
    },
    {
      id: 10,
      category: 'Pricing',
      question: 'Do you provide free project consultations?',
      answer: 'Yes, we offer free initial consultations to understand your requirements, discuss technical approaches, and provide project estimates. Contact us to schedule your consultation.'
    }
  ];

  const categories = [
    { name: 'All', icon: 'carbon:list', count: faqData.length },
    { name: 'General', icon: 'carbon:information', count: faqData.filter(faq => faq.category === 'General').length },
    { name: 'Process', icon: 'carbon:workflow', count: faqData.filter(faq => faq.category === 'Process').length },
    { name: 'Technical', icon: 'carbon:code', count: faqData.filter(faq => faq.category === 'Technical').length },
    { name: 'Support', icon: 'carbon:help', count: faqData.filter(faq => faq.category === 'Support').length },
    { name: 'Pricing', icon: 'carbon:currency-dollar', count: faqData.filter(faq => faq.category === 'Pricing').length }
  ];

  useEffect(() => {
    let filtered = faqData;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredFAQs(filtered);
  }, [searchTerm, selectedCategory]);

  const toggleFAQ = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="relative py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Icon icon="carbon:help" className="w-4 h-4 text-accent-400 mr-2" />
            <span className="text-sm font-medium text-white/90 tracking-wide">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-300 to-accent-400 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="text-white/90">Questions</span>
          </h2>
          
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our software development services and processes
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-8 lg:mb-12">
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="carbon:search" className="w-5 h-5 text-white/50" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.name
                    ? 'bg-primary-600 border-primary-500 text-white'
                    : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon icon={category.icon} className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto mb-12">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Q</span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-white">{faq.question}</h3>
                    </div>
                    <Icon 
                      icon="carbon:chevron-down" 
                      className={`w-5 h-5 text-white/60 transition-transform duration-300 ${openItems[faq.id] ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {openItems[faq.id] && (
                    <div className="px-6 pb-4">
                      <div className="pl-11 pr-4">
                        <div className="border-l-2 border-primary-500 pl-4">
                          <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon icon="carbon:search" className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-white/60">Try adjusting your search terms or filter selection.</p>
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-base text-white/70 mb-8">
              Our team is here to help you with any questions about our software development services
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <Icon icon="carbon:chat" className="w-6 h-6 text-accent-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Live Chat</div>
                <div className="text-white/60 text-xs">Available 24/7</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <Icon icon="carbon:email" className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Email Support</div>
                <div className="text-white/60 text-xs">2 hour response</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <Icon icon="carbon:phone" className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Phone Support</div>
                <div className="text-white/60 text-xs">Business hours</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact-us')}
                className="group relative px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:chat" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Contact Support
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button 
                onClick={() => navigate('/services')}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:information" className="w-4 h-4 mr-2" />
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 