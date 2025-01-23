import { useRef } from 'react';
import BorderReveal from '../BorderReveal';
import { motion, useInView } from 'framer-motion';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-primary relative z-10" id="aboutme">
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
              Projects
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
