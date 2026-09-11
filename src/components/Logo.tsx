type LogoProps = {
  className?: string;
  withTagline?: boolean;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="kaelux-mark-grad" x1="28" y1="52" x2="84" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0d47ff" />
          <stop offset="1" stopColor="#268bff" />
        </linearGradient>
      </defs>
      <path d="M26 12 L26 88" stroke="#E6E8ED" strokeWidth="13" strokeLinecap="square" />
      <path d="M28 52 L84 14" stroke="url(#kaelux-mark-grad)" strokeWidth="13" strokeLinecap="square" />
      <path d="M28 52 L84 88" stroke="url(#kaelux-mark-grad)" strokeWidth="13" strokeLinecap="square" />
    </svg>
  );
}

export function Logo({ className, withTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark className="h-7 w-7 shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="text-lg font-semibold tracking-[0.14em] text-foreground">
          KAELU<span className="text-accent">X</span>
        </span>
        {withTagline && (
          <span className="mt-1 text-[10px] font-medium tracking-[0.3em] text-muted">
            INFRAESTRUCTURA INTELIGENTE
          </span>
        )}
      </div>
    </div>
  );
}
