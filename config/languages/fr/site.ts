export const siteConfig = {
  name: "Yashkirti Raj",
  title: "Développeur Frontend & Passionné UI/UX",
  description: "Je crée des expériences numériques exceptionnelles qui sont rapides, accessibles et visuellement attrayantes.",
  experience: "4+ années d'expérience",
  experienceDescription: "en développement frontend",
  
  // About Section
  about: {
    journey: [
      "Je suis un développeur frontend passionné avec plus de 4 ans d'expérience dans la création d'expériences numériques belles, fonctionnelles et centrées sur l'utilisateur. Je suis toujours en quête d'apprendre de nouvelles technologies et de rester à jour avec les dernières tendances.",
      "Avec un background en design et développement, j'apporte une perspective unique à chaque projet. Je crois en un code propre, des interactions réfléchies et des expériences qui ravissent les utilisateurs."
    ],
    personalInfo: {
      name: "Yashkirti Raj",
      email: "yashkirtiraj10@gmail.com",
      availability: "Freelance / Temps plein",
      resume: {
        path: "assets/Resume.pdf",
        filename: "Resume.pdf"
      }
    }
  },

  // Skills Section
  skills: [
    {
      title: "Développement Frontend",
      skills: [
        { name: "React", icon: "code" },
        { name: "Next.js", icon: "next" },
        { name: "Vue.js", icon: "code" },
        { name: "TypeScript", icon: "code" },
        { name: "Tailwind CSS", icon: "palette" }
      ],
    },
    {
      title: "Design UI/UX",
      skills: [
        { name: "Figma", icon: "pen-tool" },
        { name: "Adobe XD", icon: "pen-tool" },
        { name: "Recherche utilisateur", icon: "users" },
        { name: "Wireframing", icon: "layout" },
        { name: "Prototypage", icon: "box" }
      ],
    },
    { 
      title: "Connaissances Backend", 
      skills: [
        { name: "Node.js", icon: "server" },
        { name: "Express", icon: "server" },
        { name: "APIs RESTful", icon: "webhook" },
        { name: "GraphQL", icon: "database" },
        { name: "Firebase", icon: "flame" }
      ]
    },
    { 
      title: "Outils & Méthodes", 
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
        { name: "Optimisation", icon: "zap" },
        { name: "SEO", icon: "search" },
        { name: "Analytics", icon: "bar-chart" }
      ]
    },
    {
      title: "Compétences douces",
      skills: [
        { name: "Communication", icon: "message-circle" },
        { name: "Travail d'équipe", icon: "users" },
        { name: "Résolution de problèmes", icon: "puzzle" },
        { name: "Gestion du temps", icon: "clock" },
        { name: "Adaptabilité", icon: "refresh-cw" }
      ],
    },
  ],

  // Projects Section
  projects: [
    {
      title: "Plateforme E-commerce",
      description: "Une boutique en ligne complète avec panier, paiement et intégration de paiement.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Site Portfolio",
      description: "Un site portfolio moderne pour un artiste numérique avec galerie et formulaire de contact.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vue.js", "GSAP", "Firebase", "Design responsive"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Application de gestion de tâches",
      description: "Une application de productivité avec interface drag-and-drop et mises à jour en temps réel.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "TypeScript", "Redux", "Node.js"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Blog de voyage",
      description: "Un blog axé sur le contenu avec support multimédia riche et système de commentaires.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "CMS", "Responsive", "Optimisé SEO"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Suivi de fitness",
      description: "Une application web mobile-first pour suivre les entraînements et la nutrition avec visualisation de données.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Chart.js", "Intégration API"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Plateforme immobilière",
      description: "Site de listings immobiliers avec recherche, filtrage et intégration de cartes.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "Google Maps API", "Filtrage", "Authentification"],
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
    { id: "home", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ],

  // Footer
  footer: {
    description: "Création d'expériences numériques exceptionnelles grâce au code et au design.",
    copyright: `© ${new Date().getFullYear() > 2025 ? `2025-${new Date().getFullYear()}` : 2025} Yashkirti Raj. Tous droits réservés.`
  }
} as const 