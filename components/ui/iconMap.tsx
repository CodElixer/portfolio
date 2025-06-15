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

interface IconMapProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof icons | keyof typeof skillIconMap;
}

export const IconMap = ({ name, ...props }: IconMapProps) => {
  // If the name is a skill name, get the corresponding icon name
  const iconName = skillIconMap[name] || name;
  const Icon = icons[iconName as keyof typeof icons] as LucideIcon;
  
  if (!Icon) {
    console.warn(`Icon not found for name: ${name}`);
    return null;
  }

  return <Icon {...props} />;
};
