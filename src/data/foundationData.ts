import { Grant, TreasuryAsset, ResearchPaper, GovernancePolicy, BoardMember, RegionalHub, NewsArticle, AcademyCourse } from '../types';

export const FOUNDATION_STATS = {
  totalTreasuryUsd: '$84,500,000',
  totalGrantsDisbursed: '$18,250,000',
  activeGrantsCount: 142,
  countriesReached: 64,
  researchFellows: 48,
  activeDevelopersTrained: 12400,
  independentAuditsCompleted: 26,
  multisigQuorum: '4 of 7 Independent Keys',
};

export const TREASURY_ALLOCATION = [
  { name: 'Developer & Public Good Grants', percent: 35, amountUsd: '$29,575,000', color: '#FFFFFF' },
  { name: 'Research & Cryptography Grants', percent: 20, amountUsd: '$16,900,000', color: '#A7ADB5' },
  { name: 'Security Audits & Bug Bounties', percent: 15, amountUsd: '$12,675,000', color: '#858B93' },
  { name: 'Moneta Academy & Education', percent: 12, amountUsd: '$10,140,000', color: '#656A72' },
  { name: 'Global Community & Regional Hubs', percent: 10, amountUsd: '$8,450,000', color: '#454950' },
  { name: 'Operational & Legal Stewardship', percent: 8, amountUsd: '$6,760,000', color: '#2B2E33' },
];

export const GRANTS_DATA: Grant[] = [
  {
    id: 'MGF-GR-2026-089',
    recipient: 'AeroWallet Labs (Nairobi & Berlin)',
    project: 'Next-Gen Quantum-Resistant Light Client Wallet for Android & Web',
    category: 'Wallets',
    amount: '$145,000',
    milestones: 'Milestone 2/3 complete',
    status: 'Milestone 2/3',
    results: 'Post-quantum ML-KEM signature key derivation integrated; open-source Apache 2.0 release on GitHub.',
    region: 'Africa & Europe',
    date: 'Aug 2026',
  },
  {
    id: 'MGF-GR-2026-074',
    recipient: 'Dr. Kwame Mensah Research Group, Univ. of Ghana',
    project: 'Asynchronous Byzantine Fault Tolerant Sharding Protocol for Low-Bandwidth Nodes',
    category: 'Research',
    amount: '$210,000',
    milestones: 'All 3 Milestones complete',
    status: 'Completed',
    results: 'Published IEEE Transactions paper + testnet benchmark showing 4.2x throughput resilience under intermittent cellular links.',
    region: 'Africa',
    date: 'Jul 2026',
  },
  {
    id: 'MGF-GR-2026-068',
    recipient: 'Solidity & Rust Dev Collective',
    project: 'MonetaSDK: Zero-Overhead Developer SDK for Rust, TypeScript, and Go',
    category: 'Developer Tools',
    amount: '$95,000',
    milestones: 'Milestone 3/3 complete',
    status: 'Completed',
    results: 'SDK downloaded over 45,000 times; comprehensive developer guides and interactive sandbox live.',
    region: 'Global',
    date: 'Jun 2026',
  },
  {
    id: 'MGF-GR-2026-052',
    recipient: 'ShieldProtocol Audits Consortium',
    project: 'Continuous Formal Verification Framework for Moneta Smart Contracts',
    category: 'Security',
    amount: '$180,000',
    milestones: 'Milestone 1/3 verified',
    status: 'Milestone 1/3',
    results: 'Formal semantics engine v1 deployed; 14 critical mathematical proofs automated for ecosystem protocols.',
    region: 'Europe',
    date: 'May 2026',
  },
  {
    id: 'MGF-GR-2026-041',
    recipient: 'PawaPay Bridge Open-Source Team',
    project: 'Decentralized Micro-Payment Rails & Cross-Border Offline Settlement Protocol',
    category: 'Payments',
    amount: '$160,000',
    milestones: 'Active execution',
    status: 'Active',
    results: 'Sub-cent fee settlement verified across 6 African national mobile money switches.',
    region: 'Africa',
    date: 'Apr 2026',
  },
  {
    id: 'MGF-GR-2026-033',
    recipient: 'InterChain State Relayer Foundation',
    project: 'Zero-Knowledge Trustless Bridge Standard between Moneta and EVM/IBC Networks',
    category: 'Interoperability',
    amount: '$250,000',
    milestones: 'Milestone 2/3 complete',
    status: 'Milestone 2/3',
    results: 'Groth16 / Plonk recursive proof verification contract deployed to Moneta Testnet; audited by Trail of Bits.',
    region: 'Asia & North America',
    date: 'Mar 2026',
  },
  {
    id: 'MGF-GR-2026-019',
    recipient: 'OpenNode Public Infrastructure Alliance',
    project: 'Decentralized RPC Geodistributed Load-Balancing Mesh for Global RPC Endpoints',
    category: 'Infrastructure',
    amount: '$120,000',
    milestones: 'All 3 Milestones complete',
    status: 'Completed',
    results: 'Deployed 82 community-run validator telemetry nodes spanning Lagos, Johannesburg, São Paulo, Singapore, Frankfurt, and Tokyo.',
    region: 'Global',
    date: 'Feb 2026',
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'RES-2026-01',
    title: 'Adaptive Lattice-Based Cryptography for Post-Quantum Blockchain Validators',
    category: 'Quantum-Resistant',
    authors: ['Prof. Elena Rostova', 'Dr. Tariq Al-Mansoor', 'Moneta Research Fellow team'],
    date: 'August 2026',
    abstract: 'We present a concrete evaluation of Falcon-512 and Dilithium signatures in high-throughput decentralized consensus, demonstrating zero memory degradation in edge validator devices.',
    doi: '10.1145/moneta.2026.08.01',
    readTime: '14 min read',
    status: 'Published',
  },
  {
    id: 'RES-2026-02',
    title: 'Stateless Block Verification and Zero-Knowledge State Accumulators on Edge Hardware',
    category: 'Scalability',
    authors: ['Dr. Samuel Osei', 'Wei Zhang, PhD'],
    date: 'July 2026',
    abstract: 'An in-depth framework for Verkle tree state roots with SNARK proofs, reducing validator hardware storage footprint by 91% while maintaining complete decentralized verification.',
    doi: '10.1145/moneta.2026.07.02',
    readTime: '18 min read',
    status: 'Published',
  },
  {
    id: 'RES-2026-03',
    title: 'Formalized Privacy-Preserving Compliance and Selective Disclosure for Global Remittances',
    category: 'Privacy',
    authors: ['MGF Cryptography Working Group', 'Prof. Chiara Moretti'],
    date: 'May 2026',
    abstract: 'Proposing cryptographic viewing keys and zero-knowledge proofs of solvency that fulfill international financial transparency standards without compromising user privacy.',
    doi: '10.1145/moneta.2026.05.03',
    readTime: '11 min read',
    status: 'Published',
  },
  {
    id: 'RES-2026-04',
    title: 'Sybil-Resilient Distributed Reputation Networks without Identity Centralization',
    category: 'Consensus',
    authors: ['Dr. Amina Diallo', 'Liam Thornton'],
    date: 'April 2026',
    abstract: 'A graph-theoretic model for decentralized validator stake distribution and validator quality scoring that resists cartel collusion and multi-node pooling.',
    doi: '10.1145/moneta.2026.04.04',
    readTime: '16 min read',
    status: 'Published',
  },
];

