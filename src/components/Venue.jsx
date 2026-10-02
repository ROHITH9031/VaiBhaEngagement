import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function Venue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleGetDirections = () => {
    if (eventData.venue.mapsUrl) {
      window.open(eventData.venue.mapsUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="venue"
      ref={ref}
      className="section-padding bg-section-warm"
    >
      <div className="content-centered max-w-2xl text-center">
        {/* Section Title */}
        <motion.div
          className="mb-4"
          style={{ color: 'var(--color-gold)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xl">📍</span>
        </motion.div>

        <motion.h2
          className="font-heading text-2xl md:text-3xl gold-text mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Join Us at the Celebration
        </motion.h2>

        <motion.div
          className="w-16 h-px mx-auto mb-10"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        />

        {/* Venue Card */}
        <motion.div
          className="invitation-card px-6 py-10 md:px-12 md:py-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <MapPin
            size={28}
            className="mx-auto mb-4"
            style={{ color: 'var(--color-gold)' }}
          />

          {/* Venue Name */}
          <h3
            className="font-heading text-xl md:text-2xl mb-3"
            style={{ color: 'var(--color-gold)' }}
          >
            {eventData.venue.name || '[VENUE NAME]'}
          </h3>

          {/* Address */}
          <p
            className="text-sm md:text-base mb-2 leading-relaxed"
            style={{
              color: 'rgba(245, 230, 204, 0.7)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            {eventData.venue.address || '[FULL ADDRESS]'}
          </p>

          {/* Plus Code */}
          {eventData.venue.plusCode && (
            <p
              className="text-xs mb-8 tracking-wide"
              style={{ color: 'rgba(245, 230, 204, 0.4)' }}
            >
              {eventData.venue.plusCode}
            </p>
          )}

          {/* Map embed */}
          <div className="map-container mb-8">
            {eventData.venue.mapsUrl ? (
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(eventData.venue.address || eventData.venue.plusCode)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location Map"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <MapPin size={32} style={{ color: 'rgba(212, 168, 83, 0.3)' }} />
                <p
                  className="text-xs tracking-[2px] uppercase"
                  style={{ color: 'rgba(245, 230, 204, 0.3)', fontFamily: 'var(--font-heading)' }}
                >
                  Map will appear here
                </p>
              </div>
            )}
          </div>

          {/* Get Directions button */}
          <motion.button
            className="btn-gold-outline"
            onClick={handleGetDirections}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!eventData.venue.mapsUrl}
            aria-label="Get directions to venue"
          >
            <Navigation size={16} />
            Get Directions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
