import directorscutImage from '../assets/filmreview.png';
import secondscopeImage from '../assets/secondscope.png';
import trainingtrackerImage from '../assets/trainingtracker.png';
import focusmodeImage from '../assets/focusmode.png';

export const extraProjects = [
  {
    id: 'directorscut',
    title: 'Director’s Cut',
    description: 'A stylish and interactive movie review platform (School project)',
    details:
      'Director’s Cut is a full-stack movie review platform where users can register, log in, and explore a curated list of films categorized by genre. Users can view movie details, leave 1–5 star ratings with reviews, and interact with a responsive and animated UI. Admins have access to a protected Admin Panel for managing the film database, including creating and deleting movies. The platform supports dark mode with toggle, real-time feedback via toasts, loading indicators, and automatic poster fetching from the OMDb API. Built with a mobile-first design and glowing aesthetics, Director’s Cut is designed to offer both functionality and style. (School project)',
    technologies: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT (Authentication)',
      'React Router',
      'React Hot Toast',
      'OMDb API',
      'Framer Motion',
      'AOS (Animate on Scroll)',
      'Vite',
    ],
    image: directorscutImage,
  },
  {
    id: 'secondscope',
    title: 'SecondScope',
    description: 'A prototype for a secondhand fashion search engine',
    details:
      'SecondScope is a prototype for a secondhand fashion search engine. The app was built with both desktop and mobile layouts and successfully fetched clothing listings in real time from Blocket using Puppeteer with Stealth plugin. The data included title, price, and image, rendered dynamically in a responsive grid. After multiple test runs, Blocket’s bot protection temporarily restricted access, which led to pausing the scraping functionality. Despite this, the project demonstrates a working proof of concept and showcases integration between a styled frontend and a live web scraping backend.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Puppeteer',
      'puppeteer-extra',
      'Stealth Plugin',
      'Axios',
      'Vite',
    ],
    image: secondscopeImage,
  },
  {
    id: 'trainingtracker',
    title: 'TrainingTracker',
    description: 'A progressive workout tracker built with PWA support and detailed statistics',
    details:
      'TrainingTracker is a responsive workout tracking application that lets users log their strength training in a structured and customizable way. The app is designed for both mobile and desktop use and supports features like adding sets with reps, weight, barbell weight, and optional comments. A personal best system highlights new records, and interactive progress charts visualize improvements over time using Chart.js. The app is built as a PWA (Progressive Web App), meaning it can be installed and used offline with data saved locally. Firebase Hosting is used for live testing and sharing. The project demonstrates clean UX, local data management, and a focus on real user behavior in the gym. User accounts and Firestore storage are planned for future versions.',
    technologies: [
      'React',
      'Tailwind CSS',
      'Vite',
      'Chart.js',
      'React Router',
      'React Hot Toast',
      'Firebase Hosting',
      'PWA (Progressive Web App)',
      'LocalStorage',
    ],
    image: trainingtrackerImage,
  },
  {
    id: 'focusmode',
    title: 'FocusMode Extension',
    description: 'A custom-built Chrome extension that blocks distracting websites during Pomodoro sessions',
    details:
      'FocusMode is a Chrome browser extension developed to help me stay focused while studying by blocking access to distracting websites like YouTube, Reddit, or news sites. The extension is tightly integrated with my React-based Pomodoro timer: as soon as a Pomodoro session starts, blocking rules are activated via the DeclarativeNetRequest API, and when the session ends, they are automatically removed. This seamless integration between a React frontend and Chrome extension logic demonstrates how to bridge communication between web apps and browser APIs using the postMessage system and background service workers. The extension is lightweight, fast, and tailored specifically to my study habits—helping me avoid distractions and stay productive.',
    technologies: [
      'React',
      'Tailwind CSS',
      'Vite',
      'Chrome Extension (Manifest V3)',
      'DeclarativeNetRequest API',
      'Service Worker',
      'LocalStorage',
      'Web Notifications',
    ],
    image: focusmodeImage,
  },
    {
      id: "financehub",
      title: "Coming Soon",
      description: "---",
      details: "---",
      technologies: [],
      image: ""
    }
  ];