export const GOVERNANCE_CAN_CANNOT = {
  can: [
    { title: 'Fund Developers & Open Source', desc: 'Deploy milestone-based grants to builders of wallets, tools, indexers, and public goods.' },
    { title: 'Fund Cutting-Edge Research', desc: 'Sponsor independent university fellowships in cryptography, quantum resistance, and consensus.' },
    { title: 'Fund Independent Security Audits', desc: 'Finance third-party code reviews, formal verification, and public bug bounty reserves.' },
    { title: 'Support Education & Academy', desc: 'Provide free global curriculum for developers, validators, students, and entrepreneurs.' },
    { title: 'Support Regional Communities', desc: 'Organize global hackathons, developer meetups, and student campus ambassador networks.' },
    { title: 'Support Public Infrastructure', desc: 'Fund open-source testnets, telemetry dashboards, block explorers, and RPC relays.' },
    { title: 'Publish Research & Recommendations', desc: 'Author non-binding technical improvement proposals (MIPs) for the community to evaluate.' },
    { title: 'Advocate for Global Adoption', desc: 'Partner with universities, NGOs, and public institutions to expand open economic opportunity.' },
  ],
  cannot: [
    { title: 'Cannot Shut Down MONETA CHAIN', desc: 'The network is run by independent distributed validators across the globe; the Foundation has no kill-switch.' },
    { title: 'Cannot Freeze User Funds', desc: 'The Foundation possesses zero cryptographic keys or backdoors into smart contracts or user accounts.' },
    { title: 'Cannot Change User Balances', desc: 'Ledger state is purely immutable and governed by cryptographic consensus mathematics.' },
    { title: 'Cannot Control Validator Sets', desc: 'Validators operate autonomously based on proof-of-stake consensus; no permission is granted by the Foundation.' },
    { title: 'Cannot Force Protocol Upgrades', desc: 'Nodes and validators freely decide which client software and consensus forks they run.' },
    { title: 'Cannot Rewrite Consensus Rules', desc: 'Consensus rule changes require broad decentralized node agreement, not Foundation executive decrees.' },
    { title: 'Cannot Take Ownership of the Network', desc: 'MONETA CHAIN is a public, open-source common good that belongs to no single corporate entity.' },
    { title: 'Cannot Override Network Governance', desc: 'On-chain decentralized voting and validator signals supersede any organizational statement.' },
  ]
};

