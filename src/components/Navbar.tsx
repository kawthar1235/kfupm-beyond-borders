import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Why Saudi', href: '#why' },
  { label: 'Global', href: '#global' },
  { label: 'Scholarship', href: '#scholarship' },
  { label: 'Campus Life', href: '#life' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 50], ['rgba(255,255,255,0.45)', 'rgba(255,255,255,0.8)']);
  const blur = useTransform(scrollY, [0, 50], ['blur(8px)', 'blur(24px)']);

  return (
    <header className="fixed inset-x-0 top-6 z-50 px-4">
      <motion.nav
        aria-label="Primary"
        style={{ backgroundColor: background, backdropFilter: blur, WebkitBackdropFilter: blur }}
        className={`mx-auto max-w-5xl border border-delft/10 shadow-[0_8px_32px_rgba(29,42,98,0.08)] transition-[border-radius] duration-300 ${
          open ? 'rounded-3xl' : 'rounded-full'
        }`}
      >
        <div className="flex items-center justify-between py-2 pl-5 pr-2">
          <a href="#top" className="flex items-center" aria-label="KFUPM home">
            <img src="brand/kfupm-mark-color.png" alt="KFUPM" className="h-7 w-auto" />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative py-1 text-sm font-medium text-delft/70 transition-colors hover:text-delft"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-delft to-fern transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#apply"
              className="hidden rounded-full bg-delft px-5 py-2.5 text-sm font-bold text-beige shadow-[0_8px_20px_rgba(29,42,98,0.2)] transition hover:scale-105 hover:shadow-[0_10px_30px_rgba(29,42,98,0.3)] active:scale-95 sm:inline-block"
            >
              Apply Now
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-full p-2.5 text-delft transition hover:bg-delft/5 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden px-5 md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="border-t border-delft/5">
                  <a href={item.href} onClick={() => setOpen(false)} className="block py-4 text-lg font-medium">
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pb-5 pt-2">
                <a
                  href="#apply"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-delft py-3 text-center font-bold text-beige active:scale-95"
                >
                  Apply Now
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
