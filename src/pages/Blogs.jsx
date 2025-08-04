import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);

      const timeout = setTimeout(() => {
        setIsMouseMoving(false);
      }, 100);

      return () => clearTimeout(timeout);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  const blogPosts = [
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

  return (
    <div className="min-h-screen bg-base-100 pt-28 pb-24 px-6 sm:px-10 md:px-20 relative overflow-hidden">
      {/* Floating Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-15">
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
                (mousePosition.x - window.innerWidth / 2) * 0.005
              }px, ${(mousePosition.y - window.innerHeight / 2) * 0.005}px, 0)`,
              transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
            }}
          />
        ))}
      </div>

      {/* Custom Cursor */}
      {isMouseMoving && (
        <div
          className="fixed w-5 h-5 bg-primary rounded-full pointer-events-none z-30 blur-sm"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transform: hoveredPost ? "scale(1.8)" : "scale(1)",
            transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      )}

      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-base-content mb-6">
          Dev{" "}
          <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            Blogs
          </span>
        </h1>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed">
          Sharing my Gen-AI powered builds, MERN stack innovations, and lessons
          from building intelligent web applications with cutting-edge AI integration.
        </p>
      </motion.section>

      {/* Timeline Layout */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Timeline vertical line */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />

        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative mb-20 ${
              index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
            }`}
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-base-100 z-20 shadow-lg" />

            {/* Content block */}
            <div
              className={`relative z-10 bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-300 dark:border-base-600 cursor-pointer group hover:scale-[1.02] ${
                index % 2 === 0 ? "md:mr-12" : "md:ml-12"
              } ml-12 md:ml-0`}
            >
              <div className="p-8 md:p-10">

                {/* Title */}
                <header className="flex items-center gap-4 mb-6">
                  <div className="text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {post.image}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>
                </header>

                {/* Excerpt */}
                <p className="text-base-content/80 text-lg mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Full Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-base-content mb-3">
                    Project Overview
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {post.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-base-content mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20 hover:bg-secondary/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3 flex items-center gap-2">
                      <span className="text-red-500">⚡</span>
                      Key Challenges
                    </h3>
                    <ul className="space-y-2">
                      {post.challenges.map((challenge, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-base-content/70"
                        >
                          <span className="text-red-500 mt-1 text-sm">●</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3 flex items-center gap-2">
                      <span className="text-green-500">✨</span>
                      Achievements
                    </h3>
                    <ul className="space-y-2">
                      {post.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-base-content/70"
                        >
                          <span className="text-green-500 mt-1 text-sm">●</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link to='/projects'>
                <div className="flex justify-between items-center">
                  <button className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span>View Project</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Simple Disclaimer Section - No Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-24 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          {/* Divider Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-base-content">
            More Gen-AI Projects
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              {" "}
              Coming Soon!
            </span>
          </h2>

          <p className="text-base-content/70 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            I'm constantly exploring new frontiers in artificial intelligence and
            generative AI technologies. Stay tuned for more innovative AI-powered
            projects and detailed technical breakdowns of cutting-edge implementations!
          </p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-4xl animate-bounce">🚧</div>
            <div className="text-4xl animate-pulse">⚡</div>
            <div className="text-4xl animate-bounce delay-100">🔥</div>
          </div>

          <p className="text-base-content/50 text-sm">
            Follow my journey and projects for updates • Built with ❤️ by Keshav
          </p>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </motion.section>

      {/* Styles */}
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

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Blogs;
