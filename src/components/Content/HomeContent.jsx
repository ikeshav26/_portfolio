import React from 'react'
import RotatingText from '../RotatingText'
import img1 from '../../../public/img1.png'
import img2 from '../../../public/img2.png'
import img3 from '../../../public/img3.png'
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillTwitterSquare, AiFillX } from "react-icons/ai";


const HomeContent = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center  md:gap-4 '>
          <div className='flex items-center justify-center gap-2'>
            <p className='text-2xl md:text-4xl lg:text-5xl orbitron-custom  text-white'>Hi,I'm Keshav,</p>
            <img className='w-10 h-10 md:h-13 md:w-13' src={img1} />
          </div>
          <div className='flex text-sm md:text-xl lg:text-3xl items-center justify-center gap-3'>
            <img className='w-10 h-10 md:w-13 md:h-13' src={img2} />
            <RotatingText
              texts={['FRONTEND', 'BACKEND', 'MERNSTACK']}
              mainClassName="px-2 orbitron-custom sm:px-2 md:px-3 bg-[#B98AF3] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
            <img className='w-10 h-10 md:w-13 md:h-13' src={img3} />
          </div>
        </div>
        <div className='absolute top-5 left-5 text-white text-3xl md:text-4xl  flex gap-2 items-center justify-center'>
          <div className=' bg-neutral-900 p-2 rounded-xl cursor-pointer  hover:bg-neutral-700 hover:scale-104 transition-all duration-200'>
            <Link to="https://www.instagram.com/keshav_gilhotra_/?hl=en"><AiFillInstagram/></Link>
          </div>
          <div  className=' bg-neutral-900 p-2 rounded-xl cursor-pointer  hover:bg-neutral-700 hover:scale-104 transition-all duration-200'>
            <Link  to="https://github.com/ikeshav26"><AiFillGithub/></Link>
          </div>
          <div  className= "bg-neutral-900 p-2 rounded-xl cursor-pointer  hover:bg-neutral-700 hover:scale-104 transition-all duration-200">
            <Link to="https://x.com/KeshavGilh5995"><AiFillTwitterCircle/></Link>
          </div>
        </div>
    </div>
  )
}

export default HomeContent
