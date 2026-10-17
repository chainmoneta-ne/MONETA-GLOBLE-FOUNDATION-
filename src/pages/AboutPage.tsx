import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Globe2, 
  Scale, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { FOUNDATION_CORE_VALUES, BOARD_MEMBERS } from '../data/foundationData';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Page Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            INSTITUTIONAL CHARTER
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            About MONETA GLOBAL FOUNDATION
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            An independent global foundation established to support innovation, research, education, security, open technology, developers, communities, and sustainable ecosystem development.
          </p>
        </div>

        {/* Core Constitutional Principle */}
        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] mb-16 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-2">
              Constitutional Boundary
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4">
              Ecosystem Steward, Not Ruler
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed mb-6">
              The Foundation is an ecosystem steward, not the owner or ruler of MONETA CHAIN. Its purpose is to strengthen the ecosystem around MONETA while respecting the independence of the MONETA CHAIN network, its participants, developers, validators, applications, and governance mechanisms.
            </p>
            <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm font-semibold text-[#FFFFFF]">
              &ldquo;The Foundation&apos;s role is to provide resources, coordination, knowledge, opportunities, and support—not unilateral control.&rdquo;
            </div>
          </div>
        </div>

        {/* Quick Navigation Rows to Sub-pages */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#202328] bg-[#15171A] rounded-xl border border-[#202328] p-6 mb-16">
          <div
            onClick={() => navigateTo('mission')}
            className="py-4 md:py-2 md:px-6 first:pl-0 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-[#FFFFFF]" />
                <h3 className="text-lg font-bold text-[#FFFFFF] font-display group-hover:text-[#A7ADB5] transition-colors">
                  Mission &amp; Vision
                </h3>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                Discover our 10-point mission mandate, global vision pillars, and solemn promise to the community.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FFFFFF] group-hover:text-[#A7ADB5] transition-colors">
              <span>Read Mission &amp; Vision &rarr;</span>
            </div>
          </div>

          <div
            onClick={() => navigateTo('story')}
            className="py-4 md:py-2 md:px-6 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-[#FFFFFF]" />
                <h3 className="text-lg font-bold text-[#FFFFFF] font-display group-hover:text-[#A7ADB5] transition-colors">
                  Our Story &amp; Purpose
                </h3>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                Where it begins: bridging the opportunity gap, why ecosystems need more than protocols, and our definition of success.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FFFFFF] group-hover:text-[#A7ADB5] transition-colors">
              <span>Read Our Story &rarr;</span>
            </div>
          </div>

          <div
            onClick={() => navigateTo('governance')}
            className="py-4 md:py-2 md:px-6 last:pr-0 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-5 h-5 text-[#FFFFFF]" />
                <h3 className="text-lg font-bold text-[#FFFFFF] font-display group-hover:text-[#A7ADB5] transition-colors">
                  Governance Charter
                </h3>
              </div>
              <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                Explore our bylaws, independence covenants, multisig treasury policies, and conflict of interest standards.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FFFFFF] group-hover:text-[#A7ADB5] transition-colors">
              <span>Read Governance Charter &rarr;</span>
            </div>
          </div>
        </div>

        {/* Foundation Core Values */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-1">
              ETHICAL FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-display">
              Core Institutional Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDATION_CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#15171A] p-6 rounded-xl border border-[#202328]"
              >
                <div className="text-xs font-mono text-[#A7ADB5] mb-2">
                  {val.number || `0${idx + 1}`}.
                </div>
                <h3 className="text-base font-bold text-[#FFFFFF] mb-1 font-display">
                  {val.name}
                </h3>
                <div className="text-xs font-semibold text-[#A7ADB5] mb-2 font-mono">
                  {val.tagline}
                </div>
                <p className="text-xs text-[#A7ADB5] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Independent Board */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-1">
              FIDUCIARY OVERSIGHT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-display">
              Secretariat &amp; Advisory Council
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOARD_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#15171A] p-6 rounded-xl border border-[#202328] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#A7ADB5]">
                    <span>{member.isIndependent ? 'Independent Trustee' : 'Executive Member'}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#FFFFFF] font-display">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#A7ADB5] mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#202328] text-[11px] text-[#A7ADB5] font-mono">
                  Committee: {member.committee}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Hubs and Reach */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#15171A] border border-[#202328] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
              WORLDWIDE COLLABORATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-display mb-3">
              Engage with Our Regional Chapters
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
              From developer bootcamps in Nairobi and university workshops in Singapore to research symposiums in Zurich, we connect local builders to global open infrastructure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={() => navigateTo('community')}
              className="px-6 py-3 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
            >
              Explore Global Hubs
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-6 py-3 rounded-lg bg-[#050505] hover:bg-[#202328] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-all border border-[#202328]"
            >
              Contact Secretariat
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
