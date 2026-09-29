import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { nav, profile } from '../data/portfolioData'
import { Magnetic } from './interactions'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false), [active, setActive] = useState('home')
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(n => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])
  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo Left */}
        <a href="#home" className="font-display text-2xl font-bold text-white tracking-tight flex items-center">
          {'Diksha Kore'.split('').map((char, i) => (
             <motion.span key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 + i * 0.05, duration: 0.3 }}>
               {char === ' ' ? '\u00A0' : char}
             </motion.span>
           ))}
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="text-accent">.</motion.span>
        </a>
        
        {/* Nav Links Center (Pill) */}
        <ul className={`hidden items-center gap-1 lg:flex transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-[0_10px_30px_rgba(212,175,55,0.1)]' : 'bg-transparent p-1.5'}`}>
          {nav.map(n => { const id = n.toLowerCase(); return (
            <li key={n}><a href={`#${id}`} className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${active === id ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>
              {active === id && <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-full bg-white/10 border border-white/5" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}{n}</a></li>) })}
        </ul>
        <div className="flex items-center gap-2">
          <Magnetic>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={profile.resume} download className="btn btn-primary !px-4 !py-2"><Download size={16} /><span className="hidden sm:inline">Download Resume</span><span className="sm:hidden">Resume</span></motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(212,175,55,0.4)' }} whileTap={{ scale: 0.95 }} href="#contact" className="btn border border-white/10 hover:border-champagne/50 text-white !px-4 !py-2 hidden sm:flex transition-all">Hire Me</motion.a>
          </Magnetic>
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg p-2 text-white lg:hidden">{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence>{open && (
        <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden bg-ink/95 px-5 backdrop-blur-xl lg:hidden">
          {nav.map((n, i) => <motion.li key={n} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }}>
            <a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className={`block border-b border-white/5 py-3 ${active === n.toLowerCase() ? 'text-accent' : 'text-zinc-300'}`}>{n}</a></motion.li>)}
        </motion.ul>)}</AnimatePresence>
    </motion.header>
  )
}
