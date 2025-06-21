import { LucideIcon, icons } from "lucide-react";
import { SVGProps } from "react";

// Mapping of skill names to their corresponding Lucide icons
const skillIconMap: Record<string, keyof typeof icons> = {
  // Frontend Development
  "React": "Code",
  "Next.js": "Code",
  "Vue.js": "Code",
  "TypeScript": "Code",
  "Tailwind CSS": "Palette",

  // UI/UX Design
  "Figma": "PenTool",
  "Adobe XD": "PenTool",
  "User Research": "Users",
  "Wireframing": "LayoutGrid",
  "Prototyping": "Box",

  // Backend Knowledge
  "Node.js": "Server",
  "Express": "Server",
  "RESTful APIs": "Webhook",
  "GraphQL": "Database",
  "Firebase": "Flame",

  // Tools & Methods
  "Git": "GitBranch",
  "GitHub": "Github",
  "CI/CD": "RefreshCw",
  "Agile": "Trello",
  "Jest": "Check",

  // Performance
  "Web Vitals": "Activity",
  "Lighthouse": "Lightbulb",
  "Optimization": "Zap",
  "SEO": "Search",
  "Analytics": "Activity",

  // Soft Skills
  "Communication": "MessageCircle",
  "Teamwork": "Users",
  "Problem Solving": "Puzzle",
  "Time Management": "Clock",
  "Adaptability": "RefreshCw",
};

// Multi-language skill name mapping to English equivalents
const skillNameMapping: Record<string, string> = {
  // Hindi translations
  "उपयोगकर्ता शोध": "User Research",
  "वायरफ्रेम बनाना": "Wireframing",
  "प्रोटोटाइप बनाना": "Prototyping",
  "APIs RESTful": "RESTful APIs",
  "अनुकूलन": "Optimization",
  "विश्लेषण": "Analytics",
  "संचार": "Communication",
  "टीम वर्क": "Teamwork",
  "समस्या समाधान": "Problem Solving",
  "समय प्रबंधन": "Time Management",
  "लचीलापन": "Adaptability",
  "एजाइल": "Agile",

  // German translations
  "Benutzerforschung": "User Research",
  "Prototypage": "Prototyping",
  "Optimierung": "Optimization",
  "Kommunikation": "Communication",
  "Teamarbeit": "Teamwork",
  "Problemlösung": "Problem Solving",
  "Zeitmanagement": "Time Management",
  "Anpassungsfähigkeit": "Adaptability",

  // French translations
  "Recherche utilisateur": "User Research",
  "Optimisation": "Optimization",
  "Travail d'équipe": "Teamwork",
  "Résolution de problèmes": "Problem Solving",
  "Gestion du temps": "Time Management",
  "Adaptabilité": "Adaptability",

  // Irish translations
  "Taighde úsáideoir": "User Research",
  "Prótaclónú": "Prototyping",
  "Optamú": "Optimization",
  "Anailís": "Analytics",
  "Cumarsáid": "Communication",
  "Obair foirne": "Teamwork",
  "Réiteach fadhbanna": "Problem Solving",
  "Bainistíocht ama": "Time Management",
  "Inoiriúnacht": "Adaptability",
};

interface IconMapProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof icons | keyof typeof skillIconMap;
}

export const IconMap = ({ name, ...props }: IconMapProps) => {
  // First, try to map the skill name to its English equivalent
  const englishSkillName = skillNameMapping[name] || name;
  
  // Then get the corresponding icon name
  const iconName = skillIconMap[englishSkillName] || englishSkillName;
  const Icon = icons[iconName as keyof typeof icons] as LucideIcon;
  
  if (!Icon) {
    console.warn(`Icon not found for name: ${name} (mapped to: ${englishSkillName})`);
    return null;
  }

  return <Icon {...props} />;
};
