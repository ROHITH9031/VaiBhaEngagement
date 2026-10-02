import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarHeart } from 'lucide-react';
import { eventData } from '../data/eventData';
import { createGoogleCalendarUrl } from '../utils/googleCalendar';

export default function FinalInvitation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSaveTheDate = () => {
    const calendarUrl = createGoogleCalendarUrl(eventData);
    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={ref}
      className="section-padding bg-section-alt relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full opacity-6"
        style={{
          background: 'radial-gradient(circle, rgba(212, 168, 83, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="content-centered max-w-2xl text-center relative z-10">
        {/* Top ornament */}
        <motion.div
          className="mb-6"
          style={{ color: 'var(--color-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl">💌</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-heading text-2xl md:text-3xl gold-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Your Presence Is Our Greatest Gift
        </motion.h2>

        <motion.div
          className="w-16 h-px mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        />

        {/* Quote */}
        <motion.p
          className="quote-text text-sm md:text-base mb-10 px-4"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          "Come celebrate love, laughter, family
          <br className="hidden md:block" />
          {' '}and the beginning of a beautiful forever."
        </motion.p>

        {/* Couple Names */}
        <motion.h3
          className="font-heading text-3xl md:text-5xl mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="gold-text">{eventData.bride}</span>
          <span className="mx-3" style={{ color: '#C6956D' }}>❤️</span>
          <span className="gold-text">{eventData.groom}</span>
        </motion.h3>

        {/* Date & Day */}
        <motion.p
          className="font-heading text-lg md:text-xl tracking-[3px] mb-3"
          style={{ color: 'var(--color-champagne)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          03 December 2026
        </motion.p>

        {/* Hashtag */}
        <motion.p
          className="font-script text-2xl md:text-3xl mb-10"
          style={{ color: 'var(--color-rose-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {eventData.hashtag}
        </motion.p>

        {/* SAVE THE DATE button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <motion.button
            className="btn-gold w-full max-w-xs text-sm sm:text-base md:text-lg px-5 sm:px-12 py-4 sm:py-5"
            onClick={handleSaveTheDate}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Save the date to your Google Calendar"
          >
            <CalendarHeart size={22} />
            Save the Date
          </motion.button>

        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          className="mt-12"
          style={{ color: 'var(--color-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : {}}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <span className="text-sm">✦ &nbsp; ❀ &nbsp; ✦ &nbsp; ❀ &nbsp; ✦</span>
        </motion.div>
      </div>
    </section>
  );
}
