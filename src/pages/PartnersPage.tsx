import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Building2, 
  GraduationCap, 
  Globe2
} from 'lucide-react';
import { ACADEMIC_PARTNERSHIPS } from '../data/foundationData';
import { UnderDevelopmentNotice } from '../components/common/UnderDevelopmentNotice';

export const PartnersPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            INSTITUTIONAL ALLIANCES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Partners &amp; Alliances
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Collaborating with leading universities, cryptography institutes, open-source consortiums, and technology alliances to support decentralized public goods.
          </p>
        </div>

        {/* Partnership Intake Status */}
        <div className="mb-12">
          <UnderDevelopmentNotice
            title="INSTITUTIONAL PARTNERSHIP REGISTRY IS IN EXPANSION"
            description="MONETA GLOBAL FOUNDATION actively collaborates with universities, research centers, and open-source foundations. Formal institutional inquiries can be submitted directly through our contact portal."
            status="AVAILABLE"
            onNotifyClick={() => navigateTo('contact')}
            actionLabel="SUBMIT PARTNERSHIP INQUIRY"
          />
        </div>

        {/* Partnership Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Academic Alliances
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Joint research fellowships, curriculum sponsorships, and distributed systems lab funding at universities globally.
            </p>
          </div>

          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-5">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Open-Source Consortiums
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Contributing to global open standards, cryptographic benchmarks, and multi-network interoperability protocols.
            </p>
          </div>

          <div className="bg-[#15171A] p-8 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-5">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Regional Innovation Hubs
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Partnering with local tech hubs, university student clubs, and hackathon organizers to foster grassroots builders.
            </p>
          </div>
        </div>

        {/* Current Academic Partners */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-2">
            RESEARCH COLLABORATORS
          </span>
          <h2 className="text-2xl font-bold font-display text-white mb-6">
            Active University Partnerships
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACADEMIC_PARTNERSHIPS.map((p, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-[#A7ADB5]">
                  <span>{p.region}</span>
                  <span className="text-white">{p.status}</span>
                </div>
                <h3 className="text-base font-bold text-white">{p.institution}</h3>
                <p className="text-xs text-[#A7ADB5]">{p.focusArea}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-xl bg-[#15171A] border border-[#202328] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Propose an Institutional Alliance
            </h3>
            <p className="text-xs text-[#A7ADB5] mt-1">
              Contact the Foundation Secretariat with your academic or consortium charter.
            </p>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
          >
            Contact Secretariat
          </button>
        </div>

      </div>
    </div>
  );
};
