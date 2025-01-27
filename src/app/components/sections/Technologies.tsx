'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import BorderReveal from '../BorderReveal';

export function InfiniteCarousel() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;

    const checkDarkMode = () => {
      setIsDarkMode(htmlElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const rowItems = [
    '/logos/react.svg',
    '/logos/next.svg',
    '/logos/vue.svg',
    '/logos/nuxt.svg',
    '/logos/tailwind.svg',
    '/logos/node.svg',
    '/logos/netlify.svg',
    '/logos/html.svg',
    '/logos/javascript.svg',
    '/logos/aws.svg',
    isDarkMode ? '/logos/github-light.svg' : '/logos/github.svg',
    '/logos/gtm.svg',
    '/logos/css.svg',
    '/logos/ga.svg'
  ];

  const items = [...rowItems, ...rowItems];
  const itemWidth = 375;
  const gap = 20;

  return (
    <div className="relative overflow-hidden w-full">
      <div className="dark:absolute dark:w-[10%] dark:left-0 dark:top-0 dark:bg-gradient-to-r dark:from-navy-dark dark:via-navy-dark/70 dark:to-transparent dark:z-20 dark:h-full"></div>
      <div className="dark:absolute dark:w-[10%] dark:right-0 dark:top-0 dark:bg-gradient-to-l dark:from-navy-dark dark:via-navy-dark/70 dark:to-transparent dark:z-20 dark:h-full"></div>

      <div className="absolute w-[10%] left-0 top-0 bg-gradient-to-r from-neutral-lightBeige via-neutral-lightBeige/70 to-transparent z-20 h-full dark:hidden"></div>
      <div className="absolute w-[10%] right-0 top-0 bg-gradient-to-l from-neutral-lightBeige via-neutral-lightBeige/70 to-transparent z-20 h-full dark:hidden"></div>

      {/* row 1 */}
      <motion.div
        className="flex gap-5"
        initial={{ x: 0 }}
        animate={{ x: -(items.length * (itemWidth + gap)) / 2 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 50
        }}
        style={{
          transform: `translateX(0)`
        }}
      >
        {items.map((item, index) => (
          <div
            key={`row1-${index}`}
            className="flex justify-center mb-5 items-center rounded-2xl dark:border-neutral-lightBeige border-navy-dark border-2 h-[200px] min-w-[200px] md:h-[375px] md:min-w-[375px]"
          >
            <Image
              className="w-full max-w-[50px] md:max-w-[100px]"
              src={item}
              alt={`Image ${index + 1}`}
              width="10"
              height="10"
            />
          </div>
        ))}
      </motion.div>

      {/* row 2 */}
      <motion.div
        className="flex gap-5"
        initial={{ x: -(items.length * (itemWidth + gap)) / 2 }}
        animate={{ x: 0 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 50
        }}
        style={{
          transform: `translateX(0)`
        }}
      >
        {items.map((item, index) => (
          <div
            key={`row2-${index}`}
            className="dark:border-neutral-lightBeige border-navy-dark flex justify-center items-center rounded-2xl border-2 h-[200px] min-w-[200px] md:h-[375px] md:min-w-[375px]"
          >
            <Image
              className="w-full max-w-[50px] md:max-w-[100px]"
              src={item}
              alt={`Image ${index + 1}`}
              width="10"
              height="10"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-primary relative z-10" id="technologies">
      <div className="container-content">
        <BorderReveal />
        <div className="flex flex-col pt-3">
          <div ref={ref}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                ease: 'easeInOut'
              }}
              className="heading-2 mb-16"
            >
              Technologies
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="relative pb-20">
        <InfiniteCarousel />
      </div>
    </section>
  );
}
