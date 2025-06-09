import React from 'react'
import RotatingText from '../RotatingText'
import img1 from '../../../public/img1.png'
import img2 from '../../../public/img2.png'
import img3 from '../../../public/img3.png'


const HomeContent = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center  md:gap-4 '>
          <div className='flex items-center justify-center gap-2'>
            <p className='text-2xl md:text-4xl lg:text-5xl orbitron-custom  text-white'>Hi,I'm Keshav,</p>
            <img className='w-13 h-13' src={img1} />
          </div>
          <div className='flex text-sm md:text-xl lg:text-3xl items-center justify-center gap-3'>
            <img className='w-13 h-13' src={img2} />
            <RotatingText
              texts={['FRONTEND', 'BACKEND', 'MERNSTACK']}
              mainClassName="px-2 orbitron-custom sm:px-2 md:px-3 bg-[#d4b21b] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <span className='text-2xl md:text-4xl lg:text-5xl orbitron-custom text-white'>DEVELOPER!</span>
          </div>
          <div className='flex items-center justify-center gap-3 orbitron-custom'>
            <p className='text-2xl md:text-4xl lg:text-5xl orbitron-custom text-white'>Based in Punjab</p>
            <img className='w-13 h-13' src={img3} />
          </div>
        </div>
    </div>
  )
}

export default HomeContent
