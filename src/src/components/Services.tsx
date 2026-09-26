import { motion } from 'framer-motion';
import { Compass, Cpu, TrendingUp } from 'lucide-react';
import { SlotImage } from '../lib/ImageSlots';
import { fadeUp } from '../lib/motion';
import type { SlotId } from '../images';

const PILLARS: { tag: string; title: string; body: string; icon: typeof Cpu; image: SlotId }[] = [
  {
    tag: 'Future',
    title: 'A Transforming Economy',
    body: 'Study at the heart of a rapidly transforming economy.',
    icon: TrendingUp,
    image: 'whyFuture',
  },
  {
    tag: 'Connect',
    title: 'Technology & Innovation',
    body: 'Explore a growing ecosystem of technology, research and innovation.',
    icon: Cpu,
    image: 'whyConnect',
  },
  {
    tag: 'Discover',
    title: 'A Distinctive Experience',
    body: 'Discover Saudi culture, modern student life and a new international perspective.',
    icon: Compass,
    image: 'whyDiscover',
  },
];

/** "Why Saudi Arabia? Why Now?" */
export default function Services() {
  return (
    <section id="why" className="relative py-32" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 id="why-title" className="text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl">
            Why Saudi Arabia?
            <br />
            <span className="bg-gradient-to-r from-delft to-fern bg-clip-text text-transparent">Why Now?</span>
          </h2>
          <p className="max-w-md text-lg font-light leading-relaxed text-delft/70">
            Don’t just study technological transformation. Experience it happening around you, in a country
            transforming its future.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ tag, title, body, icon: Icon, image }, i) => (
            <motion.article
              key={tag}
              {...fadeUp(i * 0.12)}
              className="group relative overflow-hidden rounded-3xl border border-delft/10 bg-white/70 shadow-[0_10px_40px_rgba(29,42,98,0.06)] backdrop-blur-md transition-all hover:border-delft/20 hover:shadow-[0_20px_50px_rgba(29,42,98,0.12)]"
            >
              <div className="relative h-56 overflow-hidden">
                <SlotImage
                  id={image}
                  className="h-full w-full transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* quarter-circle icon badge */}
              <div className="absolute right-0 top-0 flex h-24 w-24 items-start justify-end rounded-bl-full bg-gradient-to-bl from-pistachio to-[#8fb957] p-5 shadow-[0_0_30px_rgba(175,208,110,0.35)]">
                <Icon className="h-7 w-7 text-delft" aria-hidden />
              </div>

              <div className="p-8">
                <p className="text-sm font-bold tracking-wider text-fern">{tag}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{title}</h3>
                <p className="mt-3 font-light leading-relaxed text-delft/70">{body}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p {...fadeUp(0.2)} className="mt-16 text-center text-2xl font-medium text-delft/60 md:text-3xl">
          Your Classroom Is Only <span className="font-bold text-delft">Part of the Experience.</span>
        </motion.p>
      </div>
    </section>
  );
}
