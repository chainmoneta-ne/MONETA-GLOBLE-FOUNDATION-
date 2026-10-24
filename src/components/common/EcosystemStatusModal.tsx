import React from 'react';
import { X, Layers, Cpu, Globe2, Compass, ExternalLink, ShieldCheck } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export type EcosystemEntity = 'chain' | 'oracle' | 'explorer' | 'vortex';

interface EcosystemStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  entity: EcosystemEntity | null;
}

const ENTITY_DETAILS: Record<
  EcosystemEntity,
  {
    name: string;
    tagline: string;
    role: string;
    description: string;
    technicalOverview: string[];
    officialUrl: string;
    officialUrlNotice: string;
    status: 'LIVE' | 'COMING SOON' | 'UNDER DEVELOPMENT';
    icon: React.ElementType;
  }
> = {
  chain: {
    name: 'MONETA CHAIN',
    tagline: 'Decentralized High-Performance Blockchain Network',
    role: 'Autonomous Consensus Layer',
    description:
      'MONETA CHAIN is a decentralized, high-throughput, low-latency layer-1 public blockchain designed for financial integrity, high concurrency, and censorship resistance.',
    technicalOverview: [
      'Proof-of-Stake consensus with randomized committee finality',
      'Native asynchronous sharding for scalable global state',
      'Sub-second settlement with predictable, minimal network fees',
      'Independent cryptographic validator network spanning multiple continents',
    ],
    officialUrl: 'https://moneta-chain.vercel.app/',
    officialUrlNotice: 'Official MONETA CHAIN portal is active. Inspect network architecture and node specifications.',
    status: 'LIVE',
    icon: Layers,
  },
  oracle: {
    name: 'MONETA ORACLE',
    tagline: 'Decentralized Deterministic Data Feeds',
    role: 'Cryptographic Oracle Infrastructure',
    description:
      'MONETA ORACLE provides tamper-resistant real-world data pipelines, financial exchange rates, and verifiable randomness for smart contracts running across the MONETA ecosystem.',
    technicalOverview: [
      'Multi-source cryptographic threshold aggregation',
      'Sub-second price update frequency for DeFi rails',
      'Zero-knowledge proof validity proofs for cross-chain data verification',
      'Independent node operator quorum protection',
    ],
    officialUrl: 'https://moneta-chain-oracal.vercel.app',
    officialUrlNotice: 'Official MONETA ORACLE portal is live with oracle feed feeds and developer documentation.',
    status: 'LIVE',
    icon: Cpu,
  },
  explorer: {
    name: 'MONETA EXPLORER',
    tagline: 'Transparent Block & State Inspection Portal',
    role: 'Network Telemetry & Ledger Auditability',
    description:
      'MONETA EXPLORER provides real-time transaction tracking, smart contract source verification, validator metrics, and consensus telemetry for the MONETA CHAIN network.',
    technicalOverview: [
      'Live block, epoch, and transaction visualizer',
      'Automated bytecode verification against published source repositories',
      'Validator uptime and geographic telemetry distribution',
      'Rich GraphQL and REST APIs for third-party indexers',
    ],
    officialUrl: 'https://moneta-explorer.vercel.app',
    officialUrlNotice: 'Official MONETA EXPLORER is accessible for telemetry and ledger state inspection.',
    status: 'LIVE',
    icon: Compass,
  },
  vortex: {
    name: 'VORTEX INNOVATIONS',
    tagline: 'Technology & Core Systems Research Enterprise',
    role: 'Commercial Technology & Infrastructure Contributor',
    description:
      'VORTEX INNOVATIONS is a dedicated technology engineering company that conceptualizes, develops, and contributes core software architectures to open-source protocols, including research for MONETA CHAIN.',
    technicalOverview: [
      'Core protocol engineering and systems software development',
      'Commercial application suite integration and enterprise solutions',
      'High-assurance cryptographic tooling and hardware acceleration',
      'Active open-source contributor to public blockchain standards',
    ],
    officialUrl: 'https://vortex-innvations.vercel.app',
    officialUrlNotice: 'Official VORTEX INNOVATIONS corporate engineering portal and deep-tech showcase.',
    status: 'LIVE',
    icon: Globe2,
  },
};

export const EcosystemStatusModal: React.FC<EcosystemStatusModalProps> = ({
  isOpen,
  onClose,
  entity,
}) => {
  if (!isOpen || !entity) return null;

  const data = ENTITY_DETAILS[entity];
  const IconComponent = data.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="entity-modal-title"
    >
      <div
        className="bg-[#15171A] border border-[#202328] rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#050505] text-white p-6 sm:p-7 relative border-b border-[#202328]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-[#15171A] hover:bg-[#202328] flex items-center justify-center text-[#A7ADB5] hover:text-[#FFFFFF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#A7ADB5]"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-[#FFFFFF]">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block">
                {data.role}
              </span>
              <h3 id="entity-modal-title" className="text-xl sm:text-2xl font-bold font-display text-white">
                {data.name}
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#A7ADB5] italic">
            &ldquo;{data.tagline}&rdquo;
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7 space-y-5">
          <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#050505] border border-[#202328]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FFFFFF]">
              <ShieldCheck className="w-4 h-4 text-[#A7ADB5]" />
              <span>Verified Ecosystem Entity</span>
            </div>
            <StatusBadge status={data.status} size="sm" />
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-2">
              Role in the Moneta Ecosystem
            </h4>
            <p className="text-xs sm:text-sm text-[#FFFFFF] leading-relaxed">
              {data.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-2">
              Key Architecture &amp; Capabilities
            </h4>
            <ul className="space-y-2">
              {data.technicalOverview.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A7ADB5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Link Banner */}
          <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono text-[#FFFFFF]">
              <span className="uppercase tracking-wider">OFFICIAL DESTINATION</span>
              <span className="text-[10px] uppercase tracking-widest text-[#A7ADB5]">
                VERIFIED URL
              </span>
            </div>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              {data.officialUrlNotice}
            </p>
            <div className="text-[11px] font-mono text-white/80 bg-[#15171A] px-3 py-1.5 rounded border border-[#202328] break-all select-all">
              {data.officialUrl}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2 gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg bg-[#050505] hover:bg-[#202328] border border-[#202328] text-[#A7ADB5] hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Close
            </button>
            <a
              href={data.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2"
            >
              <span>Visit Official Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
