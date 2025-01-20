import React from 'react';

interface TailwindSizeDisplayProps {
  positionClasses?: string;
}

export const TailwindSizeDisplay: React.FC<TailwindSizeDisplayProps> = ({}) => {
  const breakpoints: Array<keyof typeof breakpointClasses> = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl'
  ];
  const breakpointClasses = {
    xs: 'block sm:hidden',
    sm: 'hidden sm:block md:hidden',
    md: 'hidden md:block lg:hidden',
    lg: 'hidden lg:block xl:hidden',
    xl: 'hidden xl:block 2xl:hidden',
    '2xl': 'hidden 2xl:block'
  };

  return (
    <div
      className={`fixed right-3 bottom-3 z-50 flex h-10 items-center justify-center rounded-full bg-gray-800 p-3 font-geo text-sm text-white`}
    >
      {breakpoints.map((bp) => (
        <div key={bp} className={breakpointClasses[bp]}>
          breakpoint: {bp}
        </div>
      ))}
    </div>
  );
};

export default TailwindSizeDisplay;
