'use client';

export default function AboutMe() {
  return (
    <section className="h-screen bg-primary relative z-10" id="aboutme">
      <div className="bg-primary">
        <div className="container-content">
          <div className="flex flex-col border-t dark:border-white border-navy-dark justify-between py-20 leading-[1] text-[clamp(2.5rem,7vw,6.3rem)] font-medium text-navy-dark dark:text-white uppercase">
            <div>
              <h2 className="text-lg inline-block font-black border-b border-accent-blue">
                About Me
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
