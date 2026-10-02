import { motion } from 'framer-motion';
import { eventData } from '../data/eventData';

function CouplePhoto({ src, alt, delay = 0 }) {
  return (
    <motion.div
      className="couple-frame aspect-4/5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.8, duration: 0.9, ease: 'easeOut' }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: delay * 2 }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.classList.remove('hidden');
          }}
        />
        <div className="image-placeholder hidden" style={{ position: 'absolute', inset: 0 }}>
          <span style={{ fontSize: '32px' }}>💍</span>
          <span>{alt}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden"
      style={{ background: 'var(--color-dark-bg)' }}
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full opacity-8"
        style={{
          background: 'radial-gradient(circle, rgba(212, 168, 83, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Top ornament */}
      <motion.div
        className="mb-6"
        style={{ color: 'var(--color-gold)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
      >
        <span className="text-sm tracking-[6px]">✦ &nbsp; ✦ &nbsp; ✦</span>
      </motion.div>

      {/* "A New Chapter Begins..." */}
      <motion.p
        className="font-script text-2xl md:text-3xl mb-4"
        style={{ color: 'var(--color-rose-gold)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A New Chapter Begins...
      </motion.p>

      {/* Couple Names — Main Display */}
      <motion.h1
        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight max-w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <span className="gold-text">{eventData.bride}</span>
        <span className="mx-2 md:mx-4" style={{ color: '#C6956D' }}>&amp;</span>
        <span className="gold-text">{eventData.groom}</span>
      </motion.h1>

      {/* Decorative line */}
      <motion.div
        className="w-20 h-px mx-auto mb-6"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />

      {/* Invitation text */}
      <motion.p
        className="max-w-lg mx-auto text-sm md:text-base leading-relaxed mb-8"
        style={{
          color: 'rgba(245, 230, 204, 0.7)',
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
        }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        Together with their families,
        <br />
        they invite you to celebrate
        <br />
        the beginning of their beautiful journey.
      </motion.p>

      {/* Couple Photos */}
      <motion.div
        className="couple-photo-gallery w-full flex items-center justify-center gap-4 md:gap-8 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <CouplePhoto src={eventData.images.vaibhaimg1} alt="Vaishnavi & Bhaskar" delay={0} />
        <CouplePhoto src={eventData.images.vaibhaimg2} alt="Vaishnavi & Bhaskar" delay={0} />

      </motion.div>


      {/* Post-photo details */}
      <div className="w-full flex flex-col items-center text-center">
        {/* Hashtag */}
        <motion.p
          className="font-script text-3xl md:text-4xl mb-4"
          style={{ color: 'var(--color-gold)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          {eventData.hashtag}
        </motion.p>

        {/* Date & Day */}
        <motion.p
          className="text-lg md:text-xl tracking-[4px] font-heading mb-2"
          style={{ color: 'var(--color-champagne)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {eventData.displayDateShort}
        </motion.p>

        {/* Event Name */}
        <motion.p
          className="text-xs tracking-[5px] uppercase"
          style={{ color: 'rgba(245, 230, 204, 0.5)', fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          {eventData.eventName}
        </motion.p>
      </div>

      {/* Bottom ornament */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ color: 'var(--color-gold)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.span
          className="text-lg"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
