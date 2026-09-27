import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';

/**
 * Promotional video about KFUPM, shown right after "Meet KFUPM".
 * To add it: put the file at images/promo.mp4 (public/images/promo.mp4 in the project).
 * Until that file exists, this whole section stays hidden.
 */
const PROMO_SRC = 'images/promo.mp4';

export default function Promo() {
  const [missing, setMissing] = useState(false);
  if (missing) return null;

  return (
    <section id="promo" className="relative pb-32" aria-labelledby="promo-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...fadeUp()}
          id="promo-title"
          className="mb-10 text-center text-4xl font-black leading-[1.1] tracking-tighter md:text-6xl"
        >
          See KFUPM{' '}
          <span className="bg-gradient-to-r from-delft to-fern bg-clip-text text-transparent">in Motion.</span>
        </motion.h2>
        <motion.div
          {...fadeUp(0.1)}
          className="overflow-hidden rounded-3xl border border-delft/10 bg-night shadow-[0_30px_60px_rgba(29,42,98,0.15)]"
        >
          <video
            src={PROMO_SRC}
            controls
            playsInline
            preload="metadata"
            onError={() => setMissing(true)}
            className="aspect-video w-full bg-night object-contain"
            aria-label="KFUPM promotional video"
          />
        </motion.div>
      </div>
    </section>
  );
}
