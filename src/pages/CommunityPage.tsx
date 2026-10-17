import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Users, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { REGIONAL_HUBS, COMMUNITY_ROLES, COMMUNITY_PROMISE_POINTS } from '../data/foundationData';
import { StatusBadge } from '../components/common/StatusBadge';
import { UnderDevelopmentNotice } from '../components/common/UnderDevelopmentNotice';
import { WaitlistModal } from '../components/common/WaitlistModal';

export const CommunityPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedHub, setSelectedHub] = useState<string>(REGIONAL_HUBS[0]?.id || '');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const activeHub = REGIONAL_HUBS.find((h) => h.id === selectedHub) || REGIONAL_HUBS[0];

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            GRASSROOTS GLOBAL NETWORK
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Global Community &amp; Hubs
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Connecting builders, researchers, validators, students, and creators worldwide through decentralized regional chapters, open meetups, and local developer support.
          </p>
        </div>

        {/* Community Grant & Chapter Notice */}
        <div className="mb-12">
          <UnderDevelopmentNotice
            title="REGIONAL HUB GRANTS &amp; EVENT SUBSIDY PORTAL IS IN PREPARATION"
            description="MONETA GLOBAL FOUNDATION provides direct funding for community meetups, regional hackathons, and student clubs. The official chapter application portal opens shortly."
            status="UNDER DEVELOPMENT"
            onNotifyClick={() => setIsWaitlistOpen(true)}
            actionLabel="GET COMMUNITY HUB ANNOUNCEMENTS"
          />
        </div>

        {/* 9 Community Roles */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
              WHO BELONGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1 mb-2">
              9 Community Pillars
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5]">
              Every contributor has an essential voice in shaping the future of decentralized systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMUNITY_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#050505] border border-[#202328] flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white font-display mb-1">
                    {role.role}
                  </h4>
                  <p className="text-xs text-[#A7ADB5] leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Regional Hubs Explorer */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
              REGIONAL CHAPTERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1 mb-2">
              Worldwide Regional Builder Hubs
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5]">
              Select a global region to explore developer numbers, local initiatives, and chapter leadership.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {REGIONAL_HUBS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setSelectedHub(hub.id)}
                className={`px-4 py-2 rounded text-xs font-mono transition-colors ${
                  selectedHub === hub.id
                    ? 'bg-[#FFFFFF] text-[#050505] font-bold'
                    : 'bg-[#050505] text-[#A7ADB5] hover:text-white border border-[#202328]'
                }`}
              >
                {hub.name}
              </button>
            ))}
          </div>

          {activeHub && (
            <div className="p-6 rounded-lg bg-[#050505] border border-[#202328] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A7ADB5]">
                  <MapPin className="w-4 h-4 text-white" />
                  <span>Regional Code: {activeHub.code}</span>
                  <span>&bull;</span>
                  <span>Lead: {activeHub.lead}</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display">
                  {activeHub.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                  {activeHub.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono text-white uppercase tracking-wider">
                    Key Regional Initiatives
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#A7ADB5]">
                    {activeHub.keyInitiatives.map((init, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span>{init}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="p-5 rounded-lg bg-[#15171A] border border-[#202328] space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-[#A7ADB5]">Active Developers</span>
                    <span className="text-white font-bold tabular-nums">{activeHub.activeDevelopers.toLocaleString()}+</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-[#A7ADB5]">Supported Programs</span>
                    <span className="text-white font-bold tabular-nums">{activeHub.programsCount}</span>
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-[#15171A] border border-[#202328] space-y-2">
                  <span className="text-xs font-mono text-white uppercase tracking-wider block">
                    Upcoming Events
                  </span>
                  <ul className="space-y-1 text-xs text-[#A7ADB5]">
                    {activeHub.upcomingEvents.map((evt, i) => (
                      <li key={i}>&bull; {evt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Community Promise */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-2">
            INCLUSION &amp; MERITOCRACY
          </span>
          <h2 className="text-2xl font-bold font-display text-white mb-6">
            Our Commitments to Every Builder
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMMUNITY_PROMISE_POINTS.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-[#050505] border border-[#202328]">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-xs text-[#A7ADB5]">{pt}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="Moneta Regional Community Hubs"
        defaultCategory="Community Hubs"
      />
    </div>
  );
};
