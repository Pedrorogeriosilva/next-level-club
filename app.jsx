/* Next Level Club — App root */
const { useRef, useEffect } = React;

function StickyMobileCTA({ onApply }) {
  return (
    <div className="only-mobile fixed bottom-0 left-0 right-0 z-40 mobile-cta" style={{ padding: "12px 16px calc(12px + env(safe-area-inset-bottom, 0px))", background: "linear-gradient(180deg,rgba(2,15,11,.85),rgba(2,15,11,.98))", borderTop: "1px solid rgba(212,175,55,.3)", backdropFilter: "blur(10px)" }}>
      <button onClick={onApply} className="btn-gold w-full" style={{ minHeight: 52 }}>
        Aplicar para a mentoria →
      </button>
    </div>
  );
}

function App() {
  const formRef = useRef(null);

  const scrollToApply = () => {
    const el = document.getElementById("aplicacao");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      {/* Global SVG gradient defs */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <linearGradient id="globalGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9C7628" />
            <stop offset="42%" stopColor="#D4AF37" />
            <stop offset="68%" stopColor="#F5D77A" />
            <stop offset="100%" stopColor="#9C7628" />
          </linearGradient>
        </defs>
      </svg>
      <Header onApply={scrollToApply} />
      <main>
        <Hero onApply={scrollToApply} />
        <Problema />
        <Metodo />
        <Transformacao />
        <ParaQuem />
        <Mentoras />
        <Aplicacao formRef={formRef} />
        <FAQ />
        <Footer onApply={scrollToApply} />
      </main>
      <StickyMobileCTA onApply={scrollToApply} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
