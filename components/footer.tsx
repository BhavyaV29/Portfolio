import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { icon: Github, href: 'https://github.com/BhavyaV29', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bhavya-vashisht-993079258', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bhavyavashisht119@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              className="grid place-items-center h-10 w-10 rounded-md border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/50"
            >
              <l.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="text-primary/70"># </span>© {currentYear} Bhavya Vashisht — Backend &amp; ML-Platform Engineer
        </p>
        <p className="text-xs text-muted-foreground/70">$ built with next.js &amp; tailwind css</p>
      </div>
    </footer>
  )
}
