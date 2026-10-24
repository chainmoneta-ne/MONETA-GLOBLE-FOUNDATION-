import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  ShieldCheck, 
  Lock, 
  FileCheck2, 
  Key
} from 'lucide-react';
import { SECURITY_AUDITS } from '../data/foundationData';
import { StatusBadge } from '../components/common/StatusBadge';
import { UnderDevelopmentNotice } from '../components/common/UnderDevelopmentNotice';
import { WaitlistModal } from '../components/common/WaitlistModal';

export const SecurityPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            CRYPTOGRAPHIC RIGOR &amp; AUDITS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            MONETA Security Initiatives
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Maintaining world-class ecosystem integrity through continuous formal verification, third-party security audits, safe-harbor bug bounties, and responsible disclosure coordination.
          </p>
        </div>

        {/* Bug Bounty Notice */}
        <div className="mb-12">
          <UnderDevelopmentNotice
            title="OFFICIAL BUG BOUNTY &amp; VULNERABILITY PORTAL IS IN STAGING"
            description="MONETA GLOBAL FOUNDATION maintains a strict Coordinated Vulnerability Disclosure (CVD) policy with safe-harbor protections for ethical researchers. The public reporting dashboard is in final security hardening."
            status="UNDER DEVELOPMENT"
            onNotifyClick={() => setIsWaitlistOpen(true)}
            actionLabel="GET BOUNTY &amp; AUDIT UPDATES"
          />
        </div>

        {/* Security Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-4">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Safe-Harbor Policy
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              We provide full legal safe harbor to white-hat security researchers acting in good faith without intentional system disruption or data harvesting.
            </p>
          </div>

          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-4">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Independent Audits
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              We fund comprehensive independent audits of critical ecosystem libraries and protocols by renowned global cryptographic auditing firms.
            </p>
          </div>

          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Formal Verification
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Advancing automated theorem proving to mathematically verify consensus properties, bridge contracts, and validator state transitions.
            </p>
          </div>
        </div>

        {/* Completed Audits Archive */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
              VERIFIED AUDIT LOGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1 mb-2">
              Published Security Assessments
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5]">
              Complete public audit reports with cryptographic hash signatures and remediation verification.
            </p>
          </div>

          <div className="divide-y divide-[#202328]">
            {SECURITY_AUDITS.map((audit) => (
              <div key={audit.id} className="py-6 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A7ADB5]">
                    <span className="text-white font-bold">{audit.id}</span>
                    <span>&bull;</span>
                    <span>Auditor: {audit.auditor}</span>
                    <span>&bull;</span>
                    <span>{audit.date}</span>
                  </div>
                  <StatusBadge status="LIVE" size="sm" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  {audit.title}
                </h3>

                <p className="text-xs text-[#A7ADB5] leading-relaxed">
                  Findings: {audit.findingsSummary}
                </p>

                <div className="text-[11px] font-mono text-[#A7ADB5] pt-1">
                  Scope: {audit.scope}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Disclosure Contact */}
        <div className="p-8 rounded-xl bg-[#15171A] border border-[#202328] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Reporting a Vulnerability?
            </h3>
            <p className="text-xs text-[#A7ADB5] mt-1">
              Follow our safe-harbor PGP guidelines and reach out directly to the Foundation Security Team.
            </p>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
          >
            Contact Security Team
          </button>
        </div>

      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="Moneta Bug Bounty & Security Registry"
        defaultCategory="Security Audits"
      />
    </div>
  );
};
