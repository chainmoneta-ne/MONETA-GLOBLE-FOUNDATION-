import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type PageId =
  | 'home'
  | 'about'
  | 'mission'
  | 'mission-vision'
  | 'story'
  | 'our-story'
  | 'programs'
  | 'grants'
  | 'research'
  | 'education'
  | 'security'
  | 'community'
  | 'ecosystem'
  | 'governance'
  | 'transparency'
  | 'reports'
  | 'news'
  | 'partners'
  | 'contact'
  | 'apply-funding'
  | 'developers'
  | 'developer-support'
  | 'careers'
  | 'privacy'
  | 'terms'
  | 'accessibility'
  | '404';

export interface RouteMeta {
  title: string;
  description: string;
  parentRoute?: PageId;
  category?: 'main' | 'programs' | 'governance' | 'ecosystem' | 'legal' | 'system';
}

export const PAGE_ROUTES: Record<PageId, RouteMeta> = {
  home: {
    title: 'MONETA GLOBAL FOUNDATION — EMPOWER. INNOVATE. UNITE.',
    description: 'Official website of MONETA GLOBAL FOUNDATION. Supporting the ecosystem. Protecting its independence. Building the future. Empower. Innovate. Unite.',
    category: 'main',
  },
  about: {
    title: 'About Us | MONETA GLOBAL FOUNDATION',
    description: 'Learn about MONETA GLOBAL FOUNDATION, our constitutional independence as an ecosystem steward, our leadership, and our commitment to global public goods.',
    parentRoute: 'home',
    category: 'main',
  },
  mission: {
    title: 'Mission & Vision | MONETA GLOBAL FOUNDATION',
    description: 'Our mission to empower people to build, innovate for a better future, and unite communities through open technology.',
    parentRoute: 'about',
    category: 'main',
  },
  'mission-vision': {
    title: 'Mission & Vision | MONETA GLOBAL FOUNDATION',
    description: 'Our mission to empower people to build, innovate for a better future, and unite communities through open technology.',
    parentRoute: 'about',
    category: 'main',
  },
  story: {
    title: 'Our Story & Purpose | MONETA GLOBAL FOUNDATION',
    description: 'Where our journey begins: bridging the gap between technological progress and equal opportunity for builders worldwide.',
    parentRoute: 'about',
    category: 'main',
  },
  'our-story': {
    title: 'Our Story & Purpose | MONETA GLOBAL FOUNDATION',
    description: 'Where our journey begins: bridging the gap between technological progress and equal opportunity for builders worldwide.',
    parentRoute: 'about',
    category: 'main',
  },
  programs: {
    title: 'Programs & Strategic Initiatives | MONETA GLOBAL FOUNDATION',
    description: 'Explore core foundation programs: Grants, Research, MONETA Academy, Security Initiatives, Global Community, and Public Goods.',
    parentRoute: 'home',
    category: 'programs',
  },
  grants: {
    title: 'Grants Program | MONETA GLOBAL FOUNDATION',
    description: 'Transparent, milestone-based grant funding for open-source developers, researchers, and public good infrastructure builders.',
    parentRoute: 'programs',
    category: 'programs',
  },
  research: {
    title: 'Research & Innovation | MONETA GLOBAL FOUNDATION',
    description: 'Advancing cryptography, quantum resistance, distributed systems, consensus algorithms, and academic fellowships.',
    parentRoute: 'programs',
    category: 'programs',
  },
  education: {
    title: 'MONETA Academy & Education | MONETA GLOBAL FOUNDATION',
    description: 'Comprehensive, free technology education, developer bootcamps, validator training, and university partnerships.',
    parentRoute: 'programs',
    category: 'programs',
  },
  security: {
    title: 'Security Initiatives & Audits | MONETA GLOBAL FOUNDATION',
    description: 'Promoting responsible security research, independent smart contract audits, formal verification, and coordinated bug bounties.',
    parentRoute: 'programs',
    category: 'programs',
  },
  community: {
    title: 'Global Community & Regional Hubs | MONETA GLOBAL FOUNDATION',
    description: 'Connecting developers, researchers, students, and grassroots builders across Africa, Europe, Asia, the Americas, and Oceania.',
    parentRoute: 'programs',
    category: 'programs',
  },
  ecosystem: {
    title: 'Global Ecosystem & Architecture | MONETA GLOBAL FOUNDATION',
    description: 'Understanding the distinct roles of Vortex Innovations, MONETA Global Foundation, and the decentralized MONETA Chain network.',
    parentRoute: 'home',
    category: 'ecosystem',
  },
  governance: {
    title: 'Governance & Independence Charter | MONETA GLOBAL FOUNDATION',
    description: 'Our constitutional framework, non-interference bylaws, conflict of interest disclosures, and steward governance model.',
    parentRoute: 'about',
    category: 'governance',
  },
  transparency: {
    title: 'Transparency Center | MONETA GLOBAL FOUNDATION',
    description: 'Open governance records, multisig treasury policies, verifiable disbursements, ethics registry, and audit reports.',
    parentRoute: 'governance',
    category: 'governance',
  },
  reports: {
    title: 'Reports & Publications | MONETA GLOBAL FOUNDATION',
    description: 'Annual Foundation reports, quarterly ecosystem reviews, security audit publications, and research whitepapers.',
    parentRoute: 'transparency',
    category: 'governance',
  },
  news: {
    title: 'News & Announcements | MONETA GLOBAL FOUNDATION',
    description: 'Official announcements, program updates, research releases, and community dispatches from the Foundation.',
    parentRoute: 'home',
    category: 'main',
  },
  partners: {
    title: 'Institutional Partnerships | MONETA GLOBAL FOUNDATION',
    description: 'Collaborating with leading universities, research institutes, open-source consortiums, and technology alliances.',
    parentRoute: 'about',
    category: 'main',
  },
  contact: {
    title: 'Contact MONETA GLOBAL FOUNDATION',
    description: 'Official channels for general inquiries, institutional partnerships, research grants, media, and coordinated security disclosures.',
    parentRoute: 'home',
    category: 'main',
  },
  'apply-funding': {
    title: 'Apply for Funding | MONETA GLOBAL FOUNDATION',
    description: 'Official grant application portal. Check program availability, guidelines, milestone verification, and waitlist status.',
    parentRoute: 'grants',
    category: 'programs',
  },
  developers: {
    title: 'Developer Support & Resources | MONETA GLOBAL FOUNDATION',
    description: 'SDKs, documentation, developer grants, testnet faucets, hackathons, and technical mentorship.',
    parentRoute: 'programs',
    category: 'programs',
  },
  'developer-support': {
    title: 'Developer Support & Resources | MONETA GLOBAL FOUNDATION',
    description: 'SDKs, documentation, developer grants, testnet faucets, hackathons, and technical mentorship.',
    parentRoute: 'programs',
    category: 'programs',
  },
  careers: {
    title: 'Careers & Fellowships | MONETA GLOBAL FOUNDATION',
    description: 'Join the foundation as a research fellow, ecosystem coordinator, technical evaluator, or educational mentor.',
    parentRoute: 'about',
    category: 'main',
  },
  privacy: {
    title: 'Privacy Policy | MONETA GLOBAL FOUNDATION',
    description: 'How MONETA Global Foundation handles data privacy, adhering to GDPR, zero-tracking principles, and user rights.',
    parentRoute: 'home',
    category: 'legal',
  },
  terms: {
    title: 'Terms of Use | MONETA GLOBAL FOUNDATION',
    description: 'Official terms of use, non-commercial licenses, disclaimers, and open-source attribution terms.',
    parentRoute: 'home',
    category: 'legal',
  },
  accessibility: {
    title: 'Accessibility Statement | MONETA GLOBAL FOUNDATION',
    description: 'Our commitment to WCAG 2.1 AA accessibility, keyboard navigation, low-bandwidth optimization, and screen reader support.',
    parentRoute: 'home',
    category: 'legal',
  },
  '404': {
    title: 'Page Not Found | MONETA GLOBAL FOUNDATION',
    description: 'The requested page could not be found. Return to MONETA GLOBAL FOUNDATION home or browse our programs.',
    parentRoute: 'home',
    category: 'system',
  },
};

