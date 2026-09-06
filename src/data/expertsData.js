// Industry Experts & Career Mentorship Directory Data
// Notice: Profiles displayed in this catalog are illustrative demo simulations for educational guidance.
// SkillPulse does not claim official commercial representation, contractual partnerships, or endorsements.

export const EXPERT_DOMAINS = [
  'All Domains',
  'Software Engineering',
  'Data Science',
  'Product Management',
  'Cybersecurity',
  'Cloud Engineering',
  'AI / ML',
  'Data Analytics'
];

export const CONSULTATION_TYPES = [
  'All Consultations',
  'Career Guidance',
  'Resume Review',
  'Mock Interview',
  'Industry Q&A',
  'Ask an Expert'
];

export const EXPERIENCE_TIERS = [
  'All Experience',
  '3-5 Years (Mid-Level)',
  '6-10 Years (Senior)',
  '10+ Years (Principal / Lead)'
];

export const CONSULTATION_FORMATS = [
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    duration: '30 - 45 Mins',
    description: '1-on-1 strategic roadmap session covering role transitions, skill-gap prioritization, and industry expectations.',
    iconName: 'Compass'
  },
  {
    id: 'resume-review',
    title: 'Resume & Portfolio Review',
    duration: '30 Mins',
    description: 'Line-by-line feedback on technical resumes, GitHub repositories, and impact-driven project presentation.',
    iconName: 'FileText'
  },
  {
    id: 'mock-interview',
    title: 'Technical Mock Interview',
    duration: '45 - 60 Mins',
    description: 'Realistic technical and problem-solving interview simulation with rubric-based performance debriefing.',
    iconName: 'Code2'
  },
  {
    id: 'industry-qa',
    title: 'Industry Q&A & Insights',
    duration: '30 Mins',
    description: 'Direct Q&A covering day-to-day realities of engineering teams, hiring trends, and team culture.',
    iconName: 'HelpCircle'
  },
  {
    id: 'ask-an-expert',
    title: 'Ask an Expert',
    duration: 'Async / 15 Mins',
    description: 'Focused advice on a specific technical challenge, tool adoption, or career decision bottleneck.',
    iconName: 'MessageSquare'
  }
];

