export const siteConfig = {
  name: "Yashkirti Raj",
  title: "Frontend Developer & UI/UX Enthusiast",
  description: "I build exceptional digital experiences that are fast, accessible, and visually appealing.",
  experience: "4+ Years Experience",
  experienceDescription: "in Frontend Development",
  
  // About Section
  about: {
    journey: [
      "I'm a passionate Frontend Developer with 4+ years of experience creating beautiful, functional, and user-centered digital experiences. I am always looking to learn new technologies and stay on top of the latest trends.",
      "With a background in both design and development, I bring a unique perspective to every project. I believe in clean code, thoughtful interactions, and experiences that delight users."
    ],
    personalInfo: {
      name: "Yashkirti Raj",
      email: "yashkirtiraj10@gmail.com",
      availability: "Freelance / Full-time",
      resume: {
        path: "assets/Resume.pdf",
        filename: "Resume.pdf"
      }
    }
  },

  // Skills Section
  skills: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "code" },
        { name: "Next.js", icon: "next" },
        { name: "Vue.js", icon: "code" }, // Note: No specific Vue icon in Lucide
        { name: "TypeScript", icon: "code" },
        { name: "Tailwind CSS", icon: "palette" }
      ],
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "Figma", icon: "pen-tool" },
        { name: "Adobe XD", icon: "pen-tool" },
        { name: "User Research", icon: "users" },
        { name: "Wireframing", icon: "layout" },
        { name: "Prototyping", icon: "box" }
      ],
    },
    { 
      title: "Backend Knowledge", 
      skills: [
        { name: "Node.js", icon: "server" },
        { name: "Express", icon: "server" },
        { name: "RESTful APIs", icon: "webhook" },
        { name: "GraphQL", icon: "database" },
        { name: "Firebase", icon: "flame" }
      ]
    },
    { 
      title: "Tools & Methods", 
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
        { name: "Optimization", icon: "zap" },
        { name: "SEO", icon: "search" },
        { name: "Analytics", icon: "bar-chart" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", icon: "message-circle" },
        { name: "Teamwork", icon: "users" },
        { name: "Problem Solving", icon: "puzzle" },
        { name: "Time Management", icon: "clock" },
        { name: "Adaptability", icon: "refresh-cw" }
      ],
    },
  ],

  // Projects Section
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website for a digital artist with gallery and contact form.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vue.js", "GSAP", "Firebase", "Responsive Design"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Task Management App",
      description: "A productivity app with drag-and-drop interface and real-time updates.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "TypeScript", "Redux", "Node.js"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Travel Blog",
      description: "A content-focused blog with rich media support and commenting system.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "CMS", "Responsive", "SEO Optimized"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Fitness Tracker",
      description: "A mobile-first web app for tracking workouts and nutrition with data visualization.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Chart.js", "API Integration"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Real Estate Platform",
      description: "Property listing website with search, filtering, and map integration.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "Google Maps API", "Filtering", "Authentication"],
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
      linkedin: "https://linkedin.com/in/yashkirti-raj/"
      // dribbble: "https://dribbble.com",
      // instagram: "https://instagram.com"
    }
  },

  // Navigation
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],

  // Footer
  footer: {
    description: "Creating exceptional digital experiences through code and design.",
    copyright: `© ${new Date().getFullYear() > 2025 ? `2025-${new Date().getFullYear()}` : 2025} Yashkirti Raj. All rights reserved.`
  }
} 