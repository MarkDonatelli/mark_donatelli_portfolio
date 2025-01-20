import React from 'react';

interface TailwindSizeDisplayProps {
  positionClasses?: string;
}

export const TailwindSizeDisplay: React.FC<TailwindSizeDisplayProps> = ({
  positionClasses = 'bottom-1 left-1'
}) => {
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
      className={`fixed ${positionClasses} z-50 flex h-10 w-14 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-sm text-white`}
    >
      {breakpoints.map((bp) => (
        <div key={bp} className={breakpointClasses[bp]}>
          {bp}
        </div>
      ))}
    </div>
  );
};

export default TailwindSizeDisplay;
