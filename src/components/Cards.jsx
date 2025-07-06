import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden ">
      <h2 className="relative z-0 text-[20vw] font-black text-base-300 md:text-[200px]">
        KESHAV<span className="text-primary">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/terminal.png"
        alt="terminal image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
        floatDelay={0}
      />
      <Card
        containerRef={containerRef}
        src="/jupyter.png"
        alt="vscode image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-30 md:w-60"
        floatDelay={1.5}
      />
      <Card
        containerRef={containerRef}
        src="/react.png"
        alt="react image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
        floatDelay={0.8}
      />
      <Card
        containerRef={containerRef}
        src="/node.png"
        alt="random image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
        floatDelay={2.2}
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className, floatDelay = 0 }) => {
  const [zIndex, setZIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZ = -Infinity;
    els.forEach((el) => {
      const z = parseInt(window.getComputedStyle(el).zIndex);
      if (!isNaN(z) && z > maxZ) maxZ = z;
    });

    setZIndex(maxZ + 1);
  };

  // Floating animation variants
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      rotate: [rotate, `${parseFloat(rotate) + 5}deg`, `${parseFloat(rotate) - 3}deg`, rotate],
      transition: {
        duration: 6 + Math.random() * 4, // Random duration between 6-10s
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }
    },
    drag: {
      transition: {
        duration: 0
      }
    }
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      style={{ 
        top, 
        left, 
        zIndex,
        transformOrigin: "center center"
      }}
      className={twMerge(
        "drag-elements absolute rounded-xl shadow-lg bg-base-200 p-1 pb-4 border border-base-300 cursor-grab active:cursor-grabbing",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      variants={floatingVariants}
      animate={isDragging ? "drag" : "float"}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.8, delay: floatDelay * 0.3 }
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: `${parseFloat(rotate) + 10}deg`,
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
    />
  );
};
