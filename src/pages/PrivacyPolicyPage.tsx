import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';

export const PrivacyPolicyPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            DATA PRIVACY STANDARD
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#A7ADB5]">
            Effective Date: March 1, 2026 &bull; Ratified by MONETA GLOBAL FOUNDATION Board of Trustees
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] space-y-8 text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
          
          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              1. Core Privacy Philosophy &amp; Minimal Data Collection
            </h2>
            <p>
              MONETA GLOBAL FOUNDATION is dedicated to preserving digital privacy, open-source principles, and user autonomy. We operate under a strict minimal-data policy: we do not sell user data, we do not deploy invasive third-party surveillance trackers, and we collect only the minimal information necessary to deliver Foundation programs, newsletter updates, and grant evaluation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              2. Information You Voluntarily Provide
            </h2>
            <p className="mb-2">
              When you interact with the Foundation website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-white">Contact &amp; Notification Data:</strong> Email addresses and names submitted voluntarily to receive notification alerts, program cohort updates, or newsletter dispatches.</li>
              <li><strong className="text-white">Inquiry Submissions:</strong> Information provided through our Contact and Grant interest portals (e.g., project descriptions, academic affiliations, and milestone roadmaps).</li>
              <li><strong className="text-white">Communication Records:</strong> Correspondence conducted with the Foundation Secretariat.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              3. Local Storage &amp; Cookies
            </h2>
            <p>
              This website uses client-side local storage exclusively to remember user interface preferences, notification registrations, and navigation states. We do not use cross-site tracking cookies or advertising retargeting pixels.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              4. Blockchain Network Disclaimer
            </h2>
            <p>
              MONETA CHAIN is an autonomous, decentralized public blockchain ledger. The Foundation does not operate individual validator nodes, does not maintain user transaction logs, and cannot alter or delete data immutably recorded on the public blockchain by third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              5. Your Rights &amp; Data Deletion
            </h2>
            <p>
              You have the full right to request access to, correction of, or deletion of any personal information held in our voluntary notification registries. To exercise your rights, please submit a request through our official Contact portal.
            </p>
          </section>

          <section className="pt-6 border-t border-[#202328] flex items-center justify-between">
            <span className="text-xs font-mono text-white">MONETA GLOBAL FOUNDATION</span>
            <button
              onClick={() => navigateTo('contact')}
              className="text-xs font-mono text-white hover:text-[#A7ADB5] transition-colors"
            >
              Contact Data Privacy Officer &rarr;
            </button>
          </section>

        </div>

      </div>
    </div>
  );
};
