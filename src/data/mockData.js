// Master dataset and schemas for SkillPulse platform

export const INDUSTRIES = [
  { id: 'it', name: 'Information Technology & Software', growth: '+28%', vacancies: 4500 },
  { id: 'healthcare', name: 'Healthcare & Biotech', growth: '+19%', vacancies: 2200 },
  { id: 'finance', name: 'BFSI & Fintech', growth: '+22%', vacancies: 2800 },
  { id: 'manufacturing', name: 'Advanced Manufacturing & Robotics', growth: '+15%', vacancies: 1600 },
  { id: 'retail', name: 'E-commerce & Retail Tech', growth: '+14%', vacancies: 1400 },
  { id: 'automotive', name: 'Automotive & EV Mobility', growth: '+25%', vacancies: 1100 },
];

export const SKILL_DEMAND_DATA = [
  { skill: 'Python', demand: 94, growth: '+34%', category: 'Programming', industry: 'IT / AI' },
  { skill: 'SQL & Database Design', demand: 90, growth: '+26%', category: 'Data', industry: 'Cross-Industry' },
  { skill: 'JavaScript / React', demand: 88, growth: '+22%', category: 'Web Dev', industry: 'IT' },
  { skill: 'Cloud Computing (AWS/Azure)', demand: 86, growth: '+38%', category: 'Infrastructure', industry: 'IT' },
  { skill: 'Data Analytics & Power BI', demand: 85, growth: '+32%', category: 'Analytics', industry: 'BFSI / Retail' },
  { skill: 'Cybersecurity & Compliance', demand: 82, growth: '+29%', category: 'Security', industry: 'Cross-Industry' },
  { skill: 'Machine Learning & GenAI', demand: 80, growth: '+48%', category: 'AI/ML', industry: 'Tech / Health' },
  { skill: 'DevOps & Docker/K8s', demand: 76, growth: '+27%', category: 'DevOps', industry: 'IT' },
  { skill: 'Professional Communication', demand: 89, growth: '+18%', category: 'Soft Skills', industry: 'Universal' },
];

export const EMERGING_SKILLS = [
  { name: 'Generative AI & LLM Ops', growth: '+48%', category: 'Artificial Intelligence', urgency: 'Critical', impact: 'High' },
  { name: 'Cloud Native Architecture', growth: '+38%', category: 'Cloud & Infrastructure', urgency: 'High', impact: 'High' },
  { name: 'Zero-Trust Cybersecurity', growth: '+32%', category: 'Security', urgency: 'High', impact: 'Critical' },
  { name: 'Predictive Business Analytics', growth: '+29%', category: 'Data Science', urgency: 'Medium', impact: 'High' },
  { name: 'Industrial IoT & Robotics', growth: '+25%', category: 'Manufacturing', urgency: 'Medium', impact: 'Medium' },
];

