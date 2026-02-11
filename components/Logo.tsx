 import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'custom';
  customSize?: string;
  hoverable?: boolean;
  className?: string;
  pColor?: string; // Letter P Color
  fColor?: string; // Letter F color
  spacing?: number; // Separation between F and P
}

const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  customSize,
  hoverable = true,
  className = '',
  pColor = '#FF8A8A',
  fColor = '#000000',
  spacing = 0
}) => {
  // Default size configuration
  const sizeConfig = {
    small: {
      container: 'scale-[0.3] -my-12',
      text: 'text-[8rem]',
      pPosition: 'top-5 -right-4'
    },
    medium: {
      container: 'scale-[0.3] sm:scale-[0.4] md:scale-100 -my-12 sm:-my-8 md:my-0',
      text: 'text-[15rem] lg:text-[25rem]',
      pPosition: 'top-10 lg:top-20 -right-8 lg:-right-16'
    },
    large: {
      container: 'scale-100 my-0',
      text: 'text-[30rem]',
      pPosition: 'top-24 -right-20'
    },
    custom: {
      container: 'scale-100 my-0',
      text: customSize || 'text-[15rem]',
      pPosition: 'top-10 -right-8'
    }
  };

  const config = sizeConfig[size];
  const hoverClass = hoverable ? 'group-hover:scale-105' : '';

  return (
    <div className={`flex justify-center lg:justify-end lg:pe-10 ${config.container} ${className}`}>
      <div className="relative group">
        <div className={`${config.text} elegant-font leading-none select-none flex items-center transition-gentle ${hoverClass}`} style={{ gap: `${spacing}rem` }}>
          <span className="z-10" style={{ color: fColor }}>F</span>
          <span
            className={`italic font-light absolute ${config.pPosition} opacity-90 drop-shadow-sm`}
            style={{ color: pColor }}
          >
            P
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;