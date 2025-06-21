export const siteConfig = {
  name: "Yashkirti Raj",
  title: "Forbróir Tosaigh & Enthusiast UI/UX",
  description: "Tógaim eispéiris dhigiteacha eisceachtúla atá tapa, inrochtana agus tarraingteach go radharcach.",
  experience: "4+ bliain taithí",
  experienceDescription: "i bhforbairt tosaigh",
  
  // About Section
  about: {
    journey: [
      "Is forbróir tosaigh paiseanta mé le níos mó ná 4 bliana taithí i gcruthú eispéiris dhigiteacha áille, feidhmiúla agus lárnaithe ar úsáideoir. Táim i gcónaí ag iarraidh teicneolaíochtaí nua a fhoghlaim agus fanacht ar bharr na treochtaí is déanaí.",
      "Le cúlra i ndearadh agus forbairt, tugaim peirspictíocht uathúil do gach tionscadal. Creidim i gcód glan, idirghníomhaíochtaí smaointeacha agus eispéiris a shásann úsáideoirí."
    ],
    personalInfo: {
      name: "Yashkirti Raj",
      email: "yashkirtiraj10@gmail.com",
      availability: "Saorghairme / Lán-aimseartha",
      resume: {
        path: "assets/Resume.pdf",
        filename: "Resume.pdf"
      }
    }
  },

  // Skills Section
  skills: [
    {
      title: "Forbairt Tosaigh",
      skills: [
        { name: "React", icon: "code" },
        { name: "Next.js", icon: "next" },
        { name: "Vue.js", icon: "code" },
        { name: "TypeScript", icon: "code" },
        { name: "Tailwind CSS", icon: "palette" }
      ],
    },
    {
      title: "Dearadh UI/UX",
      skills: [
        { name: "Figma", icon: "pen-tool" },
        { name: "Adobe XD", icon: "pen-tool" },
        { name: "Taighde úsáideoir", icon: "users" },
        { name: "Wireframing", icon: "layout" },
        { name: "Prótaclónú", icon: "box" }
      ],
    },
    { 
      title: "Eolas Cúlra", 
      skills: [
        { name: "Node.js", icon: "server" },
        { name: "Express", icon: "server" },
        { name: "APIs RESTful", icon: "webhook" },
        { name: "GraphQL", icon: "database" },
        { name: "Firebase", icon: "flame" }
      ]
    },
    { 
      title: "Uirlisí & Modhanna", 
      skills: [
        { name: "Git", icon: "git-branch" },
        { name: "GitHub", icon: "github" },
        { name: "CI/CD", icon: "refresh-cw" },
        { name: "Agile", icon: "trello" },
        { name: "Jest", icon: "check-circle" }
      ]
    },
    { 
      title: "Feidhmíocht", 
      skills: [
        { name: "Web Vitals", icon: "activity" },
        { name: "Lighthouse", icon: "lightbulb" },
        { name: "Optamú", icon: "zap" },
        { name: "SEO", icon: "search" },
        { name: "Anailís", icon: "bar-chart" }
      ]
    },
    {
      title: "Scileanna bog",
      skills: [
        { name: "Cumarsáid", icon: "message-circle" },
        { name: "Obair foirne", icon: "users" },
        { name: "Réiteach fadhbanna", icon: "puzzle" },
        { name: "Bainistíocht ama", icon: "clock" },
        { name: "Inoiriúnacht", icon: "refresh-cw" }
      ],
    },
  ],

  // Projects Section
  projects: [
    {
      title: "Ardán E-trádála",
      description: "Siopa ar líne iomlán le cart, seiceáil amach agus comhtháthú íocaíochta.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Suíomh Portfolio",
      description: "Suíomh portfolio nua-aimseartha do ealaíontóir digiteach le gailearaí agus foirm teagmhála.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vue.js", "GSAP", "Firebase", "Dearadh freagrach"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Aip bhainistíochta tascanna",
      description: "Aip táirgiúlachta le comhéadan tarraing agus scaoil agus nuashonruithe fíor-ama.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "TypeScript", "Redux", "Node.js"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Blag taistil",
      description: "Blag dírithe ar ábhar le tacaíocht mheán saibhir agus córas tráchta.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "CMS", "Freagrach", "Optamaithe SEO"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Rianóir folláine",
      description: "Aip gréasáin móibíleach-tosaithe chun traenálacha agus cothú a rianú le léiriú sonraí.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Chart.js", "Comhtháthú API"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Ardán eastát réadach",
      description: "Suíomh liostála eastát réadach le cuardach, scagadh agus comhtháthú léarscáileanna.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "Google Maps API", "Scagadh", "Fíordheimhniú"],
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
    { id: "home", label: "Baile" },
    { id: "about", label: "Fúm" },
    { id: "skills", label: "Scileanna" },
    { id: "projects", label: "Tionscadail" },
    { id: "contact", label: "Teagmháil" },
  ],

  // Footer
  footer: {
    description: "Cruthú eispéiris dhigiteacha eisceachtúla trí chód agus dearadh.",
    copyright: `© ${new Date().getFullYear() > 2025 ? `2025-${new Date().getFullYear()}` : 2025} Yashkirti Raj. Gach ceart ar cosaint.`
  }
} as const 