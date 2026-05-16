import { InstagramIcon, LinkedInIcon, WhatsappIcon } from '../components/Icons'

const navLinks = [
  ['Método', '#metodo'],
  ['Para quem é', '#para-quem'],
  ['Formato', '#formato'],
  ['Mentoras', '#mentoras'],
  ['Aplicação', '#aplicacao'],
] as const

export function Footer({ onApply }: { onApply: () => void }) {
  return (
    <footer className="relative pt-16 pb-32 md:pb-16" style={{ background: 'var(--night)', borderTop: '1px solid rgba(212,175,55,.18)' }}>
      <div className="noise" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <img src="/assets/logo-completo.png" alt="Next Level Club" width={220} height={64} loading="lazy" decoding="async" style={{ height: 64, width: 'auto', marginBottom: 24 }} />
            <p className="text-[15px] leading-[1.65] text-[var(--gray)] max-w-md">
              <span className="text-[var(--warm)] font-medium">Crescer não é trabalhar mais.</span> É ativar os motores certos.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[.22em] text-[var(--gold-light)] mb-4">Navegar</div>
            <ul className="space-y-2 text-[14px] text-[var(--gray)]">
              {navLinks.map(([label, href]) => (
                <li key={href}><a href={href} className="hover:text-[var(--warm)]">{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[.22em] text-[var(--gold-light)] mb-4">Conexão</div>
            <div className="flex gap-3 mb-6">
              <a href="https://www.instagram.com/rolopescs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Ro Lopes" className="text-[var(--gold-light)] hover:text-[var(--warm)] transition p-2.5" style={{ border: '1px solid rgba(212,175,55,.4)', borderRadius: 6 }}><InstagramIcon size={16} /></a>
              <a href="https://www.linkedin.com/in/rosangela-lopes-00419812a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Ro Lopes" className="text-[var(--gold-light)] hover:text-[var(--warm)] transition p-2.5" style={{ border: '1px solid rgba(212,175,55,.4)', borderRadius: 6 }}><LinkedInIcon size={16} /></a>
              <a href="https://wa.me/?text=Olá! Tenho interesse na Mentoria Next Level Club." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[var(--gold-light)] hover:text-[var(--warm)] transition p-2.5" style={{ border: '1px solid rgba(212,175,55,.4)', borderRadius: 6 }}><WhatsappIcon size={16} /></a>
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

        {/* assinatura do desenvolvedor */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 text-center" style={{ borderTop: '1px solid rgba(212,175,55,.1)' }}>
          <span className="text-[10px] uppercase tracking-[.32em] text-[var(--muted)]">
            Desenvolvido por
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="font-display uppercase gold-text" style={{ fontSize: 14, letterSpacing: '.18em' }}>
              Pedro Rogério
            </span>
            <span style={{ color: 'var(--gold)', opacity: .6 }}>·</span>
            <a
              href="https://wa.me/5511960396045?text=Olá Pedro! Vi o site Next Level Club e gostaria de falar sobre um projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] tracking-[.06em] text-[var(--gold-light)] hover:text-[var(--warm)] transition"
              aria-label="WhatsApp Pedro Rogério"
            >
              <WhatsappIcon size={14} />
              <span>(11) 96039-6045</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
