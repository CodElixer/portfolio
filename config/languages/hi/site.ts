export const siteConfig = {
  name: "यशकीर्ति राज",
  title: "फ्रंटएंड डेवलपर और UI/UX विशेषज्ञ",
  description: "मैं तेज़, सुलभ और आकर्षक डिजिटल अनुभव बनाता हूं।",
  experience: "4+ वर्षों का अनुभव",
  experienceDescription: "फ्रंटएंड विकास में",
  
  // About Section
  about: {
    journey: [
      "मैं एक समर्पित फ्रंटएंड डेवलपर हूं जिसे सुंदर, कार्यात्मक और उपयोगकर्ता-केंद्रित डिजिटल अनुभव बनाने का 4+ वर्षों का अनुभव है। मैं निरंतर नई तकनीकें सीखने और नवीनतम रुझानों से अवगत रहने का प्रयास करता हूं।",
      "डिज़ाइन और विकास दोनों की पृष्ठभूमि के साथ, मैं हर परियोजना में एक विशिष्ट दृष्टिकोण लाता हूं। मैं स्वच्छ कोड, सोची-समझी अंतःक्रियाओं और उपयोगकर्ताओं को प्रसन्न करने वाले अनुभवों में विश्वास रखता हूं।"
    ],
    personalInfo: {
      name: "यशकीर्ति राज",
      email: "yashkirtiraj10@gmail.com",
      availability: "फ्रीलांस / पूर्णकालिक",
      resume: {
        path: "assets/Resume.pdf",
        filename: "Resume.pdf"
      }
    }
  },

  // Skills Section
  skills: [
    {
      title: "फ्रंटएंड विकास",
      skills: [
        { name: "React", icon: "code" },
        { name: "Next.js", icon: "next" },
        { name: "Vue.js", icon: "code" },
        { name: "TypeScript", icon: "code" },
        { name: "Tailwind CSS", icon: "palette" }
      ],
    },
    {
      title: "UI/UX डिज़ाइन",
      skills: [
        { name: "Figma", icon: "pen-tool" },
        { name: "Adobe XD", icon: "pen-tool" },
        { name: "उपयोगकर्ता शोध", icon: "users" },
        { name: "वायरफ्रेम बनाना", icon: "layout" },
        { name: "प्रोटोटाइप बनाना", icon: "box" }
      ],
    },
    { 
      title: "बैकएंड ज्ञान", 
      skills: [
        { name: "Node.js", icon: "server" },
        { name: "Express", icon: "server" },
        { name: "RESTful APIs", icon: "webhook" },
        { name: "GraphQL", icon: "database" },
        { name: "Firebase", icon: "flame" }
      ]
    },
    { 
      title: "उपकरण और विधियां", 
      skills: [
        { name: "Git", icon: "git-branch" },
        { name: "GitHub", icon: "github" },
        { name: "CI/CD", icon: "refresh-cw" },
        { name: "एजाइल", icon: "trello" },
        { name: "Jest", icon: "check-circle" }
      ]
    },
    { 
      title: "प्रदर्शन", 
      skills: [
        { name: "Web Vitals", icon: "activity" },
        { name: "Lighthouse", icon: "lightbulb" },
        { name: "अनुकूलन", icon: "zap" },
        { name: "SEO", icon: "search" },
        { name: "विश्लेषण", icon: "bar-chart" }
      ]
    },
    {
      title: "सॉफ्ट स्किल्स",
      skills: [
        { name: "संचार", icon: "message-circle" },
        { name: "टीम वर्क", icon: "users" },
        { name: "समस्या समाधान", icon: "puzzle" },
        { name: "समय प्रबंधन", icon: "clock" },
        { name: "लचीलापन", icon: "refresh-cw" }
      ],
    },
  ],

  // Projects Section
  projects: [
    {
      title: "ई-कॉमर्स प्लेटफॉर्म",
      description: "कार्ट, चेकआउट और भुगतान एकीकरण के साथ पूर्ण सुविधाओं वाला ऑनलाइन स्टोर।",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "पोर्टफोलियो वेबसाइट",
      description: "गैलरी और संपर्क फॉर्म के साथ डिजिटल कलाकार के लिए आधुनिक पोर्टफोलियो वेबसाइट।",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vue.js", "GSAP", "Firebase", "प्रतिक्रियाशील डिज़ाइन"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "कार्य प्रबंधन ऐप",
      description: "ड्रैग-एंड-ड्रॉप इंटरफेस और वास्तविक समय अपडेट के साथ उत्पादकता ऐप।",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "TypeScript", "Redux", "Node.js"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "यात्रा ब्लॉग",
      description: "समृद्ध मीडिया समर्थन और टिप्पणी प्रणाली के साथ सामग्री-केंद्रित ब्लॉग।",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "CMS", "प्रतिक्रियाशील", "SEO अनुकूलित"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "फिटनेस ट्रैकर",
      description: "डेटा विज़ुअलाइजेशन के साथ कसरत और पोषण ट्रैकिंग के लिए मोबाइल-पहले वेब ऐप।",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Chart.js", "API एकीकरण"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "रियल एस्टेट प्लेटफॉर्म",
      description: "खोज, फ़िल्टरिंग और मानचित्र एकीकरण के साथ संपत्ति सूची वेबसाइट।",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "Google Maps API", "फ़िल्टरिंग", "प्रमाणीकरण"],
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
    { id: "home", label: "होम" },
    { id: "about", label: "परिचय" },
    { id: "skills", label: "विशेषताएं" },
    { id: "projects", label: "परियोजनाएं" },
    { id: "contact", label: "संपर्क" },
  ],

  // Footer
  footer: {
    description: "कोड और डिज़ाइन के माध्यम से असाधारण डिजिटल अनुभव बनाना।",
    copyright: `© ${new Date().getFullYear() > 2025 ? `2025-${new Date().getFullYear()}` : 2025} यशकीर्ति राज। सर्वाधिकार सुरक्षित।`
  }
} as const 