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

// Mechanical Engineering Company Data
export const companyInfo = {
  name: "MechNovate",
  tagline: "Engineering Ideas into Reality",
  description: "From Concept to Creation, Mechanically Engineered. We help innovators, startups, and enterprises transform mechanical concepts into manufacturable, market-ready products.",
  founded: "2019",
  employees: "50+",
  projectsCompleted: "350+",
  clientsWorldwide: "80+",
  satisfaction: "99%"
};

export const services = [
  {
    id: 1,
    icon: "carbon:idea",
    title: "Concept Design & Engineering",
    description: "Functional design concepts and mechanical feasibility product strategy and cost-performance balance.",
    features: ["Ideation & Concept Generation", "Feasibility Analysis", "Cost Optimization", "Market Strategy"],
    gradient: "from-neon-500 to-neon-600"
  },
  {
    id: 2,
    icon: "carbon:3d-mpr-toggle",
    title: "CAD Modeling & 3D Design",
    description: "Advanced 3D modeling in SolidWorks, CATIA, and Fusion 360 loram lorem lorem lorem  with intelligent parametric logic and automation.",
    features: ["SolidWorks", "CATIA", "Fusion 360", "Parametric Design"],
    gradient: "from-cyber-500 to-quantum-500"
  },
  {
    id: 3,
    icon: "carbon:flow-data",
    title: "CFD & FEA Simulation",
    description: "Reduce physical trial-and-error through virtual prototyping with fluid dynamics and structural analysis and FEA Analysis with ANSYS and COMSOL.",
    features: ["Fluid Flow Analysis", "Thermal Systems", "Structural Strength", "Fatigue Analysis", "FEA Analysis", "CFD Analysis"],
    gradient: "from-quantum-500 to-plasma-500"
  },
  {
    id: 4,
    icon: "carbon:3d-print-mesh",
    title: "Prototyping & Testing",
    description: "3D printing, CNC, and laser-cut models for real-world testing with multiple iteration loops for optimized designs.",
    features: ["3D Printing", "CNC Machining", "Laser Cutting", "Rapid Iteration"],
    gradient: "from-plasma-500 to-neon-500"
  },
  {
    id: 5,
    icon: "carbon:industry",
    title: "Design for Manufacturing",
    description: "Tolerance analysis, assembly modeling, and material selection with supplier-ready 2D drawings and manufacturing BOMs.",
    features: ["DFM & DFA", "Tolerance Analysis", "Material Selection", "Technical Drawings"],
    gradient: "from-hologram-500 to-cyber-500"
  },
  {
    id: 6,
    icon: "carbon:scan-alt",
    title: "Reverse Engineering",
    description: "Convert 3D scan data into editable CAD models for legacy parts, competitor benchmarking, or repair modeling.",
    features: ["3D Scanning", "Scan-to-CAD", "Legacy Parts", "Dimensional Accuracy"],
    gradient: "from-matrix-500 to-quantum-500"
  }
];

