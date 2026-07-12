/**
 * Stylized aerial-beach artwork for the hero, standing in for a real drone/
 * aerial photo until Phase 0 licensed photography is available. Pure SVG —
 * no external image dependency.
 */
export function AerialBeachHero({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-label="Aerial view of turquoise ocean meeting a sandy Outer Banks beach"
      >
        <defs>
          <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8f2e7" />
            <stop offset="100%" stopColor="#e2cea8" />
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bfe0e0" />
            <stop offset="45%" stopColor="#5aa8ad" />
            <stop offset="100%" stopColor="#1f4d54" />
          </linearGradient>
          <linearGradient id="shallows" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eef6f7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a9cdd3" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1200" height="700" fill="url(#water)" />

        {/* sandy shoreline, curving diagonally like a real aerial shot */}
        <path
          d="M0,0 L760,0 C620,90 520,170 470,260 C400,390 380,520 420,700 L0,700 Z"
          fill="url(#sand)"
        />

        {/* shallow-water shelf where sand meets sea */}
        <path
          d="M760,0 C620,90 520,170 470,260 C400,390 380,520 420,700 L520,700 C500,520 500,390 560,270 C610,175 700,95 830,0 Z"
          fill="url(#shallows)"
        />

        {/* subtle surf lines */}
        <g stroke="#f8f2e7" strokeOpacity="0.35" strokeWidth="3" fill="none">
          <path d="M540,60 C480,150 440,250 430,350" />
          <path d="M600,20 C520,130 470,240 455,360" />
          <path d="M660,-10 C560,110 500,230 480,370" />
        </g>

        {/* a few soft sandbar/wave texture patches out in the water */}
        <g fill="#eef6f7" opacity="0.12">
          <ellipse cx="900" cy="180" rx="140" ry="26" />
          <ellipse cx="980" cy="380" rx="180" ry="30" />
          <ellipse cx="850" cy="560" rx="160" ry="24" />
        </g>
      </svg>
    </div>
  );
}