export const JOB_ROLES = [
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Transform complex datasets into actionable business insights using SQL, statistical modeling, and BI visualization.',
    salaryRange: '₹5,50,000 - ₹11,00,000 / year',
    requiredSkills: [
      { name: 'SQL', priority: 'High', weight: 20 },
      { name: 'Python', priority: 'High', weight: 20 },
      { name: 'Excel (Advanced)', priority: 'Medium', weight: 15 },
      { name: 'Power BI', priority: 'High', weight: 20 },
      { name: 'Statistics & Probability', priority: 'High', weight: 15 },
      { name: 'Data Visualization & Storytelling', priority: 'Medium', weight: 10 },
    ],
    recommendedPath: [
      { step: 1, title: 'Master Advanced Excel & Formulas', time: '2 Weeks', difficulty: 'Beginner' },
      { step: 2, title: 'Relational Database Queries with SQL', time: '3 Weeks', difficulty: 'Beginner-Intermediate' },
      { step: 3, title: 'Applied Business Statistics', time: '2 Weeks', difficulty: 'Intermediate' },
      { step: 4, title: 'Interactive Dashboards with Power BI', time: '3 Weeks', difficulty: 'Intermediate' },
      { step: 5, title: 'Exploratory Data Analysis with Python (Pandas/Seaborn)', time: '4 Weeks', difficulty: 'Intermediate' },
      { step: 6, title: 'Complete 2 Capstone Industry Projects', time: '3 Weeks', difficulty: 'Advanced' },
    ]
  },
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Build responsive, accessible, high-performance web applications using modern component frameworks.',
    salaryRange: '₹5,00,000 - ₹12,50,000 / year',
    requiredSkills: [
      { name: 'JavaScript (ES6+)', priority: 'High', weight: 25 },
      { name: 'React.js', priority: 'High', weight: 25 },
      { name: 'HTML5 & CSS3', priority: 'High', weight: 15 },
      { name: 'Tailwind CSS', priority: 'Medium', weight: 10 },
      { name: 'Git & GitHub', priority: 'Medium', weight: 15 },
      { name: 'REST APIs & State Management', priority: 'High', weight: 10 },
    ],
    recommendedPath: [
      { step: 1, title: 'Semantic HTML5, CSS Grid & Flexbox', time: '2 Weeks', difficulty: 'Beginner' },
      { step: 2, title: 'Modern JavaScript (DOM, Async/Await, ES6+)', time: '3 Weeks', difficulty: 'Intermediate' },
      { step: 3, title: 'Version Control with Git & Team Workflows', time: '1 Week', difficulty: 'Beginner' },
      { step: 4, title: 'Component Architecture in React', time: '4 Weeks', difficulty: 'Intermediate' },
      { step: 5, title: 'Rapid UI Styling with Tailwind CSS', time: '1 Week', difficulty: 'Beginner' },
      { step: 6, title: 'Build and Deploy 3 Production Web Apps', time: '3 Weeks', difficulty: 'Advanced' },
    ]
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    description: 'Design robust micro-APIs, scalable server architectures, database pipelines, and secure authentication.',
    salaryRange: '₹6,00,000 - ₹14,00,000 / year',
    requiredSkills: [
      { name: 'Node.js & Express', priority: 'High', weight: 25 },
      { name: 'SQL & PostgreSQL', priority: 'High', weight: 20 },
      { name: 'RESTful API Design', priority: 'High', weight: 20 },
      { name: 'Authentication & JWT', priority: 'Medium', weight: 15 },
      { name: 'Docker Fundamentals', priority: 'Medium', weight: 10 },
      { name: 'Git & Version Control', priority: 'Medium', weight: 10 },
    ],
    recommendedPath: [
      { step: 1, title: 'JavaScript Runtime & Node.js Core Modules', time: '2 Weeks', difficulty: 'Beginner-Intermediate' },
      { step: 2, title: 'API Engineering with Express & Middleware', time: '3 Weeks', difficulty: 'Intermediate' },
      { step: 3, title: 'PostgreSQL Relational Schema & ORMs', time: '3 Weeks', difficulty: 'Intermediate' },
      { step: 4, title: 'Security, JWT Authentication, and Rate Limiting', time: '2 Weeks', difficulty: 'Intermediate' },
      { step: 5, title: 'Containerization with Docker & Cloud Deployment', time: '2 Weeks', difficulty: 'Advanced' },
      { step: 6, title: 'End-to-End Enterprise API Capstone', time: '3 Weeks', difficulty: 'Advanced' },
    ]
  },
  {
    id: 'aiml-engineer',
    title: 'AI / Machine Learning Engineer',
    description: 'Design, train, and deploy predictive models, neural architectures, and intelligent NLP/LLM pipelines.',
    salaryRange: '₹7,50,000 - ₹18,00,000 / year',
    requiredSkills: [
      { name: 'Python', priority: 'High', weight: 25 },
      { name: 'Linear Algebra & Calculus', priority: 'High', weight: 15 },
      { name: 'Scikit-Learn & Machine Learning', priority: 'High', weight: 20 },
      { name: 'Deep Learning (PyTorch/TensorFlow)', priority: 'High', weight: 20 },
      { name: 'Prompt Engineering & LLM APIs', priority: 'Medium', weight: 10 },
      { name: 'Model Deployment & Docker', priority: 'Medium', weight: 10 },
    ],
    recommendedPath: [
      { step: 1, title: 'Advanced Python, NumPy & Vector Math', time: '3 Weeks', difficulty: 'Beginner-Intermediate' },
      { step: 2, title: 'Supervised & Unsupervised Machine Learning', time: '4 Weeks', difficulty: 'Intermediate' },
      { step: 3, title: 'Neural Networks & Computer Vision / NLP', time: '4 Weeks', difficulty: 'Advanced' },
      { step: 4, title: 'Fine-Tuning LLMs & Retrieval Augmented Generation (RAG)', time: '3 Weeks', difficulty: 'Advanced' },
      { step: 5, title: 'Model Serving with FastAPI & Docker', time: '2 Weeks', difficulty: 'Advanced' },
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    description: 'Protect enterprise infrastructure, monitor threat telemetry, audit security policies, and incident response.',
    salaryRange: '₹6,00,000 - ₹13,00,000 / year',
    requiredSkills: [
      { name: 'Network Security & Protocols', priority: 'High', weight: 25 },
      { name: 'Linux System Administration', priority: 'High', weight: 20 },
      { name: 'Threat Hunting & SIEM Tools', priority: 'High', weight: 20 },
      { name: 'Vulnerability Assessment', priority: 'Medium', weight: 15 },
      { name: 'Ethical Hacking Fundamentals', priority: 'Medium', weight: 10 },
      { name: 'Compliance & Standards (ISO/NIST)', priority: 'Medium', weight: 10 },
    ],
    recommendedPath: [
      { step: 1, title: 'TCP/IP, Firewalls & Network Architecture', time: '3 Weeks', difficulty: 'Beginner-Intermediate' },
      { step: 2, title: 'Linux Command Line & Scripting', time: '2 Weeks', difficulty: 'Intermediate' },
      { step: 3, title: 'Security Information and Event Management (SIEM)', time: '3 Weeks', difficulty: 'Intermediate' },
      { step: 4, title: 'Penetration Testing & Web Vulnerability Scans', time: '3 Weeks', difficulty: 'Advanced' },
      { step: 5, title: 'Incident Response & Governance Playbooks', time: '2 Weeks', difficulty: 'Advanced' },
    ]
  }
];