export const BOARD_AND_LEADERSHIP: BoardMember[] = [
  {
    name: 'Dr. Folashade Adeleke',
    role: 'Board Chair & Ecosystem Trustee',
    committee: 'Governance & Ethics Committee',
    bio: 'Pioneer in African open technology, former IEEE Distributed Systems Lead, Senior Research Fellow in cryptography.',
    background: 'PhD in Computer Science, Oxford & Univ. of Cape Town',
    isIndependent: true,
  },
  {
    name: 'Prof. Marcus Vance',
    role: 'Technology & Research Director',
    committee: 'Technology Committee (Chair)',
    bio: 'Author of 30+ peer-reviewed papers on distributed systems, zero-knowledge proofs, and post-quantum lattices.',
    background: 'Former Professor of Cryptography, ETH Zürich',
    isIndependent: true,
  },
  {
    name: 'Helena Lindqvist',
    role: 'Finance & Audit Director',
    committee: 'Audit & Transparency Committee (Chair)',
    bio: 'Over 18 years in institutional non-profit treasury stewardship, public audit compliance, and multi-jurisdictional non-profit finance.',
    background: 'CPA, Former Senior Partner at Ernst & Young Non-Profit Practice',
    isIndependent: true,
  },
  {
    name: 'Zubair Al-Hassan',
    role: 'Legal & Compliance Director',
    committee: 'Legal & Policy Committee',
    bio: 'Specialist in open-source licensing, decentralized foundation charters, and international public-goods jurisprudence.',
    background: 'LLM International Law, Geneva Institute',
    isIndependent: true,
  },
  {
    name: 'Amara Chisom',
    role: 'Ecosystem & Community Director',
    committee: 'Grant Committee',
    bio: 'Community builder who organized over 120 hackathons and developer incubators spanning 28 African nations.',
    background: 'Former Director of Developer Relations, Pan-African Tech Hub',
    isIndependent: false,
  },
  {
    name: 'Dr. Kenji Takahashi',
    role: 'Independent Security Trustee',
    committee: 'Security & Bug Bounty Committee (Chair)',
    bio: '20+ years in cryptographic vulnerability disclosure, formal verification, and critical infrastructure defense.',
    background: 'Former Lead Security Researcher, Cyber Defense Lab Tokyo',
    isIndependent: true,
  }
];

