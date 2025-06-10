import React from 'react'
import RotatingText from '../components/RotatingText'
import img1 from '../../public/img1.png'
import img2 from '../../public/img2.png'
import img3 from '../../public/img3.png'
import BlobCursor from '../components/BlobCursor'
import HomeContent from '../components/Content/HomeContent'
import Particles from '../components/ui/Particles.jsx'
import { useTheme } from '../components/context/ThemeProvider'

const Home = () => {
  const { theme } = useTheme();

  // Decide color inside render so it always updates on theme change
  const particleColors = theme === 'dark' 
    ? ['#ffffff', '#cccccc']  // Whiteish particles in dark mode
    : ['#000000', '#333333']; // Darkish particles in light mode

  return (
    <div className='relative w-full min-h-screen'>
      {/* Particles absolutely positioned over the entire Home page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Particles
          key={theme}  // Important: this forces remount when theme changes!
          particleColors={particleColors}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <BlobCursor className="absolute h-screen w-full z-10"
        blobType="circle"
        fillColor="#B98AF3"
        trailCount={3}
        sizes={[30, 60, 40]}
        innerSizes={[10, 20, 15]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={10}
      >
        <div style={{ position: 'relative', zIndex: 2 }}>
          <HomeContent />
        </div>
      </BlobCursor>
    </div>
  )
}

export default Home
