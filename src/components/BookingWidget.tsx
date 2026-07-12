"use client";

import { useState } from "react";
import { buildBookingUrl } from "@/lib/booking";
import { trackBookingHandoff } from "@/lib/analytics";

type Props = {
  className?: string;
  compact?: boolean;
};

export function BookingWidget({ className = "", compact = false }: Props) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const href = buildBookingUrl(
    checkIn ? new Date(`${checkIn}T00:00:00`) : undefined,
    checkOut ? new Date(`${checkOut}T00:00:00`) : undefined
  );

  return (
    <form
      className={`flex flex-col gap-3 rounded-2xl bg-sand-50 p-4 shadow-lg sm:flex-row sm:items-end ${className}`}
      action={href}
      method="GET"
      target="_blank"
      rel="noopener noreferrer"
      onSubmit={(e) => {
        e.preventDefault();
        trackBookingHandoff({ checkIn, checkOut });
        window.open(href, "_blank", "noopener,noreferrer");
      }}
    >
      <label className="flex-1 text-left text-xs font-semibold uppercase tracking-wide text-ocean-800">
        Check-in
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="mt-1 w-full rounded-lg border border-sand-200 px-3 py-2 text-sm text-ink"
        />
      </label>
      <label className="flex-1 text-left text-xs font-semibold uppercase tracking-wide text-ocean-800">
        Check-out
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="mt-1 w-full rounded-lg border border-sand-200 px-3 py-2 text-sm text-ink"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-ocean-800 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-sand-50 transition-colors hover:bg-ocean-900 sm:w-auto"
      >
        {compact ? "Check Availability" : "Check Availability & Book"}
      </button>
    </form>
  );
}
