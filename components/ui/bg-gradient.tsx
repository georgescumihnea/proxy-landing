import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

// Define darker, less bright green and yellow color constants
const COLOR_1 = "#0ea5e9"; // Dark green
const COLOR_2 = "##4fc3f7"; // Muted medium green
const COLOR_3 = "##4fc3f7"; // Medium dark green
const COLOR_4 = "#1d4ed8"; // Soft green with less brightness
const COLOR_5 = "#1d4ed8"; // Darker green

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          `bg-[radial-gradient(circle_farthest-side_at_0_100%,${COLOR_1},transparent),radial-gradient(circle_farthest-side_at_100%_0,${COLOR_2},transparent),radial-gradient(circle_farthest-side_at_100%_100%,${COLOR_3},transparent),radial-gradient(circle_farthest-side_at_0_0,${COLOR_4},${COLOR_5})]`
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-xl z-[1] will-change-transform",
          `bg-[radial-gradient(circle_farthest-side_at_0_100%,${COLOR_1},transparent),radial-gradient(circle_farthest-side_at_100%_0,${COLOR_2},transparent),radial-gradient(circle_farthest-side_at_100%_100%,${COLOR_3},transparent),radial-gradient(circle_farthest-side_at_0_0,${COLOR_4},${COLOR_5})]`
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
