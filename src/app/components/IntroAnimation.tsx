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
      className="fixed inset-0 w-full h-full bg-primary z-20"
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
          className="leading-[clamp(1.6rem,3vw,7rem)] uppercase font-medium font-inter tracking-[clamp(-0.2rem,-0.1vw,-0.3rem)] text-[clamp(1.8rem,4.5vw,7rem)] text-primary"
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
          className="leading-[clamp(2rem,7vw,14rem)] uppercase font-bold font-inter tracking-[clamp(-0.1rem,-0.2vw,-0.6rem)] text-[clamp(1.7rem,7vw,14rem)] text-primary"
        >
          Front-End Developer
        </motion.p>
      </div>
    </motion.div>
  );
}
