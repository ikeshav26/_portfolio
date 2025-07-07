import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaUsers,
  FaUser,
  FaCode,
  FaRobot,
  FaBlog,
  FaLink,
  FaMedkit,
  FaFlask,
  FaDatabase,
  FaJs,
  FaBrain
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiJupyter, 
  SiStreamlit, 
  SiTailwindcss,
  SiOpenai 
} from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const containerRef = useRef(null);
  const mouseTimer = useRef(null);
  const rafId = useRef(null);
  const navigate = useNavigate();

  
  // Mouse tracking for smooth blob movement
  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 16;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      
      lastTime = now;
      setIsMouseMoving(true);

      if (mouseTimer.current) {
        clearTimeout(mouseTimer.current);
      }

      mouseTimer.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 500);

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseTimer.current) {
        clearTimeout(mouseTimer.current);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Floating background elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 200 + 100,
      duration: Math.random() * 6 + 8,
      delay: Math.random() * 2,
    }));
  }, []);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Fit-AI",
      description: "An intelligent health diagnostic system that analyzes symptoms and provides disease detection with detailed descriptions. Built with machine learning algorithms for accurate health predictions.",
      longDescription: "Fit-AI is a comprehensive health diagnostic platform that leverages machine learning to analyze user symptoms and provide accurate disease predictions. The system includes detailed disease descriptions, treatment recommendations, and health insights powered by advanced AI algorithms.",
      category: "ai",
      type: "Team Project",
      techStack: [
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },
        { name: "Flask", icon: <FaFlask color="#000000" /> },
        { name: "Streamlit", icon: <SiStreamlit color="#FF4B4B" /> }
      ],
      features: [
        "Symptom Analysis & Disease Detection",
        "ML-powered Health Predictions",
        "Detailed Disease Descriptions",
        "Interactive Health Dashboard",
        "Treatment Recommendations"
      ],
      github: "https://github.com/ikeshav26/disease-detector",
      live: "https://fit-ai.mannu.live",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      status: "Completed",
      teamSize: "6 Members"
    },
    {
      id: 2,
      title: "Bit-Blog",
      description: "A modern blogging platform built with MERN stack where users can create, explore, and manage their blogs. Features rich text editor, user authentication, and social interactions.",
      longDescription: "Bit-Blog is a full-featured blogging platform that empowers users to share their thoughts and stories. Built with the MERN stack, it offers a seamless writing experience with a rich text editor, user profiles, blog discovery, and engagement features like comments and likes.",
      category: "fullstack",
      type: "Personal Project",
      techStack: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
        { name: "Express", icon: <SiExpress color="#000000" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> }
      ],
      features: [
        "Rich Text Blog Editor",
        "User Authentication & Profiles",
        "Blog Discovery & Search",
        "Comments & Social Features",
        "Responsive Design"
      ],
      github: "https://github.com/ikeshav26/blog-app",
      live: "https://blog-app-nu-pink.vercel.app/",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      status: "Completed",
      teamSize: "Solo"
    },
    {
      id: 3,
      title: "URL Shortener",
      description: "A powerful URL shortening service built with MERN stack that allows users to create both custom and random short URLs with analytics and management features.",
      longDescription: "This URL shortener provides a comprehensive solution for link management with both custom and randomly generated short URLs. Features include click analytics, QR code generation, link expiration, and a user-friendly dashboard for managing all shortened links.",
      category: "fullstack",
      type: "Personal Project",
      techStack: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
        { name: "Express", icon: <SiExpress color="#000000" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> }
      ],
      features: [
        "Custom & Random Short URLs",
        "Click Analytics & Tracking",
        "QR Code Generation",
        "Link Management Dashboard",
        "Bulk URL Processing"
      ],
      github: "https://github.com/ikeshav26/url-shortener-frontend",
      live: "https://urlshortener.ikeshav.tech",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
      status: "Completed",
      teamSize: "Solo"
    },
    {
      id: 4,
      title: "AI Code Reviewer",
      description: "An intelligent code review system that analyzes JavaScript code uploads, detects errors, suggests improvements, and provides optimized code versions using AI.",
      longDescription: "AI Code Reviewer is an advanced code analysis tool that leverages artificial intelligence to review JavaScript code. It identifies bugs, security vulnerabilities, performance issues, and coding best practices while providing detailed suggestions and improved code versions.",
      category: "fullstack",
      type: "Personal Project",
      techStack: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
        { name: "Express", icon: <SiExpress color="#000000" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "OpenAI", icon: <SiOpenai color="#412991" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> }
      ],
      features: [
        "JavaScript Code Analysis",
        "Error Detection & Debugging",
        "Performance Optimization",
        "Best Practice Suggestions",
        "Improved Code Generation"
      ],
      github: "https://github.com/ikeshav26/ai-code-reviewer-frontend",
      live: "https://ai-code-reviewer-frontend-iota.vercel.app/",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      status: "Completed",
      teamSize: "Solo"
    }
  ];

  // Filter categories
  const filters = [
    { id: 'all', label: 'All Projects', icon: <FaCode /> },
    { id: 'fullstack', label: 'Full Stack', icon: <FaReact /> },
    { id: 'ai', label: 'AI/ML', icon: <FaBrain /> }
  ];

  // Filter projects
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getProjectIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'fit-ai': return <FaMedkit className="text-2xl" />;
      case 'bit-blog': return <FaBlog className="text-2xl" />;
      case 'url shortener': return <FaLink className="text-2xl" />;
      case 'ai code reviewer': return <FaRobot className="text-2xl" />;
      default: return <FaCode className="text-2xl" />;
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-base-100 pt-28 pb-24 px-6 sm:px-10 md:px-20 relative overflow-hidden"
    >
      {/* Floating background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
        {floatingElements.map((el) => (
          <div
            key={el.id}
            className="absolute rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 blur-xl"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: `${el.size}px`,
              height: `${el.size}px`,
              animation: `ultraSmoothFloat ${el.duration}s ease-in-out infinite`,
              animationDelay: `${el.delay}s`,
              transform: `translate3d(${
                (mousePosition.x - window.innerWidth / 2) * 0.008
              }px, ${(mousePosition.y - window.innerHeight / 2) * 0.008}px, 0)`,
              transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
            }}
          />
        ))}
      </div>

      {/* Interactive cursor */}
      {isMouseMoving && (
        <div
          className="fixed w-5 h-5 bg-primary/40 rounded-full pointer-events-none z-30 blur-sm"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transform: hoveredProject ? "scale(1.8)" : "scale(1)",
            transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto space-y-16">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-base-content">
            My{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Projects
            </span>
          </h1>
          <p className="text-xl text-base-content/80 leading-relaxed mb-8">
            Explore my collection of web applications, AI projects, and innovative solutions
            built with modern technologies and creative problem-solving.
          </p>
        </section>

        {/* Filter Tabs */}
        <section className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-base-200 text-base-content hover:bg-base-300"
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-300 dark:border-base-600 group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "slideInUp 0.6s ease-out forwards",
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white">
                    {getProjectIcon(project.title)}
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                    {project.type}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-300 border border-green-500/30">
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-base-content/60">
                    {project.teamSize === 'Solo' ? <FaUser /> : <FaUsers />}
                    <span className="text-sm">{project.teamSize}</span>
                  </div>
                </div>

                <p className="text-base-content/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-base-content/80 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-base-300 dark:bg-base-600 rounded-full px-3 py-1 text-sm"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-base-content/80 mb-3">Key Features</h4>
                  <ul className="text-sm text-base-content/70 space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link
                    to={project.github}
                    className="flex items-center gap-2 bg-base-300 dark:bg-base-600 hover:bg-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <FaGithub />
                    GitHub
                  </Link>
                  <Link
                    to={project.live}
                    className="flex items-center gap-2 bg-primary text-white hover:bg-primary/80 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl p-12 border shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-base-content">
              Want to See More?
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {" "}
                Let's Connect!
              </span>
            </h2>
            <p className="text-base-content/70 mb-8 text-lg">
              I'm always working on new projects and exploring innovative technologies.
              Check out my GitHub for more repositories and ongoing work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="https://github.com/ikeshav26">
              <button
                className="btn btn-primary rounded-full px-8 py-3 text-lg font-semibold hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaGithub className="mr-2" />
                View GitHub
              </button>
              </Link>
              <Link to='/contact'>
              <button
                className="btn btn-outline rounded-full px-8 py-3 text-lg font-semibold hover:scale-110 hover:-rotate-2 transition-all duration-300"
              >
                Get In Touch 💬
              </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ultraSmoothFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) scale(1.02) rotate(1deg);
          }
          50% {
            transform: translateY(-15px) scale(1.05) rotate(0deg);
          }
          75% {
            transform: translateY(-6px) scale(1.02) rotate(-1deg);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .hover\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Projects;
