'use client'

import { useState } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">BV</div>
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className={`text-sm transition-colors ${
              activeSection === 'hero' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`text-sm transition-colors ${
              activeSection === 'skills' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`text-sm transition-colors ${
              activeSection === 'projects' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-sm transition-colors ${
              activeSection === 'contact' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  )
}
