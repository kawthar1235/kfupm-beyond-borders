import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { SlotImage } from '../lib/ImageSlots';
import { fadeUp } from '../lib/motion';
import { LINKS } from '../links';

const TOPICS = ['Campus Life', 'Accommodation', 'Friendships', 'Safety', 'Learning In English'];

export default function Stories() {
  return (
    <section id="stories" className="relative py-32" aria-labelledby="stories-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p {...fadeUp()} className="text-sm font-bold tracking-wider text-fern">
          Real Stories. Real Student Life.
        </motion.p>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <motion.a
            {...fadeUp(0.1)}
            href={LINKS.studentVoices}
            className="group relative block aspect-[16/11] overflow-hidden rounded-3xl border border-delft/10 shadow-[0_30px_60px_rgba(29,42,98,0.15)]"
            aria-label="Watch student voices videos"
          >
            <SlotImage id="stories" className="h-full w-full transition-transform duration-1000 group-hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 bg-night/0 transition-colors group-hover:bg-night/20" />
            <span className="pointer-events-none absolute bottom-6 right-6 flex h-20 w-20 items-center justify-center rounded-full bg-pistachio text-delft shadow-[0_10px_40px_rgba(67,113,24,0.35)] transition-transform duration-500 group-hover:scale-110">
              <Play className="ml-1 h-8 w-8 fill-current" aria-hidden />
            </span>
          </motion.a>

          <motion.div {...fadeUp(0.2)}>
            <h2 id="stories-title" className="text-5xl font-black leading-[1.1] tracking-tighter md:text-6xl">
              Don’t Just Take{' '}
              <span className="bg-gradient-to-r from-delft to-fern bg-clip-text text-transparent">Our Word For It.</span>
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-delft/70">
              Short, authentic student videos on campus life, accommodation, friendships, safety and learning in
              English.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-delft/10 bg-white/70 px-4 py-1.5 text-sm font-medium text-delft/70"
                >
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={LINKS.studentVoices}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-delft px-8 py-4 font-bold text-beige shadow-[0_10px_30px_rgba(29,42,98,0.25)] transition hover:scale-105 active:scale-95"
            >
              Student Voices
              <Play className="h-4 w-4 fill-current" aria-hidden />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
