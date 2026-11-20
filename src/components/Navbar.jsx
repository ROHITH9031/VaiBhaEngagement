import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarHeart, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Invitation', href: '#invitation' },
  { label: 'Celebration', href: '#celebration' },
  { label: 'Journey', href: '#journey' },
  { label: 'Location', href: '#venue' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      if (window.matchMedia('(max-width: 767px)').matches) {
        const sectionIds = ['home', 'invitation', 'celebration', 'journey', 'venue', 'save-the-date'];
        let nearestSection = 'home';
        let nearestDistance = Number.POSITIVE_INFINITY;

        sectionIds.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (!section) return;
          const distance = Math.abs(section.getBoundingClientRect().top - 80);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestSection = sectionId;
          }
        });

        setActiveMobileSection(nearestSection);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const sectionId = href.replace('#', '');
    setActiveMobileSection(sectionId);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveTheDate = (e) => {
    handleNavClick(e, '#save-the-date');
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (!mediaQuery.matches) {
      setActiveMobileSection('');
    }
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled
          ? 'rgba(26, 10, 5, 0.92)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(212, 168, 83, 0.1)' : 'none',
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="nav-inner content-centered max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#home"
          tabIndex="0"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-script text-xl md:text-2xl"
          style={{ color: 'var(--color-gold)' }}
          aria-label="Go to top"
        >
          V ❤️ B
        </a>

        <div className={`nav-menu ${isMobileOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`nav-link ${activeMobileSection === item.href.replace('#', '') ? 'is-active' : ''}`}
              aria-current={activeMobileSection === item.href.replace('#', '') ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className={`nav-save-date ${activeMobileSection === 'save-the-date' ? 'is-active' : ''}`}
            onClick={handleSaveTheDate}
            aria-label="Navigate to the Save the Date section"
          >
            <CalendarHeart size={15} />
            Save the Date
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="nav-toggle md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? (
            <X size={22} style={{ color: 'var(--color-gold)' }} />
          ) : (
            <Menu size={22} style={{ color: 'var(--color-gold)' }} />
          )}
        </button>
      </div>

    </motion.nav>
  );
}
