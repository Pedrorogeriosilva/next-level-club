import { GoldStops } from './GoldStops'

interface GearOutlineProps {
  size?: number
  teeth?: number
  className?: string
  strokeWidth?: number
}

export function GearOutline({ size = 320, teeth = 14, className = '', strokeWidth = 1.4 }: GearOutlineProps) {
  const cx = size / 2
  const cy = size / 2
  const rOuter = size * 0.46
  const rInner = size * 0.38
  const rHub = size * 0.12
  const path: string[] = []
  const step = (Math.PI * 2) / teeth

  for (let i = 0; i < teeth; i++) {
    const a0 = i * step - step / 2
    const a1 = a0 + step * 0.32
    const a3 = a0 + step * 0.68
    const a4 = a0 + step
    const pt = (a: number, r: number) => `${cx + Math.cos(a) * r} ${cy + Math.sin(a) * r}`
    if (i === 0) path.push(`M ${pt(a0, rInner)}`)
    path.push(`L ${pt(a1, rInner)}`)
    path.push(`L ${pt(a1, rOuter)}`)
    path.push(`L ${pt(a3, rOuter)}`)
    path.push(`L ${pt(a3, rInner)}`)
    path.push(`L ${pt(a4, rInner)}`)
  }
  path.push('Z')

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gearGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <GoldStops />
        </linearGradient>
      </defs>
      <path d={path.join(' ')} fill="none" stroke="url(#gearGold)" strokeWidth={strokeWidth} />
      <circle cx={cx} cy={cy} r={rHub} fill="none" stroke="url(#gearGold)" strokeWidth={strokeWidth} />
      <circle cx={cx} cy={cy} r={rHub * 0.45} fill="none" stroke="url(#gearGold)" strokeWidth={strokeWidth * 0.8} />
      {[...Array(teeth)].map((_, i) => {
        const a = i * step
        const x1 = cx + Math.cos(a) * rHub * 1.3
        const y1 = cy + Math.sin(a) * rHub * 1.3
        const x2 = cx + Math.cos(a) * rInner * 0.92
        const y2 = cy + Math.sin(a) * rInner * 0.92
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#gearGold)" strokeWidth={strokeWidth * 0.6} opacity="0.55" />
      })}
    </svg>
  )
}
