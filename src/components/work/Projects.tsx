'use client';

import { getPosts } from "@/app/utils/utils";
import { Column } from "@once-ui-system/core";
import styles from "./Projects.module.scss";

interface ProjectsProps {
  range?: [number, number?];
}

const projects = [
  {
    title: "EID Greetings Platform",
    description: "A  Eid greetings generator that generates customized greetings for Eid ul Fitr and Eid ul Adha in urdu english and arabic.",
    image: "/images/projects/eid2.png",
    live: "https://eid-greetings-by-ayesha-mughal.streamlit.app/",
    github: "https://github.com/CodeVoyager007/EID_Greetings/tree/main/eid-special"
  },
  {
    title: "Secure Data Encryption",
    description: "A Python-based secure data encryption and management system.",
    image: "/images/projects/secure-data.png",
    live: "https://pythonprojects-secure-data-encryptions.streamlit.app/",
    github: "https://github.com/CodeVoyager007/PYTHON_PROJECTS/tree/main/05-secure-data-encryption"
  },
  {
    title: "Code Mentor",
    description: "A code mentoring and learning platform with interactive lessons, quizzes, and more.",
    image: "/images/projects/code-mentor.png",
    live: "https://codementor-by-ayesha-mughal.streamlit.app/",
    github: "https://github.com/CodeVoyager007/Quarter3-Assignments/tree/main/class8"
  },
  {
    title: "Blog Generator",
    description: "An AI-powered blog generator that creates articles from prompts.",
    image: "/images/projects/blog-generator.png",
    live: "https://blog-generator-by-ayesha-mughal.streamlit.app/",
    github: "https://github.com/CodeVoyager007/Quarter4-learning/tree/main/topic09-tool-calling"
  },
  {
    title: "Poetry Analysis System",
    description: "A system for analyzing poetry using Openai sdk topics.",
    image: "/images/projects/poetry-analysis-system.png",
    live: "https://poetry-analysis-system-by-ayesha-mughal.streamlit.app/",
    github: "https://github.com/CodeVoyager007/Quarter4-learning/tree/main/Topic11-Handoffs"
  },
  {
    title: "GitHub Profile Viewer",
    description: "A web app to search and view GitHub profiles and repositories.",
    image: "/images/projects/github-profile-viewer.png",
    live: "https://github-profile-search-app-sage.vercel.app/",
    github: "https://github.com/CodeVoyager007/Github-Profile-Search-App"
  },
  {
    title: "Course Search Engine",
    description: "A search engine for programming courses with filters and recommendations.",
    image: "/images/projects/course-search-engine.png",
    live: "https://courses-search-engine-by-ayesha-mughal.vercel.app/",
    github: "https://github.com/CodeVoyager007/Courses-Search-Engine"
  },
  {
    title: "Weather Widget App",
    description: "A weather widget app with real-time data and forecasts.",
    image: "/images/projects/weather-widget2.png",
    live: "https://weather-widget-app-alpha.vercel.app/",
    github: "https://github.com/CodeVoyager007/Weather-Widget-App"
  }
];

export function Projects() {
  function openInNewTab(url: string) {
    console.log('Button clicked! Opening URL:', url);
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening URL:', error);
      // Fallback: try to open in same tab
      window.location.href = url;
    }
  }
  
  const handleButtonClick = (url: string, type: string) => {
    console.log(`${type} button clicked for URL:`, url);
    openInNewTab(url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Creative Portfolio</h1>
        <p className={styles.subtitle}>
          Exploring the intersection of technology and creativity through innovative projects that push boundaries and deliver exceptional user experiences.
        </p>
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={project.title} className={`${styles.projectCard} ${styles.glow} ${styles.floating}`} style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectLinks}>
              <button 
                type="button" 
                className={styles.projectLink} 
                onClick={() => handleButtonClick(project.live, 'Live Demo')}
                onMouseDown={(e) => e.preventDefault()}
                style={{ position: 'relative', zIndex: 20 }}
              >
                🌐 Live Demo
              </button>
              <button 
                type="button" 
                className={styles.projectLink} 
                onClick={() => handleButtonClick(project.github, 'GitHub')}
                onMouseDown={(e) => e.preventDefault()}
                style={{ position: 'relative', zIndex: 20 }}
              >
                📁 GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.header}>
        <h2 className={styles.title} style={{ fontSize: '2.5rem' }}>Ready to Collaborate?</h2>
        <p className={styles.subtitle}>
          Let's create something amazing together. I'm always excited to work on new challenges and bring innovative ideas to life.
        </p>
      </div>
    </div>
  );
}

