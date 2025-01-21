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
      <h1>Avatar or logo</h1>

      <ul className="flex gap-4">
        <li>About</li>
        <li>About</li>
        <li>About</li>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <SunIcon className="size-6 text-white" />
          ) : (
            <MoonIcon className="size-6 text-navy-dark" />
          )}
        </button>
      </ul>
    </div>
  );
}
