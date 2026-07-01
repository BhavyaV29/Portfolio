'use client'

import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-12%] h-[520px] w-[900px] max-w-[95vw] -translate-x-1/2 rounded-full opacity-30 blur-[130px]"
        style={{ background: 'radial-gradient(circle at center, oklch(0.55 0.2 259), transparent 70%)' }}
      />

      <div className="relative max-w-3xl mx-auto text-center space-y-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to backend &amp; applied-AI roles
        </div>

        <h1 className="text-gradient text-6xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.05]">
          Bhavya Vashisht
        </h1>
        <p className="text-xl md:text-2xl font-light text-foreground/80 text-balance">
          Backend &amp; Systems Engineer
        </p>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance leading-relaxed">
          I build APIs, CLIs, and developer tooling in Go and Python — with a
          growing focus on applied AI and ML systems.
        </p>

        <div className="flex gap-3 justify-center pt-4 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:brightness-110 hover:-translate-y-0.5 shadow-lg shadow-primary/25"
          >
            <FileText className="h-4 w-4" /> Resume
          </a>
          <a
            href="https://github.com/BhavyaV29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium transition-all hover:border-foreground/40 hover:-translate-y-0.5 hover:bg-card/60"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bhavya-vashisht-993079258"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium transition-all hover:border-foreground/40 hover:-translate-y-0.5 hover:bg-card/60"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="mailto:bhavyavashisht119@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium transition-all hover:border-foreground/40 hover:-translate-y-0.5 hover:bg-card/60"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>

        <div className="pt-10 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
