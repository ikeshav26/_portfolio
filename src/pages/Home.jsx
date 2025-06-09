import React from 'react'
import RotatingText from '../components/RotatingText'
import img1 from '../../public/img1.png'
import img2 from '../../public/img2.png'
import img3 from '../../public/img3.png'
import BlobCursor from '../components/BlobCursor'
import HomeContent from '../components/Content/HomeContent'
import { FloatingDockDemo } from '../components/FloatingDoc'

const Home = () => {
  return (
    <div className=''>
      <BlobCursor className="absolute h-screen w-full"
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
        <HomeContent/>
      </BlobCursor>
      <div className="fixed top-7/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <FloatingDockDemo/>
      </div>
    </div>
  )
}

export default Home
