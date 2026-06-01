import { useEffect, useRef } from 'react'

export type LegalDoc = 'privacidade' | 'termos'

interface LegalModalProps {
  doc: LegalDoc | null
  onClose: () => void
}

export function LegalModal({ doc, onClose }: LegalModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!doc) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeBtnRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [doc, onClose])

  if (!doc) return null

  const title = doc === 'privacidade' ? 'Política de Privacidade' : 'Termos de Uso'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: 'rgba(1,11,9,.78)',
        backdropFilter: 'blur(8px)',
        padding: '24px 16px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full overflow-hidden"
        style={{
          maxWidth: 820,
          maxHeight: 'calc(100vh - 48px)',
          background: 'linear-gradient(180deg, var(--night) 0%, var(--deep) 100%)',
          border: '1px solid rgba(212,175,55,.35)',
          borderRadius: 8,
          boxShadow: '0 30px 80px rgba(0,0,0,.7), inset 0 1px 0 rgba(245,215,122,.08)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 md:px-10 py-5"
          style={{ borderBottom: '1px solid rgba(212,175,55,.22)', background: 'rgba(1,11,9,.6)' }}
        >
          <div>
            <div
              className="text-[10px] uppercase mb-1.5"
              style={{ color: 'var(--gold-light)', letterSpacing: '.28em' }}
            >
              Next Level Club
            </div>
            <h2
              className="font-display uppercase gold-text"
              style={{ fontSize: 'clamp(20px, 2.6vw, 26px)', letterSpacing: '.04em', lineHeight: 1 }}
            >
              {title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Fechar"
            style={{
              width: 40,
              height: 40,
              borderRadius: 6,
              border: '1px solid rgba(212,175,55,.4)',
              background: 'transparent',
              color: 'var(--gold-light)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all .2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(212,175,55,.08)'
              e.currentTarget.style.color = 'var(--warm)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--gold-light)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Conteúdo */}
        <div
          className="px-6 md:px-10 py-7 md:py-9 legal-body"
          style={{
            overflowY: 'auto',
            color: 'var(--gray)',
            fontSize: 14.5,
            lineHeight: 1.7,
          }}
        >
          {doc === 'privacidade' ? <Privacidade /> : <Termos />}

          <div className="hairline my-8" />
          <p className="text-[12px] uppercase tracking-[.2em] text-[var(--muted)]">
            Última atualização: maio de 2026
          </p>
        </div>
      </div>
    </div>
  )
}

function H({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-display uppercase mt-7 mb-3"
      style={{ color: '#F8F5EC', fontSize: 17, letterSpacing: '.06em' }}
    >
      {children}
    </h3>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-3">{children}</p>
}

function Privacidade() {
  return (
    <>
      <P>
        Esta Política de Privacidade descreve como o <strong>Next Level Club</strong>, operado pelo
        Lopes Group, coleta, utiliza, armazena e protege as informações pessoais fornecidas por
        candidatos e visitantes deste site, em conformidade com a Lei Geral de Proteção de Dados
        Pessoais (LGPD — Lei nº 13.709/2018).
      </P>

      <H>1. Dados que coletamos</H>
      <P>
        Coletamos as informações que você preenche voluntariamente no formulário de aplicação,
        incluindo: nome completo, e-mail, telefone/WhatsApp, informações sobre sua empresa,
        faturamento aproximado, segmento de atuação e demais respostas referentes ao seu momento de
        negócio.
      </P>
      <P>
        Coletamos também dados de navegação anônimos (páginas visitadas, dispositivo, origem do
        acesso) por meio de cookies e ferramentas de analytics, com a única finalidade de melhorar a
        experiência no site.
      </P>

      <H>2. Finalidade do tratamento</H>
      <P>
        Os dados pessoais são utilizados exclusivamente para: (i) avaliação da candidatura à
        mentoria; (ii) contato pela equipe das mentoras para retorno do processo seletivo; (iii)
        envio de comunicações relacionadas ao programa; e (iv) cumprimento de obrigações legais e
        regulatórias.
      </P>

      <H>3. Compartilhamento</H>
      <P>
        Não vendemos, alugamos ou comercializamos seus dados. Eventualmente compartilhamos
        informações apenas com prestadores de serviço estritamente necessários à operação (e-mail
        marketing, hospedagem, CRM), todos sujeitos a obrigações de confidencialidade.
      </P>

      <H>4. Armazenamento e segurança</H>
      <P>
        Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não
        autorizados, perda ou alteração. Os dados são mantidos pelo tempo necessário ao cumprimento
        das finalidades acima ou por prazo legal aplicável.
      </P>

      <H>5. Seus direitos</H>
      <P>
        Você pode, a qualquer momento, solicitar acesso, correção, anonimização, portabilidade ou
        exclusão dos seus dados, bem como revogar o consentimento, entrando em contato pelo e-mail
        de atendimento abaixo.
      </P>

      <H>6. Cookies</H>
      <P>
        Este site pode utilizar cookies para autenticação, segurança e análise estatística. Você
        pode desabilitar os cookies nas configurações do seu navegador, ciente de que algumas
        funcionalidades podem ser afetadas.
      </P>

      <H>7. Contato</H>
      <P>
        Dúvidas sobre o tratamento dos seus dados podem ser encaminhadas para o canal oficial do
        Lopes Group via WhatsApp ou e-mail informados na seção de contato deste site.
      </P>
    </>
  )
}

function Termos() {
  return (
    <>
      <P>
        Ao acessar e utilizar este site e os serviços do <strong>Next Level Club</strong>, programa
        de mentoria operado pelo Lopes Group, você concorda com os termos descritos abaixo. Caso não
        concorde com algum item, recomendamos que não utilize a plataforma.
      </P>

      <H>1. Objeto</H>
      <P>
        O Next Level Club é um programa de mentoria empresarial voltado a empresários com negócios
        em operação, que oferece acompanhamento estratégico, diagnóstico individual e encontros
        presenciais conduzidos pelas mentoras Ro Lopes e Ale Lopes.
      </P>

      <H>2. Processo seletivo</H>
      <P>
        O ingresso no programa é feito mediante candidatura por meio do formulário disponível neste
        site. A análise é realizada pela equipe das mentoras e o aceite na turma fica condicionado
        ao perfil do candidato e à disponibilidade de vagas. O preenchimento do formulário não
        garante, por si só, a aprovação na mentoria.
      </P>

      <H>3. Investimento e condições comerciais</H>
      <P>
        Valores, prazos de pagamento, política de reembolso e demais condições comerciais serão
        apresentados individualmente aos candidatos aprovados, formalizados em contrato específico
        assinado entre as partes antes do início do programa.
      </P>

      <H>4. Responsabilidades</H>
      <P>
        O mentorado se compromete a participar ativamente dos encontros, executar as orientações
        propostas e fornecer informações verídicas sobre sua operação durante o diagnóstico. As
        mentoras se comprometem com o sigilo absoluto sobre as informações compartilhadas.
      </P>
      <P>
        A mentoria oferece direcionamento estratégico e método, mas <em>não</em> garante resultados
        específicos de faturamento ou crescimento, uma vez que os resultados dependem diretamente da
        execução, do contexto e das decisões do empresário.
      </P>

      <H>5. Propriedade intelectual</H>
      <P>
        Todo o conteúdo, método, materiais, marca e elementos visuais utilizados no Next Level Club
        são de propriedade do Lopes Group. É vedada a reprodução, cópia, distribuição ou utilização
        comercial sem autorização prévia e expressa.
      </P>

      <H>6. Confidencialidade</H>
      <P>
        Informações compartilhadas em encontros, grupos privados ou conversas individuais são
        consideradas confidenciais. O mentorado se compromete a não divulgar conteúdo de outros
        participantes, casos discutidos ou materiais exclusivos do programa.
      </P>

      <H>7. Alterações</H>
      <P>
        Estes Termos podem ser atualizados periodicamente. A versão vigente estará sempre disponível
        nesta página, e o uso continuado dos serviços após a publicação implica concordância com as
        alterações.
      </P>

      <H>8. Foro</H>
      <P>
        Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias
        decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
      </P>
    </>
  )
}