export const technologies = {
  cad: [
    { name: "SolidWorks", icon: "carbon:3d-software", level: 95 },
    { name: "CATIA", icon: "simple-icons:dassaultsystemes", level: 92 },
    { name: "Fusion 360", icon: "simple-icons:autodesk", level: 88 },
    { name: "AutoCAD", icon: "simple-icons:autocad", level: 85 },
    { name: "Creo", icon: "carbon:3d-software", level: 87 },
    { name: "NX", icon: "carbon:3d-mpr-toggle", level: 83 }
  ],
  simulation: [
    { name: "ANSYS", icon: "simple-icons:ansys", level: 93 },
    { name: "COMSOL", icon: "carbon:flow-data", level: 90 },
    { name: "Abaqus", icon: "carbon:stress-test", level: 88 },
    { name: "SolidWorks Simulation", icon: "carbon:analytics", level: 92 },
    { name: "CFD Tools", icon: "carbon:flow", level: 87 },
    { name: "MATLAB", icon: "simple-icons:mathworks", level: 85 }
  ],
  manufacturing: [
    { name: "CNC Programming", icon: "mdi:robot-industrial", level: 94 },
    { name: "3D Printing", icon: "carbon:3d-print-mesh", level: 91 },
    { name: "Laser Cutting", icon: "mdi:laser-pointer", level: 89 },
    { name: "Injection Molding", icon: "mdi:hydraulic-oil-level", level: 86 },
    { name: "Sheet Metal", icon: "mdi:hammer-wrench", level: 88 },
    { name: "Welding Design", icon: "mdi:torch", level: 82 }
  ],
  standards: [
    { name: "ISO Standards", icon: "mdi:certificate", level: 95 },
    { name: "ASME", icon: "mdi:book-check", level: 92 },
    { name: "DIN Standards", icon: "mdi:file-document-check", level: 90 },
    { name: "CE Marking", icon: "mdi:shield-check", level: 88 },
    { name: "UL Certification", icon: "mdi:safety-certificate", level: 85 },
    { name: "RoHS Compliance", icon: "mdi:leaf-circle", level: 87 }
  ],
  tools: [
    { name: "GD&T", icon: "mdi:ruler-square-compass", level: 93 },
    { name: "Tolerance Analysis", icon: "mdi:tape-measure", level: 91 },
    { name: "BOM Management", icon: "mdi:format-list-bulleted", level: 89 },
    { name: "PDM Systems", icon: "mdi:database-cog", level: 86 },
    { name: "Project Management", icon: "mdi:clipboard-check", level: 90 },
    { name: "Technical Documentation", icon: "mdi:file-document-edit", level: 88 }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "Head of Product Development",
    company: "TechWear Inc",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "MechNovate's design team transformed our concept into a market-ready wearable device and 3D printed device. Their expertise in miniaturization and ergonomics helped us achieve a 40% size functionality.",
    rating: 5,
    project: "Smart Fitness Tracker gripper"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Manufacturing Director",
    company: "AutoParts Global",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The robotic gripper system they designed increased our production efficiency by 85% and 90% . Their understanding of manufacturing constraints and DFM principles is exceptional.",
    rating: 5,
    project: "Adaptive Gripper System and 3D printed gripper"
  },
  {
    id: 3,
    name: "Elena Watson",
    position: "VP of Engineering",
    company: "MedTech Innovations",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "Their team delivered a complex medical device design that passed FDA FDA FDB FDAC FDAD approval on the first submission. The attention to regulatory requirements outstanding to perform the Work.",
    rating: 5,
    project: "Diagnostic Device for the Work"
  },
  {
    id: 4,
    name: "David Kim",
    position: "Product Manager",
    company: "Consumer Electronics Co",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "MechNovate's simulation expertise saved us months of prototyping enhanced and more efficient. Their CFD analysis identified cooling issues early, resulting in a 30% thermal performance.",
    rating: 5,
    project: "Electronic Enclosure Design"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Director of R&D",
    company: "Aerospace Components Ltd",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    content: "Their FEA analysis and weight optimization reduced our component weight by hieght and width to moduel on board 25% while maintaining structural integrity. Exceptional engineering expertise.",
    rating: 5,
    project: "Aerospace Bracket Design"
  },
  {
    id: 6,
    name: "James Anderson",
    position: "CEO",
    company: "IoT Solutions Inc",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    content: "MechNovate designed our entire product line from concept to manufacturing to moduel on board. Their end-to-end expertise and design automation tools accelerated our by 40%.",
    rating: 5,
    project: "Smart Home Device Suite"
  }
];

