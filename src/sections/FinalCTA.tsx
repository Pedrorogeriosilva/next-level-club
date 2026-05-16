import { GearOutline } from '../components/GearOutline'

export function FinalCTA({ onApply }: { onApply: () => void }) {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg,#0B3A2C 0%,#020F0B 50%,#063D2E 100%)' }}>
      <div className="noise" />
      <div className="grid-lines" />
      <div className="absolute hide-mobile" style={{ right: -160, top: -100, width: 520, height: 520, opacity: 0.18 }}>
        <div className="spin-slow" style={{ width: '100%', height: '100%' }}>
          <GearOutline size={520} teeth={16} strokeWidth={1.2} />
        </div>
      </div>
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 text-center">
        <div className="section-tag mb-6 mx-auto" style={{ display: 'inline-flex' }}><span className="dot"></span>Próximo passo</div>
        <h2 className="font-display uppercase mb-6" style={{ fontSize: 'clamp(36px, 5.6vw, 68px)', lineHeight: 1 }}>
          <span style={{ color: '#F8F5EC' }}>Crescer não é trabalhar mais.</span><br />
          <span className="gold-text">É ativar os motores certos.</span>
        </h2>
        <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--gray)] max-w-2xl mx-auto mb-10">
          Aplique agora. As vagas são limitadas e a análise é feita pela equipe das mentoras.
        </p>
        <button onClick={onApply} className="btn-gold" style={{ padding: '20px 36px', fontSize: 16 }}>
          Aplicar para a mentoria →
        </button>
      </div>
    </section>
  )
}
