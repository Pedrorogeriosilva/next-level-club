/* SVG icons & graphical components — Next Level Club */

const goldStops = (
  <React.Fragment>
    <stop offset="0%" stopColor="#9C7628" />
    <stop offset="42%" stopColor="#D4AF37" />
    <stop offset="68%" stopColor="#F5D77A" />
    <stop offset="100%" stopColor="#9C7628" />
  </React.Fragment>
);

function GearOutline({ size = 320, teeth = 14, className = "", strokeWidth = 1.4 }) {
  const cx = size / 2, cy = size / 2;
  const rOuter = size * 0.46;
  const rInner = size * 0.38;
  const rHub = size * 0.12;
  const path = [];
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a0 = i * step - step / 2;
    const a1 = a0 + step * 0.32;
    const a2 = a0 + step * 0.5;
    const a3 = a0 + step * 0.68;
    const a4 = a0 + step;
    const pt = (a, r) => `${cx + Math.cos(a) * r} ${cy + Math.sin(a) * r}`;
    if (i === 0) path.push(`M ${pt(a0, rInner)}`);
    path.push(`L ${pt(a1, rInner)}`);
    path.push(`L ${pt(a1, rOuter)}`);
    path.push(`L ${pt(a3, rOuter)}`);
    path.push(`L ${pt(a3, rInner)}`);
    path.push(`L ${pt(a4, rInner)}`);
  }
  path.push("Z");
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gearGold" x1="0%" y1="0%" x2="100%" y2="100%">{goldStops}</linearGradient>
      </defs>
      <path d={path.join(" ")} fill="none" stroke="url(#gearGold)" strokeWidth={strokeWidth} />
      <circle cx={cx} cy={cy} r={rHub} fill="none" stroke="url(#gearGold)" strokeWidth={strokeWidth} />
      <circle cx={cx} cy={cy} r={rHub * 0.45} fill="none" stroke="url(#gearGold)" strokeWidth={strokeWidth * 0.8} />
      {[...Array(teeth)].map((_, i) => {
        const a = i * step;
        const x1 = cx + Math.cos(a) * rHub * 1.3;
        const y1 = cy + Math.sin(a) * rHub * 1.3;
        const x2 = cx + Math.cos(a) * rInner * 0.92;
        const y2 = cy + Math.sin(a) * rInner * 0.92;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#gearGold)" strokeWidth={strokeWidth * 0.6} opacity="0.55" />;
      })}
    </svg>
  );
}

function ArrowUp({ size = 100, className = "" }) {
  return (
    <svg viewBox="0 0 100 140" width={size} height={size * 1.4} className={className}>
      <defs>
        <linearGradient id="arrG" x1="0%" y1="100%" x2="0%" y2="0%">{goldStops}</linearGradient>
      </defs>
      <path d="M50 130 L50 30 M30 50 L50 28 L70 50" fill="none" stroke="url(#arrG)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 130 L50 110" stroke="url(#arrG)" strokeWidth="2" opacity=".3" />
    </svg>
  );
}

function CircularDiagram({ motores }) {
  // 14 nodes around a large gear
  const size = 720;
  const cx = size / 2, cy = size / 2;
  const ringR = 280;
  const n = motores.length;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="diagGold" x1="0%" y1="0%" x2="100%" y2="100%">{goldStops}</linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(245,215,122,0.35)" />
          <stop offset="60%" stopColor="rgba(212,175,55,0.08)" />
          <stop offset="100%" stopColor="rgba(212,175,55,0)" />
        </radialGradient>
      </defs>

      {/* Center glow */}
      <circle cx={cx} cy={cy} r="160" fill="url(#centerGlow)" />

      {/* Outer dashed orbit */}
      <circle cx={cx} cy={cy} r={ringR + 40} fill="none" stroke="url(#diagGold)" strokeWidth="0.8" strokeDasharray="2 8" opacity=".5" />
      <circle cx={cx} cy={cy} r={ringR - 50} fill="none" stroke="url(#diagGold)" strokeWidth="0.6" strokeDasharray="1 6" opacity=".35" />

      {/* Lines from center to nodes */}
      {motores.map((m, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(a) * ringR;
        const y = cy + Math.sin(a) * ringR;
        const x0 = cx + Math.cos(a) * 110;
        const y0 = cy + Math.sin(a) * 110;
        return <line key={"l" + i} x1={x0} y1={y0} x2={x} y2={y} stroke="url(#diagGold)" strokeWidth="0.9" opacity=".55" />;
      })}

      {/* Center gear */}
      <g transform={`translate(${cx},${cy})`}>
        <g className="spin-slow">
          <g transform="translate(-100,-100)">
            <GearOutline size={200} teeth={12} strokeWidth={1.2} />
          </g>
        </g>
        <g transform="translate(-32,8)">
          <text fontFamily="Anton, sans-serif" fontSize="38" fill="url(#diagGold)" letterSpacing="2">14</text>
        </g>
        <g transform="translate(-46,28)">
          <text fontFamily="Inter, sans-serif" fontSize="10" fill="#F5D77A" letterSpacing="3">MOTORES</text>
        </g>
      </g>

      {/* Nodes */}
      {motores.map((m, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(a) * ringR;
        const y = cy + Math.sin(a) * ringR;
        const labelR = ringR + 36;
        const lx = cx + Math.cos(a) * labelR;
        const ly = cy + Math.sin(a) * labelR;
        const anchor = Math.cos(a) > 0.2 ? "start" : Math.cos(a) < -0.2 ? "end" : "middle";
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="22" fill="rgba(2,15,11,0.95)" stroke="url(#diagGold)" strokeWidth="1.2" />
            <text x={x} y={y + 6} fontFamily="Anton, sans-serif" fontSize="18" fill="url(#diagGold)" textAnchor="middle">{String(i + 1).padStart(2, "0")}</text>
            <text x={lx} y={ly} fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#F8F5EC" textAnchor={anchor} dominantBaseline="middle">
              {m}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function MiniGear({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <defs>
        <linearGradient id={"mg" + Math.random().toString(36).slice(2)} x1="0" y1="0" x2="1" y2="1">{goldStops}</linearGradient>
      </defs>
      <GearOutline size={64} teeth={10} strokeWidth={1.6} />
    </svg>
  );
}

function CheckIcon({ className = "", size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
      <circle cx="12" cy="12" r="10.5" stroke="url(#globalGold)" strokeWidth="1.2" />
      <path d="M7 12.5l3 3 7-7" stroke="url(#globalGold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon({ className = "", size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
      <circle cx="12" cy="12" r="10.5" stroke="rgba(216,113,113,.65)" strokeWidth="1.2" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="rgba(216,113,113,.9)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function LinkedInIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.12c0-1.46-.03-3.34-2.03-3.34-2.03 0-2.34 1.58-2.34 3.22V22H7.72V8z" />
    </svg>
  );
}
function WhatsappIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-1 1.2-.4.2-.7 0c-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.5.7.3 1.3.5 1.8.7.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  );
}

Object.assign(window, { goldStops, GearOutline, ArrowUp, CircularDiagram, MiniGear, CheckIcon, CrossIcon, InstagramIcon, LinkedInIcon, WhatsappIcon });
