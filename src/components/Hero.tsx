import { motion } from 'framer-motion'
import { ArrowDown, Bug, CheckCircle2, Download, Repeat, Send, Workflow } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { Magnetic, TiltCard } from './interactions'

const chips = [
  { t: 'Test Passed', I: CheckCircle2, c: 'left-0 top-10', color: 'text-success', d: 0 }, { t: 'Bug Found', I: Bug, c: 'right-0 top-24', color: 'text-error', d: 0.8 },
  { t: 'API Tested', I: Send, c: 'left-2 bottom-24', color: 'text-accent', d: 1.4 }, { t: 'Regression', I: Repeat, c: 'right-2 bottom-8', color: 'text-copper', d: 0.4 },
]

export default function Hero() {
  const words = profile.headline.split(' ')
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <motion.div aria-hidden className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 14, repeat: Infinity }} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />QA Engineer • Software Tester</motion.p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-6xl">
            {words.map((w, i) => <span key={i} className={`inline-block overflow-hidden pb-1 align-bottom ${i === 0 || i === 1 ? 'text-gradient' : ''}`}><motion.span className="inline-block pr-3" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.35 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span></span>)}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-6 max-w-xl text-lg text-zinc-400">{profile.summary}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <motion.a href="#experience" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-primary"><Workflow size={16} />View My Work</motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a href={profile.resume} download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-ghost"><Download size={16} />Download Resume</motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-2 text-sm text-zinc-300 underline decoration-accent underline-offset-4 hover:text-white transition-colors">Let's Work Together</motion.a>
            </Magnetic>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.5 }} className="relative mx-auto w-full max-w-sm">
          <TiltCard>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative aspect-square group">
              {/* Spinning gradient rings */}
              <div className="ring absolute inset-0 rounded-full blur-[4px] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="ring absolute inset-0 rounded-full blur-[1px] opacity-100" style={{ animationDirection: 'reverse', animationDuration: '10s' }} />
              
              {/* Dashed tech border */}
              <motion.svg animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="absolute inset-[-12px] h-[calc(100%+24px)] w-[calc(100%+24px)] text-accent/50 pointer-events-none" viewBox="0 0 100 100">
                 <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                 <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 6" opacity="0.5" />
              </motion.svg>
              
              <div className="absolute inset-[3px] rounded-full bg-ink overflow-hidden border border-accent/20">
                <img src={profile.photo} alt="Portrait of Diksha Kore, QA Engineer" width={800} height={800} className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110" />
              </div>
              
              {/* Interactive glow inside */}
              <div className="absolute inset-[3px] rounded-full shadow-[inset_0_0_50px_rgba(212,175,55,0.4)] pointer-events-none" />
            </motion.div>
          </TiltCard>
          {chips.map(({ t, I, c, d }) => (
            <motion.div key={t} className={`absolute ${c} z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/80 backdrop-blur-md px-4 py-2 text-sm font-medium text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default transition-colors hover:border-accent hover:bg-black`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }} whileHover={{ scale: 1.05, y: -2 }} transition={{ opacity: { delay: 1.4 + d }, scale: { delay: 1.4 + d }, y: { duration: 5, repeat: Infinity, delay: d } }}>
              <I size={16} className="text-accent" />{t}</motion.div>))}
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 sm:block"><motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="block"><ArrowDown size={20} /></motion.span></a>
    </section>
  )
}
