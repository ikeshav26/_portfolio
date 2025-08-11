import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaCode,
  FaRocket,
  FaHeart,
  FaFlask,
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaHandshake
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiMongodb,
  SiTailwindcss,
  SiJupyter,
  SiPostman,
  SiOpenai,
  SiMysql,
  SiExpress,
  SiGooglecloud,
  SiStreamlit
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";



//about-page 

export const techCategories = [
    {
      title: "Web Development",
      color: "from-blue-500 to-purple-500",
      technologies: [
        {
          name: "React.js",
          icon: <FaReact color="#61DAFB" />,
          description: "Frontend library",
          level: 85,
        },
        {
          name: "Next.js",
          icon: <RiNextjsFill className="text-base-content" />,
          description: "Frontend framework",
          level: 85,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs color="#3C873A" />,
          description: "Backend runtime",
          level: 80,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-base-content" />,
          description: "Node.js framework",
          level: 75,
        },
        {
          name: "JavaScript",
          icon: <FaJs color="#F7DF1E" />,
          description: "Core language",
          level: 90,
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss color="#38BDF8" />,
          description: "Utility CSS framework",
          level: 85,
        },
      ],
    },
    {
      title: "Data Structures & Algorithms",
      color: "from-indigo-500 to-purple-600",
      technologies: [
        {
          name: "Arrays & Strings",
          icon: <FaCode color="#667eea" />,
          description: "Linear data structures",
          level: 75,
        },
        // {
        //   name: "Trees & Graphs",
        //   icon: <FaCode color="#764ba2" />,
        //   description: "Hierarchical structures",
        //   level: 65,
        // },
        {
          name: "Dynamic Programming",
          icon: <FaCode color="#f093fb" />,
          description: "Optimization techniques",
          level: 60,
        },
        {
          name: "Sorting & Searching",
          icon: <FaCode color="#4facfe" />,
          description: "Algorithmic fundamentals",
          level: 80,
        },
      ],
    },
    {
      title: "Tools & Platforms",
      color: "from-green-500 to-teal-500",
      technologies: [
        {
          name: "VS Code",
          icon: <VscVscode color="#007ACC" />,
          description: "Code editor",
          level: 95,
        },
        {
          name: "IntelliJ IDEA",
          icon: <FaCode className="text-base-content" />,
          description: "Java IDE",
          level: 75,
        },
        {
          name: "Postman",
          icon: <SiPostman color="#FF6C37" />,
          description: "API tester",
          level: 80,
        },
        {
          name: "OpenAI",
          icon: <SiOpenai color="#412991" />,
          description: "AI tools",
          level: 70,
        },
        {
          name: "Git",
          icon: <FaGitAlt color="#F1502F" />,
          description: "Version control",
          level: 85,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-base-content" />,
          description: "Code repo",
          level: 90,
        },
      ],
    },
    {
      title: "Database & Storage",
      color: "from-orange-500 to-red-500",
      technologies: [
        {
          name: "MongoDB",
          icon: <SiMongodb color="#47A248" />,
          description: "NoSQL DB",
          level: 80,
        },
        {
          name: "MySQL",
          icon: <SiMysql color="#4479A1" />,
          description: "SQL DB",
          level: 75,
        },
      ],
    },
    {
      title: "Others",
      color: "from-purple-500 to-pink-500",
      technologies: [
        {
          name: "Python",
          icon: <FaPython color="#3776AB" />,
          description: "General-purpose language",
          level: 85,
        },
        {
          name: "Java",
          icon: <FaCode color="#f89820" />,
          description: "Object-oriented programming",
          level: 70,
        },
        {
          name: "Jupyter",
          icon: <SiJupyter color="#F37626" />,
          description: "Notebook IDE",
          level: 80,
        },
      ],
    },
  ];

export const stats = [
    {
      icon: <FaCode />,
      value: "1+",
      label: "Years Learning",
      color: "text-blue-500",
    },
    {
      icon: <FaRocket />,
      value: "5+",
      label: "Projects Built",
      color: "text-green-500",
    },
    {
      icon: <FaHeart />,
      value: "17+",
      label: "Technologies Learning",
      color: "text-red-500",
    },
  ];
  
