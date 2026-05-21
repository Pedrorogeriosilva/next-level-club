const circulo = [
  { nome: 'Joel Jota', papel: 'Mentor de alta performance' },
  { nome: 'Dani Martins', papel: 'Crescimento e posicionamento estratégico' },
]

export function ParaQuem() {
  return (
    <section
      id="para-quem"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--night)' }}
    >
      <div className="noise" />
      <div
        className="gold-glow pulse-glow"
        style={{ width: 700, height: 700, top: '-10%', right: '-15%' }}
      />
      <div
        className="gold-glow"
        style={{ width: 520, height: 520, bottom: '-8%', left: '-10%', opacity: 0.5 }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6 md:px-12">
        {/* Cabeçalho */}
        <div className="text-center mb-14 md:mb-20 fade-in" style={{ maxWidth: 820, marginInline: 'auto' }}>
          <div className="section-tag mb-6 mx-auto" style={{ display: 'inline-flex' }}>
            <span className="dot"></span>Círculo de autoridade
          </div>
          <h2
            className="font-display uppercase mb-6"
            style={{ fontSize: 'clamp(38px, 5.6vw, 68px)', lineHeight: 1.02 }}
          >
            <span style={{ color: '#F8F5EC' }}>O círculo em que </span>
            <span className="gold-text">elas caminham.</span>
          </h2>
          <div className="hairline mx-auto" style={{ maxWidth: 120 }} />
        </div>

        {/* Conteúdo principal */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Foto editorial */}
          <div className="md:col-span-5 fade-in">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '4/5', background: 'var(--deep)' }}
            >
              <img
                src="/assets/equipe.png"
                alt="Ro & Ale Lopes ao lado de Joel Jota e Dani Martins"
                loading="lazy"
                decoding="async"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-7 fade-in">
            <p
              className="text-[17px] md:text-[20px] leading-[1.65]"
              style={{ color: '#E8E4D6' }}
            >
              Caminham ao lado de nomes como{' '}
              <span className="gold-text font-medium">Joel Jota</span> e{' '}
              <span className="gold-text font-medium">Dani Martins</span>, uma das maiores
              autoridades em vendas do país.
            </p>
            <p
              className="mt-5 text-[15px] md:text-[17px] leading-[1.7]"
              style={{ color: 'var(--gray)' }}
            >
              É nesse círculo que refinam decisões, expandem visão de negócio e aplicam,
              diariamente, as estratégias que sustentam o seu crescimento — e o crescimento de
              quem é mentorado dentro do <span className="text-[var(--gold-light)]">Next Level Club</span>.
            </p>

            {/* Pills com os nomes */}
            <div className="mt-8 flex flex-wrap gap-3">
              {circulo.map((c) => (
                <div
                  key={c.nome}
                  className="flex items-center gap-3"
                  style={{
                    padding: '12px 18px',
                    background: 'rgba(2,15,11,.7)',
                    border: '1px solid rgba(212,175,55,.35)',
                    borderRadius: 999,
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: 'var(--gold)',
                      boxShadow: '0 0 6px var(--gold)',
                    }}
                  />
                  <div className="leading-tight">
                    <div
                      className="uppercase"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: 12.5,
                        color: '#F8F5EC',
                        letterSpacing: '.18em',
                      }}
                    >
                      {c.nome}
                    </div>
                    <div
                      className="text-[10px] uppercase mt-1.5"
                      style={{ color: 'var(--gold-light)', letterSpacing: '.2em' }}
                    >
                      {c.papel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Assinatura */}
            <div
              className="mt-10"
              style={{ borderTop: '1px solid rgba(212,175,55,.2)', paddingTop: 24 }}
            >
              <p
                className="font-display uppercase"
                style={{
                  fontSize: 'clamp(20px, 2.4vw, 28px)',
                  letterSpacing: '.04em',
                  lineHeight: 1.2,
                  color: '#F8F5EC',
                }}
              >
                É <span className="gold-text">método</span>,{' '}
                <span className="gold-text">direção</span> e{' '}
                <span className="gold-text">aplicação real</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
