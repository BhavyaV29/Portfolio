import { Server, Bot, Rss, Cpu, Github, ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Project = {
  icon: LucideIcon
  title: string
  repo: string
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
      repo: '~/chirpy',
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
      repo: '~/cli-agent',
      subtitle: 'AI Coding Agent · Python',
      description:
        'A Python CLI agent that reads, patches, and runs code autonomously using Gemini function-calling in a plan–act–observe loop, capped at five iterations per task.',
      tech: ['Python', 'Gemini API', 'Function Calling', 'Agent Loop'],
      url: 'https://github.com/BhavyaV29/CLI-Agent',
    },
    {
      icon: Rss,
      title: 'Gator',
      repo: '~/gator',
      subtitle: 'CLI RSS Aggregator · Go',
      description:
        'A terminal RSS aggregator with per-user feeds and a long-running worker that fetches the least-recently-updated feed on a ticker. PostgreSQL storage with a type-safe SQLC layer and Goose migrations.',
      tech: ['Go', 'PostgreSQL', 'SQLC', 'Goose'],
      url: 'https://github.com/BhavyaV29/Gator',
    },
    {
      icon: Cpu,
      title: 'Smart Food Waste Management',
      repo: '~/smart-food-waste',
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
        <p className="text-sm text-primary mb-2">$ ls projects/</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`card-glow flex flex-col overflow-hidden rounded-lg border bg-card/50 ${
                project.featured ? 'border-primary/40' : 'border-border'
              }`}
            >
              {/* terminal title bar */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="ml-2 text-xs text-muted-foreground">{project.repo}</span>
                {project.featured && (
                  <span className="ml-auto text-xs text-primary">★ featured</span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                    <project.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>

                <p className="leading-relaxed text-muted-foreground">
                  <span className="text-primary/70">&#47;&#47; </span>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/90"
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
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                    >
                      <Github className="h-4 w-4" /> $ git clone
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      # academic project
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
