import { Server, Bot, Rss, Cpu, Github, ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Project = {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  tech: string[]
  url: string | null
  featured?: boolean
}

export default function Projects() {
  const projects: Project[] = [
    {
      icon: Server,
      title: 'Chirpy',
      subtitle: 'Backend REST API · Go',
      featured: true,
      description:
        'A production-style microblogging API in Go: JWT auth with refresh-token rotation, bcrypt-hashed passwords, a type-safe SQLC data layer over PostgreSQL, Goose migrations, and a Polka webhook for premium upgrades.',
      tech: ['Go', 'PostgreSQL', 'SQLC', 'JWT', 'bcrypt', 'Webhooks'],
      url: 'https://github.com/BhavyaV29/chirpy',
    },
    {
      icon: Bot,
      title: 'CLI-Agent',
      subtitle: 'AI Coding Agent · Python',
      description:
        'A Python CLI agent that reads, patches, and runs code autonomously using Gemini function-calling in a plan–act–observe loop, capped at five iterations per task.',
      tech: ['Python', 'Gemini API', 'Function Calling', 'Agent Loop'],
      url: 'https://github.com/BhavyaV29/CLI-Agent',
    },
    {
      icon: Rss,
      title: 'Gator',
      subtitle: 'CLI RSS Aggregator · Go',
      description:
        'A terminal RSS aggregator with per-user feeds and a long-running worker that fetches the least-recently-updated feed on a ticker. PostgreSQL storage with a type-safe SQLC layer and Goose migrations.',
      tech: ['Go', 'PostgreSQL', 'SQLC', 'Goose'],
      url: 'https://github.com/BhavyaV29/Gator',
    },
    {
      icon: Cpu,
      title: 'Smart Food Waste Management',
      subtitle: 'Applied ML · Raspberry Pi',
      description:
        'A Raspberry Pi system that identifies users and estimates food waste using a load cell, dual cameras, HOG face recognition, and a YOLOv11 food-detection model.',
      tech: ['Python', 'YOLOv11', 'OpenCV', 'Raspberry Pi'],
      url: null,
    },
  ]

  return (
    <section id="projects" className="py-28 border-b border-border px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-primary mb-3">// projects</p>
        <h2 className="text-4xl font-bold mb-12 text-balance">Things I've built</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`card-glow relative flex flex-col rounded-xl border bg-card/40 p-6 ${
                project.featured ? 'border-primary/40' : 'border-border'
              }`}
            >
              {project.featured && (
                <span className="absolute right-4 top-4 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Featured
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center h-11 w-11 rounded-lg bg-primary/15 text-primary">
                  <project.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                  >
                    <Github className="h-4 w-4" /> View on GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    Academic project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
