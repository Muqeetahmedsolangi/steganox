export const menuItems = [
  {
    isHeadr: true,
    title: 'menu',
  },
  {
    title: 'Dashboard',
    icon: 'heroicons-outline:home',
    link: '/dashboard',
  },
  {
    title: 'API Token',
    icon: 'bitcoin-icons:key-filled',
    link: '/dashboard/api',
  },
  {
    title: 'Address',
    icon: 'maki:warehouse',
    link: '/dashboard/address',
  },
  {
    title: 'Bookings',
    icon: 'material-symbols:book-sharp',
    link: '/dashboard/bookings',
  },
  {
    title: 'Pickups ',
    icon: 'fa-solid:truck-pickup',
    link: '/dashboard/pickup',
  },
  {
    title: 'Invoices',
    icon: 'iconamoon:invoice-thin',
    link: '/dashboard/invoice',
  },
  // {
  //   title: 'Reports',
  //   icon: 'mdi:file',
  //   link: '/dashboard/report',
  // },
  {
    title: 'My Profile',
    icon: 'gg:profile',
    link: '/dashboard/profile',
  },
];

export const topMenu = [];

export const notifications = [];

export const message = [];

export const colors = {
  primary: '#4669FA',
  secondary: '#A0AEC0',
  danger: '#F1595C',
  black: '#111112',
  warning: '#FA916B',
  info: '#0CE7FA',
  light: '#425466',
  success: '#50C793',
  'gray-f7': '#F7F8FC',
  dark: '#1E293B',
  'dark-gray': '#0F172A',
  gray: '#68768A',
  gray2: '#EEF1F9',
  'dark-light': '#CBD5E1',
};

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
};

export const topFilterLists = [];

export const bottomFilterLists = [];

export const meets = [];

export const files = [];

export const tokenExpiry = [
  { value: 7, label: '7 Days' },
  { value: 30, label: '1 Month' },
  { value: 90, label: '3 Months' },
  { value: 180, label: '6 Months' },
  { value: 365, label: '1 year' },
  { value: 1830, label: '5 year' },
];

// Q HUB INFORMATION - Software Company Data
export const companyInfo = {
  name: "Q HUB INFORMATION",
  tagline: "Transforming Ideas into Digital Excellence",
  description: "We are a leading software development company specializing in custom enterprise solutions, mobile applications, and cloud-based platforms that drive business growth.",
  founded: "2018",
  employees: "150+",
  projectsCompleted: "500+",
  clientsWorldwide: "120+",
  satisfaction: "98%"
};

export const services = [
  {
    id: 1,
    icon: "carbon:application-web",
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and scalable architectures for optimal performance and user experience.",
    features: ["Responsive Design", "Progressive Web Apps", "E-commerce Platforms", "CMS Solutions"],
    gradient: "from-primary-500 to-primary-600"
  },
  {
    id: 2,
    icon: "carbon:mobile-check",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
    gradient: "from-secondary-500 to-secondary-600"
  },
  {
    id: 3,
    icon: "carbon:cloud-computing",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services leveraging AWS, Azure, and Google Cloud platforms.",
    features: ["Cloud Migration", "Infrastructure as Code", "Serverless Architecture", "DevOps Implementation"],
    gradient: "from-accent-500 to-accent-600"
  },
  {
    id: 4,
    icon: "carbon:machine-learning",
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence and machine learning to automate processes and derive insights.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbot Development"],
    gradient: "from-primary-500 to-secondary-500"
  },
  {
    id: 5,
    icon: "carbon:api",
    title: "API Development",
    description: "Robust and secure API development for seamless integration between applications and third-party services.",
    features: ["RESTful APIs", "GraphQL", "Microservices", "API Gateway"],
    gradient: "from-secondary-500 to-accent-500"
  },
  {
    id: 6,
    icon: "carbon:security",
    title: "Cybersecurity Solutions",
    description: "Comprehensive security services to protect your applications and data from evolving cyber threats.",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Secure Development"],
    gradient: "from-accent-500 to-primary-500"
  }
];

export const technologies = {
  frontend: [
    { name: "React", icon: "logos:react", level: 95 },
    { name: "Angular", icon: "logos:angular-icon", level: 92 },
    { name: "Vue.js", icon: "logos:vue", level: 88 },
    { name: "Next.js", icon: "logos:nextjs-icon", level: 90 },
    { name: "TypeScript", icon: "logos:typescript-icon", level: 93 },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: 91 }
  ],
  backend: [
    { name: "Node.js", icon: "logos:nodejs-icon", level: 94 },
    { name: "Python", icon: "logos:python", level: 92 },
    { name: "Java", icon: "logos:java", level: 89 },
    { name: ".NET Core", icon: "logos:dotnet", level: 87 },
    { name: "PHP", icon: "logos:php", level: 85 },
    { name: "Go", icon: "logos:go", level: 83 }
  ],
  database: [
    { name: "PostgreSQL", icon: "logos:postgresql", level: 93 },
    { name: "MongoDB", icon: "logos:mongodb-icon", level: 91 },
    { name: "MySQL", icon: "logos:mysql-icon", level: 90 },
    { name: "Redis", icon: "logos:redis", level: 88 },
    { name: "Elasticsearch", icon: "logos:elasticsearch", level: 86 },
    { name: "DynamoDB", icon: "simple-icons:amazondynamodb", level: 84 }
  ],
  cloud: [
    { name: "AWS", icon: "logos:aws", level: 95 },
    { name: "Azure", icon: "logos:microsoft-azure", level: 92 },
    { name: "Google Cloud", icon: "logos:google-cloud", level: 89 },
    { name: "Docker", icon: "logos:docker-icon", level: 93 },
    { name: "Kubernetes", icon: "logos:kubernetes", level: 90 },
    { name: "Terraform", icon: "logos:terraform-icon", level: 87 }
  ],
  tools: [
    { name: "Git", icon: "logos:git-icon", level: 95 },
    { name: "Jenkins", icon: "logos:jenkins", level: 89 },
    { name: "GitLab CI", icon: "logos:gitlab", level: 88 },
    { name: "Jira", icon: "logos:jira", level: 92 },
    { name: "Selenium", icon: "logos:selenium", level: 86 },
    { name: "Postman", icon: "simple-icons:postman", level: 94 }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CTO",
    company: "FinTech Solutions Ltd",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "Q HUB INFORMATION delivered an exceptional mobile banking platform that exceeded our expectations. Their expertise in secure payment integration helped us achieve PCI compliance seamlessly.",
    rating: 5,
    project: "Mobile Banking Platform"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Head of IT",
    company: "Global Retail Corp",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The e-commerce platform they built handles millions of transactions daily without any downtime. Their scalable architecture and cloud expertise transformed our business.",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 3,
    name: "Elena Watson",
    position: "VP of Engineering",
    company: "HealthTech Innovations",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "Their team delivered a HIPAA-compliant telemedicine platform ahead of schedule. The attention to security and regulatory requirements was outstanding.",
    rating: 5,
    project: "Telemedicine Platform"
  },
  {
    id: 4,
    name: "David Kim",
    position: "Product Manager",
    company: "LogisticsPro",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "Q HUB's AI-powered logistics solution reduced our delivery times by 40%. Their machine learning expertise provided insights we never thought possible.",
    rating: 5,
    project: "AI Logistics Platform"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Director of Operations",
    company: "EduTech Global",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    content: "The learning management system they built scaled from 1,000 to 100,000 users seamlessly. Exceptional technical expertise and project management.",
    rating: 5,
    project: "Learning Management System"
  },
  {
    id: 6,
    name: "James Anderson",
    position: "CEO",
    company: "StartupHub Inc",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    content: "Q HUB INFORMATION transformed our MVP into a full-featured SaaS platform. Their agile development approach and technical guidance were invaluable.",
    rating: 5,
    project: "SaaS Platform Development"
  }
];

