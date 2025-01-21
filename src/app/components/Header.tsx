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
    <div className="container-content py-6 flex w-full dark:text-white text-navy-dark justify-between">
      <ul className="flex gap-12 text-base uppercase font-medium font-inter">
        <li>Home</li>
        <li>About</li>
      </ul>

      <div className="font-inter font-medium text-2xl uppercase">
        <p>Mark Donatelli</p>
      </div>

      <ul className="flex gap-8 text-base uppercase font-medium font-inter">
        <li>Work</li>
        <li>Contact</li>
        <li>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? (
              <SunIcon className="size-6 text-white" />
            ) : (
              <MoonIcon className="size-6 text-navy-dark" />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}
