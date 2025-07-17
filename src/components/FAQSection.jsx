import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { faqs, faqCategories } from '../constant/data';

const FAQSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState([]);

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category.toLowerCase() === activeCategory.toLowerCase());

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-qhub-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-qhub-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-qhub-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-qhub-primary text-white'
                  : 'bg-white text-qhub-gray-600 hover:bg-qhub-gray-100 border border-qhub-gray-200'
              }`}
            >
              <Icon icon={category.icon} className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className={`bg-white rounded-xl border transition-all ${
                openItems.includes(faq.id)
                  ? 'border-qhub-primary/30 shadow-lg'
                  : 'border-qhub-gray-200 hover:border-qhub-gray-300'
              }`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 flex items-start gap-4 text-left"
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                  openItems.includes(faq.id)
                    ? 'bg-qhub-primary text-white'
                    : 'bg-qhub-gray-100 text-qhub-gray-600'
                }`}>
                  <Icon icon={faq.icon} className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${
                    openItems.includes(faq.id) ? 'text-qhub-primary' : 'text-qhub-secondary'
                  }`}>
                    {faq.question}
                  </h3>
                  
                  {/* Category Badge */}
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-qhub-gray-100 text-xs text-qhub-gray-600">
                    <Icon icon="carbon:tag" className="w-3 h-3" />
                    {faq.category}
                  </span>
                </div>

                {/* Toggle Icon */}
                <div className={`flex-shrink-0 transition-transform ${
                  openItems.includes(faq.id) ? 'rotate-180' : ''
                }`}>
                  <Icon icon="carbon:chevron-down" className="w-5 h-5 text-qhub-gray-400" />
                </div>
              </button>

              {/* Answer */}
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-5">
                  <div className="pl-14 pr-8">
                    <p className="text-qhub-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-white border border-qhub-gray-200 max-w-2xl mx-auto">
            <Icon icon="carbon:help-filled" className="w-12 h-12 text-qhub-primary" />
            <h3 className="text-2xl font-bold text-qhub-secondary">Still have questions?</h3>
            <p className="text-qhub-gray-600 max-w-md">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => navigate('/contact-us')}
                className="px-6 py-3 rounded-lg bg-qhub-primary text-white font-medium hover:bg-qhub-primary/90 transition-colors flex items-center gap-2"
              >
                <Icon icon="carbon:chat" className="w-5 h-5" />
                Contact Support
              </button>
              <button 
                onClick={() => navigate('/contact-us')}
                className="px-6 py-3 rounded-lg border-2 border-qhub-primary text-qhub-primary font-medium hover:bg-qhub-light transition-colors flex items-center gap-2"
              >
                <Icon icon="carbon:calendar" className="w-5 h-5" />
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 