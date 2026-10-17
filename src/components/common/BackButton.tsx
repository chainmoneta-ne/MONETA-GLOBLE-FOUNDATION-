import React from 'react';
import { useNavigation, PageId, PAGE_ROUTES } from '../../context/NavigationContext';

interface BackButtonProps {
  customTarget?: PageId;
  label?: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  customTarget,
  label,
  className = '',
}) => {
  const { goBack, navigateTo, parentPage } = useNavigation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (customTarget) {
      navigateTo(customTarget, { scrollUp: true });
    } else {
      goBack();
    }
  };

  const targetTitle = customTarget
    ? PAGE_ROUTES[customTarget]?.title.split('|')[0].trim()
    : parentPage
    ? PAGE_ROUTES[parentPage]?.title.split('|')[0].trim()
    : 'Home';

  // Standard official display format: "← BACK" (or custom label if explicitly specified)
  const displayLabel = label || '← BACK';

  return (
    <div className={`mb-6 pt-2 sm:pt-4 ${className}`}>
      <button
        onClick={handleClick}
        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15171A] border border-[#202328] hover:border-[#A7ADB5] text-[#A7ADB5] hover:text-[#FFFFFF] text-xs font-semibold tracking-wider transition-all focus:outline-none focus:ring-1 focus:ring-[#A7ADB5]"
        aria-label={`Go back (destination: ${targetTitle})`}
      >
        <span className="font-mono text-xs font-bold tracking-wider">{displayLabel}</span>
      </button>
    </div>
  );
};
