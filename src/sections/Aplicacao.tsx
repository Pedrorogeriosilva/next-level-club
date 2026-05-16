import { useState } from 'react'
import { GoldStops } from '../components/GoldStops'
import { WhatsappIcon } from '../components/Icons'

interface FormData {
  nome: string
  whatsapp: string
  email: string
  empresa: string
  segmento: string
  faturamento: string
  desafio: string
  social: string
}

const initialData: FormData = {
  nome: '', whatsapp: '', email: '', empresa: '',
  segmento: '', faturamento: '', desafio: '', social: '',
}

const wppText = 'Olá! Tenho interesse na Mentoria Next Level Club e gostaria de conversar pelo WhatsApp.'
const wppUrl = 'https://wa.me/?text=' + encodeURIComponent(wppText)
const formEndpoint = 'https://api.web3forms.com/submit'
const web3FormsKey = '5c40597a-4676-4550-8d14-d231dc02a3c2'

export function Aplicacao({ formRef }: { formRef: React.RefObject<HTMLElement> }) {
  const [data, setData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }))

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!data.nome.trim()) e.nome = 'Informe seu nome'
    if (!/^[+\d\s\-().]{8,}$/.test(data.whatsapp.trim())) e.whatsapp = 'WhatsApp inválido'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = 'E-mail inválido'
    if (!data.empresa.trim()) e.empresa = 'Informe sua empresa'
    if (!data.segmento.trim()) e.segmento = 'Informe o segmento'
    if (!data.faturamento) e.faturamento = 'Selecione uma faixa'
    if (data.desafio.trim().length < 12) e.desafio = 'Conte um pouco mais (mín. 12 caracteres)'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setSubmitError('')

    const payload = new FormData()
    payload.append('access_key', web3FormsKey)
    payload.append('subject', `Nova aplicação — ${data.nome} (${data.empresa})`)
    payload.append('from_name', 'Next Level Club')
    payload.append('replyto', data.email)
    payload.append('nome', data.nome)
    payload.append('whatsapp', data.whatsapp)
    payload.append('email', data.email)
    payload.append('empresa', data.empresa)
    payload.append('segmento', data.segmento)
    payload.append('faturamento', data.faturamento)
    payload.append('desafio', data.desafio)
    payload.append('social', data.social || '—')
    payload.append('botcheck', '')

    try {
      const res = await fetch(formEndpoint, { method: 'POST', body: payload })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.success) {
        throw new Error(json.message || 'Falha no envio')
      }
      setSent(true)
      setTimeout(() => {
        const el = document.getElementById('aplicacao-result')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Não foi possível enviar agora.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="aplicacao" ref={formRef as React.RefObject<HTMLElement>} className="relative py-24 md:py-32" style={{ background: 'linear-gradient(180deg,var(--deep) 0%,var(--night) 100%)' }}>
      <div className="noise" />
      <div className="gold-glow" style={{ width: 500, height: 500, top: '10%', right: '-10%' }} />
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-in">
          <div className="section-tag mb-6 mx-auto" style={{ display: 'inline-flex' }}><span className="dot"></span>Processo seletivo</div>
          <h2 className="font-display uppercase mb-6" style={{ fontSize: 'clamp(36px, 5.2vw, 60px)', lineHeight: 1 }}>
            <span style={{ color: '#F8F5EC' }}>Aplicação para a </span>
            <span className="gold-text">Mentoria Next Level Club.</span>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.65] text-[var(--gray)]">
            As vagas são limitadas e passam por análise. Preencha o formulário para que nossa equipe entenda o momento do seu negócio.
          </p>
        </div>

        {sent ? (
          <div id="aplicacao-result" className="card card-corner p-10 md:p-14 text-center fade-in in" style={{ background: 'linear-gradient(135deg,rgba(212,175,55,.12),rgba(2,43,32,.95))' }}>
            <div className="mx-auto mb-6" style={{ width: 80, height: 80 }}>
              <svg viewBox="0 0 80 80" fill="none">
                <defs><linearGradient id="okG" x1="0" y1="0" x2="1" y2="1"><GoldStops /></linearGradient></defs>
                <circle cx="40" cy="40" r="38" stroke="url(#okG)" strokeWidth="1.4" />
                <path d="M24 41l11 11 21-25" stroke="url(#okG)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <h3 className="font-display uppercase text-[28px] md:text-[36px] gold-text mb-4">Aplicação recebida.</h3>
            <p className="text-[16px] md:text-[17px] leading-[1.65] text-[var(--warm)] max-w-xl mx-auto">
              Nossa equipe irá analisar suas informações e entrar em contato caso o seu perfil esteja alinhado com a mentoria.
            </p>
            <a href={wppUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8 inline-flex"><WhatsappIcon /> Acompanhar pelo WhatsApp</a>
          </div>
        ) : (
          <form onSubmit={submit} className="card card-corner p-7 md:p-12 fade-in" noValidate>
            <div className="grid md:grid-cols-2 gap-5">
              {([
                { k: 'nome', label: 'Nome', placeholder: 'Seu nome completo', type: 'text' },
                { k: 'whatsapp', label: 'WhatsApp', placeholder: '(11) 99999-9999', type: 'text' },
                { k: 'email', label: 'E-mail', placeholder: 'voce@empresa.com', type: 'email' },
                { k: 'empresa', label: 'Nome da empresa', placeholder: 'Razão social ou marca', type: 'text' },
                { k: 'segmento', label: 'Segmento', placeholder: 'Ex.: Varejo, Serviço, Indústria…', type: 'text' },
              ] as const).map(({ k, label, placeholder, type }) => (
                <div key={k} className={'field ' + (errors[k] ? 'error' : '')}>
                  <label>{label}</label>
                  <input type={type} value={data[k]} onChange={set(k)} placeholder={placeholder} />
                  {errors[k] && <div className="err-msg">{errors[k]}</div>}
                </div>
              ))}

              <div className={'field ' + (errors.faturamento ? 'error' : '')}>
                <label>Faturamento mensal aproximado</label>
                <select value={data.faturamento} onChange={set('faturamento')}>
                  <option value="">Selecione…</option>
                  <option>Até R$ 50 mil/mês</option>
                  <option>R$ 50 mil – R$ 100 mil/mês</option>
                  <option>R$ 100 mil – R$ 300 mil/mês</option>
                  <option>R$ 300 mil – R$ 1 mi/mês</option>
                  <option>Acima de R$ 1 mi/mês</option>
                </select>
                {errors.faturamento && <div className="err-msg">{errors.faturamento}</div>}
              </div>

              <div className={'field md:col-span-2 ' + (errors.desafio ? 'error' : '')}>
                <label>Qual é o maior desafio do seu negócio hoje?</label>
                <textarea rows={4} value={data.desafio} onChange={set('desafio')} placeholder="Descreva com objetividade o momento atual e o que está travado." />
                {errors.desafio && <div className="err-msg">{errors.desafio}</div>}
              </div>

              <div className="field md:col-span-2">
                <label>Instagram ou LinkedIn (opcional)</label>
                <input value={data.social} onChange={set('social')} placeholder="@seuperfil ou linkedin.com/in/…" />
              </div>
            </div>

            <div className="hairline my-8"></div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
              <p className="text-[12px] uppercase tracking-[.18em] text-[var(--muted)]">
                Vagas limitadas · Sujeito à análise
              </p>
              <div className="flex flex-col md:flex-row gap-3">
                <a href={wppUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsappIcon /> Prefiro falar pelo WhatsApp</a>
                <button type="submit" className="btn-gold" disabled={submitting} style={{ opacity: submitting ? 0.72 : 1 }}>
                  {submitting ? 'Enviando…' : 'Enviar aplicação →'}
                </button>
              </div>
            </div>
            {submitError && (
              <p className="mt-5 text-[13px] leading-[1.5] text-[#F0A7A7] text-right">
                {submitError}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