export const REGIONAL_HUBS: RegionalHub[] = [
  {
    id: 'africa',
    name: 'Africa',
    code: 'AFR',
    lead: 'Nairobi, Lagos, Accra, Cape Town',
    activeDevelopers: 5800,
    programsCount: 38,
    upcomingEvents: ['Pan-African Builder Hackathon 2026', 'East Africa Developer Bootcamp', 'West Africa Fintech Summit'],
    keyInitiatives: ['Mobile-first payment rails', 'Offline validator testbeds', 'University blockchain incubators in 14 universities'],
    description: 'The primary launchpad for high-utility decentralized financial access, micro-settlements, and developer empowerment.'
  },
  {
    id: 'asia',
    name: 'Asia',
    code: 'ASI',
    lead: 'Singapore, Tokyo, Seoul, Bangalore',
    activeDevelopers: 3400,
    programsCount: 24,
    upcomingEvents: ['Asia Cryptography Symposium', 'Bengaluru Smart Contract Summit', 'Tokyo Developer Workshop'],
    keyInitiatives: ['High-throughput low latency relays', 'Zero-knowledge hardware acceleration', 'Enterprise interoperability protocols'],
    description: 'Advancing high-performance engineering, post-quantum hardware acceleration, and cross-border settlement tooling.'
  },
  {
    id: 'europe',
    name: 'Europe',
    code: 'EUR',
    lead: 'Berlin, Zurich, London, Stockholm',
    activeDevelopers: 2100,
    programsCount: 19,
    upcomingEvents: ['European Decentralized Infrastructure Forum', 'Zurich Research Fellowship Colloquium'],
    keyInitiatives: ['Privacy-preserving compliant rails', 'Formal verification toolchains', 'Academic research partnerships with top EU universities'],
    description: 'Focused on formal verification, academic cryptography research, and open standards for public goods.'
  },
  {
    id: 'north-america',
    name: 'North America',
    code: 'NAM',
    lead: 'San Francisco, New York, Toronto',
    activeDevelopers: 1600,
    programsCount: 14,
    upcomingEvents: ['North American Validator Summit', 'Consensus Architecture Workshop NYC'],
    keyInitiatives: ['Institutional-grade infrastructure', 'Developer tooling & SDKs', 'Open source legal stewardship frameworks'],
    description: 'Fostering developer tooling, high-assurance security audits, and institutional public-goods research.'
  },
  {
    id: 'south-america',
    name: 'South America',
    code: 'SAM',
    lead: 'São Paulo, Buenos Aires, Bogotá',
    activeDevelopers: 1100,
    programsCount: 11,
    upcomingEvents: ['LatAm Web3 Public Goods Hackathon', 'Buenos Aires Developer Meetup'],
    keyInitiatives: ['Inflation-hedged local commerce tooling', 'Spanish & Portuguese academy translations', 'Peer-to-peer validator mesh'],
    description: 'Empowering local communities with decentralized economic tooling, educational grants, and developer bootcamps.'
  },
  {
    id: 'oceania',
    name: 'Oceania',
    code: 'OCE',
    lead: 'Sydney, Melbourne, Auckland',
    activeDevelopers: 400,
    programsCount: 6,
    upcomingEvents: ['Sydney Research Roundtable', 'Pacific Decentralized Tech Day'],
    keyInitiatives: ['Distributed edge nodes for remote connectivity', 'Green validator energy research'],
    description: 'Pioneering renewable energy validator research and decentralized mesh networks for island communities.'
  }
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'course-dev-101',
    title: 'Developer Academy: Rust & Smart Contracts on Moneta',
    track: 'Developer Academy',
    level: 'Intermediate',
    duration: '8 Weeks (Self-paced + Live Mentorship)',
    modules: 6,
    description: 'Master the Moneta Virtual Machine, state architecture, zero-knowledge proofs, and secure contract patterns with 100% hands-on code.',
    syllabus: [
      { week: 'Week 1-2', topic: 'Moneta Architecture & Core Primitives', details: 'Account model, gas schedules, asynchronous state, and local testnet setup.' },
      { week: 'Week 3-4', topic: 'Smart Contract Development in Rust', details: 'Memory safety, contract interfaces, state management, and re-entrancy prevention.' },
      { week: 'Week 5-6', topic: 'Zero-Knowledge Integrations & Cryptography', details: 'Writing zero-knowledge circuits, verifying proofs on-chain, and private state tokens.' },
      { week: 'Week 7-8', topic: 'Auditing, Testing & Capstone Deployment', details: 'Automated fuzzing with Echidna, formal verification, and launching to Moneta Testnet.' }
    ]
  },
  {
    id: 'course-val-201',
    title: 'Validator Academy: Infrastructure, Security & High-Availability',
    track: 'Validator Academy',
    level: 'Advanced',
    duration: '4 Weeks',
    modules: 4,
    description: 'A comprehensive operational guide for node operators, data centers, and home validators to maintain 99.99% consensus uptime safely.',
    syllabus: [
      { week: 'Week 1', topic: 'Hardware Architecture & Key Management', details: 'HSMs, air-gapped signer setups, and multisig threshold operational keys.' },
      { week: 'Week 2', topic: 'P2P Network Topology & DDoS Mitigation', details: 'Sentry node architectures, firewall hardening, and geodistributed peering.' },
      { week: 'Week 3', topic: 'Monitoring, Telemetry & Slashing Defense', details: 'Prometheus/Grafana telemetry, double-signing protection, and automated failover.' },
      { week: 'Week 4', topic: 'Decentralized Staking & Community Delegation', details: 'Delegator transparency reports, fee economics, and disaster recovery runs.' }
    ]
  },
  {
    id: 'course-fund-001',
    title: 'Blockchain Fundamentals & Open Economic Systems',
    track: 'Blockchain Fundamentals',
    level: 'Beginner',
    duration: '3 Weeks',
    modules: 3,
    description: 'Zero technical prerequisites required. Learn the foundational philosophy of decentralized networks, cryptographic trust, and public goods.',
    syllabus: [
      { week: 'Week 1', topic: 'The Philosophy of Decentralization', details: 'Why decentralization matters: censorship resistance, self-sovereignty, and public goods.' },
      { week: 'Week 2', topic: 'How Blockchains Work Under the Hood', details: 'Blocks, cryptographic hashes, consensus mechanisms (PoS, PoW, BFT), and distributed ledgers.' },
      { week: 'Week 3', topic: 'The Moneta Ecosystem & Global Use Cases', details: 'Real-world micro-payments, cross-border commerce, oracles, and building an open future.' }
    ]
  },
  {
    id: 'course-fellow-301',
    title: 'Post-Doctoral & Doctoral Research Fellowships',
    track: 'Research Fellowships',
    level: 'Advanced',
    duration: '6 to 12 Months',
    modules: 4,
    description: 'Fully funded research stipends ($60,000 - $120,000) for researchers working on advanced cryptography, quantum resilience, or consensus theory.',
    syllabus: [
      { week: 'Phase 1', topic: 'Research Proposal & Committee Approval', details: 'Formal peer review by MGF Technology Committee.' },
      { week: 'Phase 2', topic: 'Initial Proof of Concept & Mathematical Modeling', details: 'Interim report, simulation benchmarks, and open research colloquium.' },
      { week: 'Phase 3', topic: 'Formal Publication & Open-Source Reference Implementation', details: 'Submission to top-tier peer-reviewed conferences (IEEE, ACM, CRYPTO).' }
    ]
  }
];

