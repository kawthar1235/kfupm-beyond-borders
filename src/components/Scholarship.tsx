import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, GraduationCap, HeartPulse, Home, Wallet } from 'lucide-react';
import { fadeUp } from '../lib/motion';

const BENEFITS = [
  { icon: GraduationCap, title: 'Zero Tuition Fees', body: 'Your degree, fully covered.' },
  { icon: Home, title: 'Free On-Campus Housing', body: 'Modern accommodation on campus.' },
  { icon: Wallet, title: 'Monthly Stipend', body: 'Support for everyday living.' },
  { icon: BookOpen, title: 'Complimentary Course Texts', body: 'Books and materials included.' },
  { icon: HeartPulse, title: 'Medical Services', body: 'Care when you need it.' },
];

/** Slides "More Than Student Debt" + "Fully Funded". */
export default function Scholarship() {
  return (
    <section id="scholarship" className="relative py-32" aria-labelledby="scholarship-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Statement card */}
        <motion.div
          {...fadeUp()}
          className="relative overflow-hidden rounded-[2.5rem] bg-delft px-8 py-16 text-beige shadow-[0_30px_60px_rgba(29,42,98,0.25)] md:px-16 md:py-20"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-pistachio/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-carolina/30 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-bold tracking-wider text-pistachio">Fully Funded</p>
            <h2 className="mt-5 text-4xl font-black leading-[1.1] tracking-tighter text-white md:text-6xl">
              Your Ambition Deserves More Than Student Debt.
            </h2>
            <p className="mt-8 text-lg font-light leading-relaxed text-beige/85 md:text-xl">
              What if your university experience came with a full scholarship, free on-campus housing and a monthly
              stipend?
            </p>
            <p className="mt-4 text-lg font-bold">
              Study at KFUPM in Saudi Arabia. Focus on your future, not your expenses.
            </p>
            <a
              href="#benefits"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-pistachio px-8 py-4 font-bold text-delft shadow-[0_0_30px_rgba(175,208,110,0.35)] transition hover:scale-105 active:scale-95"
            >
              Discover Your Fully Funded Future
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </a>
          </div>
        </motion.div>

        {/* Benefits */}
        <div id="benefits" className="scroll-mt-32 pt-32">
          <motion.div {...fadeUp()} className="max-w-4xl">
            <h2 id="scholarship-title" className="text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl">
              What If Your Global Opportunity Was{' '}
              <span className="bg-gradient-to-r from-delft to-fern bg-clip-text text-transparent">Fully Funded?</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-fern">
              For eligible international undergraduate students, scholarship support can remove major financial
              barriers.
            </p>
          </motion.div>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {BENEFITS.map(({ icon: Icon, title, body }, i) => (
              <motion.li
                key={title}
                {...fadeUp(i * 0.08)}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border border-delft/10 bg-white/70 p-8 shadow-[0_10px_40px_rgba(29,42,98,0.05)] backdrop-blur-md transition-colors hover:border-fern/40 hover:bg-white lg:col-span-2 ${
                  i === 3 ? 'lg:col-start-2' : ''
                } ${i === 4 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-pistachio/25 transition-colors group-hover:bg-pistachio/60" />
                <Icon className="relative h-8 w-8 text-fern" aria-hidden />
                <h3 className="mt-8 text-xl font-bold tracking-tight">
                  <span className="mr-2 text-fern">✓</span>
                  {title}
                </h3>
                <p className="mt-2 font-light text-delft/70">{body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