// Helper functions to get project-specific features and links
function getProjectFeatures(projectTitle: string): string[] {
  const features: { [key: string]: string[] } = {
    "Course Search Engine": [
      "Advanced search with filters for subject, level, duration, and price",
      "AI-powered course recommendations based on user preferences",
      "Real-time search with instant results",
      "User reviews and rating system",
      "Course analytics and popularity insights",
      "Responsive design for all devices"
    ],
    "Interactive Quiz App": [
      "Multiple question types (MCQ, True/False, Fill-in-the-blank)",
      "Real-time scoring and instant feedback",
      "Progress tracking with visual indicators",
      "Timer functionality for time-limited quizzes",
      "Local storage for saving progress and high scores",
      "Beautiful animations and smooth transitions"
    ],
    "Weather Widget": [
      "Real-time weather data with current conditions",
      "7-day weather forecast with detailed breakdowns",
      "Automatic location detection using geolocation",
      "Manual city search functionality",
      "Animated weather icons and smooth transitions",
      "Customizable weather alerts and notifications"
    ],
    "GitHub Profile Viewer": [
      "Comprehensive GitHub profile analytics",
      "Repository insights and language analysis",
      "Contribution tracking with visual heatmaps",
      "Interactive charts using Chart.js",
      "Real-time data from GitHub API",
      "Detailed statistics and metrics"
    ],
    "Secure Data Manager": [
      "End-to-end AES-256 encryption for all data",
      "Secure file upload and download system",
      "JWT-based authentication with refresh tokens",
      "Complete audit trails and access logging",
      "Encrypted sharing with expiration dates",
      "Automated backup system with version control"
    ],
    "Syntax Crafter": [
      "Support for 50+ programming languages",
      "Real-time collaboration with conflict resolution",
      "AI-powered code suggestions and auto-completion",
      "Automatic code formatting and linting",
      "Integrated debugging tools and console",
      "Git integration with visual diff tools"
    ],
    "EID Digital Platform": [
      "HD video conferencing for virtual gatherings",
      "Live prayer streaming with community participation",
      "Secure messaging system for community members",
      "Educational content about Eid traditions",
      "Event management and organization tools",
      "Mobile-responsive design for all devices"
    ],
    "Code Mentor": [
      "AI-powered personalized learning paths",
      "Real-time code analysis and feedback",
      "Step-by-step interactive tutorials",
      "Detailed progress tracking and analytics",
      "AI-powered code review with suggestions",
      "Community features for learners and mentors"
    ]
  };
  
  return features[projectTitle] || [
    "Advanced features and functionality",
    "Modern UI/UX design",
    "Responsive and accessible",
    "Performance optimized",
    "Scalable architecture",
    "User-friendly interface"
  ];
}

function getLiveDemoLink(projectTitle: string): string {
  const demoLinks: { [key: string]: string } = {
    "Course Search Engine": "https://courses-search-engine.vercel.app",
    "Interactive Quiz App": "https://quiz-app-typescript.vercel.app",
    "Weather Widget": "https://weather-widget-app.vercel.app",
    "GitHub Profile Viewer": "https://github-profile-search-app.vercel.app",
    "Secure Data Manager": "https://secure-data-manager.vercel.app",
    "Syntax Crafter": "https://syntax-crafter.vercel.app",
    "EID Digital Platform": "https://eid-special.vercel.app",
    "Code Mentor": "https://code-mentor.vercel.app"
  };
  
  return demoLinks[projectTitle] || "#";
}

function getGitHubLink(projectTitle: string): string {
  const githubLinks: { [key: string]: string } = {
    "Course Search Engine": "https://github.com/CodeVoyager007/Courses-Search-Engine",
    "Interactive Quiz App": "https://github.com/CodeVoyager007/Quiz-App",
    "Weather Widget": "https://github.com/CodeVoyager007/Weather-Widget-App",
    "GitHub Profile Viewer": "https://github.com/CodeVoyager007/Github-Profile-Search-App",
    "Secure Data Manager": "https://github.com/CodeVoyager007/secure-data-manager",
    "Syntax Crafter": "https://github.com/CodeVoyager007/syntax-crafter",
    "EID Digital Platform": "https://github.com/CodeVoyager007/EID_SPECIAL",
    "Code Mentor": "https://github.com/CodeVoyager007/code-mentor"
  };
  
  return githubLinks[projectTitle] || "https://github.com/CodeVoyager007";
}
