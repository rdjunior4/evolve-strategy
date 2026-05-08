export function SharksLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="sharkFin" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.18 240)" />
            <stop offset="100%" stopColor="oklch(0.55 0.2 252)" />
          </linearGradient>
        </defs>
        <path
          d="M6 32 C 14 30, 22 24, 30 8 C 32 18, 33 26, 34 32 Z"
          fill="url(#sharkFin)"
        />
        <path d="M6 34 H 34" stroke="url(#sharkFin)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="leading-none">
        <div className="text-base font-bold tracking-[0.18em] text-foreground">SHARKS</div>
        <div className="text-[9px] font-medium tracking-[0.32em] text-muted-foreground">
          COMPANY
        </div>
      </div>
    </div>
  );
}