interface NavigationContextType {
  currentPage: PageId;
  navigateTo: (page: PageId, options?: { replace?: boolean; scrollUp?: boolean }) => void;
  goBack: () => void;
  canGoBack: boolean;
  parentPage: PageId | null;
  historyStack: PageId[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function getPathFromPage(page: PageId): string {
  if (page === 'home') return '/';
  return `/${page}`;
}

function getPageFromPath(path: string): PageId {
  const cleanPath = path.toLowerCase().replace(/^\/+|\/+$/g, '');
  if (!cleanPath || cleanPath === 'home' || cleanPath === 'index.html') {
    return 'home';
  }

  // Check direct match
  if (cleanPath in PAGE_ROUTES) {
    return cleanPath as PageId;
  }

  // Handle aliases
  if (cleanPath === 'academy') return 'education';
  if (cleanPath === 'funding') return 'apply-funding';
  if (cleanPath === 'grant-application') return 'apply-funding';
  if (cleanPath === 'mission' || cleanPath === 'vision') return 'mission';
  if (cleanPath === 'story') return 'story';
  if (cleanPath === 'legal') return 'terms';
  if (cleanPath === 'a11y') return 'accessibility';
  if (cleanPath === 'dev' || cleanPath === 'developers') return 'developer-support';

  return '404';
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash && hash in PAGE_ROUTES) {
        return hash as PageId;
      }
      return getPageFromPath(window.location.pathname);
    }
    return 'home';
  });

  const [historyStack, setHistoryStack] = useState<PageId[]>(['home']);

  // Update document title and metadata
  useEffect(() => {
    const meta = PAGE_ROUTES[currentPage] || PAGE_ROUTES['404'];
    document.title = meta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);
  }, [currentPage]);

  // Handle browser popstate (back / forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const newPage = getPageFromPath(window.location.pathname);
      setCurrentPage(newPage);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback(
    (page: PageId, options?: { replace?: boolean; scrollUp?: boolean }) => {
      const scrollUp = options?.scrollUp !== false;
      const targetPage = page in PAGE_ROUTES ? page : '404';

      if (options?.replace) {
        window.history.replaceState({ page: targetPage }, '', getPathFromPage(targetPage));
      } else {
        window.history.pushState({ page: targetPage }, '', getPathFromPage(targetPage));
        setHistoryStack((prev) => [...prev, targetPage]);
      }

      setCurrentPage(targetPage);

      if (scrollUp && typeof window !== 'undefined') {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    },
    []
  );

  const parentPage = PAGE_ROUTES[currentPage]?.parentRoute || null;

  const goBack = useCallback(() => {
    if (typeof window !== 'undefined' && window.history.length > 1 && historyStack.length > 1) {
      window.history.back();
      setHistoryStack((prev) => prev.slice(0, -1));
    } else if (parentPage) {
      navigateTo(parentPage, { scrollUp: true });
    } else {
      navigateTo('home', { scrollUp: true });
    }
  }, [historyStack, parentPage, navigateTo]);

  const canGoBack = currentPage !== 'home';

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigateTo,
        goBack,
        canGoBack,
        parentPage,
        historyStack,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
