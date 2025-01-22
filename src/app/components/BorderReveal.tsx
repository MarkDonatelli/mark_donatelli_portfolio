'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BorderReveal() {
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
      className="relative origin-left w-full h-[1px] bg-white"
    ></motion.div>
  );
}