export const PROGRAM_CARDS = [
  {
    id: 'grants',
    title: 'Grants & Builder Funding',
    category: 'Capital & Support',
    status: 'Active Cohort 4',
    description: 'Non-dilutive milestone-based capital for open-source builders, wallets, infrastructure, and tools.',
    metric: '$18.25M Disbursed',
  },
  {
    id: 'research',
    title: 'Research & Cryptography Fellowships',
    category: 'Academic Research',
    status: 'Open Admissions',
    description: 'Funded doctoral stipends and laboratory grants for quantum-resistant lattice cryptography and consensus.',
    metric: '48 Active Fellows',
  },
  {
    id: 'academy',
    title: 'MONETA Academy & Education',
    category: 'Open Education',
    status: 'Continuous Enrollment',
    description: 'Zero-cost curriculum, validator bootcamps, Rust smart contract tutorials, and university lectures.',
    metric: '12,400+ Students',
  },
  {
    id: 'security',
    title: 'Security Audits & Bug Bounties',
    category: 'Public Resilience',
    status: 'Continuous Reserve',
    description: 'Continuous formal verification passes, third-party code reviews, and up to $250k bug bounty tiers.',
    metric: '26 Audits Complete',
  },
  {
    id: 'community',
    title: 'Global Community & Regional Hubs',
    category: 'Grassroots Ecosystem',
    status: '6 Global Regions',
    description: 'Empowering local builder chapters, hackathons, translation circles, and campus ambassador networks.',
    metric: '60+ Countries',
  },
  {
    id: 'dev-support',
    title: 'Developer Support & Tooling',
    category: 'Infrastructure',
    status: 'Open Source',
    description: 'Free RPC node clusters, SDKs in Rust/TypeScript/Go, testnet faucets, and 24/7 technical mentors.',
    metric: '82 Nodes Active',
  },
];

export const NEWS_AND_REPORTS: NewsArticle[] = [
  {
    id: 'NEWS-2026-08-30',
    title: 'Moneta Global Foundation Publishes Q2 2026 Financial & Treasury Transparency Report',
    category: 'Annual Reports',
    date: 'August 30, 2026',
    readTime: '6 min read',
    excerpt: 'Detailed multi-signature treasury reconciliation showing $84.5M in reserves, 42 new grants awarded, and zero executive single-point spend authorizations.',
    author: 'Helena Lindqvist, Finance Director',
    highlight: true,
  },
  {
    id: 'NEWS-2026-08-15',
    title: 'Announcing the $5,000,000 Pan-African Open Developer Grant Cohort 4',
    category: 'Grants',
    date: 'August 15, 2026',
    readTime: '4 min read',
    excerpt: 'Expanding milestone-based funding for builders creating mobile-first wallets, offline settlement engines, and educational hubs across Africa.',
    author: 'Amara Chisom, Ecosystem Director',
    highlight: true,
  },
  {
    id: 'NEWS-2026-07-28',
    title: 'Research Breakthrough: Post-Quantum Lattice Signature Benchmarks on Low-Power Nodes',
    category: 'Research',
    date: 'July 28, 2026',
    readTime: '8 min read',
    excerpt: 'The MGF Cryptography team alongside researchers from University of Ghana and ETH Zürich released open-source benchmarks for Dilithium-3 signatures.',
    author: 'Prof. Marcus Vance, Tech Director',
  },
  {
    id: 'NEWS-2026-07-10',
    title: 'Security Advisory & Bug Bounty Pool Expanded to $1,500,000 in Public Reserve',
    category: 'Security',
    date: 'July 10, 2026',
    readTime: '5 min read',
    excerpt: 'Independent auditing partners complete three comprehensive formal verification passes on core client implementations.',
    author: 'Dr. Kenji Takahashi, Security Trustee',
  },
  {
    id: 'NEWS-2026-06-22',
    title: 'Foundation Charter Ratified: Formalizing "Stewardship Without Control" in Legal Constitution',
    category: 'Governance',
    date: 'June 22, 2026',
    readTime: '7 min read',
    excerpt: 'The Foundation legally binds its mission to prevent protocol interference, guaranteeing complete independence for Moneta Chain validators.',
    author: 'Zubair Al-Hassan, Legal Director',
  },
];

export const FOUNDATION_MISSION_SEEKS = [
  'Support developers and open-source builders.',
  'Fund meaningful research and technological innovation.',
  'Expand access to technology education.',
  'Strengthen blockchain and digital infrastructure.',
  'Support security and responsible technological development.',
  'Create opportunities for communities around the world.',
  'Encourage collaboration between universities, researchers, companies, developers, and communities.',
  'Support the long-term resilience of the MONETA ecosystem.',
  'Promote transparency, openness, responsible innovation, and user empowerment.',
  'Help ensure that no single organization becomes the permanent gatekeeper of the ecosystem.'
];

