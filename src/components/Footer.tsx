import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { fadeUp } from '../lib/motion';
import { LINKS } from '../links';
import FundingCTA from './FundingCTA';

const STEPS = [
  { n: '01', label: 'Explore Undergraduate Programs', href: LINKS.programs },
  { n: '02', label: 'Check Scholarship Eligibility', href: LINKS.eligibility },
  { n: '03', label: 'Review Requirements & Deadlines', href: LINKS.requirements },
  { n: '04', label: 'Start Your Application', href: LINKS.apply },
];

const NAV = [
  { label: 'Why Saudi Arabia', href: '#why' },
  { label: 'Experience the World', href: '#global' },
  { label: 'Meet KFUPM', href: '#meet' },
  { label: 'Scholarship', href: '#scholarship' },
  { label: 'Campus Life', href: '#life' },
  { label: 'Student Stories', href: '#stories' },
];

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: LINKS.social.instagram },
  { icon: Linkedin, label: 'LinkedIn', href: LINKS.social.linkedin },
  { icon: Youtube, label: 'YouTube', href: LINKS.social.youtube },
  { icon: Twitter, label: 'X', href: LINKS.social.x },
];

export default function Footer() {
  return (
    <footer id="apply" className="relative overflow-hidden border-t border-delft/5 bg-beige/60 pt-32" aria-labelledby="apply-title">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-pistachio/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <motion.div {...fadeUp()}>
          <h2 id="apply-title" className="text-6xl font-black leading-[1.1] tracking-tighter md:text-8xl">
            Ready to Go
            <br />
            <span className="bg-gradient-to-r from-delft to-fern bg-clip-text text-transparent">Beyond Borders?</span>
          </h2>
          <p className="mt-6 text-xl font-semibold text-fern">One Clear Next Step, from Inspiration to Application.</p>
        </motion.div>

        <ol className="mt-16 grid gap-4 md:grid-cols-2">
          {STEPS.map((s, i) => {
            // the final step is the primary action: brand gradient, white text
            const primary = i === STEPS.length - 1;
            return (
              <motion.li key={s.n} {...fadeUp(i * 0.08)}>
                <a
                  href={s.href}
                  className={`group flex items-center gap-6 rounded-3xl border px-8 py-7 backdrop-blur-md transition-all duration-300 ${
                    primary
                      ? 'border-transparent bg-gradient-to-r from-delft to-fern text-white shadow-[0_15px_40px_rgba(29,42,98,0.3)] hover:shadow-[0_20px_50px_rgba(67,113,24,0.35)]'
                      : 'border-delft/10 bg-white/70 shadow-[0_10px_40px_rgba(29,42,98,0.05)] hover:border-fern/40 hover:bg-white'
                  }`}
                >
                  <span className={`text-sm font-bold tracking-wider ${primary ? 'text-white/80' : 'text-fern'}`}>{s.n}</span>
                  <span className="flex-1 text-lg font-semibold md:text-xl">{s.label}</span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45 group-hover:border-pistachio group-hover:bg-pistachio ${
                      primary ? 'border-white/40 group-hover:text-delft' : 'border-delft/20'
                    }`}
                  >
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ol>

        <div className="mt-24">
          <FundingCTA />
        </div>

        {/* Links */}
        <div className="mt-32 grid gap-12 border-t border-delft/10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src="brand/kfupm-logo-color.png" alt="King Fahd University of Petroleum & Minerals" loading="lazy" className="h-20 w-auto" />
            <p className="mt-6 max-w-sm font-light leading-relaxed text-delft/70">
              An international STEM opportunity in Dhahran, Saudi Arabia. Globally ranked, future focused and
              internationally connected.
            </p>
          </div>
          <nav aria-label="Footer">
            <h3 className="text-sm font-bold tracking-wider text-delft/50">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group relative font-light text-delft/75 transition-colors hover:text-delft">
                    {l.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-fern transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-sm font-bold tracking-wider text-delft/50">Follow</h3>
            <ul className="mt-5 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-delft/10 bg-white/70 text-delft/70 transition hover:scale-105 hover:border-delft/30 hover:text-delft active:scale-95"
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-delft/5 py-8 text-sm text-delft/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} King Fahd University of Petroleum & Minerals. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href={LINKS.privacy} className="transition-colors hover:text-delft">
              Privacy Policy
            </a>
            <a href={LINKS.terms} className="transition-colors hover:text-delft">
              Terms Of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
