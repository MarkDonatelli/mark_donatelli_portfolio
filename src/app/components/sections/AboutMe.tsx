'use client';

import { useRef } from 'react';
import BorderReveal from '../BorderReveal';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

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

          <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
            <div className="w-full flex justify-center lg:justify-start flex-1">
              <Image
                className="max-w-[752px] w-full mx-auto"
                src="/images/mark-hendrix.png"
                width={752}
                height={691}
                alt="Picture of the author"
              />
            </div>

            <div className="flex flex-col flex-1 gap-8">
              <div>
                <p className="text-lg text-primary font-medium font-inter leading-relaxed">
                  I’m a front-end developer and designer with over six years of
                  experience creating clean, modern, and highly usable websites
                  and web applications. I blend strong visual design instincts
                  with solid development skills to build experiences that not
                  only look great but feel great to use. My work is guided by a
                  deep understanding of user needs and business goals, always
                  aiming to strike the right balance between aesthetics,
                  functionality, and performance.
                </p>
              </div>
              <div>
                <p className="text-lg text-primary font-inter font-medium leading-relaxed">
                  I care about the full picture. Beyond just writing HTML, CSS,
                  and JavaScript, I focus on the things that aren&apos;t always
                  visible but make a huge difference: SEO, accessibility,
                  performance, responsiveness, and all the little UX details
                  that make a site feel polished. These are often overlooked,
                  but they&apos;re what separate a decent website from a truly
                  great one.
                </p>
              </div>

              <div>
                <p className="text-lg text-primary font-inter font-medium leading-relaxed">
                  Over the years, I’ve worked with a wide range of modern tools,
                  frameworks, and libraries including React, Vue, Next.js, Nuxt,
                  Tailwind CSS, Framer Motion, GSAP, and Figma. I’m comfortable
                  across the modern front-end stack and confident jumping into
                  any tech a project requires. I&apos;m a quick learner who
                  enjoys figuring things out and finding better ways to build.
                </p>
              </div>

              <div>
                <p className="text-lg text-primary font-inter font-medium leading-relaxed">
                  Collaboration is a big part of how I work. I thrive when
                  developers, designers, and stakeholders are all working
                  together to bring ideas to life. Whether I’m starting a
                  project from scratch or joining midstream to help get things
                  across the finish line, I take pride in being hands-on,
                  adaptable, and focused on delivering real results.
                </p>
              </div>

              <div>
                <p className="text-lg text-primary font-inter font-medium leading-relaxed">
                  When I’m not coding, you’ll usually find me playing guitar,
                  jamming with my band, or diving into creative side projects. I
                  bring the same energy and attention to detail to my work that
                  I bring to my music: a love of the craft, a drive to improve,
                  and a focus on creating something that resonates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
