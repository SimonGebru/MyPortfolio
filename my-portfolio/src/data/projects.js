import jobsearchImage from '../assets/jobsearch.png';
import froglowImage from '../assets/froglow.png';
import devpilotImage from '../assets/devpilot.png';
import budgifyImage from '../assets/budgify.png';

export const projects = [
  {
  id: 'froglow',
  title: 'FroGlow',
  description: 'A personalized haircare experience powered by user input and smart logic',
  details:
    'FroGlow is a modern haircare platform designed to guide users toward the right products based on their unique hair type and needs. At the core of the experience is a dynamic quiz that analyzes factors such as hair type, porosity, scalp condition, and styling preferences to generate tailored product recommendations. The platform combines structured product data with user-driven logic to create a more relevant and personalized browsing experience.\n\nIn addition to recommendations, FroGlow includes an inspiration section with educational content around hair health, routines, and ingredients—built to support users beyond just product selection. The system is built with scalability in mind, using Firebase Firestore to manage product data and user responses, and includes internal tools for maintaining product quality (such as image validation and optimization workflows).\n\nThe project reflects a strong focus on UX, performance, and real-world usability. Rather than being a static product catalog, FroGlow aims to function as an intelligent layer between the user and the overwhelming number of available products—simplifying decision-making and improving confidence in purchases.',
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
  id: 'budgify',
  title: 'Budgify',
  description:
    'A full-stack budgeting app for couples and individuals, built to support both shared household planning and personal money tracking.',
  details:
    'Budgify is my final thesis project and a full-stack web app designed to make budgeting feel simpler and more flexible. The app allows users to either manage their personal finances on their own or connect with a partner through a shared household. Users can create personal budgets, track private transactions, and, when connected to a household, split monthly expenses fairly using different distribution models based on household income and budgeting preferences. \n\nOne of the main focuses of the project was the backend business logic rather than just CRUD operations. I designed the app so that users can calculate and compare shared costs based on multiple split modes, while still keeping personal budgeting separate and private. The project was also deployed as a real production-ready full-stack application using Vercel for the frontend, Railway for the backend, and MongoDB Atlas for the database, with custom domain configuration and environment-based API setup.',
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
  {
    id: 'devpilot',
    title: 'DevPilot',
    description: 'An interactive VS Code extension for shortcut mastery and code snippet training',
    details:
      'DevPilot is an ongoing VS Code extension project designed to help developers improve their workflow through shortcut training and keyboard kata sessions. Users are presented with random keyboard challenges (e.g. "Comment this line", "Copy a row") and can track their progress over time. The extension also includes a dedicated typing interface where users must reproduce real-world code snippets (from JavaScript, React, Git and more) with precision. A built-in “auto-train” mode delivers new challenges every 10 minutes to promote spaced repetition. \n\nThe project is still in development — we are currently implementing time tracking, feedback on failed attempts, and a future level-up system. The goal is to turn DevPilot into a smart, gamified productivity trainer directly inside the code editor.',
      github: 'https://github.com/SimonGebru/dev-pilot.git', 
      technologies: [
        'VS Code Extension API',
        'TypeScript',
        'Node.js',
        'Webview API (HTML/CSS + postMessage)',
        'VS Code Status Bar Items',
        'Command Palette Integration',
        'Gamification Design Patterns',
        'Modular Code Architecture',
        'Live Code Matching',
        'Keyboard Shortcut Detection',
        'Timed Interval Challenges',
        'Custom Typing Trainer Logic',
      ],
    image: devpilotImage,
  },
  ];