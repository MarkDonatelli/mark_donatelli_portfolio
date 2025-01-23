'use client';

import { useRef } from 'react';
import BorderReveal from '../BorderReveal';
import { motion, useInView } from 'framer-motion';

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-primary relative z-10" id="aboutme">
      <div className="container-content">
        <BorderReveal />
        <div ref={ref} className="flex flex-col pt-3 pb-40 justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
            className="heading-2 mb-16"
          >
            About Mark
          </motion.h2>

          <div className="flex justify-between items-start gap-8">
            <div className="max-w-[150px] w-full">
              <div className="bg-gray-300 w-full p-5 flex items-center justify-center rounded-lg">
                IMAGE
              </div>
            </div>

            <div className="flex max-w-[1000px] gap-8">
              <div>
                <p className="text-lg text-primary font-medium font-inter leading-relaxed">
                  As a skilled front-end developer and designer with over six
                  years of experience, I specialize in crafting intuitive web
                  applications and impactful designs. I seamlessly blend
                  technical expertise with creative design to deliver
                  user-friendly and visually engaging solutions that leave a
                  lasting impression.
                </p>
              </div>
              <div>
                <p className="text-lg text-primary font-inter font-medium leading-relaxed">
                  With a focus on client collaboration, I balance development
                  and design to create tailored digital experiences that align
                  with unique goals. I adapt quickly to emerging technologies
                  and am passionate about the future of development, including
                  leveraging AI to enhance workflows and drive innovation. My
                  work ensures cohesive and impactful results through meticulous
                  attention to detail and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
