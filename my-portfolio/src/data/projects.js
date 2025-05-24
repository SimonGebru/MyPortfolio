import jobsearchImage from '../assets/jobsearch.png';

export const projects = [
    {
      id: 'froglow',
      title: 'FroGlow',
      description: 'En modern e-handelsplattform för hudvård',
      details:
        'FroGlow byggdes som ett grupprojekt där jag fokuserade på frontend och Firebase-integration. Användaren kan filtrera produkter, lägga dem i varukorgen och slutföra en beställning. Jag byggde också en admin-panel för att importera produktdata från Excel-filer till Firestore.',
      technologies: ['React', 'Firebase', 'Sass', 'Redux'],
      image: '/images/froglow.png',
    },
    {
      id: 'jobtracker',
title: 'JobTracker',
description: 'Track your job applications with a smart dashboard',
details:
  'JobTracker is a full-stack job application manager where users can register, log in, and track their job applications using a responsive Kanban-style dashboard. Users can filter applications by status, mark favorites, set deadlines, and receive reminders for upcoming deadlines. The app also features a profile page with support for email and password updates, password recovery via email, and real-time statistics. The project is built as a Progressive Web App (PWA) for installability on mobile and desktop devices.',
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