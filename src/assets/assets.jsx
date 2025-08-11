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