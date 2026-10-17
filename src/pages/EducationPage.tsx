import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  GraduationCap, 
  Code, 
  Server, 
  CheckCircle2, 
  Clock, 
  Award
} from 'lucide-react';
import { ACADEMY_COURSES } from '../data/foundationData';
import { StatusBadge } from '../components/common/StatusBadge';
import { UnderDevelopmentNotice } from '../components/common/UnderDevelopmentNotice';
import { WaitlistModal } from '../components/common/WaitlistModal';

export const EducationPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const tracks = ['All', 'Developer Academy', 'Validator Academy', 'Blockchain Fundamentals', 'Research Fellowships', 'University Partnerships'];

  const filteredCourses = ACADEMY_COURSES.filter((course) => {
    return selectedTrack === 'All' || course.track === selectedTrack;
  });

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            OPEN TECHNOLOGY EDUCATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            MONETA Academy &amp; Education
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Free, open-access curricula, developer bootcamps, validator workshops, and university courses designed to cultivate the next generation of blockchain engineers and distributed systems leaders.
          </p>
        </div>

        {/* Academy Registration Status */}
        <div className="mb-12">
          <UnderDevelopmentNotice
            title="MONETA ACADEMY COHORT 1 INTAKE IS IN PREPARATION"
            description="MONETA GLOBAL FOUNDATION is finalizing the open-access learning portal, interactive IDE sandbox, and verified credential engine. Early access notifications are available below."
            status="UNDER DEVELOPMENT"
            onNotifyClick={() => setIsWaitlistOpen(true)}
            actionLabel="NOTIFY ME FOR COHORT 1 ADMISSION"
          />
        </div>

        {/* Academy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#15171A] p-6 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-4">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-1">
              Developer Academy
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Master smart contract programming, zero-knowledge proofs, client SDK integration, and decentralized application architecture.
            </p>
          </div>

          <div className="bg-[#15171A] p-6 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-1">
              Validator Academy
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Step-by-step guides for running secure, geodistributed Proof-of-Stake validator nodes, key management, and monitoring.
            </p>
          </div>

          <div className="bg-[#15171A] p-6 rounded-xl border border-[#202328]">
            <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#202328] flex items-center justify-center text-white mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-1">
              University Fellowships
            </h3>
            <p className="text-xs text-[#A7ADB5] leading-relaxed">
              Curriculum partnerships with higher education institutes worldwide, granting credits for distributed systems coursework.
            </p>
          </div>
        </div>

        {/* Course Catalog */}
        <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
                CURRICULUM ARCHIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                Open Access Courses
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {tracks.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTrack(t)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                    selectedTrack === t
                      ? 'bg-[#FFFFFF] text-[#050505] font-bold'
                      : 'bg-[#050505] text-[#A7ADB5] hover:text-white border border-[#202328]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCourses.map((c) => (
              <div
                key={c.id}
                className="p-6 rounded-lg bg-[#050505] border border-[#202328] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#A7ADB5] mb-2">
                    <span>{c.track}</span>
                    <span className="text-white">{c.level}</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-display mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                    {c.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-mono text-[#A7ADB5]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {c.duration}
                    </span>
                    <span>&bull;</span>
                    <span>{c.modules} Modules</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#202328]">
                  <button
                    onClick={() => setSelectedCourse(selectedCourse === c.id ? null : c.id)}
                    className="w-full py-2 rounded bg-[#15171A] hover:bg-[#202328] text-xs font-mono uppercase text-white transition-colors"
                  >
                    {selectedCourse === c.id ? 'Hide Syllabus' : 'View Syllabus'}
                  </button>

                  {selectedCourse === c.id && (
                    <div className="mt-3 pt-3 border-t border-[#202328] space-y-2">
                      {c.syllabus.map((s, idx) => (
                        <div key={idx} className="text-xs">
                          <span className="font-mono text-white block">{s.week}: {s.topic}</span>
                          <span className="text-[#A7ADB5] text-[11px]">{s.details}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-xl bg-[#15171A] border border-[#202328] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Interested in Hosting a Local Builder Workshop?
            </h3>
            <p className="text-xs text-[#A7ADB5] mt-1">
              Connect with our Global Community team to receive educational toolkits and funding.
            </p>
          </div>
          <button
            onClick={() => navigateTo('community')}
            className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
          >
            Explore Community Hubs
          </button>
        </div>

      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="Moneta Academy Cohort 1"
        defaultCategory="Academy Courses"
      />
    </div>
  );
};