export const MAHARASHTRA_DISTRICTS = [
  {
    id: 'pune',
    name: 'Pune',
    demandLevel: 'Very High',
    topIndustry: 'IT & Automotive',
    cloudDemand: 'High',
    availableTraining: 'Medium',
    gapScore: 'High Gap',
    openJobs: 4800,
    trainingCenters: 64,
    focusSkills: ['Cloud Computing', 'Embedded Systems', 'Fullstack JS', 'Data Analytics']
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    demandLevel: 'Critical',
    topIndustry: 'BFSI & Fintech',
    cloudDemand: 'High',
    availableTraining: 'High',
    gapScore: 'Low Gap',
    openJobs: 6200,
    trainingCenters: 92,
    focusSkills: ['Financial Modeling', 'Data Analytics', 'Cybersecurity', 'Python']
  },
  {
    id: 'nagpur',
    name: 'Nagpur',
    demandLevel: 'High',
    topIndustry: 'Logistics & Tech Hub',
    cloudDemand: 'Medium',
    availableTraining: 'Low',
    gapScore: 'High Gap',
    openJobs: 1800,
    trainingCenters: 28,
    focusSkills: ['Supply Chain Analytics', 'Python', 'Cloud Basics']
  },
  {
    id: 'nashik',
    name: 'Nashik',
    demandLevel: 'Medium',
    topIndustry: 'Automotive & Manufacturing',
    cloudDemand: 'Medium',
    availableTraining: 'Medium',
    gapScore: 'Medium Gap',
    openJobs: 1200,
    trainingCenters: 22,
    focusSkills: ['PLC Automation', 'CAD/CAM', 'Industrial IoT']
  },
  {
    id: 'aurangabad',
    name: 'Chhatrapati Sambhajinagar (Aurangabad)',
    demandLevel: 'Medium',
    topIndustry: 'Auto Ancillaries & Pharma',
    cloudDemand: 'Medium',
    availableTraining: 'Low',
    gapScore: 'High Gap',
    openJobs: 950,
    trainingCenters: 18,
    focusSkills: ['Pharma Quality Control', 'Robotics', 'Data Entry & Analysis']
  },
  {
    id: 'thane',
    name: 'Thane',
    demandLevel: 'High',
    topIndustry: 'IT Services & Healthcare',
    cloudDemand: 'High',
    availableTraining: 'Medium',
    gapScore: 'Medium Gap',
    openJobs: 2400,
    trainingCenters: 45,
    focusSkills: ['Healthcare IT', 'Web Development', 'QA Testing']
  },
  {
    id: 'kolhapur',
    name: 'Kolhapur',
    demandLevel: 'Emerging',
    topIndustry: 'Foundry & Agri-Tech',
    cloudDemand: 'Low',
    availableTraining: 'Low',
    gapScore: 'Medium Gap',
    openJobs: 720,
    trainingCenters: 14,
    focusSkills: ['Agri-Analytics', 'Digital Marketing', 'Python']
  }
];

export const INITIAL_CURRICULUM = [
  { id: 1, name: 'Module 1: Programming Fundamentals (Python / C++)', coveredSkills: ['Python', 'Basic Logic', 'Algorithms'] },
  { id: 2, name: 'Module 2: Database Management & SQL', coveredSkills: ['SQL', 'Relational DB', 'Normalization'] },
  { id: 3, name: 'Module 3: Web Development Fundamentals', coveredSkills: ['HTML5', 'CSS3', 'JavaScript'] },
  { id: 4, name: 'Module 4: Software Engineering & Git', coveredSkills: ['Git', 'SDLC', 'Agile'] },
];

export const OPTIONAL_SIMULATOR_SKILLS = [
  { id: 'cloud', name: 'Cloud Computing (AWS / Azure)', boost: 7, priority: 'Critical' },
  { id: 'powerbi', name: 'Power BI & Visual Analytics', boost: 7, priority: 'High' },
  { id: 'genai', name: 'Generative AI & LLM Tools', boost: 8, priority: 'High' },
  { id: 'docker', name: 'Docker & Containerization', boost: 5, priority: 'Medium' },
  { id: 'project', name: 'Live Industry Capstone Project', boost: 6, priority: 'High' },
];
