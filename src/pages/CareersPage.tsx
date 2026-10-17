import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Briefcase, 
  MapPin, 
  Clock
} from 'lucide-react';
import { StatusBadge } from '../components/common/StatusBadge';
import { UnderDevelopmentNotice } from '../components/common/UnderDevelopmentNotice';
import { WaitlistModal } from '../components/common/WaitlistModal';

export const CareersPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const roles = [
    {
      id: 'fellow-crypto',
      title: 'Cryptographic Systems Research Fellow',
      department: 'Moneta Research',
      location: 'Remote / Global',
      type: 'Fellowship (12 Months)',
      desc: 'Conducting peer-reviewed research in post-quantum lattice cryptography, Falcon/Dilithium signature integration, and low-memory edge validator proofs.',
      status: 'AVAILABLE' as const,
    },
    {
      id: 'eval-grants',
      title: 'Technical Grant Evaluator (Systems & Rust)',
      department: 'Grants Program',
      location: 'Remote / Global',
      type: 'Full-time',
      desc: 'Evaluating open-source developer grant submissions, auditing milestone code deliverables, and advising recipient teams on architecture.',
      status: 'AVAILABLE' as const,
    },
    {
      id: 'coord-africa',
      title: 'Regional Ecosystem Coordinator (Africa Hubs)',
      department: 'Global Community',
      location: 'Lagos / Nairobi / Remote',
      type: 'Full-time',
      desc: 'Supporting regional university partnerships, developer meetups, student hackathons, and localized educational bootcamps across the continent.',
      status: 'AVAILABLE' as const,
    },
    {
      id: 'mentor-academy',
      title: 'Lead Curriculum Architect & Educator',
      department: 'Moneta Academy',
      location: 'Remote / Global',
      type: 'Full-time',
      desc: 'Authoring open-access distributed systems curricula, smart contract interactive sandboxes, and validator training workshops.',
      status: 'AVAILABLE' as const,
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            JOIN OUR MISSION
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Careers &amp; Fellowships
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Help build the open technology ecosystem. Join the Foundation Secretariat, research fellowship tracks, or regional community operations.
          </p>
        </div>

        {/* Culture & Ethos */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-2">
              OUR WORK ETHOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
              Independent Stewardship. Public Impact.
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
              We are an international team of researchers, educators, systems engineers, and community organizers united by a commitment to public goods, open source, and expanding technological access.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-lg bg-[#050505] border border-[#202328]">
                <span className="font-mono text-white block mb-1">GLOBAL &amp; REMOTE</span>
                <p className="text-[#A7ADB5]">Work from anywhere in the world with asynchronous-first communication.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#050505] border border-[#202328]">
                <span className="font-mono text-white block mb-1">PUBLIC GOODS MANDATE</span>
                <p className="text-[#A7ADB5]">Every deliverable is open source without venture extraction or lock-in.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#050505] border border-[#202328]">
                <span className="font-mono text-white block mb-1">SCIENTIFIC RIGOR</span>
                <p className="text-[#A7ADB5]">High standards of peer review, formal verification, and cryptographic discipline.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
              OPEN OPPORTUNITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1 mb-2">
              Current Openings &amp; Fellowships
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5]">
              Select an opening below or submit a general inquiry to our Secretariat.
            </p>
          </div>

          <div className="space-y-4">
            {roles.map((r) => (
              <div
                key={r.id}
                className="p-6 rounded-lg bg-[#050505] border border-[#202328] flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A7ADB5]">
                    <span className="text-white">{r.department}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {r.location}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {r.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display">
                    {r.title}
                  </h3>

                  <p className="text-xs text-[#A7ADB5] leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <button
                    onClick={() => navigateTo('contact')}
                    className="px-5 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Apply for Role
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Inquiry */}
        <div className="p-8 rounded-xl bg-[#15171A] border border-[#202328] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Don&apos;t See Your Exact Role?
            </h3>
            <p className="text-xs text-[#A7ADB5] mt-1">
              We frequently welcome independent cryptographers, systems architects, and community organizers. Send an open dossier.
            </p>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="px-6 py-2.5 rounded-lg bg-[#050505] hover:bg-[#202328] text-white text-xs font-bold uppercase tracking-wider transition-all border border-[#202328] flex-shrink-0"
          >
            Submit Open Dossier
          </button>
        </div>

      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="Foundation Careers & Fellowships"
        defaultCategory="Public Goods"
      />
    </div>
  );
};
