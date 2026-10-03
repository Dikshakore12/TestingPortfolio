import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

export const hoverLift = {
  rest: { y: 0, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
  hover: { 
    y: -4, 
    boxShadow: '0px 10px 30px -10px rgba(212, 175, 55, 0.25)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <div style={{ perspective: '1200px' }} className={className}>
    <motion.div 
      initial={{ opacity: 0, y: 40, scale: 0.95, rotateX: -8 }} 
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} 
      viewport={{ once: true, margin: '-50px' }} 
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  </div>
)

export const Section = ({ id, title, sub, children }: { id: string; title: string; sub?: string; children: ReactNode }) => (
  <section id={id} className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
    <Reveal className="flex flex-col items-start">
      <motion.h2 
        initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, color: '#FF1493', textShadow: '0 0 25px rgba(255,20,147,0.5)' }}
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white origin-left cursor-default transition-colors duration-300"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 max-w-xl text-lg text-zinc-400 font-medium"
        >
          {sub}
        </motion.p>
      )}
      <motion.div 
        className="mt-6 h-1 rounded-full bg-gradient-to-r from-accent to-copper shadow-[0_0_10px_rgba(255,20,147,0.5)]" 
        initial={{ width: 0 }} 
        whileInView={{ width: 120 }} 
        whileHover={{ width: 200 }}
        viewport={{ once: true, margin: '-50px' }} 
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }} 
      />
    </Reveal>
    <div className="mt-16">{children}</div>
  </section>
)

import { useState, useEffect } from 'react'

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const interval = setInterval(() => {
      start += Math.floor(Math.random() * 12) + 3
      if (start > 100) start = 100
      setCount(start)
      if (start === 100) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink pointer-events-none"
    >
      <div className="flex flex-col items-center">
         <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="font-mono text-5xl font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
           {count}<span className="text-accent">%</span>
         </motion.span>
         <div className="mt-8 flex text-xl font-display font-bold text-white tracking-widest uppercase">
           {'DIKSHA KORE.'.split('').map((char, i) => (
             <motion.span key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}>
               {char === ' ' ? '\u00A0' : char}
             </motion.span>
           ))}
         </div>
         <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-xs tracking-[0.4em] text-accent mt-4 uppercase animate-pulse">Initializing System...</motion.span>
         <div className="mt-6 h-[2px] w-64 bg-white/10 relative overflow-hidden rounded-full">
            <motion.div className="absolute inset-y-0 left-0 bg-accent shadow-[0_0_10px_rgba(212,175,55,0.8)]" style={{ width: `${count}%` }} />
         </div>
      </div>
      
      {/* Cinematic scanning line during preloader */}
      <motion.div animate={{ y: ['-10%', '110%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="absolute inset-x-0 top-0 h-32 w-full bg-gradient-to-b from-transparent to-accent/20 border-b border-accent opacity-50" />
    </motion.div>
  )
}
