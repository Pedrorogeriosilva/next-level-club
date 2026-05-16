import { WhatsappIcon } from '../components/Icons'

const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfYAYKkxqL77oKouH7fsHbCXV10gAREaPlf7GlntEuWnqdVYg/viewform'
const wppText = 'Olá! Tenho interesse na Mentoria Next Level Club e gostaria de conversar pelo WhatsApp.'
const wppUrl = 'https://wa.me/5511993110101?text=' + encodeURIComponent(wppText)

export function Aplicacao({ formRef }: { formRef: React.RefObject<HTMLElement> }) {
  return (
    <section id="aplicacao" ref={formRef as React.RefObject<HTMLElement>} className="relative py-24 md:py-32" style={{ background: 'linear-gradient(180deg,var(--deep) 0%,var(--night) 100%)' }}>
      <div className="noise" />
      <div className="gold-glow" style={{ width: 500, height: 500, top: '10%', right: '-10%' }} />
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-in">
          <div className="section-tag mb-6 mx-auto" style={{ display: 'inline-flex' }}><span className="dot"></span>Processo seletivo</div>
          <h2 className="font-display uppercase mb-6" style={{ fontSize: 'clamp(36px, 5.2vw, 60px)', lineHeight: 1 }}>
            <span style={{ color: '#F8F5EC' }}>Aplicação para a </span>
            <span className="gold-text">Mentoria Next Level Club.</span>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.65] text-[var(--gray)]">
            As vagas são limitadas e passam por análise. Preencha o formulário oficial para que nossa equipe entenda o momento do seu negócio.
          </p>
        </div>

        <div className="card card-corner p-7 md:p-12 fade-in text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display uppercase text-[28px] md:text-[38px] mb-5" style={{ color: '#F8F5EC', lineHeight: 1.05 }}>
              Complete sua aplicação no formulário oficial
            </h3>
            <p className="text-[15px] md:text-[17px] leading-[1.65] text-[var(--gray)] mb-8">
              Você será direcionado para o Google Forms em uma nova aba. O preenchimento leva poucos minutos.
            </p>

            <div className="hairline my-8"></div>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3">
              <a href={wppUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <WhatsappIcon /> Prefiro falar pelo WhatsApp
              </a>
              <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="btn-gold" data-sticky-hide>
                Preencher formulário →
              </a>
            </div>

            <p className="mt-6 text-[12px] uppercase tracking-[.18em] text-[var(--muted)]">
              Vagas limitadas · Sujeito à análise
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
