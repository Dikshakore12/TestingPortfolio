import { useState, useEffect } from 'react'
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Approach, Experience, Projects, Certifications, Education } from './components/Sections'
import { Contact, Footer, BackToTop } from './components/Contact'
import { Magnetic } from './components/interactions'
import { Preloader } from './components/ui'
import { Code2, Terminal, Cpu, Network } from 'lucide-react'

// Advanced Background with AI Testing Video & Floating Tech Elements
function TechBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-ink">
      {/* Background Video (Scaled up to crop out edge logos) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-[1.2] opacity-40"
        src="/tester-ai-bg.mp4"
      />
      
      {/* Dark & Gradient Overlay for readability (Keeps content readable while video is clear) */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-ink/90" />

      {/* Scanning Laser Line (AI Testing Scanner) */}
      <motion.div
        animate={{ y: ['-10%', '110%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-x-0 top-0 h-32 w-full bg-gradient-to-b from-transparent to-accent/20 border-b border-accent/50 opacity-30"
      />

      {/* Floating Tech / AI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute left-[10%] top-[20%] text-accent"><Code2 size={40} /></motion.div>
        <motion.div animate={{ y: [0, 30, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute right-[15%] top-[15%] text-sky-400"><Cpu size={50} /></motion.div>
        <motion.div animate={{ y: [0, -40, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 5, repeat: Infinity }} className="absolute left-[20%] bottom-[30%] text-fuchsia-400"><Network size={60} /></motion.div>
        <motion.div animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 7, repeat: Infinity }} className="absolute right-[10%] bottom-[20%] text-accent"><Terminal size={40} /></motion.div>
        
        {/* Floating Code Snippets */}
        <motion.div animate={{ y: '100vh' }} initial={{ y: '-10vh' }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute left-[5%] text-xs font-mono text-zinc-500/50">{'<System.Test status="Running" />'}</motion.div>
        <motion.div animate={{ y: '-10vh' }} initial={{ y: '100vh' }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute right-[5%] text-xs font-mono text-zinc-500/50">{'assert(AI.analyze(code) === "PASS")'}</motion.div>
      </div>
    </div>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll(), w = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <Preloader />
      
      {/* Advanced AI Testing Video Background */}
      <TechBackground />

      
      <motion.div style={{ scaleX: w }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-copper via-accent to-champagne shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
      
      {!loading && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}>
          <Navbar />
          <main><Hero /><About /><Skills /><Approach /><Experience /><Projects /><Certifications /><Education /><Contact /></main>
          <Footer /><BackToTop />
        </motion.div>
      )}
    </MotionConfig>
  )
}
