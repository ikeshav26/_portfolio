import React, { useEffect, useState, useRef } from 'react'
import { DragCards } from '../components/Cards'
import { Link } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const rafId = useRef(null)
  const navigate = useNavigate()

  const navigateProject=()=>{
    navigate('/projects')
  }

  const navigateContact=()=>{
    navigate('/contact')
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Cancel previous animation frame if it exists
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      
      // Use requestAnimationFrame for smoother updates
      rafId.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  const generateFloatingCards = () => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      scale: 0.5 + Math.random() * 0.5
    }))
  }

  const [floatingCards] = useState(generateFloatingCards())

  return (
    <div className="min-h-screen bg-base-100 relative overflow-hidden pt-24">
      {/* Floating Cards Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingCards.map((card) => (
          <div
            key={card.id}
            className="absolute opacity-30 dark:opacity-15"
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              transform: `scale(${card.scale})`,
              animation: `float ${card.duration}s ease-in-out infinite`,
              animationDelay: `${card.delay}s`
            }}
          >
            <div className="w-40 h-28 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-xl blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Mouse Follower - Ultra Smooth */}
      <div
        className="fixed w-10 h-10 bg-primary rounded-full pointer-events-none z-10 opacity-70 blur-sm will-change-transform"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
          transition: 'none' // Remove CSS transition for smoother animation
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-base-content mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">KESHAV</span>
          </h1>
          <p className="text-2xl text-base-content/80 mb-4">Third Semester Student | MERN Stack Developer </p>
          <p className="text-base-content/60 max-w-2xl mx-auto mb-10">
            Passionate about building mern-stack applications, I enjoy solving real-world problems through code. Currently navigating the exciting journey of software development while pursuing my B.Tech. Let's build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={navigateProject} className="btn btn-primary rounded-full px-8">View My Work</button>
            <button onClick={navigateContact} className="btn btn-outline rounded-full px-8">Get in touch</button>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center text-base-content mb-12">GitHub Activity</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl p-6">
              <picture>
                <source srcSet="https://raw.githubusercontent.com/ikeshav26/ikeshav26/output/github-contribution-grid-snake-dark.svg" media="(prefers-color-scheme: dark)" />
                <img
                  src="https://raw.githubusercontent.com/ikeshav26/ikeshav26/output/github-contribution-grid-snake.svg"
                  alt="GitHub Snake"
                  className="w-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              </picture>
              <div className="text-center text-base-content/60 mt-4 hidden" id="fallback-message">
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

        <section className="mb-24">
          <div className="relative">
            <DragCards />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-base-200 dark:bg-base-300 rounded-lg shadow border border-base-300 dark:border-base-600">
            <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
            <p className="text-base-content/60">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-base-200 dark:bg-base-300 rounded-lg shadow border border-base-300 dark:border-base-600">
            <h3 className="text-3xl font-bold text-secondary mb-2">1+</h3>
            <p className="text-base-content/60">Years Learning</p>
          </div>
          <div className="text-center p-6 bg-base-200 dark:bg-base-300 rounded-lg shadow border border-base-300 dark:border-base-600">
            <h3 className="text-3xl font-bold text-success mb-2">100%</h3>
            <p className="text-base-content/60">Client Satisfaction</p>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Home
