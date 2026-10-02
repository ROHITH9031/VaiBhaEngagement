import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { eventData } from '../data/eventData';

const timelineEvents = [
  {
    time: eventData.celebrationStartDisplay,
    title: 'Engagement Muhurtham'
  },
  {
    time: eventData.lunchTimeDisplay,
    title: 'Lunch'
  },
];

export default function EventTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="section-padding bg-section-alt"
    >
      <div className="content-centered max-w-2xl">
        {/* Section Title */}
        <div className="text-center mb-14">
          <motion.div
            className="mb-4"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.5 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xl">⏰</span>
          </motion.div>

          <motion.h2
            className="font-heading text-2xl md:text-3xl gold-text mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Celebration Timeline
          </motion.h2>

          <motion.div
            className="w-16 h-px mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, var(--color-gold), rgba(212, 168, 83, 0.2))' }}
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          />

          {/* Timeline Events */}
          <div className="space-y-16 relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + index * 0.3 }}
              >
                {/* Centered event details */}
                <div className="w-full flex flex-col items-center text-center">
                  <p
                    className="font-heading text-lg md:text-2xl mb-1"
                    style={{ color: 'var(--color-gold)' }}
                  >
                    {event.time}
                  </p>
                  <p
                    className="font-heading text-base md:text-lg"
                    style={{ color: 'var(--color-champagne)' }}
                  >
                    {event.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