export const caseStudies = [
  {
    id: 1,
    title: "Enterprise E-commerce Platform with Microservices Architecture",
    client: "Global Retail Corporation",
    industry: "E-commerce",
    challenge: "Build a scalable, high-performance e-commerce platform capable of handling millions of concurrent users during peak shopping seasons with real-time inventory management and personalized recommendations",
    solution: "Developed a cloud-native microservices architecture using containerization, implemented advanced caching strategies, AI-powered recommendation engine, and automated CI/CD pipelines for seamless deployment and scaling",
    results: ["99.9% uptime achieved", "3x faster page load times", "500% increase in concurrent users", "40% boost in conversion rates"],
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "GraphQL"],
    duration: "14 months",
    teamSize: "12 developers",
    status: "Live",
    year: "2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    scope: {
      targetSectors: ["E-commerce", "Retail", "B2B Marketplace", "Multi-vendor Platforms"],
      projectTypes: ["Full-stack Development", "Cloud Architecture", "DevOps", "AI Integration", "Mobile Apps"],
      projectSources: ["Enterprise Clients", "Startup Partnerships", "Digital Transformation Projects"]
    },
    approach: [
      "Architecture Design: Designed scalable microservices architecture with event-driven communication",
      "Frontend Development: Built responsive React application with modern UI/UX design patterns",
      "Backend Development: Implemented robust APIs with Node.js and GraphQL for efficient data fetching",
      "Cloud Infrastructure: Deployed on AWS with auto-scaling, load balancing, and disaster recovery",
      "DevOps Implementation: Set up CI/CD pipelines with automated testing and deployment strategies"
    ],
    keyResults: [
      "Successfully handled Black Friday traffic with 10M+ concurrent users without downtime",
      "Reduced infrastructure costs by 35% through optimized cloud resource management",
      "Achieved 99.9% uptime with automated monitoring and self-healing systems",
      "Implemented real-time analytics dashboard for business intelligence and decision making"
    ],
    challenges: [
      {
        challenge: "Scalability: Platform needed to handle massive traffic spikes during sales events",
        resolution: "Implemented auto-scaling with Kubernetes and optimized database queries with Redis caching"
      },
      {
        challenge: "Data Consistency: Maintaining data integrity across multiple microservices",
        resolution: "Used event sourcing and CQRS patterns with distributed transaction management"
      },
      {
        challenge: "Performance: Slow page load times affecting user experience and conversions",
        resolution: "Implemented CDN, image optimization, lazy loading, and advanced caching strategies"
      }
    ],
    outcome: "The platform revolutionized the client's online presence, resulting in 500% increase in online sales, improved customer satisfaction scores, and established a foundation for future digital innovations. The solution became a reference architecture for other enterprise e-commerce implementations.",
    isClientHighlight: true
  },
  {
    id: 2,
    title: "AI-Powered Mobile Banking Application",
    client: "FinTech Startup",
    industry: "Financial Technology",
    challenge: "Create a secure, user-friendly mobile banking app with AI-driven financial insights, fraud detection, and personalized financial advice for millennials and Gen Z users",
    solution: "Developed a cross-platform mobile application using React Native with biometric authentication, real-time transaction monitoring, AI-powered spending analysis, and integrated chatbot for customer support",
    results: ["1M+ downloads in 6 months", "4.8/5 app store rating", "60% reduction in fraud cases", "80% user retention rate"],
    technologies: ["React Native", "Python", "TensorFlow", "AWS Lambda", "PostgreSQL", "Firebase", "Stripe API"],
    duration: "8 months",
    teamSize: "8 developers",
    status: "Live",
    year: "2024",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
    scope: {
      targetSectors: ["Banking", "FinTech", "Digital Payments", "Personal Finance"],
      projectTypes: ["Mobile Development", "AI/ML Integration", "Security Implementation", "API Development"],
      projectSources: ["FinTech Startups", "Traditional Banks", "Payment Processors"]
    },
    approach: [
      "User Research: Conducted extensive user interviews and market research to understand target demographics",
      "Security First: Implemented multi-layer security with biometric authentication and end-to-end encryption",
      "AI Integration: Developed machine learning models for fraud detection and personalized financial insights",
      "Cross-Platform Development: Used React Native for efficient iOS and Android development",
      "Compliance: Ensured PCI DSS compliance and implemented regulatory requirements"
    ],
    keyResults: [
      "Achieved 1M+ downloads within 6 months of launch with 4.8/5 average rating",
      "Reduced fraudulent transactions by 60% through AI-powered detection algorithms",
      "Increased user engagement by 150% with personalized financial recommendations",
      "Processed over $100M in transactions with zero security breaches"
    ],
    challenges: [
      {
        challenge: "Security: Ensuring bank-level security while maintaining user-friendly experience",
        resolution: "Implemented biometric authentication, tokenization, and real-time fraud monitoring"
      },
      {
        challenge: "Regulatory Compliance: Meeting strict financial industry regulations and standards",
        resolution: "Worked with compliance experts to implement PCI DSS and banking regulations"
      },
      {
        challenge: "Performance: Ensuring fast response times for financial transactions",
        resolution: "Optimized API calls, implemented caching, and used edge computing for low latency"
      }
    ],
    outcome: "The banking app transformed digital banking for young users, achieving rapid user adoption and setting new standards for mobile financial services. The AI-powered features provided unprecedented insights into user spending patterns and financial health."
  },
  {
    id: 3,
    title: "Cloud-Native Healthcare Management System",
    client: "Healthcare Network",
    industry: "Healthcare Technology",
    challenge: "Develop a comprehensive healthcare management platform that integrates patient records, appointment scheduling, telemedicine, and billing across multiple hospitals and clinics",
    solution: "Built a HIPAA-compliant cloud-native platform using microservices architecture with real-time data synchronization, secure video conferencing, and automated billing integration",
    results: ["50% reduction in administrative tasks", "90% faster patient check-in", "99.99% data security compliance", "200% increase in telemedicine adoption"],
    technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "WebRTC", "AWS", "Docker", "Terraform"],
    duration: "12 months",
    teamSize: "15 developers",
    status: "Live",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    scope: {
      targetSectors: ["Healthcare", "Telemedicine", "Medical Records", "Hospital Management"],
      projectTypes: ["Full-stack Development", "Cloud Infrastructure", "Security Implementation", "Integration"],
      projectSources: ["Healthcare Providers", "Medical Institutions", "Telemedicine Platforms"]
    },
    approach: [
      "Requirements Analysis: Collaborated with healthcare professionals to understand complex workflows",
      "Security Implementation: Built HIPAA-compliant architecture with end-to-end encryption",
      "Integration Development: Created seamless integrations with existing hospital systems and EMRs",
      "User Experience Design: Designed intuitive interfaces for both patients and healthcare providers",
      "Scalability Planning: Implemented cloud-native architecture for multi-tenant deployment"
    ],
    keyResults: [
      "Reduced patient wait times by 70% through optimized scheduling and check-in processes",
      "Achieved 99.99% uptime with automated failover and disaster recovery systems",
      "Processed 500K+ patient records with zero data breaches or compliance violations",
      "Enabled 10K+ telemedicine consultations per month during peak pandemic periods"
    ],
    challenges: [
      {
        challenge: "Data Privacy: Ensuring HIPAA compliance while enabling data sharing between providers",
        resolution: "Implemented role-based access control and audit trails with encryption at rest and in transit"
      },
      {
        challenge: "System Integration: Connecting with legacy hospital systems and EMR platforms",
        resolution: "Developed custom APIs and middleware for seamless data synchronization"
      },
      {
        challenge: "Scalability: Supporting multiple hospitals with varying infrastructure needs",
        resolution: "Used containerization and microservices for flexible, scalable deployment"
      }
    ],
    outcome: "The healthcare platform revolutionized patient care delivery, improving operational efficiency and patient satisfaction while maintaining the highest security standards. The system became a model for digital transformation in healthcare."
  },
  {
    id: 4,
    title: "Real-Time Analytics Dashboard for IoT Fleet Management",
    client: "Logistics Corporation",
    industry: "Transportation & Logistics",
    challenge: "Create a real-time dashboard for monitoring and managing a fleet of 10,000+ vehicles with GPS tracking, fuel monitoring, maintenance scheduling, and driver performance analytics",
    solution: "Developed a comprehensive IoT platform with real-time data processing, predictive analytics, and automated alert systems using big data technologies and machine learning algorithms",
    results: ["25% reduction in fuel costs", "40% improvement in delivery times", "60% decrease in maintenance costs", "Real-time tracking of 10K+ vehicles"],
    technologies: ["Angular", "Spring Boot", "Apache Kafka", "MongoDB", "InfluxDB", "Grafana", "AWS IoT", "Python"],
    duration: "10 months",
    teamSize: "10 developers",
    status: "Live",
    year: "2023",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    scope: {
      targetSectors: ["Transportation", "Logistics", "Fleet Management", "Supply Chain"],
      projectTypes: ["IoT Development", "Big Data Analytics", "Real-time Processing", "Dashboard Development"],
      projectSources: ["Logistics Companies", "Transportation Providers", "Fleet Operators"]
    },
    approach: [
      "IoT Architecture: Designed scalable IoT infrastructure for real-time data collection and processing",
      "Data Pipeline: Built robust data pipelines using Apache Kafka for high-throughput message processing",
      "Analytics Engine: Implemented machine learning models for predictive maintenance and route optimization",
      "Dashboard Development: Created intuitive dashboards with real-time visualizations and alerts",
      "Mobile Integration: Developed companion mobile apps for drivers and fleet managers"
    ],
    keyResults: [
      "Processed 100M+ data points daily from vehicles and sensors across the fleet",
      "Reduced fuel consumption by 25% through optimized routing and driver behavior analysis",
      "Prevented 500+ vehicle breakdowns through predictive maintenance algorithms",
      "Improved customer satisfaction by 45% with accurate delivery time predictions"
    ],
    challenges: [
      {
        challenge: "Data Volume: Processing massive amounts of real-time data from thousands of vehicles",
        resolution: "Implemented Apache Kafka and stream processing for high-throughput data handling"
      },
      {
        challenge: "Connectivity: Ensuring reliable data transmission in remote areas with poor network coverage",
        resolution: "Developed offline data storage and batch synchronization capabilities"
      },
      {
        challenge: "Scalability: Supporting growing fleet size without performance degradation",
        resolution: "Used microservices architecture with auto-scaling capabilities in cloud infrastructure"
      }
    ],
    outcome: "The IoT fleet management platform transformed logistics operations, resulting in significant cost savings, improved efficiency, and enhanced customer service. The solution set new industry standards for data-driven fleet management."
  },
  {
    id: 5,
    title: "Blockchain-Based Supply Chain Transparency Platform",
    client: "Manufacturing Consortium",
    industry: "Supply Chain Management",
    challenge: "Develop a blockchain-based platform to provide end-to-end supply chain transparency, traceability, and authenticity verification for luxury goods and pharmaceuticals",
    solution: "Built a decentralized platform using blockchain technology with smart contracts, IoT integration, and mobile applications for stakeholders to track products from origin to consumer",
    results: ["100% product traceability", "80% reduction in counterfeit goods", "50% faster compliance reporting", "99.9% data integrity"],
    technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS", "Web3.js", "MongoDB", "Docker"],
    duration: "16 months",
    teamSize: "9 developers",
    status: "Live",
    year: "2023",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    scope: {
      targetSectors: ["Manufacturing", "Pharmaceuticals", "Luxury Goods", "Food & Beverage"],
      projectTypes: ["Blockchain Development", "Smart Contracts", "IoT Integration", "Mobile Apps"],
      projectSources: ["Manufacturing Companies", "Regulatory Bodies", "Brand Protection Agencies"]
    },
    approach: [
      "Blockchain Architecture: Designed permissioned blockchain network for secure data sharing",
      "Smart Contract Development: Created automated contracts for supply chain milestone verification",
      "IoT Integration: Implemented sensor data collection for real-time product condition monitoring",
      "User Interface Development: Built intuitive interfaces for different stakeholder roles",
      "Compliance Integration: Ensured regulatory compliance with automated reporting features"
    ],
    keyResults: [
      "Tracked 1M+ products across 500+ suppliers with complete transparency",
      "Reduced counterfeit incidents by 80% through immutable product authentication",
      "Automated 90% of compliance reporting processes with blockchain-verified data",
      "Enabled consumers to verify product authenticity through mobile app scanning"
    ],
    challenges: [
      {
        challenge: "Scalability: Blockchain networks traditionally have limited transaction throughput",
        resolution: "Implemented layer-2 solutions and optimized smart contracts for efficient processing"
      },
      {
        challenge: "Integration: Connecting blockchain with existing ERP and supply chain systems",
        resolution: "Developed middleware and APIs for seamless integration with legacy systems"
      },
      {
        challenge: "Adoption: Encouraging suppliers and partners to adopt new blockchain-based processes",
        resolution: "Created incentive structures and provided comprehensive training and support"
      }
    ],
    outcome: "The blockchain platform revolutionized supply chain transparency, building consumer trust and enabling brands to combat counterfeiting effectively. The solution became a benchmark for blockchain implementation in supply chain management."
  },
  {
    id: 6,
    title: "AI-Powered DevOps Automation Platform",
    client: "Software Development Agency",
    industry: "DevOps & Automation",
    challenge: "Create an intelligent DevOps platform that automates deployment pipelines, monitors application performance, and predicts potential issues before they impact production systems",
    solution: "Developed an AI-powered DevOps platform with automated CI/CD pipelines, intelligent monitoring, predictive analytics, and self-healing capabilities using machine learning algorithms",
    results: ["90% reduction in deployment time", "99.9% system uptime", "70% fewer production incidents", "80% faster issue resolution"],
    technologies: ["Python", "Kubernetes", "Jenkins", "Prometheus", "Grafana", "TensorFlow", "AWS", "Terraform"],
    duration: "11 months",
    teamSize: "7 developers",
    status: "Live",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    scope: {
      targetSectors: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
      projectTypes: ["DevOps Automation", "CI/CD Pipelines", "Monitoring Solutions", "AI/ML Integration"],
      projectSources: ["Software Companies", "IT Departments", "Cloud Service Providers"]
    },
    approach: [
      "Pipeline Automation: Designed intelligent CI/CD pipelines with automated testing and deployment",
      "Monitoring Integration: Implemented comprehensive monitoring with custom metrics and alerting",
      "AI Development: Built machine learning models for predictive analysis and anomaly detection",
      "Infrastructure as Code: Automated infrastructure provisioning using Terraform and Kubernetes",
      "Self-Healing Systems: Developed automated recovery mechanisms for common failure scenarios"
    ],
    keyResults: [
      "Reduced deployment time from hours to minutes with zero-downtime deployments",
      "Achieved 99.9% uptime through predictive maintenance and automated recovery",
      "Prevented 200+ potential production issues through AI-powered anomaly detection",
      "Saved 40+ hours per week of manual DevOps tasks through intelligent automation"
    ],
    challenges: [
      {
        challenge: "Complexity: Managing multiple deployment environments and configurations",
        resolution: "Implemented Infrastructure as Code and environment-specific automation workflows"
      },
      {
        challenge: "Reliability: Ensuring automated systems don't introduce new failure points",
        resolution: "Built comprehensive testing and rollback mechanisms with canary deployments"
      },
      {
        challenge: "Learning Curve: Training AI models to accurately predict system failures",
        resolution: "Used extensive historical data and continuous learning algorithms for model improvement"
      }
    ],
    outcome: "The AI-powered DevOps platform transformed software delivery processes, enabling faster, more reliable deployments while reducing operational overhead. The solution became a competitive advantage for development teams."
  },
  {
    id: 7,
    title: "Serverless Social Media Analytics Platform",
    client: "Digital Marketing Agency",
    industry: "Social Media & Analytics",
    challenge: "Build a scalable social media analytics platform that processes millions of social media posts in real-time, provides sentiment analysis, and generates actionable insights for brands",
    solution: "Developed a serverless architecture using cloud functions, implemented natural language processing for sentiment analysis, and created interactive dashboards for real-time social media monitoring",
    results: ["10M+ posts processed daily", "Real-time sentiment analysis", "90% cost reduction vs traditional hosting", "5x faster data processing"],
    technologies: ["React", "AWS Lambda", "DynamoDB", "Elasticsearch", "Python", "NLP Libraries", "D3.js", "API Gateway"],
    duration: "9 months",
    teamSize: "6 developers",
    status: "Live",
    year: "2023",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
    scope: {
      targetSectors: ["Digital Marketing", "Social Media", "Brand Management", "PR Agencies"],
      projectTypes: ["Serverless Development", "Data Analytics", "NLP Integration", "Dashboard Development"],
      projectSources: ["Marketing Agencies", "Brand Managers", "Social Media Platforms"]
    },
    approach: [
      "Serverless Architecture: Designed cost-effective serverless infrastructure for variable workloads",
      "Data Processing: Implemented real-time data ingestion and processing pipelines",
      "NLP Integration: Built sentiment analysis and topic modeling using machine learning",
      "Visualization: Created interactive dashboards with real-time updates and custom metrics",
      "API Development: Built RESTful APIs for third-party integrations and data access"
    ],
    keyResults: [
      "Processed 10M+ social media posts daily with sub-second response times",
      "Achieved 95% accuracy in sentiment analysis across multiple languages",
      "Reduced infrastructure costs by 90% compared to traditional server-based solutions",
      "Enabled real-time brand monitoring and crisis management for 100+ clients"
    ],
    challenges: [
      {
        challenge: "Scale: Processing massive volumes of social media data in real-time",
        resolution: "Implemented serverless functions with auto-scaling and distributed processing"
      },
      {
        challenge: "Accuracy: Ensuring high accuracy in sentiment analysis across different contexts",
        resolution: "Trained custom NLP models with domain-specific data and continuous learning"
      },
      {
        challenge: "Cost Management: Controlling costs while maintaining high performance",
        resolution: "Optimized serverless function execution and implemented intelligent caching strategies"
      }
    ],
    outcome: "The serverless analytics platform revolutionized social media monitoring, providing brands with unprecedented insights into customer sentiment and market trends while dramatically reducing operational costs."
  }
];

