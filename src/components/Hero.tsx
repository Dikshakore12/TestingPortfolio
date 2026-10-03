import { motion } from 'framer-motion'
import { ArrowDown, Bug, CheckCircle2, Download, Repeat, Send, Workflow } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { Magnetic } from './interactions'

const chips = [
  { t: 'Test Passed', I: CheckCircle2, c: 'left-0 top-10', color: 'text-success', d: 0 }, { t: 'Bug Found', I: Bug, c: 'right-0 top-24', color: 'text-error', d: 0.8 },
  { t: 'API Tested', I: Send, c: 'left-2 bottom-32', color: 'text-accent', d: 1.4 }, { t: 'Regression', I: Repeat, c: 'right-2 bottom-12', color: 'text-copper', d: 0.4 },
]

export default function Hero() {
  const names = profile.name.split(' ')
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 bg-ink">
      <div className="grid-bg absolute inset-0 z-10 pointer-events-none" aria-hidden />
      <motion.div aria-hidden className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[120px] z-0" animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 14, repeat: Infinity }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 lg:grid-cols-[1.1fr_1fr]">
        
        <div className="flex flex-col justify-center relative z-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-xl sm:text-2xl md:text-3xl italic text-zinc-300 mb-2"
          >
            Elevating Software Quality,
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }} 
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} 
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, textShadow: '0px 0px 20px rgba(212,175,55,0.4)' }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black uppercase text-white leading-[0.85] tracking-tighter origin-left cursor-default transition-all duration-300"
          >
            {names[0]}<br />{names[1]}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-2xl font-bold uppercase tracking-widest text-accent leading-relaxed"
          >
            {profile.roles.split('|')[0].trim()} &amp; {profile.roles.split('|')[1]?.trim() || 'QA Expert'}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-zinc-400">
            {profile.summary}
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Magnetic>
              <motion.a href="#experience" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-primary pointer-events-auto text-xs sm:text-sm px-4 sm:px-6"><Workflow size={16} />View My Work</motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a href={profile.resume} download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-ghost pointer-events-auto text-xs sm:text-sm px-4 sm:px-6"><Download size={16} />Download Resume</motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-2 text-xs sm:text-sm text-zinc-300 underline decoration-accent underline-offset-4 hover:text-white transition-colors pointer-events-auto">Let's Work Together</motion.a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }} className="relative mx-auto w-full max-w-lg mt-12 lg:mt-0 flex justify-center lg:justify-start items-center h-[60vh] md:h-[75vh] z-0 lg:-translate-x-12 lg:-translate-y-24">
          
          {/* Circular Badge - moved below API tested */}
          <div className="absolute -left-4 md:-left-8 bottom-0 z-30 flex h-28 w-28 items-center justify-center rounded-full pointer-events-none">
             <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
               <svg viewBox="0 0 100 100" className="h-full w-full">
                 <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                 <text className="text-[10.5px] font-bold tracking-[0.18em] text-zinc-300" fill="currentColor">
                   <textPath href="#curve">BUILDING BETTER SOFTWARE THROUGH BETTER TESTING •</textPath>
                 </text>
               </svg>
             </div>
             <div className="text-accent bg-ink/80 p-3 rounded-full border border-white/10 backdrop-blur-md">
               <Send size={20} />
             </div>
          </div>
          
          <motion.div 
            className="relative h-full w-full flex justify-center"
          >
            <img 
              src={profile.photo} 
              alt="Portrait of Diksha Kore" 
              style={{ 
                WebkitMaskImage: 'radial-gradient(ellipse 45% 50% at 50% 50%, black 65%, transparent 100%)', 
                maskImage: 'radial-gradient(ellipse 45% 50% at 50% 50%, black 65%, transparent 100%)' 
              }}
              className="h-full w-[120%] max-w-[120%] object-cover object-center mix-blend-lighten transform scale-110 filter contrast-125 brightness-90 saturate-110" 
            />
          </motion.div>
          
          {chips.map(({ t, I, c, d }) => (
            <motion.div key={t} className={`absolute ${c} z-30 flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-black/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default transition-colors hover:border-accent hover:bg-black`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }} whileHover={{ scale: 1.05, y: -2 }} transition={{ opacity: { delay: 1.4 + d }, scale: { delay: 1.4 + d }, y: { duration: 5, repeat: Infinity, delay: d } }}>
              <I size={14} className="text-accent sm:w-4 sm:h-4" />{t}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 sm:block"><motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="block"><ArrowDown size={20} /></motion.span></a>
    </section>
  )
}
