import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { eventData } from '../data/eventData';

export default function InvitationMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="invitation"
      ref={ref}
      className="section-padding bg-section-alt"
    >
      <div className="content-centered max-w-3xl text-center">
        {/* Top ornament */}
        <motion.div
          className="mb-8"
          style={{ color: 'var(--color-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xl">❀ &nbsp; ✦ &nbsp; ❀</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          className="font-heading text-2xl md:text-3xl mb-8"
          style={{ color: 'var(--color-champagne)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          A Heartfelt Invitation
        </motion.h2>

        {/* Quote */}
        <motion.div
          className="mb-10 px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="relative py-6 px-8 md:px-12 rounded-lg"
            style={{
              background: 'linear-gradient(145deg, rgba(30, 15, 8, 0.6), rgba(42, 24, 16, 0.3))',
              border: '1px solid rgba(212, 168, 83, 0.12)',
            }}
          >
            {/* Quote mark */}
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
              Two hearts, one beautiful journey,
              <br />
              and a lifetime of memories waiting to be written.
            </p>
            <span
              className="absolute bottom-3 right-4 text-4xl opacity-20 font-script"
              style={{ color: 'var(--color-gold)' }}
            >
              "
            </span>
          </div>
        </motion.div>

        {/* Invitation text */}
        <motion.p
          className="text-sm md:text-base leading-relaxed mb-8"
          style={{
            color: 'rgba(245, 230, 204, 0.7)',
            fontFamily: 'var(--font-heading)',
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          With hearts full of happiness,
          <br />
          we invite you to be a part of their special day.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          className="ornament-divider mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span style={{ color: 'var(--color-gold)', fontSize: '14px' }}>✦</span>
        </motion.div>

        {/* Couple Names */}
        <motion.h3
          className="font-heading text-2xl md:text-4xl mb-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {eventData.hashtag}
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          className="mt-8"
          style={{ color: 'var(--color-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <span className="text-sm">✦ &nbsp; ❀ &nbsp; ✦</span>
        </motion.div>
      </div>
    </section>
  );
}
