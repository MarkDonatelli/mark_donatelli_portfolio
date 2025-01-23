'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Technologies from './components/sections/Technologies';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <main>
        <section ref={ref} id="hero">
          <motion.div
            style={{ y: heroY }}
            initial={{ willChange: 'transform' }}
            className="bg-primary relative z-0 h-screen"
          >
            <div className="container-content">
              <motion.div
                style={{ y: textY }}
                className="flex flex-col justify-between py-40 md:py-60 heading-1 font-medium text-navy-dark dark:text-neutral-lightBeige uppercase"
              >
                <div>
                  <h1>Hi, I&apos;m Mark</h1>
                </div>
                <div>
                  <h1>Front-End Developer</h1>
                </div>
                <div>
                  <h1>& Creative Problem Solver</h1>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <AboutMe />
        <Technologies />
        <Projects />
      </main>
    </>
  );
}
