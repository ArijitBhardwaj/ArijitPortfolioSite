export function MountainBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" className="dark:stop-color-[#1a2332] stop-color-[#87CEEB]" />
          <stop offset="100%" className="dark:stop-color-[#0f1419] stop-color-[#E0F6FF]" />
        </linearGradient>
      </defs>
      
      {/* Sky */}
      <rect width="1440" height="800" fill="url(#skyGradient)" />
      
      {/* Far mountains */}
      <path
        d="M0,400 L200,300 L400,350 L600,280 L800,320 L1000,260 L1200,300 L1440,340 L1440,800 L0,800 Z"
        className="dark:fill-[#1e293b] fill-[#94A3B8]"
        opacity="0.4"
      />
      
      {/* Middle mountains */}
      <path
        d="M0,500 L150,420 L350,450 L550,400 L750,440 L950,390 L1150,420 L1350,450 L1440,480 L1440,800 L0,800 Z"
        className="dark:fill-[#334155] fill-[#64748B]"
        opacity="0.6"
      />
      
      {/* Near mountains */}
      <path
        d="M0,600 L120,520 L280,550 L450,500 L620,540 L800,490 L980,530 L1150,510 L1320,540 L1440,560 L1440,800 L0,800 Z"
        className="dark:fill-[#475569] fill-[#475569]"
        opacity="0.8"
      />
      
      {/* Foreground hills */}
      <path
        d="M0,680 L100,640 L250,660 L400,630 L550,650 L700,620 L850,640 L1000,630 L1150,650 L1300,640 L1440,660 L1440,800 L0,800 Z"
        className="dark:fill-[#1e293b] fill-[#334155]"
      />
    </svg>
  );
}
