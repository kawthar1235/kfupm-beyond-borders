import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { SlotImage } from '../lib/ImageSlots';
import { fadeUp } from '../lib/motion';

const STATS = [
  { value: '63rd', label: 'QS World University Rankings 2027' },
  { value: 'AI + X', label: 'AI learning integrated across disciplines' },
  { value: 'Global', label: 'Research and international experiences' },
];

/** "Meet KFUPM" */
export default function About() {
  return (
    <section id="meet" className="relative overflow-hidden py-32" aria-labelledby="meet-title">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-carolina/25 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div {...fadeUp()}>
          <p className="text-sm font-bold tracking-wider text-fern">Meet KFUPM</p>
          <h2 id="meet-title" className="mt-5 text-5xl font-black leading-[1.1] tracking-tighter md:text-6xl">
            An International STEM Opportunity in{' '}
            <span className="bg-gradient-to-r from-delft to-fern bg-clip-text text-transparent">Dhahran, Saudi Arabia.</span>
          </h2>
          <p className="mt-6 text-lg font-medium leading-relaxed text-delft/70">
            Globally Ranked. Future Focused. Internationally Connected.
          </p>

          <dl className="mt-12 divide-y divide-delft/10 border-y border-delft/10">
            {STATS.map((s, i) => (
              <motion.div key={s.value} {...fadeUp(0.1 + i * 0.1)} className="flex items-baseline gap-6 py-6">
                <dt className="w-32 shrink-0 text-4xl font-black tracking-tighter text-delft md:w-40 md:text-5xl">
                  {s.value}
                </dt>
                <dd className="font-light leading-relaxed text-delft/70">{s.label}</dd>
              </motion.div>
            ))}
          </dl>

          <a
            href="#apply"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-delft px-8 py-4 font-bold text-beige shadow-[0_10px_30px_rgba(29,42,98,0.25)] transition hover:scale-105 active:scale-95"
          >
            Apply Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="group relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-delft/10 shadow-[0_30px_60px_rgba(29,42,98,0.15)]">
            <SlotImage id="campus" className="h-full w-full transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-delft/10 bg-white/85 px-5 py-4 shadow-[0_10px_30px_rgba(29,42,98,0.12)] backdrop-blur-xl md:-left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pistachio text-delft">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-bold">King Fahd University of Petroleum & Minerals</p>
              <p className="text-xs font-light text-delft/60">Dhahran, Eastern Province</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
