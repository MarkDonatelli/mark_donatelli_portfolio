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

      <div className="homepage-content h-screen bg-custom-gradient text-white font-geo">
        {/* <h1 className="uppercase font-bold font-geo -tracking-[0.4rem] text-[4.5vw] text-white">
          Mark Donatelli
        </h1> */}

        <h1 className=" uppercase font-medium font-geo -tracking-[0.5rem] text-[4.5vw] text-white">
          Mark Donatelli
        </h1>

        <p className="text-neutral-lightGray text-lg leading-relaxed">
          Explore my projects, skills, and get in touch to work together!
        </p>
      </div>
    </>
  );
}
