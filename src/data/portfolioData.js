// src/data/portfolioData.js

export const portfolioData = {
  name: "John Onyekwere",
  title: "Junior Software Developer",
  email: "johnndubuisi140@gmail.com",
  github: "https://github.com/johnonye",
  linkedin: "https://linkedin.com/in/onyekwere-john",
  tagline: "Seeking Internship and Opportunities 2026",
  bio: "Passionate about building modern web applications with React, Node.js, and cloud technologies. Currently pursuing a Computer Science degree and looking for an internship to grow my skills and contribute to real-world projects.",
  learning: ["TypeScript", "Next.js", "AWS", "GraphQL"],
  resumeUrl: "/resume.pdf"
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Full-stack dashboard with product management, sales analytics, and user authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com",
    liveDemo: "https://demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Drag-and-drop task manager with real-time updates and team collaboration features.",
    tech: ["React", "Firebase", "Tailwind CSS", "React DnD"],
    github: "https://github.com",
    liveDemo: "https://demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Application",
    description: "Responsive weather app with location detection and 7-day forecast visualization.",
    tech: ["React", "OpenWeather API", "Axios", "Geolocation API"],
    github: "https://github.com",
    liveDemo: "https://demo.com",
    featured: false
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "Personal finance tracker with data visualization and budget planning tools.",
    tech: ["React", "Chart.js", "LocalStorage", "CSS Modules"],
    github: "https://github.com",
    liveDemo: "https://demo.com",
    featured: false
  }
];

export const skills = {
  "Frontend": ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"],
  "Backend": ["Node.js", "Express", "Python", "REST APIs", "MongoDB", "Firebase"],
  "Tools": ["Git/GitHub", "VS Code", "Figma", "Postman", "Docker", "Jest"]
};

export const codeHighlights = [
  {
    name: "Task Manager",
    tech: "React + Firebase",
    featured: true
  },
  {
    name: "E-Commerce API",
    tech: "Node.js + MongoDB",
    featured: true
  },
  {
    name: "Weather App",
    tech: "React + APIs",
    featured: false
  }
];