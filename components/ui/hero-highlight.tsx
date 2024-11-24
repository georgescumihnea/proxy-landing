"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
export const HeroHighlight = ({ children }: { children: React.ReactNode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  function handleMouseMove(event: MouseEvent) {
    // Capture mouse position with scroll offset
    mouseX.set(event.clientX + window.scrollX);
    mouseY.set(event.clientY + window.scrollY);
    setIsMouseMoving(true);
  }

  function handleScroll() {
    // Update the position to account for scrolling
    mouseX.set(mouseX.get() + window.scrollX);
    mouseY.set(mouseY.get() + window.scrollY);
    setIsMouseMoving(true);
  }

  useEffect(() => {
    // Listen to both mouse movement and scroll events
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const timeout = setTimeout(() => setIsMouseMoving(false), 3000); // Optional: fades out effect after inactivity
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMouseMoving]);

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Dotted background layer */}
      <div className="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none" />

      {/* Mouse-following highlight layer */}
      <motion.div
        className="pointer-events-none bg-dot-thick-blue-500 absolute inset-0 transition duration-300"
        style={{
          opacity: isMouseMoving ? 1 : 0, // Control opacity based on mouse movement
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Page content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
