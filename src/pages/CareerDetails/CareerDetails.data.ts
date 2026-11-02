export const careerDetailsData = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Build the visual, interactive parts of websites and applications that users directly engage with.',
    overview: 'Frontend developers are the bridge between design and technology. They take the visual designs of a website or app and write the code that brings them to life in the browser. If you love seeing the immediate results of your work and care about user experience, this is the path for you.',
    skills: [
      { name: 'HTML & CSS', level: 'Essential' },
      { name: 'JavaScript', level: 'Essential' },
      { name: 'React / Vue / Angular', level: 'Advanced' },
      { name: 'Version Control (Git)', level: 'Intermediate' },
      { name: 'Responsive Design', level: 'Essential' },
    ],
    roadmap: [
      { step: 1, title: 'The Basics', desc: 'Learn HTML for structure and CSS for styling.' },
      { step: 2, title: 'Programming Logic', desc: 'Master JavaScript fundamentals and DOM manipulation.' },
      { step: 3, title: 'Modern Frameworks', desc: 'Build complex UIs with React, Vue, or Angular.' },
      { step: 4, title: 'Portfolio Building', desc: 'Create 3 real-world projects to show employers.' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Design and maintain the servers, databases, and APIs that power applications behind the scenes.',
    overview: 'Backend developers are the engine of any application. While users don\'t see your code, they rely on it for everything. You will work with databases, server logic, and APIs to ensure data flows smoothly and securely. It\'s perfect for those who love logic, problem-solving, and system architecture.',
    skills: [
      { name: 'Node.js / Python / Java', level: 'Essential' },
      { name: 'SQL & Databases', level: 'Essential' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'Server Management', level: 'Intermediate' },
      { name: 'Security Best Practices', level: 'Intermediate' },
    ],
    roadmap: [
      { step: 1, title: 'Server Basics', desc: 'Understand how servers and HTTP requests work.' },
      { step: 2, title: 'Database Design', desc: 'Learn SQL and how to structure relational data.' },
      { step: 3, title: 'API Development', desc: 'Build secure REST APIs using Node.js or Python.' },
      { step: 4, title: 'Deployment & DevOps', desc: 'Learn Docker, CI/CD, and claude deployment.' },
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Developer',
    description: 'Create native and cross-platform mobile applications for iOS and Android devices.',
    overview: 'Mobile developers build the apps that people carry in their pockets every day. Whether you choose to build native apps (Swift for iOS, Kotlin for Android) or cross-platform apps (React Native, Flutter), you will be creating fast, touch-friendly, and highly optimized experiences for mobile users.',
    skills: [
      { name: 'JavaScript / TypeScript', level: 'Essential' },
      { name: 'React Native / Flutter', level: 'Advanced' },
      { name: 'Mobile UI/UX Principles', level: 'Intermediate' },
      { name: 'App Store Deployment', level: 'Intermediate' },
      { name: 'State Management', level: 'Advanced' },
    ],
    roadmap: [
      { step: 1, title: 'Mobile Fundamentals', desc: 'Understand how mobile apps differ from web apps.' },
      { step: 2, title: 'Cross-Platform Frameworks', desc: 'Learn React Native or Flutter to build for both iOS and Android.' },
      { step: 3, title: 'Native APIs', desc: 'Integrate device features like cameras, GPS, and push notifications.' },
      { step: 4, title: 'Publishing', desc: 'Learn how to submit and maintain apps on the App Store and Play Store.' },
    ]
  },
  {
    id: 'claude',
    title: 'Claude Engineer',
    description: 'Design, manage, and scale claude infrastructure to ensure applications run smoothly and securely.',
    overview: 'claude engineers are the architects of the modern internet. Instead of managing physical servers, you use platforms like AWS, Azure, or Google Claude to build scalable, secure, and highly available systems. This role is perfect for those who enjoy infrastructure, automation, and solving complex system challenges.',
    skills: [
      { name: 'AWS / Azure / GCP', level: 'Essential' },
      { name: 'Linux & Networking', level: 'Essential' },
      { name: 'Docker & Kubernetes', level: 'Advanced' },
      { name: 'Infrastructure as Code (Terraform)', level: 'Intermediate' },
      { name: 'CI/CD Pipelines', level: 'Intermediate' },
    ],
    roadmap: [
      { step: 1, title: 'Claude Fundamentals', desc: 'Understand claude concepts and get an AWS/Azure certification.' },
      { step: 2, title: 'Linux & Networking', desc: 'Master the command line and basic network protocols.' },
      { step: 3, title: 'Containerization', desc: 'Learn Docker and how to orchestrate with Kubernetes.' },
      { step: 4, title: 'Automation', desc: 'Automate infrastructure using Terraform and Ansible.' },
    ]
  },
  {
    id: 'security',
    title: 'Cybersecurity Analyst',
    description: 'Protect systems, networks, and data from digital attacks, breaches, and unauthorized access.',
    overview: 'Cybersecurity analysts are the digital bodyguards of the tech world. As cyber threats grow more sophisticated, companies desperately need professionals who can identify vulnerabilities, monitor networks for suspicious activity, and respond to security incidents. It\'s a high-stakes, highly rewarding career for problem solvers.',
    skills: [
      { name: 'Network Security', level: 'Essential' },
      { name: 'Linux & Scripting (Python/Bash)', level: 'Intermediate' },
      { name: 'SIEM Tools & Firewalls', level: 'Advanced' },
      { name: 'Ethical Hacking / Pen Testing', level: 'Intermediate' },
      { name: 'Compliance & Risk Management', level: 'Intermediate' },
    ],
    roadmap: [
      { step: 1, title: 'Networking Basics', desc: 'Master TCP/IP, DNS, and how data moves across networks.' },
      { step: 2, title: 'Operating Systems', desc: 'Become highly proficient in Linux and Windows administration.' },
      { step: 3, title: 'Security Tools', desc: 'Learn to use Wireshark, Nmap, and SIEM platforms.' },
      { step: 4, title: 'Certifications', desc: 'Earn industry-recognized certs like CompTIA Security+ or CEH.' },
    ]
  },
  {
    id: 'management',
    title: 'Tech Project Manager',
    description: 'Lead cross-functional teams, manage timelines, and ensure tech projects align with business goals.',
    overview: 'Tech Project Managers (and Product Managers) are the glue that holds software teams together. You don\'t necessarily need to write code, but you must understand the software development lifecycle. You will translate business requirements into technical tasks, remove blockers for developers, and ensure products are delivered on time.',
    skills: [
      { name: 'Agile & Scrum Methodologies', level: 'Essential' },
      { name: 'Project Management Tools (Jira/Asana)', level: 'Essential' },
      { name: 'Stakeholder Communication', level: 'Advanced' },
      { name: 'Risk Management', level: 'Intermediate' },
      { name: 'Basic Technical Literacy', level: 'Intermediate' },
    ],
    roadmap: [
      { step: 1, title: 'Methodologies', desc: 'Learn Agile, Scrum, Kanban, and Waterfall frameworks.' },
      { step: 2, title: 'Tools of the Trade', desc: 'Master Jira, Trello, Asana, and Confluence for tracking work.' },
      { step: 3, title: 'Leadership & Communication', desc: 'Develop soft skills to manage developers, designers, and stakeholders.' },
      { step: 4, title: 'Real-World Practice', desc: 'Manage a small open-source project or volunteer to lead a team initiative.' },
    ]
  }
];