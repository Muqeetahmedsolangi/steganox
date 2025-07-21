import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import SEOHead from '../../../components/ui/SEOHead';
import Breadcrumb from '../../../components/ui/Breadcrumb';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: '',
    budget: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const validateField = (name, value) => {
    const errors = { ...fieldErrors };
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          errors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          errors.name = 'Name must be at least 2 characters';
        } else {
          delete errors.name;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          errors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          errors.email = 'Please enter a valid email address';
        } else {
          delete errors.email;
        }
        break;
      case 'subject':
        if (!value.trim()) {
          errors.subject = 'Subject is required';
        } else if (value.trim().length < 3) {
          errors.subject = 'Subject must be at least 3 characters';
        } else {
          delete errors.subject;
        }
        break;
      case 'message':
        if (!value.trim()) {
          errors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          errors.message = 'Message must be at least 10 characters';
        } else {
          delete errors.message;
        }
        break;
      default:
        break;
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      validateField(name, value);
    }
  };

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'subject', 'message'];
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });
    
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Please correct the errors above'
      });
      return;
    }

    setFormStatus({ loading: true, success: false, error: null });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setFormStatus({
        loading: false,
        success: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        serviceType: '',
        budget: ''
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again or contact us directly.'
      });
    }
  };

  return (
    <>
      <SEOHead 
        title="Contact Us"
        description="Get in touch with Q HUB INFORMATION for your software development needs. Contact our experts for web development, mobile apps, cloud solutions, and enterprise software."
        keywords="contact, software development, consultation, Q HUB INFORMATION, get quote"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Breadcrumb />
              
              <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
                <Icon icon="carbon:phone" className="w-5 h-5 text-accent-400 mr-3" />
                <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Contact Us</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-100 mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                  Let's
                </span>
                <br />
                <span className="text-blue-100/90">Connect</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100/70 leading-relaxed">
                Ready to transform your business? Get in touch with our experts today
              </p>
            </div>
          </div>
        </section>

        {/* Success Message */}
        {formStatus.success && (
          <div className="fixed top-24 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg shadow-lg max-w-md">
            <div className="flex items-center">
              <Icon icon="carbon:checkmark-filled" className="w-6 h-6 mr-3" />
              <div>
                <p className="font-semibold">Message Sent Successfully!</p>
                <p className="text-sm opacity-90">We'll get back to you within 2 hours.</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Methods */}
        <section className="relative py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div 
                className="text-center p-8 rounded-xl transition-all duration-300 hover:scale-105 hover-lift"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center">
                  <Icon icon="carbon:email" className="w-8 h-8 text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                <p className="text-white/70 mb-4">Get in touch via email</p>
                <a href="mailto:info@qhubinformation.com" className="text-accent-400 hover:text-accent-300 transition-colors">
                  info@qhubinformation.com
                </a>
              </div>

              <div 
                className="text-center p-8 rounded-xl transition-all duration-300 hover:scale-105 hover-lift"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center">
                  <Icon icon="carbon:phone" className="w-8 h-8 text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
                <p className="text-white/70 mb-4">Speak with our experts</p>
                <a href="tel:+1234567890" className="text-accent-400 hover:text-accent-300 transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>

              <div 
                className="text-center p-8 rounded-xl transition-all duration-300 hover:scale-105 hover-lift"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center">
                  <Icon icon="carbon:location" className="w-8 h-8 text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
                <p className="text-white/70 mb-4">Come to our office</p>
                <p className="text-accent-400">
                  123 Tech Avenue<br />
                  Innovation District, CA 90210
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="relative py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">Send us a Message</h2>
                
                {formStatus.error && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                    <div className="flex items-center">
                      <Icon icon="carbon:warning" className="w-5 h-5 mr-2" />
                      {formStatus.error}
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={(e) => validateField('name', e.target.value)}
                        required
                        className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none transition-colors ${
                          fieldErrors.name ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-primary-400'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {fieldErrors.name && (
                        <p className="mt-1 text-sm text-red-400">{fieldErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={(e) => validateField('email', e.target.value)}
                        required
                        className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none transition-colors ${
                          fieldErrors.email ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-primary-400'
                        }`}
                        placeholder="Enter your email"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-sm text-red-400">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-primary-400 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-primary-400 transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Service Type
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-400 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="ai-ml">AI & Machine Learning</option>
                        <option value="api-development">API Development</option>
                        <option value="cybersecurity">Cybersecurity</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-400 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-25k">$5K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k+">$100K+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={(e) => validateField('subject', e.target.value)}
                      required
                      className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none transition-colors ${
                        fieldErrors.subject ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-primary-400'
                      }`}
                      placeholder="What's this about?"
                    />
                    {fieldErrors.subject && (
                      <p className="mt-1 text-sm text-red-400">{fieldErrors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={(e) => validateField('message', e.target.value)}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none transition-colors resize-none ${
                        fieldErrors.message ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-primary-400'
                      }`}
                      placeholder="Tell us about your project..."
                    />
                    {fieldErrors.message && (
                      <p className="mt-1 text-sm text-red-400">{fieldErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {formStatus.loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 rounded-full animate-spin border-t-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Icon icon="carbon:send" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  {/* Office Hours */}
                  <div 
                    className="p-6 rounded-xl hover-lift"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <Icon icon="carbon:time" className="w-6 h-6 text-primary-300 mr-3" />
                      <h3 className="text-xl font-bold text-white">Office Hours</h3>
                    </div>
                    <div className="space-y-2 text-white/70">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div 
                    className="p-6 rounded-xl hover-lift"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <Icon icon="carbon:lightning" className="w-6 h-6 text-accent-300 mr-3" />
                      <h3 className="text-xl font-bold text-white">Quick Response</h3>
                    </div>
                    <p className="text-white/70">
                      We typically respond to all inquiries within 2 hours during business hours.
                    </p>
                  </div>

                  {/* Support Languages */}
                  <div 
                    className="p-6 rounded-xl hover-lift"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <Icon icon="carbon:translate" className="w-6 h-6 text-primary-300 mr-3" />
                      <h3 className="text-xl font-bold text-white">Languages</h3>
                    </div>
                    <p className="text-white/70">
                      English, Spanish, French, German, Mandarin
                    </p>
                  </div>

                  {/* Social Links */}
                  <div 
                    className="p-6 rounded-xl hover-lift"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <Icon icon="carbon:share" className="w-6 h-6 text-accent-300 mr-3" />
                      <h3 className="text-xl font-bold text-white">Follow Us</h3>
                    </div>
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                        <Icon icon="carbon:logo-linkedin" className="w-5 h-5 text-white/70" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                        <Icon icon="carbon:logo-twitter" className="w-5 h-5 text-white/70" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                        <Icon icon="carbon:logo-github" className="w-5 h-5 text-white/70" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                        <Icon icon="carbon:logo-instagram" className="w-5 h-5 text-white/70" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity. Simple projects take 4-8 weeks, while complex enterprise solutions can take 3-6 months."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, and 24/7 monitoring with various support packages."
                },
                {
                  question: "What technologies do you use?",
                  answer: "We work with cutting-edge technologies including React, Node.js, Python, AWS, Docker, and many more based on project requirements."
                },
                {
                  question: "How do you ensure project security?",
                  answer: "Security is built into our development process with encryption, secure authentication, regular audits, and compliance with industry standards."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl hover-lift"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project requirements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:calendar" className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:phone" className="w-5 h-5 mr-2" />
                  Call Us Now
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
