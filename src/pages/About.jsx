import React, { useMemo, useState, useRef, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard"; 

const About = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const containerRef = useRef(null);
  const mouseTimer = useRef(null);
  const rafId = useRef(null);
  const navigate = useNavigate();


  const words = ["Developer", "Student", "Learner", "Creator", "Innovator"];


  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (isTyping) {
      if (typedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        }, 80); // Reduced from 100ms to 80ms
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 800); // Reduced from 1000ms to 800ms
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 40); // Reduced from 50ms to 40ms
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentWordIndex, words]);

  // Ultra-smooth mouse tracking with optimized performance
  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 16; // 60fps for ultra-smooth movement

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
      }, 500); // Reduced from 1000ms to 500ms

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

  // Floating elements with reduced delays for faster animation
  const floatingElements = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 200 + 100,
      duration: Math.random() * 6 + 8, // Reduced from 10+15 to 6+8 for faster movement
      delay: Math.random() * 2, // Reduced from 5 to 2 for quicker start
    }));
  }, []);

  const techCategories = [
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
          name: "Jupyter",
          icon: <SiJupyter color="#F37626" />,
          description: "Notebook IDE",
          level: 80,
        },
      ],
    },
  ];

  const stats = [
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
      value: "∞",
      label: "Passion Level",
      color: "text-red-500",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-base-100 pt-28 pb-24 px-6 sm:px-10 md:px-20 relative overflow-hidden"
    >
      {/* Ultra-smooth animated background blobs */}
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

      {/* Responsive interactive cursor */}
      {isMouseMoving && (
        <div
          className="fixed w-5 h-5 bg-primary rounded-full pointer-events-none z-30 blur-sm"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transform: hoveredTech ? "scale(1.8)" : "scale(1)",
            transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto space-y-24">
        {/* Hero Section with Typing Animation */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-base-content">
            About{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Me
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-primary mb-8 h-12">
            I'm a {typedText}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-base-content/80 text-lg leading-relaxed transform hover:scale-105 transition-transform duration-300">
            Hey! I'm <strong className="text-primary">Keshav</strong>, a
            3rd-semester B.Tech student and passionate MERN stack developer. I
            love crafting web apps, exploring new tech, and bringing ideas to
            life through code.
          </p>

          {/* Interactive Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-2xl p-6 border border-base-300 dark:border-base-600 hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div
                  className={`text-2xl mb-2 ${stat.color} group-hover:scale-125 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <p className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-sm text-base-content/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Technology Categories */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-base-content mb-8">
            My Tech Stack
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-base-200 text-base-content hover:bg-base-300"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Content with reduced animation delay */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {techCategories[activeCategory].technologies.map((tech, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-2xl p-6 w-full text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-base-300 dark:border-base-600 cursor-pointer group hover:scale-110 hover:-rotate-2"
                onMouseEnter={() => setHoveredTech(`${activeCategory}-${i}`)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{
                  animationDelay: `${i * 0.05}s`, // Reduced from 0.1s to 0.05s
                  animation: "slideInUp 0.4s ease-out forwards", // Reduced from 0.6s to 0.4s
                }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-base-content mb-2 group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-sm text-base-content/60 mb-4">
                  {tech.description}
                </p>

                {/* Skill Level Progress Bar with faster animation */}
                <div className="w-full bg-base-300 rounded-full h-2 mb-2">
                  <div
                    className={`bg-gradient-to-r ${techCategories[activeCategory].color} h-2 rounded-full transition-all duration-600 ease-out`}
                    style={{
                      width:
                        hoveredTech === `${activeCategory}-${i}`
                          ? `${tech.level}%`
                          : "0%",
                    }}
                  />
                </div>
                <span className="text-xs text-base-content/50">
                  {tech.level}% proficiency
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Animated Reviews Section - Responsive with Enhanced Fade */}
        <section className="relative overflow-hidden py-14">
          <h2 className="text-4xl font-bold text-center text-base-content mb-16">
            What People Say
          </h2>

          {/* Desktop and Tablet View (2 columns) */}
          <div className="hidden md:flex gap-8 h-96 relative">
            {/* Left Column - Reviews going up */}
            <div className="flex-1 relative overflow-hidden rounded-2xl">
              <div className="animate-scroll-up space-y-6">
                {/* First set of reviews */}
                <ReviewCard
                  name="Sarah Johnson"
                  role="Frontend Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Keshav's React skills are impressive! His clean code and attention to detail make him a pleasure to work with."
                />
                <ReviewCard
                  name="Mike Chen"
                  role="Tech Lead"
                  avatar="👨‍💼"
                  rating={5}
                  review="Excellent problem-solving abilities and quick learner. Keshav delivered our project ahead of schedule."
                />
                <ReviewCard
                  name="Emma Davis"
                  role="UX Designer"
                  avatar="👩‍🎨"
                  rating={5}
                  review="Great collaboration skills! Keshav perfectly implemented our design vision with smooth animations."
                />
                <ReviewCard
                  name="Alex Rodriguez"
                  role="Project Manager"
                  avatar="👨‍💻"
                  rating={5}
                  review="Reliable and communicative. Keshav's full-stack expertise helped us build a robust application."
                />
                <ReviewCard
                  name="Lisa Wang"
                  role="Senior Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Impressed by Keshav's Node.js and MongoDB skills. His API development is clean and efficient."
                />

                {/* Duplicate set for seamless loop */}
                <ReviewCard
                  name="Sarah Johnson"
                  role="Frontend Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Keshav's React skills are impressive! His clean code and attention to detail make him a pleasure to work with."
                />
                <ReviewCard
                  name="Mike Chen"
                  role="Tech Lead"
                  avatar="👨‍💼"
                  rating={5}
                  review="Excellent problem-solving abilities and quick learner. Keshav delivered our project ahead of schedule."
                />
                <ReviewCard
                  name="Emma Davis"
                  role="UX Designer"
                  avatar="👩‍🎨"
                  rating={5}
                  review="Great collaboration skills! Keshav perfectly implemented our design vision with smooth animations."
                />
                <ReviewCard
                  name="Alex Rodriguez"
                  role="Project Manager"
                  avatar="👨‍💻"
                  rating={5}
                  review="Reliable and communicative. Keshav's full-stack expertise helped us build a robust application."
                />
                <ReviewCard
                  name="Lisa Wang"
                  role="Senior Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Impressed by Keshav's Node.js and MongoDB skills. His API development is clean and efficient."
                />
              </div>
              
              {/* Column-specific fade overlays */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-base-100 via-base-100/90 to-transparent pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base-100 via-base-100/90 to-transparent pointer-events-none z-20"></div>
            </div>

            {/* Right Column - Reviews going down */}
            <div className="flex-1 relative overflow-hidden rounded-2xl">
              <div className="animate-scroll-down space-y-6">
                {/* First set of reviews */}
                <ReviewCard
                  name="David Park"
                  role="CTO"
                  avatar="👨‍💼"
                  rating={5}
                  review="Keshav's passion for learning new technologies is evident. He quickly adapted to our tech stack."
                />
                <ReviewCard
                  name="Jennifer Lee"
                  role="Full Stack Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Outstanding work on our MERN stack project. Keshav's code quality and documentation are top-notch."
                />
                <ReviewCard
                  name="Robert Taylor"
                  role="Software Engineer"
                  avatar="👨‍💻"
                  rating={5}
                  review="Creative problem solver with excellent debugging skills. Keshav helped us overcome complex challenges."
                />
                <ReviewCard
                  name="Maria Garcia"
                  role="Product Manager"
                  avatar="👩‍💼"
                  rating={5}
                  review="Keshav understands user requirements well and translates them into excellent technical solutions."
                />
                <ReviewCard
                  name="Tom Wilson"
                  role="DevOps Engineer"
                  avatar="👨‍💻"
                  rating={5}
                  review="Solid understanding of deployment processes. Keshav's applications are well-structured and scalable."
                />

                {/* Duplicate set for seamless loop */}
                <ReviewCard
                  name="David Park"
                  role="CTO"
                  avatar="👨‍💼"
                  rating={5}
                  review="Keshav's passion for learning new technologies is evident. He quickly adapted to our tech stack."
                />
                <ReviewCard
                  name="Jennifer Lee"
                  role="Full Stack Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Outstanding work on our MERN stack project. Keshav's code quality and documentation are top-notch."
                />
                <ReviewCard
                  name="Robert Taylor"
                  role="Software Engineer"
                  avatar="👨‍💻"
                  rating={5}
                  review="Creative problem solver with excellent debugging skills. Keshav helped us overcome complex challenges."
                />
                <ReviewCard
                  name="Maria Garcia"
                  role="Product Manager"
                  avatar="👩‍💼"
                  rating={5}
                  review="Keshav understands user requirements well and translates them into excellent technical solutions."
                />
                <ReviewCard
                  name="Tom Wilson"
                  role="DevOps Engineer"
                  avatar="👨‍💻"
                  rating={5}
                  review="Solid understanding of deployment processes. Keshav's applications are well-structured and scalable."
                />
              </div>
              
              {/* Column-specific fade overlays */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-base-100 via-base-100/90 to-transparent pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base-100 via-base-100/90 to-transparent pointer-events-none z-20"></div>
            </div>
          </div>

          {/* Mobile View (Single Column) */}
          <div className="block md:hidden">
            <div className="relative overflow-hidden h-80 rounded-2xl">
              <div className="animate-scroll-up-mobile space-y-4">
                {/* All reviews in single column for mobile */}
                <ReviewCard
                  name="Sarah Johnson"
                  role="Frontend Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Keshav's React skills are impressive! His clean code and attention to detail make him a pleasure to work with."
                />
                <ReviewCard
                  name="Mike Chen"
                  role="Tech Lead"
                  avatar="👨‍💼"
                  rating={5}
                  review="Excellent problem-solving abilities and quick learner. Keshav delivered our project ahead of schedule."
                />
                <ReviewCard
                  name="Emma Davis"
                  role="UX Designer"
                  avatar="👩‍🎨"
                  rating={5}
                  review="Great collaboration skills! Keshav perfectly implemented our design vision with smooth animations."
                />
                <ReviewCard
                  name="David Park"
                  role="CTO"
                  avatar="👨‍💼"
                  rating={5}
                  review="Keshav's passion for learning new technologies is evident. He quickly adapted to our tech stack."
                />
                <ReviewCard
                  name="Jennifer Lee"
                  role="Full Stack Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Outstanding work on our MERN stack project. Keshav's code quality and documentation are top-notch."
                />
                <ReviewCard
                  name="Alex Rodriguez"
                  role="Project Manager"
                  avatar="👨‍💻"
                  rating={5}
                  review="Reliable and communicative. Keshav's full-stack expertise helped us build a robust application."
                />
                <ReviewCard
                  name="Lisa Wang"
                  role="Senior Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Impressed by Keshav's Node.js and MongoDB skills. His API development is clean and efficient."
                />
                <ReviewCard
                  name="Robert Taylor"
                  role="Software Engineer"
                  avatar="👨‍💻"
                  rating={5}
                  review="Creative problem solver with excellent debugging skills. Keshav helped us overcome complex challenges."
                />

                {/* Duplicate set for seamless loop */}
                <ReviewCard
                  name="Sarah Johnson"
                  role="Frontend Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Keshav's React skills are impressive! His clean code and attention to detail make him a pleasure to work with."
                />
                <ReviewCard
                  name="Mike Chen"
                  role="Tech Lead"
                  avatar="👨‍💼"
                  rating={5}
                  review="Excellent problem-solving abilities and quick learner. Keshav delivered our project ahead of schedule."
                />
                <ReviewCard
                  name="Emma Davis"
                  role="UX Designer"
                  avatar="👩‍🎨"
                  rating={5}
                  review="Great collaboration skills! Keshav perfectly implemented our design vision with smooth animations."
                />
                <ReviewCard
                  name="David Park"
                  role="CTO"
                  avatar="👨‍💼"
                  rating={5}
                  review="Keshav's passion for learning new technologies is evident. He quickly adapted to our tech stack."
                />
                <ReviewCard
                  name="Jennifer Lee"
                  role="Full Stack Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Outstanding work on our MERN stack project. Keshav's code quality and documentation are top-notch."
                />
                <ReviewCard
                  name="Alex Rodriguez"
                  role="Project Manager"
                  avatar="👨‍💻"
                  rating={5}
                  review="Reliable and communicative. Keshav's full-stack expertise helped us build a robust application."
                />
                <ReviewCard
                  name="Lisa Wang"
                  role="Senior Developer"
                  avatar="👩‍💻"
                  rating={5}
                  review="Impressed by Keshav's Node.js and MongoDB skills. His API development is clean and efficient."
                />
                <ReviewCard
                  name="Robert Taylor"
                  role="Software Engineer"
                  avatar="👨‍💻"
                  rating={5}
                  review="Creative problem solver with excellent debugging skills. Keshav helped us overcome complex challenges."
                />
              </div>
              
              {/* Mobile fade overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-base-100 via-base-100/90 to-transparent pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-base-100 via-base-100/90 to-transparent pointer-events-none z-20"></div>
            </div>
          </div>

          {/* Enhanced Section-wide fade overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-base-100 via-base-100/70 via-base-100/40 to-transparent pointer-events-none z-30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-100 via-base-100/70 via-base-100/40 to-transparent pointer-events-none z-30"></div>
          
          {/* Side fade effects */}
          <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-base-100 to-transparent pointer-events-none z-30"></div>
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-base-100 to-transparent pointer-events-none z-30"></div>
        </section>

        {/* Interactive CTA */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl p-12 border shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-base-content">
              Let's Build Something
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {" "}
                Awesome!
              </span>
            </h2>
            <p className="text-base-content/70 mb-8 text-lg">
              I'm open to collaboration, internships, and creative projects.
              Let's connect and innovate together!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => navigate("/projects")}
                className="btn btn-primary rounded-full px-8 py-3 text-lg font-semibold hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects 🚀
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="btn btn-outline rounded-full px-8 py-3 text-lg font-semibold hover:scale-110 hover:-rotate-2 transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Get In Touch 💬
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Ultra-smooth CSS animations */}
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
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes scroll-up-mobile {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-60%);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .animate-scroll-up-mobile {
          animation: scroll-up-mobile 25s linear infinite;
        }

        .hover\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        @tailwind utilities;

        @layer base {
          /* Custom scrollbar styles */
          html {
            scrollbar-width: thin;
            scrollbar-color: #a0aec0 transparent;
          }

          html::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }

          html::-webkit-scrollbar-thumb {
            background-color: #a0aec0;
            border-radius: 9999px;
          }

          html::-webkit-scrollbar-track {
            background-color: transparent;
          }
        }

        @layer components {
          /* Card component */
          .card {
            @apply bg-base-200 dark:bg-base-700 rounded-2xl shadow-md overflow-hidden;
          }

          .card-header {
            @apply bg-gradient-to-r from-primary to-secondary p-4 rounded-t-2xl;
          }

          .card-title {
            @apply text-xl font-bold text-white;
          }

          .card-content {
            @apply p-4 text-base-content;
          }

          /* Button component */
          .btn {
            @apply inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300;
          }

          .btn-primary {
            @apply bg-primary text-white shadow-md hover:shadow-lg;
          }

          .btn-outline {
            @apply border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white;
          }
        }

        @layer utilities {
          /* Custom utility for text gradient */
          .text-gradient {
            @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent;
          }

          /* Custom utility for background gradient */
          .bg-gradient {
            @apply bg-gradient-to-r from-primary to-secondary;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
