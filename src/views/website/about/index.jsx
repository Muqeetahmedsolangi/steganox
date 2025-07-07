import { useEffect, useRef } from 'react';
import { Icon } from "@iconify/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import engineeringTeam from '../../../assets/images/auth/pic5.png';
import MainHeading from '../../../components/Heading/MainHeading';
import { aboutTeamMembers, aboutTimeline, aboutValues, aboutStats } from '../../../constant/data';
import { useNavigate } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function index() {
    const sectionRef = useRef(null);
    const statsRef = useRef([]);
    const teamRefs = useRef([]);
    const timelineRefs = useRef([]);
    const navigate = useNavigate();

    // Using imported data from data.js
    const teamMembers = aboutTeamMembers;
    const timeline = aboutTimeline;
    const values = aboutValues;
    const stats = aboutStats;

    useEffect(() => {
        // Animate stats counting up
        statsRef.current.forEach((stat, index) => {
            if (stat && stats[index]) {
                const value = stats[index].value;
                const unit = stats[index].unit || '';
                
                gsap.fromTo(stat, {
                    textContent: 0
                }, {
                    textContent: value,
                    duration: 2.5,
                    ease: "power2.out",
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: stat,
                        start: "top 80%",
                        once: true
                    },
                    onUpdate: function() {
                        const currentValue = Math.ceil(this.targets()[0].textContent);
                        stat.textContent = currentValue + unit;
                    }
                });
            }
        });

        // Animate team members
        teamRefs.current.forEach((member, index) => {
            if (member) {
                gsap.fromTo(
                    member,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: member,
                            start: "top 85%",
                            once: true
                        }
                    }
                );
            }
        });

        // Animate timeline items
        timelineRefs.current.forEach((item, index) => {
            if (item) {
                gsap.fromTo(
                    item,
                    { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        delay: index * 0.3,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            once: true
                        }
                    }
                );
            }
        });
    }, []);

    return (
        <div className="bg-void-950 text-white">
            {/* Hero Banner */}
            <div className="w-full">
                <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
                    {/* Dark overlay with mechanical pattern */}
                    <div className="absolute inset-0 bg-void-900 bg-opacity-90 z-10">
                        <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
                    </div>
                    
                    {/* Floating mechanical elements */}
                    <div className="absolute inset-0 z-10 overflow-hidden">
                        <Icon 
                            icon="mdi:cog" 
                            className="absolute top-10 sm:top-20 left-10 sm:left-20 text-neon-500/10 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-spin-slow"
                        />
                        <Icon 
                            icon="mdi:cog-outline" 
                            className="absolute bottom-5 sm:bottom-10 right-20 sm:right-40 text-neon-500/10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 animate-spin-slow-reverse"
                        />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-neon-500 via-primary to-primary-600 bg-clip-text text-transparent leading-tight">
                            About MechNovate
                        </h1>
                        <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-300">
                            <span>Home</span>
                            <Icon icon="mdi:chevron-right" className="w-4 h-4 sm:w-5 sm:h-5 text-neon-500" />
                            <span className="text-neon-500">About</span>
                        </div>
                    </div>
                </div>
            </div>

                        {/* Company Story Section */}
            <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-void-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="mb-4 sm:mb-6">
                                <h3 className="text-neon-500 text-base sm:text-lg font-semibold mb-2 sm:mb-3">Our Story</h3>
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
                                    Software Excellence Through <span className="text-neon-500">Innovation</span>
                                </h2>
                            </div>
                            
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                                Founded in 2010, MechNovate emerged from a vision to transform the mechanical engineering landscape. What began as a small team of passionate engineers has grown into an industry leader known for precision, innovation, and reliability.
                            </p>
                            
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                                Our journey has been defined by a relentless pursuit of excellence, tackling complex engineering challenges across industries from automotive and aerospace to manufacturing and renewable energy.
                            </p>
                            
                            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                                Today, MechNovate stands at the forefront of mechanical innovation, with a global team of experts dedicated to creating solutions that drive industry forward.
                            </p>

                            {/* Stats Row - More Mobile Friendly */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center p-2 sm:p-3 bg-void-800/10 rounded-lg border border-void-700/50 hover:border-neon-500/30 transition-all duration-300">
                                        <Icon icon={stat.icon} className="text-neon-500 text-lg sm:text-xl md:text-2xl mx-auto mb-1" />
                                        <h4 
                                            ref={el => statsRef.current[index] = el}
                                            className="text-sm sm:text-lg md:text-xl font-bold text-neon-500 mb-0.5"
                                        >
                                            {stat.value}{stat.unit || ''}
                                        </h4>
                                        <p className="text-xs text-gray-300 leading-tight">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="order-1 lg:order-2">
                            <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none">
                                {/* Smaller corner decorations */}
                                <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-neon-500 opacity-60"></div>
                                <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-neon-500 opacity-60"></div>
                                
                                <img 
                                    src={engineeringTeam} 
                                    alt="MechNovate Software Team" 
                                    className="rounded-lg shadow-xl w-full h-auto object-cover z-10 relative max-h-64 sm:max-h-80 md:max-h-96"
                                />
                                
                                {/* Smaller badge */}
                                <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 bg-neon-500 p-2 sm:p-3 rounded-lg shadow-lg">
                                    <p className="text-white font-bold text-sm sm:text-base">12+ Years</p>
                                    <p className="text-white text-xs">Software Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-void-900 via-void-950 to-void-900 relative">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-neon-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyber-500/10 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-tech-grid opacity-5" />
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
                    <MainHeading title="Our Purpose" text="Vision & Mission" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                        <div className="bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-neon-500/30 transition-all duration-300 shadow-lg">
                            <div className="mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-neon-500/20 flex items-center justify-center mb-4 sm:mb-6">
                                    <Icon icon="mdi:eye" className="text-neon-500 text-2xl sm:text-3xl" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Vision</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                To be the global leader in innovative mechanical engineering solutions, setting new standards for precision, efficiency, and sustainability that drive industry transformation worldwide.
                            </p>
                            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-void-700/50">
                                <p className="text-neon-500 italic text-sm sm:text-base">
                                    "Software tomorrow's possibilities today."
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-cyber-500/30 transition-all duration-300 shadow-lg">
                            <div className="mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-cyber-500/20 flex items-center justify-center mb-4 sm:mb-6">
                                    <Icon icon="mdi:flag" className="text-cyber-500 text-2xl sm:text-3xl" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Mission</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                To deliver exceptional mechanical engineering solutions through innovation, expertise, and collaboration, empowering our clients to overcome complex challenges and achieve breakthrough performance in their industries.
                            </p>
                            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-void-700/50">
                                <p className="text-cyber-500 italic text-sm sm:text-base">
                                    "Excellence in every component, innovation in every design."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="py-12 sm:py-16 md:py-20 bg-void-950">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <MainHeading title="Our Foundation" text="Core Values" />
                        <p className="text-sm sm:text-base text-gray-400 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
                            These principles guide every decision we make and every solution we create at MechNovate.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {values.map((value, index) => (
                            <div 
                                key={index}
                                className="bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl p-4 sm:p-6 hover:border-neon-500/30 transition-all duration-300 shadow-md"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-neon-500/20 flex items-center justify-center mb-4 sm:mb-6">
                                    <Icon icon={value.icon} className="text-neon-500 text-2xl sm:text-3xl" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{value.title}</h3>
                                <p className="text-sm sm:text-base text-gray-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-void-900 to-void-950 relative">
                <div className="absolute inset-0 bg-tech-grid opacity-5" />
                
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <MainHeading title="Our Experts" text="Meet Our Team" />
                        <p className="text-sm sm:text-base text-gray-400 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
                            Our team of experts brings together decades of experience in mechanical engineering and innovation.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index}
                                ref={el => teamRefs.current[index] = el}
                                className="group bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl overflow-hidden hover:border-neon-500/30 transition-all duration-300 shadow-md"
                            >
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-48 sm:h-56 md:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-void-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Social links */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex justify-center space-x-2 sm:space-x-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <a href={member.social.linkedin} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neon-500 flex items-center justify-center text-white hover:bg-neon-600 transition-colors">
                                            <Icon icon="mdi:linkedin" className="text-sm sm:text-lg" />
                                        </a>
                                        <a href={member.social.twitter} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neon-500 flex items-center justify-center text-white hover:bg-neon-600 transition-colors">
                                            <Icon icon="mdi:twitter" className="text-sm sm:text-lg" />
                                        </a>
                                        <a href={member.social.github} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neon-500 flex items-center justify-center text-white hover:bg-neon-600 transition-colors">
                                            <Icon icon="mdi:github" className="text-sm sm:text-lg" />
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-neon-500 mb-2 sm:mb-3 text-sm sm:text-base">{member.position}</p>
                                    
                                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Icon icon="mdi:briefcase" className="text-neon-500 text-sm" />
                                            <span>{member.expertise}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="mdi:clock-time-four" className="text-neon-500 text-sm" />
                                            <span>{member.experience}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="mdi:school" className="text-neon-500 text-sm" />
                                            <span className="truncate">{member.education}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Company Timeline */}
            <div className="py-12 sm:py-16 md:py-20 bg-void-950">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <MainHeading title="Our History" text="Our Journey" />
                        <p className="text-sm sm:text-base text-gray-400 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
                            The key milestones that have shaped MechNovate's growth and success over the years.
                        </p>
                    </div>
                    
                    <div className="relative">
                        {/* Timeline line - Hidden on mobile, visible on larger screens */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neon-500/30"></div>
                        
                        <div className="space-y-8 sm:space-y-10 md:space-y-12">
                            {timeline.map((item, index) => (
                                <div 
                                    key={index}
                                    ref={el => timelineRefs.current[index] = el}
                                    className="relative"
                                >
                                    {/* Mobile and tablet layout */}
                                    <div className="md:hidden">
                                        <div className="bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl p-4 sm:p-6 hover:border-neon-500/30 transition-all duration-300 shadow-md">
                                            <div className="inline-block bg-neon-500/20 text-neon-500 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                                                {item.year}
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-400">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Desktop layout */}
                                    <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                        {/* Timeline dot */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-neon-500 border-4 border-void-950"></div>
                                        
                                        {/* Content */}
                                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 lg:pr-12 text-right' : 'pl-8 lg:pl-12'}`}>
                                            <div className="bg-gradient-to-br from-void-800/50 to-void-900/50 backdrop-blur-xl border border-void-700/50 rounded-xl p-4 sm:p-6 hover:border-neon-500/30 transition-all duration-300 shadow-md">
                                                <div className="inline-block bg-neon-500/20 text-neon-500 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                                                    {item.year}
                                                </div>
                                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                                                <p className="text-sm md:text-base text-gray-400">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-void-900 via-void-950 to-void-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-neon-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyber-500/10 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-tech-grid opacity-5" />
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                            Ready to Engineer Your <span className="text-neon-500">Success</span>?
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8">
                            Partner with MechNovate for innovative mechanical engineering solutions that drive your business forward.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                            <button onClick={() => navigate('/contact-us')} className="px-6 sm:px-8 py-3 sm:py-4 bg-neon-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-500/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                                Contact Our Team
                            </button>
                            <button onClick={() => navigate('/services')} className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-neon-500/50 rounded-lg font-semibold text-neon-500 hover:bg-neon-500/10 hover:border-neon-500 transition-all duration-300 text-sm sm:text-base">
                                View Our Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
