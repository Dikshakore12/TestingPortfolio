import { FormEvent, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, CheckCircle2, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { Reveal, Section, hoverLift } from './ui'
import { Magnetic } from './interactions'

// TO SEND REAL EMAILS: replace the mailto fallback in `submit` with a fetch() to Formspree/EmailJS/your backend.
export function Contact() {
  const [err, setErr] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'loading') return
    const form = e.currentTarget
    const f = new FormData(form)
    const name = String(f.get('name') || '').trim()
    const email = String(f.get('email') || '').trim()
    const subject = String(f.get('subject') || '').trim()
    const msg = String(f.get('message') || '').trim()
    const er: Record<string, string> = {}
    
    if (!name) er.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(email)) er.email = 'Enter a valid email address.'
    if (!subject) er.subject = 'Enter a subject.'
    if (msg.length < 10) er.message = 'Write at least 10 characters.'
    
    setErr(er)
    if (Object.keys(er).length) return
    
    setStatus('loading')
    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
      if (!endpoint) throw new Error('Formspree endpoint not configured')
      
      const res = await fetch(endpoint, {
        method: 'POST',
        body: f,
        headers: { Accept: 'application/json' }
      })
      
      if (!res.ok) throw new Error('Failed to send')
      
      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
    }
  }
  
  const inp = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 transition-all duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 focus:-translate-y-0.5 focus:shadow-[0_4px_20px_-5px_rgba(167,139,250,0.3)]'
  const links = [{ I: Mail, t: profile.email, h: `mailto:${profile.email}` }, { I: Linkedin, t: 'linkedin.com/in/dikshakore21', h: profile.linkedin }, { I: Github, t: 'github.com/Dikshakore12', h: profile.github }]
  
  return (
    <Section id="contact" title="Let's build better software" sub="Open to entry-level QA Engineer and Software Tester roles.">
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal><div className="space-y-3">
          {links.map(({ I, t, h }) => <motion.a variants={hoverLift} initial="rest" whileHover="hover" key={t} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel={h.startsWith('http') ? 'noopener noreferrer' : undefined} className="glass flex items-center gap-3 p-4 transition-colors hover:border-accent/50"><I className="text-accent" size={20} />{t}</motion.a>)}
          <p className="glass flex items-center gap-3 p-4"><MapPin className="text-accent" size={20} />{profile.location}</p></div></Reveal>
        <Reveal delay={0.1}><form onSubmit={submit} noValidate className="glass space-y-4 p-6">
          {(['name', 'email', 'subject', 'message'] as const).map(k => <motion.div key={k} layout><label htmlFor={k} className="mb-1 block text-sm capitalize text-zinc-300">{k}</label>
            {k === 'message' ? <textarea id={k} name={k} rows={4} className={inp} aria-invalid={!!err[k]} /> : <input id={k} name={k} type={k === 'email' ? 'email' : 'text'} className={inp} aria-invalid={!!err[k]} />}
            {err[k] && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-1 text-sm text-red-400">{err[k]}</motion.p>}</motion.div>)}
          <div className="flex flex-col gap-3 sm:flex-row pt-2">
            <Magnetic>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" disabled={status === 'loading'} className="btn btn-primary w-full justify-center disabled:opacity-50">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </Magnetic>
            <Magnetic>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={`mailto:${profile.email}`} className="btn btn-ghost w-full justify-center text-center">
                Email Me Directly
              </motion.a>
            </Magnetic>
          </div>
          <AnimatePresence mode="wait">
            {status === 'success' && <motion.p initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} className="flex items-start gap-2 rounded-lg bg-green-500/10 p-3 text-sm text-green-400" role="status"><CheckCircle2 size={16} className="mt-0.5 shrink-0" />Message sent successfully! I'll be in touch soon.</motion.p>}
            {status === 'error' && <motion.p initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} className="flex items-start gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400" role="status"><CheckCircle2 size={16} className="mt-0.5 shrink-0" />Failed to send message. Please try emailing directly.</motion.p>}
          </AnimatePresence>
        </form></Reveal>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <Reveal>
      <footer className="border-t border-white/10 px-5 py-8 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-zinc-500 relative z-10">
          <p>© 2026 Diksha Kore · QA Engineer | Software Tester</p>
          <div className="flex gap-6">{[{l: 'LinkedIn', h: profile.linkedin}, {l: 'GitHub', h: profile.github}, {l: 'Email', h: `mailto:${profile.email}`}].map(x => <motion.a key={x.l} href={x.h} whileHover={{ y: -2, color: 'white' }} className="transition-colors">{x.l}</motion.a>)}</div>
        </div>
      </footer>
    </Reveal>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.8 }} className="fixed bottom-5 right-5 z-40">
          <Magnetic>
            <a href="#home" aria-label="Back to top" className="grid h-12 w-12 place-items-center rounded-full bg-accent text-ink shadow-[0_0_20px_rgba(167,139,250,0.5)] transition-colors hover:bg-sky-400">
              <ArrowUp size={20} />
            </a>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
