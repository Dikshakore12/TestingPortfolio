import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Award, ChevronDown, ExternalLink, GraduationCap, ClipboardList, CheckSquare, Activity, ShieldCheck, TestTube2, Eye, Layout, TestTube, Bug, Database, FileText, Code2 } from 'lucide-react'
import { SiPostman, SiJira, SiJavascript, SiPython, SiHtml5, SiCss, SiBootstrap, SiApachejmeter, SiGithub } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { certs, coverage, education, experience, profile, projects, skills, stats, workflow } from '../data/portfolioData'
import { Reveal, Section, hoverLift } from './ui'
import { TiltCard } from './interactions'

const getSkillIcon = (name: string) => {
  const map: Record<string, { I: any, color: string }> = {
    'Manual Testing': { I: ClipboardList, color: 'text-zinc-300' },
    'Functional Testing': { I: CheckSquare, color: 'text-green-400' },
    'Regression Testing': { I: Activity, color: 'text-blue-400' },
    'Smoke Testing': { I: ShieldCheck, color: 'text-zinc-200' },
    'Sanity Testing': { I: TestTube2, color: 'text-purple-400' },
    'Exploratory Testing': { I: Eye, color: 'text-teal-400' },
    'UI Testing': { I: Layout, color: 'text-pink-400' },
    'Test Case Design': { I: TestTube, color: 'text-accent' },
    'Bug Reporting': { I: Bug, color: 'text-red-400' },
    'Postman': { I: SiPostman, color: 'text-[#FF6C37]' },
    'Apache JMeter': { I: SiApachejmeter, color: 'text-[#D22128]' },
    'Jira': { I: SiJira, color: 'text-[#0052CC]' },
    'Git/GitHub': { I: SiGithub, color: 'text-white' },
    'SQL': { I: Database, color: 'text-blue-300' }, 
    'MS Office': { I: FileText, color: 'text-blue-500' },
    'Java': { I: FaJava, color: 'text-[#f89820]' },
    'Python': { I: SiPython, color: 'text-[#3776AB]' },
    'HTML': { I: SiHtml5, color: 'text-[#E34F26]' },
    'CSS': { I: SiCss, color: 'text-[#1572B6]' },
    'JavaScript': { I: SiJavascript, color: 'text-[#F7DF1E]' },
    'Bootstrap': { I: SiBootstrap, color: 'text-[#7952B3]' }
  };
  return map[name] || { I: Code2, color: 'text-accent' };
}

