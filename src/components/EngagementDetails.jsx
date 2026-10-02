import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, MapPin, UtensilsCrossed } from 'lucide-react';
import { eventData } from '../data/eventData';

const details = [
  {
    icon: Calendar,
    label: 'Date & Day',
    value: `${eventData.displayDate}, ${eventData.dayOfWeek} `,
  },
  {
    icon: Clock,
    label: 'Muhurtham',
    value: eventData.celebrationStartDisplay,
  },
  {
    icon: UtensilsCrossed,
    label: 'Lunch',
    value: eventData.lunchTimeDisplay,
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: eventData.venue.name || 'Venue Name — To Be Added',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: eventData.venue.address || 'Venue Address — To Be Added',
  },
];

export default function EngagementDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="celebration"
      ref={ref}
      className="section-padding"
      style={{ background: 'var(--color-dark-bg)' }}
    >
      <div className="content-centered max-w-2xl text-center">
        {/* Section title */}
        <motion.div
          className="mb-4"
          style={{ color: 'var(--color-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xl">💍</span>
        </motion.div>

        <motion.h2
          className="font-heading text-2xl md:text-4xl gold-text mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {eventData.eventName}
        </motion.h2>

        <motion.div
          className="w-16 h-px mx-auto mb-10"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        />

        {/* Details Card */}
        <motion.div
          className="invitation-card px-6 py-10 md:px-12 md:py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="space-y-8">
            {details.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.icon
                    size={16}
                    style={{ color: 'var(--color-gold)' }}
                  />
                  <span
                    className="text-xs tracking-[3px] uppercase"
                    style={{ color: 'rgba(245, 230, 204, 0.5)', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.label}
                  </span>
                </div>
                <p
                  className="font-heading text-base md:text-lg"
                  style={{ color: 'var(--color-champagne)' }}
                >
                  {item.value}
                </p>

                {/* Divider between items (not after last) */}
                {index < details.length - 1 && (
                  <div
                    className="w-8 h-px mt-8"
                    style={{ background: 'rgba(212, 168, 83, 0.2)' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
