import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Logo } from '../Logo';
import { Mail, Clock } from 'lucide-react';
import { EcosystemStatusModal, EcosystemEntity } from '../common/EcosystemStatusModal';
import { WaitlistModal } from '../common/WaitlistModal';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedEntity, setSelectedEntity] = useState<EcosystemEntity | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsWaitlistOpen(true);
    }
  };

  return (
    <footer className="bg-[#050505] text-[#FFFFFF] border-t border-[#202328] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#202328]">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-6 space-y-4">
            <div 
              onClick={() => navigateTo('home')}
              className="flex items-center cursor-pointer inline-flex focus:outline-none"
            >
              <Logo variant="light" size="lg" />
            </div>

            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF]">
              &ldquo;EMPOWER. INNOVATE. UNITE.&rdquo;
            </div>

            <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed max-w-lg">
              MONETA GLOBAL FOUNDATION is an independent global foundation established to support innovation, research, education, security, open technology, developers, communities, and sustainable ecosystem development.
            </p>

            <div className="p-3.5 rounded-lg bg-[#15171A] border border-[#202328] max-w-lg">
              <p className="text-[11px] text-[#A7ADB5] leading-relaxed">
                <strong className="text-[#FFFFFF]">Institutional Principle:</strong> We support MONETA CHAIN. We do not control MONETA CHAIN.
              </p>
            </div>
          </div>

          {/* Newsletter / Dispatch Signup */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#15171A] p-6 sm:p-8 rounded-xl border border-[#202328]">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-1">
                PUBLIC COMMUNICATIONS
              </span>
              <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2">
                Subscribe to Foundation Dispatches
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                Receive official research papers, fellowship admissions, grant window announcements, and security advisories.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#050505] border border-[#202328] text-xs sm:text-sm text-white placeholder-[#A7ADB5]/60 focus:outline-none focus:border-[#A7ADB5]"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-[#202328] text-xs">
          
          {/* Column 1: Foundation */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase tracking-wider text-[#FFFFFF] text-[11px]">
              Foundation
            </h4>
            <ul className="space-y-2 text-[#A7ADB5]">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">
                  About Foundation
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('mission')} className="hover:text-white transition-colors">
                  Mission &amp; Vision
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('story')} className="hover:text-white transition-colors">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('governance')} className="hover:text-white transition-colors">
                  Governance Charter
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('transparency')} className="hover:text-white transition-colors">
                  Transparency Center
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('reports')} className="hover:text-white transition-colors">
                  Reports &amp; Docs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase tracking-wider text-[#FFFFFF] text-[11px]">
              Programs
            </h4>
            <ul className="space-y-2 text-[#A7ADB5]">
              <li>
                <button onClick={() => navigateTo('programs')} className="hover:text-white transition-colors">
                  Programs Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('grants')} className="hover:text-white transition-colors">
                  Grants &amp; Funding
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('apply-funding')} className="hover:text-white transition-colors font-bold text-[#FFFFFF]">
                  Apply for Funding &rarr;
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('research')} className="hover:text-white transition-colors">
                  Research &amp; Fellowships
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('education')} className="hover:text-white transition-colors">
                  MONETA Academy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('security')} className="hover:text-white transition-colors">
                  Security &amp; Audits
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('community')} className="hover:text-white transition-colors">
                  Global Community Hubs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase tracking-wider text-[#FFFFFF] text-[11px]">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-[#A7ADB5]">
              <li>
                <button onClick={() => navigateTo('ecosystem')} className="hover:text-white transition-colors">
                  Ecosystem Structure
                </button>
              </li>
              <li>
                <button onClick={() => setSelectedEntity('chain')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>MONETA CHAIN</span>
                  <Clock className="w-3 h-3 text-[#A7ADB5]" />
                </button>
              </li>
              <li>
                <button onClick={() => setSelectedEntity('vortex')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>VORTEX INNOVATIONS</span>
                  <Clock className="w-3 h-3 text-[#A7ADB5]" />
                </button>
              </li>
              <li>
                <button onClick={() => setSelectedEntity('oracle')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>MONETA ORACLE</span>
                  <Clock className="w-3 h-3 text-[#A7ADB5]" />
                </button>
              </li>
              <li>
                <button onClick={() => setSelectedEntity('explorer')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>MONETA EXPLORER</span>
                  <Clock className="w-3 h-3 text-[#A7ADB5]" />
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('developer-support')} className="hover:text-white transition-colors">
                  Developer Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Engagement */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase tracking-wider text-[#FFFFFF] text-[11px]">
              Engagement
            </h4>
            <ul className="space-y-2 text-[#A7ADB5]">
              <li>
                <button onClick={() => navigateTo('partners')} className="hover:text-white transition-colors">
                  Partners &amp; Alliances
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('careers')} className="hover:text-white transition-colors">
                  Careers &amp; Fellowships
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('news')} className="hover:text-white transition-colors">
                  News &amp; Dispatches
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">
                  Contact Secretariat
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Governance & Legal */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h4 className="font-mono uppercase tracking-wider text-[#FFFFFF] text-[11px]">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2 text-[#A7ADB5]">
              <li>
                <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('terms')} className="hover:text-white transition-colors">
                  Terms of Use
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('accessibility')} className="hover:text-white transition-colors">
                  Accessibility Statement
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('security')} className="hover:text-white transition-colors">
                  Responsible Disclosure
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Principles */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A7ADB5]">
          <div className="text-center md:text-left">
            &copy; 2026 MONETA GLOBAL FOUNDATION. All rights reserved. Open technology for global public benefit.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">Privacy</button>
            <span>&bull;</span>
            <button onClick={() => navigateTo('terms')} className="hover:text-white transition-colors">Terms</button>
            <span>&bull;</span>
            <button onClick={() => navigateTo('accessibility')} className="hover:text-white transition-colors">Accessibility (WCAG AA)</button>
            <span>&bull;</span>
            <button onClick={() => navigateTo('transparency')} className="hover:text-white transition-colors">Transparency</button>
          </div>
        </div>

      </div>

      <EcosystemStatusModal
        isOpen={selectedEntity !== null}
        onClose={() => setSelectedEntity(null)}
        entity={selectedEntity}
      />

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        programTitle="Foundation Dispatches"
        defaultCategory="Public Goods"
      />
    </footer>
  );
};
