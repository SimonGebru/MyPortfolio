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
      title: 'Jobbansökningssystem',
      description: 'Dashboard där man håller koll på jobbansökningar',
      details:
        'En personlig projektportfölj där användaren kan logga jobbansökningar, filtrera dem efter status, markera favoriter och få statistik. Jag använde MongoDB, Express och React med Redux för statehantering.',
      technologies: ['React', 'MongoDB', 'Express', 'Tailwind'],
      image: '/images/jobtracker.png',
    },
  ];