export function About() {
  return (
    <Section id="about" title="About me" sub={profile.roles}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="max-w-prose leading-relaxed">
            <span className="text-base sm:text-lg font-semibold text-white block mb-2">{profile.summary}</span>
            <span className="text-sm sm:text-base font-normal text-zinc-400">{profile.about}</span>
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => <Reveal key={s.l} delay={i * 0.08}><motion.div variants={hoverLift} initial="rest" whileHover="hover" className="glass p-4 sm:p-5"><div className="font-display text-3xl sm:text-4xl font-bold text-white">{s.v}</div><div className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-zinc-400">{s.l}</div></motion.div></Reveal>)}
        </div>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills" sub="Tools and techniques from my QA internship and coursework.">
      <div className="mt-12 flex flex-col gap-12">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.06}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-1/3 shrink-0">
                <p className="text-sm font-bold text-accent tracking-widest uppercase mb-1">0{i + 1}</p>
                <h3 className="font-display text-2xl font-bold text-white uppercase">{g.group}</h3>
              </div>
              <div className="flex-1 flex flex-wrap gap-4">
                {g.items.map((s, j) => {
                  const { I, color } = getSkillIcon(s);
                  return (
                    <motion.div 
                      key={s} 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      whileInView={{ opacity: 1, scale: 1 }} 
                      viewport={{ once: true, margin: '-50px' }} 
                      transition={{ delay: 0.1 + j * 0.05 }}
                      whileHover={{ scale: 1.05, y: -4 }} 
                      className="flex items-center gap-4 bg-surface rounded-2xl px-6 py-4 border border-white/5 hover:border-accent/50 hover:bg-surface/90 transition-colors shadow-lg group cursor-default"
                    >
                      <I size={28} className={`${color} transition-transform group-hover:scale-110`} />
                      <span className="text-lg font-bold text-white tracking-wide">{s}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            {i !== skills.length - 1 && <div className="mt-12 h-px w-full bg-white/5" />}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Approach() {
  return (
    <Section id="approach" title="How I approach quality" sub="The path I follow from requirement to release.">
      <div className="grid gap-10 lg:grid-cols-2">
        <ol className="relative space-y-3">
          {workflow.map((w, i) => (
            <motion.li key={w} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="glass flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4">
              <span className="grid h-8 w-8 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full bg-accent/20 text-sm sm:text-base font-bold text-accent">{i + 1}</span><span className="text-sm sm:text-base font-medium text-white">{w}</span></motion.li>))}
        </ol>
        <Reveal><div className="glass p-5 sm:p-6" aria-label="Test coverage overview"><h3 className="font-display text-lg sm:text-xl font-semibold text-white">Testing coverage</h3>
          <p className="mt-1 sm:mt-2 text-sm text-zinc-400">Areas I have worked in on client platforms.</p>
          <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">{coverage.map((c, i) => (
            <div key={c.l}><div className="mb-2 flex justify-between text-sm sm:text-base font-medium"><span className="text-zinc-200">{c.l}</span><span className="text-accent">{c.s}</span></div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-accent to-champagne" initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 + i * 0.15 }} /></div></div>))}</div></div></Reveal>
      </div>
    </Section>
  )
}

export function Experience() {
  const [open, setOpen] = useState(0)
  return (
    <Section id="experience" title="Experience">
      <Reveal><h3 className="font-display text-xl sm:text-2xl font-bold text-white">{experience.role}, {experience.company}</h3><p className="mt-1 sm:mt-2 text-sm sm:text-base font-medium text-accent">{experience.period}</p></Reveal>
      <div className="relative mt-8 sm:mt-10 border-l border-white/10 pl-5 sm:pl-8">
        <motion.div className="absolute -left-px top-0 w-px origin-top bg-accent" initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1.4, ease: 'easeOut' }} />
        {experience.projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05} className="relative mb-5 sm:mb-6">
            <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: 0.2 + (i * 0.1), type: 'spring' }} className="absolute -left-[27px] top-7 h-4 w-4 rounded-full border-[3px] border-accent bg-ink sm:-left-[40px]" />
            <motion.div variants={hoverLift} initial="rest" whileHover="hover" className="glass overflow-hidden">
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-3 sm:gap-4 p-5 sm:p-6 text-left">
                <span><span className="block font-display text-lg sm:text-xl font-bold text-white">{p.name}</span><span className="mt-1 block text-xs sm:text-sm font-medium text-zinc-400">{p.sub}</span></span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }}><ChevronDown className="text-accent" size={20} /></motion.span></button>
              <AnimatePresence initial={false}>{open === i && (
                <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="space-y-3 sm:space-y-4 overflow-hidden px-5 sm:px-6 text-sm text-zinc-400">
                  {p.points.map(t => <li key={t} className="flex gap-2 sm:gap-3 leading-relaxed"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span>{t}</span></li>)}
                  {p.image && (
                    <motion.li initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }} className="mt-5 mb-2 overflow-hidden rounded-xl border border-white/10 relative group">
                      <div className="absolute inset-0 bg-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />
                      <img src={p.image} alt={`${p.name} preview`} className="w-full h-auto max-h-[300px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                    </motion.li>
                  )}
                  {p.link && (
                    <li className="mt-4 pb-2">
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost inline-flex items-center gap-2 text-sm transition-all hover:bg-white/10 hover:shadow-[0_0_15px_rgba(var(--accent),0.5)]">
                        <ExternalLink size={16} />
                        {p.name.includes('Virtual Try-On') ? 'Try Live Demo ↗' : 'View Live Website ↗'}
                      </a>
                    </li>
                  )}
                  <li className="h-2" />
                </motion.ul>)}</AnimatePresence>
            </motion.div>
          </Reveal>))}
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Personal projects" sub="Built alongside my degree.">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <TiltCard className="h-full">
              <motion.article variants={hoverLift} initial="rest" whileHover="hover" className="glass group relative h-full overflow-hidden p-7 transition-colors hover:border-accent/50">
                <div aria-hidden className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                <p className="text-xs sm:text-sm font-semibold text-accent">{p.category}</p><h3 className="mt-1 sm:mt-2 font-display text-2xl sm:text-3xl font-semibold text-white">{p.name}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-zinc-400">{p.period}</p><p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-zinc-400">{p.desc}</p>
                <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-sm text-zinc-300">{p.points.map(t => <li key={t} className="flex gap-2 sm:gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span>{t}</span></li>)}</ul>
                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">{p.tags.map(t => <span key={t} className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-white">{t}</span>)}</div>
                {p.link && <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6 group/btn"><ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />{p.link.includes('github') ? 'View on GitHub' : 'View Live Website ↗'}</motion.a>}
              </motion.article>
            </TiltCard>
          </Reveal>))}
      </div>
    </Section>
  )
}

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {certs.map((c, i) => <Reveal key={c.t} delay={i * 0.07}><motion.div variants={hoverLift} initial="rest" whileHover="hover" className="glass group flex h-full gap-4 sm:gap-5 p-5 sm:p-6">
          <Award className="mt-1 shrink-0 text-accent transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" size={28} /><div><h3 className="text-base sm:text-lg font-bold text-white">{c.t}</h3><p className="mt-1 text-sm text-zinc-400">{c.o}</p><p className="mt-1 sm:mt-2 text-sm font-medium text-accent">{c.y}</p></div></motion.div></Reveal>)}
      </div>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative space-y-4 border-l border-white/10 pl-6 sm:pl-8">
        <motion.div className="absolute -left-px top-0 w-px origin-top bg-accent" initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 1.2, ease: 'easeOut' }} />
        {education.map((e, i) => <motion.div key={e.t} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.1 }} whileHover={{ x: 4, transition: { duration: 0.2 } }} className="glass relative p-5 sm:p-6">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + (i * 0.1), type: 'spring' }} className="absolute -left-[36px] top-6 rounded-full bg-ink p-1 border border-accent text-accent sm:-left-[48px]"><GraduationCap size={16} className="sm:w-5 sm:h-5" /></motion.div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 sm:gap-3"><h3 className="font-display text-lg sm:text-xl font-bold text-white">{e.t}</h3><span className="text-sm sm:text-base font-semibold text-accent">{e.r}</span></div>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base font-medium text-zinc-300">{e.s}</p><p className="mt-1 text-xs sm:text-sm text-zinc-500">{e.y}</p></motion.div>)}
      </div>
    </Section>
  )
}
