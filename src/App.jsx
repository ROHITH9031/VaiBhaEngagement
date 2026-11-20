import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useRef } from 'react';
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
  const audioRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [isMusicMuted, setIsMusicMuted] = useState(false);

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
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.play().catch(() => {});
    }
    // Delay showing main content for the opening animation
    setTimeout(() => {
      setShowMainContent(true);
    }, 1800);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    const nextMuted = !isMusicMuted;
    audioRef.current.muted = nextMuted;
    setIsMusicMuted(nextMuted);

    if (!nextMuted) {
      audioRef.current.play().catch(() => {});
    }
  };

  const renderMainContent = () => {
    return (
      <>
        <Hero />
        <InvitationMessage />
        <EngagementDetails />
        <CoupleStory />
        <Venue />
        <FinalInvitation />
      </>
    );
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-dark-bg)' }}>
      <audio
        ref={audioRef}
        src="/images/music/vb_engagement_audio.mp4"
        loop
        preload="auto"
        aria-label="Background music"
      />

      {showMainContent && (
        <button
          type="button"
          className="music-toggle"
          onClick={toggleMusic}
          aria-label={isMusicMuted ? 'Play background music' : 'Mute background music'}
          aria-pressed={isMusicMuted}
        >
          {isMusicMuted ? <VolumeX size={19} /> : <Volume2 size={19} />}
        </button>
      )}

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
            {renderMainContent()}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
