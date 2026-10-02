import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import InvitationOpening from './components/InvitationOpening';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InvitationMessage from './components/InvitationMessage';
import EngagementDetails from './components/EngagementDetails';
import Venue from './components/Venue';
import CoupleStory from './components/CoupleStory';
import FinalInvitation from './components/FinalInvitation';
import Footer from './components/Footer';
import FloatingPetals from './components/FloatingPetals';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  // Lock scroll during loading and invitation
  useEffect(() => {
    if (!showMainContent) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [showMainContent]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleInvitationOpen = () => {
    setIsInvitationOpen(true);
    // Delay showing main content for the opening animation
    setTimeout(() => {
      setShowMainContent(true);
    }, 1800);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-dark-bg)' }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loading"
            onComplete={handleLoadingComplete}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoading && !isInvitationOpen && (
          <InvitationOpening
            key="invitation"
            onOpen={handleInvitationOpen}
          />
        )}
      </AnimatePresence>

      {showMainContent && (
        <>
          <FloatingPetals />
          <Navbar />
          <main>
            <Hero />
            <InvitationMessage />
            <EngagementDetails />
            <Venue />
            <CoupleStory />
            <FinalInvitation />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
