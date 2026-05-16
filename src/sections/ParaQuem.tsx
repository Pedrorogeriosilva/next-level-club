import { CheckIcon, CrossIcon } from '../components/Icons'

const sim = [
  'Já possuem uma empresa em operação',
  'Querem crescer com mais estratégia e menos improviso',
  'Sentem que dependem demais de uma única forma de vender',
  'Querem ativar novos canais e oportunidades de faturamento',
  'Buscam acompanhamento próximo e visão externa qualificada',
  'Estão dispostos a olhar para a operação com profundidade',
]

const nao = [
  'Está buscando fórmula pronta',
  'Não quer executar',
  'Ainda não possui um negócio validado',
  'Quer apenas conteúdo gravado sem acompanhamento',
  'Não está disposto a passar por diagnóstico',
]

export function ParaQuem() {
  return (
    <section id="para-quem" className="relative py-24 md:py-32" style={{ background: 'var(--night)' }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="card card-corner p-8 md:p-10 fade-in">
            <div className="section-tag mb-6"><span className="dot"></span>Critério de entrada</div>
            <h2 className="font-display uppercase mb-2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: 1.02, color: '#F8F5EC' }}>
              Essa mentoria é<br /><span className="gold-text">para empresários que…</span>
            </h2>
            <div className="hairline my-6" style={{ maxWidth: 80 }}></div>
            <ul className="space-y-4">
              {sim.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="shrink-0 mt-0.5" />
                  <span className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--warm)]">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-10 fade-in" style={{ background: 'rgba(2,15,11,.55)', border: '1px dashed rgba(216,113,113,.3)', borderRadius: 10 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6" style={{ border: '1px solid rgba(216,113,113,.4)', borderRadius: 999, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: '#D87171' }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: '#D87171' }}></span>
              Critério de exclusão
            </div>
            <h3 className="font-display uppercase mb-2" style={{ fontSize: 'clamp(28px, 3.6vw, 40px)', lineHeight: 1.02, color: '#D8D8D8' }}>
              Não é<br />para quem…
            </h3>
            <div className="my-6" style={{ height: 1, maxWidth: 80, background: 'linear-gradient(90deg,transparent,rgba(216,113,113,.5),transparent)' }}></div>
            <ul className="space-y-4">
              {nao.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CrossIcon className="shrink-0 mt-0.5" />
                  <span className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--gray)]">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
