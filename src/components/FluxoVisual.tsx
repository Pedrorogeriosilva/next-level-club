import { useEffect, useRef, useState } from 'react'
import { GoldStops } from './GoldStops'

const points: [number, number][] = [
  [0, 92], [1, 86], [2, 88], [3, 74], [4, 68],
  [5, 72], [6, 52], [7, 40], [8, 36], [9, 22], [10, 14],
]
const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV']

const cx0 = 64, cx1 = 432
const cy0 = 172, cy1 = 408
const sx = (i: number) => cx0 + (i / 10) * (cx1 - cx0)
const sy = (v: number) => cy1 - (v / 100) * (cy1 - cy0)

const path = points.map(([i, v], k) => `${k === 0 ? 'M' : 'L'} ${sx(i).toFixed(1)} ${sy(v).toFixed(1)}`).join(' ')
const area = `${path} L ${sx(10).toFixed(1)} ${cy1} L ${sx(0).toFixed(1)} ${cy1} Z`

const TARGET_PCT = 42
const DURATION = 2600
const PEAK_LABEL_DELAY = Math.round(DURATION * 0.35)
const END_LABEL_DELAY = Math.round(DURATION * 0.82)

export function FluxoVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [pct, setPct] = useState(0)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !animated) {
            setAnimated(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.35 },
    )
    io.observe(containerRef.current)
    return () => io.disconnect()
  }, [animated])

  useEffect(() => {
    if (!animated) return
    let start: number | null = null
    let raf = 0
    const tick = (t: number) => {
      if (start === null) start = t
      const p = Math.min(1, (t - start) / DURATION)
      const eased = 1 - Math.pow(1 - p, 3)
      setPct(Math.round(TARGET_PCT * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [animated])

  useEffect(() => {
    if (!animated || !pathRef.current) return
    const len = pathRef.current.getTotalLength()
    pathRef.current.style.strokeDasharray = `${len}`
    pathRef.current.style.strokeDashoffset = `${len}`
    void pathRef.current.getBoundingClientRect()
    pathRef.current.style.transition = `stroke-dashoffset ${DURATION}ms cubic-bezier(.4,.05,.25,1)`
    pathRef.current.style.strokeDashoffset = '0'
  }, [animated])

  return (
    <div ref={containerRef}>
      <svg viewBox="0 0 480 520" className="w-full h-auto" role="img" aria-label="Gráfico de receita em queda" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fluxoG" x1="0" y1="0" x2="1" y2="1"><GoldStops /></linearGradient>
          <linearGradient id="redArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D87171" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#D87171" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="redLine" x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0%" stopColor="#F0A7A7" />
            <stop offset="100%" stopColor="#C45C5C" />
          </linearGradient>
          <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(216,113,113,0.35)" />
            <stop offset="100%" stopColor="rgba(216,113,113,0)" />
          </radialGradient>
          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
          <clipPath id="areaClip">
            <rect x={cx0} y={cy0 - 8} width={animated ? (cx1 - cx0) : 0} height={cy1 - cy0 + 12}>
              {animated && <animate attributeName="width" from="0" to={cx1 - cx0} dur={`${DURATION}ms`} fill="freeze" calcMode="spline" keySplines="0.4 0.05 0.25 1" />}
            </rect>
          </clipPath>
        </defs>

        <ellipse cx="360" cy="370" rx="140" ry="80" fill="url(#redGlow)" />

        <g stroke="url(#fluxoG)" strokeWidth="0.9" fill="none" opacity="0.55">
          <path d="M 16 16 L 16 48 M 16 16 L 48 16" />
          <path d="M 464 16 L 464 48 M 464 16 L 432 16" />
          <path d="M 16 504 L 16 472 M 16 504 L 48 504" />
          <path d="M 464 504 L 464 472 M 464 504 L 432 504" />
        </g>

        {/* top row — eyebrow */}
        <text x="32" y="40" fontFamily="Inter, sans-serif" fontSize="9" fill="#9C7628" letterSpacing="4">RECEITA · 12 MESES</text>
        <text x="448" y="40" fontFamily="Inter, sans-serif" fontSize="9" fill="#9C7628" letterSpacing="4" textAnchor="end">CANAL ÚNICO</text>

        {/* big headline percentage — animated counter */}
        <text x="32" y="106" fontFamily="Anton, sans-serif" fontSize="48" fill="url(#fluxoG)" letterSpacing="2.5">−{pct}%</text>
        <text x="32" y="128" fontFamily="Inter, sans-serif" fontSize="10" fill="#D8D8D8" letterSpacing="3.5">CRESCIMENTO REAL DA OPERAÇÃO</text>

        {/* "EM QUEDA" tag — moved further from the percentage */}
        <g>
          <rect x="336" y="78" width="112" height="26" rx="4" fill="rgba(216,113,113,0.14)" stroke="rgba(216,113,113,0.7)" strokeWidth="0.9" />
          <circle cx="354" cy="91" r="3.4" fill="#D87171">
            <animate attributeName="opacity" values="1;0.35;1" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <text x="401" y="96" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#F0A7A7" letterSpacing="2.1" textAnchor="middle">EM QUEDA</text>
        </g>

        {/* y-axis grid + labels */}
        <g>
          {[0, 25, 50, 75, 100].map((v) => (
            <g key={v}>
              <line x1={cx0} y1={sy(v)} x2={cx1} y2={sy(v)} stroke="rgba(212,175,55,0.08)" strokeWidth="0.6" />
              <text x={cx0 - 8} y={sy(v) + 3} fontFamily="Inter, sans-serif" fontSize="9" fill="#6F756F" textAnchor="end" letterSpacing="1">{v}</text>
            </g>
          ))}
        </g>

        {/* axes */}
        <line x1={cx0} y1={cy0} x2={cx0} y2={cy1} stroke="url(#fluxoG)" strokeWidth="0.8" opacity="0.7" />
        <line x1={cx0} y1={cy1} x2={cx1} y2={cy1} stroke="url(#fluxoG)" strokeWidth="0.8" opacity="0.7" />

        {/* area fill under curve — clipped horizontally to reveal with the line */}
        <g clipPath="url(#areaClip)">
          <path d={area} fill="url(#redArea)" />
        </g>

        {/* declining line — animated draw */}
        <path d={path} fill="none" stroke="#D87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" filter="url(#lineGlow)" style={{ strokeDasharray: animated ? undefined : '9999', strokeDashoffset: animated ? undefined : '9999' }} />
        <path ref={pathRef} d={path} fill="none" stroke="url(#redLine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 9999, strokeDashoffset: 9999 }} />

        {/* data points — fade in synced with line draw via opacity transition */}
        {points.map(([i, v], k) => (
          <circle
            key={k}
            cx={sx(i)}
            cy={sy(v)}
            r={k === points.length - 1 ? 4.5 : 2.4}
            fill={k === points.length - 1 ? '#F0A7A7' : '#D87171'}
            stroke="#020F0B"
            strokeWidth={k === points.length - 1 ? 1.6 : 0}
            opacity={animated ? 1 : 0}
            style={{ transition: `opacity 280ms ease ${(k / points.length) * DURATION}ms` }}
          />
        ))}

        <g opacity={animated ? 1 : 0} style={{ transition: `opacity 300ms ease ${PEAK_LABEL_DELAY}ms` }}>
          <line x1={sx(0)} y1={sy(92) - 6} x2={sx(0)} y2={sy(92) - 28} stroke="rgba(245,215,122,0.6)" strokeWidth="0.6" strokeDasharray="2 3" />
          <text x={sx(0) + 6} y={sy(92) - 30} fontFamily="Inter, sans-serif" fontSize="9" fill="#F5D77A" letterSpacing="2">PICO</text>
        </g>

        <g opacity={animated ? 1 : 0} style={{ transition: `opacity 300ms ease ${END_LABEL_DELAY}ms` }}>
          <line x1={sx(10)} y1={sy(14) + 8} x2={sx(10) - 18} y2={sy(14) + 24} stroke="rgba(216,113,113,0.7)" strokeWidth="0.6" />
          <text x={sx(10) - 22} y={sy(14) + 28} fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#F0A7A7" letterSpacing="2" textAnchor="end">FUNDO</text>
        </g>

        <g fontFamily="Inter, sans-serif" fontSize="8" fill="#6F756F" letterSpacing="1.5">
          {months.map((m, i) => (
            <text key={m} x={sx(i)} y={cy1 + 16} textAnchor="middle">{m}</text>
          ))}
        </g>

        <line x1="32" y1="456" x2="448" y2="456" stroke="rgba(212,175,55,0.22)" strokeWidth="0.6" />
        <g fontFamily="Inter, sans-serif" letterSpacing="2">
          <text x="32" y="478" fontSize="10" fill="#D8D8D8">Dependência de uma única fonte de venda.</text>
          <text x="32" y="496" fontSize="9" fill="#9C7628" letterSpacing="3.5">O TETO CHEGA EM SILÊNCIO.</text>
        </g>
      </svg>
    </div>
  )
}