// Enhanced Blog data for the blog page
export const blogCategories = [
  { id: "all", name: "All Posts", icon: "mdi:view-grid", count: 24 },
  { id: "design", name: "Software Development", icon: "mdi:drawing", count: 8 },
  { id: "automation", name: "Cloud Services", icon: "mdi:robot-industrial", count: 6 },
  { id: "manufacturing", name: "Enterprise IT", icon: "mdi:factory", count: 5 },
  { id: "innovation", name: "Startups", icon: "mdi:lightbulb", count: 3 },
  { id: "sustainability", name: "Sustainability", icon: "mdi:leaf", count: 2 }
];

export const blogAuthors = [
  {
    id: "emily-chen",
    name: "Dr. Emily Chen",
    role: "Chief Engineer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    bio: "PhD in Software Engineering with 15+ years in precision manufacturing and automotive design.",
    expertise: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily.chen@mechnovate.com"
    }
  },
  {
    id: "robert-jackson",
    name: "Robert Jackson",
    role: "Automation Specialist",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    bio: "Leading expert in industrial automation and robotics with extensive experience in smart manufacturing.",
    expertise: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "robert.jackson@q-hub.com"
    }
  },
  {
    id: "sarah-martinez",
    name: "Sarah Martinez",
    role: "Lead Designer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80",
    bio: "Creative mechanical designer specializing in sustainable solutions and innovative product development.",
    expertise: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah.martinez@q-hub.com"
    }
  },
  {
    id: "michael-wei",
    name: "Michael Wei",
    role: "Innovation Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    bio: "Technology visionary driving digital transformation in mechanical engineering through AI and advanced simulation.",
    expertise: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael.wei@q-hub.com"
    }
  },
  {
    id: "alex-kumar",
    name: "Dr. Alex Kumar",
    role: "Research Scientist",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80",
    bio: "Materials science researcher focusing on next-generation composites and smart materials for aerospace applications.",
    expertise: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex.kumar@q-hub.com"
    }
  },
  {
    id: "lisa-thomson",
    name: "Lisa Thomson",
    role: "Sustainability Engineer",
    avatar: "https://images.unsplash.com/photo-1594736797933-d0d5e8f13420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80",
    bio: "Environmental engineer dedicated to developing sustainable manufacturing processes and circular economy solutions.",
    expertise: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa.thomson@q-hub.com"
    }
  }
];

export const blogPostsData = [
  {
    id: 1,
    title: "Revolutionary Advances in Precision Engineering for Next-Gen Automotive",
    excerpt: "Discover how cutting-edge precision engineering techniques are reshaping automotive manufacturing, enabling lighter, stronger, and more efficient vehicles for the electric revolution.",
    content: "The automotive industry is experiencing a paradigm shift with the rise of electric vehicles and autonomous driving technologies...",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "15", month: "Dec", year: "2024" },
    author: "Dr. Emily Chen",
    authorId: "emily-chen",
    comments: 24,
    views: 1847,
    readTime: "8 min",
    category: "design",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: true,
    difficulty: "Intermediate",
    rating: 4.8
  },
  {
    id: 2,
    title: "The Future of Collaborative Robotics in Smart Manufacturing",
    excerpt: "Explore how collaborative robots (cobots) are revolutionizing production lines by working alongside humans to create safer, more efficient manufacturing environments.",
    content: "Collaborative robotics represents a fundamental shift in how we approach industrial automation...",
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "08", month: "Dec", year: "2024" },
    author: "Robert Jackson",
    authorId: "robert-jackson",
    comments: 31,
    views: 2156,
    readTime: "12 min",
    category: "automation",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Advanced",
    rating: 4.9
  },
  {
    id: 3,
    title: "Sustainable Materials Revolution: Bio-Composites in Mechanical Design",
    excerpt: "Investigating breakthrough bio-composite materials that combine superior mechanical properties with environmental responsibility for next-generation products.",
    content: "The materials science revolution is bringing us closer to a sustainable future...",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "01", month: "Dec", year: "2024" },
    author: "Sarah Martinez",
    authorId: "sarah-martinez",
    comments: 18,
    views: 1423,
    readTime: "10 min",
    category: "sustainability",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Intermediate",
    rating: 4.7
  },
  {
    id: 4,
    title: "Digital Twins & AI: Revolutionizing Predictive Product Development",
    excerpt: "How the convergence of digital twin technology and artificial intelligence is enabling unprecedented accuracy in product design, testing, and optimization.",
    content: "The integration of digital twins with AI represents a quantum leap in engineering capabilities...",
    image: "https://images.unsplash.com/photo-1581093196277-9f608732aee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "25", month: "Nov", year: "2024" },
    author: "Michael Wei",
    authorId: "michael-wei",
    comments: 42,
    views: 3241,
    readTime: "15 min",
    category: "innovation",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: true,
    difficulty: "Advanced",
    rating: 4.9
  },
  {
    id: 5,
    title: "Next-Gen CNC Machining: Adaptive Control & Real-Time Optimization",
    excerpt: "Advanced CNC technologies featuring adaptive control systems, real-time optimization algorithms, and AI-driven quality assurance for unprecedented precision.",
    content: "Modern CNC machining is evolving beyond traditional programming to intelligent, adaptive systems...",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "18", month: "Nov", year: "2024" },
    author: "Dr. Emily Chen",
    authorId: "emily-chen",
    comments: 28,
    views: 1956,
    readTime: "11 min",
    category: "manufacturing",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Advanced",
    rating: 4.8
  },
  {
    id: 6,
    title: "IoT-Enabled Predictive Maintenance: Zero Downtime Manufacturing",
    excerpt: "Revolutionary IoT sensor networks and machine learning algorithms that predict equipment failures weeks in advance, ensuring continuous production.",
    content: "Predictive maintenance powered by IoT represents the pinnacle of smart manufacturing...",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "12", month: "Nov", year: "2024" },
    author: "Robert Jackson",
    authorId: "robert-jackson",
    comments: 35,
    views: 2789,
    readTime: "13 min",
    category: "automation",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Intermediate",
    rating: 4.8
  },
  {
    id: 7,
    title: "Computational Fluid Dynamics: Multi-Physics Simulation Breakthroughs",
    excerpt: "Latest advances in CFD technology enabling complex multi-physics simulations that accurately predict real-world behavior of mechanical systems.",
    content: "Modern CFD simulation has evolved to handle increasingly complex multi-physics problems...",
    image: "https://images.unsplash.com/photo-1581093196855-88456c9d4974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "05", month: "Nov", year: "2024" },
    author: "Sarah Martinez",
    authorId: "sarah-martinez",
    comments: 19,
    views: 1567,
    readTime: "9 min",
    category: "design",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Advanced",
    rating: 4.6
  },
  {
    id: 8,
    title: "AI-Driven Generative Design: The Future of Engineering Creativity",
    excerpt: "How artificial intelligence is augmenting human creativity in mechanical design, generating innovative solutions that surpass traditional design limitations.",
    content: "Generative design powered by AI is transforming how engineers approach creative problem-solving...",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "29", month: "Oct", year: "2024" },
    author: "Michael Wei",
    authorId: "michael-wei",
    comments: 47,
    views: 3856,
    readTime: "14 min",
    category: "innovation",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: true,
    difficulty: "Advanced",
    rating: 4.9
  },
  {
    id: 9,
    title: "Metal 3D Printing: From Prototyping to Production-Grade Components",
    excerpt: "Revolutionary advances in metal additive manufacturing enabling production of complex, high-strength components for aerospace and automotive industries.",
    content: "Metal 3D printing has matured from a prototyping tool to a production technology...",
    image: "https://images.unsplash.com/photo-1581093458791-9b7bbb55c68b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "22", month: "Oct", year: "2024" },
    author: "Dr. Emily Chen",
    authorId: "emily-chen",
    comments: 33,
    views: 2445,
    readTime: "12 min",
    category: "manufacturing",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Intermediate",
    rating: 4.7
  },
  {
    id: 10,
    title: "Smart Materials & Shape Memory Alloys in Adaptive Engineering",
    excerpt: "Exploring revolutionary smart materials that respond to environmental changes, enabling self-adapting mechanical systems and structures.",
    content: "Smart materials represent a paradigm shift in mechanical engineering design philosophy...",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1425&q=80",
    date: { day: "15", month: "Oct", year: "2024" },
    author: "Dr. Alex Kumar",
    authorId: "alex-kumar",
    comments: 26,
    views: 1834,
    readTime: "10 min",
    category: "design",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Advanced",
    rating: 4.8
  },
  {
    id: 11,
    title: "Quantum Computing Applications in Structural Optimization",
    excerpt: "Pioneering research into how quantum computing algorithms can solve complex structural optimization problems impossible for classical computers.",
    content: "Quantum computing is opening new frontiers in computational engineering...",
    image: "https://images.unsplash.com/photo-1635070041409-e63e783ce3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "08", month: "Oct", year: "2024" },
    author: "Michael Wei",
    authorId: "michael-wei",
    comments: 38,
    views: 2967,
    readTime: "16 min",
    category: "innovation",
    tags: ["Quantum Computing", "Structural Optimization", "Advanced Algorithms", "Computational Science"],
    isFeatured: false,
    difficulty: "Expert",
    rating: 4.9
  },
  {
    id: 12,
    title: "Micro-Manufacturing: Precision at the Nanoscale",
    excerpt: "Advanced micro-manufacturing techniques enabling production of components with nanometer precision for medical devices and electronics.",
    content: "Micro-manufacturing represents the ultimate in precision engineering...",
    image: "https://images.unsplash.com/photo-1581092670296-2dd6e1e9a4d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "01", month: "Oct", year: "2024" },
    author: "Dr. Emily Chen",
    authorId: "emily-chen",
    comments: 21,
    views: 1456,
    readTime: "11 min",
    category: "manufacturing",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Expert",
    rating: 4.7
  },
  {
    id: 13,
    title: "Autonomous Manufacturing Systems: Lights-Out Production",
    excerpt: "Fully autonomous manufacturing systems that operate without human intervention, featuring self-monitoring, self-correcting, and self-optimizing capabilities.",
    content: "The vision of lights-out manufacturing is becoming reality with advanced automation...",
    image: "https://images.unsplash.com/photo-1581093806931-216c8e23b6c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "24", month: "Sep", year: "2024" },
    author: "Robert Jackson",
    authorId: "robert-jackson",
    comments: 29,
    views: 2156,
    readTime: "13 min",
    category: "automation",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Advanced",
    rating: 4.8
  },
  {
    id: 14,
    title: "Biomimetic Engineering: Learning from Nature's Designs",
    excerpt: "Revolutionary design approaches inspired by nature's solutions, creating more efficient and sustainable mechanical systems through biomimicry.",
    content: "Nature has perfected mechanical solutions over millions of years of evolution...",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    date: { day: "17", month: "Sep", year: "2024" },
    author: "Sarah Martinez",
    authorId: "sarah-martinez",
    comments: 32,
    views: 2334,
    readTime: "12 min",
    category: "design",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Intermediate",
    rating: 4.8
  },
  {
    id: 15,
    title: "Circular Economy in Manufacturing: Zero Waste Production",
    excerpt: "Implementing circular economy principles in manufacturing to achieve zero waste production through innovative recycling and reuse strategies.",
    content: "The circular economy represents a fundamental shift from linear take-make-dispose models...",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "10", month: "Sep", year: "2024" },
    author: "Lisa Thomson",
    authorId: "lisa-thomson",
    comments: 25,
    views: 1789,
    readTime: "14 min",
    category: "sustainability",
    tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Intermediate",
    rating: 4.7
  },
  {
    id: 16,
    title: "Advanced Composite Manufacturing: Automated Fiber Placement",
    excerpt: "Next-generation composite manufacturing using automated fiber placement technology for aerospace and automotive applications requiring exceptional strength-to-weight ratios.",
    content: "Advanced composites are enabling breakthrough performance in weight-critical applications...",
    image: "https://images.unsplash.com/photo-1581093507213-d6b9e9b2e3b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: { day: "03", month: "Sep", year: "2024" },
    author: "Dr. Alex Kumar",
    authorId: "alex-kumar",
    comments: 22,
    views: 1623,
    readTime: "11 min",
    category: "manufacturing",
      tags: ["Software Development", "Cloud Services", "Enterprise IT", "Startups"],
    isFeatured: false,
    difficulty: "Advanced",
    rating: 4.8
  }
];

