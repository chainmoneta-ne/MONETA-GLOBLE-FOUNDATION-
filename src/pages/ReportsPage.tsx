import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  ArrowRight 
} from 'lucide-react';
import { UnderDevelopmentNotice } from '../components/common/UnderDevelopmentNotice';
import { WaitlistModal } from '../components/common/WaitlistModal';

export const ReportsPage: React.FC = () => {
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
            OFFICIAL PUBLICATIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Reports &amp; Documentation
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Access official Foundation publications, research whitepapers, independent security audit findings, and transparency filings.
          </p>
        </div>

        {/* Under-development statement for financial reports */}
        <div className="mb-12">
          <UnderDevelopmentNotice
            title="OFFICIAL ANNUAL AND QUARTERLY REPORTS ARE IN PREPARATION"
            description="THIS INFORMATION WILL BE PUBLISHED WHEN THE FOUNDATION'S OFFICIAL PROGRAM IS OPERATIONAL. Formal audited filings and quarterly stewardship reviews will be indexed here in open PDF and JSON formats."
            status="COMING SOON"
            onNotifyClick={() => setIsWaitlistOpen(true)}
            actionLabel="NOTIFY ME UPON PUBLICATION"
          />
        </div>

        {/* 3 Report Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-5">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#A7ADB5] uppercase tracking-widest block mb-1">
                PEER-REVIEWED
              </span>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Research Whitepapers
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed mb-6">
                Technical scientific manuscripts on post-quantum lattice cryptography, consensus sharding, and formal verification.
              </p>
            </div>
            <button
              onClick={() => navigateTo('research')}
              className="w-full py-2.5 rounded-lg bg-[#050505] hover:bg-[#202328] text-white text-xs font-bold uppercase tracking-wider transition-all border border-[#202328] flex items-center justify-center gap-1.5"
            >
              <span>Explore Research Papers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#A7ADB5] uppercase tracking-widest block mb-1">
                CRYPTOGRAPHIC AUDITS
              </span>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Security Audits &amp; Proofs
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed mb-6">
                Published third-party vulnerability reports, automated formal verification logs, and remediation sign-offs.
              </p>
            </div>
            <button
              onClick={() => navigateTo('security')}
              className="w-full py-2.5 rounded-lg bg-[#050505] hover:bg-[#202328] text-white text-xs font-bold uppercase tracking-wider transition-all border border-[#202328] flex items-center justify-center gap-1.5"
            >
              <span>View Audit Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-5">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#A7ADB5] uppercase tracking-widest block mb-1">
                PUBLIC ACCOUNTABILITY
              </span>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Governance Charters
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed mb-6">
                Institutional bylaws, conflict of interest registries, and foundation multi-sig treasury governance mandates.
              </p>
            </div>
            <button
              onClick={() => navigateTo('governance')}
              className="w-full py-2.5 rounded-lg bg-[#050505] hover:bg-[#202328] text-white text-xs font-bold uppercase tracking-wider transition-all border border-[#202328] flex items-center justify-center gap-1.5"
            >
              <span>View Governance Charter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="Moneta Official Annual & Quarterly Reports"
        defaultCategory="Public Goods"
      />
    </div>
  );
};
