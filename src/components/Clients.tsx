import { motion } from 'framer-motion';
import { BookOpen, Cpu, Globe2, GraduationCap, HeartPulse, Home, Trophy, Wallet, Waves } from 'lucide-react';
import { fadeUp } from '../lib/motion';

const HIGHLIGHTS = [
  { icon: Trophy, text: '63rd · QS World Rankings 2027' },
  { icon: GraduationCap, text: 'Zero Tuition Fees' },
  { icon: Cpu, text: 'AI + X' },
  { icon: Home, text: 'Free On-Campus Housing' },
  { icon: Wallet, text: 'Monthly Stipend' },
  { icon: Globe2, text: 'Global Research' },
  { icon: BookOpen, text: 'Complimentary Course Texts' },
  { icon: HeartPulse, text: 'Medical Services' },
  { icon: Waves, text: 'Private Beach Access' },
];

/** Infinite highlights ticker (the spec's client-logo strip, adapted to KFUPM facts). */
export default function Clients() {
  const loop = [...HIGHLIGHTS, ...HIGHLIGHTS];

  return (
    <section className="relative border-y border-delft/5 bg-beige/50 py-24" aria-labelledby="highlights-title">
      <motion.div {...fadeUp()} className="mx-auto mb-12 flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
        <span className="rounded-full border border-fern/30 bg-pistachio/25 px-3 py-1 text-sm font-bold tracking-wider text-fern">
          Beyond Borders
        </span>
        <h2 id="highlights-title" className="text-2xl font-medium text-delft/60 md:text-3xl">
          Globally Ranked. Future Focused. <span className="text-delft">Internationally Connected.</span>
        </h2>
      </motion.div>

      <div className="relative overflow-hidden">
        <motion.ul
          className="flex w-max items-center gap-16 pr-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          {loop.map(({ icon: Icon, text }, i) => (
            <li
              key={i}
              aria-hidden={i >= HIGHLIGHTS.length}
              className="flex shrink-0 items-center gap-3 text-xl font-bold tracking-tight text-delft/45 transition-colors hover:text-delft md:text-2xl"
            >
              <Icon className="h-7 w-7 text-fern" aria-hidden />
              {text}
            </li>
          ))}
        </motion.ul>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8f7e5] to-transparent md:w-64" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f8f7e5] to-transparent md:w-64" />
      </div>
    </section>
  );
}
