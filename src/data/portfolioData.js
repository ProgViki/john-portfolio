// src/data/portfolioData.js

export const developerInfo = {
  name: "John Onyekwere",
  title: "Aspiring Frontend Developer",
  location: "Lagos, Nigeria",
  email: "johnndubuisi140@gmail.com",
  github: "https://github.com/OnyeJohn",
  linkedin: "https://linkedin.com/in/onyekwere-john",
  tagline: "Seeking Internship and Opportunities",
  bio: "Currently mastering the fundamentals of web development with HTML, CSS, and JavaScript. Passionate about creating clean, accessible websites and eager to apply my skills in a real-world environment. Learning React.js to build modern web applications.",
  status: "Currently pursuing Computer Science degree",
  resumeUrl: "/public/JOHNONYE_RESUME.pdf"
};

export const coreSkills = [
  {
    name: "HTML5",
    level: "Advanced",
    description: "Semantic markup, forms, accessibility",
    icon: "HTML"
  },
  {
    name: "CSS3",
    level: "Intermediate",
    description: "Flexbox, Grid, responsive design",
    icon: "CSS"
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    description: "DOM manipulation, ES6+, APIs",
    icon: "JS"
  },
  {
    name: "React.js",
    level: "Beginner",
    description: "Currently learning",
    icon: "React"
  },
  {
    name: "Git & GitHub",
    level: "Intermediate",
    description: "Version control basics",
    icon: "Git"
  },
  {
    name: "Responsive Design",
    level: "Intermediate",
    description: "Mobile-first approach",
    icon: "Responsive"
  }
];

export const projects = [
  {
    id: 1,
    title: "Responsive Restaurant Website",
    description: "A fully responsive restaurant website with mobile-first design, interactive menu, and reservation form.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/OnyeJohn/restaurant-website",
    liveDemo: "https://jordansmith-dev.github.io/restaurant-website",
    features: ["Mobile-first", "Interactive gallery", "Form validation"],
    difficulty: "Intermediate"
  },
  // {
  //   id: 2,
  //   title: "Weather Dashboard",
  //   description: "Weather application fetching data from OpenWeather API with dynamic UI updates.",
  //   tech: ["HTML", "CSS", "JavaScript", "API"],
  //   github: "https://github.com/jordansmith-dev/weather-dashboard",
  //   liveDemo: "https://jordansmith-dev.github.io/weather-dashboard",
  //   features: ["API integration", "Local storage", "Dynamic updates"],
  //   difficulty: "Intermediate"
  // },
  // {
  //   id: 3,
  //   title: "Task Manager App",
  //   description: "Simple task management application with add, edit, delete, and filter functionality.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/jordansmith-dev/task-manager",
  //   liveDemo: "https://jordansmith-dev.github.io/task-manager",
  //   features: ["CRUD operations", "Filter tasks", "Local storage"],
  //   difficulty: "Beginner"
  // },
  {
    id: 4,
    title: "Personal Portfolio V1",
    description: "My first portfolio website built with pure HTML and CSS to showcase early projects.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/OnyeJohn/portfolio-v1",
    liveDemo: "https://jordansmith-dev.github.io/portfolio-v1",
    features: ["Responsive layout", "CSS animations", "Clean design"],
    difficulty: "Beginner"
  }
];

export const learningPath = [
  { skill: "JavaScript ES6+", status: "In Progress", progress: 80 },
  { skill: "React Fundamentals", status: "In Progress", progress: 40 },
  { skill: "Tailwind CSS", status: "In Progress", progress: 70 },
  { skill: "Git Advanced", status: "Next", progress: 20 },
  { skill: "TypeScript", status: "Planned", progress: 10 },
  { skill: "Node.js Basics", status: "Planned", progress: 5 }
];

export const goals = [
  "Secure a frontend dev internship or junior roles",
  "Contribute to open source projects",
  "Build 10+ real-world projects",
  "Master React ecosystem",
  "Learn backend basics"
];