export const caseStudies = [
  {
    id: 1,
    title: "FEA Project Hunting for Mechanical Design Optimization",
    client: "Multiple Industries",
    industry: "Multi-Industry",
    challenge: "Identify, pursue, and execute high-impact FEA-based projects across various mechanical design domains including stress analysis, thermal analysis, buckling, vibration, and fatigue studies",
    solution: "Implemented systematic approach combining opportunity mapping, tailored proposal strategies, pilot analysis demonstrations, and client education to deliver simulation-driven design solutions across aerospace, automotive, industrial machinery, and consumer electronics sectors",
    results: ["18% material usage reduction", "FoS > 2.0 in 80% projects", "10+ diverse simulations", "Reusable templates developed"],
    technologies: ["SolidWorks Simulation", "ANSYS", "Fusion 360", "Onshape", "Python Scripting"],
    duration: "12 months",
    teamSize: "5 engineers",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
    scope: {
      targetSectors: ["Aerospace", "Automotive", "Industrial Machinery", "Consumer Electronics"],
      projectTypes: ["Stress analysis", "Thermal analysis", "Buckling", "Vibration", "Fatigue"],
      projectSources: ["Freelancing platforms (Upwork, Freelancer)", "Academic collaborations", "Open-source communities"]
    },
    approach: [
      "Opportunity Mapping: Identified key industries and high-value FEA applications",
      "Proposal Strategy: Tailored proposals demonstrating simulation capabilities and reliability",
      "Pilot Analysis: Delivered demo simulations to build trust with prospective clients",
      "Client Education: Explained value of FEA via visuals, analogies, and practical examples"
    ],
    keyResults: [
      "Executed 10+ diverse FEA simulations including tie-rod cylinders, brackets, casings, and electronics enclosures",
      "Reduced material usage by up to 18% through stress optimization",
      "Achieved Factor of Safety > 2.0 in 80% of the projects, exceeding design safety targets",
      "Developed reusable templates for meshing, boundary setup, and post-processing"
    ],
    challenges: [
      {
        challenge: "Client Awareness: Many clients unaware of FEA benefits",
        resolution: "Resolved via visuals and analogies to demonstrate value"
      },
      {
        challenge: "Unclear Specifications: Addressed lack of data",
        resolution: "Used assumption logs and conservative estimates"
      },
      {
        challenge: "Computation Limits: Managing simulation times",
        resolution: "Used symmetry, mesh refinement, and result filtering"
      }
    ],
    outcome: "This initiative led to expanded technical capabilities, enhanced client communication, and improved confidence in simulation-driven design. The process of project hunting matured into a systematic method for FEA consulting and freelance engineering delivery.",
    isClientHighlight: true
  },
  {
    id: 2,
    title: "Smart Wearable Device",
    client: "Tech Startup",
    industry: "Consumer Electronics",
    challenge: "Design a compact, ergonomic fitness tracker with advanced sensors",
    solution: "Developed a sleek design with integrated multi-sensor array and 7-day battery life",
    results: ["40% size reduction", "7-day battery life", "IP68 waterproof rating"],
    technologies: ["SolidWorks", "FEA Analysis", "3D Printing", "DFM"],
    duration: "4 months",
    teamSize: "6 engineers",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800"
  },
  {
    id: 3,
    title: "Industrial Automation Gripper",
    client: "Manufacturing Giant",
    industry: "Industrial Automation",
    challenge: "Create a versatile robotic gripper for handling various part geometries",
    solution: "Engineered an adaptive gripper with force feedback and modular jaw system",
    results: ["85% faster changeover", "0.1mm precision", "50kg payload capacity"],
    technologies: ["CATIA", "ANSYS", "CNC Machining", "Servo Control"],
    duration: "6 months",
    teamSize: "8 engineers",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800"
  },
  {
    id: 4,
    title: "Medical Diagnostic Device",
    client: "Healthcare Innovator",
    industry: "Medical Devices",
    challenge: "Miniaturize a blood analysis device for point-of-care testing",
    solution: "Designed a portable device with microfluidics and automated sample processing",
    results: ["75% size reduction", "2-minute test time", "FDA approved"],
    technologies: ["Fusion 360", "CFD Simulation", "Injection Molding", "ISO 13485"],
    duration: "8 months",
    teamSize: "10 engineers",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800"
  },
  {
    id: 5,
    title: "Aerospace Component Optimization",
    client: "Aerospace Manufacturer",
    industry: "Aerospace",
    challenge: "Reduce weight of critical aircraft components while maintaining structural integrity",
    solution: "Applied topology optimization and advanced materials to achieve 30% weight reduction",
    results: ["30% weight reduction", "25% cost savings", "Enhanced performance"],
    technologies: ["CATIA", "ANSYS", "Topology Optimization", "Titanium Alloys"],
    duration: "10 months",
    teamSize: "12 engineers",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581093196277-9f608732aee8?w=800"
  },
  {
    id: 6,
    title: "Automotive Electric Vehicle Platform",
    client: "EV Startup",
    industry: "Automotive",
    challenge: "Design lightweight, efficient electric vehicle chassis for urban mobility",
    solution: "Developed modular aluminum space frame with integrated battery protection",
    results: ["20% lighter than competitors", "300km range", "5-star safety rating"],
    technologies: ["SolidWorks", "ANSYS", "Aluminum Extrusion", "FEA"],
    duration: "12 months",
    teamSize: "15 engineers",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
  },
  {
    id: 7,
    title: "Precision Manufacturing Equipment",
    client: "Machine Tool Company",
    industry: "Industrial Equipment",
    challenge: "Develop high-precision CNC machine for semiconductor manufacturing",
    solution: "Engineered ultra-stable machine tool with nanometer-level accuracy",
    results: ["1nm positioning accuracy", "50% faster processing", "Zero downtime"],
    technologies: ["Creo", "ANSYS", "Precision Bearings", "Servo Systems"],
    duration: "14 months",
    teamSize: "18 engineers",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800"
  }
];

