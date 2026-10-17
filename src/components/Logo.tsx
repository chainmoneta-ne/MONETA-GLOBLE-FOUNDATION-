import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | number;
  hideText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '', 
  size = 'md',
  hideText = false 
}) => {
  // Dimension calculation
  let pixelSize = 36;
  if (typeof size === 'number') {
    pixelSize = size;
  } else if (size === 'sm') {
    pixelSize = 28;
  } else if (size === 'lg') {
    pixelSize = 44;
  } else {
    pixelSize = 36;
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Foundation Crest — Universal Black & Silver */}
      <div 
        className="flex-shrink-0 flex items-center justify-center"
        style={{ width: `${pixelSize}px`, height: `${pixelSize}px` }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Outer Hexagonal Shield */}
          <polygon
            points="50,6 90,28 90,72 50,94 10,72 10,28"
            fill="#15171A"
            stroke="#A7ADB5"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Inner Geometric Shield Line */}
          <polygon
            points="50,18 80,34 80,66 50,82 20,66 20,34"
            fill="#050505"
            stroke="#202328"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Central Keystone Monogram 'M' in Pure White */}
          <path
            d="M34 64V38L50 52L66 38V64"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Apex Keystone Node */}
          <circle cx="50" cy="24" r="3.5" fill="#FFFFFF" />
          {/* Foundation Base Nodes in Silver */}
          <circle cx="34" cy="64" r="2.5" fill="#A7ADB5" />
          <circle cx="66" cy="64" r="2.5" fill="#A7ADB5" />
          <circle cx="50" cy="52" r="3" fill="#FFFFFF" />
        </svg>
      </div>

      {!hideText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold tracking-wider text-sm sm:text-base text-[#FFFFFF]">
              MONETA
            </span>
            <span className="font-medium tracking-wider text-[10px] text-[#A7ADB5] uppercase">
              GLOBAL
            </span>
          </div>
          <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#A7ADB5]">
            FOUNDATION
          </span>
        </div>
      )}
    </div>
  );
};
