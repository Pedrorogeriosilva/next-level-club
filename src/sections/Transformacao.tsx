import { CheckIcon, CrossIcon } from '../components/Icons'
import { GoldStops } from '../components/GoldStops'

const antes = [
  'Dependência de uma única fonte de venda',
  'Crescimento baseado em esforço',
  'Falta de previsibilidade',
  'Dono no centro de tudo',
  'Ações soltas sem método',
]

const depois = [
  'Múltiplos motores de faturamento',
  'Estratégia clara de crescimento',
  'Diagnóstico do negócio',
  'Acompanhamento com mentoras e especialistas',
  'Plano de execução com foco em resultado',
]

export function Transformacao() {
  return (
    <section className="relative py-20 md:py-28" style={{ background: 'var(--night)' }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 fade-in">
          <div className="section-tag mb-6"><span className="dot"></span>Transformação</div>
          <h2 className="font-display uppercase" style={{ fontSize: 'clamp(36px, 5.6vw, 68px)', lineHeight: 1.15 }}>
            <span style={{ color: '#F8F5EC' }}>De uma operação dependente para uma </span>
            <span className="gold-text">máquina de crescimento.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_60px_1fr] gap-6 items-stretch">
          <div className="card p-7 md:p-9 relative" style={{ background: 'linear-gradient(180deg,rgba(53,23,14,.22) 0%,rgba(1,11,9,.88) 100%)', borderColor: 'rgba(53,23,14,.55)' }}>
            <div className="text-[11px] tracking-[.32em] uppercase mb-2" style={{ color: '#C48A6A' }}>Antes</div>
            <h3 className="font-display uppercase text-[28px] md:text-[34px] mb-6" style={{ color: '#D8D8D8' }}>Operação dependente</h3>
            <ul className="space-y-4">
              {antes.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CrossIcon className="shrink-0 mt-0.5" />
                  <span className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--gray)]">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hide-mobile flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-px h-20" style={{ background: 'linear-gradient(180deg,transparent,var(--gold),transparent)' }}></div>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <defs><linearGradient id="aroG" x1="0" y1="0" x2="1" y2="1"><GoldStops /></linearGradient></defs>
                <circle cx="18" cy="18" r="17" stroke="url(#aroG)" strokeWidth="1" />
                <path d="M14 10l8 8-8 8" stroke="url(#aroG)" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              <div className="w-px h-20" style={{ background: 'linear-gradient(180deg,transparent,var(--gold),transparent)' }}></div>
            </div>
          </div>

          <div className="card card-corner p-7 md:p-9 relative" style={{ background: 'linear-gradient(180deg,rgba(17,57,41,.95) 0%,rgba(4,33,23,.95) 100%)' }}>
            <div className="text-[11px] tracking-[.32em] uppercase text-[var(--gold-light)] mb-2">Depois</div>
            <h3 className="font-display uppercase text-[28px] md:text-[34px] mb-6 gold-text">Máquina de crescimento</h3>
            <ul className="space-y-4">
              {depois.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="shrink-0 mt-0.5" />
                  <span className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--warm)]">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
