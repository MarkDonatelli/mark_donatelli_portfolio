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
        <div className="flex flex-col justify-between py-32 border-b border-white">
          <div>
            <h1 className="leading-[1] text-[86px] 2xl:text-[100px]  font-medium text-white uppercase">
              Hi, I&apos;m Mark!
              <br /> Front-End Developer
              <br /> & Creative Problem-Solver
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
