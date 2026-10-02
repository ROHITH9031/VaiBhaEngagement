import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Invitation', href: '#invitation' },
  { label: 'Celebration', href: '#celebration' },
  { label: 'Venue', href: '#venue' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.focus({ preventScroll: true });
    }
  };

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
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
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
