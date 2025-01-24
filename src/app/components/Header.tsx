'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = [
    { text: 'Mark Donatelli' },
    { text: 'Developer' },
    {
      text: 'Boston, MA'
    },
    {
      text: 'Contact',
      isClickable: true,
      onClick: () => console.log('Contact clicked')
    }
  ];

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.8, 0.5, 1]
      }
    }
  };

  return (
    <header id="header" className="bg-primary">
      <div className="container-content py-3 flex w-full text-primary">
        <motion.ul
          className="flex gap-12 w-full justify-between text-sm uppercase font-light tracking-tight font-aze"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              onClick={item.onClick}
              className={item.isClickable ? 'cursor-pointer' : ''}
            >
              {item.text}
            </motion.li>
          ))}
          <motion.li variants={itemVariants}>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <SunIcon className="size-5 text-white" />
              ) : (
                <MoonIcon className="size-5 text-navy-dark" />
              )}
            </button>
          </motion.li>
        </motion.ul>
      </div>
    </header>
  );
}
