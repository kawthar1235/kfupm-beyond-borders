import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SlotImage } from '../lib/ImageSlots';
import { EASE_OUT, fadeUp } from '../lib/motion';
import type { SlotId } from '../images';

const LIFE: { tag: string; body: string; image: SlotId }[] = [
  { tag: 'Live', body: 'Modern on-campus accommodation + affordable quality meals', image: 'lifeLive' },
  { tag: 'Belong', body: 'A multicultural student community', image: 'lifeBelong' },
  { tag: 'Move', body: 'Sports facilities, gyms, clubs + activities', image: 'lifeMove' },
  { tag: 'Explore', body: 'Private beach access + nearby cafés, restaurants + malls', image: 'lifeExplore' },
];

export default function CampusLife() {
  const [active, setActive] = useState(0);

  return (
    <section id="life" className="relative bg-beige/50 py-32" aria-labelledby="life-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="max-w-4xl">
          <h2 id="life-title" className="text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl">
            More Than A Degree.{' '}
            <span className="bg-gradient-to-r from-delft to-fern bg-clip-text text-transparent">A Place To Belong.</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-delft/70">
            Discover a welcoming campus designed for comfort, connection and well-being.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <ul className="order-2 space-y-3 lg:order-1" role="tablist" aria-label="Campus life">
            {LIFE.map((item, i) => {
              const isActive = i === active;
              return (
                <motion.li key={item.tag} {...fadeUp(i * 0.08)}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-center gap-6 rounded-3xl border px-6 py-6 text-left transition-all duration-500 md:px-8 ${
                      isActive
                        ? 'border-fern/30 bg-white shadow-[0_10px_40px_rgba(29,42,98,0.08)]'
                        : 'border-delft/5 bg-white/40 hover:bg-white/70'
                    }`}
                  >
                    <span
                      className={`w-24 shrink-0 text-sm font-bold tracking-wider transition-colors ${
                        isActive ? 'text-fern' : 'text-delft/50'
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span
                      className={`flex-1 text-lg leading-relaxed transition-colors md:text-xl ${
                        isActive ? 'font-medium text-delft' : 'font-light text-delft/60'
                      }`}
                    >
                      {item.body}
                    </span>
                    <ArrowRight
                      className={`h-5 w-5 shrink-0 transition-all duration-500 ${
                        isActive ? 'translate-x-0 text-fern opacity-100' : '-translate-x-2 opacity-0'
                      }`}
                      aria-hidden
                    />
                  </button>
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            {...fadeUp(0.15)}
            className="relative order-1 aspect-[4/3] overflow-hidden rounded-3xl border border-delft/10 shadow-[0_30px_60px_rgba(29,42,98,0.15)] lg:order-2 lg:aspect-[4/5]"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={LIFE[active].image}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE_OUT }}
                className="absolute inset-0"
              >
                <SlotImage id={LIFE[active].image} className="h-full w-full" />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-night/75 to-transparent p-6 text-white">
              <span className="text-3xl font-black tracking-tighter">{LIFE[active].tag}</span>
              <span className="text-sm font-bold tracking-wider text-white/80">
                0{active + 1} / 0{LIFE.length}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
