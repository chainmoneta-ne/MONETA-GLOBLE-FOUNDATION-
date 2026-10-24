import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Target
} from 'lucide-react';
import { DEFINITION_OF_SUCCESS } from '../data/foundationData';

export const OurStoryPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            THE MONETA NARRATIVE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-4">
            Our Story &amp; Purpose
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Where our journey begins, why ecosystems require more than protocols, and our commitment to builders around the globe.
          </p>
        </div>

        {/* SECTION 1: WHERE IT BEGINS */}
        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-2">
            WHERE IT BEGINS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] font-display mb-4">
            Technology Should Create Opportunity.
          </h2>
          <p className="text-base text-[#FFFFFF] leading-relaxed mb-4">
            <strong>MONETA GLOBAL FOUNDATION</strong> is born from a simple belief: <span className="font-semibold text-white">Technology should create opportunity.</span>
          </p>
          <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-4">
            The world is experiencing rapid technological change. Blockchain, artificial intelligence, distributed systems, cryptography, digital infrastructure, and open-source technology are changing how people communicate, coordinate, create, and exchange value.
          </p>
          <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
            But technological progress does not automatically create equal opportunity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] text-xs text-[#A7ADB5]">
              &bull; Many talented developers lack funding.
            </div>
            <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] text-xs text-[#A7ADB5]">
              &bull; Many students lack access to advanced education.
            </div>
            <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] text-xs text-[#A7ADB5]">
              &bull; Many researchers struggle to obtain resources.
            </div>
            <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] text-xs text-[#A7ADB5]">
              &bull; Many communities are disconnected from global ecosystems.
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm font-semibold text-[#FFFFFF]">
            MONETA GLOBAL FOUNDATION exists to help address that gap.
          </div>
        </div>

        {/* SECTION 2: WHY WE NEED IT */}
        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A7ADB5] block mb-2">
            WHY WE NEED IT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] font-display mb-4">
            Because Great Ideas Need Opportunity.
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-[#A7ADB5] mb-8">
            <p>&bull; A developer may have a brilliant idea but lack funding.</p>
            <p>&bull; A university researcher may have important research but lack resources.</p>
            <p>&bull; A student may have extraordinary potential but lack access to advanced education.</p>
            <p>&bull; A startup team may build useful technology but lack ecosystem guidance.</p>
            <p>&bull; An open-source project may provide essential public utility but lack sustainable support.</p>
          </div>

          <div className="p-6 rounded-lg bg-[#050505] border border-[#202328] mb-8">
            <p className="text-xs sm:text-sm italic text-[#FFFFFF] leading-relaxed">
              &ldquo;The Foundation exists so that talent, research, innovation, and community leadership can find the support they need to succeed.&rdquo;
            </p>
          </div>

          <h3 className="text-lg font-bold text-[#FFFFFF] font-display mb-4">
            Ecosystems Require More Than Just Protocols
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed mb-6">
            A blockchain cannot reach its potential solely through code. A healthy, long-term technological ecosystem requires education, research, developers, builders, independent security researchers, community organizers, and clear institutional principles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] text-xs text-[#A7ADB5]">
              <strong className="text-white block mb-1">Education</strong>
              Prepares new generations of software engineers and validator operators.
            </div>
            <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] text-xs text-[#A7ADB5]">
              <strong className="text-white block mb-1">Research</strong>
              Solves fundamental cryptographic and consensus problems.
            </div>
            <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] text-xs text-[#A7ADB5]">
              <strong className="text-white block mb-1">Grants</strong>
              Enable developers to build essential tools without commercial distortion.
            </div>
          </div>
        </div>

        {/* SECTION 3: DEFINITION OF SUCCESS */}
        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
              HOW WE MEASURE IMPACT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Our Definition of Success
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] mt-2">
              Success is not measured in hype or short-term speculation. It is measured in enduring public value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEFINITION_OF_SUCCESS.map((item, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[#050505] border border-[#202328] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A7ADB5]">
                  <CheckCircle2 className="w-4 h-4 text-[#FFFFFF]" />
                  <span>METRIC 0{idx + 1}</span>
                </div>
                <p className="text-sm font-medium text-white leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Link to Mission */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-xl bg-[#15171A] border border-[#202328]">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Explore Our Complete Mission &amp; Vision
            </h3>
            <p className="text-xs text-[#A7ADB5]">
              Read the 10-point charter mandate and community promise.
            </p>
          </div>
          <button
            onClick={() => navigateTo('mission')}
            className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
          >
            Read Mission &amp; Vision &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};
