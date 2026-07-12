"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

type Photo = { label: string };

/**
 * Render-prop lightbox: manages open/close/prev/next state over a flat photo
 * list while leaving grid layout (grouping, columns) to the caller.
 */
export function Lightbox({
  photos,
  children,
}: {
  photos: Photo[];
  children: (open: (index: number) => void) => ReactNode;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, showPrev, showNext]);

  const activePhoto = openIndex !== null ? photos[openIndex] : null;

  return (
    <>
      {children(setOpenIndex)}

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ocean-900/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.label}
          >
            <motion.div
              key={openIndex}
              className="relative w-full max-w-3xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <PhotoPlaceholder label={activePhoto.label} className="aspect-[4/3] w-full rounded-2xl" />
              <p className="mt-3 text-center text-sm text-sand-100">{activePhoto.label}</p>

              <button
                type="button"
                onClick={close}
                className="absolute -top-4 -right-4 flex h-9 w-9 items-center justify-center rounded-full bg-sand-50 text-ocean-900 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400"
                aria-label="Close"
              >
                ✕
              </button>
              <button
                type="button"
                onClick={showPrev}
                className="absolute top-1/2 -left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-sand-50/90 text-ocean-900 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 sm:-left-14"
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute top-1/2 -right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-sand-50/90 text-ocean-900 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 sm:-right-14"
                aria-label="Next photo"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function LightboxThumb({
  label,
  className,
  onClick,
}: {
  label: string;
  className: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-zoom-in rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-600 focus-visible:ring-offset-2"
      aria-label={`View larger photo: ${label}`}
    >
      <PhotoPlaceholder
        label={label}
        className={`${className} transition-transform duration-200 hover:scale-[1.02]`}
      />
    </button>
  );
}
