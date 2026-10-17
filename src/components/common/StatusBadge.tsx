import React from 'react';

export type StatusType =
  | 'LIVE'
  | 'AVAILABLE'
  | 'UNDER DEVELOPMENT'
  | 'COMING SOON'
  | 'CLOSED'
  | 'MAINTENANCE';

interface StatusBadgeProps {
  status: StatusType;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 gap-1.5',
    md: 'text-[11px] px-2.5 py-1 gap-1.5',
    lg: 'text-xs px-3 py-1.5 gap-2',
  };

  const isLive = status === 'LIVE' || status === 'AVAILABLE';

  return (
    <span
      className={`inline-flex items-center font-mono font-medium uppercase tracking-wider rounded-md border bg-[#15171A] border-[#202328] ${
        isLive ? 'text-[#FFFFFF]' : 'text-[#A7ADB5]'
      } ${sizeClasses[size]} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isLive ? 'bg-[#FFFFFF]' : 'bg-[#A7ADB5]'
        }`}
        aria-hidden="true"
      />
      <span>{status}</span>
    </span>
  );
};
