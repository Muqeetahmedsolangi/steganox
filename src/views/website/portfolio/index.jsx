import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData, caseStudies, aboutStats } from '../../../constant/data';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const statsRef = useRef([]);
  const cardRefs = useRef([]);
  const filterRef = useRef([]);
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Enhanced portfolio data combining multiple sources
  const allProjects = [
    // Mobile Apps
    {
      id: 'mobile-1',
      title: 'Smart Fitness Tracker App',
      category: 'mobile',
      type: 'Mobile App',
      client: 'TechWear Inc',
      description: 'Advanced fitness tracking mobile application with real-time health monitoring, workout planning, and social features.',
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      features: ['Real-time Health Monitoring', 'Workout Planning', 'Social Features', 'Wearable Integration'],
      metrics: {
        users: '500K+',
        rating: '4.8/5',
        downloads: '1M+'
      },
      status: 'Live',
      year: '2024',
      duration: '6 months',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'mobile-2',
      title: 'E-Commerce Mobile Platform',
      category: 'mobile',
      type: 'Mobile App',
      client: 'ShopTech Solutions',
      description: 'Comprehensive e-commerce mobile platform with AR product visualization, secure payments, and inventory management.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      technologies: ['Flutter', 'Firebase', 'Stripe', 'AR Core'],
      features: ['AR Product Visualization', 'Secure Payments', 'Inventory Management', 'Push Notifications'],
      metrics: {
        users: '250K+',
        rating: '4.7/5',
        sales: '$5M+'
      },
      status: 'Live',
      year: '2024',
      duration: '8 months',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mobile-3',
      title: 'Healthcare Telemedicine App',
      category: 'mobile',
      type: 'Mobile App',
      client: 'MedConnect Health',
      description: 'HIPAA-compliant telemedicine application enabling secure video consultations, prescription management, and health records.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      technologies: ['React Native', 'WebRTC', 'AWS', 'HIPAA'],
      features: ['Video Consultations', 'Prescription Management', 'Health Records', 'Secure Messaging'],
      metrics: {
        users: '100K+',
        rating: '4.9/5',
        consultations: '500K+'
      },
      status: 'Live',
      year: '2023',
      duration: '10 months',
      gradient: 'from-green-500 to-teal-500'
    },

    // Websites
    {
      id: 'web-1',
      title: 'Corporate Banking Platform',
      category: 'website',
      type: 'Web Platform',
      client: 'Global Bank Corp',
      description: 'Enterprise-grade banking platform with real-time transactions, advanced security, and multi-currency support.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      features: ['Real-time Transactions', 'Advanced Security', 'Multi-currency Support', 'Analytics Dashboard'],
      metrics: {
        users: '10M+',
        transactions: '$50B+',
        uptime: '99.99%'
      },
      status: 'Live',
      year: '2024',
      duration: '12 months',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'web-2',
      title: 'E-Learning Management System',
      category: 'website',
      type: 'Web Platform',
      client: 'EduTech Global',
      description: 'Comprehensive learning management system with interactive courses, assessments, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      features: ['Interactive Courses', 'Assessment Tools', 'Progress Tracking', 'Video Conferencing'],
      metrics: {
        students: '1M+',
        courses: '10K+',
        completion: '85%'
      },
      status: 'Live',
      year: '2024',
      duration: '9 months',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'web-3',
      title: 'Supply Chain Management Portal',
      category: 'website',
      type: 'Web Platform',
      client: 'LogiTech Industries',
      description: 'Real-time supply chain management platform with inventory tracking, demand forecasting, and supplier management.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      technologies: ['Angular', 'Spring Boot', 'MongoDB', 'Kafka'],
      features: ['Inventory Tracking', 'Demand Forecasting', 'Supplier Management', 'Real-time Analytics'],
      metrics: {
        efficiency: '+45%',
        cost_reduction: '30%',
        delivery_time: '-2 days'
      },
      status: 'Live',
      year: '2023',
      duration: '14 months',
      gradient: 'from-yellow-500 to-orange-500'
    },

    // Mechanical Projects
    ...caseStudies.map(study => ({
      id: `mechanical-${study.id}`,
      title: study.title,
      category: 'mechanical',
      type: 'Mechanical Engineering',
      client: study.client,
      description: study.challenge,
      image: study.image,
      technologies: study.technologies,
      features: study.results,
      metrics: {
        duration: study.duration,
        team: study.teamSize,
        year: study.year
      },
      status: study.status,
      year: study.year,
      duration: study.duration,
      gradient: 'from-cyan-500 to-blue-500'
    }))
  ];

  const filterCategories = [
    { id: 'all', name: 'All Projects', icon: 'mdi:view-grid', count: allProjects.length },
    { id: 'mobile', name: 'Mobile Apps', icon: 'mdi:cellphone', count: allProjects.filter(p => p.category === 'mobile').length },
    { id: 'website', name: 'Websites', icon: 'mdi:web', count: allProjects.filter(p => p.category === 'website').length },
    { id: 'mechanical', name: 'Mechanical', icon: 'mdi:cog', count: allProjects.filter(p => p.category === 'mechanical').length }
  ];

  useEffect(() => {
    // Filter projects based on active filter
    if (activeFilter === 'all') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // Stats animation
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          gsap.fromTo(stat,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                once: true
              }
            }
          );
        }
      });

      // Filter buttons animation
      filterRef.current.forEach((filter, index) => {
        if (filter) {
          gsap.fromTo(filter,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                once: true
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate cards when filter changes
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out"
          }
        );
      }
    });
  }, [filteredProjects]);

  const handleProjectClick = (project) => {
    if (project.category === 'mechanical') {
      navigate(`/case-studies/${project.id.replace('mechanical-', '')}`);
    } else {
      // For mobile and web projects, could navigate to a project detail page
      console.log('Navigate to project detail:', project.id);
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={headerRef} className="text-center mb-16">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5" />
              <span>Back</span>
            </button>

            {/* Title */}
            <h1 
              className="font-bold mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: '1.1',
                color: '#ffffff'
              }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p 
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Showcasing our expertise across mobile applications, web platforms, and mechanical engineering solutions
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: 'mdi:cellphone', value: '50+', label: 'Mobile Apps', color: 'from-purple-500 to-pink-500' },
              { icon: 'mdi:web', value: '100+', label: 'Websites', color: 'from-blue-500 to-cyan-500' },
              { icon: 'mdi:cog', value: '200+', label: 'Mechanical Projects', color: 'from-green-500 to-teal-500' },
              { icon: 'mdi:account-group', value: '350+', label: 'Happy Clients', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <div
                key={index}
                ref={el => statsRef.current[index] = el}
                className="text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filterCategories.map((category, index) => (
              <button
                key={category.id}
                ref={el => filterRef.current[index] = el}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon icon={category.icon} className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === category.id ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={el => cardRefs.current[index] = el}
                onClick={() => handleProjectClick(project)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.type}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 border border-green-500/30 text-green-400">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon icon="mdi:calendar" className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{project.year}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-sm text-gray-400">{project.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 mb-2">{project.client}</p>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-white font-semibold">{value}</div>
                          <div className="text-gray-400 text-xs capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                    <Icon icon="mdi:arrow-right" className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${project.gradient}`} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProjects.length > 9 && (
            <div className="text-center mt-12">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30">
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise in mobile, web, and mechanical engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact-us')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Start Your Project
            </button>
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 