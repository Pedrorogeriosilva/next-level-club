import { FluxoVisual } from '../components/FluxoVisual'

export function FalsaIlusao() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--night)' }}>
      <div className="noise" />
      <div className="gold-glow" style={{ width: 600, height: 600, top: '10%', right: '-15%' }} />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 fade-in">
          <div className="section-tag mb-6"><span className="dot"></span>A anatomia do faturamento</div>
          <h2 className="font-display uppercase mb-8" style={{ fontSize: 'clamp(36px, 5.4vw, 64px)', lineHeight: 1.02 }}>
            <span style={{ color: '#F8F5EC' }}>A falsa ilusão</span><br />
            <span className="gold-text">do faturamento.</span>
          </h2>
          <p className="text-[17px] md:text-[19px] leading-[1.65] text-[var(--gray)] mb-6">
            No mundo dos negócios, todo mundo fala de faturamento — mas quase ninguém entende a <span className="text-[var(--gold-light)]">anatomia de onde ele realmente vem</span>.
          </p>
          <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--gray)]">
            A Máquina Next Level foi criada para <span className="text-[var(--warm)] font-medium">mapear, organizar e ativar</span> múltiplos motores dentro de uma mesma operação.
          </p>

          <div className="hairline my-10" style={{ maxWidth: 200 }}></div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-display gold-text" style={{ fontSize: 48, lineHeight: 1 }}>1</div>
              <div className="text-[12px] uppercase tracking-[.18em] text-[var(--gray)] mt-2">canal único = teto do negócio</div>
            </div>
            <div>
              <div className="font-display gold-text" style={{ fontSize: 48, lineHeight: 1 }}>14</div>
              <div className="text-[12px] uppercase tracking-[.18em] text-[var(--gray)] mt-2">motores ativáveis = máquina de crescimento</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 fade-in">
          <FluxoVisual />
        </div>
      </div>
    </section>
  )
}
