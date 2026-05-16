import { useEffect, useRef, useState } from 'react'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Problema } from './sections/Problema'
import { FalsaIlusao } from './sections/FalsaIlusao'
import { Metodo } from './sections/Metodo'
import { Transformacao } from './sections/Transformacao'
import { ComoFunciona } from './sections/ComoFunciona'
import { ParaQuem } from './sections/ParaQuem'
import { Mentoras } from './sections/Mentoras'
import { Aplicacao } from './sections/Aplicacao'
import { FAQ } from './sections/FAQ'
import { FinalCTA } from './sections/FinalCTA'
import { Footer } from './sections/Footer'
import { GoldStops } from './components/GoldStops'

function StickyMobileCTA({ onApply }: { onApply: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-sticky-hide]'))
    if (targets.length === 0) {
      setVisible(true)
      return
    }
    const visibleSet = new Set<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleSet.add(entry.target)
          else visibleSet.delete(entry.target)
        }
        setVisible(visibleSet.size === 0)
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className="only-mobile fixed bottom-0 left-0 right-0 z-40 mobile-cta"
      style={{
        padding: '12px 16px calc(12px + env(safe-area-inset-bottom, 0px))',
        background: 'linear-gradient(180deg,rgba(2,15,11,.85),rgba(2,15,11,.98))',
        borderTop: '1px solid rgba(212,175,55,.3)',
        backdropFilter: 'blur(10px)',
        transform: visible ? 'translateY(0)' : 'translateY(110%)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'transform .35s cubic-bezier(.22,1,.36,1), opacity .25s ease',
      }}
    >
      <button onClick={onApply} className="btn-gold w-full" style={{ minHeight: 52 }} tabIndex={visible ? 0 : -1}>
        Aplicar para a mentoria →
      </button>
    </div>
  )
}

export default function App() {
  const formRef = useRef<HTMLElement>(null)

  const scrollToApply = () => {
    const el = document.getElementById('aplicacao')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.fade-in')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="globalGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <GoldStops />
          </linearGradient>
        </defs>
      </svg>
      <Header onApply={scrollToApply} />
      <main>
        <Hero onApply={scrollToApply} />
        <Problema />
        <FalsaIlusao />
        <Metodo />
        <Transformacao />
        <ComoFunciona />
        <ParaQuem />
        <Mentoras />
        <Aplicacao formRef={formRef} />
        <FAQ />
        <FinalCTA onApply={scrollToApply} />
        <Footer onApply={scrollToApply} />
      </main>
      <StickyMobileCTA onApply={scrollToApply} />
    </>
  )
}
