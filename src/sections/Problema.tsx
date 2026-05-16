import { GearOutline } from '../components/GearOutline'

const dores = [
  { n: '01', titulo: 'A dor da execução', desc: 'Muito esforço, muita operação e pouco crescimento estruturado. O dia vira maratona — o ano não vira escala.' },
  { n: '02', titulo: 'O limite do balcão', desc: 'O crescimento não acompanha a proporção da operação. A capacidade do canal único vira o teto do negócio.' },
  { n: '03', titulo: 'O caos oculto', desc: 'Alto faturamento pode esconder baixa previsibilidade, margem espremida e dependência total do dono.' },
]

export function Problema() {
  return (
    <section id="problema" className="relative py-24 md:py-32" style={{ background: 'var(--petroleum)' }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-7">
            <div className="section-tag mb-6"><span className="dot"></span>Diagnóstico do mercado</div>
            <h2 className="font-display uppercase" style={{ fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 1 }}>
              <span className="gold-text">O jogo</span><br />
              <span style={{ color: '#F8F5EC' }}>mudou.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--gray)]">
              Durante muito tempo, crescer parecia significar colocar mais força na operação: mais esforço, mais braço, mais pressão comercial. Mas empresas que dependem de <span className="text-[var(--warm)] font-medium">apenas um canal de faturamento</span> ficam vulneráveis, instáveis e presas no limite do próprio balcão.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {dores.map((d) => (
            <div key={d.n} className="card card-corner p-7 md:p-8 fade-in">
              <div className="flex items-start justify-between mb-6">
                <div className="motor-num">{d.n}</div>
                <div style={{ width: 44, height: 44 }}>
                  <GearOutline size={44} teeth={10} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-display uppercase text-[22px] md:text-[26px] mb-3" style={{ color: '#F8F5EC', letterSpacing: '.02em' }}>{d.titulo}</h3>
              <div className="hairline my-4" style={{ maxWidth: 60 }}></div>
              <p className="text-[15px] leading-[1.6] text-[var(--gray)]">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
