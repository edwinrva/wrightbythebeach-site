"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Lightweight animated stand-in for a real photo, used on area-guide pages
 * where no photo exists yet (private businesses, unverified locations).
 * Pure SVG + Framer Motion — no external image dependency.
 */
export function AnimatedCoastalVisual({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden bg-gradient-to-b from-ocean-100 via-sand-100 to-sand-200 ${className}`}>
      <motion.div
        className="absolute -top-8 right-10 h-24 w-24 rounded-full bg-sand-300/70"
        animate={prefersReducedMotion ? undefined : { opacity: [0.6, 0.9, 0.6], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full">
        <motion.path
          d="M0,170 C60,150 100,190 160,170 C220,150 260,190 320,170 C360,157 380,165 400,170 L400,260 L0,260 Z"
          fill="#a9cdd3"
          fillOpacity="0.55"
          animate={prefersReducedMotion ? undefined : { x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,200 C60,185 100,215 160,200 C220,185 260,215 320,200 C360,190 380,196 400,200 L400,260 L0,260 Z"
          fill="#4d8b96"
          fillOpacity="0.6"
          animate={prefersReducedMotion ? undefined : { x: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <path d="M0,225 C60,215 100,235 160,225 C220,215 260,235 320,225 C360,218 380,222 400,225 L400,260 L0,260 Z" fill="#1a4048" fillOpacity="0.65" />
      </svg>
    </div>
  );
}
