import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Logo } from '../Logo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Target, 
  ShieldCheck, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Globe2, 
  Scale, 
  FileText, 
  Sparkles,
  Building2,
  Layers,
  Cpu
} from 'lucide-react';
import { EcosystemStatusModal, EcosystemEntity } from '../common/EcosystemStatusModal';

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedEcosystemEntity, setSelectedEcosystemEntity] = useState<EcosystemEntity | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (targetPage: Parameters<typeof navigateTo>[0]) => {
    navigateTo(targetPage);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#050505]/95 backdrop-blur-md border-b border-[#202328] text-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Zone: Logo + Wordmark */}
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center cursor-pointer py-2 focus:outline-none focus:ring-1 focus:ring-[#A7ADB5] rounded-lg"
            tabIndex={0}
            role="button"
            aria-label="Return to MONETA GLOBAL FOUNDATION homepage"
            onKeyDown={(e) => e.key === 'Enter' && handleNav('home')}
          >
            <Logo variant="light" size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" ref={dropdownRef}>
            
            {/* Home */}
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                currentPage === 'home'
                  ? 'text-[#FFFFFF] bg-[#15171A]'
                  : 'text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]'
              }`}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                  ['about', 'mission', 'story'].includes(currentPage)
                    ? 'text-[#FFFFFF] bg-[#15171A]'
                    : 'text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]'
                }`}
                aria-expanded={activeDropdown === 'about'}
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#15171A] rounded-xl border border-[#202328] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <button
                    onClick={() => handleNav('about')}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#202328] transition-colors flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#202328] flex items-center justify-center text-[#FFFFFF] flex-shrink-0 mt-0.5">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-[#FFFFFF]">About Foundation</span>
                      <span className="text-[11px] text-[#A7ADB5] block">Ecosystem steward &amp; charter</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('mission')}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#202328] transition-colors flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#202328] flex items-center justify-center text-[#FFFFFF] flex-shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-[#FFFFFF]">Mission &amp; Vision</span>
                      <span className="text-[11px] text-[#A7ADB5] block">Empower. Innovate. Unite.</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('story')}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#202328] transition-colors flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#202328] flex items-center justify-center text-[#FFFFFF] flex-shrink-0 mt-0.5">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-[#FFFFFF]">Our Story</span>
                      <span className="text-[11px] text-[#A7ADB5] block">Origins, independence &amp; growth</span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'programs' ? null : 'programs')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                  ['programs', 'grants', 'research', 'education', 'security', 'community', 'developers', 'developer-support'].includes(currentPage)
                    ? 'text-[#FFFFFF] bg-[#15171A]'
                    : 'text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]'
                }`}
                aria-expanded={activeDropdown === 'programs'}
              >
                <span>Programs</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'programs' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#15171A] rounded-xl border border-[#202328] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <button
                    onClick={() => handleNav('programs')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#202328] transition-colors flex items-center gap-3"
                  >
                    <Target className="w-4 h-4 text-[#A7ADB5]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]">Programs Overview</span>
                  </button>
                  <button
                    onClick={() => handleNav('grants')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#202328] transition-colors flex items-center gap-3"
                  >
                    <Target className="w-4 h-4 text-[#FFFFFF]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]">Grants &amp; Funding</span>
                  </button>
                  <button
                    onClick={() => handleNav('research')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#202328] transition-colors flex items-center gap-3"
                  >
                    <Sparkles className="w-4 h-4 text-[#A7ADB5]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]">Research &amp; Fellowships</span>
                  </button>
                  <button
                    onClick={() => handleNav('education')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#202328] transition-colors flex items-center gap-3"
                  >
                    <GraduationCap className="w-4 h-4 text-[#A7ADB5]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]">MONETA Academy &amp; Education</span>
                  </button>
                  <button
                    onClick={() => handleNav('security')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#202328] transition-colors flex items-center gap-3"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#A7ADB5]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]">Security &amp; Audits</span>
                  </button>
                  <button
                    onClick={() => handleNav('community')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#202328] transition-colors flex items-center gap-3"
                  >
                    <Users className="w-4 h-4 text-[#A7ADB5]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]">Global Community Hubs</span>
                  </button>
                  <button
                    onClick={() => handleNav('developer-support')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#202328] transition-colors flex items-center gap-3"
                  >
                    <FileText className="w-4 h-4 text-[#A7ADB5]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]">Developer Support</span>
                  </button>
                </div>
              )}
            </div>

            {/* Ecosystem Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'ecosystem' ? null : 'ecosystem')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                  ['ecosystem'].includes(currentPage)
                    ? 'text-[#FFFFFF] bg-[#15171A]'
                    : 'text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]'
                }`}
                aria-expanded={activeDropdown === 'ecosystem'}
              >
                <span>Ecosystem</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'ecosystem' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'ecosystem' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#15171A] rounded-xl border border-[#202328] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <button
                    onClick={() => handleNav('ecosystem')}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#202328] transition-colors flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#202328] flex items-center justify-center text-[#FFFFFF] flex-shrink-0 mt-0.5">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-[#FFFFFF]">Ecosystem Architecture</span>
                      <span className="text-[11px] text-[#A7ADB5] block">Tripartite governance framework</span>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      setSelectedEcosystemEntity('chain');
                    }}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#202328] transition-colors flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#202328] flex items-center justify-center text-[#FFFFFF] flex-shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-[#FFFFFF]">MONETA CHAIN</span>
                      <span className="text-[10px] text-[#A7ADB5] font-mono uppercase block">Scheduled Launch</span>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      setSelectedEcosystemEntity('vortex');
                    }}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#202328] transition-colors flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#202328] flex items-center justify-center text-[#FFFFFF] flex-shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-[#FFFFFF]">VORTEX INNOVATIONS</span>
                      <span className="text-[10px] text-[#A7ADB5] font-mono uppercase block">Core Tech Contributor</span>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      setSelectedEcosystemEntity('oracle');
                    }}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#202328] transition-colors flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#202328] flex items-center justify-center text-[#FFFFFF] flex-shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-[#FFFFFF]">MONETA ORACLE</span>
                      <span className="text-[10px] text-[#A7ADB5] font-mono uppercase block">Under Development</span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Governance Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'governance' ? null : 'governance')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                  ['governance', 'transparency', 'reports'].includes(currentPage)
                    ? 'text-[#FFFFFF] bg-[#15171A]'
                    : 'text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]'
                }`}
                aria-expanded={activeDropdown === 'governance'}
              >
                <span>Governance</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'governance' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'governance' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#15171A] rounded-xl border border-[#202328] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <button
                    onClick={() => handleNav('governance')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#202328] transition-colors flex items-center gap-3"
                  >
                    <Scale className="w-4 h-4 text-[#A7ADB5]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]">Governance Charter</span>
                  </button>

                  <button
                    onClick={() => handleNav('transparency')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#202328] transition-colors flex items-center gap-3"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#A7ADB5]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]">Transparency Center</span>
                  </button>

                  <button
                    onClick={() => handleNav('reports')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-[#202328] transition-colors flex items-center gap-3"
                  >
                    <FileText className="w-4 h-4 text-[#A7ADB5]" />
                    <span className="text-xs font-semibold text-[#FFFFFF]">Reports &amp; Documentation</span>
                  </button>
                </div>
              )}
            </div>

            {/* News */}
            <button
              onClick={() => handleNav('news')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                currentPage === 'news'
                  ? 'text-[#FFFFFF] bg-[#15171A]'
                  : 'text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]'
              }`}
            >
              News
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNav('contact')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                currentPage === 'contact'
                  ? 'text-[#FFFFFF] bg-[#15171A]'
                  : 'text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]'
              }`}
            >
              Contact
            </button>

          </nav>

          {/* Desktop Right Action: Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav('apply-funding')}
              className="px-4 py-2 rounded-lg bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
            >
              <Target className="w-3.5 h-3.5" />
              <span>APPLY FOR FUNDING</span>
            </button>
          </div>

          {/* Mobile Right Bar: Apply + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNav('apply-funding')}
              className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] text-[#050505] text-[11px] font-bold uppercase tracking-wider"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#15171A] border border-[#202328] text-[#FFFFFF] hover:bg-[#202328] focus:outline-none focus:ring-1 focus:ring-[#A7ADB5]"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505] border-t border-[#202328] px-4 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto">
          
          <button
            onClick={() => handleNav('apply-funding')}
            className="w-full py-3 rounded-lg bg-[#FFFFFF] text-[#050505] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
          >
            <Target className="w-4 h-4" />
            <span>APPLY FOR FUNDING</span>
          </button>

          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#A7ADB5] px-3 py-1">
              Main Navigation
            </div>
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              About Foundation
            </button>
            <button
              onClick={() => handleNav('mission')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Mission &amp; Vision
            </button>
            <button
              onClick={() => handleNav('story')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Our Story
            </button>
          </div>

          <div className="space-y-1 pt-2 border-t border-[#202328]">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#A7ADB5] px-3 py-1">
              Foundation Programs
            </div>
            <button
              onClick={() => handleNav('programs')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Programs Overview
            </button>
            <button
              onClick={() => handleNav('grants')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Grants &amp; Funding
            </button>
            <button
              onClick={() => handleNav('research')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Research &amp; Fellowships
            </button>
            <button
              onClick={() => handleNav('education')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              MONETA Academy &amp; Education
            </button>
            <button
              onClick={() => handleNav('security')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Security Initiatives &amp; Audits
            </button>
            <button
              onClick={() => handleNav('community')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Global Community Hubs
            </button>
            <button
              onClick={() => handleNav('developer-support')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Developer Support &amp; Tooling
            </button>
          </div>

          <div className="space-y-1 pt-2 border-t border-[#202328]">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#A7ADB5] px-3 py-1">
              Ecosystem &amp; Governance
            </div>
            <button
              onClick={() => handleNav('ecosystem')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Global Ecosystem Structure
            </button>
            <button
              onClick={() => handleNav('governance')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Governance Charter
            </button>
            <button
              onClick={() => handleNav('transparency')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Transparency Center
            </button>
            <button
              onClick={() => handleNav('reports')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Reports &amp; Documentation
            </button>
            <button
              onClick={() => handleNav('partners')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Partners &amp; Alliances
            </button>
            <button
              onClick={() => handleNav('careers')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Careers &amp; Fellowships
            </button>
            <button
              onClick={() => handleNav('news')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              News &amp; Dispatches
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#A7ADB5] hover:text-[#FFFFFF] hover:bg-[#15171A]"
            >
              Contact Secretariat
            </button>
          </div>
        </div>
      )}

      {/* Ecosystem Status Modal */}
      <EcosystemStatusModal
        isOpen={selectedEcosystemEntity !== null}
        onClose={() => setSelectedEcosystemEntity(null)}
        entity={selectedEcosystemEntity}
      />
    </header>
  );
};
