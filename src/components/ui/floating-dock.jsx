import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { cn } from '../../lib/utils';

function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800
          w-12 h-12 sm:w-10 sm:h-10 xs:w-9 xs:h-9  hover:bg-neutral-700 hover:scale-104 transition-all duration-200"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 whitespace-nowrap orbitron-custom rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="flex items-center justify-center w-6 h-6 sm:w-5 sm:h-5 xs:w-4 xs:h-4">
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}

export const FloatingDock = ({ items, className = '' }) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed inset-x-0 bottom-4 mx-auto w-fit flex gap-4 rounded-xl p-[2px] z-50 shadow-md",
        "before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:bg-gradient-to-tl before:from-zinc-300 before:via-purple-400 before:to-zinc-800 before:content-[''] before:-z-10",
        "before:transition-colors before:duration-300", // <-- add transition for border/gradient
        className
      )}
    >
      <div className="flex gap-4 bg-white dark:bg-neutral-900 rounded-xl p-3 w-full h-full">
        {items.map((item) => (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </div>
    </motion.div>
  );
};
