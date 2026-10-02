import { useEffect, useState } from 'react';

const petalEmojis = ['🌸', '🌺', '✿', '❀', '🌹','🌻','💐'];

function Petal({ delay, left, duration, emoji }) {
  return (
    <div
      className="petal"
      style={{
        left: `${left}%`,
        animationName: 'floatPetal',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationFillMode: 'both',
        fontSize: `${12 + Math.random() * 10}px`,
      }}
    >
      {emoji}
    </div>
  );
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const generated = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: Math.random() * 15,
      left: Math.random() * 100,
      duration: 12 + Math.random() * 10,
      emoji: petalEmojis[Math.floor(Math.random() * petalEmojis.length)],
    }));
    setPetals(generated);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-5" aria-hidden="true">
      {petals.map((p) => (
        <Petal key={p.id} {...p} />
      ))}
    </div>
  );
}
