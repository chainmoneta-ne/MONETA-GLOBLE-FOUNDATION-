import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Cpu, 
  FileText, 
  ShieldCheck, 
  Lock,
  Layers,
  ArrowRight
} from 'lucide-react';
import { RESEARCH_PAPERS, ACADEMIC_PARTNERSHIPS } from '../data/foundationData';
import { StatusBadge } from '../components/common/StatusBadge';
import { UnderDevelopmentNotice } from '../components/common/UnderDevelopmentNotice';
import { WaitlistModal } from '../components/common/WaitlistModal';

export const ResearchPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const categories = ['All', 'Quantum-Resistant', 'Consensus', 'Scalability', 'Privacy', 'Security', 'Distributed Systems'];

  const filteredPapers = RESEARCH_PAPERS.filter((paper) => {
    return selectedCategory === 'All' || paper.category === selectedCategory;
  });

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            SCIENTIFIC FELLOWSHIPS &amp; CRYPTOGRAPHY
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            MONETA Research &amp; Innovation
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Advancing rigorous, peer-reviewed scientific inquiry into post-quantum cryptography, asynchronous distributed consensus, formal verification, and zero-knowledge privacy.
          </p>
        </div>

        {/* Research Fellowship Status */}
        <div className="mb-12">
          <UnderDevelopmentNotice
            title="RESEARCH FELLOWSHIP APPLICATIONS ARE IN PREPARATION"
            description="MONETA GLOBAL FOUNDATION supports academic researchers and independent cryptographers with non-dilutive research stipends. Formal fellowship intake begins with the Q4 Academic Session."
            status="UNDER DEVELOPMENT"
            onNotifyClick={() => setIsWaitlistOpen(true)}
            actionLabel="NOTIFY ME FOR RESEARCH FELLOWSHIPS"
          />
        </div>

        {/* 4 Research Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#15171A] p-6 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#FFFFFF] font-display mb-1">
              Post-Quantum Cryptography
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Evaluating ML-KEM, Dilithium, and Falcon lattice signature algorithms for edge validator memory and bandwidth constraints.
            </p>
          </div>

          <div className="bg-[#15171A] p-6 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#FFFFFF] font-display mb-1">
              Asynchronous BFT Consensus
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Resilient consensus mechanics optimized for intermittent low-bandwidth network environments across emerging markets.
            </p>
          </div>

          <div className="bg-[#15171A] p-6 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#FFFFFF] font-display mb-1">
              Zero-Knowledge Systems
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Succinct recursive SNARKs and STARK verification architectures with minimized verification gas overhead.
            </p>
          </div>

          <div className="bg-[#15171A] p-6 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#FFFFFF] font-display mb-1">
              Formal Verification
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Mathematical proof checkers and automated invariant provers guaranteeing execution safety before mainnet deployment.
            </p>
          </div>
        </div>

        {/* Papers Repository */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
                PEER-REVIEWED PUBLICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-display mt-1">
                Foundation Research Archive
              </h2>
            </div>

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

          <div className="divide-y divide-[#202328]">
            {filteredPapers.map((paper) => (
              <div key={paper.id} className="py-6 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A7ADB5]">
                    <span className="text-white font-bold">{paper.id}</span>
                    <span>&bull;</span>
                    <span>{paper.category}</span>
                    <span>&bull;</span>
                    <span>{paper.date}</span>
                    <span>&bull;</span>
                    <span>{paper.readTime}</span>
                  </div>
                  <StatusBadge status={paper.status === 'Published' ? 'LIVE' : 'COMING SOON'} size="sm" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  {paper.title}
                </h3>

                <p className="text-xs text-[#A7ADB5] leading-relaxed">
                  {paper.abstract}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs font-mono text-[#A7ADB5]">
                  <span>Authors: {paper.authors.join(', ')}</span>
                  <span>DOI: {paper.doi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Labs */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-2">
            LABORATORY COLLABORATIONS
          </span>
          <h2 className="text-2xl font-bold font-display text-white mb-6">
            University &amp; Institute Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACADEMIC_PARTNERSHIPS.map((partner, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-[#A7ADB5]">
                  <span>INITIATIVE 0{idx + 1}</span>
                  <span className="text-white text-[11px] px-2 py-0.5 rounded bg-[#202328]">ACTIVE</span>
                </div>
                <h3 className="text-sm font-bold text-white font-display">{partner.institution}</h3>
                <div className="text-xs font-semibold text-[#FFFFFF]">{partner.focus}</div>
                <p className="text-xs text-[#A7ADB5] leading-relaxed">{partner.summary}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="Moneta Research Fellowships"
        defaultCategory="Research Fellowships"
      />
    </div>
  );
};
