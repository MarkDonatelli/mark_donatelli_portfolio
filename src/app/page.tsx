'use client';

import Hero from './components/sections/Hero';
import Technologies from './components/sections/Technologies';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutMe />
        <Technologies />
        <Projects />
      </main>
    </>
  );
}
