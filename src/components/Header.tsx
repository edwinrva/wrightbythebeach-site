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
        <CtaButton href="/book" className="text-xs sm:text-sm">
          Book Now
        </CtaButton>
      </div>
    </header>
  );
}
