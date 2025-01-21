'use client';

import { motion } from 'framer-motion';

export default function IntroAnimation({
  onComplete
}: {
  onComplete: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 1.5,
        delay: 1.5,
        ease: 'easeInOut'
      }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 w-full h-full z-10 bg-custom-gradient-dark"
    >
      <div className="grid place-content-center h-full">
        <motion.h1
          initial={{ scale: 1 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{
            duration: 1.5,
            delay: 1.5,
            ease: 'easeInOut'
          }}
          className="leading-[0px] uppercase font-medium font-geo sm:-tracking-[0.5rem] -tracking-[0.3rem]  text-[12.5vw] sm:text-[4.5vw] text-white"
        >
          Mark Donatelli
        </motion.h1>
        <motion.p
          initial={{ scale: 1 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{
            duration: 1.5,
            delay: 1.5,
            ease: 'easeInOut'
          }}
          className=" uppercase font-bold font-geo sm:-tracking-[0.7rem] sm:text-[7vw] text-white"
        >
          Front-End Developer
        </motion.p>
      </div>
    </motion.div>
  );
}