// Enhanced Blog data for the blog page
export const blogCategories = [
  { id: "all", name: "All Posts", icon: "mdi:view-grid", count: 24 },
  { id: "design", name: "Mechanical Design", icon: "mdi:drawing", count: 8 },
  { id: "automation", name: "Automation", icon: "mdi:robot-industrial", count: 6 },
  { id: "manufacturing", name: "Manufacturing", icon: "mdi:factory", count: 5 },
  { id: "innovation", name: "Innovation", icon: "mdi:lightbulb", count: 3 },
  { id: "sustainability", name: "Sustainability", icon: "mdi:leaf", count: 2 }
];

export const blogAuthors = [
  {
    id: "emily-chen",
    name: "Dr. Emily Chen",
    role: "Chief Engineer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    bio: "PhD in Mechanical Engineering with 15+ years in precision manufacturing and automotive design.",
    expertise: ["Precision Engineering", "Automotive Design", "Materials Science"],
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
    expertise: ["Industrial Automation", "Robotics", "IoT Systems"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "robert.jackson@mechnovate.com"
    }
  },
  {
    id: "sarah-martinez",
    name: "Sarah Martinez",
    role: "Lead Designer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80",
    bio: "Creative mechanical designer specializing in sustainable solutions and innovative product development.",
    expertise: ["Sustainable Design", "CAD Modeling", "Product Development"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah.martinez@mechnovate.com"
    }
  },
  {
    id: "michael-wei",
    name: "Michael Wei",
    role: "Innovation Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    bio: "Technology visionary driving digital transformation in mechanical engineering through AI and advanced simulation.",
    expertise: ["Digital Innovation", "AI Integration", "Advanced Simulation"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael.wei@mechnovate.com"
    }
  },
  {
    id: "alex-kumar",
    name: "Dr. Alex Kumar",
    role: "Research Scientist",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80",
    bio: "Materials science researcher focusing on next-generation composites and smart materials for aerospace applications.",
    expertise: ["Materials Science", "Aerospace Engineering", "Composite Materials"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex.kumar@mechnovate.com"
    }
  },
  {
    id: "lisa-thomson",
    name: "Lisa Thomson",
    role: "Sustainability Engineer",
    avatar: "https://images.unsplash.com/photo-1594736797933-d0d5e8f13420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80",
    bio: "Environmental engineer dedicated to developing sustainable manufacturing processes and circular economy solutions.",
    expertise: ["Sustainable Manufacturing", "Environmental Engineering", "Circular Economy"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa.thomson@mechnovate.com"
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
    tags: ["Precision Engineering", "Automotive", "Electric Vehicles", "Manufacturing Innovation"],
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
    tags: ["Collaborative Robotics", "Smart Manufacturing", "Industry 4.0", "Human-Robot Interaction"],
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
    tags: ["Bio-Composites", "Sustainable Materials", "Green Engineering", "Environmental Impact"],
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
    tags: ["Digital Twins", "Artificial Intelligence", "Predictive Analytics", "Product Development"],
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
    tags: ["CNC Machining", "Adaptive Control", "Real-time Optimization", "Precision Manufacturing"],
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
    tags: ["IoT", "Predictive Maintenance", "Machine Learning", "Zero Downtime"],
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
    tags: ["CFD", "Multi-Physics Simulation", "Computational Engineering", "Fluid Dynamics"],
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
    tags: ["AI", "Generative Design", "Machine Learning", "Creative Engineering"],
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
    tags: ["3D Printing", "Additive Manufacturing", "Metal Components", "Production Technology"],
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
    tags: ["Smart Materials", "Shape Memory Alloys", "Adaptive Systems", "Materials Science"],
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
    tags: ["Micro-Manufacturing", "Nanoscale Precision", "Medical Devices", "Advanced Manufacturing"],
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
    tags: ["Autonomous Manufacturing", "Lights-Out Production", "Self-Monitoring Systems", "Advanced Automation"],
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
    tags: ["Biomimetic Engineering", "Nature-Inspired Design", "Sustainable Solutions", "Bio-Engineering"],
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
    tags: ["Circular Economy", "Zero Waste", "Sustainable Manufacturing", "Resource Efficiency"],
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
    tags: ["Advanced Composites", "Automated Fiber Placement", "Aerospace Materials", "Lightweight Design"],
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
    title: "AI in Engineering",
    description: "Artificial intelligence revolutionizing mechanical design",
    postCount: 5,
    icon: "mdi:robot",
    color: "neon"
  },
  {
    title: "Sustainable Manufacturing",
    description: "Green technologies and circular economy solutions",
    postCount: 4,
    icon: "mdi:leaf",
    color: "cyber"
  },
  {
    title: "Advanced Materials",
    description: "Next-generation materials and smart composites",
    postCount: 6,
    icon: "mdi:molecule",
    color: "quantum"
  },
  {
    title: "Industry 4.0",
    description: "Smart manufacturing and IoT integration",
    postCount: 7,
    icon: "mdi:factory",
    color: "plasma"
  }
];

export const team = [
  {
    id: 1,
    name: "Dr. Alexandra Kumar",
    position: "CEO & Founder",
    bio: "15+ years in mechanical design. PhD in Mechanical Engineering from MIT.",
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
    position: "Chief Design Engineer",
    bio: "Former Tesla engineer. Expert in CAD automation and DFM.",
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
    position: "Head of Simulation",
    bio: "Published researcher in FEA/CFD. ANSYS certified professional.",
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
    position: "VP of Manufacturing",
    bio: "20+ years in production engineering. Six Sigma Black Belt.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

export const industries = [
  { name: "Consumer Products", icon: "mdi:package-variant", projects: 45 },
  { name: "Medical Devices", icon: "mdi:medical-bag", projects: 38 },
  { name: "Industrial Automation", icon: "mdi:robot-industrial", projects: 52 },
  { name: "Automotive", icon: "mdi:car-cog", projects: 31 },
  { name: "Aerospace", icon: "mdi:airplane", projects: 28 },
  { name: "IoT & Smart Hardware", icon: "mdi:chip", projects: 24 },
  { name: "Wearables", icon: "mdi:package-variant", projects: 19 },
  { name: "Equipment Design", icon: "mdi:cog-outline", projects: 35 }
];

export const process = [
  {
    id: 1,
    phase: "Ideation",
    title: "Concept Development",
    description: "Transform your ideas into viable mechanical concepts with feasibility analysis and market alignment.",
    duration: "1-2 weeks",
    activities: ["Concept Sketching", "Feasibility Study", "Market Analysis", "Cost Estimation"]
  },
  {
    id: 2,
    phase: "Design",
    title: "3D Modeling & CAD",
    description: "Create detailed 3D models with parametric design, assembly modeling, and design optimization.",
    duration: "2-4 weeks",
    activities: ["3D CAD Modeling", "Parametric Design", "Assembly Creation", "Design Review"]
  },
  {
    id: 3,
    phase: "Simulation",
    title: "Analysis & Validation",
    description: "Virtual testing through FEA and CFD analysis to validate design performance and optimize.",
    duration: "1-3 weeks",
    activities: ["FEA Analysis", "CFD Simulation", "Thermal Analysis", "Design Optimization"]
  },
  {
    id: 4,
    phase: "Prototyping",
    title: "Build & Test",
    description: "Physical prototyping using 3D printing, CNC machining, and real-world testing.",
    duration: "2-4 weeks",
    activities: ["3D Printing", "CNC Machining", "Assembly", "Testing & Iteration"]
  },
  {
    id: 5,
    phase: "Manufacturing",
    title: "Production Ready",
    description: "Prepare for mass production with DFM optimization, technical drawings, and supplier coordination.",
    duration: "2-3 weeks",
    activities: ["DFM Optimization", "Technical Drawings", "BOM Creation", "Supplier Liaison"]
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
    question: "What services does MechNovate offer?",
    answer: "We offer comprehensive mechanical engineering services including concept design, CAD modeling, FEA/CFD simulation, prototyping, reverse engineering, and design for manufacturing. Our team specializes in transforming ideas into manufacturable products.",
    icon: "carbon:information"
  },
  {
    id: 2,
    category: "Process",
    question: "How long does a typical design project take?",
    answer: "Project timelines vary based on complexity. A simple component design might take 2-4 weeks, while complex assemblies can take 2-3 months. We follow a structured process with regular design reviews, ensuring transparency throughout the development cycle.",
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
    question: "What CAD software and tools do you use?",
    answer: "We work with industry-leading tools including SolidWorks, CATIA, Fusion 360, ANSYS, COMSOL for simulation, and various manufacturing technologies. Our team is certified in multiple platforms to deliver optimal solutions for your specific needs.",
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
    name: "MechNovate Headquarters",
    address: "450 W Innovation Drive, Detroit, MI 48226",
    phone: "+1 (555) 123-4567",
    email: "headquarters@mechnovate.com",
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
    description: "MechNovate was established with a vision to revolutionize mechanical engineering through innovation and precision."
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
  title: "STEGANOX",
  subtitle: "Enterprise Software Solutions",
  description: "Transform Your Business with AI-Powered Technology",
  subDescription: "Trusted by Fortune 500 companies worldwide for mission-critical applications",
  buttons: [
    { text: "Schedule Consultation", primary: true },
    { text: "View Case Studies", primary: false }
  ]
};

// About Section Data
export const aboutData = {
  title: "About Steganox",
  mainText: "We are a global technology consultancy specializing in enterprise-grade software solutions. With over a decade of experience, we've helped transform businesses across 25+ countries.",
  secondaryText: "Our team of 150+ certified engineers combines deep technical expertise with industry-specific knowledge to deliver solutions that drive measurable business impact.",
  highlights: {
    title: "Excellence in Every Line of Code",
    description: "We don't just build software; we architect digital ecosystems that scale with your ambitions."
  },
  stats: [
    { value: 500, label: "Enterprise Clients", suffix: "+" },
    { value: 150, label: "Expert Engineers", suffix: "+" },
    { value: 25, label: "Countries Served", suffix: "+" },
    { value: 98, label: "Client Retention Rate", suffix: "%" }
  ]
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
    icon: "🏦",
    title: "Banking & Financial Services",
    description: "Digital banking platforms, risk management systems, and regulatory compliance solutions",
    clients: "50+ Major Banks",
    color: "#4F46E5"
  },
  {
    icon: "🏥",
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant telemedicine platforms, EHR systems, and clinical trial management",
    clients: "100+ Healthcare Providers",
    color: "#059669"
  },
  {
    icon: "🛍️",
    title: "Retail & E-commerce",
    description: "Omnichannel retail solutions, inventory management, and personalization engines",
    clients: "200+ Retail Brands",
    color: "#DC2626"
  },
  {
    icon: "🏭",
    title: "Manufacturing & Chain",
    description: "IoT-enabled factory automation, predictive maintenance, and supply chain optimization",
    clients: "75+ Manufacturers",
    color: "#7C3AED"
  },
  {
    icon: "🚗",
    title: "Automotive & Mobility",
    description: "Connected vehicle platforms, fleet management, and autonomous driving solutions",
    clients: "30+ Automotive Companies",
    color: "#EA580C"
  },
  {
    icon: "⚡",
    title: "Energy & Utilities",
    description: "Smart grid solutions, renewable energy management, and predictive analytics with AI and Machine Learning",
    clients: "40+ Energy Providers",
    color: "#0891B2"
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

// Portfolio/Case Studies Data
export const portfolioData = [
  {
    title: "Global Banking Platform",
    client: "Leading European Bank",
    industry: "Financial Services",
    impact: {
      users: "10M+",
      transactions: "$50B+/year",
      uptime: "99.99%"
    },
    technologies: ["React", "Node.js", "AWS", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    description: "Modernized legacy banking system to cloud-native microservices architecture"
  },
  {
    title: "AI-Powered Healthcare Platform",
    client: "National Health Network",
    industry: "Healthcare",
    impact: {
      patients: "5M+",
      accuracy: "97%",
      cost_saved: "$20M/year"
    },
    technologies: ["Python", "TensorFlow", "Azure", "FHIR"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    description: "Developed predictive analytics platform for early disease detection"
  },
  {
    title: "Supply Chain Optimization",
    client: "Fortune 500 Retailer",
    industry: "Retail",
    impact: {
      efficiency: "+45%",
      cost_reduction: "30%",
      delivery_time: "-2 days"
    },
    technologies: ["Java", "Kafka", "MongoDB", "React"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    description: "Real-time inventory management and demand forecasting system"
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
    description: "95% on-time delivery rate with flexible engagement models that adapt to your business needs.",
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