export const EXPERTS_DATA = [
  {
    id: 'exp-1',
    name: 'Ananya Deshmukh',
    role: 'Lead Data & Analytics Specialist',
    companyContext: 'FinTech & Banking Analytics (Bengaluru / Pune)',
    industry: 'Financial Services & Fintech',
    primaryDomain: 'Data Analytics',
    yearsExperience: 8,
    experienceTier: '6-10 Years (Senior)',
    avatarInitials: 'AD',
    avatarColor: 'from-blue-600 to-cyan-500',
    rating: 4.9,
    sessionsCount: 64,
    availability: 'Available This Weekend (Sat & Sun)',
    consultationTypes: ['Career Guidance', 'Resume Review', 'Ask an Expert'],
    expertise: ['SQL & Data Warehousing', 'Power BI & Tableau', 'Financial Modeling', 'ETL Pipelines'],
    shortBio: 'Leading cross-functional business intelligence and data warehousing teams across tier-1 banking corridors. Passionate about helping aspiring analysts master real-world SQL modeling.',
    fullBio: 'Ananya has 8+ years of hands-on experience designing analytics architectures and executive dashboards for multi-billion rupee transaction platforms. She mentors candidates on translating business questions into efficient SQL queries and structuring compelling project portfolios.',
    targetRolesAligned: ['data-analyst', 'data-scientist'],
    verifiedStatus: 'Verified Industry Mentor (Demo)'
  },
  {
    id: 'exp-2',
    name: 'Vikramaditya Sen',
    role: 'Staff Distributed Systems Engineer',
    companyContext: 'Global Enterprise Cloud Systems (Hyderabad)',
    industry: 'Enterprise Software & Infrastructure',
    primaryDomain: 'Software Engineering',
    yearsExperience: 12,
    experienceTier: '10+ Years (Principal / Lead)',
    avatarInitials: 'VS',
    avatarColor: 'from-navy-800 to-indigo-600',
    rating: 4.9,
    sessionsCount: 92,
    availability: 'Tuesday & Thursday Evenings',
    consultationTypes: ['Mock Interview', 'Career Guidance', 'Industry Q&A'],
    expertise: ['Distributed Systems', 'Golang & Java', 'System Design', 'Algorithms & Big-O'],
    shortBio: 'Specialist in high-throughput distributed architectures, microservices scalability, and algorithmic interview prep. Previously led core platform pods for tier-1 SaaS providers.',
    fullBio: 'Vikramaditya brings 12 years of core engineering experience across distributed queues, high-concurrency microservices, and database partitioning. He regularly conducts mock system design interviews and technical algorithm evaluations.',
    targetRolesAligned: ['software-engineer', 'backend-developer'],
    verifiedStatus: 'Verified Industry Mentor (Demo)'
  },
  {
    id: 'exp-3',
    name: 'Priya Nair',
    role: 'Senior Machine Learning Engineer',
    companyContext: 'Healthcare Diagnostics & AI Research (Mumbai)',
    industry: 'Healthcare Technology & AI',
    primaryDomain: 'AI / ML',
    yearsExperience: 7,
    experienceTier: '6-10 Years (Senior)',
    avatarInitials: 'PN',
    avatarColor: 'from-purple-600 to-pink-600',
    rating: 4.8,
    sessionsCount: 48,
    availability: 'Wednesday Mornings & Weekends',
    consultationTypes: ['Ask an Expert', 'Industry Q&A', 'Career Guidance'],
    expertise: ['PyTorch & TensorFlow', 'Computer Vision', 'MLOps & Deployment', 'Generative AI'],
    shortBio: 'Developing computer vision pipelines and clinical diagnosis ML models. Experienced in taking deep learning algorithms from Jupyter notebooks to production inference APIs.',
    fullBio: 'Priya has 7 years of specialized expertise in medical image segmentation, transfer learning, and model optimization. She guides university graduates and junior engineers on building credible AI portfolios and navigating ML roles.',
    targetRolesAligned: ['ml-engineer', 'data-scientist'],
    verifiedStatus: 'Verified Industry Mentor (Demo)'
  },
  {
    id: 'exp-4',
    name: 'Rohan Kulkarni',
    role: 'Principal Cloud & DevOps Architect',
    companyContext: 'Automotive & Logistics Cloud Platform (Pune)',
    industry: 'Automotive & Cloud IoT',
    primaryDomain: 'Cloud Engineering',
    yearsExperience: 14,
    experienceTier: '10+ Years (Principal / Lead)',
    avatarInitials: 'RK',
    avatarColor: 'from-orange-500 to-amber-600',
    rating: 4.9,
    sessionsCount: 110,
    availability: 'Alternate Saturday Mornings',
    consultationTypes: ['Career Guidance', 'Mock Interview', 'Resume Review'],
    expertise: ['AWS Architecture', 'Kubernetes Clusters', 'Terraform (IaC)', 'CI/CD Pipelines'],
    shortBio: 'Architecting multi-region resilient cloud infrastructures and automated deployment pipelines. Mentors engineers transitioning from traditional sysadmin to modern DevOps.',
    fullBio: 'With 14 years in enterprise IT infrastructure and cloud transformations, Rohan has designed mission-critical systems processing telematics from millions of connected vehicles. He guides engineers on certification roadmaps and production containerization.',
    targetRolesAligned: ['software-engineer', 'backend-developer'],
    verifiedStatus: 'Verified Industry Mentor (Demo)'
  },
  {
    id: 'exp-5',
    name: 'Sneha Roy',
    role: 'Senior Technical Product Manager',
    companyContext: 'B2B SaaS Developer Tools (Bengaluru)',
    industry: 'Developer Tools & SaaS',
    primaryDomain: 'Product Management',
    yearsExperience: 9,
    experienceTier: '6-10 Years (Senior)',
    avatarInitials: 'SR',
    avatarColor: 'from-emerald-600 to-teal-500',
    rating: 4.8,
    sessionsCount: 55,
    availability: 'Friday Evenings (Flexible)',
    consultationTypes: ['Resume Review', 'Career Guidance', 'Industry Q&A'],
    expertise: ['Product Roadmapping', 'User Analytics & Metrics', 'Agile Execution', 'API Products'],
    shortBio: 'Transitioned from software development into technical product management. Advises engineers aspiring to bridge technical proficiency with business strategy and user empathy.',
    fullBio: 'Sneha has 9 years of experience leading engineering and design squads for developer-facing API platforms. She helps candidates craft strong product case studies, refine problem-solving narratives, and crack product interviews.',
    targetRolesAligned: ['fullstack-developer', 'data-analyst'],
    verifiedStatus: 'Verified Industry Mentor (Demo)'
  },
  {
    id: 'exp-6',
    name: 'Amitav Joshi',
    role: 'Principal Cybersecurity & Zero-Trust Advisor',
    companyContext: 'Critical Infrastructure & SOC Defense (Delhi NCR)',
    industry: 'Cybersecurity & Defence',
    primaryDomain: 'Cybersecurity',
    yearsExperience: 11,
    experienceTier: '10+ Years (Principal / Lead)',
    avatarInitials: 'AJ',
    avatarColor: 'from-rose-600 to-red-700',
    rating: 4.9,
    sessionsCount: 78,
    availability: 'Monday & Wednesday Evenings',
    consultationTypes: ['Industry Q&A', 'Career Guidance', 'Ask an Expert'],
    expertise: ['Zero-Trust Architecture', 'Penetration Testing', 'Cloud Security Posture', 'Threat Modeling'],
    shortBio: 'Advising enterprises on zero-trust identity frameworks, vulnerability management, and regulatory security audits. Active speaker at national infosec symposiums.',
    fullBio: 'Amitav has spent 11 years defending enterprise networks and auditing critical cloud environments against advanced persistent threats. He assists aspiring security analysts in identifying practical hands-on labs and certification tracks.',
    targetRolesAligned: ['software-engineer'],
    verifiedStatus: 'Verified Industry Mentor (Demo)'
  },
  {
    id: 'exp-7',
    name: 'Meera Krishnan',
    role: 'Staff Frontend Architect & UI Lead',
    companyContext: 'Consumer Tech & Fintech SuperApp (Chennai / Bengaluru)',
    industry: 'Consumer Internet & Fintech',
    primaryDomain: 'Software Engineering',
    yearsExperience: 8,
    experienceTier: '6-10 Years (Senior)',
    avatarInitials: 'MK',
    avatarColor: 'from-cyan-600 to-blue-700',
    rating: 4.8,
    sessionsCount: 42,
    availability: 'Weekend Afternoons',
    consultationTypes: ['Mock Interview', 'Resume Review', 'Ask an Expert'],
    expertise: ['React 18 & Next.js', 'Web Performance (Core Web Vitals)', 'TypeScript / JS Architecture', 'Design Systems'],
    shortBio: 'Building high-performance consumer web applications serving 10M+ monthly active users. Passionate about modern frontend state architecture and UI engineering best practices.',
    fullBio: 'Meera has 8 years of frontend specialization, leading performance optimization and accessible component libraries for top Indian consumer startups. She coaches engineers on technical frontend interviews, clean component design, and bundle optimization.',
    targetRolesAligned: ['frontend-developer', 'fullstack-developer'],
    verifiedStatus: 'Verified Industry Mentor (Demo)'
  },
  {
    id: 'exp-8',
    name: 'Tanmay Bhattacharya',
    role: 'Lead Data Scientist & Predictive Modeler',
    companyContext: 'Retail Supply Chain Analytics (Kolkata / Mumbai)',
    industry: 'Retail & E-commerce',
    primaryDomain: 'Data Science',
    yearsExperience: 10,
    experienceTier: '10+ Years (Principal / Lead)',
    avatarInitials: 'TB',
    avatarColor: 'from-indigo-600 to-purple-700',
    rating: 4.9,
    sessionsCount: 68,
    availability: 'Sunday Mornings',
    consultationTypes: ['Career Guidance', 'Mock Interview', 'Industry Q&A'],
    expertise: ['Predictive Forecasting', 'Python & Pandas', 'A/B Testing', 'Statistical Inference'],
    shortBio: 'Specialist in demand forecasting, price elasticity models, and econometric data science. Regular mentor for graduates entering data analytics and predictive science.',
    fullBio: 'Tanmay brings 10 years of applied data science experience optimizing logistics inventory and customer lifetime value algorithms. He helps learners move beyond simple Kaggle competitions into production data workflows.',
    targetRolesAligned: ['data-scientist', 'data-analyst', 'ml-engineer'],
    verifiedStatus: 'Verified Industry Mentor (Demo)'
  }
];

