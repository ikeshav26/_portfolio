import { cn } from "../lib/utils";
import React from "react";

export function GridBackgroundDemo({children}) {
  return (
    <div
      className="back relative min-h-screen max-h-screen flex  w-full items-center justify-center   ">
      <div
        className={cn(
          "brightness-50"
        )} />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p
        className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        {children}
      </p>
    </div>
  );
}
