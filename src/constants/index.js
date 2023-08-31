import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "progetti",
      title: "Progetti",
    },
    {
      id: "contatti",
      title: "Contatti",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Self-taughting",
      //company_name: "Starbucks",
      icon: web,
      iconBg: "#383E56",
      date: "Marzo 2016 - Aprile 2019",
      points: [
        "Inizio e formazione Self-taughting con particolare riferimento ai linguaggi html e css.",
        "Centinaia di ore di tutorial visionati con implementazione delle conoscenze di WordPress, Canva, Javascript.",
        "In veste di Frontend Developer inizio collaborazione con altri sviluppatori per creare prodotti da inserire online.",
        "Studio e formazione di librerie javascript con particolare attenzione a  React, Three.js e JQuery.",
      ],
    },
    {
      title: "Full Stack Developer",
      //company_name: "Tesla",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "Maggio 2019 - Dicembre 2022",
      points: [
        "Sviluppo e manutenzione di applicazioni Web utilizzando WordPress e altre tecnologie correlate.",
        "Collaborazione con team interfunzionali tra cui designer, product manager e altri sviluppatori per creare prodotti di alta qualità.",
        "Implementazione del responsive design e garanzia della compatibilità cross-browser.",
        "Partecipazione alle revisioni del codice e rilascio feedback costruttivi ad altri sviluppatori",
      ],
    },
    {
      title: "Certificazioni e Attestati",
      //company_name: "Shopify",
      icon: backend,
      iconBg: "#383E56",
      date: "Gennaio 2023 - Marzo 2023",
      points: [
        "Corso di formazione Aulab Hackademy - Full immersion di 400 ore - Gennaio/Marzo 2023.",
        "Competenze e conoscenze certificate: html, css, javascript, php, framework laravel e metodologie agili.",
        "Meetup Coding Zone «Filament PHP: lo strumento lowcode che sfrutta lo stack TALL».",
        "Attestato Boolean Data Week Plus - Analisi dei dati statistici · Python · Analisi dei dati · google sheets",
      ],
    },
    {
      title: "Work in Progress",
      //company_name: "Meta",
      icon: creator,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - ...",
      points: [
        "Angular 2+ - framework open source per lo sviluppo di applicazioni web con licenza MIT, evoluzione di AngularJS.",
        "Vue.js - framework JavaScript open-source in configurazione Model–view–viewmodel per la creazione di interfacce utente e single-page applications.",
        "Blender - software libero e multipiattaforma di modellazione, rigging, rendering e texturing di immagini tridimensionali e bidimensionali.",
        "Magento - CMS open source per l'e-commerce lanciato il 31 marzo 2008. Creato dalla Varien e costruito sopra Zend Framework.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Pensavo fosse impossibile realizzare un sito web bello come il nostro prodotto, ma Francesco mi ha smentito.",
      name: "Silvia Torchio",
      designation: "CEO",
      company: "Mary Host",
      image: "src/assets/company/torchio.jpg"
    },
    {
      testimonial:
        "Non ho mai incontrato uno sviluppatore web che si preoccupi veramente del successo dei propri clienti come fa Francesco.",
      name: "Vincenzo Pandolfi",
      designation: "CEO",
      company: "Essebi Srl",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Dopo che Francesco ha ottimizzato il nostro sito web, il traffico è aumentato del 50%. Non possiamo ringraziarlo abbastanza!",
      name: "Carla Terlizzi",
      designation: "CEO",
      company: "Foods Delivery App",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Web Agency",
      description:
        "Sito Web dell'azienda Pixelpro. Qui puoi visionare i nostri progetti, consultare il listino prezzi e i tempi di esecuzione dei lavori. Home page con animazione 3D.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      live_demo_link: "https://pixelpro.cloud/",
    },
    {
      name: "Property Manager",
      description:
        "Sito di professionista che gestisce immobili per conto dei proprietari allo scopo di tutelare ed accrescere il valore del patrimonio immobiliare",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      live_demo_link: "https://mary-host.com/",
    },
    {
      name: "Real Estate",
      description:
        "Agenzia immobiliare a servizio completo che offre una vasta gamma di servizi per aiutare i clienti a comprare, vendere e gestire le loro proprietà.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      live_demo_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };