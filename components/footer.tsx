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
              className="grid place-items-center h-10 w-10 rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/40"
            >
              <l.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          © {currentYear} Bhavya Vashisht — Backend &amp; Systems Engineer
        </p>
        <p className="text-xs text-muted-foreground/70">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
