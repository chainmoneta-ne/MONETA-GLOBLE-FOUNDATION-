import React from 'react';
import { Clock, Bell, ShieldCheck } from 'lucide-react';
import { StatusBadge, StatusType } from './StatusBadge';

interface UnderDevelopmentNoticeProps {
  title?: string;
  description?: string;
  status?: StatusType;
  onNotifyClick?: () => void;
  actionLabel?: string;
  className?: string;
}

export const UnderDevelopmentNotice: React.FC<UnderDevelopmentNoticeProps> = ({
  title = 'THIS SERVICE IS CURRENTLY UNDER DEVELOPMENT',
  description = 'MONETA GLOBAL FOUNDATION is actively preparing this official program and technical infrastructure. Services will be made available when the program is officially launched and audited.',
  status = 'UNDER DEVELOPMENT',
  onNotifyClick,
  actionLabel = 'NOTIFY ME WHEN AVAILABLE',
  className = '',
}) => {
  return (
    <div
      className={`bg-[#15171A] border border-[#202328] rounded-2xl p-6 sm:p-8 relative ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#202328]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#202328] border border-[#A7ADB5]/20 flex items-center justify-center flex-shrink-0 text-[#FFFFFF]">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block">
              Official Program Status
            </span>
            <h4 className="text-base sm:text-lg font-bold text-[#FFFFFF] font-display">
              {title}
            </h4>
          </div>
        </div>

        <StatusBadge status={status} size="md" />
      </div>

      <div className="pt-4">
        <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {onNotifyClick && (
            <button
              onClick={onNotifyClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>{actionLabel}</span>
            </button>
          )}

          <div className="inline-flex items-center gap-2 text-[11px] text-[#A7ADB5] bg-[#202328]/60 px-3 py-2 rounded-lg border border-[#202328]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFFFFF]" />
            <span>Official Launch Announcements via Moneta Dispatches</span>
          </div>
        </div>
      </div>
    </div>
  );
};
