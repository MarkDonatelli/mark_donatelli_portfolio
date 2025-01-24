'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BorderReveal from '../BorderReveal';

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
            className="flex flex-col justify-center items-center h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="-mt-[49px]">
              <motion.h1
                className="text-center uppercase font-bold font-inter tracking-tighter leading-[clamp(1.5rem,6vw,6.5rem)] text-[clamp(3rem,13vw,13rem)] text-primary mb-[clamp(1rem,2vw,4rem)]"
                variants={itemVariants}
              >
                Mark
              </motion.h1>

              <motion.h1
                className="text-center uppercase font-bold font-inter tracking-tighter leading-none text-[clamp(3rem,13vw,13rem)] text-primary mb-[clamp(1rem,1vw,1rem)]"
                variants={itemVariants}
              >
                Donatelli
              </motion.h1>

              <motion.ul
                className="flex justify-between text-center uppercase font-normal font-aze tracking-tighter text-[clamp(1rem,2vw,1.75rem)] text-navy-dark dark:text-neutral-lightGray"
                variants={itemVariants}
              >
                <li>
                  Design
                  <BorderReveal height="h-[1px] " />
                </li>
                <li>
                  Code <BorderReveal height="h-[1px]" />
                </li>
                <li>
                  Create <BorderReveal height="h-[1px] " />
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
