import React, { useEffect, useRef } from 'react';
import { 
  SiNodedotjs, SiExpress, SiReact, SiJavascript, SiHtml5, SiCss3, SiMongodb, 
  SiTailwindcss, SiMaterialdesign, SiGit, SiGithub, SiOpenai 
} from "react-icons/si";
import { HoverBorderGradient } from "../ui/HoverEffect";
import { useTheme } from '../context/ThemeProvider'
import { FaTools, FaGlobe } from "react-icons/fa";
import gsap from "gsap";

const AboutContent = () => {
  const { theme } = useTheme();

  // Refs for animation
  const webDevGridRef = useRef(null);
  const toolsGridRef = useRef(null);

  // Set colors based on theme
  const boxBg = theme === 'light' ? 'bg-black' : 'bg-neutral-400';
  const boxText = theme === 'light' ? 'text-white' : 'text-black';
  const descText = theme === 'light' ? 'text-gray-300' : 'text-gray-700';

  // Main web development stack
  const webDevData = [
    { name: "JavaScript", description: "Languages of the web", icon: <SiJavascript className="text-yellow-700 dark:text-yellow-300 text-3xl" /> },
    { name: "React.js", description: "Frontend Library", icon: <SiReact className="text-blue-900 dark:text-blue-400 text-3xl" /> },
    { name: "Tailwind CSS", description: "Utility-first CSS", icon: <SiTailwindcss className="text-cyan-900 dark:text-cyan-400 text-3xl" /> },
    { name: "MongoDB", description: "NoSQL Database", icon: <SiMongodb className="text-green-900 dark:text-green-400 text-3xl" /> },
    { name: "Node.js", description: "Server-side JavaScript", icon: <SiNodedotjs className="text-green-900 dark:text-green-400 text-3xl" /> },
    { name: "Express.js", description: "Backend Framework", icon: <SiExpress className={` text-3xl ${theme=="light"?"text-white":"text-black"}`}/> }
  ];

  // Tools section
  const toolsData = [
    { name: "Git", description: "Version Control", icon: <SiGit className="text-orange-900 dark:text-orange-400 text-3xl" /> },
    {
      name: "GitHub",
      description: "Code Hosting",
      icon: (
        <SiGithub
          className={`text-3xl ${theme === 'light' ? 'text-white' : 'text-black'}`}
        />
      ),
    },
    { name: "OpenAI", description: "AI Tools", icon: <SiOpenai className={`${theme=="light"?"text-white":"text-black"} text-3xl`} /> },
    { name: "Postman", description: "API Testing", icon: <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" className="w-8 h-8" /> },
    { name: "VS Code", description: "Code Editor", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-8 h-8" /> },
  ];

  

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-8 mb-26">
      {/* Web Development Section */}
      <h2 className={`text-4xl font-semibold mb-6 flex items-center gap-3 orbitron-custom`}>
        <FaGlobe className="text-purple-500" />
        Web Development
      </h2>
      <div className="w-full flex justify-center items-center mb-12">
        <div
          ref={webDevGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl items-center justify-center"
        >
          {webDevData.map((item, index) => (
            <HoverBorderGradient
              key={index}
              containerClassName="rounded-xl"
              as="div"
              className={`group ${boxBg} ${boxText} flex items-center gap-4 p-1 w-full max-w-[320px] min-w-[220px] min-h-[64px] max-h-[64px] shadow-md dark:shadow-lg hover:scale-105 transition-transform mx-auto hover:shadow-lg ${theme=="light"?"hover:shadow-neutral-700":"hover:shadow-neutral-500"}`}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-base">{item.name}</h3>
                <p className={`text-xs ${descText}`}>{item.description}</p>
              </div>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
      {/* Tools Section */}
      <h2 className={`text-3xl font-semibold mb-6 flex items-center gap-3 orbitron-custom`}>
        <FaTools className="text-purple-500" />
        Tools
      </h2>
      <div className="w-full flex justify-center items-center">
        <div
          ref={toolsGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl items-center justify-center"
        >
          {toolsData.map((item, index) => (
            <HoverBorderGradient
              key={index}
              containerClassName="rounded-xl"
              as="div"
              className={`group ${boxBg} ${boxText} flex items-center gap-4 p-1 w-full max-w-[320px] min-w-[220px] min-h-[64px] max-h-[64px] shadow-md dark:shadow-lg hover:scale-105 transition-transform mx-auto  hover:shadow-lg ${theme=="light"?"hover:shadow-neutral-700":"hover:shadow-neutral-500"}`}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-base">{item.name}</h3>
                <p className={`text-xs ${descText}`}>{item.description}</p>
              </div>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
