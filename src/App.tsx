import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { SkipToContent } from './components/common/SkipToContent';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MissionVisionPage } from './pages/MissionVisionPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { GrantsPage } from './pages/GrantsPage';
import { ResearchPage } from './pages/ResearchPage';
import { EducationPage } from './pages/EducationPage';
import { SecurityPage } from './pages/SecurityPage';
import { CommunityPage } from './pages/CommunityPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { GovernancePage } from './pages/GovernancePage';
import { TransparencyPage } from './pages/TransparencyPage';
import { ReportsPage } from './pages/ReportsPage';
import { NewsPage } from './pages/NewsPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';
import { ApplyFundingPage } from './pages/ApplyFundingPage';
import { DeveloperSupportPage } from './pages/DeveloperSupportPage';
import { CareersPage } from './pages/CareersPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';
import { AccessibilityPage } from './pages/AccessibilityPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'mission':
      case 'mission-vision':
        return <MissionVisionPage />;
      case 'story':
      case 'our-story':
        return <OurStoryPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'grants':
        return <GrantsPage />;
      case 'research':
        return <ResearchPage />;
      case 'education':
        return <EducationPage />;
      case 'security':
        return <SecurityPage />;
      case 'community':
        return <CommunityPage />;
      case 'ecosystem':
        return <EcosystemPage />;
      case 'governance':
        return <GovernancePage />;
      case 'transparency':
        return <TransparencyPage />;
      case 'reports':
        return <ReportsPage />;
      case 'news':
        return <NewsPage />;
      case 'partners':
        return <PartnersPage />;
      case 'contact':
        return <ContactPage />;
      case 'apply-funding':
        return <ApplyFundingPage />;
      case 'developers':
      case 'developer-support':
        return <DeveloperSupportPage />;
      case 'careers':
        return <CareersPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsOfUsePage />;
      case 'accessibility':
        return <AccessibilityPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans selection:bg-[#202328] selection:text-[#FFFFFF] flex flex-col antialiased">
      {/* WCAG AA Accessibility Skip Link */}
      <SkipToContent />

      {/* Global Responsive Sticky Header */}
      <Navbar />

      {/* Main Dynamic View with Landmark ID */}
      <main id="main-content" className="flex-1 bg-[#050505]">
        {renderCurrentPage()}
      </main>

      {/* Global Institutional Footer */}
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <ErrorBoundary>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ErrorBoundary>
  );
}

export default App;
