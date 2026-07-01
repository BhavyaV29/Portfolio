'use client'

import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react'
import TerminalIntro from '@/components/terminal-intro'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[480px] w-[860px] max-w-[95vw] -translate-x-1/2 rounded-full opacity-25 blur-[130px]"
        style={{ background: 'radial-gradient(circle at center, oklch(0.82 0.22 148), transparent 70%)' }}
      />

      <div className="relative w-full max-w-3xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          available for backend &amp; applied-ai roles
        </div>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary">$</span> ./init --profile
          </p>
          <h1 className="text-primary text-glow text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Bhavya Vashisht
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Backend &amp; Systems Engineer — Go · Python
          </p>
        </div>

        <TerminalIntro />

        <div className="flex gap-3 justify-center pt-2 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:brightness-110 hover:-translate-y-0.5 shadow-lg shadow-primary/25"
          >
            <FileText className="h-4 w-4" /> resume
          </a>
          <a
            href="https://github.com/BhavyaV29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-primary/40 text-primary rounded-md font-medium transition-all hover:bg-primary/10 hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" /> github
          </a>
          <a
            href="https://www.linkedin.com/in/bhavya-vashisht-993079258"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-primary/40 text-primary rounded-md font-medium transition-all hover:bg-primary/10 hover:-translate-y-0.5"
          >
            <Linkedin className="h-4 w-4" /> linkedin
          </a>
          <a
            href="mailto:bhavyavashisht119@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 border border-primary/40 text-primary rounded-md font-medium transition-all hover:bg-primary/10 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" /> email
          </a>
        </div>

        <div className="pt-8 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
