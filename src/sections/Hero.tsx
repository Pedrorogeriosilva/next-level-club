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
            <button id="hero-apply-btn" onClick={onApply} className="btn-gold" data-sticky-hide>Quero aplicar para a mentoria</button>
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
          <div className="relative w-full mx-auto md:mx-0 md:ml-auto hero-stage" style={{ aspectRatio: '1/1', maxWidth: 580 }}>
            {/* ENGRENAGENS — z-index 1, ficam atrás da foto */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
              <div className="spin-slow" style={{ width: '100%', height: '100%' }}>
                <GearOutline size={520} teeth={16} strokeWidth={1.4} />
              </div>
            </div>
            <div className="absolute" style={{ top: '10%', right: '6%', width: '32%', aspectRatio: '1/1', zIndex: 1 }}>
              <div className="spin-slow-rev" style={{ width: '100%', height: '100%' }}>
                <GearOutline size={180} teeth={10} strokeWidth={1.4} />
              </div>
            </div>
            <div className="absolute" style={{ bottom: '6%', left: '6%', width: '22%', aspectRatio: '1/1', zIndex: 1 }}>
              <div className="spin-slow" style={{ width: '100%', height: '100%' }}>
                <GearOutline size={120} teeth={8} strokeWidth={1.4} />
              </div>
            </div>

            {/* HALO atrás da foto, valoriza o ouro das engrenagens */}
            <div
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                top: '12%', left: '50%', transform: 'translateX(-50%)',
                width: '92%', aspectRatio: '16/9',
                background: 'radial-gradient(60% 70% at 50% 50%, rgba(245,215,122,.28) 0%, rgba(212,175,55,.08) 50%, transparent 78%)',
                filter: 'blur(14px)',
                zIndex: 2,
              }}
            />

            {/* FOTO — em primeiro plano, sobre as engrenagens */}
            <div
              className="absolute hero-photo-card"
              style={{
                top: '14%',
                left: '50%',
                transform: 'translateX(-50%) rotate(-1.2deg)',
                width: '115%',
                aspectRatio: '16/9',
                zIndex: 3,
                background: '#02140E',
                border: '1px solid rgba(212,175,55,.6)',
                boxShadow:
                  '0 28px 60px rgba(0,0,0,.6), 0 0 0 5px rgba(2,15,11,.92), 0 0 0 6px rgba(212,175,55,.45), 0 0 50px rgba(212,175,55,.1)',
              }}
            >
              <img
                src="/assets/casal-nova.jpg"
                alt="Ro & Ale Lopes — fundadores Next Level Club"
                loading="eager"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />

              {/* vinheta interna */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,.35) 95%)' }}
              />

              {/* régua interna fina */}
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{ inset: 8, border: '1px solid rgba(245,215,122,.28)' }}
              />

              {/* cantos art-deco */}
              {(['tl', 'tr', 'bl', 'br'] as const).map((p) => {
                const rot = { tl: 0, tr: 90, br: 180, bl: 270 }[p]
                const pos: React.CSSProperties = {
                  tl: { top: -1, left: -1 },
                  tr: { top: -1, right: -1 },
                  bl: { bottom: -1, left: -1 },
                  br: { bottom: -1, right: -1 },
                }[p]
                return (
                  <svg
                    key={p}
                    width={32}
                    height={32}
                    viewBox="0 0 40 40"
                    aria-hidden
                    style={{ position: 'absolute', transform: `rotate(${rot}deg)`, ...pos }}
                  >
                    <path d="M0 0 H22 M0 0 V22" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
                    <path d="M5 5 H18 M5 5 V18" stroke="#F5D77A" strokeWidth="0.8" fill="none" opacity=".85" />
                    <circle cx="5" cy="5" r="1.4" fill="#F5D77A" />
                  </svg>
                )
              })}
            </div>

            {/* PLACA DE ASSINATURA — sob a foto, sobre as engrenagens */}
            <div
              className="absolute hero-signature"
              style={{
                top: 'calc(14% + 56.25% * 0.92 + 12px)',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 4,
                background: 'linear-gradient(180deg, rgba(11,58,44,.96) 0%, rgba(2,15,11,.96) 100%)',
                border: '1px solid rgba(212,175,55,.55)',
                padding: '10px 22px 12px',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 14px 32px rgba(0,0,0,.55), inset 0 1px 0 rgba(245,215,122,.14)',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span style={{ width: 14, height: 1, background: 'var(--gold)' }} />
                <span style={{ color: 'var(--gold)', fontSize: 7 }}>◆</span>
                <span style={{ width: 14, height: 1, background: 'var(--gold)' }} />
              </div>
              <div className="font-display uppercase gold-text" style={{ fontSize: 14, letterSpacing: '.22em', lineHeight: 1 }}>
                Ro &amp; Ale Lopes
              </div>
              <div style={{ fontSize: 8, letterSpacing: '.32em', textTransform: 'uppercase', color: 'var(--gray)', marginTop: 4 }}>
                Fundadores · Lopes Group
              </div>
            </div>

            {/* LABELS — z-index acima da foto pra continuarem visíveis nas bordas */}
            {[
              { label: 'Diagnóstico', style: { top: '22%', left: '-2%' } },
              { label: 'Método', style: { top: '48%', right: '-2%' } },
              { label: 'Execução', style: { bottom: '6%', right: '14%' } },
            ].map(({ label, style }) => (
              <div key={label} className="absolute hero-label" style={{ ...style, zIndex: 5 }}>
                <div className="px-3 py-2 text-[10px] tracking-[.2em] uppercase text-[var(--gold-light)] whitespace-nowrap" style={{ background: 'rgba(2,15,11,.86)', border: '1px solid rgba(212,175,55,.5)', borderRadius: 4, backdropFilter: 'blur(6px)' }}>
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
