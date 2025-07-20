import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ayesha",
  lastName: "Mughal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Enthusiast & Developer",
  avatar: "/images/avatar.png",
  email: "ayeshamughal2162@gmail.com",
  location: "Asia/Karachi",
  languages: ["English", "Urdu"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about AI, modern development practices, and share insights about my journey in tech. 
      Follow along as I explore the intersection of logic and creativity.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/CodeVoyager007",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ayesha-mughal-260264342",
  },
  {
    name: "Twitter",
    icon: "x",
    link: "https://x.com/Ayesha_Mughal21",
  },
  {
    name: "Hashnode",
    icon: "globe",
    link: "https://hashnode.com/@mughalsyntax",
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@ayeshamughal21",
  },
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/?view=cm&to=ayeshamughal2162@gmail.com",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building experiences at the intersection of logic and creativity</>,
  featured: {
    display: true,
    title: <>Recent focus: <strong className="ml-4">Agentic AI</strong></>,
    href: "/work/exploring-agentic-ai",
  },
  subline: (
    <>
      I'm Ayesha, a <b>16-year-old</b> developer passionate about AI and innovative technology.
      <br /> With 27+ certifications, I'm constantly learning and building new experiences.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A passionate and persistent learner standing at the intersection of logic and creativity. 
        Currently delving into the intricacies of Agentic AI while maintaining a strong foundation 
        in modern development practices. With a flair for interaction, minimalism, and dark design, 
        I don't just build code — I build experiences.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "GAO Tech",
        timeframe: "2023",
        role: "Assistant Squad Leader",
        achievements: [
          <>
            Started as an intern and got promoted to Assistant Squad Leader within 21 days,
            demonstrating leadership and technical capabilities.
          </>,
          <>
            Contributed to various projects during the 3-month internship, gaining hands-on
            experience in real-world development scenarios.
          </>,
        ],
        images: [],
      },
      {
        company: "In Plain English",
        timeframe: "July 2025 - Present",
        role: "Tech Blog Writer",
        achievements: [
          <>Writing in-depth, accessible tech blogs for a global audience.</>,
          <>Contributed articles on Python, JavaScript, and AI topics.</>,
          <>Joined the team as a writer on July 14, 2025.</>,
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Higher Secondary Education",
        description: <>Currently in HSC Part II (Pre-Engineering) | HSC Part I completed with strong academic performance</>,
      },
      {
        name: "Secondary School Certificate",
        description: <>Completed SSC with Higher A Grade | Accelerated education - completed at age 13</>,
      },
      {
        name: "GIAIC",
        description: <>Currently in Quarter 4 of AI, Web3 & Metaverse Development Course (Started Feb 2023)</>,
      },
      {
        name: "Harvard CS50",
        description: <>
          - CS50's Introduction to AI with Python Certification<br/>
          - CS50x Puzzle Day Certificate with perfect 9/9 score<br/>
          - Demonstrated advanced problem-solving capabilities
        </>,
      },
      {
        name: "Professional Development",
        description: <>
          - GAOTek: 3-month internship with promotion to Assistant Squad Leader<br/>
          - freeCodeCamp: Responsive Web Design Certification<br/>
          - Great Learning: JavaScript and Graphic Design with Photoshop Certifications
        </>,
      },
      {
        name: "Additional Achievements",
        description: <>
          - School's primary speaker for events and ceremonies<br/>
          - Multiple academic competition participations<br/>
          - Perfect attendance record with consistent academic excellence
        </>,
      }
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Proficient in HTML, CSS, JavaScript, TypeScript, Python, C/C++</>,
        images: [],
      },
      {
        title: "Frameworks & Tools",
        description: <>Next.js, Node.js, Tailwind CSS, Framer Motion, Streamlit, shadcn, Git & GitHub</>,
        images: [],
      },
      {
        title: "AI & Advanced Tech",
        description: <>Currently exploring Agentic AI, LiteLLM, OpenRouter, Swarm & Agents SDK, and Evaluator-Optimizer Patterns</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: "Thoughts on development, AI, and technology",
  external: [
    {
      platform: "Hashnode",
      url: "https://hashnode.com/@mughalsyntax",
      description: "Technical articles and development insights"
    },
    {
      platform: "Medium",
      url: "https://medium.com/@ayeshamughal21",
      description: "In-depth articles about AI and programming"
    }
  ],
  tableOfContent: {
    display: true,
    subItems: true,
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Development projects by ${person.name}`,
  projects: [
    {
      slug: "course-search-engine",
      title: "Course Search Engine",
      summary: "A comprehensive search engine for programming courses and tutorials, featuring content from Harvard CS50, FreeCodeCamp, and other platforms.",
      images: [
        "/images/projects/course-search-engine.png",
        "/images/projects/course-search-engine2.png",
        "/images/projects/course-search-engine3.png"
      ],
      link: "https://courses-search-engine-by-ayesha-mughal.vercel.app/",
      repo: "https://github.com/CodeVoyager007/courses-search-engine",
      publishedAt: "2024-03-10",
    },
    {
      slug: "quiz-app",
      title: "Interactive Quiz App",
      summary: "A dynamic quiz application with multiple categories including General Knowledge, Computers, Sports, Geography, History, and Science.",
      images: [
        "/images/projects/quiz-app1.png",
        "/images/projects/quiz-app2.png",
        "/images/projects/quiz-app-3.png"
      ],
      link: "https://quiz-app-blue-seven.vercel.app/",
      repo: "https://github.com/CodeVoyager007/quiz-app",
      publishedAt: "2024-03-09",
    },
    {
      slug: "weather-widget",
      title: "Weather Widget",
      summary: "A sleek weather application providing real-time weather information with a clean, minimalist interface.",
      images: [
        "/images/projects/weather-widget1.png",
        "/images/projects/weather-widget2.png",
        "/images/projects/weather-widget3.png"
      ],
      link: "https://weather-widget-app-alpha.vercel.app/",
      repo: "https://github.com/CodeVoyager007/weather-widget",
      publishedAt: "2024-03-08",
    },
    {
      slug: "github-profile-viewer",
      title: "GitHub Profile Viewer",
      summary: "An elegant GitHub profile search tool that displays user information, repositories, and statistics.",
      images: [
        "/images/projects/github-profile-viewer.png",
        "/images/projects/github-profile-viewer2.png",
        "/images/projects/github-profile-viewer3.png"
      ],
      link: "https://github-profile-search-app-sage.vercel.app/",
      repo: "https://github.com/CodeVoyager007/github-profile-search",
      publishedAt: "2024-03-07",
    },
    {
      slug: "ai-blog-generator",
      title: "AI Blog Generator",
      summary: "An AI-powered blog content generator using Streamlit and OpenAI's GPT model.",
      images: [
        "/images/projects/syntax-crafter1.png",
        "/images/projects/syntax-crafter2.png",
        "/images/projects/syntax-crafter3.png"
      ],
      link: "https://blog-generator-by-ayesha-mughal.streamlit.app/",
      repo: "https://github.com/CodeVoyager007/blog-generator",
      publishedAt: "2024-03-06",
    },
    {
      slug: "eid-greetings",
      title: "Eid Greetings Generator",
      summary: "A creative Eid greeting card generator that creates personalized festive messages.",
      images: [
        "/images/projects/eid1.png",
        "/images/projects/eid2.png",
        "/images/projects/eid3.png"
      ],
      link: "https://eid-greetings-by-ayesha-mughal.streamlit.app/",
      repo: "https://github.com/CodeVoyager007/eid-greetings",
      publishedAt: "2024-03-05",
    },
    {
      slug: "codementor-ai",
      title: "CodeMentor AI",
      summary: "An AI-powered coding assistant that helps developers with code explanations and debugging.",
      images: [
        "/images/projects/code-mentor.png",
        "/images/projects/code-mentor2.png",
        "/images/projects/code-mentor3.png"
      ],
      link: "https://codementor-by-ayesha-mughal.streamlit.app/",
      repo: "https://github.com/CodeVoyager007/codementor",
      publishedAt: "2024-03-04",
    },
    {
      slug: "secure-data-encryption",
      title: "Secure Data Encryption",
      summary: "A Python-based tool for secure data encryption and decryption with multiple algorithms.",
      images: [
        "/images/projects/secure-data.png",
        "/images/projects/secure-data2.png",
        "/images/projects/secure-data3.png"
      ],
      link: "https://pythonprojects-secure-data-encryptions.streamlit.app/",
      repo: "https://github.com/CodeVoyager007/secure-data-encryption",
      publishedAt: "2024-03-03",
    }
  ]
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const display = {
  themeSwitcher: true,
  location: true,
  time: true,
  calendar: true,
  socials: true
};

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/contact": true,
  "/journey": true
};

const journey = {
  path: "/journey",
  label: "Journey",
  title: `Journey – ${person.name}`,
  description: "A timeline of my learning and achievements.",
  milestones: [
    {
      date: "2023 - Present",
      title: "GIAIC",
      description: "Currently in Quarter 4 of AI, Web3 & Metaverse Development Course (Started Feb 2023)",
      achievements: [
        "Progressing through AI, Web3 & Metaverse Development Course",
        "Quarter 4 completion in progress",
        "Learning advanced AI and Web3 technologies"
      ],
      skills: ["AI", "Web3", "Metaverse Development", "Blockchain"],
      type: "learning"
    },
    {
      date: "2023 - Present",
      title: "Higher Secondary Education",
      description: "Currently in HSC Part II (Computer Science/General Science) | HSC Part I completed with strong academic performance",
      achievements: [
        "Strong academic performance in HSC Part I",
        "Currently pursuing Computer Science track",
        "Focusing on programming and computer fundamentals",
        "HSC Part II given, waiting for results"
      ],
      skills: ["Computer Science", "Programming", "Mathematics", "Physics"],
      type: "learning"
    },
    {
      date: "July 2025 - Present",
      title: "In Plain English – Tech Blog Writer",
      description: "Joined In Plain English as a writer about tech blogs, contributing articles on Python, JavaScript, and AI topics for a global audience.",
      achievements: [
        "Joined the team as a writer on July 14, 2025",
        "Writing in-depth, accessible tech blogs for a global audience",
        "Contributed articles on Python, JavaScript, and AI topics"
      ],
      skills: ["Writing", "Technical Communication", "Python", "JavaScript", "AI"],
      type: "work"
    },
    {
      date: "2024",
      title: "Harvard CS50",
      description: "Completed multiple CS50 certifications and achievements",
      achievements: [
        "CS50's Introduction to AI with Python Certification",
        "CS50x Puzzle Day Certificate with perfect 9/9 score",
        "Demonstrated advanced problem-solving capabilities"
      ],
      skills: ["Python", "AI", "Problem Solving"],
      type: "achievement"
    },
    {
      date: "2024",
      title: "Professional Development",
      description: "Gained professional experience and certifications",
      achievements: [
        "GAOTek: 3-month internship with promotion to Assistant Squad Leader",
        "freeCodeCamp: Responsive Web Design Certification",
        "Great Learning: JavaScript and Graphic Design with Photoshop Certifications"
      ],
      skills: ["Leadership", "Web Design", "JavaScript", "Graphic Design"],
      type: "foundation"
    },
    {
      date: "2022",
      title: "Secondary School Certificate",
      description: "Completed SSC with Higher A Grade in Bio Science | Accelerated education - completed at age 13",
      achievements: [
        "Completed SSC with Higher A Grade",
        "Specialized in Bio Science",
        "Accelerated education - completed at age 13"
      ],
      skills: ["Biology", "Chemistry", "Academic Excellence", "Time Management"],
      type: "achievement"
    },
    {
      date: "2022-2023",
      title: "Additional Achievements",
      description: "Recognition for academic and extracurricular excellence",
      achievements: [
        "School's primary speaker for events and ceremonies",
        "Multiple academic competition participations",
        "Perfect attendance record with consistent academic excellence"
      ],
      skills: ["Public Speaking", "Leadership", "Academic Excellence"],
      type: "achievement"
    }
  ]
};

export { person, social, newsletter, home, about, blog, work, gallery, display, routes, journey };
