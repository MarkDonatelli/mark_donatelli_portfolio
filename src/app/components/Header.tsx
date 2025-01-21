'use client';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="container-content py-3 flex w-full dark:text-white text-navy-dark">
      <ul className="flex gap-12 w-full justify-between text-sm uppercase font-light font-aze">
        <li>Mark Donatelli</li>
        <li>Front-end Developer</li>
        <li>Boston, MA</li>
        <li>Contact</li>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <SunIcon className="size-5 text-white" />
          ) : (
            <MoonIcon className="size-5 text-navy-dark" />
          )}
        </button>
      </ul>
    </div>
  );
}
