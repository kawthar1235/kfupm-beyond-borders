import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../lib/motion';
import { LINKS } from '../links';

/** Funding-led message; the last block on the page, after "Ready to Go Beyond Borders?". */
export default function FundingCTA() {
  return (
    <motion.div
      {...fadeUp()}
      className="relative overflow-hidden rounded-[2.5rem] bg-delft px-8 py-16 text-beige shadow-[0_30px_60px_rgba(29,42,98,0.25)] md:px-16 md:py-20"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-pistachio/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-carolina/30 blur-3xl" />
      <div className="relative max-w-3xl">
        <p className="text-sm font-bold tracking-wider text-pistachio">Netherlands · Ireland</p>
        <h2 className="mt-5 text-4xl font-black leading-[1.1] tracking-tighter text-white md:text-6xl">
          Your Ambition Deserves More Than Student Debt.
        </h2>
        <p className="mt-8 text-lg font-light leading-relaxed text-beige/85 md:text-xl">
          What if your university experience came with a full scholarship, free on-campus housing and a monthly
          stipend?
        </p>
        <p className="mt-4 text-lg font-bold">Study at KFUPM in Saudi Arabia. Focus on your future, not your expenses.</p>
        <a
          href={LINKS.eligibility}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-pistachio px-8 py-4 font-bold text-delft shadow-[0_0_30px_rgba(175,208,110,0.35)] transition hover:scale-105 active:scale-95"
        >
          Discover Your Fully Funded Future
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
        </a>
      </div>
    </motion.div>
  );
}
