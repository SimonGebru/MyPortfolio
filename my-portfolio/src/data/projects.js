import jobsearchImage from '../assets/jobsearch.png';
import froglowImage from '../assets/froglow.png';
import devpilotImage from '../assets/devpilot.png';

export const projects = [
  {
    id: 'froglow',
    title: 'FroGlow',
    description: 'A curated beauty product explorer shaped by real user insights',
    details:
      'FroGlow is a modern beauty product discovery platform focused on usability and user-driven improvements. Visitors can explore a wide range of self-care items, filter by gender, supplier, and category, and navigate directly to external retailers. The site includes an inspiration page with dynamic hair and skincare tips loaded from Firestore. To refine the experience before going live, we collected survey responses from a dedicated test group, whose feedback has directly informed design and functionality decisions. The frontend is fully responsive for both mobile and desktop, and features a custom-designed logo that also functions as a reset and filter control. The project is still in progress—we are awaiting a few more responses and will update the platform accordingly based on the full set of feedback received.',
    technologies: [
      'React',
      'SASS (SCSS)',
      'Vite',
      'React Router',
      'Firebase Firestore',
      'Firebase Hosting',
      'AOS (Animate on Scroll)',
      'Custom SVG/PNG Logo',
    ],
    image: froglowImage,
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
    {
      id: 'jobtracker',
title: 'JobTracker',
description: 'Track your job applications with a smart dashboard',
details:
  'JobTracker is a full-stack job application manager where users can register, log in, and track their job applications using a responsive Kanban-style dashboard. Users can filter applications by status, mark favorites, set deadlines, and receive reminders for upcoming deadlines. The app also features a profile page with support for email and password updates, password recovery via email, and real-time statistics. The project is built as a Progressive Web App (PWA) for installability on mobile and desktop devices.',
  liveLink:'',
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