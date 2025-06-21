export const siteConfig = {
  name: "Yashkirti Raj",
  title: "Frontend-Entwickler & UI/UX-Enthusiast",
  description: "Ich erstelle außergewöhnliche digitale Erlebnisse, die schnell, zugänglich und visuell ansprechend sind.",
  experience: "4+ Jahre Erfahrung",
  experienceDescription: "in der Frontend-Entwicklung",
  
  // About Section
  about: {
    journey: [
      "Ich bin ein leidenschaftlicher Frontend-Entwickler mit über 4 Jahren Erfahrung in der Erstellung schöner, funktionaler und benutzerzentrierter digitaler Erlebnisse. Ich bin immer bestrebt, neue Technologien zu lernen und auf dem neuesten Stand der Trends zu bleiben.",
      "Mit einem Hintergrund in Design und Entwicklung bringe ich eine einzigartige Perspektive in jedes Projekt ein. Ich glaube an sauberen Code, durchdachte Interaktionen und Erlebnisse, die Benutzer begeistern."
    ],
    personalInfo: {
      name: "Yashkirti Raj",
      email: "yashkirtiraj10@gmail.com",
      availability: "Freelance / Vollzeit",
      resume: {
        path: "assets/Resume.pdf",
        filename: "Resume.pdf"
      }
    }
  },

  // Skills Section
  skills: [
    {
      title: "Frontend-Entwicklung",
      skills: [
        { name: "React", icon: "code" },
        { name: "Next.js", icon: "next" },
        { name: "Vue.js", icon: "code" },
        { name: "TypeScript", icon: "code" },
        { name: "Tailwind CSS", icon: "palette" }
      ],
    },
    {
      title: "UI/UX-Design",
      skills: [
        { name: "Figma", icon: "pen-tool" },
        { name: "Adobe XD", icon: "pen-tool" },
        { name: "Benutzerforschung", icon: "users" },
        { name: "Wireframing", icon: "layout" },
        { name: "Prototyping", icon: "box" }
      ],
    },
    { 
      title: "Backend-Kenntnisse", 
      skills: [
        { name: "Node.js", icon: "server" },
        { name: "Express", icon: "server" },
        { name: "RESTful APIs", icon: "webhook" },
        { name: "GraphQL", icon: "database" },
        { name: "Firebase", icon: "flame" }
      ]
    },
    { 
      title: "Tools & Methoden", 
      skills: [
        { name: "Git", icon: "git-branch" },
        { name: "GitHub", icon: "github" },
        { name: "CI/CD", icon: "refresh-cw" },
        { name: "Agile", icon: "trello" },
        { name: "Jest", icon: "check-circle" }
      ]
    },
    { 
      title: "Performance", 
      skills: [
        { name: "Web Vitals", icon: "activity" },
        { name: "Lighthouse", icon: "lightbulb" },
        { name: "Optimierung", icon: "zap" },
        { name: "SEO", icon: "search" },
        { name: "Analytics", icon: "bar-chart" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Kommunikation", icon: "message-circle" },
        { name: "Teamarbeit", icon: "users" },
        { name: "Problemlösung", icon: "puzzle" },
        { name: "Zeitmanagement", icon: "clock" },
        { name: "Anpassungsfähigkeit", icon: "refresh-cw" }
      ],
    },
  ],

  // Projects Section
  projects: [
    {
      title: "E-Commerce-Plattform",
      description: "Ein vollständig ausgestatteter Online-Shop mit Warenkorb, Checkout und Zahlungsintegration.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Portfolio-Website",
      description: "Eine moderne Portfolio-Website für einen digitalen Künstler mit Galerie und Kontaktformular.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vue.js", "GSAP", "Firebase", "Responsive Design"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Aufgabenverwaltungs-App",
      description: "Eine Produktivitäts-App mit Drag-and-Drop-Interface und Echtzeit-Updates.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "TypeScript", "Redux", "Node.js"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Reiseblog",
      description: "Ein inhaltsorientierter Blog mit Rich-Media-Unterstützung und Kommentarsystem.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "CMS", "Responsive", "SEO-optimiert"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Fitness-Tracker",
      description: "Eine mobile-first Web-App zum Verfolgen von Workouts und Ernährung mit Datenvisualisierung.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Chart.js", "API-Integration"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Immobilien-Plattform",
      description: "Immobilien-Listing-Website mit Suche, Filterung und Kartenintegration.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "Google Maps API", "Filterung", "Authentifizierung"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
  ],

  // Contact Section
  contact: {
    email: "yashkirtiraj10@gmail.com",
    github: "github.com/codelixer",
    website: "https://codelixer.github.io/portfolio/",
    socialLinks: {
      // twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/yashkirti-raj/"
      // dribbble: "https://dribbble.com",
      // instagram: "https://instagram.com"
    }
  },

  // Navigation
  navigation: [
    { id: "home", label: "Start" },
    { id: "about", label: "Über mich" },
    { id: "skills", label: "Fähigkeiten" },
    { id: "projects", label: "Projekte" },
    { id: "contact", label: "Kontakt" },
  ],

  // Footer
  footer: {
    description: "Erstellung außergewöhnlicher digitaler Erlebnisse durch Code und Design.",
    copyright: `© ${new Date().getFullYear() > 2025 ? `2025-${new Date().getFullYear()}` : 2025} Yashkirti Raj. Alle Rechte vorbehalten.`
  }
} as const 