export const FOUNDATION_VISION_POINTS = [
  'Innovation is accessible.',
  'Knowledge can be shared.',
  'Developers can build without unnecessary barriers.',
  'Researchers can explore new ideas.',
  'Communities can participate meaningfully.',
  'Open-source technology can flourish.',
  'Security is treated as fundamental.',
  'Users maintain meaningful control over their digital lives.',
  'Innovation reaches communities that have historically had fewer opportunities.',
  'Africa becomes a major contributor to global technological innovation.',
  'Global collaboration becomes easier.',
  'Technology serves people rather than concentrating power in the hands of a few.'
];

export const OPERATING_MODEL_STEPS = [
  {
    step: '01',
    id: 'identify',
    title: 'IDENTIFY',
    subtitle: 'Uncover Critical Challenges',
    desc: 'We identify important challenges facing technology, developers, communities, and the MONETA ecosystem.'
  },
  {
    step: '02',
    id: 'support',
    title: 'SUPPORT',
    subtitle: 'Deploy Direct Assistance',
    desc: 'We provide financial or non-financial assistance where appropriate.'
  },
  {
    step: '03',
    id: 'build',
    title: 'BUILD',
    subtitle: 'Independent Execution',
    desc: 'Independent developers, researchers, organizations, and communities create solutions.'
  },
  {
    step: '04',
    id: 'test',
    title: 'TEST',
    subtitle: 'Rigorous Evaluation',
    desc: 'Projects are evaluated through appropriate technical, security, community, and impact processes.'
  },
  {
    step: '05',
    id: 'deploy',
    title: 'DEPLOY',
    subtitle: 'Ecosystem Integration',
    desc: 'Successful projects can become part of the wider ecosystem.'
  },
  {
    step: '06',
    id: 'measure',
    title: 'MEASURE',
    subtitle: 'Outcome Verification',
    desc: 'We evaluate outcomes, transparency, sustainability, and public benefit.'
  },
  {
    step: '07',
    id: 'learn',
    title: 'LEARN',
    subtitle: 'Continuous Evolution',
    desc: 'Lessons from supported projects inform future Foundation programs.'
  }
];

export const FOUNDATION_CORE_VALUES = [
  {
    number: '01',
    name: 'EMPOWERMENT',
    tagline: 'Creating Opportunities for Contributors',
    desc: 'We believe people should have the opportunity to learn, build, participate, and create. We do not simply give resources. We create opportunities for people to become capable contributors.'
  },
  {
    number: '02',
    name: 'INNOVATION',
    tagline: 'Ambitious Ideas with Responsible Care',
    desc: 'We encourage ambitious ideas, experimentation, research, and technological progress. We are willing to explore new possibilities while remaining responsible about their risks.'
  },
  {
    number: '03',
    name: 'UNITY',
    tagline: 'Connecting People Across Borders',
    desc: 'Technology can connect people across borders. We encourage collaboration between developers, researchers, institutions, businesses, universities, and communities.'
  },
  {
    number: '04',
    name: 'OPENNESS',
    tagline: 'Open Standards & Broad Participation',
    desc: 'We support open standards, open-source development, knowledge sharing, transparency, and broad participation wherever appropriate.'
  },
  {
    number: '05',
    name: 'INDEPENDENCE',
    tagline: 'Objective Service Without Capture',
    desc: 'The Foundation must remain capable of serving the ecosystem objectively. It should not become a permanent instrument of one company, founder, individual, or group.'
  },
  {
    number: '06',
    name: 'TRANSPARENCY',
    tagline: 'Accountability Through Openness',
    desc: 'People should be able to understand how Foundation resources are used and how important decisions are made. We believe transparency creates accountability.'
  },
  {
    number: '07',
    name: 'SECURITY',
    tagline: 'Fundamental From Inception',
    desc: 'Innovation without security can create unnecessary harm. Security must therefore be considered from the beginning—not added at the end.'
  },
  {
    number: '08',
    name: 'INCLUSION',
    tagline: 'Talent Exists Everywhere',
    desc: 'Talent exists everywhere. Opportunity should not be restricted by geography, nationality, economic background, or institutional access.'
  },
  {
    number: '09',
    name: 'RESPONSIBILITY',
    tagline: 'Power Conscious of Human Impact',
    desc: 'Technological power comes with responsibility. We support innovation that considers its consequences for users, communities, and society.'
  },
  {
    number: '10',
    name: 'STEWARDSHIP',
    tagline: 'Serving Rather Than Ruling',
    desc: 'We are here to serve the ecosystem. We do not exist to become its permanent ruler.'
  }
];

