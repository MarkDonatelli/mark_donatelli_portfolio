'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BorderRevealProps {
  height?: string;
}

export default function BorderReveal({
  height = 'h-[1px]'
}: BorderRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
      transition={{
        duration: 1.5,
        ease: 'easeInOut'
      }}
      className={`relative origin-left w-full ${height} dark:bg-neutral-lightBeige bg-navy-dark`}
    ></motion.div>
  );
}
