'use client';

import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <main>
        <div className="container-content">
          <div className="flex flex-col justify-between pt-60 pb-[120px]">
            <div>
              <h1 className="leading-[1] text-[86px] 2xl:text-[100px] font-medium text-navy-dark dark:text-white uppercase">
                Hi, I&apos;m Mark
                <br /> Front-End Developer
                <br /> & Creative Problem-Solver
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
