import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BackButton } from '../components/common/BackButton';
import { Eye, Monitor, Keyboard, Zap } from 'lucide-react';

export const AccessibilityPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-[#050505] min-h-screen py-8 sm:py-12 text-[#FFFFFF] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Back Button */}
        <BackButton />

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-2">
            INCLUSIVE DESIGN STANDARD
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] font-display tracking-tight mb-3">
            Accessibility Statement
          </h1>
          <p className="text-xs font-mono text-[#A7ADB5]">
            Conforming to WCAG 2.1 Level AA Guidelines &bull; MONETA GLOBAL FOUNDATION
          </p>
        </div>

        {/* Statement Content */}
        <div className="bg-[#15171A] p-8 sm:p-12 rounded-xl border border-[#202328] space-y-8 text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
          
          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              Our Commitment to Digital Inclusion
            </h2>
            <p>
              MONETA GLOBAL FOUNDATION believes that decentralized technology and educational resources must be accessible to everyone, regardless of physical ability, device hardware, or connection bandwidth. We design and audit our digital interfaces to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white font-display mb-4">
              Key Accessibility Features Implemented
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] flex items-start gap-3">
                <Keyboard className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs mb-1">Keyboard Navigability</h4>
                  <p className="text-xs text-[#A7ADB5]">Full tab order, accessible skip link, and focus rings across all interactive controls.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] flex items-start gap-3">
                <Eye className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs mb-1">High Contrast Ratios</h4>
                  <p className="text-xs text-[#A7ADB5]">Universal Black Brand System exceeding 7:1 contrast ratios for all primary typography on dark surfaces.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] flex items-start gap-3">
                <Monitor className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs mb-1">Screen Reader Compatibility</h4>
                  <p className="text-xs text-[#A7ADB5]">Semantic HTML5 landmarks, ARIA roles, descriptive alt texts, and modal focus trapping.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#050505] border border-[#202328] flex items-start gap-3">
                <Zap className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs mb-1">Reduced Motion &amp; Low Bandwidth</h4>
                  <p className="text-xs text-[#A7ADB5]">Zero autoplay media, compositor-only smooth transitions, and lightweight vector assets.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white font-display mb-3">
              Feedback &amp; Accessibility Assistance
            </h2>
            <p className="mb-4">
              If you experience any difficulty navigating or accessing content on this website, please let us know so we can promptly address the barrier.
            </p>
            <button
              onClick={() => navigateTo('contact')}
              className="px-6 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all"
            >
              Contact Accessibility Coordinator
            </button>
          </section>

        </div>

      </div>
    </div>
  );
};
