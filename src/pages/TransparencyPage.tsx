import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  ShieldCheck, 
  Lock, 
  Scale
} from 'lucide-react';
import { GOVERNANCE_POLICIES } from '../data/foundationData';

export const TransparencyPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState<string>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'governance', label: 'Foundation Governance' },
    { id: 'financials', label: 'Financial Reports' },
    { id: 'treasury', label: 'Treasury Policy' },
    { id: 'grants', label: 'Milestone Disbursals' },
  ];

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            FIDUCIARY INTEGRITY
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Transparency Center
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            The central institutional registry for MONETA GLOBAL FOUNDATION bylaws, multisig treasury policies, financial disclosures, and open audit reports.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-[#15171A] rounded-lg border border-[#202328]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded text-xs font-mono transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#FFFFFF] text-[#050505] font-bold'
                  : 'text-[#A7ADB5] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-2">
                TRANSPARENCY STANDARD
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4">
                Open Governance by Design
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
                All financial disbursements, audit summaries, conflict-of-interest declarations, and grant decisions are subject to independent public review and published openly in accordance with our non-profit charter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] space-y-1">
                  <span className="font-mono text-white block uppercase">Multisig Quorum</span>
                  <p className="text-[#A7ADB5]">4-of-7 independent cryptographic keys required for any spend authorization.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] space-y-1">
                  <span className="font-mono text-white block uppercase">Zero Single Authorization</span>
                  <p className="text-[#A7ADB5]">No single director or executive holds unilateral disbursement keys.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] space-y-1">
                  <span className="font-mono text-white block uppercase">Public Registry</span>
                  <p className="text-[#A7ADB5]">Quarterly statements published under open, machine-readable formats.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#15171A] p-6 rounded-xl border border-[#202328] space-y-3">
                <h3 className="text-base font-bold text-white font-display">
                  Fiduciary Audit Reports
                </h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed">
                  Review complete quarterly financial statements, balance reconciliations, and independent CPA verification documents.
                </p>
                <button
                  onClick={() => navigateTo('reports')}
                  className="text-xs font-mono text-white hover:text-[#A7ADB5] transition-colors"
                >
                  View Reports &amp; Documentation &rarr;
                </button>
              </div>

              <div className="bg-[#15171A] p-6 rounded-xl border border-[#202328] space-y-3">
                <h3 className="text-base font-bold text-white font-display">
                  Grant Milestone Verifications
                </h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed">
                  Access transparent milestone evaluation logs for all funded developer, research, and public good projects.
                </p>
                <button
                  onClick={() => navigateTo('grants')}
                  className="text-xs font-mono text-white hover:text-[#A7ADB5] transition-colors"
                >
                  Inspect Disbursed Grants Ledger &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT: GOVERNANCE / POLICIES */}
        {(activeTab === 'governance' || activeTab === 'policies') && (
          <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] space-y-6">
            <h2 className="text-2xl font-bold font-display text-white mb-4">
              Foundation Governance Policies
            </h2>
            <div className="divide-y divide-[#202328]">
              {GOVERNANCE_POLICIES.map((p) => (
                <div key={p.id} className="py-4 space-y-1">
                  <div className="flex justify-between text-xs font-mono text-[#A7ADB5]">
                    <span>{p.category}</span>
                    <span className="text-white">v{p.version} &bull; {p.lastUpdated}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-[#A7ADB5]">{p.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB CONTENT: FINANCIALS / TREASURY */}
        {(activeTab === 'financials' || activeTab === 'treasury') && (
          <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] space-y-6">
            <h2 className="text-2xl font-bold font-display text-white mb-2">
              Treasury Reserve Policy &amp; Multisig Controls
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
              The Foundation maintains a conservative, long-term treasury management policy designed to guarantee continuous multi-year runway for developer grants and core public goods regardless of market cycles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
                <span className="font-mono text-white text-xs block uppercase">Separation of Capital</span>
                <p className="text-xs text-[#A7ADB5]">Grant reserves are strictly segregated from operational buffers to insulate developer payouts.</p>
              </div>
              <div className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
                <span className="font-mono text-white text-xs block uppercase">Public Address Verification</span>
                <p className="text-xs text-[#A7ADB5]">Treasury multi-sig contract addresses are verified publicly and published with quarterly attestations.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT: GRANTS */}
        {activeTab === 'grants' && (
          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328] space-y-4">
            <h2 className="text-2xl font-bold font-display text-white">
              Grant Milestone Disbursal Policy
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
              Every grant awarded by the Foundation is disbursed incrementally across three verified milestones. Code must be published under approved open licenses and peer-reviewed by the Evaluation Council prior to capital release.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('grants')}
                className="px-5 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
              >
                Go to Full Grants Ledger
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
