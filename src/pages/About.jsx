import React from "react";
import Header from "../components/Header";
import GithubCommit from "../components/ui/GithubCommit";
import sticker2 from "../../public/Nft Coding GIF.gif";
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <div className="min-h-[150vh] lg:overflow-x-hidden w-full flex flex-col px-4 sm:px-6 md:px-14 pt-16 gap-10 scrollbar-hide overflow-auto">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-10 mx-auto">
        
        {/* Image Section */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <img
            className="w-48 h-36 sm:w-64 sm:h-48 md:w-80 md:h-60 lg:w-80 lg:h-60 rounded-xl object-cover"
            src={sticker2}
            alt="sticker"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <p className="orbitron-custom max-w-xl text-base sm:text-lg md:text-xl flex flex-col gap-3 text-center md:text-left">
            <span className="inline-block tracking-wider text-purple-500">
              <Typewriter
                options={{
                  strings: [
                    "Hi, I’m Keshav Gilhotra —18-year-old",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 50,
                }}
              />
            </span>
            <span className="inline-block">
              MERN Stack Developer passionate about creating intuitive and visually engaging digital experiences that blend design with seamless functionality.
              <span className="inline-block">
                I enjoy working with technologies like React.js, Node.js, and Figma,
                turning ideas into smooth, functional, and modern web applications.
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* GitHub Commit Section */}
      <div className="w-full mt-8">
        <GithubCommit />
      </div>
      
      
    </div>
  );
};

export default About;
