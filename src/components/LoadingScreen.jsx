import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../data/eventData';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center"
      style={{ background: 'var(--color-dark-bg)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-gold) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Center ornament */}
      <motion.div
        className="relative mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Rotating outer ring */}
        <motion.div
          className="w-28 h-28 rounded-full flex items-center justify-center"
          style={{
            border: '1px solid rgba(212, 168, 83, 0.3)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          {/* Corner ornaments on the ring */}
          {[0, 90, 180, 270].map((deg) => (
            <span
              key={deg}
              className="absolute text-xs"
              style={{
                color: 'var(--color-gold)',
                transform: `rotate(${deg}deg) translateY(-56px)`,
              }}
            >
              ✦
            </span>
          ))}
        </motion.div>

        {/* Center diamond ornament */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ color: 'var(--color-gold)', fontSize: '32px' }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            💍
          </motion.span>
        </div>
      </motion.div>

      {/* Hashtag */}
      <motion.p
        className="font-script text-3xl md:text-4xl mb-6"
        style={{ color: 'var(--color-gold)' }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {eventData.hashtag}
      </motion.p>

      {/* Loading text */}
      <motion.p
        className="text-sm tracking-[3px] uppercase mb-8"
        style={{ color: 'rgba(245, 230, 204, 0.5)', fontFamily: 'var(--font-heading)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Preparing your invitation...
      </motion.p>

      {/* Loader spinner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="loader-spinner" />
      </motion.div>

      {/* Bottom ornamental line */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div
          className="w-32 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
        />
      </motion.div>
    </motion.div>
  );
}
