import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SlotImage } from '../lib/ImageSlots';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const clipPath = useTransform(scrollYProgress, [0, 0.8], ['circle(0% at 50% 50%)', 'circle(150% at 50% 50%)']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const baseTextOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.2]);
  const revealTextY = useTransform(scrollYProgress, [0.2, 0.7], [60, 0]);
  const revealTextOpacity = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[300vh]" aria-label="Introduction">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Base layer: imagine */}
        <motion.div style={{ scale }} className="absolute inset-0">
          <SlotImage id="heroSketch" eager pickerPosition="bottom-right" className="h-full w-full" />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/80 via-paper/50 to-paper/90" />

        <motion.div
          style={{ opacity: baseTextOpacity }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8"
        >
          <p className="mb-6 text-sm font-bold tracking-wider text-fern">
            KFUPM <span className="text-delft/30">/</span> International Undergraduates
          </p>
          <h1 className="max-w-5xl text-5xl font-black leading-[1.1] tracking-tighter text-delft sm:text-6xl lg:text-8xl">
            What If Your Next Big Opportunity Was{' '}
            <span className="bg-gradient-to-r from-delft to-fern bg-clip-text text-transparent">Beyond Europe?</span>
          </h1>
        </motion.div>

        {/* Top layer: reality, revealed by an expanding circle */}
        <motion.div style={{ clipPath, WebkitClipPath: clipPath }} className="absolute inset-0">
          <motion.div style={{ scale }} className="absolute inset-0">
            <SlotImage id="heroReveal" eager pickerPosition="bottom-right" className="h-full w-full" />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" />

          <motion.div
            style={{ y: revealTextY, opacity: revealTextOpacity }}
            className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto flex max-w-6xl flex-col items-start px-4 pb-24 text-white sm:px-6 lg:px-8"
          >
            <span className="mb-5 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-bold tracking-wider text-beige backdrop-blur-md">
              Dhahran · Saudi Arabia
            </span>
            <p className="max-w-4xl text-5xl font-black leading-[1.1] tracking-tighter sm:text-6xl lg:text-7xl">
              Discover An{' '}
              <span className="bg-gradient-to-r from-pistachio to-beige bg-clip-text text-transparent">Unexpected</span>{' '}
              Study Destination.
            </p>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/85 md:text-xl">
              A country shaping the future of technology, energy and innovation.
            </p>
            <a
              href="#why"
              className="group pointer-events-auto mt-10 inline-flex items-center gap-3 rounded-full bg-pistachio px-8 py-4 font-bold text-delft shadow-[0_0_20px_rgba(255,255,255,0.2)] transition hover:scale-105 hover:shadow-[0_0_40px_rgba(175,208,110,0.5)] active:scale-95"
            >
              Why Saudi Arabia
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown className="h-8 w-8 text-delft/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
