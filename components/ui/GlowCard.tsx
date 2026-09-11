"use client";

import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlowCard({ children, className = "", hover = true }: GlowCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -8 } : {}}
    >
      <div className="absolute inset-0 bg-gradient-card opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
