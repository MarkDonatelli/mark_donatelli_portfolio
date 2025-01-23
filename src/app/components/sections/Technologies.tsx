'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BorderReveal from '../BorderReveal';

export function InfiniteCarousel() {
  const rowItems = [
    '/react.svg',
    '/react.svg',
    '/react.svg',
    '/react.svg',
    '/react.svg'
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
          duration: 20
        }}
        style={{
          transform: `translateX(0)`
        }}
      >
        {items.map((item, index) => (
          <div
            key={`row1-${index}`}
            className="flex justify-center mb-5 items-center rounded-2xl dark:border-neutral-lightBeige border-navy-dark border-2 h-[375px] min-w-[375px]"
          >
            <Image
              className="w-auto"
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
          duration: 20
        }}
        style={{
          transform: `translateX(0)`
        }}
      >
        {items.map((item, index) => (
          <div
            key={`row2-${index}`}
            className="dark:border-neutral-lightBeige border-navy-dark flex justify-center items-center rounded-2xl border-2 h-[375px] min-w-[375px]"
          >
            <Image
              className="w-auto"
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
  return (
    <section className="bg-primary relative z-10" id="skills">
      <div className="container-content">
        <BorderReveal />
        <div className="flex flex-col pt-3">
          <div>
            <h2 className="heading-2 mb-16">Technologies</h2>
          </div>
        </div>
      </div>

      <div className="relative">
        <InfiniteCarousel />
      </div>
    </section>
  );
}
