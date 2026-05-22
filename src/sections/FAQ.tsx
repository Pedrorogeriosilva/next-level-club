import { useState } from 'react'

const items = [
  { q: 'A mentoria é online ou presencial?', a: 'A mentoria combina acompanhamento online, aulas quinzenais e dois encontros presenciais ao longo do ano.' },
  { q: 'Quem pode participar?', a: 'Empresários com negócios em operação que desejam estruturar novos motores de faturamento e crescer com mais estratégia.' },
  { q: 'Existe processo de seleção?', a: 'Sim. A aplicação passa por análise para entender se a mentoria faz sentido para o momento atual do negócio.' },
  { q: 'O diagnóstico é individual?', a: 'Sim. O processo inclui uma reunião de diagnóstico com Ro e Ale Lopes.' },
  { q: 'A mentoria serve para qualquer segmento?', a: 'O método pode ser aplicado em diferentes negócios, mas a seleção avalia o perfil, maturidade e momento da empresa.' },
]

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative py-20 md:py-28" style={{ background: 'var(--petroleum)' }}>
      <div className="noise" />
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 fade-in md:sticky md:top-32">
            <div className="section-tag mb-6"><span className="dot"></span>Perguntas frequentes</div>
            <h2 className="font-display uppercase mb-6" style={{ fontSize: 'clamp(36px, 4.6vw, 56px)', lineHeight: 1.15 }}>
              <span style={{ color: '#F8F5EC' }}>Dúvidas</span><br />
              <span className="gold-text">frequentes.</span>
            </h2>
            <p className="text-[15px] leading-[1.65] text-[var(--gray)]">
              Se restar qualquer ponto após a leitura, envie a sua dúvida diretamente pelo WhatsApp na aplicação.
            </p>
          </div>
          <div className="md:col-span-8">
            {items.map((it, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="faq-item">
                  <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                    <span className="font-display uppercase text-[18px] md:text-[22px]" style={{ color: '#F8F5EC', letterSpacing: '.02em' }}>{it.q}</span>
                    <span className={'faq-icon ' + (isOpen ? 'open' : '')}>+</span>
                  </button>
                  <div className={'faq-a ' + (isOpen ? 'open' : '')}>
                    <p className="text-[15px] md:text-[16px] leading-[1.65]">{it.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
