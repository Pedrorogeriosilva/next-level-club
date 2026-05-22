const dores = [
  { n: '01', titulo: 'A dor da execução', desc: 'O negócio ainda depende de cada decisão sua. Muito esforço. Muito braço. Pouca escala.' },
  { n: '02', titulo: `O limite do "balcão"`, desc: 'O crescimento não acompanha a proporção da operação. Quem depende de um único canal, depende de um único teto. O negócio cresce até onde o canal permite, e para.' },
  { n: '03', titulo: 'O caos oculto', desc: 'Alto faturamento pode esconder baixa previsibilidade, margem espremida e dependência total do dono.' },
]

export function Problema() {
  return (
    <section id="problema" className="relative py-20 md:py-28" style={{ background: 'var(--petroleum)' }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="section-tag mb-6"><span className="dot"></span>Diagnóstico do mercado</div>
          <h2 className="font-display uppercase" style={{ fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 1.15 }}>
            <span className="gold-text">O jogo</span><br />
            <span style={{ color: '#F8F5EC' }}>mudou.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {dores.map((d) => (
            <div key={d.n} className="card card-corner p-7 md:p-8 fade-in">
              <div className="flex items-start mb-6">
                <div className="motor-num">{d.n}</div>
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
