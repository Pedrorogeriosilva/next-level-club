export function Hero({ onApply }: { onApply: () => void }) {
  return (
    <section
      id="top"
      data-sticky-hide
      className="hero-section relative overflow-hidden"
      style={{ background: '#07080A' }}
    >
      {/* Noise texture */}
      <div className="noise" style={{ opacity: 0.4 }} />

      {/* Ambient glow — atrás da foto */}
      <div
        aria-hidden
        className="hero-glow absolute pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 80% 40%, rgba(180,140,50,0.18) 0%, transparent 65%)',
          zIndex: 1,
        }}
      />

      {/* ── FOTO — bleed lateral no desktop ── */}
      <div aria-hidden className="hero-photo">
        <div className="hero-photo-fade-side" />
        <div className="hero-photo-fade-bottom" />
        <picture>
          <img
            src="/assets/casal-nova01.jpg"
            alt="Ro & Ale Lopes"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="hero-img"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </picture>
      </div>

      {/* ── MOBILE: foto em primeiro plano com badge sobreposta ── */}
      <div className="hero-mobile-hero">
        <img
          src="/assets/casal-nova01.jpg"
          alt="Ro & Ale Lopes"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="hero-mobile-hero-fade" aria-hidden />
        <div className="hero-mobile-hero-badge">
          <span className="hero-badge-dot" />
          Mentoria Exclusiva para Empresários
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div
        className="hero-content relative flex flex-col justify-center"
        style={{ zIndex: 10 }}
      >
        <div style={{ maxWidth: 620 }}>

          {/* Badge pill — desktop only (mobile usa badge sobreposta na foto) */}
          <div className="hero-badge hero-badge--desktop">
            <span className="hero-badge-dot" />
            Mentoria Exclusiva para Empresários
          </div>

          {/* Título */}
          <h1 style={{ margin: 0, padding: 0, lineHeight: 1.1 }}>
            {/* Linha 1 — light, branco */}
            <span
              style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(38px, 5.6vw, 72px)',
                color: '#F8F5EC',
                letterSpacing: '-0.02em',
              }}
            >
              A Máquina
            </span>

            {/* Linha 2 — display Anton, dourado (nome da marca, dominante) */}
            <span
              style={{
                display: 'block',
                fontFamily: 'Anton, "Bebas Neue", Impact, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(40px, 5.8vw, 76px)',
                background: 'linear-gradient(135deg, #9C7628 0%, #D4AF37 40%, #F5D77A 65%, #9C7628 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.01em',
                lineHeight: 1,
                marginTop: '0.05em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              Next Level Club
            </span>
          </h1>

          {/* Linha divisória */}
          <div
            style={{
              marginTop: 32, marginBottom: 28,
              height: 1,
              maxWidth: 360,
              background: 'linear-gradient(90deg, rgba(212,175,55,0.55), transparent)',
            }}
          />

          {/* Descrição */}
          <p
            style={{
              margin: 0,
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              lineHeight: 1.65,
              color: '#B8B8B8',
              maxWidth: 500,
              fontWeight: 400,
            }}
          >
            O Next Level Club é o clube de negócios e desenvolvimento empresarial, onde empresários acessam repertório, direcionamento na prática, inseridos em um ecossistema que estimula{' '}
            <span style={{ color: '#F5D77A', fontWeight: 500 }}>execução, visão e maturidade empresarial</span>. Transformamos conhecimento em ação e ação em resultado de alta performance.
          </p>

          {/* Botões */}
          <div style={{ marginTop: 44, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <button
              id="hero-apply-btn"
              onClick={onApply}
              className="btn-gold"
            >
              Quero aplicar para a mentoria
            </button>
            <a href="#metodo" className="btn-ghost">
              Conhecer o método →
            </a>
          </div>

        </div>
      </div>

      {/* Marquee bottom */}
      <div
        className="relative overflow-hidden"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          zIndex: 10,
          borderTop: '1px solid rgba(212,175,55,0.15)',
          background: 'rgba(7,8,10,0.85)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <div className="marquee-track" style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--muted)', padding: '14px 0' }}>
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center gap-16">
              <span>Método Próprio</span><span style={{ color: 'var(--gold)' }}>◆</span>
              <span>Empresários em Operação</span><span style={{ color: 'var(--gold)' }}>◆</span>
              <span>Processo Seletivo</span><span style={{ color: 'var(--gold)' }}>◆</span>
              <span>Diagnóstico Individual</span><span style={{ color: 'var(--gold)' }}>◆</span>
              <span>Mentoria Premium</span><span style={{ color: 'var(--gold)' }}>◆</span>
              <span>Acompanhamento Estratégico</span><span style={{ color: 'var(--gold)' }}>◆</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
