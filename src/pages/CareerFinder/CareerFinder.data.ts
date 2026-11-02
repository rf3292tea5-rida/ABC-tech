export type CareerTag =
  | "frontend"
  | "backend"
  | "data"
  | "design"
  | "management"
  | "security";

export interface Option {
  id: string;
  label: string;
  tags: CareerTag[];
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
}

export const CAREER_FINDER_QUESTIONS: Question[] = [
  {
    id: "q1",
    question: "What activities do you enjoy the most?",
    options: [
      {
        id: "q1a",
        label: "Building visual things people can interact with",
        tags: ["frontend", "design"],
      },
      {
        id: "q1b",
        label: "Solving complex logic puzzles and optimizing systems",
        tags: ["backend", "data", "security"],
      },
      {
        id: "q1c",
        label: "Organizing people, projects, and strategies",
        tags: ["management"],
      },
      {
        id: "q1d",
        label: "Analyzing trends and finding patterns in information",
        tags: ["data", "backend"],
      },
    ],
  },
  {
    id: "q2",
    question: "How do you prefer to work?",
    options: [
      {
        id: "q2a",
        label: "Independently, with deep focus on my own tasks",
        tags: ["backend", "data", "security"],
      },
      {
        id: "q2b",
        label: "Collaboratively, brainstorming with a team",
        tags: ["frontend", "design", "management"],
      },
      {
        id: "q2c",
        label: "A mix of both, depending on the project phase",
        tags: ["frontend", "backend", "management"],
      },
    ],
  },
  {
    id: "q3",
    question: "What kind of problems excite you?",
    options: [
      {
        id: "q3a",
        label: "Making something look beautiful and easy to use",
        tags: ["design", "frontend"],
      },
      {
        id: "q3b",
        label: "Making something fast, secure, and scalable",
        tags: ["backend", "security"],
      },
      {
        id: "q3c",
        label: "Helping a business grow and reach its goals",
        tags: ["management", "data"],
      },
    ],
  },
];

export interface CareerResult {
  id: string;
  title: string;
  description: string;
  matchScore: number;
  whyItFits: string;
  tags: CareerTag[];
}

export const CAREER_PROFILES: CareerResult[] = [
  {
    id: "frontend",
    title: "Frontend Developer",
    description:
      "Build the visual, interactive parts of websites and applications that users directly engage with.",
    matchScore: 0,
    whyItFits:
      "You enjoy building visual things and collaborating with others to create intuitive user experiences.",
    tags: ["frontend", "design"],
  },
  {
    id: "backend",
    title: "Backend Developer",
    description:
      "Design and maintain the servers, databases, and APIs that power applications behind the scenes.",
    matchScore: 0,
    whyItFits:
      "You love solving complex logic puzzles, optimizing systems, and working with deep focus.",
    tags: ["backend", "security", "data"],
  },
  {
    id: "data",
    title: "Data Analyst / Scientist",
    description:
      "Collect, process, and analyze data to help organizations make smarter, evidence-based decisions.",
    matchScore: 0,
    whyItFits:
      "You are excited by analyzing trends, finding patterns, and solving business problems with information.",
    tags: ["data", "backend", "management"],
  },
  {
    id: "design",
    title: "UX/UI Designer",
    description:
      "Research, design, and prototype digital products to ensure they are beautiful, accessible, and user-friendly.",
    matchScore: 0,
    whyItFits:
      "Your passion lies in making things look beautiful, easy to use, and working collaboratively on creative solutions.",
    tags: ["design", "frontend"],
  },
  {
    id: "management",
    title: "Tech Project Manager",
    description:
      "Lead cross-functional teams, manage timelines, and ensure tech projects align with business goals.",
    matchScore: 0,
    whyItFits:
      "You excel at organizing people, strategies, and helping businesses grow through structured execution.",
    tags: ["management"],
  },
];
