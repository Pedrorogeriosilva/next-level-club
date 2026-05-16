import { CircularDiagram } from '../components/CircularDiagram'

const motores = [
  'Loja Física', 'Base de Clientes', 'Indicação / Referidos', 'Venda Ativa',
  'Parcerias Estratégicas', 'Grêmio / Vendas em Empresas', 'B2B Corporativo', 'Kits e Combos',
  'Personalizados', 'Datas Sazonais', 'Eventos', 'Omnicanalidade',
  'Upsell / Cross-sell', 'Novas Ofertas',
]

export function Metodo() {
  return (
    <section id="metodo" className="relative py-24 md:py-32" style={{ background: 'linear-gradient(180deg,var(--petroleum) 0%,var(--night) 100%)' }}>
      <div className="noise" />
      <div className="grid-lines" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <div className="section-tag mb-6 mx-auto" style={{ display: 'inline-flex' }}><span className="dot"></span>O método proprietário</div>
          <h2 className="font-display uppercase mb-6" style={{ fontSize: 'clamp(40px, 6.4vw, 80px)', lineHeight: 1 }}>
            <span style={{ color: '#F8F5EC' }}>Os </span><span className="gold-text">14 Motores</span><br />
            <span style={{ color: '#F8F5EC' }}>de Faturamento</span>
          </h2>
          <div className="hairline my-6 mx-auto" style={{ maxWidth: 120 }}></div>
          <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--gray)]">
            O método que mostra onde estão as <span className="text-[var(--gold-light)]">oportunidades escondidas</span> dentro do seu próprio negócio.
          </p>
        </div>

        <div className="hide-mobile relative mx-auto" style={{ maxWidth: 1180 }}>
          <CircularDiagram motores={motores} />
        </div>

        <div className="only-mobile grid grid-cols-2 gap-3 mt-6">
          {motores.map((m, i) => (
            <div key={i} className="card p-4">
              <div className="motor-num" style={{ fontSize: 24 }}>{String(i + 1).padStart(2, '0')}</div>
              <div className="text-[13px] text-[var(--warm)] mt-1 leading-tight">{m}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center fade-in">
          <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--gray)] italic">
            "A proposta não é criar complexidade. É enxergar o negócio como uma máquina — cada motor precisa ter <span className="text-[var(--gold-light)] not-italic font-medium">função, direção, ritmo e acompanhamento</span>."
          </p>
        </div>
      </div>
    </section>
  )
}
