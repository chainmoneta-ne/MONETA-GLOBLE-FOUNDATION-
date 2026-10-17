import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Scale
} from 'lucide-react';
import { GOVERNANCE_POLICIES } from '../data/foundationData';

export const GovernancePage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            FIDUCIARY CHARTER &amp; BYLAWS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Governance &amp; Independence Charter
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            A constitutional governance model ensuring the Foundation operates with strict fiduciary discipline, multisig treasury controls, public conflict-of-interest disclosures, and zero unilateral network control.
          </p>
        </div>

        {/* Core Distinction: Foundation Support vs Network Control */}
        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] mb-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-2">
              FOUNDATIONAL SEPARATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4">
              Foundation Support vs. Network Control
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
              MONETA GLOBAL FOUNDATION is designed as an independent ecosystem steward. The Foundation supports developers, research, education, security, communities, infrastructure, and ecosystem growth. It does not have unilateral control over MONETA CHAIN.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
                <span className="font-mono text-white block uppercase tracking-wider">
                  What the Foundation Governs:
                </span>
                <p className="text-[#A7ADB5]">&bull; Disbursal of non-dilutive research and developer grants.</p>
                <p className="text-[#A7ADB5]">&bull; Curriculum standards and free education for Moneta Academy.</p>
                <p className="text-[#A7ADB5]">&bull; Independent third-party security audits and bug bounty reserves.</p>
                <p className="text-[#A7ADB5]">&bull; Regional community chapter subsidies and event grants.</p>
              </div>

              <div className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
                <span className="font-mono text-white block uppercase tracking-wider">
                  What the Foundation CANNOT Do:
                </span>
                <p className="text-[#A7ADB5]">&bull; Cannot halt, reverse, or censor transactions on Moneta Chain.</p>
                <p className="text-[#A7ADB5]">&bull; Cannot unilaterally appoint or dismiss independent network validators.</p>
                <p className="text-[#A7ADB5]">&bull; Cannot modify consensus protocol rules without decentralized quorum.</p>
                <p className="text-[#A7ADB5]">&bull; Cannot freeze, seize, or control private user balances.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Foundation Governance Policies */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
              ETHICAL BYLAWS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-display mt-1 mb-2">
              Constitutional Policies &amp; Bylaws
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5]">
              Formal policies ratified by the Foundation Board of Trustees to prevent conflicts of interest and maintain public trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GOVERNANCE_POLICIES.map((policy) => (
              <div
                key={policy.id}
                className="p-6 rounded-lg bg-[#050505] border border-[#202328] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#A7ADB5] mb-2">
                    <span>{policy.category}</span>
                    <span className="text-white">v{policy.version}</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-display mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-xs text-[#A7ADB5] leading-relaxed">
                    {policy.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#202328] text-[11px] font-mono text-[#A7ADB5]">
                  Last Updated: {policy.lastUpdated}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Transparency Center */}
        <div className="p-8 rounded-xl bg-[#15171A] border border-[#202328] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Review Open Financial Allocations
            </h3>
            <p className="text-xs text-[#A7ADB5] mt-1">
              Inspect multi-signature treasury reserves and real-time ledger accounting.
            </p>
          </div>
          <button
            onClick={() => navigateTo('transparency')}
            className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
          >
            Visit Transparency Center
          </button>
        </div>

      </div>
    </div>
  );
};
