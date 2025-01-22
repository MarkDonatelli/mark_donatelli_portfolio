'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function InfiniteCarousel() {
  const rowItems = [
    '/react.svg',
    '/react.svg',
    '/react.svg',
    '/react.svg',
    '/react.svg'
  ];

  const items = [...rowItems, ...rowItems]; // Duplicate items for smooth looping
  const itemWidth = 375;
  const gap = 20;

  return (
    <div className="relative overflow-hidden w-full space-y-5">
      {/* Fade Shadows */}
      <div className="absolute w-[10%] left-0 top-0 bg-gradient-to-r from-navy-dark via-navy-dark/70 to-transparent z-20 h-full"></div>
      <div className="absolute w-[10%] right-0 top-0 bg-gradient-to-l from-navy-dark via-navy-dark/70 to-transparent z-20 h-full"></div>

      {/* Scrolling Row */}
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
            className="border-white flex justify-center items-center rounded-2xl border-2 h-[375px] min-w-[375px]"
          >
            <Image
              src={item}
              alt={`Image ${index + 1}`}
              width="100"
              height="100"
            />
          </div>
        ))}
      </motion.div>

      {/* Reverse Scrolling Row */}
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
            className="border-white flex justify-center items-center rounded-2xl border-2 h-[375px] min-w-[375px]"
          >
            <Image
              src={item}
              alt={`Image ${index + 1}`}
              width="100"
              height="100"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="h-screen bg-primary relative z-10" id="skills">
      <div className="bg-primary">
        <div className="container-content">
          <div className="flex flex-col border-t dark:border-white border-navy-dark justify-between py-20 leading-[1] text-[clamp(2.5rem,7vw,6.3rem)] font-medium text-navy-dark dark:text-white uppercase">
            <div>
              <h2 className="text-lg inline-block font-black border-b border-accent-blue">
                Skills
              </h2>
              <h3>Technologies & Software I Work With</h3>
            </div>
          </div>
        </div>

        <div className="relative">
          <InfiniteCarousel />
        </div>
      </div>
    </section>
  );
}
