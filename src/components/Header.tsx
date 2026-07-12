"use client";

import { useState } from "react";
import Link from "next/link";
import { CtaButton } from "./CtaButton";
import { property } from "@/content/property";

const navLinks = [
  { href: "/#rooms", label: "Rooms" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/area", label: "Area Guide" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold text-ocean-900">
          {property.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-ocean-800 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ocean-600">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CtaButton href="/book" className="text-xs sm:text-sm">
            Book Now
          </CtaButton>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ocean-900 hover:bg-sand-100 md:hidden"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="border-t border-sand-200 bg-sand-50 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1 text-base font-medium text-ocean-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-2 py-3 hover:bg-sand-100 hover:text-ocean-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
