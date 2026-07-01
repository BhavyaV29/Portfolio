'use client'

import { useEffect, useState } from 'react'
import { FileText } from 'lucide-react'

const sections = [
  { id: 'about', label: './about' },
  { id: 'skills', label: './skills' },
  { id: 'projects', label: './projects' },
  { id: 'contact', label: './contact' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const ids = ['hero', ...sections.map((s) => s.id)]
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-sm font-semibold tracking-tight"
        >
          <span className="text-primary">bhavya</span>
          <span className="text-muted-foreground">@dev</span>
          <span className="text-muted-foreground">:~$</span>
          <span className="cursor-blink text-primary"> ▋</span>
        </button>

        <div className="hidden sm:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`text-sm transition-colors ${
                activeSection === s.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 px-3.5 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
        >
          <FileText className="h-3.5 w-3.5" /> resume
        </a>
      </nav>
    </header>
  )
}
