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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-primary-900 to-black">
      {/* Hero Section */}
      <section id="home" className="relative">
        <FuturisticHero />
      </section>

      {/* About Company Section */}
      <section id="about" className="relative bg-gradient-to-b from-black to-primary-900">
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
      <section id="services" className="relative bg-gradient-to-b from-primary-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <ServicesSection />
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section id="industries" className="relative bg-gradient-to-b from-black to-primary-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <IndustriesSection />
        </div>
      </section>

      {/* Technology Excellence Section */}
      <section id="expertise" className="relative bg-gradient-to-b from-primary-900 to-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="relative z-10">
          <ExpertiseSection />
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="relative bg-gradient-to-b from-black to-primary-900">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <PortfolioShowcase />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="relative bg-gradient-to-b from-primary-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <WhyChooseSection />
        </div>
      </section>

      {/* Company Vision Section */}
      <section id="mission" className="relative bg-gradient-to-b from-black to-primary-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <MissionVisionSection />
        </div>
      </section>

      {/* Development Process Section */}
      <section id="process" className="relative bg-gradient-to-b from-primary-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary-500/8 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <TimelineScroll />
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section id="testimonials" className="relative bg-gradient-to-b from-black to-primary-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-900/50 to-black" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 py-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Icon icon="carbon:chat" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Client Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-300 to-accent-400 bg-clip-text text-transparent">
                Success
              </span>
              <br />
              <span className="text-white/90">Testimonials</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Discover how we've transformed businesses and exceeded expectations for clients worldwide
            </p>
            
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-400">120+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">98%</div>
                <div className="text-sm text-white/60">Satisfaction</div>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-white/60">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative p-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} icon="carbon:star-filled" className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Icon icon="carbon:quotes" className="w-6 h-6 text-primary-400/60" />
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-base text-white/90 leading-relaxed mb-4 font-light">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Project Info */}
                  <div className="mb-4 p-2 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-accent-400 font-medium">Project: {testimonial.project}</div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-primary-300 font-medium text-xs">{testimonial.position}</p>
                      <p className="text-white/60 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-base text-white/70">
                Let's discuss your project and create the next success story together
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact-us')}
                className="group relative px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:arrow-right" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button 
                onClick={() => navigate('/portfolio')}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
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
      <section id="faq" className="relative bg-gradient-to-b from-primary-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-accent-500/8 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <FAQSection />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-b from-black via-primary-900 to-primary-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 py-20">
          
          {/* Main CTA Content */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <Icon icon="carbon:enterprise" className="w-5 h-5 text-accent-400 mr-3" />
              <span className="text-sm font-medium text-white/90 tracking-wide">Q HUB INFORMATION</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-white/90">Partner with</span>
              <span className="block bg-gradient-to-r from-primary-300 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                Software Experts
              </span>
              <span className="block text-white/90">Who Deliver Results</span>
            </h2>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-4xl mx-auto">
              From concept to deployment, we build scalable software solutions that drive growth and innovation for forward-thinking businesses
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button 
                onClick={() => navigate('/contact-us')}
                className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary-500/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Icon icon="carbon:chat" className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button 
                onClick={() => navigate('/portfolio')}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Icon icon="carbon:portfolio" className="w-6 h-6 mr-3" />
                  View Our Work
                </span>
              </button>
            </div>
          </div>
          
          {/* Value Propositions Grid */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Enterprise Solutions */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon icon="carbon:enterprise" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise-Grade Solutions</h3>
                <p className="text-white/70 leading-relaxed">Scalable architecture and robust security designed for enterprise environments with 99.9% uptime guarantee.</p>
              </div>
              
              {/* Agile Development */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon icon="carbon:flow" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Agile Development</h3>
                <p className="text-white/70 leading-relaxed">Transparent workflow with regular updates, milestone delivery, and continuous client collaboration throughout the project.</p>
              </div>
              
              {/* 24/7 Support */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon icon="carbon:code" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Dedicated Support</h3>
                <p className="text-white/70 leading-relaxed">Round-the-clock technical support, maintenance, and monitoring to ensure your applications run smoothly.</p>
              </div>
            </div>
          </div>
          
          {/* Company Statistics */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12">
              
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Trusted by Industry Leaders
                </h3>
                <p className="text-white/70 text-lg">
                  Join the growing list of successful companies that rely on Q HUB INFORMATION
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">500+</div>
                  <div className="text-white/70 font-medium">Projects Delivered</div>
                  <div className="text-white/50 text-sm">Across 25+ Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">150+</div>
                  <div className="text-white/70 font-medium">Expert Developers</div>
                  <div className="text-white/50 text-sm">Senior & Lead Engineers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                  <div className="text-white/70 font-medium">Client Satisfaction</div>
                  <div className="text-white/50 text-sm">Based on 120+ Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">8+</div>
                  <div className="text-white/70 font-medium">Years Experience</div>
                  <div className="text-white/50 text-sm">Industry Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