export const certificates = [
    {
      id: 1,
      title: "Internship Certificate",
      organization: "CodSoft",
      description: "Professional internship experience showcasing practical skills in real-world projects and collaborative development.",
      icon: "🏢",
      gradient: "from-blue-500 to-purple-500",
      pdfUrl: "/internship.pdf",
      downloadName: "Keshav_Internship_Certificate.pdf",
      hoverRotation: "-rotate-1"
    },
    {
      id: 2,
      title: "MERN Stack Development",
      organization: "Udemy",
      description: "Certification covering full-stack web development with MongoDB, Express.js, React.js, and Node.js technologies.",
      icon: "⚡",
      gradient: "from-green-500 to-teal-500",
      pdfUrl: "/mernstack.pdf",
      downloadName: "Keshav_MERN_Stack_Certificate.pdf",
      hoverRotation: "-rotate-1"
    },
    {
      id: 3,
      title: "Git & Version Control",
      organization: "Udemy",
      description: "Course certification with comprehensive understanding of Git workflows, branching strategies, and collaborative development practices.",
      icon: "🔧",
      gradient: "from-orange-500 to-red-500",
      pdfUrl: "/git.pdf",
      downloadName: "Keshav_Git_Certificate.pdf",
      hoverRotation: "rotate-1"
    }
  ];  

export const reviews = [
  {
    id: 1,
    name: "Krish Puri",
    role: "Frontend Developer",
    avatar: "👩‍💻",
    rating: 5,
    review: "Keshav's React skills are impressive! His clean code and attention to detail make him a pleasure to work with."
  },
  {
    id: 2,
    name: "Manpreet Singh",
    role: "Full Stack Developer",
    avatar: "👨‍💼",
    rating: 5,
    review: "Excellent problem-solving abilities and quick learner. Keshav delivered our project ahead of schedule."
  },
  {
    id: 3,
    name: "Bhavuk Ahuja",
    role: "UX Designer",
    avatar: "👩‍🎨",
    rating: 5,
    review: "Great collaboration skills! Keshav perfectly implemented our design vision with smooth animations."
  },
  {
    id: 4,
    name: "Gurman Singh Dhami",
    role: "Mern Stack Developer",
    avatar: "👨‍💻",
    rating: 5,
    review: "Reliable and communicative. Keshav's full-stack expertise helped us build a robust application."
  },
  {
    id: 5,
    name: "Rutansh Chawla",
    role: "Backend Developer",
    avatar: "👩‍💻",
    rating: 5,
    review: "Impressed by Keshav's Node.js and MongoDB skills. His API development is clean and efficient."
  }
];



//project-page

export const projects = [
    {
      id: 1,
      title: "Fit-AI",
      description:
        "An intelligent health diagnostic system that analyzes symptoms and provides disease detection with detailed descriptions. Built with machine learning algorithms for accurate health predictions.",
      longDescription:
        "Fit-AI is a comprehensive health diagnostic platform that leverages machine learning to analyze user symptoms and provide accurate disease predictions. The system includes detailed disease descriptions, treatment recommendations, and health insights powered by advanced AI algorithms.",
      category: "ai",
      type: "Team Project",
      techStack: [
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },
        {
          name: "Flask",
          icon: <FaFlask className="color-base-content" />,
        },
        { name: "Streamlit", icon: <SiStreamlit color="#FF4B4B" /> },
      ],
      features: [
        "Symptom Analysis & Disease Detection",
        "ML-powered Health Predictions",
        "Detailed Disease Descriptions",
        "Interactive Health Dashboard",
        "Treatment Recommendations",
      ],
      github: "https://github.com/ikeshav26/disease-detector",
      live: "https://fit-ai.mannu.live",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      status: "Completed",
      teamSize: "6 Members",
    },
    {
      id: 2,
      title: "ElevateCV-AI",
      description:
        "An AI-powered resume and cover letter generator with interview preparation features built using modern full-stack technologies.",
      longDescription:
        "ElevateCV-AI is a complete career toolkit powered by artificial intelligence. Users can create resumes and cover letters with the help of LLMs, explore publicly shared documents, and prepare for interviews through AI-generated questions. Built with a MERN stack and integrated with powerful AI APIs for a seamless experience.",
      category: "fullstack",
      type: "Personal Project",
      techStack: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
        {
          name: "Express",
          icon: <SiExpress className="color-base-content" />,
        },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Google Gemini", icon: <SiGooglecloud color="#4285F4" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
      ],
      features: [
        "AI Resume Generation with Canvas",
        "AI Cover Letter Writer",
        "OTP-based Auth with Password Reset",
        "Explore Public Resumes & Letters",
        "Interview Preparation with AI",
        "Responsive, Theme-Aware UI",
      ],
      github: "https://github.com/ikeshav26/elevatecv-ai",
      live: "https://elevatecv-ai.ikeshav.tech",
      image:"/elevateCV.png",
      status: "Completed",
      teamSize: "Solo",
    },
    {
      id: 3,
      title: "Bit-Blog",
      description:
        "A modern blogging platform built with MERN stack where users can create, explore, and manage their blogs. Features rich text editor, user authentication, and social interactions.",
      longDescription:
        "Bit-Blog is a full-featured blogging platform that empowers users to share their thoughts and stories. Built with the MERN stack, it offers a seamless writing experience with a rich text editor, user profiles, blog discovery, and engagement features like comments and likes.",
      category: "fullstack",
      type: "Personal Project",
      techStack: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
        {
          name: "Express",
          icon: <SiExpress className="color-base-content" />,
        },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
      ],
      features: [
        "Rich Text Blog Editor",
        "User Authentication & Profiles",
        "Blog Discovery & Search",
        "Comments & Social Features",
        "Responsive Design",
      ],
      github: "https://github.com/ikeshav26/blog-app",
      live: "https://bitblog.ikeshav.tech",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      status: "Completed",
      teamSize: "Solo",
    },
    {
      id: 4,
      title: "InteriorAI-Interior Designer",
      description:
        "InteriorAI lets users create interior designs from text prompts and explore images shared by others. Enter your design idea and get realistic AI-generated visuals for inspiration or planning.",
      longDescription:
        "InteriorAI is an AI-powered web app that lets users generate interior design images from text prompts describing their ideal style, colors, or room type. Users simply enter their design ideas and receive realistic, AI-generated visuals matching their vision. They can also browse an Explore page to discover designs shared by others for inspiration. It’s a creative tool for homeowners, designers, and anyone imagining new spaces.",
      category: "fullstack",
      type: "Personal Project",
      techStack: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
        {
          name: "Express",
          icon: <SiExpress className="color-base-content" />,
        },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
      ],
      features: [
        "Text-to-Image Interior Design",
        "Explore Shared Designs",
        "User-Friendly Interface",
        "Responsive Design",
        "Realistic AI-Generated Visuals",
      ],
      github: "https://github.com/ikeshav26/ai-interior-design-generator",
      live: "https://designer.ikeshav.tech",
      image: "/InteriorAi.png",
      status: "Completed",
      teamSize: "Solo",
    },
    
  ];


  //blog-page

