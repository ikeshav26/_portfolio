import React, { useEffect, useState, useRef, useContext, useCallback, useMemo } from "react";
import { DragCards } from "../components/Cards";
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../context/ThemeContext";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);
  const navigate = useNavigate();
  const { theme } = useContext(appContext);

  const navigateProject = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const navigateContact = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 16; 

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      
      lastTime = now;
      
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
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Reduce number of floating cards and memoize them
  const floatingCards = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5, // Reduced delay range
      duration: 20 + Math.random() * 10, // Slower animations
      scale: 0.6 + Math.random() * 0.4,
    }));
  }, []);

  // Memoize GitHub image URLs to prevent constant regeneration
  const githubImageUrls = useMemo(() => ({
    dark: `https://raw.githubusercontent.com/ikeshav26/ikeshav26/output/github-contribution-grid-snake-dark.svg?t=${Math.floor(Date.now() / 60000)}`, // Update every minute instead of every render
    light: `https://raw.githubusercontent.com/ikeshav26/ikeshav26/output/github-contribution-grid-snake.svg?t=${Math.floor(Date.now() / 60000)}`
  }), []);

  return (
    <div className="min-h-screen bg-base-100 relative overflow-hidden pt-24">
      {/* Optimized Floating Cards Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingCards.map((card) => (
          <div
            key={card.id}
            className="absolute opacity-20 dark:opacity-10" // Reduced opacity
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              transform: `scale(${card.scale})`,
              animation: `float ${card.duration}s ease-in-out infinite`,
              animationDelay: `${card.delay}s`,
              willChange: 'transform', // Optimize for transform changes
            }}
          >
            <div className="w-32 h-24 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Optimized Mouse Follower */}
      <div
        className="fixed w-8 h-8 bg-primary rounded-full pointer-events-none z-10 opacity-50 blur-sm" // Reduced size and opacity
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: "translate3d(0, 0, 0)",
          transition: "none",
          willChange: 'transform',
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-base-content mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              KESHAV
            </span>
          </h1>
          <p className="text-2xl text-base-content/80 mb-4">
            Third Semester Student | MERN Stack Developer{" "}
          </p>
          <p className="text-base-content/60 max-w-2xl mx-auto mb-10">
            Passionate about building mern-stack applications, I enjoy solving
            real-world problems through code. Currently navigating the exciting
            journey of software development while pursuing my B.Tech. Let's
            build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={navigateProject}
              className="btn btn-primary rounded-full px-8"
            >
              View My Work
            </button>
            <button
              onClick={navigateContact}
              className="btn btn-outline rounded-full px-8"
            >
              Get in touch
            </button>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="text-4xl font-bold text-center text-base-content mb-12">
            GitHub Activity
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl p-6">
              <img
                src={theme === 'dark' ? githubImageUrls.dark : githubImageUrls.light}
                alt={`GitHub Snake ${theme === 'dark' ? 'Dark' : 'Light'}`}
                className="w-full"
                loading="lazy" // Add lazy loading
                onError={(e) => {
                  e.target.style.display = "none";
                  document.getElementById("fallback-message").style.display = "block";
                }}
              />
              <div
                className="text-center text-base-content/60 mt-4 hidden"
                id="fallback-message"
              >
                <p>GitHub Snake Animation Loading...</p>
                <p className="text-sm mt-2">
                  Setting up GitHub snake animation...
                </p>
              </div>
              <p className="text-center text-base-content/60 mt-4">
                Snake eating my GitHub commits 🐍
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="relative">
            <DragCards />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 py-8 md:py-16">
          {/* Projects Completed */}
          <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl shadow-xl border border-base-300 dark:border-base-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-primary mb-4">
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 20l9-5-9-5-9 5 9 5z" />
                <path d="M12 12V4l9 5-9 5-9-5 9-5z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">5+</h3>
            <p className="text-base-content/70 font-medium text-sm md:text-base">
              Projects Completed
            </p>
          </div>

          {/* Years of Learning */}
          <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl shadow-xl border border-base-300 dark:border-base-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-secondary mb-4">
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2">1+</h3>
            <p className="text-base-content/70 font-medium text-sm md:text-base">
              Years of Learning
            </p>
          </div>

          {/* Skills Mastered */}
          <div className="flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl shadow-xl border border-base-300 dark:border-base-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-accent mb-4">
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 10V3.5a.5.5 0 0 0-.85-.35l-7.3 7.3a1.5 1.5 0 0 0 0 2.1l7.3 7.3a.5.5 0 0 0 .85-.35V14h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-5z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-accent mb-2">10+</h3>
            <p className="text-base-content/70 font-medium text-sm md:text-base">Skills Mastered</p>
          </div>
        </section>
      </div>

      {/* Optimized CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
