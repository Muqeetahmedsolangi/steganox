import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExpertiseSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef([]);
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const platformData = [
    {
      id: 'mobile',
      name: 'MOBILE',
      technologies: [
        { name: 'Android', icon: 'logos:android-icon', color: '#3DDC84' },
        { name: 'Swift', icon: 'logos:swift', color: '#FA7343' },
        { name: 'React Native', icon: 'logos:react', color: '#61DAFB' },
        { name: 'Flutter', icon: 'logos:flutter', color: '#02569B' },
        { name: 'Ionic', icon: 'logos:ionic-icon', color: '#3880FF' },
        { name: 'Kotlin', icon: 'logos:kotlin-icon', color: '#7F52FF' },
        { name: 'iOS', icon: 'ion:logo-apple', color: '#000000' },
        { name: 'ObjectiveC', icon: 'simple-icons:objectivec', color: '#438EFF' },
        { name: 'Titanium', icon: 'simple-icons:appcelerator', color: '#AC162C' },
        { name: 'Phone Gap', icon: 'logos:cordova', color: '#E8E8E8' },
        { name: 'Xamarin', icon: 'devicon:xamarin', color: '#3498DB' }
      ]
    },
    {
      id: 'frontend',
      name: 'FRONT END',
      technologies: [
        { name: 'React', icon: 'logos:react', color: '#61DAFB' },
        { name: 'Vue.js', icon: 'logos:vue', color: '#4FC08D' },
        { name: 'Angular', icon: 'logos:angular-icon', color: '#DD0031' },
        { name: 'Next.js', icon: 'logos:nextjs-icon', color: '#000000' },
        { name: 'TypeScript', icon: 'logos:typescript-icon', color: '#3178C6' },
        { name: 'JavaScript', icon: 'logos:javascript', color: '#F7DF1E' },
        { name: 'HTML5', icon: 'logos:html-5', color: '#E34F26' },
        { name: 'CSS3', icon: 'logos:css-3', color: '#1572B6' },
        { name: 'Sass', icon: 'logos:sass', color: '#CC6699' },
        { name: 'Tailwind', icon: 'logos:tailwindcss-icon', color: '#06B6D4' },
        { name: 'Bootstrap', icon: 'logos:bootstrap', color: '#7952B3' }
      ]
    },
    {
      id: 'database',
      name: 'DATABASE',
      technologies: [
        { name: 'MongoDB', icon: 'logos:mongodb-icon', color: '#47A248' },
        { name: 'MySQL', icon: 'logos:mysql-icon', color: '#4479A1' },
        { name: 'PostgreSQL', icon: 'logos:postgresql', color: '#336791' },
        { name: 'Redis', icon: 'logos:redis', color: '#DC382D' },
        { name: 'Firebase', icon: 'logos:firebase', color: '#FFCA28' },
        { name: 'DynamoDB', icon: 'logos:aws-dynamodb', color: '#3F48CC' },
        { name: 'SQLite', icon: 'logos:sqlite', color: '#003B57' },
        { name: 'Oracle', icon: 'logos:oracle', color: '#F80000' },
        { name: 'Elasticsearch', icon: 'logos:elasticsearch', color: '#005571' },
        { name: 'Cassandra', icon: 'logos:cassandra', color: '#1287B1' },
        { name: 'Neo4j', icon: 'logos:neo4j', color: '#008CC1' }
      ]
    },
    {
      id: 'backend',
      name: 'BACKEND',
      technologies: [
        { name: 'Node.js', icon: 'logos:nodejs-icon', color: '#339933' },
        { name: 'Python', icon: 'logos:python', color: '#3776AB' },
        { name: 'Java', icon: 'logos:java', color: '#007396' },
        { name: 'PHP', icon: 'logos:php', color: '#777BB4' },
        { name: 'C#', icon: 'logos:c-sharp', color: '#239120' },
        { name: 'Ruby', icon: 'logos:ruby', color: '#CC342D' },
        { name: 'Go', icon: 'logos:go', color: '#00ADD8' },
        { name: 'Django', icon: 'logos:django-icon', color: '#092E20' },
        { name: 'Express', icon: 'logos:express', color: '#000000' },
        { name: 'Spring', icon: 'logos:spring-icon', color: '#6DB33F' },
        { name: 'Laravel', icon: 'logos:laravel', color: '#FF2D20' }
      ]
    },
    {
      id: 'cms',
      name: 'CMS',
      technologies: [
        { name: 'WordPress', icon: 'logos:wordpress-icon', color: '#21759B' },
        { name: 'Drupal', icon: 'logos:drupal-icon', color: '#0678BE' },
        { name: 'Joomla', icon: 'logos:joomla', color: '#5091CD' },
        { name: 'Shopify', icon: 'logos:shopify', color: '#7AB55C' },
        { name: 'Magento', icon: 'logos:magento', color: '#EE672F' },
        { name: 'Strapi', icon: 'logos:strapi-icon', color: '#2E7EEA' },
        { name: 'Contentful', icon: 'logos:contentful', color: '#2478CC' },
        { name: 'Ghost', icon: 'logos:ghost', color: '#738A94' },
        { name: 'Webflow', icon: 'logos:webflow', color: '#4353FF' },
        { name: 'Sanity', icon: 'logos:sanity', color: '#F03E2F' },
        { name: 'Prismic', icon: 'logos:prismic-icon', color: '#5163BA' }
      ]
    },
    {
      id: 'devops',
      name: 'INFRA AND DEVOPS',
      technologies: [
        { name: 'AWS', icon: 'logos:aws', color: '#FF9900' },
        { name: 'Azure', icon: 'logos:microsoft-azure', color: '#0078D4' },
        { name: 'GCP', icon: 'logos:google-cloud', color: '#4285F4' },
        { name: 'Docker', icon: 'logos:docker-icon', color: '#2496ED' },
        { name: 'Kubernetes', icon: 'logos:kubernetes', color: '#326CE5' },
        { name: 'Jenkins', icon: 'logos:jenkins', color: '#D33833' },
        { name: 'GitLab CI', icon: 'logos:gitlab', color: '#FC6D26' },
        { name: 'Terraform', icon: 'logos:terraform-icon', color: '#623CE4' },
        { name: 'Ansible', icon: 'logos:ansible', color: '#EE0000' },
        { name: 'Nginx', icon: 'logos:nginx', color: '#009639' },
        { name: 'Apache', icon: 'logos:apache', color: '#D22128' }
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // Tabs animation
      tabsRef.current.forEach((tab, index) => {
        if (tab) {
          gsap.fromTo(tab,
            {
              opacity: 0,
              y: 30
            },
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

  // Animate content when tab changes
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        {
          opacity: 0,
          y: 20,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out"
        }
      );
    }
  }, [activeTab]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Title section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="font-bold mb-4 md:mb-6 text-gray-900"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.1'
            }}
          >
            BUILD YOUR APPS FOR ANY PLATFORM
          </h2>
        </div>

        {/* Platform tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
          {platformData.map((platform, index) => (
            <button
              key={platform.id}
              ref={el => tabsRef.current[index] = el}
              onClick={() => setActiveTab(index)}
              className={`px-4 md:px-8 py-3 md:py-4 font-bold text-sm md:text-base transition-all duration-300 relative ${
                activeTab === index 
                  ? 'text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{
                backgroundColor: activeTab === index ? '#0891b2' : 'transparent',
                clipPath: activeTab === index ? 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' : 'none'
              }}
            >
              {platform.name}
            </button>
          ))}
        </div>

        {/* Technology grid */}
        <div 
          ref={contentRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {platformData[activeTab].technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-2"
            >
              {/* Technology icon */}
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 group-hover:shadow-lg"
                style={{ 
                  backgroundColor: '#2c3e50',
                  boxShadow: `0 4px 20px ${tech.color}20`
                }}
              >
                <Icon 
                  icon={tech.icon} 
                  className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
              </div>
              
              {/* Technology name */}
              <span 
                className="text-xs md:text-sm font-medium text-center text-gray-900 group-hover:text-gray-700 transition-colors duration-300"
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom gradient line */}
        <div className="mt-16 h-1 w-full bg-gradient-to-r from-transparent via-cyan-600 to-transparent opacity-30"></div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