// Blog statistics and metrics
export const blogStats = {
  totalPosts: 24,
  totalViews: 52847,
  totalComments: 748,
  averageReadTime: "12 min",
  topCategory: "Design",
  growthRate: "+23%"
};

// Featured blog topics for homepage
export const featuredBlogTopics = [
  {
    title: "AI in Software Development",
    description: "Artificial intelligence revolutionizing software development",
    postCount: 5,
    icon: "mdi:robot",
    color: "neon"
  },
  {
    title: "Cloud Services",
    description: "Cloud services and circular economy solutions",
    postCount: 4,
    icon: "mdi:leaf",
    color: "cyber"
  },
  {
    title: "Enterprise IT",
    description: "Next-generation materials and smart composites",
    postCount: 6,
    icon: "mdi:molecule",
    color: "quantum"
  },
  {
      title: "Startups",
    description: "Startups and innovation",
    postCount: 7,
    icon: "mdi:factory",
    color: "plasma"
  }
];

export const team = [
  {
    id: 1,
    name: "Dr. Naeem Ahmed",
    position: "CEO & Founder",
    bio: "15+ years in software development. PhD in Computer Science from University of Karachi.",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Marcus Johnson",
    position: "Chief Technology Officer",
    bio: "Former Google engineer. Expert in cloud architecture and distributed systems.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    position: "Head of Development",
    bio: "Full-stack expert with 12+ years experience. AWS certified architect.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "David Park",
    position: "VP of Engineering",
    bio: "20+ years in software engineering. Agile and DevOps transformation expert.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

export const industries = [
  { name: "Finance & Banking", icon: "mdi:bank", projects: 85 },
  { name: "Healthcare", icon: "mdi:hospital-box", projects: 72 },
  { name: "E-commerce", icon: "mdi:cart", projects: 94 },
  { name: "Education", icon: "mdi:school", projects: 61 },
  { name: "Logistics", icon: "mdi:truck-delivery", projects: 58 },
  { name: "Real Estate", icon: "mdi:office-building", projects: 43 },
  { name: "Entertainment", icon: "mdi:movie-open", projects: 37 },
  { name: "Manufacturing", icon: "mdi:factory", projects: 52 }
];

export const process = [
  {
    id: 1,
    phase: "Discovery",
    title: "Requirements Analysis",
    description: "Understand your business needs, technical requirements, and project goals through detailed consultation.",
    duration: "1-2 weeks",
    activities: ["Requirement Gathering", "Technical Analysis", "Project Scoping", "Cost Estimation"]
  },
  {
    id: 2,
    phase: "Design",
    title: "UI/UX & Architecture",
    description: "Create intuitive user interfaces and robust system architecture for scalable applications.",
    duration: "2-3 weeks",
    activities: ["Wireframing", "UI/UX Design", "System Architecture", "Database Design"]
  },
  {
    id: 3,
    phase: "Development",
    title: "Agile Development",
    description: "Build your application using agile methodologies with regular sprints and continuous feedback.",
    duration: "8-16 weeks",
    activities: ["Sprint Planning", "Frontend Development", "Backend Development", "API Integration"]
  },
  {
    id: 4,
    phase: "Testing",
    title: "Quality Assurance",
    description: "Comprehensive testing to ensure your application is bug-free, secure, and performs optimally.",
    duration: "2-3 weeks",
    activities: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Testing"]
  },
  {
    id: 5,
    phase: "Deployment",
    title: "Launch & Support",
    description: "Deploy your application to production with continuous monitoring and ongoing support.",
    duration: "1 week + ongoing",
    activities: ["Production Deployment", "Performance Monitoring", "User Training", "Maintenance Support"]
  }
];

export const pricing = [
  {
    name: "Startup",
    price: "$5,000",
    period: "per month",
    description: "Perfect for startups and small projects",
    features: [
      "1-2 Dedicated Developers",
      "Project Management",
      "Weekly Updates",
      "Basic Support",
      "Code Repository Access"
    ],
    highlighted: false
  },
  {
    name: "Business",
    price: "$15,000",
    period: "per month",
    description: "Ideal for growing businesses",
    features: [
      "3-5 Dedicated Developers",
      "Technical Lead",
      "Daily Standups",
      "Priority Support",
      "CI/CD Pipeline",
      "Cloud Infrastructure"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "Tailored solutions for large organizations",
    features: [
      "Full Development Team",
      "Solution Architect",
      "24/7 Support",
      "SLA Guarantee",
      "Dedicated Account Manager",
      "Custom Integrations"
    ],
    highlighted: false
  }
];

export const faqs = [
  {
    id: 1,
    category: "General",
    question: "What services does Q HUB INFORMATION offer?",
    answer: "We offer comprehensive software development services including web development, mobile app development, cloud solutions, AI/ML integration, API development, and cybersecurity. Our team specializes in delivering custom enterprise solutions that drive business growth.",
    icon: "carbon:information"
  },
  {
    id: 2,
    category: "Process",
    question: "How long does a typical software project take?",
    answer: "Project timelines vary based on complexity. A simple web application might take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We follow agile methodology with regular sprints, ensuring transparency throughout the development cycle.",
    icon: "carbon:time"
  },
  {
    id: 3,
    category: "Pricing",
    question: "How do you structure your pricing?",
    answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. Our pricing is transparent and based on project complexity, technology stack, and timeline. We provide detailed quotes after understanding your requirements.",
    icon: "carbon:currency-dollar"
  },
  {
    id: 4,
    category: "Technology",
    question: "What technologies and frameworks do you use?",
    answer: "We work with cutting-edge technologies including React, Angular, Node.js, Python, Java, .NET, AWS, Azure, and Google Cloud. Our team stays updated with the latest frameworks and best practices to deliver optimal solutions for your specific needs.",
    icon: "carbon:code"
  },
  {
    id: 5,
    category: "Support",
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, feature updates, and 24/7 monitoring. Our support packages range from basic maintenance to full managed services with SLA guarantees.",
    icon: "carbon:headset"
  },
  {
    id: 6,
    category: "Security",
    question: "How do you ensure the security of our applications?",
    answer: "Security is built into our development process from day one. We follow OWASP guidelines, conduct regular security audits, implement encryption, secure authentication, and follow best practices for data protection. We also offer dedicated cybersecurity services.",
    icon: "carbon:security"
  },
  {
    id: 7,
    category: "Process",
    question: "Can we see progress during development?",
    answer: "Absolutely! We believe in complete transparency. You'll have access to our project management tools, regular demos, daily standups (for dedicated teams), and weekly progress reports. We use agile methodology to ensure continuous feedback and iteration.",
    icon: "carbon:view"
  },
  {
    id: 8,
    category: "General",
    question: "Do you work with startups?",
    answer: "Yes, we love working with startups! We offer special startup packages, MVP development services, and flexible payment terms. Our team can help you validate ideas, build prototypes, and scale your product as you grow.",
    icon: "carbon:rocket"
  },
  {
    id: 9,
    category: "Technology",
    question: "Can you integrate with our existing systems?",
    answer: "Yes, we specialize in system integration and can seamlessly connect your new solutions with existing infrastructure. We work with various APIs, databases, legacy systems, and third-party services to ensure smooth data flow and functionality.",
    icon: "carbon:connect"
  },
  {
    id: 10,
    category: "Process",
    question: "Do you sign NDAs?",
    answer: "Absolutely. We take confidentiality seriously and are happy to sign NDAs before discussing project details. All our employees and contractors are bound by strict confidentiality agreements. Your intellectual property and business information are safe with us.",
    icon: "carbon:locked"
  }
];

export const faqCategories = [
  { id: "all", name: "All Questions", icon: "carbon:list" },
  { id: "general", name: "General", icon: "carbon:information" },
  { id: "process", name: "Process", icon: "carbon:flow" },
  { id: "pricing", name: "Pricing", icon: "carbon:currency-dollar" },
  { id: "technology", name: "Technology", icon: "carbon:code" },
  { id: "support", name: "Support", icon: "carbon:headset" },
  { id: "security", name: "Security", icon: "carbon:security" }
];

// Enhanced Services Data for Services Page
export const enhancedServicesData = {
  detailedDescriptions: [
    "Our concept design service encompasses the complete ideation-to-concept journey, from initial brainstorming sessions to detailed feasibility studies. We specialize in transforming abstract ideas into concrete mechanical concepts that are both technically feasible and commercially viable.",
    "Our CAD modeling service provides comprehensive 3D design solutions using advanced parametric modeling techniques. We create detailed, manufacturable designs with intelligent design logic that allows for easy modifications and design iterations.",
    "Our simulation services leverage cutting-edge CFD and FEA tools to virtually test and optimize your designs. We reduce development time and costs by identifying potential issues early in the design process through comprehensive virtual testing.",
    "Our prototyping service combines multiple manufacturing technologies to create functional prototypes for design validation. We provide comprehensive testing services to ensure your designs meet performance requirements before moving to production.",
    "Our DFM service ensures your designs are optimized for cost-effective manufacturing. We analyze manufacturability, optimize tolerances, select appropriate materials, and create comprehensive production documentation.",
    "Our reverse engineering service transforms existing physical parts into accurate CAD models. We use advanced 3D scanning technology and precision measurement techniques to create detailed, editable models for legacy parts, competitor analysis, or design improvements."
  ],

  workflows: [
    [
      {
        step: "Ideation & Research",
        description: "Comprehensive brainstorming sessions, market research, and competitive analysis to define project scope",
        duration: "1-2 weeks",
        deliverables: ["Concept Sketches", "Market Analysis Report", "Technical Requirements"]
      },
      {
        step: "Feasibility Analysis",
        description: "Technical and commercial feasibility assessment with cost-benefit analysis",
        duration: "1 week",
        deliverables: ["Feasibility Report", "Cost Estimation", "Risk Assessment"]
      },
      {
        step: "Concept Development",
        description: "Detailed concept development with initial 3D models and design validation",
        duration: "2-3 weeks",
        deliverables: ["3D Concept Models", "Design Specifications", "Performance Criteria"]
      },
      {
        step: "Presentation & Review",
        description: "Professional presentation of concepts with stakeholder review and feedback integration",
        duration: "1 week",
        deliverables: ["Concept Presentation", "Design Review Report", "Next Phase Planning"]
      }
    ],
    [
      {
        step: "Design Planning",
        description: "Analysis of requirements and creation of modeling strategy with design tree planning",
        duration: "1 week",
        deliverables: ["Modeling Strategy", "Design Tree Structure", "Feature Planning"]
      },
      {
        step: "3D Modeling",
        description: "Detailed parametric modeling with intelligent design features and constraints",
        duration: "3-5 weeks",
        deliverables: ["3D CAD Models", "Assembly Models", "Drawing Packages"]
      },
      {
        step: "Design Validation",
        description: "Model validation, interference checking, and design optimization",
        duration: "1 week",
        deliverables: ["Validation Report", "Interference Analysis", "Design Optimization"]
      }
    ],
    [
      {
        step: "Simulation Setup",
        description: "Model preparation, mesh generation, and boundary condition definition",
        duration: "1-2 weeks",
        deliverables: ["Simulation Model", "Mesh Quality Report", "Boundary Conditions"]
      },
      {
        step: "Analysis Execution",
        description: "Running comprehensive simulations with multiple scenarios and load cases",
        duration: "2-3 weeks",
        deliverables: ["Simulation Results", "Performance Metrics", "Optimization Recommendations"]
      },
      {
        step: "Results Interpretation",
        description: "Detailed analysis of results with design optimization recommendations",
        duration: "1 week",
        deliverables: ["Analysis Report", "Design Recommendations", "Optimization Strategy"]
      }
    ],
    [
      {
        step: "Prototype Planning",
        description: "Selection of appropriate prototyping methods and testing protocols",
        duration: "1 week",
        deliverables: ["Prototyping Strategy", "Testing Plan", "Material Selection"]
      },
      {
        step: "Prototype Manufacturing",
        description: "Creation of functional prototypes using optimal manufacturing processes",
        duration: "2-4 weeks",
        deliverables: ["Physical Prototypes", "Manufacturing Reports", "Quality Inspection"]
      },
      {
        step: "Testing & Validation",
        description: "Comprehensive testing with performance analysis and design recommendations",
        duration: "1-2 weeks",
        deliverables: ["Test Results", "Performance Analysis", "Design Improvements"]
      }
    ],
    [
      {
        step: "DFM Analysis",
        description: "Comprehensive analysis of design manufacturability with cost optimization",
        duration: "1-2 weeks",
        deliverables: ["DFM Report", "Cost Analysis", "Manufacturing Recommendations"]
      },
      {
        step: "Process Optimization",
        description: "Manufacturing process selection and optimization with supplier coordination",
        duration: "2-3 weeks",
        deliverables: ["Process Plans", "Supplier Quotes", "Quality Plans"]
      },
      {
        step: "Production Documentation",
        description: "Creation of comprehensive production documentation and quality procedures",
        duration: "1-2 weeks",
        deliverables: ["Technical Drawings", "BOMs", "Quality Procedures"]
      }
    ],
    [
      {
        step: "Scanning & Measurement",
        description: "High-precision 3D scanning and dimensional measurement of existing parts",
        duration: "1 week",
        deliverables: ["3D Scan Data", "Point Clouds", "Measurement Reports"]
      },
      {
        step: "Model Reconstruction",
        description: "Creation of accurate CAD models from scan data with surface optimization",
        duration: "2-3 weeks",
        deliverables: ["CAD Models", "Surface Models", "Accuracy Reports"]
      },
      {
        step: "Validation & Documentation",
        description: "Model validation against original parts with comprehensive documentation",
        duration: "1 week",
        deliverables: ["Validated Models", "Technical Drawings", "Comparison Analysis"]
      }
    ]
  ],

  servicePricing: [
    "Starting from $8,000",
    "Starting from $12,000", 
    "Starting from $15,000",
    "Starting from $10,000",
    "Starting from $18,000",
    "Starting from $6,000"
  ],

  serviceTimelines: [
    "4-6 weeks",
    "5-7 weeks",
    "4-6 weeks", 
    "4-7 weeks",
    "4-7 weeks",
    "4-5 weeks"
  ],

  serviceTechnologies: [
    ["SolidWorks", "CATIA", "Fusion 360", "AutoCAD"],
    ["SolidWorks", "CATIA", "Fusion 360", "Creo"],
    ["ANSYS", "COMSOL", "Abaqus", "SolidWorks Simulation"],
    ["3D Printing", "CNC Machining", "Laser Cutting", "Injection Molding"],
    ["DFM Analysis", "Tolerance Analysis", "Material Selection", "Quality Control"],
    ["3D Scanning", "CMM Measurement", "Point Cloud Processing", "CAD Modeling"]
  ],

  enhancedFeatures: [
    [
      "Ideation workshops and concept generation",
      "Technical feasibility analysis and validation",
      "Market research and competitive analysis",
      "Cost estimation and budget optimization",
      "Risk assessment and mitigation strategies",
      "Patent research and IP protection guidance"
    ],
    [
      "Parametric 3D modeling with intelligent design logic",
      "Assembly modeling with motion simulation",
      "Sheet metal design and unfolding",
      "Weldment and frame design",
      "Surface modeling for complex geometries",
      "Design automation and template creation"
    ],
    [
      "Structural analysis and stress optimization",
      "Thermal analysis and heat transfer simulation",
      "Fluid flow analysis and optimization",
      "Vibration and modal analysis",
      "Fatigue and durability assessment",
      "Multi-physics simulation capabilities"
    ],
    [
      "Multi-technology prototyping capabilities",
      "Functional testing and validation",
      "Material property testing",
      "Performance benchmarking",
      "Iterative design optimization",
      "Production readiness assessment"
    ],
    [
      "Comprehensive DFM and DFA analysis",
      "Tolerance stack-up analysis and optimization",
      "Material selection and optimization",
      "Manufacturing process optimization",
      "Cost reduction strategies",
      "Supplier evaluation and selection"
    ],
    [
      "High-precision 3D scanning and measurement",
      "Point cloud processing and optimization",
      "Surface reconstruction and modeling",
      "Dimensional accuracy verification",
      "Legacy part documentation",
      "Design improvement recommendations"
    ]
  ]
};

// Company Statistics Data
export const companyStats = [
  {
    icon: "carbon:checkmark-filled",
    title: "Projects Completed",
    description: "Successfully delivered across various industries",
    stat: "350+"
  },
  {
    icon: "carbon:user-multiple",
    title: "Expert Engineers",
    description: "Certified professionals with extensive experience",
    stat: "50+"
  },
  {
    icon: "carbon:earth-filled",
    title: "Global Clients",
    description: "Trusted by clients worldwide for quality engineering",
    stat: "80+"
  },
  {
    icon: "carbon:face-satisfied",
    title: "Client Satisfaction",
    description: "Consistently high satisfaction rates and repeat business",
    stat: "99%"
  }
];

// Enhanced Contact data for the contact page
export const contactInfo = {
  headquarters: {
    name: "Q-hub Information Headquarters",
    address: "450 W Innovation Drive, Detroit, MI 48226",
    phone: "+1 (555) 123-4567",
    email: "headquarters@q-hub.com",
    hours: {
      weekdays: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 1:00 PM",
      sunday: "Closed"
    },
    coordinates: {
      lat: 42.331427,
      lng: -83.102539
    }
  },
  responseTime: "Within 2 hours",
  supportAvailability: "24/7 Emergency Support",
  languages: ["English", "Spanish", "French", "German", "Mandarin"]
};

export const contactTeam = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    role: "Chief Engineer & Contact Lead",
    department: "Executive",
    email: "emily.chen@mechnovate.com",
    phone: "+1 (555) 123-4567 ext. 101",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    specialties: ["Strategic Partnerships", "Large Projects", "Technical Consultation"],
    availability: "Mon-Fri 8:00 AM - 6:00 PM EST",
    languages: ["English", "Mandarin"],
    responseTime: "Within 1 hour"
  },
  {
    id: 2,
    name: "Robert Jackson",
    role: "Sales Director",
    department: "Sales",
    email: "robert.jackson@mechnovate.com",
    phone: "+1 (555) 123-4567 ext. 102",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    specialties: ["Automation Solutions", "ROI Analysis", "Custom Quotes"],
    availability: "Mon-Fri 7:00 AM - 7:00 PM EST",
    languages: ["English", "Spanish"],
    responseTime: "Within 30 minutes"
  },
  {
    id: 3,
    name: "Sarah Martinez",
    role: "Project Manager",
    department: "Operations",
    email: "sarah.martinez@mechnovate.com",
    phone: "+1 (555) 123-4567 ext. 103",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80",
    specialties: ["Project Planning", "Timeline Management", "Resource Allocation"],
    availability: "Mon-Fri 8:00 AM - 5:00 PM EST",
    languages: ["English", "French"],
    responseTime: "Within 2 hours"
  },
  {
    id: 4,
    name: "Michael Wei",
    role: "Innovation Consultant",
    department: "R&D",
    email: "michael.wei@mechnovate.com",
    phone: "+1 (555) 123-4567 ext. 104",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    specialties: ["Emerging Technologies", "Digital Transformation", "Innovation Strategy"],
    availability: "Mon-Fri 9:00 AM - 6:00 PM PST",
    languages: ["English", "German"],
    responseTime: "Within 4 hours"
  },
  {
    id: 5,
    name: "Lisa Thomson",
    role: "Customer Success Manager",
    department: "Support",
    email: "lisa.thomson@mechnovate.com",
    phone: "+1 (555) 123-4567 ext. 105",
    avatar: "https://images.unsplash.com/photo-1594736797933-d0d5e8f13420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80",
    specialties: ["Client Relations", "Support Coordination", "Training Programs"],
    availability: "Mon-Fri 6:00 AM - 4:00 PM EST",
    languages: ["English", "Spanish", "French"],
    responseTime: "Within 15 minutes"
  }
];

export const supportTiers = [
  {
    id: 1,
    name: "Standard Support",
    description: "Basic support for general inquiries and standard projects",
    responseTime: "4-8 hours",
    availability: "Business hours (Mon-Fri 8AM-6PM EST)",
    channels: ["Email", "Phone", "Web Form"],
    features: [
      "General project inquiries",
      "Technical documentation access",
      "Basic consultation (up to 30 min)",
      "Standard response priority"
    ],
    price: "Free",
    icon: "mdi:help-circle",
    color: "neon"
  },
  {
    id: 2,
    name: "Priority Support",
    description: "Enhanced support for active projects and premium clients",
    responseTime: "1-2 hours",
    availability: "Extended hours (Mon-Fri 6AM-8PM EST)",
    channels: ["Email", "Phone", "Web Form", "Live Chat"],
    features: [
      "Priority response queue",
      "Dedicated project manager",
      "Extended consultation (up to 1 hour)",
      "Progress tracking dashboard",
      "Weekly status updates"
    ],
    price: "$299/month",
    icon: "mdi:star-circle",
    color: "cyber"
  },
  {
    id: 3,
    name: "Enterprise Support",
    description: "Premium support with dedicated resources and 24/7 availability",
    responseTime: "15-30 minutes",
    availability: "24/7 availability with emergency hotline",
    channels: ["Email", "Phone", "Web Form", "Live Chat", "Video Call", "On-site"],
    features: [
      "Dedicated support team",
      "24/7 emergency response",
      "Unlimited consultation hours",
      "Custom SLA agreements",
      "On-site support available",
      "Executive escalation path"
    ],
    price: "Custom ",
    icon: "mdi:crown",
    color: "quantum"
  }
];

export const contactFAQs = [
  {
    id: 1,
    question: "What is your typical response time for project inquiries?",
    answer: "We respond to all project inquiries within 2-4 hours during business hours. For urgent matters, our priority and enterprise support tiers offer faster response times.",
    category: "general"
  },
  {
    id: 2,
    question: "Do you offer free consultations for new projects?",
    answer: "Yes, we provide a complimentary 30-minute consultation for all potential clients to discuss project requirements, feasibility, and high-level cost estimates.",
    category: "services"
  },
  {
    id: 3,
    question: "What information should I include in my project inquiry?",
    answer: "Please include project objectives, timeline requirements, budget range, technical specifications (if available), and any existing design files or documentation.",
    category: "general"
  },
  {
    id: 4,
    question: "Can you work with international clients?",
    answer: "Absolutely! We serve clients worldwide and have experience with international regulations, standards, and compliance requirements. We offer virtual collaboration tools and can arrange on-site visits when needed.",
    category: "services"
  },
  {
    id: 5,
    question: "What file formats do you accept for existing designs?",
    answer: "We work with all major CAD formats including SolidWorks, CATIA, Fusion 360, AutoCAD, Inventor, Creo, and standard formats like STEP, IGES, and STL.",
    category: "technical"
  },
  {
    id: 6,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive post-project support including maintenance, updates, training, and technical assistance. Support packages can be customized based on your needs.",
    category: "services"
  },
  {
    id: 7,
    question: "How do you handle confidentiality and IP protection?",
    answer: "We take intellectual property protection very seriously. All team members sign comprehensive NDAs, and we can execute custom confidentiality agreements before project discussions begin.",
    category: "security"
  },
  {
    id: 8,
    question: "What are your payment terms and pricing structure?",
    answer: "We offer flexible payment terms including milestone-based payments, time & materials, and fixed-price contracts. Pricing depends on project scope, complexity, and timeline.",
    category: "pricing"
  }
];

export const contactStats = {
  totalClients: 847,
  projectsCompleted: 1249,
  averageResponseTime: "1.5 hours",
  clientSatisfaction: 98.7,
  supportTicketsResolved: 15647,
  consultationHours: 8932,
  emergencyResponse: "15 minutes",
  languages: 5
};

export const contactMethods = [
  {
    id: 1,
    name: "General Inquiries",
    email: "info@mechnovate.com",
    phone: "+1 (555) 123-4567",
    description: "For general questions, project inquiries, and information requests",
    icon: "mdi:help-circle",
    department: "General"
  },
  {
    id: 2,
    name: "Sales & Quotes",
    email: "sales@mechnovate.com",
    phone: "+1 (555) 123-4567 ext. 200",
    description: "For pricing inquiries, proposals, and sales discussions",
    icon: "mdi:cash",
    department: "Sales"
  },
  {
    id: 3,
    name: "Technical Support",
    email: "support@mechnovate.com",
    phone: "+1 (555) 123-4567 ext. 300",
    description: "For existing client support, technical issues, and project updates",
    icon: "mdi:wrench",
    department: "Support"
  },
  {
    id: 4,
    name: "Partnerships",
    email: "partnerships@mechnovate.com",
    phone: "+1 (555) 123-4567 ext. 400",
    description: "For strategic partnerships, vendor relationships, and collaborations",
    icon: "mdi:handshake",
    department: "Business Development"
  },
  {
    id: 5,
    name: "Media & Press",
    email: "media@mechnovate.com",
    phone: "+1 (555) 123-4567 ext. 500",
    description: "For media inquiries, press releases, and public relations",
    icon: "mdi:newspaper",
    department: "Marketing"
  },
  {
    id: 6,
    name: "Emergency Support",
    email: "emergency@mechnovate.com",
    phone: "+1 (555) 911-MECH",
    description: "24/7 emergency support for critical system failures",
    icon: "mdi:alert-circle",
    department: "Emergency"
  }
];

export const serviceInquiryTypes = [
  {
    id: "concept-design",
    name: "Concept Design & Engineering",
    description: "New product development and conceptual design",
    estimatedTime: "2-6 weeks",
    startingPrice: "$8,000",
    complexity: "Medium"
  },
  {
    id: "cad-modeling",
    name: "CAD Modeling & 3D Design", 
    description: "Detailed 3D modeling and technical drawings",
    estimatedTime: "1-4 weeks",
    startingPrice: "$5,000",
    complexity: "Low"
  },
  {
    id: "simulation",
    name: "CFD & FEA Simulation",
    description: "Advanced simulation and analysis services",
    estimatedTime: "1-3 weeks",
    startingPrice: "$7,500",
    complexity: "High"
  },
  {
    id: "prototyping",
    name: "Prototyping & Testing",
    description: "Physical prototypes and validation testing",
    estimatedTime: "2-8 weeks",
    startingPrice: "$10,000",
    complexity: "Medium"
  },
  {
    id: "manufacturing",
    name: "Design for Manufacturing",
    description: "Manufacturing optimization and production prep",
    estimatedTime: "3-6 weeks",
    startingPrice: "$12,000",
    complexity: "High"
  },
  {
    id: "reverse-engineering",
    name: "Reverse Engineering",
    description: "Converting existing parts to CAD models",
    estimatedTime: "1-4 weeks",
    startingPrice: "$6,000",
    complexity: "Medium"
  }
];

export const aboutStats = [
  { value: 450, label: "Projects Completed", icon: "mdi:clipboard-check" },
  { value: 32, label: "Countries Served", icon: "mdi:earth" },
  { value: 95, label: "Client Satisfaction", unit: "%", icon: "mdi:star" },
  { value: 120, label: "Team Members", icon: "mdi:account-group" }
];

export const aboutTeamMembers = [
  {
    id: 1,
    name: "Dr. Alexandra Kumar",
    position: "CEO & Founder",
    expertise: "Mechanical Design Leadership",
    experience: "15+ years",
    education: "PhD in Mechanical Engineering from MIT",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Marcus Johnson",
    position: "Chief Design Engineer",
    expertise: "CAD Automation & DFM",
    experience: "12+ years",
    education: "MS Mechanical Engineering, Former Tesla Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    position: "Head of Simulation",
    expertise: "FEA/CFD Analysis",
    experience: "10+ years",
    education: "PhD Computational Mechanics, ANSYS Certified",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "David Park",
    position: "VP of Manufacturing",
    expertise: "Production Engineering",
    experience: "20+ years",
    education: "MS Industrial Engineering, Six Sigma Black Belt",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

export const aboutTimeline = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Q-hub Information was founded in 2010 by Dr. Naeem, a Software Engineer with a passion for innovation and precision."
  },
  {
    year: "2013",
    title: "First Major Breakthrough",
    description: "Developed our proprietary CAD automation tools, reducing design time by 40% for automotive clients."
  },
  {
    year: "2016",
    title: "International Expansion",
    description: "Opened our first international office in Toronto, Canada, expanding our global reach and client base."
  },
  {
    year: "2018",
    title: "Advanced Simulation Lab",
    description: "Launched our state-of-the-art simulation facility with cutting-edge FEA and CFD capabilities."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Pioneered remote engineering services and virtual collaboration tools during the global pandemic."
  },
  {
    year: "2022",
    title: "AI Integration",
    description: "Integrated artificial intelligence into our design process, achieving unprecedented accuracy and efficiency."
  },
  {
    year: "2024",
    title: "Sustainability Focus",
    description: "Launched our green engineering initiative, focusing on sustainable design and eco-friendly manufacturing."
  }
];

export const aboutValues = [
  {
    icon: "mdi:lightbulb",
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in mechanical engineering, embracing new technologies and methodologies."
  },
  {
    icon: "mdi:target",
    title: "Precision",
    description: "Every design, calculation, and solution we deliver meets the highest standards of accuracy and reliability."
  },
  {
    icon: "mdi:account-group",
    title: "Collaboration",
    description: "We believe in the power of teamwork, working closely with clients and partners to achieve exceptional results."
  },
  {
    icon: "mdi:leaf",
    title: "Sustainability",
    description: "We're committed to developing environmentally responsible solutions that contribute to a sustainable future."
  }
];

export const officeLocations = [
  {
    id: 1,
    name: "Detroit Headquarters",
    type: "headquarters",
    address: "450 W Innovation Drive, Detroit, MI 48226",
    phone: "+1 (555) 123-4567",
    email: "detroit@mechnovate.com",
    manager: "Dr. Emily Chen",
    specialties: ["Automotive Engineering", "Manufacturing", "R&D"],
    employees: 45,
    established: "2010",
    icon: "mdi:factory"
  },
  {
    id: 2,
    name: "Silicon Valley Innovation Lab",
    type: "research",
    address: "2580 Technology Blvd, San Jose, CA 95110",
    phone: "+1 (555) 987-6543",
    email: "siliconvalley@mechnovate.com",
    manager: "Michael Wei",
    specialties: ["AI Engineering", "Digital Twins", "Robotics"],
    employees: 28,
    established: "2018",
    icon: "mdi:robot"
  },
  {
    id: 3,
    name: "Houston Energy Solutions",
    type: "branch",
    address: "8900 Energy Corridor Dr, Houston, TX 77079",
    phone: "+1 (555) 456-7890",
    email: "houston@mechnovate.com",
    manager: "Sarah Martinez",
    specialties: ["Oil & Gas", "Renewable Energy", "Pipeline Engineering"],
    employees: 22,
    established: "2020",
    icon: "mdi:oil-lamp"
  },
  {
    id: 4,
    name: "Boston Precision Center",
    type: "branch",
    address: "150 Science Park Dr, Boston, MA 02114",
    phone: "+1 (555) 234-5678",
    email: "boston@mechnovate.com",
    manager: "Dr. Alex Kumar",
    specialties: ["Medical Devices", "Precision Manufacturing", "Bioengineering"],
    employees: 18,
    established: "2021",
    icon: "mdi:medical-bag"
  }
];

// Hero Section Data
export const heroData = {
  title: "Q HUB INFORMATION",
  subtitle: "Enterprise Software Solutions",
  description: "Transform Your Business with Cutting-Edge Technology",
  subDescription: "Trusted by leading companies worldwide for innovative software development",
  buttons: [
    { text: "Get Started", primary: true },
    { text: "View Portfolio", primary: false }
  ]
};

// About Section Data
export const aboutData = {
  title: "About Q HUB INFORMATION",
  mainText: "We are a leading software development company specializing in enterprise-grade solutions. With years of proven expertise, we've helped transform businesses globally through innovative technology.",
  secondaryText: "Our team of 150+ certified engineers combines deep technical expertise with industry-specific knowledge to deliver solutions that drive measurable business impact.",
  highlights: {
    title: "Excellence in Every Line of Code",
    description: "We don't just build software; we architect digital ecosystems that scale with your ambitions."
  },
  stats: [
    { value: 500, label: "Projects Delivered", suffix: "+" },
    { value: 150, label: "Expert Engineers", suffix: "+" },
    { value: 120, label: "Happy Clients", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" }
  ],
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
  imageAlt: "Q HUB INFORMATION team collaborating on software development",
  badges: ["Innovative Solutions", "Agile Development", "24/7 Support", "Global Reach"],
  cta: {
    label: "Learn More About Us",
    href: "/about"
  }
};

// Services Data
export const servicesData = [
  {
    icon: "⚡",
    title: "Digital Transformation",
    subtitle: "Consulting",
    description: "End-to-end digital transformation strategies that modernize legacy systems and optimize business processes.",
    features: ["Cloud Migration", "Process Automation", "Data Analytics", "Change Management"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    subtitle: "Solutions",
    description: "Custom AI models and machine learning pipelines that automate decision-making and unlock insights.",
    features: ["Predictive Analytics", "NLP Solutions", "Computer Vision", "MLOps"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: "💼",
    title: "Enterprise Software",
    subtitle: "Development",
    description: "Scalable enterprise applications built with microservices architecture and cloud-native principles.",
    features: ["ERP Systems", "CRM Platforms", "Supply Chain", "HR Tech"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    subtitle: "& Compliance",
    description: "Comprehensive security frameworks ensuring data protection and regulatory compliance.",
    features: ["Security Audits", "GDPR/HIPAA", "Zero Trust", "SOC 2"],
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    subtitle: "& DevOps",
    description: "Cloud-native architectures with automated CI/CD pipelines for rapid, reliable deployments.",
    features: ["Multi-Cloud", "Kubernetes", "IaC", "Monitoring"],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: "📊",
    title: "Data Engineering",
    subtitle: "& Analytics",
    description: "Modern data platforms that transform raw data into actionable business intelligence.",
    features: ["Data Lakes", "Real-time Analytics", "ETL Pipelines", "BI Dashboards"],
    gradient: "from-yellow-500 to-red-500"
  }
];

// Industries Data
export const industriesData = [
  {
    icon: "ph:buildings-bold",
    title: "Banking & Financial Services",
    description: "Digital banking platforms, risk management systems, and regulatory compliance solutions",
    clients: "50+ Major Banks",
    color: "#4F46E5",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    icon: "ph:heart-straight-bold",
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant telemedicine platforms, EHR systems, and clinical trial management",
    clients: "100+ Healthcare Providers",
    color: "#059669",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: "ph:shopping-cart-bold",
    title: "Retail & E-commerce",
    description: "Omnichannel retail solutions, inventory management, and personalization engines",
    clients: "200+ Retail Brands",
    color: "#DC2626",
    gradient: "from-red-500 to-pink-600"
  },
  {
    icon: "ph:gear-six-bold",
    title: "Manufacturing & Chain",
    description: "IoT-enabled factory automation, predictive maintenance, and supply chain optimization",
    clients: "75+ Manufacturers",
    color: "#7C3AED",
    gradient: "from-violet-500 to-purple-600"
  },
  {
    icon: "ph:steering-wheel-bold",
    title: "Automotive & Mobility",
    description: "Connected vehicle platforms, fleet management, and autonomous driving solutions",
    clients: "30+ Automotive Companies",
    color: "#EA580C",
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: "ph:lightning-bold",
    title: "Energy & Utilities",
    description: "Smart grid solutions, renewable energy management, and predictive analytics with AI and Machine Learning",
    clients: "40+ Energy Providers",
    color: "#0891B2",
    gradient: "from-cyan-500 to-blue-600"
  }
];

// Tech Stack Data
export const techStackData = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "#e11d48",
    technologies: [
      { name: "React/Next.js", level: 98, expertise: "Expert", projects: "200+" },
      { name: "Angular", level: 95, expertise: "Expert", projects: "150+" },
      { name: "Vue.js", level: 92, expertise: "Advanced", projects: "100+" },
      { name: "TypeScript", level: 96, expertise: "Expert", projects: "250+" }
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#7c3aed",
    technologies: [
      { name: "Node.js", level: 97, expertise: "Expert", projects: "300+" },
      { name: "Python/Django", level: 95, expertise: "Expert", projects: "250+" },
      { name: ".NET Core", level: 93, expertise: "Advanced", projects: "180+" },
      { name: "Java Spring", level: 94, expertise: "Expert", projects: "200+" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "#059669",
    technologies: [
      { name: "AWS", level: 98, expertise: "Expert", projects: "400+" },
      { name: "Azure", level: 95, expertise: "Expert", projects: "300+" },
      { name: "Kubernetes", level: 93, expertise: "Advanced", projects: "200+" },
      { name: "Terraform", level: 91, expertise: "Advanced", projects: "150+" }
    ]
  },
  {
    category: "Data & AI",
    icon: "🤖",
    color: "#dc2626",
    technologies: [
      { name: "TensorFlow", level: 92, expertise: "Advanced", projects: "100+" },
      { name: "PyTorch", level: 90, expertise: "Advanced", projects: "80+" },
      { name: "Spark", level: 94, expertise: "Expert", projects: "150+" },
      { name: "Kafka", level: 93, expertise: "Advanced", projects: "120+" }
    ]
  }
];

// Process Timeline Data
export const processData = [
  {
    phase: "01",
    title: "Discovery & Analysis",
    description: "We conduct thorough business analysis, stakeholder interviews, and technical assessments to understand your unique challenges.",
    icon: "🔍",
    duration: "2-3 weeks",
    deliverables: ["Business Requirements", "Technical Architecture", "Project Roadmap", "Risk Assessment"]
  },
  {
    phase: "02",
    title: "Solution Design",
    description: "Our architects design scalable solutions with detailed technical specifications and user experience blueprints.",
    icon: "📐",
    duration: "3-4 weeks",
    deliverables: ["System Architecture", "API Design", "Database Schema", "UI/UX Mockups"]
  },
  {
    phase: "03",
    title: "Agile Development",
    description: "Using proven agile methodologies, we build your solution in iterative sprints with continuous stakeholder feedback.",
    icon: "💻",
    duration: "8-16 weeks",
    deliverables: ["Sprint Releases", "Code Documentation", "Test Reports", "Demo Sessions"]
  },
  {
    phase: "04",
    title: "Quality Assurance",
    description: "Rigorous testing ensures your application meets the highest standards of performance, security, and reliability.",
    icon: "✅",
    duration: "2-3 weeks",
    deliverables: ["Test Automation", "Security Audit", "Performance Report", "UAT Sign-off"]
  },
  {
    phase: "05",
    title: "Deployment & Support",
    description: "Seamless production deployment with 24/7 monitoring, maintenance, and continuous improvement.",
    icon: "🚀",
    duration: "Ongoing",
    deliverables: ["Production Release", "Training Materials", "SLA Agreement", "Support Portal"]
  }
];

// Portfolio/Projects Data - Software Development Focused
export const portfolioData = [
  {
    id: 1,
    title: "Enterprise E-commerce Platform",
    client: "Global Retail Corporation",
    category: "E-commerce",
    type: "Web Platform",
    status: "Live",
    year: "2024",
    duration: "14 months",
    teamSize: "12 developers",
    budget: "$2.5M+",
    impact: {
      users: "10M+",
      revenue: "+500%",
      uptime: "99.9%",
      performance: "3x faster"
    },
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "GraphQL"],
    features: ["Microservices Architecture", "Real-time Analytics", "AI Recommendations", "Auto-scaling Infrastructure"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    description: "Scalable e-commerce platform handling millions of concurrent users with AI-powered recommendations and real-time inventory management",
    challenge: "Build a high-performance platform capable of handling Black Friday traffic spikes",
    solution: "Implemented microservices architecture with auto-scaling capabilities and advanced caching",
    gradient: "from-purple-500 to-blue-500",
    featured: true
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    client: "FinTech Startup",
    category: "Mobile App",
    type: "Financial Technology",
    status: "Live",
    year: "2024",
    duration: "8 months",
    teamSize: "8 developers",
    budget: "$1.2M+",
    impact: {
      downloads: "1M+",
      rating: "4.8/5",
      fraud_reduction: "60%",
      retention: "80%"
    },
    technologies: ["React Native", "Python", "TensorFlow", "AWS Lambda", "PostgreSQL", "Firebase"],
    features: ["Biometric Authentication", "AI Fraud Detection", "Real-time Notifications", "Cross-platform Support"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    description: "Secure mobile banking app with AI-powered fraud detection and personalized financial insights",
    challenge: "Create a secure yet user-friendly banking experience for millennials and Gen Z",
    solution: "Developed cross-platform app with biometric security and AI-powered financial insights",
    gradient: "from-green-500 to-teal-500",
    featured: true
  },
  {
    id: 3,
    title: "Healthcare Management System",
    client: "Healthcare Network",
    category: "Web Platform",
    type: "Healthcare Technology",
    status: "Live",
    year: "2024",
    duration: "12 months",
    teamSize: "15 developers",
    budget: "$3.1M+",
    impact: {
      patients: "500K+",
      efficiency: "+50%",
      compliance: "99.99%",
      telemedicine: "+200%"
    },
    technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "WebRTC", "AWS", "Docker", "Terraform"],
    features: ["HIPAA Compliance", "Telemedicine", "Patient Records", "Automated Billing"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    description: "HIPAA-compliant healthcare platform integrating patient records, telemedicine, and billing systems",
    challenge: "Integrate multiple hospital systems while maintaining strict HIPAA compliance",
    solution: "Built cloud-native platform with end-to-end encryption and seamless system integration",
    gradient: "from-blue-500 to-cyan-500",
    featured: true
  },
  {
    id: 4,
    title: "IoT Fleet Management Dashboard",
    client: "Logistics Corporation",
    category: "Web Platform",
    type: "IoT Analytics",
    status: "Live",
    year: "2023",
    duration: "10 months",
    teamSize: "10 developers",
    budget: "$1.8M+",
    impact: {
      vehicles: "10K+",
      fuel_savings: "25%",
      delivery_time: "+40%",
      maintenance_cost: "-60%"
    },
    technologies: ["Angular", "Spring Boot", "Apache Kafka", "MongoDB", "InfluxDB", "Grafana", "AWS IoT"],
    features: ["Real-time Tracking", "Predictive Analytics", "Automated Alerts", "Route Optimization"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    description: "Real-time IoT dashboard for monitoring and managing large vehicle fleets with predictive analytics",
    challenge: "Process massive amounts of real-time data from thousands of vehicles",
    solution: "Implemented scalable IoT architecture with real-time data processing and machine learning",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Blockchain Supply Chain Platform",
    client: "Manufacturing Consortium",
    category: "Web Platform",
    type: "Blockchain Technology",
    status: "Live",
    year: "2023",
    duration: "16 months",
    teamSize: "9 developers",
    budget: "$2.2M+",
    impact: {
      products: "1M+",
      counterfeit_reduction: "80%",
      transparency: "100%",
      compliance: "+50%"
    },
    technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS", "Web3.js", "MongoDB", "Docker"],
    features: ["Smart Contracts", "Product Traceability", "Authentication", "Compliance Reporting"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
    description: "Blockchain-based platform providing end-to-end supply chain transparency and authenticity verification",
    challenge: "Create immutable product tracking system for luxury goods and pharmaceuticals",
    solution: "Developed blockchain platform with smart contracts and IoT integration",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 6,
    title: "AI-Powered DevOps Platform",
    client: "Software Development Agency",
    category: "DevOps Platform",
    type: "Automation & Monitoring",
    status: "Live",
    year: "2024",
    duration: "11 months",
    teamSize: "7 developers",
    budget: "$1.5M+",
    impact: {
      deployment_time: "-90%",
      uptime: "99.9%",
      incidents: "-70%",
      efficiency: "+80%"
    },
    technologies: ["Python", "Kubernetes", "Jenkins", "Prometheus", "Grafana", "TensorFlow", "AWS", "Terraform"],
    features: ["Automated Pipelines", "Predictive Analytics", "Self-healing Systems", "Performance Monitoring"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Intelligent DevOps platform with automated CI/CD pipelines and predictive issue detection",
    challenge: "Automate complex deployment processes while ensuring reliability and performance",
    solution: "Built AI-powered platform with automated pipelines and predictive maintenance capabilities",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: 7,
    title: "Social Media Analytics Platform",
    client: "Digital Marketing Agency",
    category: "Web Platform",
    type: "Data Analytics",
    status: "Live",
    year: "2023",
    duration: "9 months",
    teamSize: "6 developers",
    budget: "$980K+",
    impact: {
      posts_processed: "10M+/day",
      accuracy: "95%",
      cost_reduction: "90%",
      clients: "100+"
    },
    technologies: ["React", "AWS Lambda", "DynamoDB", "Elasticsearch", "Python", "NLP Libraries", "D3.js"],
    features: ["Sentiment Analysis", "Real-time Processing", "Custom Dashboards", "API Integration"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    description: "Serverless social media analytics platform with real-time sentiment analysis and insights",
    challenge: "Process millions of social media posts in real-time with high accuracy",
    solution: "Implemented serverless architecture with NLP for sentiment analysis and real-time processing",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 8,
    title: "Real Estate Investment Platform",
    client: "PropTech Startup",
    category: "Web Platform",
    type: "Financial Technology",
    status: "Live",
    year: "2024",
    duration: "13 months",
    teamSize: "11 developers",
    budget: "$2.1M+",
    impact: {
      investments: "$500M+",
      users: "50K+",
      roi: "+25%",
      automation: "85%"
    },
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Redis", "Stripe", "AWS", "Docker", "TypeScript"],
    features: ["Investment Tracking", "Automated Reports", "Payment Processing", "Portfolio Analytics"],
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
    description: "Comprehensive real estate investment platform with automated portfolio management",
    challenge: "Create transparent and accessible real estate investment platform for retail investors",
    solution: "Developed secure platform with automated investment tracking and regulatory compliance",
    gradient: "from-emerald-500 to-green-500"
  },
  {
    id: 9,
    title: "Educational Learning Management System",
    client: "EdTech Global",
    category: "Web Platform",
    type: "Education Technology",
    status: "Live",
    year: "2024",
    duration: "10 months",
    teamSize: "14 developers",
    budget: "$1.9M+",
    impact: {
      students: "1M+",
      courses: "10K+",
      completion_rate: "85%",
      engagement: "+150%"
    },
    technologies: ["React", "Laravel", "MySQL", "WebRTC", "AWS", "Docker", "Redis", "ElasticSearch"],
    features: ["Interactive Courses", "Video Conferencing", "Progress Tracking", "Assessment Tools"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    description: "Comprehensive learning management system with interactive courses and video conferencing",
    challenge: "Create engaging online learning experience with scalable video infrastructure",
    solution: "Built interactive LMS with WebRTC integration and personalized learning paths",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    id: 10,
    title: "Restaurant Management SaaS",
    client: "FoodTech Solutions",
    category: "Web Platform",
    type: "SaaS Solution",
    status: "Live",
    year: "2023",
    duration: "7 months",
    teamSize: "8 developers",
    budget: "$1.1M+",
    impact: {
      restaurants: "2K+",
      orders: "5M+",
      efficiency: "+60%",
      revenue: "+35%"
    },
    technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "Stripe", "Twilio", "AWS", "Docker"],
    features: ["Order Management", "Inventory Tracking", "Staff Scheduling", "Analytics Dashboard"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description: "All-in-one restaurant management SaaS with order processing and inventory management",
    challenge: "Integrate multiple restaurant operations into a single, easy-to-use platform",
    solution: "Developed comprehensive SaaS solution with real-time order processing and analytics",
    gradient: "from-red-500 to-pink-500"
  },
  {
    id: 11,
    title: "Cryptocurrency Trading Platform",
    client: "CryptoTech Exchange",
    category: "Web Platform",
    type: "Financial Technology",
    status: "Live",
    year: "2023",
    duration: "15 months",
    teamSize: "16 developers",
    budget: "$3.5M+",
    impact: {
      volume: "$1B+",
      users: "200K+",
      uptime: "99.98%",
      security: "Zero breaches"
    },
    technologies: ["React", "Node.js", "MongoDB", "Redis", "WebSocket", "AWS", "Kubernetes", "Docker"],
    features: ["Real-time Trading", "Advanced Charts", "Security Features", "API Integration"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    description: "High-performance cryptocurrency trading platform with real-time market data and advanced security",
    challenge: "Build ultra-low latency trading system with bank-level security",
    solution: "Implemented high-frequency trading infrastructure with advanced security protocols",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 12,
    title: "Smart City IoT Dashboard",
    client: "Municipal Government",
    category: "Web Platform",
    type: "Smart City Solution",
    status: "Live",
    year: "2024",
    duration: "18 months",
    teamSize: "13 developers",
    budget: "$2.8M+",
    impact: {
      sensors: "50K+",
      energy_savings: "30%",
      traffic_efficiency: "+45%",
      citizen_satisfaction: "+70%"
    },
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "InfluxDB", "Grafana", "AWS IoT", "Docker"],
    features: ["Real-time Monitoring", "Predictive Analytics", "Automated Alerts", "Citizen Portal"],
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    description: "Comprehensive smart city platform monitoring traffic, energy, and public services",
    challenge: "Integrate diverse city systems into unified monitoring and control platform",
    solution: "Developed IoT platform with real-time analytics and predictive maintenance capabilities",
    gradient: "from-teal-500 to-cyan-500"
  }
];

// Why Choose Data
export const whyChooseData = [
  {
    icon: "🏆",
    title: "Industry Leaders",
    description: "Recognized by Gartner and Forrester as a top technology consulting firm with proven expertise across industries.",
    highlight: "Top 1% Talent"
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "ISO 27001 certified with SOC 2 Type II compliance. Your data security is our highest priority.",
    highlight: "Bank-Grade Security"
  },
  {
    icon: "⚡",
    title: "Agile Delivery",
    description: "95% on-time delivery rate with flexible engagement models that adapt to your business needs to meet your deadlines.",
    highlight: "2x Faster Delivery"
  },
  {
    icon: "🌍",
    title: "Global Expertise",
    description: "24/7 support across time zones with dedicated teams that understand local markets and regulations.",
    highlight: "25+ Countries"
  }
];

// Mission Vision Data
export const missionVisionData = {
  description: "At Steganox, we turn complexity into clarity. Our name is inspired by Steganographers — experts in precision, encryption, and hidden meaning.",
  mission: {
    statement: "To empower businesses through intelligent, reliable, and future-ready software — turning complex challenges into powerful digital opportunities.",
    values: ["Innovation at our core", "Security at our core", "Scalability at our core"]
  },
  vision: {
    statement: "To be a trusted global technology partner, known for precision engineering, innovation, and delivering solutions that make a meaningful impact.",
    goals: ["Global Reach", "Trusted Partner", "Meaningful Impact"]
  }
};

