import { useState, useEffect } from 'react'

const links: [string, string][] = [
  ['Método', 'metodo'],
  ['Para quem é', 'para-quem'],
  ['Formato', 'formato'],
  ['Mentoras', 'mentoras'],
  ['Aplicação', 'aplicacao'],
]

export function Header({ onApply }: { onApply: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(2,15,11,.88)' : 'rgba(2,15,11,.35)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,.25)' : '1px solid rgba(212,175,55,.08)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 flex items-center justify-between md:grid md:items-center" style={{ height: scrolled ? 60 : 72, gridTemplateColumns: '1fr auto 1fr' }}>
        <a href="#top" className="flex items-center md:justify-self-start">
          <img src="/assets/logo-simbolo.png" alt="Next Level Club" width={52} height={52} fetchPriority="high" decoding="async" className="logo-symbol" />
        </a>

        <nav className="hide-mobile flex items-center gap-8 md:justify-self-center">
          {links.map(([label, id]) => (
            <a key={id} href={'#' + id} className="text-[13px] tracking-[.14em] uppercase text-[var(--gray)] hover:text-[var(--gold-light)] transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:justify-self-end">
          <button onClick={onApply} className="btn-gold hide-mobile" style={{ padding: '12px 20px', fontSize: 12 }}>
            Aplicar para a Mentoria
          </button>
          <button className="only-mobile" onClick={() => setOpen(!open)} aria-label="Menu" style={{ background: 'none', border: '1px solid rgba(212,175,55,.4)', padding: 10, borderRadius: 6, color: 'var(--gold-light)' }}>
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
        <div className="only-mobile px-6 pb-6 pt-2" style={{ background: 'rgba(2,15,11,.96)', borderTop: '1px solid rgba(212,175,55,.2)' }}>
          <div className="flex flex-col gap-4">
            {links.map(([label, id]) => (
              <a key={id} href={'#' + id} onClick={() => setOpen(false)} className="text-[15px] tracking-[.1em] uppercase text-[var(--warm)]">{label}</a>
            ))}
            <button onClick={() => { setOpen(false); onApply() }} className="btn-gold mt-2">Aplicar para a Mentoria</button>
          </div>
        </div>
      )}
    </header>
  )
}
