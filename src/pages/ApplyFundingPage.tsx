import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Target, 
  Clock, 
  Bell, 
  CheckCircle2, 
  ShieldCheck, 
  FileCode, 
  HelpCircle
} from 'lucide-react';
import { StatusBadge } from '../components/common/StatusBadge';
import { WaitlistModal } from '../components/common/WaitlistModal';

export const ApplyFundingPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton customTarget="grants" />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            GRANT APPLICATION PORTAL
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Apply for Funding
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Non-dilutive capital grants for open-source developers, academic cryptographers, and public-good infrastructure teams building the decentralized future.
          </p>
        </div>

        {/* Official Under-Development Announcement Banner */}
        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] mb-12 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#202328]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#202328] border border-[#A7ADB5]/20 flex items-center justify-center flex-shrink-0 text-white">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7ADB5] block">
                  Application Portal Status
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                  APPLICATIONS ARE CURRENTLY UNDER DEVELOPMENT
                </h2>
              </div>
            </div>

            <StatusBadge status="UNDER DEVELOPMENT" size="lg" />
          </div>

          <div className="pt-6">
            <p className="text-sm text-[#FFFFFF] leading-relaxed mb-4">
              MONETA GLOBAL FOUNDATION is preparing its official funding and grant application system. Applications will open when the program is officially launched.
            </p>
            <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-8 max-w-3xl">
              During this preparation phase, the Grant Evaluation Council is finalizing the multi-stage review criteria, milestone verification mechanisms, and developer sandbox evaluation environments.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="px-6 py-3 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Bell className="w-4 h-4" />
                <span>NOTIFY ME WHEN APPLICATIONS OPEN</span>
              </button>

              <button
                onClick={() => navigateTo('grants')}
                className="px-6 py-3 rounded-lg bg-[#050505] hover:bg-[#202328] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-all border border-[#202328]"
              >
                Review Grant Guidelines
              </button>
            </div>
          </div>
        </div>

        {/* Preparation Checklist */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
              APPLICANT READINESS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1 mb-2">
              What You Can Prepare in Advance
            </h3>
            <p className="text-xs sm:text-sm text-[#A7ADB5]">
              We recommend preparing the following materials prior to the launch of our application intake portal:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF]">
                <FileCode className="w-4 h-4" />
                <span>1. Technical Architecture Specification</span>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Detailed design document describing modular components, cryptographic dependencies, consensus assumptions, and integration points with the Moneta ecosystem.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF]">
                <ShieldCheck className="w-4 h-4" />
                <span>2. Verifiable Milestone Plan</span>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Clear 3-stage deliverables with measurable cryptographic criteria, test coverage benchmarks, and open-source license commitments (MIT/Apache 2.0).
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF]">
                <CheckCircle2 className="w-4 h-4" />
                <span>3. Team Track Record &amp; Proof of Work</span>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Public GitHub/GitLab repositories, peer-reviewed publications, previous open-source contributions, or audit remediation reports.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF]">
                <HelpCircle className="w-4 h-4" />
                <span>4. Public Good Impact Analysis</span>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Explanation of how your tool or research advances ecosystem decentralization, developer ergonomics, security resilience, or accessibility.
              </p>
            </div>
          </div>
        </div>

      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="Moneta Funding & Grant System"
        defaultCategory="Developer Grants"
      />
    </div>
  );
};
