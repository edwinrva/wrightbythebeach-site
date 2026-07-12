/**
 * Stand-in for a real photo until listing images are dropped into /public/images
 * (see Phase 0 in the project plan). Swap for next/image once assets land.
 */
export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-ocean-100 via-sand-200 to-ocean-200 text-center text-sm font-medium text-ocean-800/70 ${className}`}
    >
      {label}
    </div>
  );
}
