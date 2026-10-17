import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Terminal, 
  GitBranch, 
  Server
} from 'lucide-react';
import { UnderDevelopmentNotice } from '../components/common/UnderDevelopmentNotice';
import { WaitlistModal } from '../components/common/WaitlistModal';

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
