"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function GradientText({ children, className = "", animate = false }: GradientTextProps) {
  const baseClasses = "text-gradient";

  if (animate) {
    return (
      <motion.span
        className={`${baseClasses} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    );
  }

  return <span className={`${baseClasses} ${className}`}>{children}</span>;
}
