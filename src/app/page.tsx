'use client';

import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    console.log('Intro complete');
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      <div className="container-content">
        <p className="dark:text-neutral-lightGray text-navy-dark mt-0 text-[3rem]">
          Hi, I&apos;m Mark! A builder of seamless, stunning web experiences
          with a dash of creativity and a whole lot of code.
        </p>

        <div className="flex space-x-4 mt-8">
          <button className="button-primary">View My Work</button>
          <button className="button-primary">Get in Touch</button>
        </div>
      </div>
    </>
  );
}
