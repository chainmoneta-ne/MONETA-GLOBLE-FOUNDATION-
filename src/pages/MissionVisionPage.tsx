import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { 
  FOUNDATION_MISSION_SEEKS, 
  FOUNDATION_VISION_POINTS, 
  FOUNDATION_PROMISE 
} from '../data/foundationData';

export const MissionVisionPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            GUIDING PRINCIPLES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Our Mission &amp; Vision
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Advancing an open, secure, innovative, inclusive, and sustainable technology ecosystem by supporting the people and organizations creating tomorrow.
          </p>
        </div>

        {/* Slogan Banner */}
        <div className="bg-[#15171A] p-6 sm:p-8 rounded-xl border border-[#202328] mb-12 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-1">
            OFFICIAL FOUNDATION SLOGAN
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-widest">
            EMPOWER. INNOVATE. UNITE.
          </h2>
        </div>

        {/* 2-Column Grid: Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* MISSION */}
          <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
                  Core Mandate
                </span>
                <Target className="w-5 h-5 text-[#FFFFFF]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-display mb-2">
                OUR MISSION
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#FFFFFF] italic mb-4">
                &ldquo;Empower people to build. Innovate for a better future. Unite communities through open technology.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
                The mission of MONETA GLOBAL FOUNDATION is to advance an open, secure, innovative, inclusive, and sustainable technology ecosystem by supporting the people and organizations creating the infrastructure, applications, research, education, and communities of tomorrow.
              </p>

              <div className="border-t border-[#202328] pt-5 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A7ADB5] block mb-3">
                  We seek to:
                </span>
                <ul className="space-y-2.5">
                  {FOUNDATION_MISSION_SEEKS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A7ADB5]">
                      <CheckCircle2 className="w-4 h-4 text-[#FFFFFF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#050505] border border-[#202328]">
              <p className="text-xs italic leading-relaxed text-[#A7ADB5]">
                &ldquo;Our mission is not simply to build technology. Our mission is to empower the people who build, use, study, secure, and improve technology.&rdquo;
              </p>
            </div>
          </div>

          {/* VISION */}
          <div className="bg-[#15171A] p-8 sm:p-10 rounded-xl border border-[#202328] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5]">
                  Strategic Horizon
                </span>
                <Eye className="w-5 h-5 text-[#FFFFFF]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] font-display mb-2">
                OUR VISION
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#FFFFFF] italic mb-4">
                &ldquo;A globally connected world where technology serves humanity fairly, transparently, and reliably.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
                We envision a decentralized digital infrastructure where economic participation is borderless, scientific discoveries are verified openly, and open-source public goods thrive with long-term institutional endowment.
              </p>

              <div className="border-t border-[#202328] pt-5 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A7ADB5] block mb-3">
                  We envision:
                </span>
                <ul className="space-y-2.5">
                  {FOUNDATION_VISION_POINTS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A7ADB5]">
                      <Sparkles className="w-4 h-4 text-[#FFFFFF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#050505] border border-[#202328]">
              <p className="text-xs italic leading-relaxed text-[#A7ADB5]">
                &ldquo;Technology should lower barriers, not build new walls. The future of open systems belongs to the entire global community.&rdquo;
              </p>
            </div>
          </div>

        </div>

        {/* Foundation Promise */}
        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
              COVENANT WITH BUILDERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              The Foundation&apos;s Promise
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] mt-2">
              Our solemn commitments to open-source contributors, grant recipients, and independent ecosystem participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDATION_PROMISE.map((promise, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
                <div className="text-xs font-mono text-[#A7ADB5]">PROMISE 0{idx + 1}</div>
                <p className="text-sm font-medium text-white leading-relaxed">{promise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-xl bg-[#15171A] border border-[#202328]">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Ready to collaborate on our shared mission?
            </h3>
            <p className="text-xs text-[#A7ADB5]">
              Explore active grant windows or submit an inquiry to our partnership secretariat.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => navigateTo('apply-funding')}
              className="px-5 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
            >
              Apply for Funding
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-5 py-2.5 rounded-lg bg-[#050505] hover:bg-[#202328] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-all border border-[#202328]"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
