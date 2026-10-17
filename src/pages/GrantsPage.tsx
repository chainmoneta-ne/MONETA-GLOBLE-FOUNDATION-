import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  FileCode, 
  Search, 
  Layers,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { GRANTS_DATA } from '../data/foundationData';
import { StatusBadge } from '../components/common/StatusBadge';
import { UnderDevelopmentNotice } from '../components/common/UnderDevelopmentNotice';
import { WaitlistModal } from '../components/common/WaitlistModal';

export const GrantsPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const categories = ['All', 'Wallets', 'Infrastructure', 'Developer Tools', 'Security', 'Research', 'Payments', 'Interoperability'];

  const filteredGrants = GRANTS_DATA.filter((grant) => {
    const matchesCat = selectedCategory === 'All' || grant.category === selectedCategory;
    const matchesSearch =
      grant.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grant.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grant.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            NON-DILUTIVE FUNDING
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            MONETA Grants Program
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Supporting independent developers, university research teams, and open-source infrastructure contributors through transparent, milestone-verified capital grants.
          </p>
        </div>

        {/* Application Status Banner */}
        <div className="mb-12">
          <UnderDevelopmentNotice
            title="APPLICATIONS ARE CURRENTLY UNDER DEVELOPMENT"
            description="MONETA GLOBAL FOUNDATION is preparing its official funding and grant application system. Applications will open when the program is officially launched. You may register for official launch notification below."
            status="UNDER DEVELOPMENT"
            onNotifyClick={() => setIsWaitlistOpen(true)}
            actionLabel="NOTIFY ME WHEN APPLICATIONS OPEN"
          />
        </div>

        {/* 4 Grant Tracks & Criteria */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
              GRANT CATEGORIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-display mt-1 mb-2">
              Focus Areas &amp; Evaluation Pillars
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5]">
              Grants are evaluated based on open-source accessibility, technical feasibility, security rigor, and long-term public benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-[#050505] border border-[#202328]">
              <div className="w-10 h-10 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white mb-4">
                <FileCode className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#FFFFFF] font-display mb-1">
                Developer Tooling
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Compilers, SDKs, debuggers, smart contract simulation environments, and local node harnesses.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#050505] border border-[#202328]">
              <div className="w-10 h-10 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#FFFFFF] font-display mb-1">
                Core Infrastructure
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Light clients, decentralized RPC relays, state indexers, and low-bandwidth client software.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#050505] border border-[#202328]">
              <div className="w-10 h-10 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#FFFFFF] font-display mb-1">
                Security &amp; Auditing
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Formal verification specifications, automated bytecode analyzers, and independent security reviews.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#050505] border border-[#202328]">
              <div className="w-10 h-10 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#FFFFFF] font-display mb-1">
                Applied Cryptography
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Zero-knowledge recursive proving circuits, post-quantum signatures, and privacy-preserving primitives.
              </p>
            </div>
          </div>
        </div>

        {/* Grants Transparency Ledger */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
                DISBURSED CAPITAL LEDGER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-display mt-1">
                Public Grant Disbursements
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#FFFFFF] text-[#050505] font-bold'
                      : 'bg-[#050505] text-[#A7ADB5] hover:text-white border border-[#202328]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search box */}
          <div className="mb-6 relative">
            <Search className="w-4 h-4 text-[#A7ADB5] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project, recipient, or category..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm text-white placeholder-[#A7ADB5]/60 focus:outline-none focus:border-[#A7ADB5]"
            />
          </div>

          {/* Grants list */}
          <div className="divide-y divide-[#202328]">
            {filteredGrants.map((grant) => (
              <div key={grant.id} className="py-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A7ADB5]">
                    <span className="text-white font-bold">{grant.id}</span>
                    <span>&bull;</span>
                    <span>{grant.category}</span>
                    <span>&bull;</span>
                    <span>{grant.region}</span>
                  </div>
                  <div className="text-sm font-bold font-mono text-white tabular-nums">
                    {grant.amount}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-display">
                  {grant.project}
                </h3>

                <p className="text-xs text-[#A7ADB5] leading-relaxed">
                  Recipient: <span className="text-white">{grant.recipient}</span> &bull; Status: <span className="text-white">{grant.status}</span> &bull; {grant.results}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-xl bg-[#15171A] border border-[#202328] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Have an Open-Source Public Good Proposal?
            </h3>
            <p className="text-xs text-[#A7ADB5] mt-1">
              Read the applicant requirements and prepare your documentation in advance.
            </p>
          </div>
          <button
            onClick={() => navigateTo('apply-funding')}
            className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
          >
            Apply for Funding
          </button>
        </div>

      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="Moneta Grants Program (Cohort 4)"
        defaultCategory="Developer Grants"
      />
    </div>
  );
};
