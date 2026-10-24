import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Layers, 
  Cpu, 
  Compass, 
  Building2, 
  CheckCircle2, 
  Scale,
  ExternalLink,
  Info
} from 'lucide-react';
import { EcosystemStatusModal, EcosystemEntity } from '../components/common/EcosystemStatusModal';
import { OFFICIAL_ECOSYSTEM_LINKS } from '../data/foundationData';

export const EcosystemPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedEntity, setSelectedEntity] = useState<EcosystemEntity | null>(null);

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            ARCHITECTURE OF SEPARATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Global Ecosystem &amp; Governance Structure
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Understanding the precise, constitutional boundaries between technology research companies, the independent foundation steward, and the autonomous decentralized blockchain network.
          </p>
        </div>

        {/* 3 Constitutional Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* PILLAR 1: VORTEX INNOVATIONS */}
          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-6">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-[#A7ADB5] uppercase tracking-widest block mb-1">
                Technology &amp; Innovation
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-3">
                VORTEX INNOVATIONS
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
                A dedicated commercial engineering and deep-tech company that builds, innovates, and contributes cutting-edge technology architectures, systems software, and infrastructure to the public domain.
              </p>

              <div className="space-y-2 border-t border-[#202328] pt-4 mb-6">
                <div className="flex items-start gap-2 text-xs text-[#A7ADB5]">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>Builds &amp; contributes open technology</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#A7ADB5]">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>Conducts systems software engineering</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#A7ADB5]">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>Independent commercial entity</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={OFFICIAL_ECOSYSTEM_LINKS.vortexInnovations.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Visit VORTEX INNOVATIONS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setSelectedEntity('vortex')}
                className="w-full py-2 rounded-lg bg-[#050505] hover:bg-[#202328] text-[#A7ADB5] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all border border-[#202328] flex items-center justify-center gap-1.5"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Entity Specifications</span>
              </button>
            </div>
          </div>

          {/* PILLAR 2: MONETA GLOBAL FOUNDATION */}
          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-6">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-[#A7ADB5] uppercase tracking-widest block mb-1">
                Ecosystem Steward &amp; Non-Profit
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-white mb-3">
                MONETA GLOBAL FOUNDATION
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
                An independent non-profit foundation that supports ecosystem growth, distributes grants, funds research, fosters community, and ensures educational access.
              </p>

              <div className="space-y-2 border-t border-[#202328] pt-4 mb-6">
                <div className="flex items-start gap-2 text-xs text-[#A7ADB5]">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>Does not own or control MONETA CHAIN</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#A7ADB5]">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>Allocates milestone-based grant capital</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#A7ADB5]">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>Steward of public goods &amp; education</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={OFFICIAL_ECOSYSTEM_LINKS.monetaGlobalFoundation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Foundation Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => navigateTo('about')}
                className="w-full py-2 rounded-lg bg-[#050505] hover:bg-[#202328] text-[#A7ADB5] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all border border-[#202328] flex items-center justify-center gap-1.5"
              >
                <span>Foundation Charter</span>
              </button>
            </div>
          </div>

          {/* PILLAR 3: MONETA CHAIN */}
          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-6">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-[#A7ADB5] uppercase tracking-widest block mb-1">
                Decentralized Blockchain Network
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-3">
                MONETA CHAIN
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
                A decentralized, public, layer-1 blockchain network governed by independent consensus nodes, validators, developers, and users worldwide.
              </p>

              <div className="space-y-2 border-t border-[#202328] pt-4 mb-6">
                <div className="flex items-start gap-2 text-xs text-[#A7ADB5]">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>Decentralized Proof-of-Stake consensus</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#A7ADB5]">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>No single controlling entity</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#A7ADB5]">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>Public, permissionless, censorship-resistant</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={OFFICIAL_ECOSYSTEM_LINKS.monetaChain.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Visit MONETA CHAIN Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setSelectedEntity('chain')}
                className="w-full py-2 rounded-lg bg-[#050505] hover:bg-[#202328] text-[#A7ADB5] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all border border-[#202328] flex items-center justify-center gap-1.5"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Network Architecture</span>
              </button>
            </div>
          </div>

        </div>

        {/* Infrastructure Nodes Component */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-2">
            INFRASTRUCTURE SUITE
          </span>
          <h2 className="text-2xl font-bold font-display text-white mb-6">
            Ecosystem Utilities &amp; Live Infrastructure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MONETA ORACLE */}
            <div className="p-6 rounded-lg bg-[#050505] border border-[#202328] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display">MONETA ORACLE</h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7ADB5]">Deterministic Data Feeds</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#202328] text-white">ACTIVE</span>
                </div>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                  Decentralized cryptographic feeds delivering verifiable real-world pricing data and randomness for smart contracts.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#202328]">
                <button
                  onClick={() => setSelectedEntity('oracle')}
                  className="text-xs text-[#A7ADB5] hover:text-white transition-colors"
                >
                  Technical Specs
                </button>
                <a
                  href={OFFICIAL_ECOSYSTEM_LINKS.monetaOracle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-[#A7ADB5] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Launch MONETA ORACLE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* MONETA EXPLORER */}
            <div className="p-6 rounded-lg bg-[#050505] border border-[#202328] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display">MONETA EXPLORER</h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#A7ADB5]">Ledger State Telemetry</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#202328] text-white">ACTIVE</span>
                </div>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                  Transparent block indexing, smart contract verification, validator epoch inspection, and transaction receipts.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#202328]">
                <button
                  onClick={() => setSelectedEntity('explorer')}
                  className="text-xs text-[#A7ADB5] hover:text-white transition-colors"
                >
                  Technical Specs
                </button>
                <a
                  href={OFFICIAL_ECOSYSTEM_LINKS.monetaExplorer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white hover:text-[#A7ADB5] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Launch MONETA EXPLORER</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <EcosystemStatusModal
        isOpen={selectedEntity !== null}
        onClose={() => setSelectedEntity(null)}
        entity={selectedEntity}
      />
    </div>
  );
};
