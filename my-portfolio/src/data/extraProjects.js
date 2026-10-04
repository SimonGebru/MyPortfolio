
import secondscopeImage from '../assets/secondscope.png';
import trainingtrackerImage from '../assets/trainingtracker.png';
import focusmodeImage from '../assets/focusmode.png';
import fplImage from '../assets/fpl.png';
import devpilotImage from '../assets/devpilot.png';

export const extraProjects = [
  {
    id: 'fpl-edge',
    title: 'FPL Edge',
    description:
  'A personal Fantasy Premier League analytics app that turns official FPL data into custom metrics and decision support for transfers, captain picks and team selection.',

details:
  'FPL Edge is a project I built because I wanted more from FPL data than the standard stats available in the game. A Node.js and Express backend fetches data from the official FPL API and calculates custom metrics around form, fixture difficulty, minutes risk, ownership and other factors that can help with weekly decisions. \n\nThe React frontend brings that data together through features such as captain suggestions, watchlists, fixture heatmaps and league insights. I have also built fallbacks around FPL’s gameweek data, since what is available through the API changes depending on whether a gameweek is upcoming, active or already finished. GitHub Actions is used to keep parts of the data and calculations updated automatically. \n\nThere is no public live version of FPL Edge because I currently use it locally for my own FPL planning and analysis. The project is still something I continue to experiment with as I find new statistics or ideas that I want to test.',
  liveLink: null,
    github: 'https://github.com/SimonGebru/FPL-EDGE.git',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'React Context API',
      'Node.js',
      'Express.js',
      'node-fetch',
      'GitHub Actions (scheduled updates)',
      'JSON-based storage (MVP)',
      'Proxy / CORS handling',
      'LocalStorage persistence',
    ],
    image: fplImage,
  },

  {
    id: 'devpilot',
    title: 'DevPilot',
    description:
      'An interactive VS Code extension for shortcut mastery and code snippet training',
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
    id: 'secondscope',
    title: 'SecondScope',
    description: 'A prototype for a secondhand fashion search engine',
    details:
      'SecondScope is a prototype for a secondhand fashion search engine. The app was built with both desktop and mobile layouts and successfully fetched clothing listings in real time from Blocket using Puppeteer with Stealth plugin. The data included title, price, and image, rendered dynamically in a responsive grid. After multiple test runs, Blocket’s bot protection temporarily restricted access, which led to pausing the scraping functionality. Despite this, the project demonstrates a working proof of concept and showcases integration between a styled frontend and a live web scraping backend.',
    github: 'https://github.com/SimonGebru/secondhand-shopper.git',
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
    id: 'focusmode',
    title: 'FocusMode Extension',
    description:
      'A custom-built Chrome extension that blocks distracting websites during Pomodoro sessions',
    details:
      'FocusMode is a Chrome browser extension developed to help me stay focused while studying by blocking access to distracting websites like YouTube, Reddit, or news sites. The extension is tightly integrated with my React-based Pomodoro timer: as soon as a Pomodoro session starts, blocking rules are activated via the DeclarativeNetRequest API, and when the session ends, they are automatically removed. This seamless integration between a React frontend and Chrome extension logic demonstrates how to bridge communication between web apps and browser APIs using the postMessage system and background service workers. The extension is lightweight, fast, and tailored specifically to my study habits—helping me avoid distractions and stay productive.',
    github: 'https://github.com/SimonGebru/Focus-tool.git',
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
    id: 'trainingtracker',
    title: 'TrainingTracker',
    description:
      'A progressive workout tracker built with PWA support and detailed statistics',
    details:
      'TrainingTracker is a responsive workout tracking application that lets users log their strength training in a structured and customizable way. The app is designed for both mobile and desktop use and supports features like adding sets with reps, weight, barbell weight, and optional comments. A personal best system highlights new records, and interactive progress charts visualize improvements over time using Chart.js. The app is built as a PWA (Progressive Web App), meaning it can be installed and used offline with data saved locally. Firebase Hosting is used for live testing and sharing. The project demonstrates clean UX, local data management, and a focus on real user behavior in the gym. User accounts and Firestore storage are planned for future versions. This page is primarily optimized for mobile view. For the best experience, switch to that view. Of course, it also works on desktop.',
    liveLink: 'https://workout-log-d6f9b.web.app',
    github: 'https://github.com/SimonGebru/TraningTracker.git',
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

];