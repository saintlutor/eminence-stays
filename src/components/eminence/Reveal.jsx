import { motion } from "framer-motion";
import React from "react";

const EASE = [0.16, 1, 0.3, 1];

export default function Reveal({ children, delay = 0, y = 28, className, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}