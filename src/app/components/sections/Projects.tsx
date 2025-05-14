import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import BorderReveal from '../BorderReveal';
import { motion, useInView } from 'framer-motion';

/*
projects data
*/
const projectsData = [
  {
    id: 1,
    title: 'Sumitomo Pharma',
    description: 'jQuery | Grunt | Bootstrap ',
    image: '/images/sumi.png',
    link: 'https://www.us.sumitomo-pharma.com/'
  },

  {
    id: 2,
    title: 'Gemtesa',
    description: 'Vue | Nuxt | Tailwind',
    image: '/images/gemtesa.png',
    link: 'https://www.gemtesa.com/'
  },
  {
    id: 3,
    title: 'SMPA Med Affairs',
    description: 'Vue | Nuxt | Tailwind',
    image: '/images/medaffairs.png',
    link: 'https://www.smpamedicalaffairs.com/'
  },
  {
    id: 4,
    title: 'Rethymic',
    description: 'Vue | Nuxt | Tailwind',
    image: '/images/rethymic.png',
    link: 'https://www.rethymic.com/'
  },
  {
    id: 5,
    title: 'Orgovyx Canada',
    description: 'Vue | Nuxt | Tailwind',
    image: '/images/org.png',
    link: 'https://www.orgovyx.ca/'
  },
  {
    id: 6,
    title: 'Turn It Up!',
    description: 'Vue | Nuxt | Tailwind',
    image: '/images/tiu.png',
    link: 'https://turnitupcoverband.com'
  },
  {
    id: 7,
    title: 'IP Address Tracker',
    description: 'Vue | Tailwind',
    image: '/images/iptracker.png',
    link: 'https://markdonatelli-ip-checker.netlify.app/'
  },
  {
    id: 8,
    title: 'Posts App',
    description: 'Vue | Tailwind',
    image: '/images/posts.png',
    link: 'https://markdonatelli-posts.netlify.app/'
  },
  {
    id: 9,
    title: 'Notes App',
    description: 'Vue | Tailwind',
    image: '/images/noteballs.png',
    link: 'https://noteballs-app.netlify.app/#/auth'
  }
];

/*
framer animations
*/
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

/*
project component
*/

interface ProjectProps {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
}

const Project = ({ title, description, image, link }: ProjectProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      variants={itemVariants}
      className="block"
    >
      <div className="flex flex-col group">
        <Image
          className="w-full"
          src={image || ''}
          width={504}
          height={379}
          alt="project"
        />

        <div className="pt-2 pb-4 sm:pb-2 font-aze">
          <div className="relative h-10 overflow-hidden dark:text-neutral-lightBeige text-navy-dark">
            <div className="absolute cursor-pointer items-center w-full flex justify-between transition-transform duration-300 sm:group-hover:-translate-y-full">
              <p className="font-medium font-inter text-2xl sm:text-3xl">
                {title}
              </p>
              <p className="font-medium hidden font-inter text-lg sm:flex items-center gap-2">
                View Project
                <ArrowRightCircleIcon className="size-6 dark:text-neutral-lightBeige text-navy-dark" />
              </p>
            </div>

            <div className="absolute hidden sm:flex cursor-pointer w-full items-center  justify-between transition-transform duration-300 translate-y-full group-hover:translate-y-0">
              <div className="relative">
                <p className="font-medium font-inter text-3xl">{title}</p>
                <div className="absolute left-0 bottom-0 dark:bg-neutral-lightBeige bg-navy-dark h-[2px] w-full scale-x-0 origin-left transition-transform duration-500 ease-in-out delay-100 group-hover:scale-x-100"></div>
              </div>

              <p className="font-medium font-inter text-lg flex items-center gap-2">
                View Project
                <ArrowRightCircleIcon className="size-6  dark:text-neutral-lightBeige text-navy-dark -rotate-[35deg]" />
              </p>
            </div>
          </div>

          <div className="dark:text-neutral-lightBeige text-navy-dark sm:mt-2">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

/*
projects section
*/
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="bg-primary relative z-10 pb-[75px] font-inter"
      id="projects"
    >
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

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5"
        >
          {projectsData.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
