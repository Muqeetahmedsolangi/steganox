import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData, aboutStats } from '../../../constant/data';

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
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [projectsToShow, setProjectsToShow] = useState(6);

  // Filter categories based on available project data
  const filterCategories = [
    { id: 'all', name: 'All Projects', icon: 'mdi:view-grid', count: portfolioData.length },
    { id: 'E-commerce', name: 'E-commerce', icon: 'mdi:shopping', count: portfolioData.filter(p => p.category === 'E-commerce').length },
    { id: 'Mobile App', name: 'Mobile Apps', icon: 'mdi:cellphone', count: portfolioData.filter(p => p.category === 'Mobile App').length },
    { id: 'Web Platform', name: 'Web Platform', icon: 'mdi:web', count: portfolioData.filter(p => p.category === 'Web Platform').length },
    { id: 'DevOps Platform', name: 'DevOps', icon: 'mdi:server-network', count: portfolioData.filter(p => p.category === 'DevOps Platform').length }
  ];

  useEffect(() => {
    // Filter projects based on active filter
    if (activeFilter === 'all') {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(portfolioData.filter(project => project.category === activeFilter));
    }
    setProjectsToShow(6); // Reset to initial count when filter changes
  }, [activeFilter]);

  useEffect(() => {
    // Update displayed projects based on projectsToShow
    setDisplayedProjects(filteredProjects.slice(0, projectsToShow));
  }, [filteredProjects, projectsToShow]);

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

  // Animate cards when displayed projects change
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
  }, [displayedProjects]);

  const handleProjectClick = (project) => {
    navigate(`/portfolio/${project.id}`);
  };

  const handleLoadMore = () => {
    setProjectsToShow(prev => prev + 5);
  };

  // Calculate portfolio stats
  const totalProjects = portfolioData.length;
  const totalClients = new Set(portfolioData.map(p => p.client)).size;
  const totalBudget = portfolioData.reduce((sum, p) => {
    const budget = parseFloat(p.budget.replace(/[$M+,]/g, ''));
    return sum + budget;
  }, 0);

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
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.1',
                color: '#ffffff'
              }}
            >
              Our <span style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Portfolio</span>
            </h1>

            <p 
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}
            >
              Showcasing our expertise in software development, from mobile applications to enterprise platforms and cutting-edge AI solutions
            </p>
          </div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: 'mdi:folder-multiple', value: totalProjects, label: 'Projects Completed', color: 'from-purple-500 to-pink-500' },
              { icon: 'mdi:account-group', value: totalClients, label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
              { icon: 'mdi:currency-usd', value: `$${totalBudget.toFixed(1)}M+`, label: 'Total Project Value', color: 'from-green-500 to-teal-500' },
              { icon: 'mdi:star', value: '4.9/5', label: 'Client Satisfaction', color: 'from-orange-500 to-red-500' }
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
            {displayedProjects.map((project, index) => (
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
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center gap-1">
                        <Icon icon="mdi:star" className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Project Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.type}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 border border-green-500/30 text-green-400 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon icon="mdi:calendar" className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon="mdi:clock" className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{project.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 mb-2 font-medium">{project.client}</p>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Impact Metrics */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      {Object.entries(project.impact).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-white font-semibold">{value}</div>
                          <div className="text-gray-400 text-xs capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon="mdi:currency-usd" className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold">{project.budget}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">View Details</span>
                      <Icon icon="mdi:arrow-right" className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${project.gradient}`} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {displayedProjects.length < filteredProjects.length && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30 flex items-center gap-3 mx-auto"
              >
                <span>Load More Projects</span>
                <Icon icon="mdi:plus" className="w-5 h-5" />
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                  +5 more
                </span>
              </button>
            </div>
          )}

          {/* End Message */}
          {displayedProjects.length === filteredProjects.length && filteredProjects.length > 6 && (
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-400">
                <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-400" />
                <span>You've viewed all {filteredProjects.length} projects</span>
              </div>
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
            Let's discuss how we can bring your vision to life with our expertise in software development and digital transformation.
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