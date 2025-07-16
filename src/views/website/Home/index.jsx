import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import FuturisticHero from '../../../components/FuturisticHero';
import AboutSection from '../../../components/AboutSection';
import ServicesSection from '../../../components/ServicesSection';
import IndustriesSection from '../../../components/IndustriesSection';
import WhyChooseSection from '../../../components/WhyChooseSection';
import MissionVisionSection from '../../../components/MissionVisionSection';
import ExpertiseSection from '../../../components/ExpertiseSection';
import PortfolioShowcase from '../../../components/PortfolioShowcase';
import TimelineScroll from '../../../components/TimelineScroll';
import FAQSection from '../../../components/FAQSection';
import { testimonials } from '../../../constant/data';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section id="home" className="relative">
        <FuturisticHero />
      </section>

      {/* About Company Section */}
      <section id="about" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <AboutSection />
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <ServicesSection />
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section id="industries" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <IndustriesSection />
        </div>
      </section>

      {/* Technology Excellence Section */}
      <section id="expertise" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="relative z-10">
          <ExpertiseSection />
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <PortfolioShowcase />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <WhyChooseSection />
        </div>
      </section>

      {/* Company Vision Section */}
      <section id="mission" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <MissionVisionSection />
        </div>
      </section>

      {/* Development Process Section */}
      <section id="process" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary-500/8 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <TimelineScroll />
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section id="testimonials" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Icon icon="carbon:chat" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Client Stories</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
                Success
              </span>
              <br />
              <span className="text-white/90">Testimonials</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Discover how we've transformed businesses and exceeded expectations for clients worldwide
            </p>
            
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400">120+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">98%</div>
                <div className="text-sm text-white/60">Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-white/60">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} icon="carbon:star-filled" className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Icon icon="carbon:quotes" className="w-8 h-8 text-primary-400/60" />
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg text-white/90 leading-relaxed mb-6 font-light">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Project Info */}
                  <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-sm text-accent-400 font-medium">Project: {testimonial.project}</div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-primary-300 font-medium text-sm">{testimonial.position}</p>
                      <p className="text-white/60 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-lg text-white/70">
                Let's discuss your project and create the next success story together
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact-us')}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:arrow-right" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button 
                onClick={() => navigate('/portfolio')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:view" className="w-5 h-5 mr-2" />
                  View All Projects
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Support Section */}
      <section id="faq" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-accent-500/8 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <FAQSection />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
                Digital Future?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
              Join 120+ companies that trust Q HUB INFORMATION for their software development needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button 
                onClick={() => navigate('/contact-us')}
                className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:rocket" className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                  Get Started Today
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button 
                onClick={() => navigate('/services')}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-lg"
              >
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:information" className="w-6 h-6 mr-3" />
                  Learn More
                </span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">500+</div>
                <div className="text-white/60 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">150+</div>
                <div className="text-white/60 text-sm">Expert Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-white/60 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-white/60 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
