import { CircularDiagram } from '../components/CircularDiagram'

const motores = [
  'Quebra de mentalidade', 'Choque da realidade financeira', 'Desapego do "balcão"', 'Meta inteligente',
  'Planejamento reverso', 'Sistema de controle', 'Processualização', 'Omnicanalidade',
  'Criação de demanda', 'Posicionamento', 'Adaptabilidade estratégica', 'Gestão de relacionamento',
  'Gestão de pessoas e cultura', 'Mentalidade de crescimento contínuo',
]

export function Metodo() {
  return (
    <section id="metodo" className="relative py-20 md:py-28" style={{ background: 'linear-gradient(180deg,var(--petroleum) 0%,var(--night) 100%)' }}>
      <div className="noise" />
      <div className="grid-lines" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <div className="section-tag mb-6 mx-auto" style={{ display: 'inline-flex' }}><span className="dot"></span>O método proprietário</div>
          <h2 className="font-display uppercase mb-6" style={{ fontSize: 'clamp(40px, 6.4vw, 80px)', lineHeight: 1.15 }}>
            <span style={{ color: '#F8F5EC' }}>Os </span><span className="gold-text">14 Motores</span><br />
            <span style={{ color: '#F8F5EC' }}>de Faturamento</span>
          </h2>
          <div className="hairline my-6 mx-auto" style={{ maxWidth: 120 }}></div>
          <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--gray)]">
            Trabalhamos com a premissa de que educação empresarial não se resume a conteúdo, mas sim a um <span className="text-[var(--gold-light)]">sistema que une método, ambiente e prática</span>.
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

      </div>
    </section>
  )
}
