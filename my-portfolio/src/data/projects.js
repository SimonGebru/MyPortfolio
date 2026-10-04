import jobsearchImage from '../assets/jobsearch.png';
import froglowImage from '../assets/froglow.png';
import pulseOpsImage from '../assets/PulseOps.png';
import budgifyImage from '../assets/budgify.png';
import neuralWorkspaceImage from '../assets/naturelworkspace.png';

export const projects = [
  {
  id: 'pulseops',
  title: 'PulseOps',
  description:
  'A full-stack monitoring platform that checks web services, detects outages and processes monitoring jobs through a distributed AWS setup.',

  details:
  'PulseOps started as a way for me to go deeper into backend development and AWS, but it quickly grew into a much larger project. Users can monitor external endpoints and follow uptime, response times and incidents from a dashboard. Instead of opening an incident after one failed request, the system tracks failures and recoveries over time and automatically opens or resolves incidents when certain conditions are met. \n\nOne of the parts I wanted to understand better was asynchronous processing. Monitoring jobs are sent through Amazon SQS and handled by a separate worker service, keeping the API and monitoring workload separate. I also added retries, a dead-letter queue and idempotent processing so the same job is not stored twice if a message is delivered more than once. \n\nSecurity became a bigger part of the project than I first expected. Since users can submit URLs that the backend later requests, I added SSRF protection, safe redirect handling, rate limiting, input validation and organization-based authorization. The API and worker are containerized with Docker and deployed to AWS ECS with Fargate, while PostgreSQL runs on RDS and logs are collected in CloudWatch. PulseOps became the project where I really started moving from simply building an application to thinking about how it should run, fail and recover in production.',
  liveLink: '',
  github: 'https://github.com/SimonGebru/Pulseops.git',
  technologies: [
    'React',
    'TypeScript',
    'Vite',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Prisma',
    'Docker',
    'Amazon ECS',
    'AWS Fargate',
    'Amazon RDS',
    'Amazon SQS',
    'Amazon ECR',
    'AWS Secrets Manager',
    'Amazon CloudWatch',
    'Application Load Balancer',
    'IAM',
    'REST API',
    'JWT Authentication',
    'Background Workers',
    'Asynchronous Processing',
    'Incident Management',
    'Health Monitoring',
    'SSRF Protection',
    'Rate Limiting',
    'Full-Stack Development',
    'Cloud Deployment',
  ],
  image: pulseOpsImage,
},

{
  id: 'neuralworkspace',
  title: 'Neural Workspace',
  description:
  'A full-stack visual workspace where projects, ideas, tasks and technologies can be connected and explored through an interactive graph.',

  details:
  'Neural Workspace is a project I built around the idea that not everything fits neatly into lists and folders. Instead, users create nodes for things like projects, tasks, ideas, notes and technologies, then connect them through relationships to build a visual map of how everything fits together. \n\nUsers can create multiple workspaces and add, move, edit and connect nodes through an interactive graph built with Vue Flow. The application also includes authentication, persistent workspaces and relationships, and backend APIs built with Node.js, Express and MongoDB. \n\nMost of my frontend experience before this project was in React, so I deliberately chose Vue 3 and Pinia because I wanted to learn a different frontend ecosystem by actually building something with it. The interesting part for me was not just learning the syntax, but figuring out state management, graph interactions and how to persist relationships between nodes. Neural Workspace became a good example of how I prefer to learn new technology: pick something I do not already know and build far enough with it that I have to understand how it actually works.',
  liveLink: '',
  github: 'https://github.com/SimonGebru/Naturel-Workspace.git',
  technologies: [
    'Vue 3',
    'TypeScript',
    'Pinia',
    'Vue Router', 
    'Vue Flow',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB Atlas',
    'Mongoose',
    'JWT Authentication',
    'REST API',
    'Full-Stack Development',
    'Graph Visualization',
    'Knowledge Management',
    'Workspace Management',
    'Interactive Data Relationships',
  ],
  image: neuralWorkspaceImage,
},
  {
  id: 'budgify',
  title: 'Budgify',
  description:
  'A full-stack budgeting app for couples and individuals, focused on flexible expense splitting and real household budgeting.',

details:
  'Budgify started as my final thesis project, but it became something more practical than that. The app lets users manage their own budget or connect with a partner through a shared household, where monthly costs can be split using different models depending on income and how the household wants to divide expenses. \n\nA big part of the project was the backend logic behind those calculations. I built several split modes, including equal split, income-based split and a model where the higher earner pays a larger share. I also had to make sure private budgeting stayed separate from shared household data and that calculations remained consistent when values changed. \n\nThe app is built with React, Node.js, Express and MongoDB, with authentication and protected APIs. It is deployed with Vercel and Railway and is something my partner and I have actually used for our own monthly budgeting. That made the project useful in a different way, because the decisions were not only technical. I also had to think about whether the logic made sense for someone actually using it every month.',
  liveLink: 'https://budgify.se',
  github: 'https://github.com/SimonGebru/BudgetBuddy.git',
  technologies: [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB Atlas',
    'Mongoose',
    'JWT Authentication',
    'Vite',
    'React Router',
    'Vercel',
    'Railway',
    'PWA',
    'Responsive Design',
    'Full-Stack Deployment',
    'Custom Budget Split Logic',
  ],
  image: budgifyImage,
},
  {
  id: 'froglow',
  title: 'FroGlow',
  description:
  'A personalized haircare platform that helps users discover products based on their hair type, needs and preferences.',

details:
  'FroGlow is a haircare platform focused on making product discovery more relevant and easier to navigate. Users can answer questions about their hair and preferences and receive more tailored recommendations instead of browsing a large product catalogue without guidance. \n\nThe project has a strong focus on frontend experience, structured product data and personalization. I have worked with React, Firebase, routing, responsive design and user flows, with a lot of attention on making the experience feel clear and useful rather than overwhelming. \n\nBecause parts of the project are covered by confidentiality, I keep the technical details limited, but it has given me practical experience working on a product where usability, data and business needs all have to work together.',
  liveLink: 'https://froglow.se',
  technologies: [
    'React',
    'Tailwind CSS',
    'Vite',
    'React Router',
    'Firebase Firestore',
    'Firebase Hosting',
    'Framer Motion / AOS',
    'Custom Quiz Logic',
  ],
  image: froglowImage,
},
  {
    id: 'jobtracker',
    title: 'JobTracker',
    description: 'Originally built as a local MERN-style app using hardcoded localhost API calls, the project had to be refactored to support deployment in production. Environment variables were introduced, API calls were rewritten to use dynamic base URLs, and the backend was configured for cloud hosting. This allowed the app to successfully run live with a frontend on Firebase Hosting and a backend on Render connected to MongoDB Atlas.',
    details:
      'JobTracker is a full-stack job application manager where users can register, log in, and track their job applications using a responsive Kanban-style dashboard. Users can filter applications by status, mark favorites, set deadlines, and receive reminders for upcoming deadlines. The app also features a profile page with support for email and password updates, password recovery via email, and real-time statistics. The project is built as a Progressive Web App (PWA) for installability on mobile and desktop devices.',
    liveLink:'https://jobsearch-s1337.web.app/',
    github: 'https://github.com/SimonGebru/jobbsearch.git',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT (Authentication)',
      'Nodemailer (Password Reset)',
      'Redux Toolkit',
      'Vite',
      'React Router',
      'React Hot Toast',
      'PWA (Service Worker, manifest)',
    ],
    image: jobsearchImage,
  },
  
  
  ];