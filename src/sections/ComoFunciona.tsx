import { GoldStops } from '../components/GoldStops'

type IconKey = 'wpp' | 'diag' | 'aula' | 'pres'

const formats: { icon: IconKey; titulo: string; desc: string }[] = [
  { icon: 'wpp', titulo: 'Grupo de Mentoria no WhatsApp', desc: 'Ambiente direto para direcionamentos, acompanhamento e troca com empresários em movimento.' },
  { icon: 'diag', titulo: 'Reunião de Diagnóstico com Ro e Ale Lopes', desc: 'Um encontro estratégico para entender o momento do negócio, identificar gargalos e mapear oportunidades de crescimento.' },
  { icon: 'aula', titulo: 'Aulas quinzenais online', desc: 'Encontros quinzenais com as mentoras e uma equipe de especialistas para aprofundar método, estratégia e aplicação prática.' },
  { icon: 'pres', titulo: '2 encontros presenciais no ano', desc: 'Momentos presenciais de conexão, visão estratégica e imersão para empresários selecionados.' },
]

function FormatIcon({ k }: { k: IconKey }) {
  const id = 'i' + k
  const gradRef = `url(#${id})`
  const defs = <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><GoldStops /></linearGradient></defs>

  if (k === 'wpp') return (
    <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke={gradRef} strokeWidth="1.4">
      {defs}
      <path d="M50 40c-1-1-5-3-6-3s-2-1-3 1-3 3-4 4-1 1-2 0c-1-1-4-2-7-5-3-2-5-5-5-6s0-1 1-2c0-1 1-1 1-2s1-1 0-2c0-1-3-5-3-7s-1-1-2-1h-2c-1 0-2 0-3 1-1 1-3 3-3 7s3 8 4 9c1 2 6 10 15 13 2 1 4 2 5 2 3 1 5 1 7 0 2 0 5-2 6-4 1-2 1-4 1-4 0-1-1-1-2-1z" />
      <circle cx="32" cy="32" r="26" />
    </svg>
  )
  if (k === 'diag') return (
    <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke={gradRef} strokeWidth="1.4">
      {defs}
      <circle cx="32" cy="32" r="26" />
      <circle cx="32" cy="32" r="14" />
      <circle cx="32" cy="32" r="3" fill={gradRef} />
      <line x1="32" y1="6" x2="32" y2="14" />
      <line x1="32" y1="50" x2="32" y2="58" />
      <line x1="6" y1="32" x2="14" y2="32" />
      <line x1="50" y1="32" x2="58" y2="32" />
    </svg>
  )
  if (k === 'aula') return (
    <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke={gradRef} strokeWidth="1.4">
      {defs}
      <rect x="8" y="14" width="48" height="30" rx="3" />
      <line x1="20" y1="50" x2="44" y2="50" />
      <line x1="32" y1="44" x2="32" y2="50" />
      <polygon points="28,24 28,34 38,29" fill={gradRef} />
    </svg>
  )
  return (
    <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke={gradRef} strokeWidth="1.4">
      {defs}
      <path d="M16 50V28l16-12 16 12v22" />
      <line x1="10" y1="50" x2="54" y2="50" />
      <line x1="28" y1="50" x2="28" y2="36" />
      <line x1="36" y1="50" x2="36" y2="36" />
    </svg>
  )
}

export function ComoFunciona() {
  return (
    <section id="formato" className="relative py-20 md:py-28" style={{ background: 'var(--petroleum)' }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-7">
            <div className="section-tag mb-6"><span className="dot"></span>Como funciona</div>
            <h2 className="font-display uppercase" style={{ fontSize: 'clamp(36px, 5.4vw, 64px)', lineHeight: 1.15 }}>
              <span style={{ color: '#F8F5EC' }}>Um formato criado para empresários que precisam de </span>
              <span className="gold-text">estratégia e execução.</span>
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-[16px] leading-[1.65] text-[var(--gray)]">
              Quatro frentes integradas, pensadas para acompanhar o ritmo real de quem opera o negócio: direção semanal, diagnóstico individual, conteúdo aplicável e presença estratégica.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((f, i) => (
            <div key={i} className="card card-corner p-7 fade-in">
              <div className="flex items-start justify-between mb-6">
                <div><FormatIcon k={f.icon} /></div>
                <div className="motor-num" style={{ fontSize: 28 }}>{String(i + 1).padStart(2, '0')}</div>
              </div>
              <h3 className="font-display uppercase text-[20px] md:text-[22px] mb-3" style={{ color: '#F8F5EC', letterSpacing: '.02em' }}>{f.titulo}</h3>
              <div className="hairline my-3" style={{ maxWidth: 40 }}></div>
              <p className="text-[14px] leading-[1.6] text-[var(--gray)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
