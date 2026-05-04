'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  distance?: number;
}

const DEFAULT_MARGIN = '-50px';

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  delay = 0,
  className,
  style,
  duration = 0.6,
  distance = 30,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: DEFAULT_MARGIN });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
