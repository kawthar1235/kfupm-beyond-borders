import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ImagePlus, Images, RotateCcw, Upload, X } from 'lucide-react';
import { IMAGE_SLOTS, SHOW_IMAGE_STUDIO, type SlotId } from '../images';
import { loadAll, removeBlob, saveBlob } from './imageStore';

type Ctx = {
  srcOf: (id: SlotId) => string;
  isPicked: (id: SlotId) => boolean;
  pick: (id: SlotId) => void;
  reset: (id: SlotId) => void;
};

const ImageCtx = createContext<Ctx | null>(null);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [picked, setPicked] = useState<Partial<Record<SlotId, string>>>({});

  useEffect(() => {
    loadAll().then((blobs) => {
      const urls: Partial<Record<SlotId, string>> = {};
      for (const [id, blob] of Object.entries(blobs)) {
        if (id in IMAGE_SLOTS) urls[id as SlotId] = URL.createObjectURL(blob);
      }
      setPicked(urls);
    });
  }, []);

  const pick = useCallback((id: SlotId) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      saveBlob(id, file);
      setPicked((prev) => {
        if (prev[id]) URL.revokeObjectURL(prev[id]!);
        return { ...prev, [id]: URL.createObjectURL(file) };
      });
    };
    input.click();
  }, []);

  const reset = useCallback((id: SlotId) => {
    removeBlob(id);
    setPicked((prev) => {
      if (prev[id]) URL.revokeObjectURL(prev[id]!);
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      srcOf: (id) => picked[id] ?? IMAGE_SLOTS[id].src,
      isPicked: (id) => Boolean(picked[id]),
      pick,
      reset,
    }),
    [picked, pick, reset],
  );

  return <ImageCtx.Provider value={value}>{children}</ImageCtx.Provider>;
}

export function useImages() {
  const ctx = useContext(ImageCtx);
  if (!ctx) throw new Error('useImages must be used inside <ImageProvider>');
  return ctx;
}

type SlotImageProps = {
  id: SlotId;
  className?: string;
  eager?: boolean;
  /** Where the "choose image" button sits on the placeholder; move it off headlines. */
  pickerPosition?: 'center' | 'bottom-right';
};

