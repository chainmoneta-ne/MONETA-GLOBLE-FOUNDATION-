import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';

export const TermsOfUsePage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            LEGAL FRAMEWORK
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-3">
            Terms of Use
          </h1>
          <p className="text-xs font-mono text-[#A7ADB5]">
            Effective Date: March 1, 2026 &bull; MONETA GLOBAL FOUNDATION
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] space-y-8 text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
          
          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              1. Acceptance of Terms &amp; Purpose
            </h2>
            <p>
              By accessing and using this website, you acknowledge and agree to comply with these Terms of Use. The MONETA GLOBAL FOUNDATION website is provided for informational, educational, and grant coordination purposes to support the public blockchain ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              2. Independence &amp; Non-Control Disclaimer
            </h2>
            <p className="mb-3">
              <strong className="text-white">Crucial Operational Clarity:</strong> MONETA GLOBAL FOUNDATION is an independent non-profit steward. The Foundation does not own, operate, or exert unilateral administrative control over MONETA CHAIN, its decentralized validator set, its smart contract execution, or user transactions.
            </p>
            <p>
              Nothing contained on this website constitutes financial, investment, legal, or cryptographic advice. Users interact with decentralized protocols at their own sovereign discretion and risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              3. Open Source Intellectual Property
            </h2>
            <p>
              Unless expressly noted otherwise, educational curricula, research manuscripts, and developer code provided by the Foundation are released under permissive open-source licenses (such as Apache 2.0, MIT, or Creative Commons Attribution). You are free to inspect, study, and build upon these public goods in accordance with their respective licenses.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              4. Responsible Use &amp; Security Research
            </h2>
            <p>
              Security researchers are invited to participate in our Coordinated Vulnerability Disclosure process under full legal safe-harbor terms, provided that testing causes no intentional service disruption, data destruction, or exploitation of live mainnet funds.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, MONETA GLOBAL FOUNDATION and its trustees shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of or inability to use this website or associated open-source materials.
            </p>
          </section>

          <section className="pt-6 border-t border-[#202328] flex items-center justify-between">
            <span className="text-xs font-mono text-white">MONETA GLOBAL FOUNDATION</span>
            <button
              onClick={() => navigateTo('contact')}
              className="text-xs font-mono text-white hover:text-[#A7ADB5] transition-colors"
            >
              Legal Inquiries &rarr;
            </button>
          </section>

        </div>

      </div>
    </div>
  );
};
