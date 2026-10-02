import { motion } from 'framer-motion';
import { eventData } from '../data/eventData';

export default function InvitationOpening({ onOpen }) {
  return (
    <motion.div
      className="fixed inset-0 z-90 flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-dark-bg)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Subtle radial glow behind the card */}
      <div
        className="absolute w-150 h-150 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)',
        }}
      />

      {/* The Invitation Card */}
      <motion.div
        className="relative w-[calc(100%-2rem)] max-w-105 mx-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Card Body */}
        <div
          className="relative px-5 py-10 sm:px-8 md:px-12 md:py-16 text-center rounded-lg"
          style={{
            background: 'linear-gradient(145deg, rgba(30, 15, 8, 0.95), rgba(42, 24, 16, 0.9))',
            border: '1px solid rgba(212, 168, 83, 0.3)',
            boxShadow: '0 0 60px rgba(212, 168, 83, 0.08), 0 30px 80px rgba(0,0,0,0.5)',
          }}
        >
          {/* Inner decorative border */}
          <div
            className="absolute rounded-md pointer-events-none"
            style={{
              inset: '8px',
              border: '1px solid rgba(212, 168, 83, 0.12)',
            }}
          />

          {/* Top ornament */}
          <motion.div
            className="mb-6"
            style={{ color: 'var(--color-gold)' }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-2xl">✦ ❀ ✦</span>
          </motion.div>

          {/* "You're Invited" text */}
          <motion.h2
            className="font-script text-3xl md:text-4xl mb-4"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            You&apos;re Invited
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            className="mx-auto mb-6 h-px w-24"
            style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          {/* "to the engagement of" */}
          <motion.p
            className="text-xs tracking-[4px] uppercase mb-4"
            style={{ color: 'rgba(245, 230, 204, 0.5)', fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            to the engagement of
          </motion.p>

          {/* Couple Names */}
          <motion.h1
            className="font-heading text-2xl md:text-3xl mb-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="gold-text">{eventData.bride}</span>
            <span className="mx-3" style={{ color: '#C6956D' }}>❤️</span>
            <span className="gold-text">{eventData.groom}</span>
          </motion.h1>

          {/* Hashtag */}
          <motion.p
            className="font-script text-xl mb-8"
            style={{ color: 'var(--color-rose-gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            {eventData.hashtag}
          </motion.p>

          {/* Ribbon / Decorative band */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold))' }} />
              <span style={{ color: 'var(--color-gold)', fontSize: '12px' }}>✦</span>
              <span style={{ color: 'var(--color-gold)', fontSize: '16px' }}>❀</span>
              <span style={{ color: 'var(--color-gold)', fontSize: '12px' }}>✦</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, transparent, var(--color-gold))' }} />
            </div>
          </motion.div>

          {/* Click to Open Button */}
          <motion.button
            className="btn-gold text-sm md:text-base"
            onClick={onOpen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Open the engagement invitation"
          >
            <span>💌</span>
            Click to Open
          </motion.button>

          {/* Bottom ornament */}
          <motion.div
            className="mt-8"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.8 }}
          >
            <span className="text-lg">✦ ✦ ✦</span>
          </motion.div>
        </div>

        {/* Card shadow decoration at bottom */}
        <div
          className="mx-8 h-3 rounded-b-lg -mt-px"
          style={{
            background: 'linear-gradient(180deg, rgba(42, 24, 16, 0.6), transparent)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
