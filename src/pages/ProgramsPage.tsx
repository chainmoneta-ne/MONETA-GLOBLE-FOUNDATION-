import React from 'react';
import { useNavigation, PageId } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Target, 
  Cpu, 
  GraduationCap, 
  ShieldCheck, 
  Users, 
  Globe2, 
  Heart, 
  ArrowRight,
  CheckCircle2,
  Workflow
} from 'lucide-react';
import { StatusBadge } from '../components/common/StatusBadge';

export const ProgramsPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  const programs = [
    {
      id: 'grants',
      route: 'grants' as PageId,
      title: 'MONETA GRANTS',
      tagline: 'Milestone-based non-dilutive funding for open-source builders',
      desc: 'Providing capital for developers, researchers, and public good infrastructure builders across 8 strategic tracks with verifiable milestone evaluation.',
      status: 'AVAILABLE' as const,
      icon: Target,
      highlights: ['Non-dilutive capital', 'Open-source code mandate', 'Multi-sig milestone payout'],
    },
    {
      id: 'research',
      route: 'research' as PageId,
      title: 'MONETA RESEARCH',
      tagline: 'Scientific fellowships, cryptography, and distributed systems',
      desc: 'Funding peer-reviewed research in post-quantum lattice cryptography, asynchronous BFT consensus, zero-knowledge proofs, and formal verification.',
      status: 'AVAILABLE' as const,
      icon: Cpu,
      highlights: ['Academic fellowships', 'Peer-reviewed publications', 'University research labs'],
    },
    {
      id: 'education',
      route: 'education' as PageId,
      title: 'MONETA ACADEMY',
      tagline: 'Free developer bootcamps, validator curricula, and digital literacy',
      desc: 'Structured educational pathways for aspiring blockchain developers, node operators, security auditors, and university students globally.',
      status: 'AVAILABLE' as const,
      icon: GraduationCap,
      highlights: ['Zero tuition cost', 'Hands-on sandboxes', 'Verified completion credentials'],
    },
    {
      id: 'security',
      route: 'security' as PageId,
      title: 'MONETA SECURITY',
      tagline: 'Formal verification, audits, and coordinated vulnerability disclosure',
      desc: 'Independent smart contract security assessments, automated continuous mathematical proofs, and ethical bug bounty programs.',
      status: 'AVAILABLE' as const,
      icon: ShieldCheck,
      highlights: ['Safe-harbor policy', 'Independent audit grants', 'Continuous formal verification'],
    },
    {
      id: 'community',
      route: 'community' as PageId,
      title: 'GLOBAL COMMUNITY',
      tagline: 'Regional innovation hubs, local meetups, and grassroots mentorship',
      desc: 'Supporting regional developer collectives, hackathons, and student associations across Africa, Europe, Asia, the Americas, and Oceania.',
      status: 'AVAILABLE' as const,
      icon: Users,
      highlights: ['Regional hub funding', 'Global hackathons', 'Grassroots developer grants'],
    },
    {
      id: 'ecosystem',
      route: 'ecosystem' as PageId,
      title: 'GLOBAL ECOSYSTEM',
      tagline: 'Constitutional coordination between technology, foundation, and network',
      desc: 'Clarifying the decentralized separation of powers between Vortex Innovations, the independent Foundation, and the autonomous Moneta Chain.',
      status: 'AVAILABLE' as const,
      icon: Globe2,
      highlights: ['Constitutional separation', 'Decentralized governance', 'Public goods focus'],
    },
    {
      id: 'public-goods',
      route: 'developer-support' as PageId,
      title: 'PUBLIC GOODS & INFRASTRUCTURE',
      tagline: 'Open utilities, developer SDKs, explorers, and testnet infrastructure',
      desc: 'Long-term endowment for essential shared digital infrastructure that benefits all ecosystem participants without extractive monetization.',
      status: 'AVAILABLE' as const,
      icon: Heart,
      highlights: ['Open developer SDKs', 'Public RPC nodes', 'Zero telemetry frameworks'],
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            STRATEGIC INITIATIVES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Foundation Programs Overview
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            The Foundation executes its global mandate through seven structured programs designed to support builders at every stage: from academic research to open developer infrastructure.
          </p>
        </div>

        {/* Program Directory List — Clean Editorial */}
        <div className="space-y-6 mb-16">
          {programs.map((prog) => {
            const Icon = prog.icon;

            return (
              <div
                key={prog.id}
                className="bg-[#15171A] p-6 sm:p-8 rounded-xl border border-[#202328] hover:border-[#A7ADB5]/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#202328]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#202328] border border-[#202328] flex items-center justify-center flex-shrink-0 text-white mt-1">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                          {prog.title}
                        </h2>
                        <StatusBadge status={prog.status} size="sm" />
                      </div>
                      <p className="text-xs sm:text-sm text-[#FFFFFF] font-medium">
                        {prog.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={() => navigateTo(prog.route)}
                      className="px-5 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8">
                    <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2">
                    {prog.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-[#A7ADB5] bg-[#050505] px-2.5 py-1 rounded border border-[#202328]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#15171A] border border-[#202328] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold font-display text-white mb-2">
              Ready to Submit a Funding Proposal?
            </h3>
            <p className="text-xs sm:text-sm text-[#A7ADB5]">
              Review the grant evaluation criteria and register for launch alerts for Cohort 4.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => navigateTo('apply-funding')}
              className="px-6 py-3 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
            >
              Apply for Funding
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
