import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  const [isMobileInterface, setIsMobileInterface] = useState(
    () => window.matchMedia('(max-width: 767px)').matches
  );
  const [activeMobileSection, setActiveMobileSection] = useState('home');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleViewportChange = (event) => {
      setIsMobileInterface(event.matches);
      if (!event.matches) {
        setActiveMobileSection('home');
      }
    };

    mediaQuery.addEventListener('change', handleViewportChange);
    return () => mediaQuery.removeEventListener('change', handleViewportChange);
  }, []);

  useEffect(() => {
    if (!showMainContent || !isMobileInterface) {
      return undefined;
    }

    let frameId;
    let sectionTimeout;
    let resumeTimeout;
    let paused = false;
    let sectionIndex = 0;
    const sectionIds = ['home', 'invitation', 'celebration', 'journey', 'venue', 'save-the-date'];

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const stopAutoScroll = () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(sectionTimeout);
    };

    const handleManualScroll = () => {
      stopAutoScroll();
      paused = true;
      window.clearTimeout(resumeTimeout);
      resumeTimeout = window.setTimeout(() => {
        paused = false;
        pauseAtSection();
      }, 6000);
    };

    const animateScroll = (from, to, onComplete) => {
      const startedAt = performance.now();
      const duration = 2200;

      const step = (now) => {
        if (paused) return;

        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        window.scrollTo({
          top: from + (to - from) * easedProgress,
          behavior: 'auto',
        });

        if (progress < 1) {
          frameId = window.requestAnimationFrame(step);
        } else if (onComplete) {
          onComplete();
        }
      };

      frameId = window.requestAnimationFrame(step);
    };

    const pauseAtSection = () => {
      if (paused) return;
      sectionTimeout = window.setTimeout(() => {
        sectionIndex = (sectionIndex + 1) % sectionIds.length;
        const nextSection = document.getElementById(sectionIds[sectionIndex]);
        if (!nextSection) {
          pauseAtSection();
          return;
        }

        animateScroll(window.scrollY, nextSection.offsetTop, pauseAtSection);
      }, 3000);
    };

    window.addEventListener('wheel', handleManualScroll, { passive: true });
    window.addEventListener('touchmove', handleManualScroll, { passive: true });
    window.addEventListener('keydown', handleManualScroll);
    window.addEventListener('vaibha:navigation', handleManualScroll);

    pauseAtSection();

    return () => {
      stopAutoScroll();
      window.clearTimeout(resumeTimeout);
      window.removeEventListener('wheel', handleManualScroll);
      window.removeEventListener('touchmove', handleManualScroll);
      window.removeEventListener('keydown', handleManualScroll);
      window.removeEventListener('vaibha:navigation', handleManualScroll);
    };
  }, [isMobileInterface, showMainContent]);

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

  const handleMobileSectionSelect = (sectionId) => {
    setActiveMobileSection(sectionId);
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
          <Navbar onSectionSelect={handleMobileSectionSelect} />
          <main>
            {renderMainContent()}
          </main>
          {!isMobileInterface && <Footer />}
        </>
      )}
    </div>
  );
}

export default App;
