'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.5, 1]
      }
    }
  };
  return (
    <section ref={ref} id="hero">
      <motion.div
        style={{ y: heroY }}
        initial={{ willChange: 'transform' }}
        className="bg-primary relative z-0 h-svh"
      >
        <div className="container-content h-full">
          <motion.div
            style={{ y: textY }}
            className="flex flex-col justify-center h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="-mt-[49px]">
              <motion.h1
                className="leading-[clamp(1.6rem,3vw,3rem)] uppercase font-medium font-inter tracking-[clamp(-0.2rem,-0.1vw,-0.3rem)] text-[clamp(1.8rem,4.5vw,7rem)] text-primary"
                variants={itemVariants}
              >
                Mark Donatelli
              </motion.h1>
            </div>
            <div>
              <motion.p
                className="leading-[clamp(2rem,7vw,10rem)] uppercase font-bold font-inter tracking-[clamp(-0.1rem,-0.2vw,-0.6rem)] text-[clamp(1.7rem,7vw,8rem)] text-primary"
                variants={itemVariants}
              >
                Front-End Developer
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
