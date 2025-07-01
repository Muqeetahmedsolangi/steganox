import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  officeLocations,
  contactTeam,
  supportTiers,
  contactFAQs,
  contactStats,
  contactMethods,
  serviceInquiryTypes
} from '../../../constant/data';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    subject: "",
    serviceType: "",
    budget: "",
    timeline: "",
    projectDescription: "",
    message: "",
    supportTier: "standard",
    priority: "normal",
    nda: false,
    newsletter: true
  });

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const [activeTab, setActiveTab] = useState("general");
  const [activeFAQCategory, setActiveFAQCategory] = useState("general");
  const [selectedOffice, setSelectedOffice] = useState(0);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [showAdvancedForm, setShowAdvancedForm] = useState(false);

  const sectionRef = useRef(null);
  const statsRefs = useRef([]);
  const teamRefs = useRef([]);
  const officeRefs = useRef([]);
  const faqRefs = useRef([]);

  const validateField = (name, value) => {
    const errors = { ...formErrors };

    switch (name) {
      case 'name':
        if (!value.trim()) errors.name = 'Name is required';
        else if (value.length < 2) errors.name = 'Name must be at least 2 characters';
        else delete errors.name;
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) errors.email = 'Email is required';
        else if (!emailRegex.test(value)) errors.email = 'Please enter a valid email address';
        else delete errors.email;
        break;
      case 'phone':
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (value && !phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
          errors.phone = 'Please enter a valid phone number';
        } else delete errors.phone;
        break;
      case 'company':
        if (!value.trim()) errors.company = 'Company name is required';
        else delete errors.company;
        break;
      case 'subject':
        if (!value.trim()) errors.subject = 'Subject is required';
        else if (value.length < 5) errors.subject = 'Subject must be at least 5 characters';
        else delete errors.subject;
        break;
      case 'message':
        if (!value.trim()) errors.message = 'Message is required';
        else if (value.length < 20) errors.message = 'Please provide a detailed message (minimum 20 characters)';
        else delete errors.message;
        break;
      default:
        break;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    // Real-time validation
    if (name === 'email' || name === 'name' || name === 'phone' || name === 'company' || name === 'subject' || name === 'message') {
      setTimeout(() => validateField(name, newValue), 300);
    }
  };

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'company', 'subject', 'message'];
    let isValid = true;

    requiredFields.forEach(field => {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormStatus({ submitting: false, submitted: false, error: true });
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: false });

    // Simulate API call
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        industry: "",
        subject: "",
        serviceType: "",
        budget: "",
        timeline: "",
        projectDescription: "",
        message: "",
        supportTier: "standard",
        priority: "normal",
        nda: false,
        newsletter: true
      });
      setFormErrors({});

      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 8000);
    }, 2000);
  };

  const getSelectedService = () => {
    return serviceInquiryTypes.find(service => service.id === formData.serviceType);
  };

  useEffect(() => {
    // Enhanced entrance animations
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animate stats with counting effect
    statsRefs.current.forEach((stat, index) => {
      if (stat) {
        const values = [contactStats.totalClients, contactStats.projectsCompleted, contactStats.clientSatisfaction, contactStats.supportTicketsResolved];
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: values[index],
            duration: 2.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              once: true
            },
            onUpdate: function () {
              const value = Math.ceil(this.targets()[0].textContent);
              if (index === 2) {
                stat.textContent = value + "%";
              } else {
                stat.textContent = value.toLocaleString();
              }
            }
          }
        );
      }
    });

    // Animate team cards with stagger
    teamRefs.current.forEach((team, index) => {
      if (team) {
        gsap.fromTo(
          team,
          { opacity: 0, y: 50, rotateY: 15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: team,
              start: "top 85%",
              once: true
            }
          }
        );
      }
    });

    // Animate office locations with sophisticated effects
    officeRefs.current.forEach((office, index) => {
      if (office) {
        gsap.fromTo(
          office,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: office,
              start: "top 85%",
              once: true
            }
          }
        );
      }
    });
  }, []);

  const filteredFAQs = contactFAQs.filter(faq => faq.category === activeFAQCategory);
  const faqCategories = [...new Set(contactFAQs.map(faq => faq.category))];

  return (
    <div ref={sectionRef} className="bg-void-950 text-white">
      {/* Enhanced Hero Banner */}
      <div className="relative h-[380px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
        {/* Advanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-void-900/95 via-void-950/90 to-cyber-900/95 z-10">
          <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
          <div className="absolute top-5 sm:top-10 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-neon-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-5 sm:bottom-10 right-1/4 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-cyber-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }} />
        </div>

        {/* Smaller floating elements for mobile */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <Icon icon="mdi:cog" className="absolute top-5 sm:top-10 right-5 sm:right-10 text-neon-500/8 w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32 animate-spin-slow" />
          <Icon icon="mdi:wrench" className="absolute bottom-5 sm:bottom-10 left-5 sm:left-20 text-cyber-500/8 w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 rotate-45 animate-pulse" />
        </div>

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <div className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-neon-500 via-primary to-primary-600 bg-clip-text text-transparent leading-tight">
              Contact Us
            </h1>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gradient-to-r from-neon-400 to-cyber-400 mx-auto mb-3 sm:mb-4 rounded-full"></div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 max-w-sm sm:max-w-md md:max-w-lg leading-relaxed">
            Connect with our world-class engineering team for innovative solutions that transform your ideas into reality
          </p>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
            <span>Home</span>
            <Icon icon="mdi:chevron-right" className="w-3 h-3 sm:w-4 sm:h-4 text-neon-500" />
            <span className="text-neon-500 font-medium">Contact</span>
          </div>

          {/* Compact mobile-friendly stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-sm sm:max-w-lg md:max-w-2xl">
            <div className="text-center p-2 sm:p-3 bg-void-800/20 rounded-lg border border-void-700/30">
              <div className="text-sm sm:text-lg md:text-xl font-bold text-neon-400 mb-0.5">{contactStats.averageResponseTime}</div>
              <div className="text-xs text-gray-400 leading-tight">Response Time</div>
            </div>
            <div className="text-center p-2 sm:p-3 bg-void-800/20 rounded-lg border border-void-700/30">
              <div className="text-sm sm:text-lg md:text-xl font-bold text-cyber-400 mb-0.5">24/7</div>
              <div className="text-xs text-gray-400 leading-tight">Emergency Support</div>
            </div>
            <div className="text-center p-2 sm:p-3 bg-void-800/20 rounded-lg border border-void-700/30">
              <div className="text-sm sm:text-lg md:text-xl font-bold text-neon-400 mb-0.5">{contactStats.languages}</div>
              <div className="text-xs text-gray-400 leading-tight">Languages</div>
            </div>
            <div className="text-center p-2 sm:p-3 bg-void-800/20 rounded-lg border border-void-700/30">
              <div className="text-sm sm:text-lg md:text-xl font-bold text-cyber-400 mb-0.5">{officeLocations.length}</div>
              <div className="text-xs text-gray-400 leading-tight">Global Offices</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Stats Dashboard */}
      <section className="py-8 sm:py-12 md:py-16 relative bg-void-900">
        <div className="absolute inset-0 bg-gradient-to-b from-void-950/50 to-void-900/50" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">
              Trusted By  <span className="text-neon-500">Industry</span> Leaders
            </h2>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-neon-500 mx-auto mb-4 sm:mb-6 rounded-full" />
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              Our commitment to excellence has earned us the trust of leading companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Happy Clients", stat: contactStats.totalClients, icon: "mdi:account-heart", color: "neon" },
              { label: "Projects Delivered", stat: contactStats.projectsCompleted, icon: "mdi:rocket-launch", color: "cyber" },
              { label: "Satisfaction Rate", stat: contactStats.clientSatisfaction, suffix: "%", icon: "mdi:star-circle", color: "neon" },
              { label: "Support Tickets", stat: contactStats.supportTicketsResolved, icon: "mdi:headset", color: "cyber" }
                          ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-void-800/80 to-void-700/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-700/50 hover:border-neon-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-neon-500/20">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br ${item.color === 'neon' ? 'from-neon-500/20 to-neon-600/20' : 'from-cyber-500/20 to-cyber-600/20'} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon icon={item.icon} className={`text-sm sm:text-lg md:text-xl ${item.color === 'neon' ? 'text-neon-400' : 'text-cyber-400'}`} />
                    </div>

                    <div className="text-center">
                      <div
                        ref={el => statsRefs.current[index] = el}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 tracking-tight"
                      >
                        0{item.suffix || ''}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 font-medium leading-tight">{item.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <div className="py-8 sm:py-12 md:py-16 bg-void-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">
              Our <span className="text-neon-500">Global</span> Presence
            </h2>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-neon-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              With offices across key technology and engineering hubs, we're always close to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {officeLocations.map((office, index) => (
              <div
                key={office.id}
                ref={el => officeRefs.current[index] = el}
                className="bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl p-4 sm:p-5 md:p-6 hover:border-neon-500/30 transition-all duration-300"
              >
                {/* Header Section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-neon-500/20 flex-shrink-0">
                      <Icon icon={office.icon} className="text-neon-500 text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{office.name}</h3>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold mt-1 ${office.type === 'headquarters' ? 'bg-neon-500/20 text-neon-500' :
                          office.type === 'research' ? 'bg-cyber-500/20 text-cyber-500' :
                            'bg-quantum-500/20 text-quantum-500'
                        }`}>
                        {office.type.charAt(0).toUpperCase() + office.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{office.address}</p>
                </div>

                {/* Professional Info Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div className="bg-void-700/30 rounded-lg p-2 sm:p-3">
                    <p className="text-gray-400 text-xs mb-1">Manager</p>
                    <p className="text-neon-500 font-semibold text-sm leading-tight">{office.manager}</p>
                  </div>
                  <div className="bg-void-700/30 rounded-lg p-2 sm:p-3">
                    <p className="text-gray-400 text-xs mb-1">Employees</p>
                    <p className="text-white font-semibold text-sm">{office.employees}</p>
                  </div>
                  <div className="bg-void-700/30 rounded-lg p-2 sm:p-3">
                    <p className="text-gray-400 text-xs mb-1">Phone</p>
                    <p className="text-white text-xs sm:text-sm font-mono">{office.phone}</p>
                  </div>
                  <div className="bg-void-700/30 rounded-lg p-2 sm:p-3">
                    <p className="text-gray-400 text-xs mb-1">Established</p>
                    <p className="text-white font-semibold text-sm">{office.established}</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="border-t border-void-700/50 pt-3 sm:pt-4">
                  <p className="text-gray-400 text-xs sm:text-sm mb-2 font-medium">Specialties</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {office.specialties.map((specialty, idx) => (
                      <span key={idx} className="px-2 py-1 bg-void-700/50 rounded text-xs text-gray-300 font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Team */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-void-900 to-void-950 relative">
        <div className="absolute inset-0 bg-tech-grid opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-neon-500">
              Meet Our Contact Team
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-neon-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              Our dedicated team of experts is ready to assist you with any inquiry or project requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {contactTeam.map((member, index) => (
                              <div
                  key={member.id}
                  ref={el => teamRefs.current[index] = el}
                  className="group bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl overflow-hidden hover:border-neon-500/30 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-neon-500 mb-1 text-sm sm:text-base">{member.role}</p>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{member.department}</p>

                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm mb-3 sm:mb-4">
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:email" className="text-neon-500 text-sm" />
                        <span className="text-gray-300 truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:phone" className="text-neon-500 text-sm" />
                        <span className="text-gray-300">{member.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:clock" className="text-neon-500 text-sm" />
                        <span className="text-gray-300">{member.responseTime}</span>
                      </div>
                    </div>

                    <div className="mb-3 sm:mb-4">
                      <p className="text-gray-400 text-xs sm:text-sm mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-void-700/50 rounded text-xs text-gray-300">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full px-3 sm:px-4 py-2 bg-neon-500/20 border border-neon-500/30 rounded-lg text-neon-500 hover:bg-neon-500/30 transition-colors duration-300 text-sm sm:text-base">
                      Contact {member.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Methods & Support Tiers */}
      <div className="py-12 sm:py-16 md:py-20 bg-void-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
            {/* Contact Methods */}
            <div>
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                  Our <span className="text-neon-500">Contact</span> Methods
                </h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-neon-500 mx-auto mb-6 sm:mb-8"></div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method) => (
                  <div
                    key={method.id}
                    className="bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-lg p-3 sm:p-4 hover:border-neon-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className="p-2 rounded-lg bg-neon-500/20 mx-auto sm:mx-0">
                        <Icon icon={method.icon} className="text-neon-500 text-lg sm:text-xl" />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{method.name}</h3>
                        <p className="text-gray-400 text-xs sm:text-sm mb-2">{method.description}</p>
                        <div className="flex flex-col gap-1 text-xs sm:text-sm">
                          <p className="text-neon-500 break-all">{method.email}</p>
                          <p className="text-gray-300">{method.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Tiers */}
            <div>
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                  Our <span className="text-neon-500">Support</span> Tiers
                </h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-cyber-500 mx-auto mb-6 sm:mb-8"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {supportTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl p-6 hover:border-${tier.color}-500/30 transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Icon icon={tier.icon} className={`text-${tier.color}-500 text-2xl`} />
                        <div>
                          <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                          <p className="text-gray-400 text-sm">{tier.description}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 bg-${tier.color}-500/20 text-${tier.color}-500 rounded-full text-sm font-semibold`}>
                        {tier.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-400">Response Time:</p>
                        <p className="text-white font-semibold">{tier.responseTime}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Availability:</p>
                        <p className="text-white font-semibold">{tier.availability}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-400 text-sm mb-2">Channels:</p>
                      <div className="flex flex-wrap gap-2">
                        {tier.channels.map((channel, idx) => (
                          <span key={idx} className="px-2 py-1 bg-void-700/50 rounded text-xs text-gray-300">
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-400 text-sm mb-2">Features:</p>
                      <ul className="space-y-1">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <Icon icon="mdi:check" className={`text-${tier.color}-500 text-sm`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Contact Form */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-void-900 to-void-950 relative">
        <div className="absolute inset-0 bg-tech-grid opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-neon-500">
              Start Your Project
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-neon-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              Fill out the comprehensive form below to get started with your engineering project.
            </p>
          </div>

          <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              {/* Professional Form Type Toggle */}
              <div className="mb-8 sm:mb-10">
                <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Choose Your Inquiry Type</h3>
                    <p className="text-sm sm:text-base text-gray-400">Select the form type that best matches your project needs</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <button
                      onClick={() => setShowAdvancedForm(false)}
                      className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${!showAdvancedForm
                        ? 'bg-gradient-to-r from-neon-500/20 to-cyber-500/20 text-neon-400 border border-neon-500/40 shadow-lg shadow-neon-500/20'
                        : 'text-gray-400 hover:text-white border border-transparent hover:border-void-500/50'}`}
                    >
                      <Icon icon="mdi:flash" className="inline mr-2 text-sm sm:text-base" />
                      Quick Inquiry
                    </button>
                    <button
                      onClick={() => setShowAdvancedForm(true)}
                      className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${showAdvancedForm
                        ? 'bg-gradient-to-r from-neon-500/20 to-cyber-500/20 text-neon-400 border border-neon-500/40 shadow-lg shadow-neon-500/20'
                        : 'text-gray-400 hover:text-white border border-transparent hover:border-void-500/50'}`}
                    >
                      <Icon icon="mdi:cog-box" className="inline mr-2 text-sm sm:text-base" />
                      Detailed Project Form
                    </button>
                  </div>
                </div>
              </div>

              {/* Service Type Selector */}
              <div className="mb-8 sm:mb-10">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center justify-center sm:justify-start gap-3">
                  <Icon icon="mdi:wrench" className="text-cyber-400 text-lg sm:text-xl" />
                  Select Service Type
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {serviceInquiryTypes.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setFormData(prev => ({ ...prev, serviceType: service.id }))}
                      className={`group p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-[1.02] ${formData.serviceType === service.id
                          ? 'border-neon-500 bg-gradient-to-br from-neon-500/10 to-cyber-500/10 shadow-lg shadow-neon-500/20'
                          : 'border-void-600 hover:border-neon-500/50 bg-void-800/30'
                        }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${formData.serviceType === service.id ? 'bg-neon-500/20' : 'bg-void-700/50 group-hover:bg-neon-500/10'
                          }`}>
                          <Icon icon="mdi:cog" className={`text-lg ${formData.serviceType === service.id ? 'text-neon-400' : 'text-gray-400 group-hover:text-neon-400'
                            }`} />
                        </div>
                        <h4 className="font-bold text-white text-lg">{service.name}</h4>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          <span className="block">Timeline: {service.estimatedTime}</span>
                          <span className="block">Complexity: {service.complexity}</span>
                        </div>
                        <span className="text-neon-500 font-bold text-lg">{service.startingPrice}</span>
                      </div>
                      {formData.serviceType === service.id && (
                        <div className="mt-4 pt-4 border-t border-neon-500/20">
                          <div className="flex items-center gap-2 text-neon-400 text-sm">
                            <Icon icon="mdi:check-circle" />
                            <span>Selected Service</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Status messages */}
              {formStatus.submitted && (
                <div className="mb-8 p-6 bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/40 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Icon icon="mdi:check-circle" className="text-green-400 text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-green-400 font-bold text-lg">Message Sent Successfully!</h4>
                      <p className="text-green-300">Thank you for your inquiry. Our engineering team will review your requirements and respond within {contactStats.averageResponseTime}.</p>
                    </div>
                  </div>
                </div>
              )}

              {formStatus.error && (
                <div className="mb-8 p-6 bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/40 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                      <Icon icon="mdi:alert-circle" className="text-red-400 text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-red-400 font-bold text-lg">Please check your form</h4>
                      <p className="text-red-300">Some required fields are missing or contain errors. Please review and try again.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white flex items-center gap-3">
                    <Icon icon="mdi:account-circle" className="text-neon-400" />
                    Contact Information
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">
                        Full Name <span className="text-neon-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full p-4 bg-void-800/50 border rounded-xl focus:outline-none transition-all text-white placeholder-gray-500 ${formErrors.name
                            ? 'border-red-500/50 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20'
                            : 'border-void-600 focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20'
                          }`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.name && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                          <Icon icon="mdi:alert-circle" className="text-xs" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">
                        Email Address <span className="text-neon-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full p-4 bg-void-800/50 border rounded-xl focus:outline-none transition-all text-white placeholder-gray-500 ${formErrors.email
                            ? 'border-red-500/50 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20'
                            : 'border-void-600 focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20'
                          }`}
                        placeholder="your@company.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                          <Icon icon="mdi:alert-circle" className="text-xs" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-4 bg-void-800/50 border rounded-xl focus:outline-none transition-all text-white placeholder-gray-500 ${formErrors.phone
                            ? 'border-red-500/50 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20'
                            : 'border-void-600 focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20'
                          }`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {formErrors.phone && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                          <Icon icon="mdi:alert-circle" className="text-xs" />
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">
                        Company Name <span className="text-neon-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className={`w-full p-4 bg-void-800/50 border rounded-xl focus:outline-none transition-all text-white placeholder-gray-500 ${formErrors.company
                            ? 'border-red-500/50 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20'
                            : 'border-void-600 focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20'
                          }`}
                        placeholder="Your Company Name"
                      />
                      {formErrors.company && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                          <Icon icon="mdi:alert-circle" className="text-xs" />
                          {formErrors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  {showAdvancedForm && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-3">
                          Your Position
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          className="w-full p-4 bg-void-800/50 border border-void-600 rounded-xl focus:outline-none focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20 transition-all text-white placeholder-gray-500"
                          placeholder="CEO, CTO, Engineering Manager, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-3">
                          Industry
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full p-4 bg-void-800/50 border border-void-600 rounded-xl focus:outline-none focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20 transition-all text-white"
                        >
                          <option value="">Select your industry</option>
                          <option value="automotive">Automotive</option>
                          <option value="aerospace">Aerospace & Defense</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="energy">Energy & Utilities</option>
                          <option value="healthcare">Healthcare & Medical</option>
                          <option value="robotics">Robotics & Automation</option>
                          <option value="construction">Construction & Infrastructure</option>
                          <option value="marine">Marine & Offshore</option>
                          <option value="consumer">Consumer Products</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-6 pt-8 border-t border-void-700/30">
                  <h4 className="text-xl font-bold text-white flex items-center gap-3">
                    <Icon icon="mdi:briefcase" className="text-cyber-400" />
                    Project Details
                  </h4>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Subject <span className="text-neon-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full p-4 bg-void-800/50 border rounded-xl focus:outline-none transition-all text-white placeholder-gray-500 ${formErrors.subject
                          ? 'border-red-500/50 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20'
                          : 'border-void-600 focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20'
                        }`}
                      placeholder="Brief description of your project"
                    />
                    {formErrors.subject && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                        <Icon icon="mdi:alert-circle" className="text-xs" />
                        {formErrors.subject}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full p-4 bg-void-800/50 border border-void-600 rounded-xl focus:outline-none focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20 transition-all text-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-plus">$500,000+</option>
                      </select>
                      {getSelectedService() && (
                        <div className="mt-3 p-4 bg-neon-500/10 border border-neon-500/20 rounded-lg">
                          <p className="text-sm text-neon-300">
                            <strong>Service Timeline:</strong> {getSelectedService().estimatedTime} |
                            <strong> Complexity:</strong> {getSelectedService().complexity}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">{getSelectedService().description}</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full p-4 bg-void-800/50 border border-void-600 rounded-xl focus:outline-none focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20 transition-all text-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Rush project - +25% fee)</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="12-plus-months">12+ months</option>
                      </select>
                    </div>
                  </div>

                  {showAdvancedForm && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-3">
                          Priority Level
                        </label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          className="w-full p-4 bg-void-800/50 border border-void-600 rounded-xl focus:outline-none focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20 transition-all text-white"
                        >
                          <option value="normal">Normal Priority</option>
                          <option value="high">High Priority</option>
                          <option value="urgent">Urgent (24hr response)</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {showAdvancedForm && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-3">
                        Technical Project Description
                      </label>
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-4 bg-void-800/50 border border-void-600 rounded-xl focus:outline-none focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20 transition-all text-white placeholder-gray-500 resize-none"
                        placeholder="Provide technical specifications, requirements, constraints, and any existing documentation..."
                      ></textarea>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Message <span className="text-neon-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={showAdvancedForm ? 6 : 5}
                      className={`w-full p-4 bg-void-800/50 border rounded-xl focus:outline-none transition-all text-white placeholder-gray-500 resize-none ${formErrors.message
                          ? 'border-red-500/50 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20'
                          : 'border-void-600 focus:border-neon-500/50 focus:ring-2 focus:ring-neon-500/20'
                        }`}
                      placeholder="Tell us about your project requirements, goals, challenges, and any specific technical details..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                        <Icon icon="mdi:alert-circle" className="text-xs" />
                        {formErrors.message}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      {formData.message.length} characters (minimum 20 required)
                    </p>
                  </div>
                </div>

                {/* Support Tier Selection */}
                <div className="space-y-6 pt-8 border-t border-void-700/30">
                  <h4 className="text-xl font-bold text-white flex items-center gap-3">
                    <Icon icon="mdi:star-circle" className="text-quantum-400" />
                    Support Tier Selection
                  </h4>
                  <p className="text-gray-400">Choose your preferred support level for ongoing project assistance</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {supportTiers.map((tier) => (
                      <div
                        key={tier.id}
                        onClick={() => setFormData(prev => ({ ...prev, supportTier: tier.name.toLowerCase().replace(' ', '-') }))}
                        className={`group p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-[1.02] ${formData.supportTier === tier.name.toLowerCase().replace(' ', '-')
                            ? `border-${tier.color}-500 bg-gradient-to-br from-${tier.color}-500/10 to-${tier.color}-600/10 shadow-lg shadow-${tier.color}-500/20`
                            : 'border-void-600 hover:border-void-500 bg-void-800/30'
                          }`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${formData.supportTier === tier.name.toLowerCase().replace(' ', '-')
                              ? `bg-${tier.color}-500/20`
                              : 'bg-void-700/50 group-hover:bg-void-600/50'
                            }`}>
                            <Icon icon={tier.icon} className={`text-2xl text-${tier.color}-500`} />
                          </div>
                          <h4 className="font-bold text-white text-lg">{tier.name}</h4>
                        </div>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{tier.description}</p>
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-gray-300">
                            <strong>Response:</strong> {tier.responseTime}
                          </p>
                          <p className="text-sm text-gray-300">
                            <strong>Availability:</strong> {tier.availability}
                          </p>
                        </div>
                        <p className={`text-${tier.color}-500 font-bold text-xl`}>{tier.price}</p>
                        {formData.supportTier === tier.name.toLowerCase().replace(' ', '-') && (
                          <div className="mt-4 pt-4 border-t border-neon-500/20">
                            <div className="flex items-center gap-2 text-neon-400 text-sm">
                              <Icon icon="mdi:check-circle" />
                              <span>Selected Tier</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Options */}
                {showAdvancedForm && (
                  <div className="space-y-6 pt-8 border-t border-void-700/30">
                    <h4 className="text-xl font-bold text-white flex items-center gap-3">
                      <Icon icon="mdi:shield-check" className="text-quantum-400" />
                      Additional Options
                    </h4>

                    <div className="space-y-4">
                      <label className="flex items-center gap-4 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="nda"
                          checked={formData.nda}
                          onChange={handleChange}
                          className="w-5 h-5 bg-void-800/50 border border-void-600 rounded focus:ring-2 focus:ring-neon-500/20 text-neon-500"
                        />
                        <div className="flex items-center gap-3">
                          <Icon icon="mdi:file-document-alert" className="text-red-400" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            I require an NDA to be signed before project discussion
                          </span>
                        </div>
                      </label>

                      <label className="flex items-center gap-4 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleChange}
                          className="w-5 h-5 bg-void-800/50 border border-void-600 rounded focus:ring-2 focus:ring-neon-500/20 text-neon-500"
                        />
                        <div className="flex items-center gap-3">
                          <Icon icon="mdi:email-newsletter" className="text-cyber-400" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            Subscribe to our engineering insights newsletter
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {/* Submit Section */}
                <div className="pt-8 border-t border-void-700/30">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className="flex-1 px-8 py-5 bg-gradient-to-r from-neon-500 to-cyber-500 text-white font-bold rounded-xl hover:from-neon-600 hover:to-cyber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-neon-500/30 hover:shadow-neon-500/50 hover:scale-[1.02]"
                    >
                      {formStatus.submitting ? (
                        <>
                          <Icon icon="mdi:loading" className="animate-spin text-xl" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Icon icon="mdi:send" className="text-xl" />
                          Send Project Inquiry
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({
                        name: "", email: "", phone: "", company: "", position: "", industry: "",
                        subject: "", serviceType: "", budget: "", timeline: "", projectDescription: "",
                        message: "", supportTier: "standard", priority: "normal", nda: false, newsletter: true
                      })}
                      className="px-8 py-5 border border-void-600/50 text-gray-300 font-bold rounded-xl hover:border-neon-500/50 hover:text-neon-400 hover:bg-neon-500/5 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]"
                    >
                      <Icon icon="mdi:refresh" className="text-xl" />
                      Reset Form
                    </button>

                    <button
                      type="button"
                      className="px-8 py-5 border border-cyber-600/50 text-cyber-300 font-bold rounded-xl hover:border-cyber-500/50 hover:text-cyber-400 hover:bg-cyber-500/5 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]"
                    >
                      <Icon icon="mdi:phone" className="text-xl" />
                      Call: +1 (555) 123-4567
                    </button>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-void-800/50 to-void-700/50 rounded-xl border border-void-600/50">
                    <div className="flex items-center gap-4">
                      <Icon icon="mdi:shield-check" className="text-green-400 text-2xl" />
                      <div>
                        <p className="text-white font-semibold">Secure & Confidential</p>
                        <p className="text-gray-400 text-sm">Your information is encrypted and will never be shared. We typically respond within {contactStats.averageResponseTime}.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-void-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
              <span className="text-neon-500">Frequently</span> Asked Questions
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-neon-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and policies.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            {['general', 'services', 'technical', 'pricing', 'security'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFAQCategory(category)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${activeFAQCategory === category
                    ? 'bg-neon-500 text-white'
                    : 'bg-void-800/50 border border-void-600 text-gray-300 hover:border-neon-500/50'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl p-4 sm:p-6 hover:border-neon-500/30 transition-all duration-300"
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 sm:mb-3">{faq.question}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-red-900/20 via-red-800/20 to-red-900/20 border-t border-red-500/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Icon icon="mdi:alert-circle" className="text-red-500 text-2xl sm:text-3xl animate-pulse" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-white">Emergency Support</h3>
                <p className="text-sm sm:text-base text-gray-300">24/7 critical system support available</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="tel:+15559111MECH"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Icon icon="mdi:phone" className="text-sm sm:text-base" />
                <span className="hidden sm:inline">Call Emergency: </span>+1 (555) 911-MECH
              </a>
              <a
                href="mailto:emergency@mechnovate.com"
                className="px-4 sm:px-6 py-2.5 sm:py-3 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500/10 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Icon icon="mdi:email" className="text-sm sm:text-base" />
                <span className="truncate">emergency@mechnovate.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