export const FOUNDATION_GOALS = [
  {
    goalNumber: 1,
    title: 'Build a Strong Developer Ecosystem',
    desc: 'Create funding, education, infrastructure, and networking opportunities for developers.'
  },
  {
    goalNumber: 2,
    title: 'Advance Research',
    desc: 'Support research capable of improving security, scalability, privacy, interoperability, and technological resilience.'
  },
  {
    goalNumber: 3,
    title: 'Expand Education',
    desc: 'Make high-quality technology education accessible to students, developers, researchers, and communities.'
  },
  {
    goalNumber: 4,
    title: 'Strengthen Security',
    desc: 'Support security research, audits, responsible disclosure, and resilient infrastructure.'
  },
  {
    goalNumber: 5,
    title: 'Grow Global Participation',
    desc: 'Create opportunities for contributors from every region of the world.'
  },
  {
    goalNumber: 6,
    title: 'Support MONETA Ecosystem Resilience',
    desc: 'Support the infrastructure and communities required for a healthy MONETA ecosystem without becoming its centralized controller.'
  },
  {
    goalNumber: 7,
    title: 'Promote Open Innovation',
    desc: 'Support technologies and public goods that can create value beyond a single organization.'
  },
  {
    goalNumber: 8,
    title: 'Create Long-Term Impact',
    desc: 'Focus on sustainable initiatives rather than short-term publicity.'
  }
];

export const FOUNDATION_OBJECTIVES = [
  'Establish transparent grant programs.',
  'Create research funding programs.',
  'Establish developer fellowships.',
  'Develop educational programs.',
  'Support university partnerships.',
  'Establish security initiatives.',
  'Organize global hackathons.',
  'Support open-source infrastructure.',
  'Create regional community programs.',
  'Establish transparent treasury management.',
  'Publish annual Foundation reports.',
  'Publish grant allocations and outcomes.',
  'Establish clear conflict-of-interest policies.',
  'Develop independent governance mechanisms.',
  'Encourage collaboration between ecosystem participants.',
  'Support responsible technological innovation.',
  'Measure the impact of Foundation programs.',
  'Continuously improve how Foundation resources are allocated.'
];

export const COMMUNITY_ROLES = [
  {
    role: 'BUILDERS',
    desc: 'Developers creating applications, infrastructure, and tools.'
  },
  {
    role: 'RESEARCHERS',
    desc: 'Scientists, academics, cryptographers, engineers, and independent researchers.'
  },
  {
    role: 'STUDENTS',
    desc: 'The next generation of technological leaders.'
  },
  {
    role: 'EDUCATORS',
    desc: 'Teachers, professors, mentors, and technology trainers.'
  },
  {
    role: 'VALIDATORS & INFRASTRUCTURE CONTRIBUTORS',
    desc: 'People helping maintain reliable network infrastructure where applicable.'
  },
  {
    role: 'ENTREPRENEURS',
    desc: 'People creating organizations and businesses around emerging technologies.'
  },
  {
    role: 'CREATORS',
    desc: 'People communicating ideas, producing educational content, and bringing technology to wider audiences.'
  },
  {
    role: 'COMMUNITIES',
    desc: 'Local organizations and groups creating opportunities for participation.'
  },
  {
    role: 'PARTNERS',
    desc: 'Institutions and organizations working with the Foundation on shared objectives.'
  }
];

export const COMMUNITY_PROMISES = [
  'Everyone can learn.',
  'Everyone can contribute.',
  'Ideas can be heard.',
  'Builders can find opportunities.',
  'Researchers can find support.',
  'Communities can connect.',
  'Innovation can cross borders.',
  'Success can create opportunities for others.'
];

export const DEFINITION_OF_SUCCESS = [
  'A developer received support and built something useful.',
  'A student learned a valuable skill.',
  'A researcher discovered something important.',
  'A security vulnerability was responsibly addressed.',
  'A community gained access to opportunity.',
  'An open-source project became sustainable.',
  'A university began meaningful research.',
  'A new contributor joined the ecosystem.',
  'A useful public good reached people who needed it.'
];

export const FOUNDATION_PROMISE = [
  'We will support without controlling.',
  'We will innovate without abandoning responsibility.',
  'We will grow without sacrificing independence.',
  'We will build for today while preparing for tomorrow.',
  'We will seek global impact while creating opportunities locally.'
];

export const BOARD_MEMBERS = BOARD_AND_LEADERSHIP;
export const COMMUNITY_PROMISE_POINTS = COMMUNITY_PROMISES;
export const NEWS_ARTICLES = NEWS_AND_REPORTS;
export const CORE_VALUES = FOUNDATION_CORE_VALUES;

export const ACADEMIC_PARTNERSHIPS = [
  {
    institution: 'University of Ghana — Distributed Systems Lab',
    focus: 'Low-Bandwidth Mobile Consensus',
    summary: 'Joint testing of asynchronous Byzantine fault tolerant consensus across intermittent cellular networks.'
  },
  {
    institution: 'ETH Zürich Cryptography Group',
    focus: 'Post-Quantum Lattice Verification',
    summary: 'Formal security proofs for Falcon-512 signature aggregation on resource-constrained validator hardware.'
  },
  {
    institution: 'University of Cape Town',
    focus: 'Decentralized Micro-Payment Architecture',
    summary: 'Economic modeling and benchmark simulations of high-velocity sub-cent offline clearing rails.'
  },
  {
    institution: 'National University of Singapore (NUS)',
    focus: 'Zero-Knowledge State Accumulators',
    summary: 'Developing Verkle tree proof verification for stateless micro-clients on mobile devices.'
  },
  {
    institution: 'Technical University of Berlin',
    focus: 'Formal Verification of Smart Contracts',
    summary: 'Automated formal semantics generation and automated theorem proving for Moneta VM bytecode.'
  },
  {
    institution: 'São Paulo Distributed Tech Institute',
    focus: 'Peer-to-Peer Validator Peering',
    summary: 'Optimized geodistributed gossip sub-protocols for low-latency transaction propagation in Latin America.'
  }
];

