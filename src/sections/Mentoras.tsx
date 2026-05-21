import { InstagramIcon, LinkedInIcon } from '../components/Icons'

type Mentora = {
  nome: string
  cargo: string
  bio: string
  instagram: string
  linkedin: string
  photo: string
  photoPos: string
}

const mentoras: Mentora[] = [
  {
    nome: 'Ro Lopes',
    cargo: 'Empresária, CEO & Founder do LOPESGROUP',
    bio: 'Empresária com operação real e foco em crescimento estruturado.',
    instagram: 'https://www.instagram.com/rolopescs/',
    linkedin: 'https://www.linkedin.com/in/rosangela-lopes-00419812a/',
    photo: '/assets/ro.png',
    photoPos: 'center top',
  },
  {
    nome: 'Ale Lopes',
    cargo: 'Empresária & Co-Founder da LOPESGROUP',
    bio: 'Responsável pela estrutura e estratégia de crescimento da operação.',
    instagram: 'https://www.instagram.com/alelopes2404/',
    linkedin: 'https://www.linkedin.com/in/alessandra-mouraa/',
    photo: '/assets/ale.png',
    photoPos: 'center top',
  },
]

export function Mentoras() {
  return (
    <section
      id="mentoras"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,var(--night) 0%,var(--petroleum) 60%,var(--deep) 100%)' }}
    >
      <div className="noise" />
      <div className="gold-glow pulse-glow" style={{ width: 600, height: 600, top: '20%', left: '-15%' }} />
      <div className="gold-glow" style={{ width: 500, height: 500, bottom: '-10%', right: '-12%', opacity: 0.5 }} />

      <div className="relative max-w-[1160px] mx-auto px-6 md:px-12">
        {/* Cabeçalho */}
        <div className="text-center mb-10 md:mb-14 fade-in" style={{ maxWidth: 740, marginInline: 'auto' }}>
          <div className="section-tag mb-5 mx-auto" style={{ display: 'inline-flex' }}>
            <span className="dot"></span>Autoridade
          </div>
          <h2
            className="font-display uppercase mb-4"
            style={{ fontSize: 'clamp(32px, 4.4vw, 52px)', lineHeight: 1.02 }}
          >
            <span style={{ color: '#F8F5EC' }}>Com quem você vai </span>
            <span className="gold-text">caminhar.</span>
          </h2>
          <div className="hairline mx-auto" style={{ maxWidth: 100 }} />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {mentoras.map((m, i) => (
            <article
              key={m.nome}
              className="fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Foto */}
              <div
                className="relative overflow-hidden mentora-photo mx-auto"
                style={{
                  aspectRatio: '1/1',
                  background: 'var(--deep)',
                  maxWidth: 360,
                  clipPath:
                    'polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px))',
                }}
              >
                <img
                  src={m.photo}
                  alt={m.nome}
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: m.photoPos,
                  }}
                />
              </div>

              {/* Texto abaixo do card */}
              <div className="mt-5 md:mt-6 text-center" style={{ maxWidth: 420, marginInline: 'auto' }}>
                <div
                  className="font-display uppercase"
                  style={{
                    color: '#F8F5EC',
                    fontSize: 'clamp(22px, 2.2vw, 26px)',
                    letterSpacing: '.04em',
                    lineHeight: 1,
                  }}
                >
                  {m.nome}
                </div>
                <div
                  className="text-[11px] uppercase mt-2"
                  style={{
                    color: 'var(--gold-light)',
                    letterSpacing: '.22em',
                  }}
                >
                  {m.cargo}
                </div>

                <div className="hairline mx-auto my-4" style={{ maxWidth: 60 }} />

                <p className="text-[14px] leading-[1.65] text-[var(--gray)]">
                  {m.bio}
                </p>

                <div className="flex items-center justify-center gap-4 mt-4 text-[var(--gold-light)]">
                  <a
                    href={m.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram ${m.nome}`}
                    className="hover:text-[var(--warm)] transition"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn ${m.nome}`}
                    className="hover:text-[var(--warm)] transition"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
