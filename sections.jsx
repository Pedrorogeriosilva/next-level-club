/* Sections — Next Level Club Landing */
const { useState, useEffect, useRef } = React;

// ---------- HEADER ----------
function Header({ onApply }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Método", "metodo"],
    ["Para quem é", "para-quem"],
    ["Mentoras", "mentoras"],
    ["Aplicação", "aplicacao"],
  ];
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(2,15,11,.88)" : "rgba(2,15,11,.35)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,.25)" : "1px solid rgba(212,175,55,.08)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between" style={{ height: scrolled ? 64 : 76 }}>
        <a href="#top" className="flex items-center gap-3">
          <img src="assets/logo-simbolo.png" alt="Next Level Club" style={{ height: 38, width: "auto" }} />
          <div className="hide-mobile">
            <div className="font-display text-[18px] leading-none gold-text tracking-wider">NEXT LEVEL</div>
            <div className="font-display text-[11px] tracking-[.4em] text-[var(--gold-light)] opacity-80 mt-1">— CLUB</div>
          </div>
        </a>

        <nav className="hide-mobile flex items-center gap-8">
          {links.map(([label, id]) => (
            <a key={id} href={"#" + id} className="text-[13px] tracking-[.14em] uppercase text-[var(--gray)] hover:text-[var(--gold-light)] transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={onApply} className="btn-gold hide-mobile" style={{ padding: "12px 20px", fontSize: 12 }}>
            Aplicar para a Mentoria
          </button>
          <button className="only-mobile" onClick={() => setOpen(!open)} aria-label="Menu" style={{ background: "none", border: "1px solid rgba(212,175,55,.4)", padding: 10, borderRadius: 6, color: "var(--gold-light)" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="only-mobile px-6 pb-6 pt-2" style={{ background: "rgba(2,15,11,.96)", borderTop: "1px solid rgba(212,175,55,.2)" }}>
          <div className="flex flex-col gap-4">
            {links.map(([label, id]) => (
              <a key={id} href={"#" + id} onClick={() => setOpen(false)} className="text-[15px] tracking-[.1em] uppercase text-[var(--warm)]">{label}</a>
            ))}
            <button onClick={() => { setOpen(false); onApply(); }} className="btn-gold mt-2">Aplicar para a Mentoria</button>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------- HERO ----------
function Hero({ onApply }) {
  return (
    <section id="top" className="relative overflow-hidden" style={{ paddingTop: 120, paddingBottom: 80, minHeight: "100vh", background: "linear-gradient(180deg,#020F0B 0%,#002B20 65%,#063D2E 100%)" }}>
      {/* Texture */}
      <div className="noise" />
      <div className="grid-lines" />
      <div className="gold-glow" style={{ width: 700, height: 700, top: -200, right: -200 }} />
      <div className="gold-glow pulse-glow" style={{ width: 500, height: 500, bottom: -180, left: -160 }} />

      {/* Background gear */}
      <div className="absolute hide-mobile" style={{ right: -140, top: 60, width: 720, height: 720, opacity: 0.18 }}>
        <div className="spin-slow" style={{ width: "100%", height: "100%" }}>
          <GearOutline size={720} teeth={18} strokeWidth={1.2} />
        </div>
      </div>
      <div className="absolute hide-mobile" style={{ left: -120, bottom: -120, width: 420, height: 420, opacity: 0.14 }}>
        <div className="spin-slow-rev" style={{ width: "100%", height: "100%" }}>
          <GearOutline size={420} teeth={14} strokeWidth={1.2} />
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-8 items-center" style={{ minHeight: "70vh" }}>
        <div className="md:col-span-7 fade-in">
          <div className="section-tag mb-8"><span className="dot"></span>Mentoria empresarial para negócios em operação</div>

          <h1 className="font-display uppercase" style={{ fontSize: "clamp(42px, 7vw, 88px)", lineHeight: 0.95, letterSpacing: ".005em" }}>
            <span style={{ color: "#F8F5EC" }}>A Máquina</span><br />
            <span className="gold-text">Next Level:</span><br />
            <span style={{ color: "#F8F5EC" }}>ative os </span>
            <span className="gold-text">14 motores</span>
            <span style={{ color: "#F8F5EC" }}> de faturamento do seu negócio.</span>
          </h1>

          <div className="hairline my-8" style={{ maxWidth: 380 }}></div>

          <p className="text-[18px] md:text-[20px] leading-[1.55] text-[var(--gray)]" style={{ maxWidth: 620 }}>
            Uma mentoria para empresários que querem deixar de depender de uma única fonte de venda
            e construir uma operação com <span className="text-[var(--warm)] font-medium">múltiplos caminhos de crescimento</span>.
          </p>

          <p className="mt-5 text-[15px] md:text-[16px] text-[var(--muted)] italic" style={{ maxWidth: 620 }}>
            Crescer não é trabalhar mais. É ativar os motores certos — com método, diagnóstico e acompanhamento estratégico.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={onApply} className="btn-gold">Quero aplicar para a mentoria</button>
            <a href="#metodo" className="btn-ghost">Conhecer o método →</a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
            {[
              ["14", "Motores de\nfaturamento"],
              ["2x", "Encontros\npresenciais/ano"],
              ["1:1", "Diagnóstico com\nRo & Ale Lopes"],
            ].map(([n, t]) => (
              <div key={n} className="flex items-center gap-3">
                <div className="font-display gold-text" style={{ fontSize: 38, lineHeight: 1 }}>{n}</div>
                <div className="text-[11px] uppercase tracking-[.16em] text-[var(--gray)] whitespace-pre-line leading-tight">{t}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 relative fade-in" style={{ minHeight: 480 }}>
          <div className="relative w-full flex items-center justify-center" style={{ height: "100%", minHeight: 480 }}>
            <img
              src="assets/casal-nova01.jpg"
              alt="Ro &amp; Ale Lopes"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative mt-16 pt-10 border-t border-[rgba(212,175,55,.18)] overflow-hidden">
        <div className="marquee-track text-[12px] tracking-[.32em] uppercase text-[var(--muted)]">
          {Array(2).fill(0).map((_, k) => (
            <div key={k} className="flex items-center gap-16">
              <span>Método Próprio</span><span style={{ color: "var(--gold)" }}>◆</span>
              <span>Empresários em Operação</span><span style={{ color: "var(--gold)" }}>◆</span>
              <span>Processo Seletivo</span><span style={{ color: "var(--gold)" }}>◆</span>
              <span>14 Motores de Faturamento</span><span style={{ color: "var(--gold)" }}>◆</span>
              <span>Diagnóstico Individual</span><span style={{ color: "var(--gold)" }}>◆</span>
              <span>Mentoria Premium</span><span style={{ color: "var(--gold)" }}>◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROBLEMA ----------
function Problema() {
  const dores = [
    { n: "01", titulo: "A dor da execução", desc: "Muito esforço, muita operação e pouco crescimento estruturado. O dia vira maratona — o ano não vira escala." },
    { n: "02", titulo: "O limite do balcão", desc: "O crescimento não acompanha a proporção da operação. A capacidade do canal único vira o teto do negócio." },
    { n: "03", titulo: "O caos oculto", desc: "Alto faturamento pode esconder baixa previsibilidade, margem espremida e dependência total do dono." },
  ];
  return (
    <section id="problema" className="relative py-24 md:py-32" style={{ background: "var(--petroleum)" }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-7">
            <div className="section-tag mb-6"><span className="dot"></span>Diagnóstico do mercado</div>
            <h2 className="font-display uppercase" style={{ fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1 }}>
              <span className="gold-text">O jogo</span><br />
              <span style={{ color: "#F8F5EC" }}>mudou.</span>
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
              <h3 className="font-display uppercase text-[22px] md:text-[26px] mb-3" style={{ color: "#F8F5EC", letterSpacing: ".02em" }}>{d.titulo}</h3>
              <div className="hairline my-4" style={{ maxWidth: 60 }}></div>
              <p className="text-[15px] leading-[1.6] text-[var(--gray)]">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FALSA ILUSÃO ----------
function FalsaIlusao() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--night)" }}>
      <div className="noise" />
      <div className="gold-glow" style={{ width: 600, height: 600, top: "10%", right: "-15%" }} />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 fade-in">
          <div className="section-tag mb-6"><span className="dot"></span>A anatomia do faturamento</div>
          <h2 className="font-display uppercase mb-8" style={{ fontSize: "clamp(36px, 5.4vw, 64px)", lineHeight: 1.02 }}>
            <span style={{ color: "#F8F5EC" }}>A falsa ilusão</span><br />
            <span className="gold-text">do faturamento.</span>
          </h2>
          <p className="text-[17px] md:text-[19px] leading-[1.65] text-[var(--gray)] mb-6">
            No mundo dos negócios, todo mundo fala de faturamento — mas quase ninguém entende a <span className="text-[var(--gold-light)]">anatomia de onde ele realmente vem</span>.
          </p>
          <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--gray)]">
            A Máquina Next Level foi criada para <span className="text-[var(--warm)] font-medium">mapear, organizar e ativar</span> múltiplos motores dentro de uma mesma operação.
          </p>

          <div className="hairline my-10" style={{ maxWidth: 200 }}></div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-display gold-text" style={{ fontSize: 48, lineHeight: 1 }}>1</div>
              <div className="text-[12px] uppercase tracking-[.18em] text-[var(--gray)] mt-2">canal único = teto do negócio</div>
            </div>
            <div>
              <div className="font-display gold-text" style={{ fontSize: 48, lineHeight: 1 }}>14</div>
              <div className="text-[12px] uppercase tracking-[.18em] text-[var(--gray)] mt-2">motores ativáveis = máquina de crescimento</div>
            </div>
          </div>
        </div>

        {/* Right visual: connected blocks */}
        <div className="md:col-span-5 fade-in">
          <FluxoVisual />
        </div>
      </div>
    </section>
  );
}

function FluxoVisual() {
  return (
    <svg viewBox="0 0 480 520" className="w-full h-auto">
      <defs>
        <linearGradient id="fluxoG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9C7628" />
          <stop offset="50%" stopColor="#F5D77A" />
          <stop offset="100%" stopColor="#9C7628" />
        </linearGradient>
      </defs>
      {/* Title block */}
      <g>
        <rect x="160" y="20" width="160" height="56" rx="6" fill="rgba(11,58,44,.85)" stroke="url(#fluxoG)" />
        <text x="240" y="46" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="14" fill="#F5D77A" letterSpacing="2">OPERAÇÃO</text>
        <text x="240" y="64" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#D8D8D8" letterSpacing="3">SEU NEGÓCIO HOJE</text>
      </g>

      {/* Trunk arrow down */}
      <line x1="240" y1="76" x2="240" y2="120" stroke="url(#fluxoG)" strokeWidth="1.2" strokeDasharray="3 4" />

      {/* 6 motor nodes */}
      {[
        { x: 30, y: 140, label: "Loja Física" },
        { x: 180, y: 140, label: "B2B" },
        { x: 330, y: 140, label: "Indicação" },
        { x: 30, y: 260, label: "Eventos" },
        { x: 180, y: 260, label: "Datas" },
        { x: 330, y: 260, label: "Parcerias" },
        { x: 30, y: 380, label: "Upsell" },
        { x: 180, y: 380, label: "Combos" },
        { x: 330, y: 380, label: "Omnicanal" },
      ].map((m, i) => (
        <g key={i}>
          <rect x={m.x} y={m.y} width="120" height="48" rx="6" fill="rgba(2,15,11,.85)" stroke="url(#fluxoG)" strokeWidth=".9" />
          <text x={m.x + 60} y={m.y + 21} textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="11" fill="url(#fluxoG)" letterSpacing="1.5">MOTOR {String(i + 1).padStart(2, '0')}</text>
          <text x={m.x + 60} y={m.y + 36} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#F8F5EC">{m.label}</text>
        </g>
      ))}

      {/* Connector lines */}
      <g stroke="url(#fluxoG)" strokeWidth=".8" opacity=".55" fill="none">
        <line x1="240" y1="120" x2="90" y2="140" />
        <line x1="240" y1="120" x2="240" y2="140" />
        <line x1="240" y1="120" x2="390" y2="140" />
        <line x1="90" y1="188" x2="90" y2="260" />
        <line x1="240" y1="188" x2="240" y2="260" />
        <line x1="390" y1="188" x2="390" y2="260" />
        <line x1="90" y1="308" x2="90" y2="380" />
        <line x1="240" y1="308" x2="240" y2="380" />
        <line x1="390" y1="308" x2="390" y2="380" />
      </g>

      {/* Bottom outcome */}
      <g>
        <rect x="100" y="445" width="280" height="60" rx="6" fill="rgba(212,175,55,.12)" stroke="url(#fluxoG)" strokeWidth="1.3" />
        <text x="240" y="471" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="18" fill="url(#fluxoG)" letterSpacing="2.5">MÁQUINA DE CRESCIMENTO</text>
        <text x="240" y="490" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#D8D8D8" letterSpacing="3">MÚLTIPLOS MOTORES ATIVOS</text>
      </g>
      <line x1="240" y1="428" x2="240" y2="445" stroke="url(#fluxoG)" strokeWidth="1.2" />
    </svg>
  );
}

// ---------- MÉTODO (14 motores) ----------
function Metodo() {
  const motores = [
    "Loja Física", "Base de Clientes", "Indicação / Referidos", "Venda Ativa",
    "Parcerias Estratégicas", "Grêmio / Vendas em Empresas", "B2B Corporativo", "Kits e Combos",
    "Personalizados", "Datas Sazonais", "Eventos", "Omnicanalidade",
    "Upsell / Cross-sell", "Novas Ofertas"
  ];
  const [hover, setHover] = useState(null);

  return (
    <section id="metodo" className="relative py-24 md:py-32" style={{ background: "linear-gradient(180deg,var(--petroleum) 0%,var(--night) 100%)" }}>
      <div className="noise" />
      <div className="grid-lines" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <div className="section-tag mb-6 mx-auto" style={{ display: "inline-flex" }}><span className="dot"></span>O método proprietário</div>
          <h2 className="font-display uppercase mb-6" style={{ fontSize: "clamp(40px, 6.4vw, 80px)", lineHeight: 1 }}>
            <span style={{ color: "#F8F5EC" }}>Os </span><span className="gold-text">14 Motores</span><br />
            <span style={{ color: "#F8F5EC" }}>de Faturamento</span>
          </h2>
          <div className="hairline my-6 mx-auto" style={{ maxWidth: 120 }}></div>
          <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--gray)]">
            O método que mostra onde estão as <span className="text-[var(--gold-light)]">oportunidades escondidas</span> dentro do seu próprio negócio.
          </p>
        </div>

        {/* Diagram */}
        <div className="hide-mobile relative mx-auto" style={{ maxWidth: 820 }}>
          <CircularDiagram motores={motores} />
        </div>

        {/* Mobile grid */}
        <div className="only-mobile grid grid-cols-2 gap-3 mt-6">
          {motores.map((m, i) => (
            <div key={i} className="card p-4">
              <div className="motor-num" style={{ fontSize: 24 }}>{String(i + 1).padStart(2, "0")}</div>
              <div className="text-[13px] text-[var(--warm)] mt-1 leading-tight">{m}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center fade-in">
          <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--gray)] italic">
            “A proposta não é criar complexidade. É enxergar o negócio como uma máquina — cada motor precisa ter <span className="text-[var(--gold-light)] not-italic font-medium">função, direção, ritmo e acompanhamento</span>.”
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------- TRANSFORMAÇÃO ----------
function Transformacao() {
  const antes = [
    "Dependência de uma única fonte de venda",
    "Crescimento baseado em esforço",
    "Falta de previsibilidade",
    "Dono no centro de tudo",
    "Ações soltas sem método",
  ];
  const depois = [
    "Múltiplos motores de faturamento",
    "Estratégia clara de crescimento",
    "Diagnóstico do negócio",
    "Acompanhamento com mentoras e especialistas",
    "Plano de execução com foco em resultado",
  ];

  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--night)" }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 fade-in">
          <div className="section-tag mb-6"><span className="dot"></span>Transformação</div>
          <h2 className="font-display uppercase" style={{ fontSize: "clamp(36px, 5.6vw, 68px)", lineHeight: 1 }}>
            <span style={{ color: "#F8F5EC" }}>De uma operação dependente para uma </span>
            <span className="gold-text">máquina de crescimento.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_60px_1fr] gap-6 items-stretch">
          <div className="card p-7 md:p-9 relative" style={{ background: "linear-gradient(180deg,rgba(20,20,20,.55) 0%,rgba(2,15,11,.85) 100%)", borderColor: "rgba(216,113,113,.25)" }}>
            <div className="text-[11px] tracking-[.32em] uppercase text-[#D87171] mb-2">Antes</div>
            <h3 className="font-display uppercase text-[28px] md:text-[34px] mb-6" style={{ color: "#D8D8D8" }}>Operação dependente</h3>
            <ul className="space-y-4">
              {antes.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CrossIcon className="shrink-0 mt-0.5" />
                  <span className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--gray)]">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hide-mobile flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-px h-20" style={{ background: "linear-gradient(180deg,transparent,var(--gold),transparent)" }}></div>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <defs><linearGradient id="aroG" x1="0" y1="0" x2="1" y2="1">{goldStops}</linearGradient></defs>
                <circle cx="18" cy="18" r="17" stroke="url(#aroG)" strokeWidth="1" />
                <path d="M14 10l8 8-8 8" stroke="url(#aroG)" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              <div className="w-px h-20" style={{ background: "linear-gradient(180deg,transparent,var(--gold),transparent)" }}></div>
            </div>
          </div>

          <div className="card card-corner p-7 md:p-9 relative" style={{ background: "linear-gradient(180deg,rgba(11,58,44,.95) 0%,rgba(2,43,32,.95) 100%)" }}>
            <div className="text-[11px] tracking-[.32em] uppercase text-[var(--gold-light)] mb-2">Depois</div>
            <h3 className="font-display uppercase text-[28px] md:text-[34px] mb-6 gold-text">Máquina de crescimento</h3>
            <ul className="space-y-4">
              {depois.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="shrink-0 mt-0.5" />
                  <span className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--warm)]">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- COMO FUNCIONA ----------
function ComoFunciona() {
  const formats = [
    { icon: "wpp", titulo: "Grupo de Mentoria no WhatsApp", desc: "Ambiente direto para direcionamentos, acompanhamento e troca com empresários em movimento." },
    { icon: "diag", titulo: "Reunião de Diagnóstico com Ro e Ale Lopes", desc: "Um encontro estratégico para entender o momento do negócio, identificar gargalos e mapear oportunidades de crescimento." },
    { icon: "aula", titulo: "Aulas quinzenais online", desc: "Encontros quinzenais com as mentoras e uma equipe de especialistas para aprofundar método, estratégia e aplicação prática." },
    { icon: "pres", titulo: "2 encontros presenciais no ano", desc: "Momentos presenciais de conexão, visão estratégica e imersão para empresários selecionados." },
  ];

  const iconFor = (k) => {
    const defs = <defs><linearGradient id={"i" + k} x1="0" y1="0" x2="1" y2="1">{goldStops}</linearGradient></defs>;
    if (k === "wpp") return <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke={`url(#i${k})`} strokeWidth="1.4">{defs}<path d="M50 40c-1-1-5-3-6-3s-2-1-3 1-3 3-4 4-1 1-2 0c-1-1-4-2-7-5-3-2-5-5-5-6s0-1 1-2c0-1 1-1 1-2s1-1 0-2c0-1-3-5-3-7s-1-1-2-1h-2c-1 0-2 0-3 1-1 1-3 3-3 7s3 8 4 9c1 2 6 10 15 13 2 1 4 2 5 2 3 1 5 1 7 0 2 0 5-2 6-4 1-2 1-4 1-4 0-1-1-1-2-1z" /><circle cx="32" cy="32" r="26" /></svg>;
    if (k === "diag") return <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke={`url(#i${k})`} strokeWidth="1.4">{defs}<circle cx="32" cy="32" r="26" /><circle cx="32" cy="32" r="14" /><circle cx="32" cy="32" r="3" fill={`url(#i${k})`} /><line x1="32" y1="6" x2="32" y2="14" /><line x1="32" y1="50" x2="32" y2="58" /><line x1="6" y1="32" x2="14" y2="32" /><line x1="50" y1="32" x2="58" y2="32" /></svg>;
    if (k === "aula") return <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke={`url(#i${k})`} strokeWidth="1.4">{defs}<rect x="8" y="14" width="48" height="30" rx="3" /><line x1="20" y1="50" x2="44" y2="50" /><line x1="32" y1="44" x2="32" y2="50" /><polygon points="28,24 28,34 38,29" fill={`url(#i${k})`} /></svg>;
    return <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke={`url(#i${k})`} strokeWidth="1.4">{defs}<path d="M16 50V28l16-12 16 12v22" /><line x1="10" y1="50" x2="54" y2="50" /><line x1="28" y1="50" x2="28" y2="36" /><line x1="36" y1="50" x2="36" y2="36" /></svg>;
  };

  return (
    <section id="formato" className="relative py-24 md:py-32" style={{ background: "var(--petroleum)" }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-7">
            <div className="section-tag mb-6"><span className="dot"></span>Como funciona</div>
            <h2 className="font-display uppercase" style={{ fontSize: "clamp(36px, 5.4vw, 64px)", lineHeight: 1.02 }}>
              <span style={{ color: "#F8F5EC" }}>Um formato criado para empresários que precisam de </span>
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
                <div>{iconFor(f.icon)}</div>
                <div className="motor-num" style={{ fontSize: 28 }}>{String(i + 1).padStart(2, "0")}</div>
              </div>
              <h3 className="font-display uppercase text-[20px] md:text-[22px] mb-3" style={{ color: "#F8F5EC", letterSpacing: ".02em" }}>{f.titulo}</h3>
              <div className="hairline my-3" style={{ maxWidth: 40 }}></div>
              <p className="text-[14px] leading-[1.6] text-[var(--gray)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PARA QUEM É ----------
function ParaQuem() {
  const sim = [
    "Já possuem uma empresa em operação",
    "Querem crescer com mais estratégia e menos improviso",
    "Sentem que dependem demais de uma única forma de vender",
    "Querem ativar novos canais e oportunidades de faturamento",
    "Buscam acompanhamento próximo e visão externa qualificada",
    "Estão dispostos a olhar para a operação com profundidade",
  ];
  const nao = [
    "Está buscando fórmula pronta",
    "Não quer executar",
    "Ainda não possui um negócio validado",
    "Quer apenas conteúdo gravado sem acompanhamento",
    "Não está disposto a passar por diagnóstico",
  ];
  return (
    <section id="para-quem" className="relative py-24 md:py-32" style={{ background: "var(--night)" }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="card card-corner p-8 md:p-10 fade-in">
            <div className="section-tag mb-6"><span className="dot"></span>Critério de entrada</div>
            <h2 className="font-display uppercase mb-2" style={{ fontSize: "clamp(32px, 4vw, 44px)", lineHeight: 1.02, color: "#F8F5EC" }}>
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

          <div className="p-8 md:p-10 fade-in" style={{ background: "rgba(2,15,11,.55)", border: "1px dashed rgba(216,113,113,.3)", borderRadius: 10 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6" style={{ border: "1px solid rgba(216,113,113,.4)", borderRadius: 999, fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "#D87171" }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: "#D87171" }}></span>
              Critério de exclusão
            </div>
            <h3 className="font-display uppercase mb-2" style={{ fontSize: "clamp(28px, 3.6vw, 40px)", lineHeight: 1.02, color: "#D8D8D8" }}>
              Não é<br />para quem…
            </h3>
            <div className="my-6" style={{ height: 1, maxWidth: 80, background: "linear-gradient(90deg,transparent,rgba(216,113,113,.5),transparent)" }}></div>
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
  );
}

// ---------- AUTORIDADE / MENTORAS ----------
function Mentoras() {
  return (
    <section id="mentoras" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg,var(--night) 0%,var(--petroleum) 60%,var(--deep) 100%)" }}>
      <div className="noise" />
      <div className="gold-glow pulse-glow" style={{ width: 700, height: 700, top: "30%", left: "-15%" }} />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 fade-in">
            <div className="section-tag mb-6"><span className="dot"></span>Autoridade</div>
            <h2 className="font-display uppercase mb-6" style={{ fontSize: "clamp(38px, 5.6vw, 68px)", lineHeight: 1 }}>
              <span style={{ color: "#F8F5EC" }}>Com quem você vai </span>
              <span className="gold-text">caminhar.</span>
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[1.65] text-[var(--gray)] mb-8">
              Duas mentoras à frente do <span className="text-[var(--gold-light)]">Lopes Group</span> — empresárias que vivem o desafio diário de crescer com método, estrutura e visão executiva.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 pl-5" style={{ borderColor: "var(--gold)" }}>
                <div className="font-display uppercase text-[22px] tracking-[.04em]" style={{ color: "#F8F5EC" }}>Ro Lopes</div>
                <div className="text-[12px] uppercase tracking-[.18em] text-[var(--gold-light)] mt-1 mb-2">CEO &amp; Founder — Lopes Group</div>
                <p className="text-[14px] leading-[1.6] text-[var(--gray)]">Atua com crescimento estruturado, visão empresarial e desenvolvimento de negócios em operação.</p>
                <div className="flex gap-3 mt-3 text-[var(--gold-light)]">
                  <a href="#" aria-label="Instagram Ro Lopes" className="hover:text-[var(--warm)] transition"><InstagramIcon /></a>
                  <a href="#" aria-label="LinkedIn Ro Lopes" className="hover:text-[var(--warm)] transition"><LinkedInIcon /></a>
                </div>
              </div>
              <div className="border-l-2 pl-5" style={{ borderColor: "var(--gold)" }}>
                <div className="font-display uppercase text-[22px] tracking-[.04em]" style={{ color: "#F8F5EC" }}>Ale Lopes</div>
                <div className="text-[12px] uppercase tracking-[.18em] text-[var(--gold-light)] mt-1 mb-2">Co-Founder — Lopes Group</div>
                <p className="text-[14px] leading-[1.6] text-[var(--gray)]">Atua na estruturação estratégica, organização e crescimento da operação.</p>
                <div className="flex gap-3 mt-3 text-[var(--gold-light)]">
                  <a href="#" aria-label="Instagram Ale Lopes" className="hover:text-[var(--warm)] transition"><InstagramIcon /></a>
                  <a href="#" aria-label="LinkedIn Ale Lopes" className="hover:text-[var(--warm)] transition"><LinkedInIcon /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 fade-in">
            <div className="photo-frame relative" style={{ aspectRatio: "3/4", maxWidth: 620, marginLeft: "auto" }}>
              {/* Subtle background gear behind photo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="spin-slow" style={{ width: "90%", height: "90%" }}>
                  <GearOutline size={500} teeth={20} strokeWidth={1} />
                </div>
              </div>
              <img src="assets/mentoras.png" alt="Ro &amp; Ale Lopes" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center bottom" }} />
              {/* Frame corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8" style={{ borderTop: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)" }} />
              <div className="absolute top-3 right-3 w-8 h-8" style={{ borderTop: "1px solid var(--gold)", borderRight: "1px solid var(--gold)" }} />
              <div className="absolute bottom-3 left-3 w-8 h-8" style={{ borderBottom: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)" }} />
              <div className="absolute bottom-3 right-3 w-8 h-8" style={{ borderBottom: "1px solid var(--gold)", borderRight: "1px solid var(--gold)" }} />
              {/* Bottom plate */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 text-center" style={{ background: "rgba(2,15,11,.85)", border: "1px solid rgba(212,175,55,.5)", borderRadius: 4, minWidth: 240, backdropFilter: "blur(6px)" }}>
                <div className="font-display uppercase text-[14px] gold-text tracking-[.15em]">Ro &amp; Ale Lopes</div>
                <div className="text-[10px] uppercase tracking-[.25em] text-[var(--gray)] mt-1">Lopes Group · Mentoras</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- APLICAÇÃO (FORM) ----------
function Aplicacao({ formRef }) {
  const [data, setData] = useState({
    nome: "", whatsapp: "", email: "", empresa: "", segmento: "",
    faturamento: "", desafio: "", social: ""
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!data.nome.trim()) e.nome = "Informe seu nome";
    if (!/^[+\d\s\-().]{8,}$/.test(data.whatsapp.trim())) e.whatsapp = "WhatsApp inválido";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = "E-mail inválido";
    if (!data.empresa.trim()) e.empresa = "Informe sua empresa";
    if (!data.segmento.trim()) e.segmento = "Informe o segmento";
    if (!data.faturamento) e.faturamento = "Selecione uma faixa";
    if (data.desafio.trim().length < 12) e.desafio = "Conte um pouco mais (mín. 12 caracteres)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    // future: POST to webhook / CRM
    setTimeout(() => {
      const el = document.getElementById("aplicacao-result");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const wppText = "Olá! Tenho interesse na Mentoria Next Level Club e gostaria de conversar pelo WhatsApp.";
  const wppUrl = "https://wa.me/?text=" + encodeURIComponent(wppText);

  return (
    <section id="aplicacao" ref={formRef} className="relative py-24 md:py-32" style={{ background: "linear-gradient(180deg,var(--deep) 0%,var(--night) 100%)" }}>
      <div className="noise" />
      <div className="gold-glow" style={{ width: 500, height: 500, top: "10%", right: "-10%" }} />
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-in">
          <div className="section-tag mb-6 mx-auto" style={{ display: "inline-flex" }}><span className="dot"></span>Processo seletivo</div>
          <h2 className="font-display uppercase mb-6" style={{ fontSize: "clamp(36px, 5.2vw, 60px)", lineHeight: 1 }}>
            <span style={{ color: "#F8F5EC" }}>Aplicação para a </span>
            <span className="gold-text">Mentoria Next Level Club.</span>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.65] text-[var(--gray)]">
            As vagas são limitadas e passam por análise. Preencha o formulário para que nossa equipe entenda o momento do seu negócio.
          </p>
        </div>

        {sent ? (
          <div id="aplicacao-result" className="card card-corner p-10 md:p-14 text-center fade-in in" style={{ background: "linear-gradient(135deg,rgba(212,175,55,.12),rgba(2,43,32,.95))" }}>
            <div className="mx-auto mb-6" style={{ width: 80, height: 80 }}>
              <svg viewBox="0 0 80 80" fill="none">
                <defs><linearGradient id="okG" x1="0" y1="0" x2="1" y2="1">{goldStops}</linearGradient></defs>
                <circle cx="40" cy="40" r="38" stroke="url(#okG)" strokeWidth="1.4" />
                <path d="M24 41l11 11 21-25" stroke="url(#okG)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <h3 className="font-display uppercase text-[28px] md:text-[36px] gold-text mb-4">Aplicação recebida.</h3>
            <p className="text-[16px] md:text-[17px] leading-[1.65] text-[var(--warm)] max-w-xl mx-auto">
              Nossa equipe irá analisar suas informações e entrar em contato caso o seu perfil esteja alinhado com a mentoria.
            </p>
            <a href={wppUrl} target="_blank" rel="noopener" className="btn-ghost mt-8 inline-flex"><WhatsappIcon /> Acompanhar pelo WhatsApp</a>
          </div>
        ) : (
          <form onSubmit={submit} className="card card-corner p-7 md:p-12 fade-in" noValidate>
            <div className="grid md:grid-cols-2 gap-5">
              <div className={"field " + (errors.nome ? "error" : "")}>
                <label>Nome</label>
                <input value={data.nome} onChange={set("nome")} placeholder="Seu nome completo" />
                {errors.nome && <div className="err-msg">{errors.nome}</div>}
              </div>
              <div className={"field " + (errors.whatsapp ? "error" : "")}>
                <label>WhatsApp</label>
                <input value={data.whatsapp} onChange={set("whatsapp")} placeholder="(11) 99999-9999" />
                {errors.whatsapp && <div className="err-msg">{errors.whatsapp}</div>}
              </div>
              <div className={"field " + (errors.email ? "error" : "")}>
                <label>E-mail</label>
                <input type="email" value={data.email} onChange={set("email")} placeholder="voce@empresa.com" />
                {errors.email && <div className="err-msg">{errors.email}</div>}
              </div>
              <div className={"field " + (errors.empresa ? "error" : "")}>
                <label>Nome da empresa</label>
                <input value={data.empresa} onChange={set("empresa")} placeholder="Razão social ou marca" />
                {errors.empresa && <div className="err-msg">{errors.empresa}</div>}
              </div>
              <div className={"field " + (errors.segmento ? "error" : "")}>
                <label>Segmento</label>
                <input value={data.segmento} onChange={set("segmento")} placeholder="Ex.: Varejo, Serviço, Indústria…" />
                {errors.segmento && <div className="err-msg">{errors.segmento}</div>}
              </div>
              <div className={"field " + (errors.faturamento ? "error" : "")}>
                <label>Faturamento mensal aproximado</label>
                <select value={data.faturamento} onChange={set("faturamento")}>
                  <option value="">Selecione…</option>
                  <option>Até R$ 50 mil/mês</option>
                  <option>R$ 50 mil – R$ 100 mil/mês</option>
                  <option>R$ 100 mil – R$ 300 mil/mês</option>
                  <option>R$ 300 mil – R$ 1 mi/mês</option>
                  <option>Acima de R$ 1 mi/mês</option>
                </select>
                {errors.faturamento && <div className="err-msg">{errors.faturamento}</div>}
              </div>
              <div className={"field md:col-span-2 " + (errors.desafio ? "error" : "")}>
                <label>Qual é o maior desafio do seu negócio hoje?</label>
                <textarea rows="4" value={data.desafio} onChange={set("desafio")} placeholder="Descreva com objetividade o momento atual e o que está travado." />
                {errors.desafio && <div className="err-msg">{errors.desafio}</div>}
              </div>
              <div className="field md:col-span-2">
                <label>Instagram ou LinkedIn (opcional)</label>
                <input value={data.social} onChange={set("social")} placeholder="@seuperfil ou linkedin.com/in/…" />
              </div>
            </div>

            <div className="hairline my-8"></div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
              <p className="text-[12px] uppercase tracking-[.18em] text-[var(--muted)]">
                Vagas limitadas · Sujeito à análise
              </p>
              <div className="flex flex-col md:flex-row gap-3">
                <a href={wppUrl} target="_blank" rel="noopener" className="btn-ghost"><WhatsappIcon /> Prefiro falar pelo WhatsApp</a>
                <button type="submit" className="btn-gold">Enviar aplicação →</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

// ---------- FAQ ----------
function FAQ() {
  const items = [
    { q: "A mentoria é online ou presencial?", a: "A mentoria combina acompanhamento online, aulas quinzenais e dois encontros presenciais ao longo do ano." },
    { q: "Quem pode participar?", a: "Empresários com negócios em operação que desejam estruturar novos motores de faturamento e crescer com mais estratégia." },
    { q: "Existe processo de seleção?", a: "Sim. A aplicação passa por análise para entender se a mentoria faz sentido para o momento atual do negócio." },
    { q: "O diagnóstico é individual?", a: "Sim. O processo inclui uma reunião de diagnóstico com Ro e Ale Lopes." },
    { q: "A mentoria serve para qualquer segmento?", a: "O método pode ser aplicado em diferentes negócios, mas a seleção avalia o perfil, maturidade e momento da empresa." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--petroleum)" }}>
      <div className="noise" />
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 fade-in md:sticky md:top-32">
            <div className="section-tag mb-6"><span className="dot"></span>Perguntas frequentes</div>
            <h2 className="font-display uppercase mb-6" style={{ fontSize: "clamp(36px, 4.6vw, 56px)", lineHeight: 1 }}>
              <span style={{ color: "#F8F5EC" }}>Dúvidas</span><br />
              <span className="gold-text">frequentes.</span>
            </h2>
            <p className="text-[15px] leading-[1.65] text-[var(--gray)]">
              Se restar qualquer ponto após a leitura, envie a sua dúvida diretamente pelo WhatsApp na aplicação.
            </p>
          </div>
          <div className="md:col-span-8">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="faq-item">
                  <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                    <span className="font-display uppercase text-[18px] md:text-[22px]" style={{ color: "#F8F5EC", letterSpacing: ".02em" }}>{it.q}</span>
                    <span className={"faq-icon " + (isOpen ? "open" : "")}>+</span>
                  </button>
                  <div className={"faq-a " + (isOpen ? "open" : "")}>
                    <p className="text-[15px] md:text-[16px] leading-[1.65]">{it.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- FINAL CTA + FOOTER ----------
function FinalCTA({ onApply }) {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg,#0B3A2C 0%,#020F0B 50%,#063D2E 100%)" }}>
      <div className="noise" />
      <div className="grid-lines" />
      <div className="absolute hide-mobile" style={{ right: -160, top: -100, width: 520, height: 520, opacity: 0.18 }}>
        <div className="spin-slow" style={{ width: "100%", height: "100%" }}>
          <GearOutline size={520} teeth={16} strokeWidth={1.2} />
        </div>
      </div>
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 text-center">
        <div className="section-tag mb-6 mx-auto" style={{ display: "inline-flex" }}><span className="dot"></span>Próximo passo</div>
        <h2 className="font-display uppercase mb-6" style={{ fontSize: "clamp(36px, 5.6vw, 68px)", lineHeight: 1 }}>
          <span style={{ color: "#F8F5EC" }}>Crescer não é trabalhar mais.</span><br />
          <span className="gold-text">É ativar os motores certos.</span>
        </h2>
        <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--gray)] max-w-2xl mx-auto mb-10">
          Aplique agora. As vagas são limitadas e a análise é feita pela equipe das mentoras.
        </p>
        <button onClick={onApply} className="btn-gold" style={{ padding: "20px 36px", fontSize: 16 }}>
          Aplicar para a mentoria →
        </button>
      </div>
    </section>
  );
}

function Footer({ onApply }) {
  return (
    <footer className="relative pt-16 pb-32 md:pb-16" style={{ background: "var(--night)", borderTop: "1px solid rgba(212,175,55,.18)" }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid gap-12 text-center md:grid-cols-[minmax(0,1fr)_180px_180px] md:items-start md:gap-16 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img src="assets/logo-completo.png" alt="Next Level Club" style={{ height: 46, width: "auto", marginBottom: 30 }} />
            <p className="text-[15px] leading-[1.65] text-[var(--gray)] max-w-md">
              <span className="text-[var(--warm)] font-medium">Crescer não é trabalhar mais.</span> É ativar os motores certos.
            </p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[.22em] text-[var(--gold-light)] mb-4">Navegar</div>
            <ul className="space-y-2 text-[14px] text-[var(--gray)]">
              <li><a href="#metodo" className="hover:text-[var(--warm)]">Método</a></li>
              <li><a href="#para-quem" className="hover:text-[var(--warm)]">Para quem é</a></li>
              <li><a href="#mentoras" className="hover:text-[var(--warm)]">Mentoras</a></li>
              <li><a href="#aplicacao" className="hover:text-[var(--warm)]">Aplicação</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[.22em] text-[var(--gold-light)] mb-4">Conexão</div>
            <div className="flex justify-center gap-3 mb-6 md:justify-start">
              <a href="#" aria-label="Instagram" className="text-[var(--gold-light)] hover:text-[var(--warm)] transition p-2.5" style={{ border: "1px solid rgba(212,175,55,.4)", borderRadius: 6 }}><InstagramIcon size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="text-[var(--gold-light)] hover:text-[var(--warm)] transition p-2.5" style={{ border: "1px solid rgba(212,175,55,.4)", borderRadius: 6 }}><LinkedInIcon size={16} /></a>
              <a href="#" aria-label="WhatsApp" className="text-[var(--gold-light)] hover:text-[var(--warm)] transition p-2.5" style={{ border: "1px solid rgba(212,175,55,.4)", borderRadius: 6 }}><WhatsappIcon size={16} /></a>
            </div>
            <button onClick={onApply} className="btn-gold w-full md:w-auto">Aplicar para a mentoria</button>
          </div>
        </div>

        <div className="hairline my-10"></div>

        <div className="flex flex-col md:flex-row md:justify-between gap-4 text-[12px] uppercase tracking-[.18em] text-[var(--muted)]">
          <div>© 2026 Next Level Club · Lopes Group</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--gold-light)]">Política de privacidade</a>
            <a href="#" className="hover:text-[var(--gold-light)]">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Hero, Problema, Metodo, Transformacao, ParaQuem, Mentoras, Aplicacao, FAQ, FinalCTA, Footer });