export const SECURITY_AUDITS = [
  {
    id: 'AUD-2026-01',
    title: 'Consensus Engine & Proof-of-Stake State Machine Audit',
    auditor: 'Trail of Bits',
    date: 'August 2026',
    scope: 'Core Consensus, Slashing Logic, Epoch Transitions',
    findingsSummary: '0 Critical, 0 High, 2 Medium (remediated), 4 Low. All findings verified and resolved.'
  },
  {
    id: 'AUD-2026-02',
    title: 'Zero-Knowledge Proof Verifier Circuit Review',
    auditor: 'CertiK Academic Division',
    date: 'July 2026',
    scope: 'Groth16 and Plonk Verification Precompiles',
    findingsSummary: '0 Critical, 1 High (fixed in commit #a49f12), 3 Informational. Clean verification pass.'
  },
  {
    id: 'AUD-2026-03',
    title: 'Post-Quantum Lattice Signature Implementation',
    auditor: 'OpenZeppelin Security Advisory',
    date: 'May 2026',
    scope: 'Dilithium and Falcon Cryptographic Signer Subsystem',
    findingsSummary: '0 Critical, 0 High, 1 Low. Full memory safety guarantees confirmed in Rust.'
  }
];

export const GOVERNANCE_POLICIES: GovernancePolicy[] = [
  {
    id: 'POL-01',
    title: 'Foundation Constitution & Non-Interference Charter',
    category: 'Bylaws',
    lastUpdated: 'June 2026',
    version: 'v2.4',
    summary: 'Codifies the strict legal boundary that the Foundation operates as an independent ecosystem steward and cannot alter consensus rules, censor transactions, or freeze user accounts.'
  },
  {
    id: 'POL-02',
    title: 'Multisignature Treasury Spending Policy & Thresholds',
    category: 'Treasury Policy',
    lastUpdated: 'August 2026',
    version: 'v3.1',
    summary: 'Requires 4-of-7 cryptographic signatures for all disbursements above $25,000, mandatory 7-day public timelocks for transfers over $100,000, and real-time ledger accounting.'
  },
  {
    id: 'POL-03',
    title: 'Conflict of Interest & Board Disclosure Registry',
    category: 'Conflicts of Interest',
    lastUpdated: 'July 2026',
    version: 'v1.8',
    summary: 'All Board members, committee trustees, and grant evaluators must publish quarterly public disclosures of any equity, token holdings, or advisory affiliations.'
  },
  {
    id: 'POL-04',
    title: 'Milestone-Based Grant Review & Verification Standard',
    category: 'Grant Guidelines',
    lastUpdated: 'May 2026',
    version: 'v4.0',
    summary: 'Mandates that 100% of grant deliverables must be licensed under open-source licenses (MIT/Apache 2.0/GPL) with verifiable GitHub repositories and testnet evidence before payout.'
  },
  {
    id: 'POL-05',
    title: 'Coordinated Vulnerability Disclosure & Bug Bounty Terms',
    category: 'Security Disclosure',
    lastUpdated: 'July 2026',
    version: 'v2.0',
    summary: 'Safe harbor framework for ethical security researchers with clear SLA response times (within 4 hours) and bounty tiers up to $250,000 for critical findings.'
  }
];

export const OFFICIAL_ECOSYSTEM_LINKS = {
  monetaChain: {
    name: 'MONETA CHAIN',
    url: 'https://moneta-chain.vercel.app/',
    description: 'Official decentralized layer-1 blockchain network portal',
    badge: 'Official Website',
  },
  monetaExplorer: {
    name: 'MONETA EXPLORER',
    url: 'https://moneta-explorer.vercel.app',
    description: 'Block indexer, validator state, and ledger state telemetry',
    badge: 'Explorer Portal',
  },
  monetaOracle: {
    name: 'MONETA ORACLE',
    url: 'https://moneta-chain-oracal.vercel.app',
    description: 'Decentralized cryptographic data feeds and verifiable pricing',
    badge: 'Oracle Gateway',
  },
  vortexInnovations: {
    name: 'VORTEX INNOVATIONS',
    url: 'https://vortex-innvations.vercel.app',
    description: 'Dedicated commercial deep-tech engineering and core systems contributor',
    badge: 'Technology Contributor',
  },
  monetaGlobalFoundation: {
    name: 'MONETA GLOBAL FOUNDATION',
    url: 'https://moneta-globle-foundation.vercel.app',
    description: 'Official production portal for the independent global foundation steward',
    badge: 'Foundation Portal',
  },
} as const;






