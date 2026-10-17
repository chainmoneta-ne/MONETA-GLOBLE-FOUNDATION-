import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { 
  Target, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  Users, 
  Globe2, 
  Building2, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Scale, 
  FileText, 
  Clock, 
  Cpu,
  BookOpen,
  Award,
  Terminal,
  Newspaper
} from 'lucide-react';
import { 
  FOUNDATION_STATS, 
  PROGRAM_CARDS, 
  NEWS_AND_REPORTS,
  TREASURY_ALLOCATION
} from '../data/foundationData';
import { EcosystemStatusModal, EcosystemEntity } from '../components/common/EcosystemStatusModal';
import { WaitlistModal } from '../components/common/WaitlistModal';

export const HomePage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedEntity, setSelectedEntity] = useState<EcosystemEntity | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="bg-[#050505] min-h-screen text-[#FFFFFF] font-sans">
      
      {/* 1. HERO SECTION — Clean, Authoritative, Editorial Universal Black */}
      <section className="bg-[#050505] text-[#FFFFFF] relative overflow-hidden pt-16 sm:pt-24 pb-20 sm:pb-28 border-b border-[#202328]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Official Slogan */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#15171A] border border-[#202328] text-[#A7ADB5] text-[11px] font-mono uppercase tracking-[0.25em]">
              <Sparkles className="w-3 h-3 text-[#FFFFFF]" />
              <span>EMPOWER &bull; INNOVATE &bull; UNITE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-[#FFFFFF] leading-[1.12]">
              Supporting the Ecosystem.<br />
              <span className="text-[#A7ADB5]">Protecting Its Independence.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#A7ADB5] leading-relaxed max-w-2xl mx-auto">
              MONETA GLOBAL FOUNDATION is an independent institutional steward dedicated to supporting open-source technology, academic cryptographic research, developer public goods, and global community education.
            </p>

            {/* Institutional Principle */}
            <div className="p-3.5 rounded-lg bg-[#15171A] border border-[#202328] max-w-xl mx-auto text-center">
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                <strong className="text-[#FFFFFF]">Constitutional Principle:</strong> We support MONETA CHAIN. We do not control MONETA CHAIN.
              </p>
            </div>

            {/* Calls to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                onClick={() => navigateTo('apply-funding')}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Target className="w-4 h-4" />
                <span>APPLY FOR FUNDING</span>
              </button>

              <button
                onClick={() => navigateTo('programs')}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#15171A] hover:bg-[#202328] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-all border border-[#202328] flex items-center justify-center gap-2"
              >
                <span>EXPLORE PROGRAMS</span>
                <ArrowRight className="w-4 h-4 text-[#A7ADB5]" />
              </button>
            </div>

          </div>

          {/* Key Metrics Strip — Tabular, Unboxed, Zero-Pill */}
          <div className="mt-16 sm:mt-20 pt-10 border-t border-[#202328] grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#FFFFFF] tabular-nums">
                {FOUNDATION_STATS.totalTreasuryUsd}
              </div>
              <div className="text-xs text-[#A7ADB5] mt-1 font-mono uppercase tracking-wider">
                Treasury Allocation
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#FFFFFF] tabular-nums">
                {FOUNDATION_STATS.totalGrantsDisbursed}
              </div>
              <div className="text-xs text-[#A7ADB5] mt-1 font-mono uppercase tracking-wider">
                Grants Disbursed
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#FFFFFF] tabular-nums">
                {FOUNDATION_STATS.countriesReached}+
              </div>
              <div className="text-xs text-[#A7ADB5] mt-1 font-mono uppercase tracking-wider">
                Countries Reached
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#FFFFFF] tabular-nums">
                {FOUNDATION_STATS.multisigQuorum}
              </div>
              <div className="text-xs text-[#A7ADB5] mt-1 font-mono uppercase tracking-wider">
                Governance Quorum
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. INSTITUTIONAL PURPOSE & CORE PILLARS — Clean Editorial Layout */}
      <section className="py-20 sm:py-28 border-b border-[#202328]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block">
                01. INSTITUTIONAL MANDATE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#FFFFFF] tracking-tight">
                An Independent Steward for Global Public Goods
              </h2>
              <p className="text-sm text-[#A7ADB5] leading-relaxed">
                MONETA GLOBAL FOUNDATION operates as a non-commercial, constitutionally independent entity. Our mandate is to allocate non-dilutive capital, steward peer-reviewed scientific breakthroughs, and cultivate developer ecosystems without exerting unilateral control over decentralized networks.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] hover:text-[#A7ADB5] transition-colors"
                >
                  <span>Read Full Foundation Charter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="border-l border-[#202328] pl-6 py-1 space-y-1">
                <h3 className="text-base font-bold text-[#FFFFFF]">Open Innovation Without Vendor Lock-in</h3>
                <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                  All software architectures funded by the Foundation are distributed under permissive open-source licenses (MIT/Apache 2.0), ensuring public auditability and preventing monopolistic enclosure.
                </p>
              </div>

              <div className="border-l border-[#202328] pl-6 py-1 space-y-1">
                <h3 className="text-base font-bold text-[#FFFFFF]">Rigorous Peer-Reviewed Science</h3>
                <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                  We sponsor fundamental research in post-quantum lattice cryptography, asynchronous consensus protocols, and formal verification frameworks across international universities and laboratories.
                </p>
              </div>

              <div className="border-l border-[#202328] pl-6 py-1 space-y-1">
                <h3 className="text-base font-bold text-[#FFFFFF]">Equitable Global Community Access</h3>
                <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                  Through localized chapters, university programs, and MONETA Academy, we lower technical barriers for engineers in emerging economies with low-bandwidth optimization and localized toolsets.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PROGRAMS DIRECTORY — Clean Editorial Registry Layout */}
      <section className="py-20 sm:py-28 border-b border-[#202328]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
                02. STRATEGIC INITIATIVES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#FFFFFF] tracking-tight">
                Foundation Programs Directory
              </h2>
            </div>
            <button
              onClick={() => navigateTo('programs')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A7ADB5] hover:text-[#FFFFFF] transition-colors"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-[#202328] border-y border-[#202328]">
            {PROGRAM_CARDS.map((prog) => {
              const targetRoute = prog.id === 'dev-support' ? 'developer-support' : prog.id === 'academy' ? 'education' : prog.id;

              return (
                <div 
                  key={prog.id}
                  className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-[#15171A]/40 transition-colors px-2 rounded-lg"
                >
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-3 text-xs text-[#A7ADB5] font-mono">
                      <span>{prog.category}</span>
                      <span aria-hidden="true">&bull;</span>
                      <span className="text-[#FFFFFF]">{prog.metric}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] group-hover:text-[#A7ADB5] transition-colors">
                      {prog.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                      onClick={() => navigateTo(targetRoute as any)}
                      className="px-4 py-2 rounded-lg bg-[#15171A] hover:bg-[#202328] border border-[#202328] text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] transition-all flex items-center gap-2"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A7ADB5]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. ECOSYSTEM ARCHITECTURE & GOVERNANCE — Comparative Split Layout */}
      <section className="py-20 sm:py-28 border-b border-[#202328]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
              03. TRIPARTITE ECOSYSTEM
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#FFFFFF] tracking-tight mb-3">
              Independent Stewardship &amp; Separation of Powers
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
              To prevent centralized control, the Moneta ecosystem deliberately separates protocol consensus, core software engineering, and independent public stewardship into three sovereign domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#202328] border border-[#202328] rounded-xl bg-[#15171A]">
            
            {/* Domain 1: Foundation */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#202328] border border-[#A7ADB5]/20 flex items-center justify-center text-[#FFFFFF]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7ADB5] block">
                  Public Steward
                </span>
                <h3 className="text-lg font-bold text-[#FFFFFF]">
                  MONETA GLOBAL FOUNDATION
                </h3>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Non-commercial governance entity managing treasury grants, research fellowships, independent security audits, and educational public goods.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('governance')}
                  className="text-xs font-semibold text-[#FFFFFF] hover:text-[#A7ADB5] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Charter Bylaws &rarr;</span>
                </button>
              </div>
            </div>

            {/* Domain 2: MONETA CHAIN */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#202328] border border-[#A7ADB5]/20 flex items-center justify-center text-[#FFFFFF]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7ADB5] block">
                  Decentralized Consensus
                </span>
                <h3 className="text-lg font-bold text-[#FFFFFF]">
                  MONETA CHAIN
                </h3>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Autonomous, permissionless layer-1 public blockchain operated by independent validators across the world. No single entity owns the consensus state.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSelectedEntity('chain')}
                  className="text-xs font-semibold text-[#FFFFFF] hover:text-[#A7ADB5] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Inspect Architecture &rarr;</span>
                </button>
              </div>
            </div>

            {/* Domain 3: Vortex Innovations */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#202328] border border-[#A7ADB5]/20 flex items-center justify-center text-[#FFFFFF]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7ADB5] block">
                  Systems Contributor
                </span>
                <h3 className="text-lg font-bold text-[#FFFFFF]">
                  VORTEX INNOVATIONS
                </h3>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                Commercial enterprise and core technology provider developing protocol software, developer SDKs, and enterprise application infrastructure.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSelectedEntity('vortex')}
                  className="text-xs font-semibold text-[#FFFFFF] hover:text-[#A7ADB5] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Technology Role &rarr;</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FIDUCIARY TRANSPARENCY & TREASURY ALLOCATION — Clean Minimal Stats */}
      <section className="py-20 sm:py-28 border-b border-[#202328]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block">
                04. TRANSPARENCY &amp; FIDUCIARY ETHICS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#FFFFFF] tracking-tight">
                Verifiable Public Stewardship
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                The Foundation operates with verifiable on-chain transparency. All grants are milestone-gated, treasury movements require a 4-of-7 multi-signature quorum of independent trustees, and comprehensive financial reports are published quarterly.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => navigateTo('transparency')}
                  className="px-5 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Open Transparency Center
                </button>
                <button
                  onClick={() => navigateTo('reports')}
                  className="px-5 py-2.5 rounded-lg bg-[#15171A] hover:bg-[#202328] border border-[#202328] text-xs font-bold uppercase tracking-wider text-[#FFFFFF] transition-all"
                >
                  Download Audit Reports
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-xl bg-[#15171A] border border-[#202328] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#202328]">
                  <span className="text-xs font-mono text-[#A7ADB5]">ALLOCATION CATEGORY</span>
                  <span className="text-xs font-mono text-[#FFFFFF]">PERCENTAGE</span>
                </div>

                <div className="space-y-3">
                  {TREASURY_ALLOCATION.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#A7ADB5]">{item.name}</span>
                        <span className="font-mono text-[#FFFFFF] tabular-nums">{item.percent}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#050505]">
                        <div 
                          className="h-1.5 rounded-full"
                          style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. NEWS & DISPATCHES WIRE — Editorial Wire List */}
      <section className="py-20 sm:py-28 border-b border-[#202328]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
                05. PUBLIC DISPATCHES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#FFFFFF] tracking-tight">
                Latest Announcements &amp; Reports
              </h2>
            </div>
            <button
              onClick={() => navigateTo('news')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A7ADB5] hover:text-[#FFFFFF] transition-colors"
            >
              <span>View All Dispatches</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-[#202328] border-y border-[#202328]">
            {NEWS_AND_REPORTS.slice(0, 3).map((article) => (
              <div 
                key={article.id}
                onClick={() => navigateTo('news')}
                className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer hover:bg-[#15171A]/40 transition-colors px-2 rounded-lg"
              >
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center gap-3 text-xs text-[#A7ADB5] font-mono">
                    <span>{article.category}</span>
                    <span aria-hidden="true">&bull;</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">&bull;</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] group-hover:text-[#A7ADB5] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#A7ADB5] leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-[#A7ADB5] group-hover:text-[#FFFFFF] transition-colors flex-shrink-0">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-20 sm:py-28 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block">
            JOIN THE ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#FFFFFF] tracking-tight">
            Ready to Build the Decentralized Future?
          </h2>
          <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-xl mx-auto leading-relaxed">
            Apply for milestone-based grant funding, participate in academic research fellowships, or access free developer curricula at MONETA Academy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={() => navigateTo('apply-funding')}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
            >
              APPLY FOR FUNDING
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#15171A] hover:bg-[#202328] border border-[#202328] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-all"
            >
              CONTACT SECRETARIAT
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <EcosystemStatusModal
        isOpen={selectedEntity !== null}
        onClose={() => setSelectedEntity(null)}
        entity={selectedEntity}
      />

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="General Grant Application"
        defaultCategory="Developer Grants"
      />

    </div>
  );
};
