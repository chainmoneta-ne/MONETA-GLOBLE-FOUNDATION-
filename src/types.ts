export interface Grant {
  id: string;
  recipient: string;
  project: string;
  category: 'Wallets' | 'Infrastructure' | 'Developer Tools' | 'Applications' | 'Payments' | 'Security' | 'Interoperability' | 'Research' | 'Public Goods';
  amount: string;
  milestones: string;
  status: 'Completed' | 'Milestone 2/3' | 'Milestone 1/3' | 'Under Review' | 'Active';
  results: string;
  region: string;
  date: string;
  link?: string;
}

export interface TreasuryAsset {
  name: string;
  symbol: string;
  allocationPercent: number;
  usdValue: string;
  amount: string;
  category: 'Liquid Reserves' | 'Grant Reserve' | 'Ecosystem Growth' | 'Security & Audits' | 'Operational Buffer';
  multisigProtected: boolean;
}

export interface ResearchPaper {
  id: string;
  title: string;
  category: 'Cryptography' | 'Consensus' | 'Scalability' | 'Privacy' | 'Security' | 'Quantum-Resistant' | 'Distributed Systems' | 'AI & Blockchain';
  authors: string[];
  date: string;
  abstract: string;
  doi: string;
  readTime: string;
  status: 'Published' | 'Under Peer Review' | 'Active Grant';
}

export interface GovernancePolicy {
  id: string;
  title: string;
  category: 'Bylaws' | 'Conflicts of Interest' | 'Treasury Policy' | 'Grant Guidelines' | 'Security Disclosure' | 'Ethics Code';
  lastUpdated: string;
  version: string;
  summary: string;
}

export interface BoardMember {
  name: string;
  role: string;
  bio: string;
  committee: string;
  background: string;
  isIndependent: boolean;
}

export interface RegionalHub {
  id: string;
  name: string;
  code: string;
  lead: string;
  activeDevelopers: number;
  programsCount: number;
  upcomingEvents: string[];
  keyInitiatives: string[];
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Announcements' | 'Research' | 'Grants' | 'Community' | 'Security' | 'Governance' | 'Annual Reports';
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  highlight?: boolean;
}

export interface AcademyCourse {
  id: string;
  title: string;
  track: 'Developer Academy' | 'Validator Academy' | 'Blockchain Fundamentals' | 'Research Fellowships' | 'University Partnerships';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  modules: number;
  description: string;
  syllabus: { week: string; topic: string; details: string }[];
}
