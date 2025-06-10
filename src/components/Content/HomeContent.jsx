import React from "react";
import RotatingText from "../RotatingText";
import img1 from "../../../public/img1.png";
import img2 from "../../../public/img2.png";
import img3 from "../../../public/img3.png";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useTheme } from "../context/ThemeProvider";
import Header from "../Header";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Sticker1 from '../../../public/output-onlinegiftools.gif'



const HomeContent = () => {
  const { theme, setTheme } = useTheme();
gsap.registerPlugin(useGSAP);

useGSAP(()=>{
  gsap.fromTo(
    ".animated",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.3 ,ease: "power2.out"}
  );
})
  

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-10 transition-colors duration-300 ">
      <div className="flex flex-col items-center justify-center -gap-7 md:gap-8 mt-15 lg:mt-0">
        <div className="animated flex items-center justify-center gap-2">
          <p
            className=" textHome text-2xl md:text-4xl lg:text-5xl orbitron-custom"
            style={{
              textShadow: "2px 2px 8px #111, 0 1px 0 #111",
            }}
          >
            Hi, I'm Keshav,
          </p>
          <img className="w-10 h-10 md:h-13 md:w-13" src={img1} alt="img1" />
        </div>
        <div className="animated flex text-sm md:text-xl lg:text-3xl items-center justify-center gap-3 textHome">
          <img className="w-10 h-10 md:w-13 md:h-13" src={img2} alt="img2" />
          <RotatingText
            texts={["FRONTEND", "BACKEND", "MERNSTACK"]}
            mainClassName="px-2 orbitron-custom bg-[#B98AF3] text-black overflow-hidden py-1 rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <span
            className="text-2xl md:text-4xl lg:text-5xl orbitron-custom textHome"
            style={{
              textShadow: "2px 2px 8px #111, 0 1px 0 #111",
            }}
          >
            DEVELOPER!
          </span>
        </div>
        <div className="animated flex items-center justify-center gap-3">
          <p
            className="text-2xl md:text-4xl lg:text-5xl orbitron-custom textHome"
            style={{
              textShadow: "2px 2px 8px #111, 0 1px 0 #111",
            }}
          >
            Based in Punjab
          </p>
          <img className="w-10 h-10 md:w-13 md:h-13" src={img3} alt="img3" />
        </div>

        <div className="animated textHome text-xl md:text-2xl lg:text-3xl w-[90vw] md:w-[60vw] mt-5 text-center font-medium">
          <p className="textHome">
            Modern, responsive portfolio showcasing skills, projects,
            creativity, and coding expertise.
          </p>
        </div>
      </div>

      <div className="absolute top-20 lg:-left-1/4 lg:top-1/5 w-60 h-60 md:h-80 md:w-80 mb-0 ">
        <img src={Sticker1}/>
      </div>

      <div>
        <Header/>
      </div>
    </div>
  );
};

export default HomeContent;
