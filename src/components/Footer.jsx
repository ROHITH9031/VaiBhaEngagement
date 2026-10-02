import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer
      ref={ref}
      className="py-12 px-6 text-center"
      style={{
        background: 'linear-gradient(180deg, var(--color-dark-bg), rgba(42, 24, 16, 0.3))',
        borderTop: '1px solid rgba(212, 168, 83, 0.08)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Hashtag */}
        <p
          className="font-script text-2xl md:text-3xl mb-3"
          style={{ color: 'var(--color-gold)' }}
        >
          {eventData.hashtag}
        </p>

        {/* Couple Names */}
        <p
          className="font-heading text-base md:text-lg mb-6"
          style={{ color: 'var(--color-champagne)' }}
        >
          {eventData.bride} ❤️ {eventData.groom}
        </p>

        {/* Decorative divider */}
        <div
          className="w-20 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212, 168, 83, 0.3), transparent)' }}
        />

        {/* Credit */}
        <p
          className="text-xs tracking-[2px] flex items-center justify-center gap-1.5"
          style={{ color: 'rgba(245, 230, 204, 0.35)' }}
        >
          Built with
          <Heart
            size={12}
            fill="var(--color-rose-gold)"
            style={{ color: 'var(--color-rose-gold)' }}
          />
          by Rohith Atyam
        </p>
      </motion.div>
    </footer>
  );
}
