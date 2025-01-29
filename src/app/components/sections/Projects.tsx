import { useRef } from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import BorderReveal from '../BorderReveal';
import { motion, useInView } from 'framer-motion';

/*
projects data
*/
const projectsData = [
  {
    id: 1,
    title: 'Aptiom',
    description: 'This is the first project.',
    image: 'IMAGE1',
    link: 'https://Aptiom.com'
  },
  {
    id: 2,
    title: 'Aptiom HCP',
    description: 'This is the second project.',
    image: 'IMAGE2',
    link: 'https://Aptiomhcp.com'
  },
  {
    id: 3,
    title: 'Gemtesa',
    description: 'This is the second project.',
    image: 'IMAGE2',
    link: 'https://www.gemtesa.com/'
  },
  {
    id: 4,
    title: 'SMPA Med Affairs',
    description: 'This is the second project.',
    image: 'IMAGE2',
    link: 'https://www.smpamedicalaffairs.com/'
  },
  {
    id: 5,
    title: 'Rethymic',
    description: 'This is the second project.',
    image: 'IMAGE2',
    link: 'https://www.rethymic.com/'
  },
  {
    id: 6,
    title: 'Orgovyx Canada',
    description: 'This is the second project.',
    image: 'IMAGE2',
    link: 'https://www.orgovyx.ca/'
  },
  {
    id: 7,
    title: 'Turn It Up!',
    description: 'This is the third project.',
    image: 'IMAGE3',
    link: 'https://turnitupcoverband.com'
  },
  {
    id: 8,
    title: 'IP Address Tracker',
    description: 'This is the third project.',
    image: 'IMAGE3',
    link: 'https://markdonatelli-ip-checker.netlify.app/'
  },
  {
    id: 9,
    title: 'Posts App',
    description: 'This is the third project.',
    image: 'IMAGE3',
    link: 'https://markdonatelli-posts.netlify.app/'
  },
  {
    id: 10,
    title: 'Notes App',
    description: 'This is the third project.',
    image: 'IMAGE3',
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
        <div className="bg-red-400 rounded-lg flex items-center justify-center">
          {image}
        </div>

        <div className="">
          <div className="relative h-10 overflow-hidden text-white ">
            <div className="absolute cursor-pointer items-center w-full flex justify-between transition-transform duration-300 group-hover:-translate-y-full">
              <p className="font-medium font-inter text-3xl">{title}</p>
              <p className="font-medium font-inter text-lg flex items-center gap-2">
                View Project
                <ArrowRightCircleIcon className="size-6 text-white" />
              </p>
            </div>

            <div className="absolute cursor-pointer w-full items-center flex justify-between transition-transform duration-300 translate-y-full group-hover:translate-y-0">
              <div className="relative">
                <p className="font-medium font-inter text-3xl">{title}</p>
                <div className="absolute left-0 bottom-0 bg-neutral-lightBeige h-[2px] w-full scale-x-0 origin-left transition-transform duration-500 ease-in-out delay-100 group-hover:scale-x-100"></div>
              </div>

              <p className="font-medium font-inter text-lg flex items-center gap-2">
                View Project
                <ArrowRightCircleIcon className="size-6  text-white -rotate-[35deg]" />
              </p>
            </div>
          </div>

          <div className="text-white mt-2">
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
    <section className="bg-primary relative z-10 h-screen" id="aboutme">
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
          className="grid grid-cols-3 gap-5"
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
