import { GearOutline } from '../components/GearOutline'

const stats = [
  ['14', 'Motores de\nfaturamento'],
  ['2x', 'Encontros\npresenciais/ano'],
  ['1:1', 'Diagnóstico com\nRo & Ale Lopes'],
] as const

export function Hero({ onApply }: { onApply: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80, minHeight: '100vh', background: 'linear-gradient(180deg,#020F0B 0%,#002B20 65%,#063D2E 100%)' }}>
      <div className="noise" />
      <div className="grid-lines" />
      <div className="gold-glow" style={{ width: 700, height: 700, top: -200, right: -200 }} />
      <div className="gold-glow pulse-glow" style={{ width: 500, height: 500, bottom: -180, left: -160 }} />

      <div className="absolute hide-mobile" style={{ right: -140, top: 60, width: 720, height: 720, opacity: 0.18 }}>
        <div className="spin-slow" style={{ width: '100%', height: '100%' }}>
          <GearOutline size={720} teeth={18} strokeWidth={1.2} />
        </div>
      </div>
      <div className="absolute hide-mobile" style={{ left: -120, bottom: -120, width: 420, height: 420, opacity: 0.14 }}>
        <div className="spin-slow-rev" style={{ width: '100%', height: '100%' }}>
          <GearOutline size={420} teeth={14} strokeWidth={1.2} />
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-8 items-center" style={{ minHeight: '70vh' }}>
        <div className="md:col-span-7 fade-in">
          <div className="section-tag mb-8"><span className="dot"></span>Mentoria empresarial para negócios em operação</div>

          <h1 className="font-display uppercase" style={{ fontSize: 'clamp(42px, 7vw, 88px)', lineHeight: 0.95, letterSpacing: '.005em' }}>
            <span style={{ color: '#F8F5EC' }}>A Máquina</span><br />
            <span className="gold-text">Next Level:</span><br />
            <span style={{ color: '#F8F5EC' }}>ative os </span>
            <span className="gold-text">14 motores</span>
            <span style={{ color: '#F8F5EC' }}> de faturamento do seu negócio.</span>
          </h1>

          <div className="hairline my-8" style={{ maxWidth: 380 }}></div>

          <p className="text-[18px] md:text-[20px] leading-[1.55] text-[var(--gray)]" style={{ maxWidth: 620 }}>
            Uma mentoria para empresários que querem deixar de depender de uma única fonte de venda
            e construir uma operação com <span className="text-[var(--warm)] font-medium">múltiplos caminhos de crescimento</span>.
          </p>

          <p className="mt-5 text-[15px] md:text-[16px] text-[var(--muted)] italic" style={{ maxWidth: 620 }}>
            Crescer não é trabalhar mais. É ativar os motores certos — com método, diagnóstico e acompanhamento estratégico.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={onApply} className="btn-gold">Quero aplicar para a mentoria</button>
            <a href="#metodo" className="btn-ghost">Conhecer o método →</a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
            {stats.map(([n, t]) => (
              <div key={n} className="flex items-center gap-3">
                <div className="font-display gold-text" style={{ fontSize: 38, lineHeight: 1 }}>{n}</div>
                <div className="text-[11px] uppercase tracking-[.16em] text-[var(--gray)] whitespace-pre-line leading-tight">{t}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 relative fade-in hero-gear-col">
          <div className="relative w-full mx-auto md:mx-0 md:ml-auto overflow-hidden" style={{ aspectRatio: '1/1', maxWidth: 540 }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="spin-slow" style={{ width: '100%', height: '100%' }}>
                <GearOutline size={520} teeth={16} strokeWidth={1.4} />
              </div>
            </div>
            <div className="absolute" style={{ top: '10%', right: '6%', width: '32%', aspectRatio: '1/1' }}>
              <div className="spin-slow-rev" style={{ width: '100%', height: '100%' }}>
                <GearOutline size={180} teeth={10} strokeWidth={1.4} />
              </div>
            </div>
            <div className="absolute" style={{ bottom: '6%', left: '6%', width: '22%', aspectRatio: '1/1' }}>
              <div className="spin-slow" style={{ width: '100%', height: '100%' }}>
                <GearOutline size={120} teeth={8} strokeWidth={1.4} />
              </div>
            </div>
            {[
              { label: 'Diagnóstico', style: { top: '22%', left: '4%' } },
              { label: 'Método', style: { top: '48%', right: '4%' } },
              { label: 'Execução', style: { bottom: '14%', right: '14%' } },
            ].map(({ label, style }) => (
              <div key={label} className="absolute hero-label" style={style}>
                <div className="px-3 py-2 text-[10px] tracking-[.2em] uppercase text-[var(--gold-light)] whitespace-nowrap" style={{ background: 'rgba(2,15,11,.78)', border: '1px solid rgba(212,175,55,.4)', borderRadius: 4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-16 pt-10 border-t border-[rgba(212,175,55,.18)] overflow-hidden">
        <div className="marquee-track text-[12px] tracking-[.32em] uppercase text-[var(--muted)]">
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center gap-16">
              <span>Método Próprio</span><span style={{ color: 'var(--gold)' }}>◆</span>
              <span>Empresários em Operação</span><span style={{ color: 'var(--gold)' }}>◆</span>
              <span>Processo Seletivo</span><span style={{ color: 'var(--gold)' }}>◆</span>
              <span>14 Motores de Faturamento</span><span style={{ color: 'var(--gold)' }}>◆</span>
              <span>Diagnóstico Individual</span><span style={{ color: 'var(--gold)' }}>◆</span>
              <span>Mentoria Premium</span><span style={{ color: 'var(--gold)' }}>◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