export const RECOMMENDED_ROLE_EXPERTS = [
  {
    targetRoleTitle: 'Data Analyst',
    targetRoleId: 'data-analyst',
    matchedSkills: ['SQL', 'Data Analytics', 'Business Intelligence', 'Tableau'],
    expertIds: ['exp-1', 'exp-8'],
    rationale: 'Connect with lead data analysts to review SQL query optimization and portfolio case studies.'
  },
  {
    targetRoleTitle: 'Software Engineer (Backend)',
    targetRoleId: 'software-engineer',
    matchedSkills: ['Data Structures & Algorithms', 'Distributed Systems', 'System Design'],
    expertIds: ['exp-2', 'exp-4'],
    rationale: 'Get feedback on algorithmic coding, system scalability, and technical interview expectations.'
  },
  {
    targetRoleTitle: 'AI / Machine Learning Engineer',
    targetRoleId: 'ml-engineer',
    matchedSkills: ['Python', 'Deep Learning', 'PyTorch', 'MLOps'],
    expertIds: ['exp-3', 'exp-8'],
    rationale: 'Discuss machine learning model deployment pipelines and clinical/retail research applications.'
  },
  {
    targetRoleTitle: 'Frontend Developer',
    targetRoleId: 'frontend-developer',
    matchedSkills: ['React', 'Next.js', 'JavaScript Architecture', 'Web Performance'],
    expertIds: ['exp-7', 'exp-5'],
    rationale: 'Consult on component architecture, state management patterns, and interactive UI engineering.'
  }
];
