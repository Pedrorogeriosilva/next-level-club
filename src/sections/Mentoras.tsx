import { GearOutline } from '../components/GearOutline'
import { InstagramIcon, LinkedInIcon } from '../components/Icons'

const mentoras = [
  {
    nome: 'Ro Lopes',
    cargo: 'CEO & Founder — Lopes Group',
    bio: 'Atua com crescimento estruturado, visão empresarial e desenvolvimento de negócios em operação.',
    instagram: 'https://www.instagram.com/rolopescs/',
    linkedin: 'https://www.linkedin.com/in/rosangela-lopes-00419812a/',
  },
  {
    nome: 'Ale Lopes',
    cargo: 'Co-Founder — Lopes Group',
    bio: 'Atua na estruturação estratégica, organização e crescimento da operação.',
    instagram: 'https://www.instagram.com/alelopes2404/',
    linkedin: 'https://www.linkedin.com/in/alessandra-mouraa/',
  },
]

export function Mentoras() {
  return (
    <section id="mentoras" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg,var(--night) 0%,var(--petroleum) 60%,var(--deep) 100%)' }}>
      <div className="noise" />
      <div className="gold-glow pulse-glow" style={{ width: 700, height: 700, top: '30%', left: '-15%' }} />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 fade-in">
            <div className="section-tag mb-6"><span className="dot"></span>Autoridade</div>
            <h2 className="font-display uppercase mb-6" style={{ fontSize: 'clamp(38px, 5.6vw, 68px)', lineHeight: 1 }}>
              <span style={{ color: '#F8F5EC' }}>Com quem você vai </span>
              <span className="gold-text">caminhar.</span>
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[1.65] text-[var(--gray)] mb-8">
              Duas mentoras à frente do <span className="text-[var(--gold-light)]">Lopes Group</span> — empresárias que vivem o desafio diário de crescer com método, estrutura e visão executiva.
            </p>

            <div className="space-y-6">
              {mentoras.map((m) => (
                <div key={m.nome} className="border-l-2 pl-5" style={{ borderColor: 'var(--gold)' }}>
                  <div className="font-display uppercase text-[22px] tracking-[.04em]" style={{ color: '#F8F5EC' }}>{m.nome}</div>
                  <div className="text-[12px] uppercase tracking-[.18em] text-[var(--gold-light)] mt-1 mb-2">{m.cargo}</div>
                  <p className="text-[14px] leading-[1.6] text-[var(--gray)]">{m.bio}</p>
                  <div className="flex gap-3 mt-3 text-[var(--gold-light)]">
                    <a href={m.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${m.nome}`} className="hover:text-[var(--warm)] transition"><InstagramIcon /></a>
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${m.nome}`} className="hover:text-[var(--warm)] transition"><LinkedInIcon /></a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 fade-in">
            <div className="photo-frame relative mx-auto overflow-hidden" style={{ aspectRatio: '4/5', maxWidth: 560, background: 'var(--deep)' }}>
              <div className="absolute inset-0 pointer-events-none opacity-25" style={{ zIndex: 1 }}>
                <div className="spin-slow w-full h-full flex items-center justify-center">
                  <GearOutline size={520} teeth={20} strokeWidth={1} />
                </div>
              </div>
              <img
                src="/assets/CASAL.jpg"
                alt="Ro & Ale Lopes"
                loading="lazy"
                decoding="async"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '72% center', zIndex: 2 }}
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(2,15,11,0) 55%, rgba(2,15,11,.55) 100%)', zIndex: 3 }} />
              <div className="absolute top-3 left-3 w-8 h-8" style={{ borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)', zIndex: 4 }} />
              <div className="absolute top-3 right-3 w-8 h-8" style={{ borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)', zIndex: 4 }} />
              <div className="absolute bottom-3 left-3 w-8 h-8" style={{ borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)', zIndex: 4 }} />
              <div className="absolute bottom-3 right-3 w-8 h-8" style={{ borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)', zIndex: 4 }} />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 text-center" style={{ background: 'rgba(2,15,11,.85)', border: '1px solid rgba(212,175,55,.5)', borderRadius: 4, minWidth: 240, backdropFilter: 'blur(6px)', zIndex: 4 }}>
                <div className="font-display uppercase text-[14px] gold-text tracking-[.15em]">Ro &amp; Ale Lopes</div>
                <div className="text-[10px] uppercase tracking-[.25em] text-[var(--gray)] mt-1">Lopes Group · Mentoras</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