/** An <img> bound to a slot; renders a "choose image" placeholder until the slot is filled. */
export function SlotImage({ id, className = '', eager = false, pickerPosition = 'center' }: SlotImageProps) {
  const { srcOf, pick } = useImages();
  const src = srcOf(id);
  const slot = IMAGE_SLOTS[id];

  if (src && /\.(mp4|webm|mov)$/i.test(src)) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload={eager ? 'auto' : 'metadata'}
        aria-label={slot.alt}
        className={`object-cover ${className}`}
      />
    );
  }

  if (src) {
    return (
      <img
        src={src}
        alt={slot.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-paper bg-gradient-to-br from-carolina/40 via-beige to-pistachio/40 ${className}`}
      role="img"
      aria-label={`Image placeholder: ${slot.label}`}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(29,42,98,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(29,42,98,.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {SHOW_IMAGE_STUDIO && (
        <button
          type="button"
          onClick={(e) => {
            // placeholders can sit inside links or clickable panels
            e.preventDefault();
            e.stopPropagation();
            pick(id);
          }}
          className={`${
            pickerPosition === 'bottom-right' ? 'absolute bottom-8 right-8' : 'relative'
          } z-10 flex flex-col items-center gap-2 rounded-2xl border border-dashed border-delft/30 bg-white/80 px-5 py-4 text-center shadow-[0_10px_30px_rgba(29,42,98,0.12)] backdrop-blur-md transition hover:border-fern hover:bg-white`}
        >
          <ImagePlus className="h-6 w-6 text-fern" aria-hidden />
          <span className="text-xs font-bold tracking-wider text-delft">{slot.label}</span>
          <span className="text-[11px] font-light text-delft/60" dir="rtl">
            اضغط لاختيار صورة
          </span>
        </button>
      )}
    </div>
  );
}

/** Floating panel listing every image slot. Hidden when SHOW_IMAGE_STUDIO is false. */
export function ImageStudio() {
  const { srcOf, isPicked, pick, reset } = useImages();
  const [open, setOpen] = useState(false);
  if (!SHOW_IMAGE_STUDIO) return null;

  const ids = Object.keys(IMAGE_SLOTS) as SlotId[];
  const filled = ids.filter((id) => srcOf(id)).length;
  const sections = [...new Set(ids.map((id) => IMAGE_SLOTS[id].section))];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-[60] flex items-center gap-2 rounded-full border border-delft/10 bg-white/90 text-delft py-3 pl-4 pr-5 text-sm font-semibold shadow-[0_10px_30px_rgba(29,42,98,0.15)] backdrop-blur-xl transition hover:scale-105 active:scale-95"
        aria-label="Open image picker"
      >
        <Images className="h-4 w-4 text-fern" aria-hidden />
        Images
        <span className="rounded-full bg-delft/5 px-2 py-0.5 text-xs text-delft/60">
          {filled}/{ids.length}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-delft/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[80] flex w-full max-w-md flex-col border-l border-delft/10 bg-paper/95 text-delft backdrop-blur-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              aria-label="Image picker"
            >
              <div className="flex items-start justify-between border-b border-delft/10 p-6">
                <div>
                  <p className="text-xs font-bold tracking-wider text-fern">Image Studio</p>
                  <h2 className="mt-1 text-2xl font-black tracking-tighter">Choose Every Photo</h2>
                  <p className="mt-2 text-sm font-light leading-relaxed text-delft/60">
                    Picks are saved in this browser so you can try options. For the live site, put the final files in{' '}
                    <code className="text-fern">public/images</code> and set them in{' '}
                    <code className="text-fern">src/images.ts</code>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-delft/60 transition hover:bg-delft/5 hover:text-delft"
                  aria-label="Close image picker"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 space-y-8 overflow-y-auto p-6">
                {sections.map((section) => (
                  <div key={section}>
                    <h3 className="mb-3 text-xs font-bold tracking-wider text-delft/60">{section}</h3>
                    <ul className="space-y-3">
                      {ids
                        .filter((id) => IMAGE_SLOTS[id].section === section)
                        .map((id) => {
                          const src = srcOf(id);
                          return (
                            <li key={id} className="flex gap-4 rounded-2xl border border-delft/10 bg-white/70 p-3">
                              <button
                                type="button"
                                onClick={() => pick(id)}
                                className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border border-dashed border-delft/20 bg-beige"
                                aria-label={`Choose image for ${IMAGE_SLOTS[id].label}`}
                              >
                                {src ? (
                                  <img src={src} alt="" className="h-full w-full object-cover" />
                                ) : (
                                  <ImagePlus className="mx-auto h-5 w-5 text-delft/60" aria-hidden />
                                )}
                              </button>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold">{IMAGE_SLOTS[id].label}</p>
                                <p className="mt-0.5 text-xs font-light leading-relaxed text-delft/60">
                                  {IMAGE_SLOTS[id].hint}
                                </p>
                                <div className="mt-2 flex gap-2">
                                  <button
                                    type="button"
                                    onClick={() => pick(id)}
                                    className="flex items-center gap-1.5 rounded-full bg-delft px-3 py-1 text-xs font-bold text-beige transition hover:scale-105 active:scale-95"
                                  >
                                    <Upload className="h-3 w-3" aria-hidden />
                                    {src ? 'Replace' : 'Upload'}
                                  </button>
                                  {isPicked(id) && (
                                    <button
                                      type="button"
                                      onClick={() => reset(id)}
                                      className="flex items-center gap-1.5 rounded-full border border-delft/20 px-3 py-1 text-xs font-medium text-delft/70 transition hover:bg-delft/5"
                                    >
                                      <RotateCcw className="h-3 w-3" aria-hidden />
                                      Remove
                                    </button>
                                  )}
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
