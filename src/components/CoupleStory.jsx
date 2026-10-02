import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { eventData } from '../data/eventData';

export default function CoupleStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ background: 'var(--color-dark-bg)' }}
    >
      <div className="content-centered max-w-2xl text-center">
        {/* Top ornament */}
        <motion.div
          className="mb-6"
          style={{ color: 'var(--color-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xl">❤️</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-heading text-2xl md:text-3xl gold-text mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          The Beginning of Their Forever
        </motion.h2>

        <motion.div
          className="w-16 h-px mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        />

        {/* Quote */}
        <motion.div
          className="mb-10 px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div
            className="relative py-6 px-8 md:px-12 rounded-lg"
            style={{
              background: 'linear-gradient(145deg, rgba(30, 15, 8, 0.6), rgba(42, 24, 16, 0.3))',
              border: '1px solid rgba(212, 168, 83, 0.12)',
            }}
          >
            <span
              className="absolute top-3 left-4 text-4xl opacity-20 font-script"
              style={{ color: 'var(--color-gold)' }}
            >
              "
            </span>
            <p
              className="quote-text text-base md:text-lg"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Two beautiful souls, two different journeys,
              <br />
              and one beautiful moment that brought their worlds together.
            </p>
            <span
              className="absolute bottom-3 right-4 text-4xl opacity-20 font-script"
              style={{ color: 'var(--color-gold)' }}
            >
              "
            </span>
          </div>
        </motion.div>

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

        {/* Hashtag */}
        <motion.p
          className="font-script text-2xl md:text-3xl"
          style={{ color: 'var(--color-rose-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {eventData.hashtag}
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          className="mt-10"
          style={{ color: 'var(--color-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <span className="text-sm">✦ &nbsp; ❀ &nbsp; ✦ &nbsp; ❀ &nbsp; ✦</span>
        </motion.div>
      </div>
    </section>
  );
}
