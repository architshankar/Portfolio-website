import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

function getHiddenVariant(direction) {
  switch (direction) {
    case "up":
      return { opacity: 0, y: 40 };
    case "down":
      return { opacity: 0, y: -40 };
    case "left":
      return { opacity: 0, x: 40 };
    case "right":
      return { opacity: 0, x: -40 };
    case "none":
      return { opacity: 0 };
    default:
      return { opacity: 0, y: 40 };
  }
}

function ScrollReveal({
  children,
  width = "fit-content",
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
  containerWidth = "fit-content",
  ...props
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const variants = {
    hidden: getHiddenVariant(direction),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ width: containerWidth }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
