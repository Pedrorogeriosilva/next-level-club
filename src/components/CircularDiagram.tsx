import { useEffect, useRef, useState } from 'react'
import { GoldStops } from './GoldStops'

interface CircularDiagramProps {
  motores: string[]
}

const STEP_MS = 130

export function CircularDiagram({ motores }: CircularDiagramProps) {
  const size = 720
  const cx = size / 2
  const cy = size / 2
  const ringR = 280
  const n = motores.length

  const ref = useRef<SVGSVGElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !revealed) {
            setRevealed(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.25 },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [revealed])

  return (
    <svg
      ref={ref}
      viewBox={`-180 -20 ${size + 360} ${size + 40}`}
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="diagGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <GoldStops />
        </linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(245,215,122,0.35)" />
          <stop offset="60%" stopColor="rgba(212,175,55,0.08)" />
          <stop offset="100%" stopColor="rgba(212,175,55,0)" />
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r="160" fill="url(#centerGlow)" />
      <circle cx={cx} cy={cy} r={ringR + 40} fill="none" stroke="url(#diagGold)" strokeWidth="0.8" strokeDasharray="2 8" opacity=".5" />
      <circle cx={cx} cy={cy} r={ringR - 50} fill="none" stroke="url(#diagGold)" strokeWidth="0.6" strokeDasharray="1 6" opacity=".35" />

      <g transform={`translate(${cx},${cy})`}>
        <circle cx="0" cy="0" r="92" fill="none" stroke="url(#diagGold)" strokeWidth="1" opacity=".55" />
        <circle cx="0" cy="0" r="72" fill="none" stroke="url(#diagGold)" strokeWidth="0.8" strokeDasharray="2 6" opacity=".4" />
        <text x="0" y="-4" fontFamily="Anton, sans-serif" fontSize="58" fill="url(#diagGold)" letterSpacing="3" textAnchor="middle" dominantBaseline="middle">14</text>
        <text x="0" y="34" fontFamily="Inter, sans-serif" fontSize="12" fill="#F5D77A" letterSpacing="5" textAnchor="middle" dominantBaseline="middle">MOTORES</text>
      </g>

      {motores.map((m, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2
        const x = cx + Math.cos(a) * ringR
        const y = cy + Math.sin(a) * ringR
        const xInner = cx + Math.cos(a) * 140
        const yInner = cy + Math.sin(a) * 140
        const xLine = cx + Math.cos(a) * (ringR - 26)
        const yLine = cy + Math.sin(a) * (ringR - 26)
        const labelR = ringR + 44
        const lx = cx + Math.cos(a) * labelR
        const ly = cy + Math.sin(a) * labelR
        const anchor = Math.cos(a) > 0.2 ? 'start' : Math.cos(a) < -0.2 ? 'end' : 'middle'
        const delay = `${i * STEP_MS}ms`

        return (
          <g key={i} className="motor-tick" style={{ opacity: revealed ? 1 : 0, transition: `opacity 360ms ease ${delay}` }}>
            {/* radial spoke — draws from center outward */}
            <line
              x1={xInner}
              y1={yInner}
              x2={revealed ? xLine : xInner}
              y2={revealed ? yLine : yInner}
              stroke="#D4AF37"
              strokeWidth="1.2"
              opacity=".75"
              style={{ transition: `all 360ms cubic-bezier(.4,.05,.25,1) ${delay}` }}
            />
            {/* number circle */}
            <g
              style={{
                transformOrigin: `${x}px ${y}px`,
                transform: revealed ? 'scale(1)' : 'scale(0.55)',
                transition: `transform 420ms cubic-bezier(.34,1.56,.64,1) ${delay}`,
              }}
            >
              <circle cx={x} cy={y} r="26" fill="rgba(2,15,11,0.95)" stroke="url(#diagGold)" strokeWidth="1.4" />
              <text x={x} y={y} fontFamily="Anton, sans-serif" fontSize="22" fill="url(#diagGold)" textAnchor="middle" dominantBaseline="middle">
                {String(i + 1).padStart(2, '0')}
              </text>
            </g>
            {/* label */}
            <text
              x={lx}
              y={ly}
              fontFamily="Inter, sans-serif"
              fontSize="15"
              fontWeight="600"
              fill="#F8F5EC"
              textAnchor={anchor}
              dominantBaseline="middle"
              style={{ opacity: revealed ? 1 : 0, transition: `opacity 420ms ease ${parseInt(delay) + 180}ms` }}
            >
              {m}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
