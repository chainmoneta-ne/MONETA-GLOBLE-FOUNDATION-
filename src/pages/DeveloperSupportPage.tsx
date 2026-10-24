import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Terminal, 
  GitBranch, 
  Server,
  Layers,
  Compass,
  Cpu,
  Building2,
  Scale,
  ExternalLink
} from 'lucide-react';
import { UnderDevelopmentNotice } from '../components/common/UnderDevelopmentNotice';
import { WaitlistModal } from '../components/common/WaitlistModal';
import { OFFICIAL_ECOSYSTEM_LINKS } from '../data/foundationData';

export const DeveloperSupportPage: React.FC = () => {
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
            BUILDER INFRASTRUCTURE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Developer Support &amp; Resources
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            SDKs, API documentation, testnet faucets, hackathons, and technical mentorship designed to accelerate developer productivity across the MONETA ecosystem.
          </p>
        </div>

        {/* Official Ecosystem Gateways */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-1">
                ECOSYSTEM GATEWAYS
              </span>
              <h2 className="text-2xl font-bold font-display text-white">
                Live Network &amp; Developer Portals
              </h2>
            </div>
            <span className="text-xs font-mono text-[#A7ADB5]">VERIFIED DESTINATIONS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* MONETA CHAIN */}
            <a
              href={OFFICIAL_ECOSYSTEM_LINKS.monetaChain.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg bg-[#050505] border border-[#202328] hover:border-[#A7ADB5] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#202328] text-white">OFFICIAL SITE</span>
                </div>
                <h3 className="text-sm font-bold text-white font-display mb-1 group-hover:text-white">
                  MONETA CHAIN
                </h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-3">
                  Core decentralized layer-1 blockchain network portal.
                </p>
              </div>
              <div className="pt-2 border-t border-[#202328] flex items-center justify-between text-xs font-mono text-white">
                <span>moneta-chain.vercel.app</span>
                <ExternalLink className="w-3 h-3 text-[#A7ADB5] group-hover:text-white" />
              </div>
            </a>

            {/* MONETA EXPLORER */}
            <a
              href={OFFICIAL_ECOSYSTEM_LINKS.monetaExplorer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg bg-[#050505] border border-[#202328] hover:border-[#A7ADB5] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#202328] text-white">EXPLORER</span>
                </div>
                <h3 className="text-sm font-bold text-white font-display mb-1 group-hover:text-white">
                  MONETA EXPLORER
                </h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-3">
                  Block inspection, state telemetry, and contract verification.
                </p>
              </div>
              <div className="pt-2 border-t border-[#202328] flex items-center justify-between text-xs font-mono text-white">
                <span>moneta-explorer.vercel.app</span>
                <ExternalLink className="w-3 h-3 text-[#A7ADB5] group-hover:text-white" />
              </div>
            </a>

            {/* MONETA ORACLE */}
            <a
              href={OFFICIAL_ECOSYSTEM_LINKS.monetaOracle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg bg-[#050505] border border-[#202328] hover:border-[#A7ADB5] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#202328] text-white">ORACLE</span>
                </div>
                <h3 className="text-sm font-bold text-white font-display mb-1 group-hover:text-white">
                  MONETA ORACLE
                </h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-3">
                  Deterministic cryptographic pricing feeds and VRF tooling.
                </p>
              </div>
              <div className="pt-2 border-t border-[#202328] flex items-center justify-between text-xs font-mono text-white">
                <span>moneta-chain-oracal.vercel.app</span>
                <ExternalLink className="w-3 h-3 text-[#A7ADB5] group-hover:text-white" />
              </div>
            </a>

            {/* VORTEX INNOVATIONS */}
            <a
              href={OFFICIAL_ECOSYSTEM_LINKS.vortexInnovations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg bg-[#050505] border border-[#202328] hover:border-[#A7ADB5] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#202328] text-white">ENGINEERING</span>
                </div>
                <h3 className="text-sm font-bold text-white font-display mb-1 group-hover:text-white">
                  VORTEX INNOVATIONS
                </h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-3">
                  Commercial systems engineering and deep-tech protocols.
                </p>
              </div>
              <div className="pt-2 border-t border-[#202328] flex items-center justify-between text-xs font-mono text-white">
                <span>vortex-innvations.vercel.app</span>
                <ExternalLink className="w-3 h-3 text-[#A7ADB5] group-hover:text-white" />
              </div>
            </a>

            {/* MONETA GLOBAL FOUNDATION */}
            <a
              href={OFFICIAL_ECOSYSTEM_LINKS.monetaGlobalFoundation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-lg bg-[#050505] border border-[#202328] hover:border-[#A7ADB5] transition-all flex flex-col justify-between group sm:col-span-2 lg:col-span-2"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#15171A] border border-[#202328] flex items-center justify-center text-white">
                    <Scale className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#202328] text-white">FOUNDATION STEWARD</span>
                </div>
                <h3 className="text-sm font-bold text-white font-display mb-1 group-hover:text-white">
                  MONETA GLOBAL FOUNDATION
                </h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed mb-3">
                  Independent non-profit ecosystem governance, research grants, educational public goods, and community stewardship.
                </p>
              </div>
              <div className="pt-2 border-t border-[#202328] flex items-center justify-between text-xs font-mono text-white">
                <span>moneta-globle-foundation.vercel.app</span>
                <ExternalLink className="w-3 h-3 text-[#A7ADB5] group-hover:text-white" />
              </div>
            </a>
          </div>
        </div>

        {/* Developer Sandbox Notice */}
        <div className="mb-12">
          <UnderDevelopmentNotice
            title="PUBLIC DEVELOPER PORTAL &amp; SDK HUB IS IN STAGING"
            description="MONETA GLOBAL FOUNDATION is finalizing the unified developer documentation portal, interactive browser sandbox, and client libraries in Rust, TypeScript, and Go."
            status="UNDER DEVELOPMENT"
            onNotifyClick={() => setIsWaitlistOpen(true)}
            actionLabel="GET DEVELOPER SDK UPDATES"
          />
        </div>

        {/* Developer Tooling Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-5">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Moneta CLI &amp; Toolchain
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                Command-line interfaces for contract compilation, local testnet container orchestration, and automated unit testing.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#A7ADB5] bg-[#050505] px-2.5 py-1 rounded border border-[#202328] inline-block w-fit">
              Coming with Testnet v2
            </span>
          </div>

          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-5">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Multi-Language SDKs
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                Zero-overhead idiomatic client libraries for TypeScript/JavaScript, Rust, Go, Python, and Android Kotlin.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#A7ADB5] bg-[#050505] px-2.5 py-1 rounded border border-[#202328] inline-block w-fit">
              Apache 2.0 Open Source
            </span>
          </div>

          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-5">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Public Testnet RPCs
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                Geodistributed load-balanced JSON-RPC, WebSocket, and gRPC endpoints for continuous integration testing.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#A7ADB5] bg-[#050505] px-2.5 py-1 rounded border border-[#202328] inline-block w-fit">
              Zero Rate-Limit for Builders
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-xl bg-[#15171A] border border-[#202328] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Need Developer Grant Funding?
            </h3>
            <p className="text-xs text-[#A7ADB5] mt-1">
              Apply for capital to build open-source tools, wallets, or infrastructure for the Moneta ecosystem.
            </p>
          </div>
          <button
            onClick={() => navigateTo('apply-funding')}
            className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
          >
            Apply for Developer Grant
          </button>
        </div>

      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="Moneta Developer SDK & Tooling Hub"
        defaultCategory="Developer Grants"
      />
    </div>
  );
};