export  const blogPosts = [
    {
  id: 1,
  title: "ElevateCV-AI: AI-Powered Resume, Letter & Interview Generator",
  excerpt:
    "A revolutionary Gen-AI platform that transforms career preparation with intelligent resume generation, cover letter creation, and AI-driven interview coaching using Google Gemini API.",
  fullDescription:
    "ElevateCV-AI represents the future of career preparation through artificial intelligence. This comprehensive full-stack web application leverages the power of Google Gemini API to generate professional resumes, craft personalized cover letters, and provide dynamic interview preparation. Built with the MERN stack and enhanced with Tailwind CSS, it seamlessly integrates Gen-AI capabilities with canvas APIs for real-time resume rendering. The platform features secure OTP-based authentication, intelligent content generation, resume/letter visibility controls, a public exploration interface, and AI-powered interview preparation with dynamic question generation. By utilizing Large Language Models and premium AI APIs, the application delivers unprecedented accuracy in career document creation and interview coaching, making it an essential tool for modern job seekers.",
  date: "2025-07-18",
  readTime: "10 min read",
  image: "🤖",
  tags: [
    "Gen-AI",
    "Google Gemini",
    "Resume AI",
    "Interview Coaching",
    "MERN Stack",
    "LLM Integration",
  ],
  techStack: [
    "React",
    "Node.js", 
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Google Gemini API",
    "Canvas API",
    "JWT Auth",
  ],
  challenges: [
    "AI prompt optimization",
    "Canvas rendering with AI data",
    "LLM response consistency",
    "Real-time AI generation",
  ],
  achievements: [
    "Intelligent resume generation",
    "AI-powered interview prep",
    "Seamless Gen-AI integration",
    "Professional document creation",
  ],
},{
  id: 2,
  title: "Interior-AI: Revolutionary AI Interior Design Visualizer",
  excerpt:
    "Transform any space instantly with Gen-AI technology—an intelligent app that creates stunning room designs from natural language prompts using advanced AI models.",
  fullDescription:
    "Interior-AI showcases the transformative power of generative artificial intelligence in interior design. This innovative web application utilizes state-of-the-art AI models through the Replicate API to reimagine interior spaces based on natural language descriptions. Built with React and Node.js, the platform allows users to input room descriptions and select design themes, which are then processed by sophisticated AI algorithms to generate photorealistic room transformations. The application demonstrates advanced AI integration with smooth user experiences, featuring real-time image processing, secure file handling, and intelligent design suggestions. This project highlights the practical applications of Gen-AI in creative industries, proving how artificial intelligence can democratize professional interior design.",
  date: "2025-05-02",
  readTime: "7 min read",
  image: "🎨",
  tags: [
    "Gen-AI",
    "Computer Vision",
    "Replicate API",
    "AI Design",
    "Creative AI",
    "Image Generation",
  ],
  techStack: [
    "React",
    "Node.js",
    "Tailwind CSS",
    "Replicate AI API",
    "Cloudinary",
    "AI Models",
  ],
  challenges: [
    "AI model selection",
    "Prompt engineering optimization",
    "Real-time AI processing",
    "AI-generated image quality",
  ],
  achievements: [
    "Photorealistic AI transformations",
    "Natural language processing",
    "Advanced AI model integration",
    "Intelligent design automation",
  ],
},{
      id: 3,
      title: "BitBlog: A Full-Stack Blog Platform with Auth & Admin Panel",
      excerpt:
        "A powerful MERN-based blog system with rich text editing, user roles, JWT auth, and custom admin dashboard.",
      fullDescription:
        "BitBlog is a complete blogging platform I built using the MERN stack. It features user registration/login with secure JWT authentication, a rich text editor for writing articles, and a role-based admin panel for managing posts and users. I focused on building RESTful APIs, MongoDB schema design, and clean React UI with conditional rendering for admin vs normal users. Deployed on Vercel and Render, BitBlog also includes responsive design and optimized performance.",
      date: "2024-12-10",
      readTime: "10 min read",
      image: "📝",
      tags: ["MERN", "Authentication", "Blog System", "JWT"],
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      challenges: [
        "Role-based access control",
        "Token security implementation",
        "Post management UI",
      ],
      achievements: [
        "Admin dashboard",
        "Rich-text editor",
        "JWT authentication",
      ],
    },
    {
      id: 4,
      title: "FitAI: Building an Intelligent AI-Powered Health Assistant",
      excerpt:
        "How our team created a comprehensive AI health companion using React, Flask, and machine learning to provide personalized health insights and predictions.",
      fullDescription:
        "FitAI represents the convergence of artificial intelligence and healthcare technology. This sophisticated full-stack health assistant was developed as a collaborative team project, utilizing React for an intuitive frontend and Flask for a robust backend infrastructure. The application integrates advanced machine learning algorithms, specifically a RandomForestClassifier model, to analyze user health metrics and provide intelligent risk assessments. Users can input comprehensive health data including age, BMI, heart rate, and lifestyle factors to receive AI-generated predictions and visual health insights. The project features seamless integration with the Gemini API for enhanced AI-powered health recommendations, demonstrating how artificial intelligence can be applied to personal healthcare. Our team successfully deployed this intelligent health platform using modern cloud technologies, showcasing the practical applications of AI in improving personal health management.",
      date: "2024-11-20",
      readTime: "9 min read",
      image: "🧠",
      tags: [
        "AI Healthcare",
        "Machine Learning",
        "Gemini API",
        "Health Tech",
        "Predictive AI",
        "Team Project",
      ],
      techStack: [
        "React",
        "Flask",
        "Python",
        "RandomForest ML",
        "Gemini API",
        "Streamlit",
        "AI Models",
      ],
      challenges: [
        "AI model accuracy optimization",
        "Health data processing",
        "Real-time AI predictions",
        "Team AI integration workflow",
      ],
      achievements: [
        "Intelligent health risk prediction",
        "AI-powered recommendations",
        "Advanced ML model deployment",
        "Collaborative AI development",
      ],
    }
  ];


  //contact-page

export    const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: import.meta.env.VITE_EMAIL_TO || "keshavgilhotra4@gmail.com",
      link: `mailto:${import.meta.env.VITE_EMAIL_TO || "keshavgilhotra4@gmail.com"}`,
      color: "text-blue-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "India",
      link: "#",
      color: "text-red-500"
    }
  ];

 
export  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/ikeshav26",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/keshav-gilhotra-615654372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://x.com/KeshavGilh5995",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/keshav_gilhotra_/?hl=en",
      color: "hover:text-pink-500"
    }
  ];


export   const collaborationTypes = [
    {
      icon: <FaRocket />,
      title: "Full Stack Projects",
      description: "MERN stack web applications and modern web solutions"
    },
    {
      icon: <FaHandshake />,
      title: "Open Source",
      description: "Contributing to open source projects and community initiatives"
    },
    {
      icon: <FaHeart />,
      title: "Learning Together",
      description: "Knowledge sharing and collaborative learning experiences"
    }
  ];