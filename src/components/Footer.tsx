import Link from "next/link";
import { property } from "@/content/property";

export function Footer() {
  return (
    <footer className="border-t border-ocean-800/20 bg-ocean-900 text-sand-100">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg text-sand-50">{property.name}</p>
          <p className="mt-2 text-sm text-sand-200">
            {property.address.street}
            <br />
            {property.address.city}, {property.address.state} {property.address.zip}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-sand-50">Explore</p>
          <ul className="mt-2 space-y-1 text-sand-200">
            <li><Link href="/amenities" className="hover:text-sand-50">Amenities</Link></li>
            <li><Link href="/gallery" className="hover:text-sand-50">Gallery</Link></li>
            <li><Link href="/area" className="hover:text-sand-50">Area Guide</Link></li>
            <li><Link href="/faq" className="hover:text-sand-50">FAQ</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-sand-50">Booking</p>
          <p className="mt-2 text-sand-200">
            Managed by {property.manager}
            <br />
            <a href={`tel:${property.managerPhone.replace(/[^\d+]/g, "")}`} className="hover:text-sand-50">
              {property.managerPhone}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-sand-100/10 px-6 py-4 text-center text-xs text-sand-300">
        © {new Date().getFullYear()} {property.name}. Bookings processed securely by {property.manager}.
      </div>
    </footer>
  );
}
