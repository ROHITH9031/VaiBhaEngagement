import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function FoodTiming() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ background: 'var(--color-dark-bg)' }}
    >
      <div className="content-centered max-w-xl text-center">
        {/* Ornament */}
        <motion.div
          className="mb-6"
          style={{ color: 'var(--color-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl">🍽️</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-heading text-2xl md:text-3xl gold-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          A Feast to Follow the Celebration
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
          "Good food, happy hearts, and beautiful memories
          <br className="hidden md:block" />
          {' '}are best shared together."
        </motion.p>

        {/* Lunch Timing */}
        <motion.div
          className="invitation-card inline-flex items-center gap-4 px-10 py-6"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <UtensilsCrossed size={22} style={{ color: 'var(--color-gold)' }} />
          <div className="text-left">
            <p
              className="text-xs tracking-[3px] uppercase mb-1"
              style={{ color: 'rgba(245, 230, 204, 0.5)', fontFamily: 'var(--font-heading)' }}
            >
              Lunch
            </p>
            <p
              className="font-heading text-xl md:text-2xl"
              style={{ color: 'var(--color-gold)' }}
            >
              {eventData.lunchTimeDisplay}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
