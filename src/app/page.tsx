'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  useEffect(() => {
    const docBody = document.querySelector('body');
    const docHtml = document.querySelector('html');

    if (showIntro) {
      docBody?.classList.add('overflow-hidden');
      docHtml?.classList.add('overflow-hidden');
    } else {
      docBody?.classList.remove('overflow-hidden');
      docHtml?.classList.remove('overflow-hidden');
    }
    return () => {
      docBody?.classList.remove('overflow-hidden');
      docHtml?.classList.remove('overflow-hidden');
    };
  }, [showIntro]);

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
            className="bg-primary relative z-0"
          >
            <div className="container-content">
              <motion.div
                style={{ y: textY }}
                className="flex flex-col justify-between py-40 md:py-60 leading-[1] text-[clamp(2.5rem,7vw,6.3rem)] font-medium text-navy-dark dark:text-white uppercase"
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

        <section className="h-screen bg-primary relative z-10" id="about">
          <div className="container-content">
            <div className="flex flex-col border-t justify-between py-20 leading-[1] text-[clamp(2.5rem,7vw,6.3rem)] font-medium text-navy-dark dark:text-white uppercase">
              <div>
                <h1>About Me</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
