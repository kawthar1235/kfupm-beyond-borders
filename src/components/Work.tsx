import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SlotImage } from '../lib/ImageSlots';
import { EASE_OUT, fadeUp } from '../lib/motion';
import type { SlotId } from '../images';

const PATHWAYS: { tag: string; title: string; body: string; image: SlotId }[] = [
  { tag: '01', title: 'Exchange', body: 'Study in a new academic environment.', image: 'globalExchange' },
  { tag: '02', title: 'Research', body: 'Summer research at prestigious universities.', image: 'globalResearch' },
  { tag: '03', title: 'Co-Op', body: 'Build international professional experience.', image: 'globalCoop' },
  { tag: '04', title: 'Visits', body: 'Expand your academic and cultural perspective.', image: 'globalVisits' },
];

/** "Study In Saudi Arabia. Experience The World." — expanding flex gallery. */
export default function Work() {
  const [active, setActive] = useState(0);

  return (
    <section id="global" className="relative py-32" aria-labelledby="global-title">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="global-title" className="text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl">
            Study In Saudi Arabia.
            <br />
            <span className="bg-gradient-to-r from-delft to-fern bg-clip-text text-transparent">Experience The World.</span>
          </h2>
          <a
            href="#apply"
            className="group inline-flex items-center gap-2 self-start font-medium text-delft/70 transition-colors hover:text-delft md:self-auto"
          >
            <span className="relative">
              One University. More Than One World.
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-fern transition-all duration-300 group-hover:w-full" />
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.ul {...fadeUp(0.1)} className="flex h-[640px] flex-col gap-3 md:h-[400px] md:flex-row">
          {PATHWAYS.map((p, i) => {
            const isActive = i === active;
            return (
              <motion.li
                key={p.title}
                animate={{ flex: isActive ? 4 : 0.8 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                tabIndex={0}
                className="group relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-3xl border border-delft/10 shadow-[0_10px_40px_rgba(29,42,98,0.08)]"
              >
                <SlotImage
                  id={p.image}
                  className="absolute inset-0 h-full w-full transition-transform duration-1000 group-hover:scale-105"
                />
                <div
                  className={`pointer-events-none absolute inset-0 transition-colors duration-500 ${
                    isActive ? 'bg-gradient-to-t from-night/85 via-night/20 to-transparent' : 'bg-night/45'
                  }`}
                />

                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6 text-white md:p-8">
                  <span className="text-sm font-bold tracking-wider text-pistachio">{p.tag}</span>
                  <h3
                    className={`mt-2 whitespace-nowrap font-black tracking-tighter transition-all duration-500 ${
                      isActive ? 'text-4xl md:text-5xl' : 'text-xl md:[writing-mode:vertical-rl] md:rotate-180'
                    }`}
                  >
                    {p.title}
                  </h3>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="pointer-events-auto mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
                      >
                        <p className="max-w-sm font-light leading-relaxed text-white/85">{p.body}</p>
                        <a
                          href="#apply"
                          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-bold text-delft transition hover:scale-105 active:scale-95"
                        >
                          Explore
                          <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
