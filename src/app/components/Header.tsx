'use client';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = [
    { text: 'Mark Donatelli' },
    { text: 'Front-end Developer' },
    {
      text: 'Boston, MA'
    },
    {
      text: 'Contact',
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

  return (
    <header className="bg-primary">
      {' '}
      <div className="container-content py-3 flex w-full text-primary">
        <ul className="flex gap-12 w-full justify-between text-sm uppercase font-light tracking-tight font-aze">
          {navItems.map((item, index) => (
            <li key={index} onClick={item.onClick}>
              {item.text}
            </li>
          ))}
          <li>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <SunIcon className="size-5 text-white" />
              ) : (
                <MoonIcon className="size-5 text-navy-dark" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
